/**
 * Builds a CV variant from master.yaml.
 *
 *   node build.mjs --variant=master     everything, no page limit
 *   node build.mjs --variant=general    the version you send to employers
 *   node build.mjs --variant=<name>     a targeted version, from variants.yaml
 *
 * Output: out/<variant>.html and out/<variant>.pdf
 *
 * The HTML is deliberately plain: one column, real text, no tables for layout,
 * no icons, no skill bars. That keeps it readable for a person and parsable by
 * a resume parser.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";
import { chromium } from "playwright-core";

const here = path.dirname(fileURLToPath(import.meta.url));
const arg = (name, fallback) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split("=").slice(1).join("=") : fallback;
};

const variantName = arg("variant", "general");
const master = parse(readFileSync(path.join(here, "master.yaml"), "utf8"));
const variantsPath = path.join(here, "variants.yaml");
const variants = existsSync(variantsPath) ? parse(readFileSync(variantsPath, "utf8")) : {};
const variant = variants[variantName];
if (!variant) throw new Error(`Unknown variant "${variantName}". Defined: ${Object.keys(variants).join(", ")}`);

const CHROME = path.join(
  process.env.LOCALAPPDATA ?? "",
  "ms-playwright",
  "chromium-1223",
  "chrome-win64",
  "chrome.exe",
);

// --- helpers ---------------------------------------------------------------

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const when = (value) => {
  if (!value) return "";
  if (typeof value !== "string") value = String(value);
  const m = value.match(/^(\d{4})-(\d{2})$/);
  return m ? `${MONTHS[Number(m[2]) - 1]} ${m[1]}` : value;
};
const range = (start, end) => `${when(start)} – ${end ? when(end) : "Present"}`;

/** Only text that is safe to publish: `pending` never ships. */
const publishable = (entry) => entry && entry.status !== "pending" && entry.status !== "dropped";

const bulletsFor = (item, ids) => {
  const all = [...(item.contribution ?? []), ...(item.bullets ?? [])].filter(publishable);
  if (!ids || ids === "all") return all.map((b) => b.text);
  return ids.map((i) => all[i]?.text).filter(Boolean);
};

const projectById = (id) => master.projects.find((p) => p.id === id);
const jobById = (id) => master.experience.find((e) => e.id === id);

// --- document --------------------------------------------------------------

const b = master.basics;
const linkedinLabel = "linkedin.com/in/amar-muminović";
const portfolioLabel = b.portfolio.replace(/^https?:\/\//, "");

const contactLine = [
  esc(b.location),
  `<a href="mailto:${esc(b.email)}">${esc(b.email)}</a>`,
  `<a href="${esc(b.portfolio)}">${esc(portfolioLabel)}</a>`,
  `<a href="${esc(b.github)}">github.com/MumeDoktor</a>`,
  `<a href="${esc(b.linkedin)}">${esc(linkedinLabel)}</a>`,
].join(" · ");

const experienceHtml = (variant.experience ?? [])
  .map((entry) => {
    const job = jobById(entry.id);
    if (!job) throw new Error(`No experience with id ${entry.id}`);
    // A variant may present one continuous role where master.yaml records two
    // (e.g. a promotion Amar does not want shown). Facts stay in master.yaml.
    const start = entry.start ?? job.start;
    const end = "end" in entry ? entry.end : job.end;
    const projects = (entry.projects ?? job.projects ?? []).map(projectById).filter(Boolean);
    const heading = entry.title ?? job.role;
    const projectLine = projects
      .map((p) => {
        const href = p.link?.startsWith("/") ? b.portfolio + p.link : p.link;
        return href ? `<a href="${esc(href)}">${esc(p.name)} — case study</a>` : esc(p.name);
      })
      .join(" · ");
    const bullets = (entry.bullets ?? [])
      .map((line) => `<li>${line}</li>`)
      .join("\n");
    return `
      <article class="entry">
        <div class="entry-head">
          <h3>${esc(heading)} — ${esc(job.company)}</h3>
          <span class="dates">${esc(range(start, end))}</span>
        </div>
        <p class="meta">${esc(job.location ?? "")}${entry.note ? " · " + esc(entry.note) : ""}</p>
        <ul>${bullets}</ul>
        ${projectLine ? `<p class="links">${projectLine}</p>` : ""}
      </article>`;
  })
  .join("\n");

const projectsHtml = (variant.projects ?? [])
  .map((entry) => {
    const p = projectById(entry.id);
    if (!p) throw new Error(`No project with id ${entry.id}`);
    const href = p.link?.startsWith("/") ? b.portfolio + p.link : p.link;
    const rawStatus =
      typeof p.status_of_product === "string"
        ? p.status_of_product
        : Object.entries(p.status_of_product ?? {})
            .map(([k, v]) => `${k}: ${v}`)
            .join(" · ");
    // "pending" is an internal marker and must never reach the document
    const status = rawStatus && !/pending/i.test(rawStatus) ? rawStatus : "";
    // `with` folds in bullets from the paired project shown under the same heading.
    const paired = entry.with ? bulletsFor(projectById(entry.with.id), entry.with.bullets) : [];
    const bullets = [...bulletsFor(p, entry.bullets), ...paired]
      .map((t) => `<li>${esc(t)}</li>`)
      .join("\n");
    return `
      <article class="entry">
        <div class="entry-head">
          <h3>${esc(p.name)}${entry.label ? ` — ${esc(entry.label)}` : ""}</h3>
          <span class="dates">${esc(String(p.year))}</span>
        </div>
        <p class="meta">${esc(p.role)}${status ? " · " + esc(status) : ""}</p>
        <ul>${bullets}</ul>
        <p class="links">
          ${href ? `<a href="${esc(href)}">Project details &amp; screenshots</a>` : ""}
          ${p.external?.store ? ` · <a href="${esc(p.external.store)}">Google Play</a>` : ""}
          ${p.external?.site ? ` · <a href="${esc(p.external.site)}">Live site</a>` : ""}
        </p>
        <p class="tech"><strong>Tech:</strong> ${esc((p.stack ?? []).join(" · "))}</p>
      </article>`;
  })
  .join("\n");

const skillsHtml = (variant.skills ?? [])
  .map((group) => {
    const g = master.skills[group.group];
    if (!g) throw new Error(`No skill group ${group.group}`);
    return `<p class="skill-row"><strong>${esc(group.label)}</strong> ${esc(g.items.join(", "))}</p>`;
  })
  .join("\n");

const educationHtml = master.education
  .map((e) => {
    const line = [e.qualification].filter((x) => x && x !== "pending").join(" · ");
    const date = e.end ? String(e.end) : e.status === "1st year, in progress" ? "Current" : "";
    return `
      <article class="entry tight">
        <div class="entry-head">
          <h3>${esc(e.school_en ?? e.school)}</h3>
          <span class="dates">${esc(date)}</span>
        </div>
        ${line ? `<p class="meta">${esc(line)}</p>` : ""}
        ${e.note ? `<p class="meta">${esc(e.note)}</p>` : ""}
      </article>`;
  })
  .join("\n");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(b.name)} — ${esc(variant.title ?? b.title)}</title>
<style>
  @page { size: A4; margin: 11mm 13mm; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: "Calibri", "Carlito", "Segoe UI", Arial, sans-serif;
    font-size: 10pt;
    line-height: 1.3;
    color: #16181d;
  }
  a { color: #1a4fa0; text-decoration: none; }
  header { margin-bottom: 9pt; }
  h1 { font-size: 20pt; margin: 0; letter-spacing: -0.2pt; }
  .role { font-size: 11.4pt; color: #333941; margin: 1pt 0 3pt; }
  .contact { font-size: 9.3pt; color: #333941; }
  h2 {
    font-size: 10pt; text-transform: uppercase; letter-spacing: 0.8pt;
    margin: 9pt 0 3pt; padding-bottom: 2pt; border-bottom: 0.8pt solid #b9bec7;
    /* never leave a section heading stranded at the foot of a page */
    break-after: avoid; page-break-after: avoid;
  }
  p, li { orphans: 2; widows: 2; }
  .summary { margin: 0; }
  .entry { margin: 0 0 5.5pt; break-inside: avoid; page-break-inside: avoid; }
  .entry.tight { margin-bottom: 4pt; }
  .entry-head { display: flex; justify-content: space-between; gap: 10pt; align-items: baseline; }
  h3 { font-size: 10.6pt; margin: 0; }
  .dates { font-size: 9.3pt; color: #333941; white-space: nowrap; }
  .meta { font-size: 9.5pt; color: #333941; margin: 1pt 0 3pt; font-style: italic; }
  ul { margin: 0 0 2pt; padding-left: 13pt; }
  li { margin-bottom: 1.2pt; }
  .links, .tech { font-size: 9.3pt; margin: 2pt 0 0; }
  .skill-row { margin: 0 0 2.5pt; }
  .skill-row strong { display: inline-block; min-width: 92pt; }
</style>
</head>
<body>
  <header>
    <h1>${esc(b.name)}</h1>
    <p class="role">${esc(variant.title ?? b.title)}</p>
    <p class="contact">${contactLine}</p>
  </header>

  <section>
    <h2>Summary</h2>
    <p class="summary">${esc(variant.summary)}</p>
  </section>

  <section>
    <h2>Experience</h2>
    ${experienceHtml}
  </section>

  <section>
    <h2>Projects</h2>
    ${projectsHtml}
  </section>

  <section>
    <h2>Technical Skills</h2>
    ${skillsHtml}
  </section>

  <section>
    <h2>Education &amp; Languages</h2>
    ${educationHtml}
    <p class="skill-row"><strong>Languages</strong> ${master.languages_spoken
      .map((l) => `${esc(l.name)} — ${esc(l.level)}`)
      .join(" · ")}</p>
  </section>
</body>
</html>`;

const outDir = path.join(here, "out");
mkdirSync(outDir, { recursive: true });
const htmlPath = path.join(outDir, `${variantName}.html`);
const pdfPath = path.join(outDir, `${variantName}.pdf`);
writeFileSync(htmlPath, html, "utf8");

const browser = await chromium.launch({ executablePath: CHROME });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "load" });
await page.pdf({ path: pdfPath, format: "A4", printBackground: true, preferCSSPageSize: true });
await browser.close();

// Count the pages the PDF actually has, rather than estimating from height:
// a stray third page holding one line is exactly what this catches.
const pdf = readFileSync(pdfPath, "latin1");
const pages = (pdf.match(/\/Type\s*\/Page[^s]/g) ?? []).length;

console.log(`built ${variantName}: ${path.relative(here, htmlPath)}, ${path.relative(here, pdfPath)} (${pages} A4 page(s))`);
if (variantName !== "master" && pages > 2) {
  console.warn(`  ⚠ ${pages} pages — the general CV should be 1–2. Trim before sending it out.`);
}
