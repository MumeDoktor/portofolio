import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ProjectAvatar } from "@/components/ProjectAvatar";
import { Prompt } from "@/components/Prompt";
import { Section, StackLine } from "@/components/ui";
import { education, experience, languages, profile, skills } from "@/content/profile";
import { projects, type Project } from "@/content/projects";

export default function Home() {
  const current = projects.filter((p) => p.status === "In progress");
  const firstJob = experience[experience.length - 1];
  const github = profile.links.find((l) => l.label === "GitHub")?.href ?? "";

  const facts = [
    { label: "availability", value: profile.availability },
    { label: "location", value: profile.location },
    { label: "experience", value: `${profile.yearsExperience} years, since ${firstJob.start}` },
    { label: "studying", value: `${education[0].period}, ${education[0].detail}` },
  ];

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-4 sm:px-8">
        {/* Intro, as a terminal session */}
        <section className="py-8 sm:py-14">
          <div className="border border-line bg-surface">
            <p className="border-b border-line px-4 py-2 text-sm text-muted">amar@sarajevo: ~</p>
            <div className="p-4 sm:p-8">
              <p>
                <span className="text-accent">$</span> whoami
              </p>
              <h1 className="glow mt-3 text-[clamp(2rem,7vw,4rem)] leading-[1.05] font-extrabold text-accent">
                {profile.name}
              </h1>
              <p className="mt-3 text-lg text-amber sm:text-xl">{profile.role}</p>

              <p className="mt-8">
                <span className="text-accent">$</span> cat summary.txt
              </p>
              <p className="mt-2 max-w-[46rem] leading-relaxed">{profile.tagline}</p>

              <p className="mt-8">
                <span className="text-accent">$</span> status
              </p>
              <dl className="mt-2 space-y-2 sm:space-y-1">
                {current.length > 0 && (
                  <div className="sm:grid sm:grid-cols-[9rem_1fr]">
                    <dt className="text-muted">working on</dt>
                    <dd className="flex flex-wrap gap-x-4">
                      {current.map((p) => (
                        <Link key={p.slug} href={`/projects/${p.slug}`} className="lnk">
                          {p.title}
                        </Link>
                      ))}
                    </dd>
                  </div>
                )}
                {facts.map((f) => (
                  <div key={f.label} className="sm:grid sm:grid-cols-[9rem_1fr]">
                    <dt className="text-muted">{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8">
                <span className="text-accent">$</span> ls links/
              </p>
              <p className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                <a href={`mailto:${profile.email}`} className="lnk break-all">
                  {profile.email}
                </a>
                <a href={profile.cvUrl} download className="lnk">
                  cv.pdf
                </a>
                {profile.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="lnk">
                    {l.label.toLowerCase()}
                  </a>
                ))}
              </p>

              <Prompt
                projects={projects.map((p) => ({ slug: p.slug, title: p.title }))}
                email={profile.email}
                cvUrl={profile.cvUrl}
                github={github}
                whoami={`${profile.name}, ${profile.role}`}
              />
            </div>
          </div>
        </section>

        {/* Experience, newest first */}
        <Section id="experience" cmd="tail -r experience.log" label="Experience, newest first">
          <ol className="space-y-10">
            {experience.map((job) => (
              <li key={job.company + job.role} className="max-w-[50rem]">
                <p className="text-sm text-amber">
                  [{job.start} → {job.end}]{job.location && <span className="text-muted"> {job.location}</span>}
                </p>
                <h3 className="mt-1 text-lg leading-snug font-bold">
                  {job.role} <span className="text-accent">@ {job.company}</span>
                </h3>
                <p className="mt-3 leading-relaxed">{job.summary}</p>
                <ul className="term-list mt-3 space-y-2 leading-relaxed">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <StackLine items={job.stack} className="mt-3" />
                {job.projects && (
                  <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                    {job.projects.map((pr) => (
                      <Link key={pr.slug} href={`/projects/${pr.slug}`} className="lnk">
                        {pr.label}
                      </Link>
                    ))}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </Section>

        {/* Projects as a git log: current work on top, the first project at the bottom */}
        <Section id="projects" cmd="git log --graph projects/" label="Projects, from what I'm building now back to the first one">
          <ol className="border-l border-accent/50">
            {projects.map((p, i) => (
              <li key={p.slug} className="relative grid gap-x-6 gap-y-3 pb-10 pl-5 last:pb-0 sm:grid-cols-[1fr_9rem] sm:pl-7">
                <span aria-hidden className="absolute top-1.5 -left-[5px] size-[9px] bg-accent" />
                <div className="min-w-0">
                  <p className="text-sm">
                    <span className="text-amber">{p.year}</span>
                    {i === 0 && <span className="text-accent"> (HEAD -&gt; now)</span>}
                    {i === projects.length - 1 && <span className="text-accent"> (root)</span>}
                    <span className="text-muted"> [{p.status.toLowerCase()}]</span>
                  </p>
                  <h3 className="mt-1 flex items-center gap-2.5 text-lg leading-snug font-bold">
                    <ProjectAvatar project={p} size="sm" />
                    <Link href={`/projects/${p.slug}`} className="hover:text-accent">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-[42rem] leading-relaxed">{p.tagline}</p>
                  <p className="mt-1.5 text-sm text-muted">{p.role}</p>
                  <StackLine items={p.stack.slice(0, 6)} className="mt-1.5" />
                </div>
                <Thumb project={p} />
              </li>
            ))}
          </ol>
        </Section>

        <Section id="about" cmd="cat about.md" label="About">
          <div className="max-w-[46rem] space-y-4 leading-relaxed">
            {profile.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Section>

        <Section cmd="skills --list" label="Skills">
          <dl className="max-w-[50rem] space-y-3">
            {skills.map((g) => (
              <div key={g.group} className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="text-accent">{g.group}</dt>
                <dd className="leading-relaxed text-muted">{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section cmd="cat education.txt" label="Education">
          <ul className="max-w-[46rem] space-y-5">
            {education.map((e) => (
              <li key={e.school}>
                <p className="text-sm text-amber">[{e.period}]</p>
                <p className="mt-1 leading-snug font-bold">{e.school}</p>
                <p className="mt-1 leading-relaxed text-muted">{e.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-muted">languages: {languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(", ")}</p>
        </Section>

        <Section id="contact" cmd="./contact.sh" label="Contact">
          <p className="leading-relaxed text-muted">{profile.availability}. Email is the fastest way to reach me.</p>
          <p className="mt-3">
            <a href={`mailto:${profile.email}`} className="lnk text-[clamp(1rem,3.6vw,1.75rem)] font-bold break-all">
              {profile.email}
            </a>
          </p>
          <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {profile.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="lnk">
                {l.label.toLowerCase()}
              </a>
            ))}
            <a href={profile.cvUrl} download className="lnk">
              cv.pdf
            </a>
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}

/** A small look at the project. Projects with no screenshots show nothing. */
function Thumb({ project: p }: { project: Project }) {
  const phones = p.preview?.slice(0, 2);
  const desktop = p.desktop?.[0];
  const look = "border border-line object-cover object-top grayscale transition hover:grayscale-0";

  if (phones?.length) {
    return (
      <div className="flex gap-2 sm:justify-end" aria-hidden>
        {phones.map((shot) => (
          <Image key={shot.caption} src={shot.src} alt="" sizes="64px" className={`aspect-[393/852] w-16 ${look}`} />
        ))}
      </div>
    );
  }
  if (!desktop) return null;
  return <Image src={desktop.src} alt="" sizes="144px" className={`aspect-[16/10] w-36 self-start ${look}`} aria-hidden />;
}
