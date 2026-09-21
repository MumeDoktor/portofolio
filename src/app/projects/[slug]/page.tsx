import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Nav } from "@/components/Nav";
import { Counter } from "@/components/Counter";
import { ProjectAvatar } from "@/components/ProjectAvatar";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Spotlight } from "@/components/Spotlight";
import { ArrowIcon, StatusDot, Tag } from "@/components/ui";
import {
  getProject,
  projects,
  type ArchLayer,
  type Brief,
  type Challenge,
  type Stat,
  type FlowStep,
  type GalleryGroup,
  type Role,
  type Screenshot,
} from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: { title: project.title, description: project.tagline },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  // On team projects, what the system does and what I did need separate headings.
  const solo = project.role.startsWith("Solo");

  const meta = [
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Type", value: project.category },
  ];

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <article>
          <header className="pt-12 pb-14 sm:pt-20 sm:pb-20">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-fg"
            >
              <span aria-hidden>←</span> All work
            </Link>
            <div className="rise mt-10 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <StatusDot status={project.status} />
            </div>
            <div className="rise mt-6 flex items-center gap-4 [animation-delay:80ms] sm:gap-6">
              <ProjectAvatar project={project} size="lg" />
              <h1 className="font-serif text-[clamp(2.75rem,9vw,7rem)] leading-[0.92] tracking-tight">{project.title}</h1>
            </div>
            <p className="rise mt-6 max-w-3xl text-xl leading-relaxed text-muted [animation-delay:160ms] sm:text-2xl">
              {project.tagline}
            </p>
            {project.related && (
              <Link
                href={`/projects/${project.related.slug}`}
                className="rise mt-8 flex max-w-3xl flex-col gap-2 rounded-2xl border border-accent/40 bg-accent/[0.06] p-5 transition-colors [animation-delay:200ms] hover:border-accent"
              >
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent">
                  Part of the same system <ArrowIcon className="size-3.5" />
                </span>
                <span className="font-serif text-2xl leading-tight">{project.related.label}</span>
                <span className="text-sm leading-relaxed text-muted">{project.related.note}</span>
              </Link>
            )}

            {(project.links?.repo || project.links?.live || project.links?.store) && (
              <div className="rise mt-8 flex flex-wrap gap-3 [animation-delay:240ms]">
                {project.links?.store && (
                  <a
                    href={project.links.store}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-accent-fg"
                  >
                    Get it on Google Play <ArrowIcon />
                  </a>
                )}
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      project.links.store
                        ? "inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-fg"
                        : "inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-accent-fg"
                    }
                  >
                    {project.links.store ? "Visit website" : "Visit live site"} <ArrowIcon />
                  </a>
                )}
                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-fg"
                  >
                    Source code <ArrowIcon />
                  </a>
                )}
              </div>
            )}
          </header>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label} className="bg-bg p-5">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{m.label}</dt>
                <dd className="mt-2 text-sm leading-snug">{m.value}</dd>
              </div>
            ))}
            <div className="col-span-2 bg-bg p-5 sm:col-span-1">
              <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">Status</dt>
              <dd className="mt-2 text-sm">{project.status}</dd>
            </div>
          </dl>

          {project.brief && <BriefSection brief={project.brief} solo={solo} />}

          {project.stats && <StatsStrip stats={project.stats} />}

          {project.videos && (
            <section className="mt-16 sm:mt-24" aria-label="Product walkthrough">
              <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">
                Watch it run
                {project.videos.some((v) => v.hasSound) && <span className="text-accent"> · sound on</span>}
              </h2>
              {(() => {
                const portrait = project.videos.filter((v) => v.poster.height > v.poster.width);
                const mixed = portrait.length > 0 && portrait.length < project.videos.length;
                const layout = mixed
                  ? "grid items-start gap-8 lg:grid-cols-[19rem_1fr]"
                  : project.videos.length > 1
                    ? "grid gap-8 lg:grid-cols-2"
                    : "grid gap-10";
                return (
                  <div className={layout}>
                    {project.videos.map((v) => (
                      <figure
                        key={v.src}
                        className={
                          v.poster.height > v.poster.width && !mixed ? "mx-auto w-full max-w-[19rem]" : "w-full"
                        }
                      >
                        <video
                          controls
                          playsInline
                          preload="none"
                          poster={v.poster.src}
                          className="w-full rounded-2xl border border-line shadow-xl shadow-black/10"
                        >
                          <source src={v.src} type="video/mp4" />
                        </video>
                        <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">
                          {v.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                );
              })()}
            </section>
          )}

          {project.desktopFirst ? (
            <>
              <DesktopShots project={project.title} shots={project.desktop} />
              <PhoneShots project={project.title} groups={project.gallery} />
            </>
          ) : (
            <>
              <PhoneShots project={project.title} groups={project.gallery} />
              <DesktopShots project={project.title} shots={project.desktop} />
            </>
          )}

          <div className="grid gap-14 py-16 sm:py-24 lg:grid-cols-[1fr_20rem] lg:gap-20">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
                {solo ? "Overview" : "System overview"}
              </h2>
              {project.summary.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className={i === 0 ? "mt-5 font-serif text-2xl leading-snug sm:text-3xl" : "mt-5 text-lg leading-relaxed text-muted"}
                >
                  {para}
                </p>
              ))}

              {project.roles && <RolesSection roles={project.roles} />}

              {project.architecture && <ArchitectureSection layers={project.architecture} />}

              {project.flow && <FlowSection steps={project.flow} />}

              <section className="mt-16">
                <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
                  {solo ? "What I built" : "My contribution"}
                </h2>
                <ol className="mt-6 divide-y divide-line border-y border-line">
                  {project.highlights.map((h, i) => (
                    <Reveal
                      as="li"
                      key={h}
                      delay={Math.min(i, 6) * 40}
                      className="grid grid-cols-[2.5rem_1fr] gap-2 py-5 leading-relaxed"
                    >
                      <span className="font-mono text-xs text-accent tabular-nums pt-1">{String(i + 1).padStart(2, "0")}</span>
                      {h}
                    </Reveal>
                  ))}
                </ol>
              </section>

              {project.challenges && <ChallengesSection challenges={project.challenges} />}

              {project.learned && (
                <section className="mt-16">
                  <h2 className="font-mono text-xs uppercase tracking-widest text-muted">What I learned</h2>
                  <Spotlight as="ul" className="mt-6 grid gap-3 sm:grid-cols-2">
                    {project.learned.map((l) => (
                      <li key={l} className="spotlight flex gap-3 rounded-xl border border-line bg-surface/40 p-4 text-sm leading-relaxed">
                        <span className="text-accent" aria-hidden>
                          ✦
                        </span>
                        {l}
                      </li>
                    ))}
                  </Spotlight>
                </section>
              )}
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted">Stack</h2>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </aside>
          </div>
        </article>

        <Link
          href={`/projects/${next.slug}`}
          className="group mb-20 block border-t border-line pt-6 sm:mb-28"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted">Next project</span>
          <span className="mt-4 flex items-center justify-between gap-6">
            <span className="font-serif text-4xl leading-tight transition-colors group-hover:text-accent sm:text-6xl">
              {next.title}
            </span>
            <span className="grid size-14 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
              <ArrowIcon className="size-5" />
            </span>
          </span>
        </Link>
      </main>
      <Footer />
    </>
  );
}

function RolesSection({ roles }: { roles: Role[] }) {
  const user = roles.filter((r) => r.kind === "user");
  const staff = roles.filter((r) => r.kind === "staff");

  return (
    <section className="mt-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">Who uses it</h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
        Nobody declares their own status. A venue&apos;s staff confirm who its regulars are, and managers confirm who
        works there. Staff roles stack: each level can do everything below it, plus more.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_1.15fr]">
        {user.map((r) => (
          <div key={r.name} className="sm:self-start">
            <RoleCard role={r} label="Account" />
          </div>
        ))}
        <ol className="relative space-y-3" aria-label="Staff roles, lowest to highest access">
          {staff.map((r, i) => (
            <li key={r.name} className="relative">
              <RoleCard role={r} label={`Venue staff · level ${i + 1}`} level={(i + 1) / staff.length} />
              {i < staff.length - 1 && (
                <span className="absolute -bottom-3 left-6 h-3 w-px bg-accent/50" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function RoleCard({ role, label, level }: { role: Role; label: string; level?: number }) {
  return (
    <div className="h-full rounded-2xl border border-line bg-surface/40 p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-accent">{label}</span>
        {level !== undefined && (
          <span className="flex gap-0.5" aria-hidden>
            {[0, 1, 2].map((n) => (
              <span key={n} className={`h-1.5 w-4 rounded-full ${n < Math.round(level * 3) ? "bg-accent" : "bg-line"}`} />
            ))}
          </span>
        )}
      </div>
      <h3 className="mt-2 font-serif text-2xl leading-tight">{role.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{role.summary}</p>
      {role.titles && (
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Roles at this level">
          {role.titles.map((t) => (
            <li key={t} className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent">
              {t}
            </li>
          ))}
        </ul>
      )}
      <ul className="mt-4 space-y-1.5 text-sm">
        {role.can.map((c) => (
          <li key={c} className="flex gap-2.5 leading-snug">
            <span className="text-accent" aria-hidden>
              ✓
            </span>
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PhoneShots({ project, groups }: { project: string; groups?: GalleryGroup[] }) {
  if (!groups?.length) return null;
  return (
    <section className="mt-16 sm:mt-24" aria-label="Screens">
      <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
        Screens <span className="text-accent">· tap to enlarge</span>
      </h2>
      <Gallery project={project} groups={groups} />
    </section>
  );
}

function DesktopShots({ project, shots }: { project: string; shots?: Screenshot[] }) {
  if (!shots?.length) return null;
  const grid = shots.length > 1;
  return (
    <section className="mt-16 sm:mt-24" aria-label="Desktop screenshots">
      {grid && <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">On desktop</h2>}
      <div className={grid ? "grid gap-x-6 gap-y-10 sm:grid-cols-2" : undefined}>
        {shots.map((shot) => (
          <figure key={shot.caption}>
            <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-xl shadow-black/10">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3" aria-hidden>
                <span className="size-2.5 rounded-full bg-line" />
                <span className="size-2.5 rounded-full bg-line" />
                <span className="size-2.5 rounded-full bg-line" />
              </div>
              <Image
                src={shot.src}
                alt={`${project}: ${shot.caption}`}
                placeholder="blur"
                sizes={grid ? "(min-width: 1152px) 540px, (min-width: 640px) 50vw, 100vw" : "(min-width: 1152px) 1104px, 100vw"}
                className={grid ? "aspect-[16/10] w-full object-cover object-top" : "w-full"}
              />
            </div>
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function FlowSection({ steps }: { steps: (string | FlowStep)[] }) {
  const items = steps.map((st) => (typeof st === "string" ? { title: st } : st));
  const detailed = items.some((st) => st.detail);

  return (
    <section className="mt-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">How it flows</h2>
      {detailed ? (
        <ol className="mt-6">
          {items.map((st, i) => (
            <Reveal as="li" key={st.title} delay={i * 70} className="relative grid grid-cols-[2.25rem_1fr] gap-4 pb-8 last:pb-0">
              {i < items.length - 1 && (
                <span className="absolute top-9 bottom-0 left-[1.0625rem] w-px bg-line" aria-hidden />
              )}
              <span className="grid size-9 place-items-center rounded-full border border-line bg-surface font-mono text-xs text-accent">
                {i + 1}
              </span>
              <div className="pt-1.5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-medium leading-snug">{st.title}</h3>
                  {st.where && (
                    <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                      {st.where}
                    </span>
                  )}
                </div>
                {st.detail && <p className="mt-1.5 text-sm leading-relaxed text-muted">{st.detail}</p>}
              </div>
            </Reveal>
          ))}
        </ol>
      ) : (
        <ol className="mt-6 flex flex-wrap items-center gap-y-3">
          {items.map((st, i) => (
            <li key={st.title} className="flex items-center">
              <span className="rounded-lg border border-line bg-surface px-3.5 py-2 font-mono text-xs">
                <span className="mr-2 text-accent">{i + 1}</span>
                {st.title}
              </span>
              {i < items.length - 1 && (
                <span className="px-2 text-muted" aria-hidden>
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

function ArchitectureSection({ layers }: { layers: ArchLayer[] }) {
  return (
    <section className="mt-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">How it fits together</h2>
      <div className="mt-6 rounded-2xl border border-line p-4 sm:p-6">
        {layers.map((layer, li) => (
          <div key={layer.label}>
            {li > 0 && (
              <div className="flex justify-center py-2 text-accent" aria-hidden>
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </div>
            )}
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">{layer.label}</p>
            <Spotlight as="ul" className={`grid gap-2 ${layer.nodes.length > 1 ? "sm:grid-cols-2" : ""} ${layer.nodes.length > 2 ? "lg:grid-cols-3" : ""} ${layer.nodes.length > 3 ? "lg:grid-cols-4" : ""}`}>
              {layer.nodes.map((n) => (
                <li
                  key={n.name}
                  className={`spotlight rounded-xl border p-3.5 transition-transform duration-300 hover:-translate-y-0.5 ${n.mine ? "border-accent/60 bg-accent/[0.06]" : "border-line bg-surface/50"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-medium">{n.name}</span>
                    {n.mine && (
                      <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-fg">
                        {n.mine}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{n.detail}</p>
                </li>
              ))}
            </Spotlight>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * The short answer, before any screenshot: what the problem was, what I did
 * about it, what came of it, and where each part of the product stands.
 */
function BriefSection({ brief, solo }: { brief: Brief; solo: boolean }) {
  const rows = [
    { label: "The problem", value: brief.problem },
    { label: solo ? "What I did" : "My contribution", value: brief.contribution },
    { label: "Result", value: brief.result },
  ];

  return (
    <section className="mt-4" aria-label="Summary">
      <Spotlight className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {rows.map((r) => (
          <div key={r.label} className="spotlight bg-bg p-5">
            <h2 className="font-mono text-[11px] uppercase tracking-wider text-accent">{r.label}</h2>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{r.value}</p>
          </div>
        ))}
      </Spotlight>
      {brief.shipping && (
        <dl className="mt-3 flex flex-wrap gap-2">
          {brief.shipping.map((s) => (
            <div
              key={s.label}
              className="flex flex-wrap items-baseline gap-2 rounded-full border border-line px-4 py-2 text-sm"
            >
              <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}

function StatsStrip({ stats }: { stats: Stat[] }) {
  return (
    <Spotlight as="dl" className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
      {stats.map((st) => (
        <div key={st.label} className="spotlight bg-bg p-5">
          <dd className="font-serif text-3xl leading-none sm:text-4xl">
            <Counter value={st.value} />
          </dd>
          <dt className="mt-2 text-xs leading-snug text-muted">{st.label}</dt>
        </div>
      ))}
    </Spotlight>
  );
}

function ChallengesSection({ challenges }: { challenges: Challenge[] }) {
  return (
    <section className="mt-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">Challenges I solved</h2>
      <Spotlight as="ol" className="mt-6 space-y-4">
        {challenges.map((c, i) => (
          <Reveal
            as="li"
            key={c.problem}
            delay={i * 50}
            className="spotlight rounded-2xl border border-line p-5 transition-colors hover:border-fg/30"
          >
            <p className="flex gap-3 font-medium leading-snug">
              <span className="font-mono text-xs text-accent tabular-nums pt-0.5">{String(i + 1).padStart(2, "0")}</span>
              {c.problem}
            </p>
            <p className="mt-3 border-l-2 border-accent/60 pl-4 text-sm leading-relaxed text-muted sm:ml-7">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Solution · </span>
              {c.solution}
            </p>
          </Reveal>
        ))}
      </Spotlight>
    </section>
  );
}
