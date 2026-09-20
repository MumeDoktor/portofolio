import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ProjectAvatar } from "@/components/ProjectAvatar";
import { ArrowIcon, SectionHeading, StatusDot, Tag } from "@/components/ui";
import { education, experience, languages, profile, skills } from "@/content/profile";
import { projects } from "@/content/projects";

export default function Home() {
  const [first, ...rest] = profile.name.split(" ");

  const stats = [
    { value: `${profile.yearsExperience}+`, label: "years of professional experience" },
    { value: String(projects.length), label: "projects shipped or in flight" },
    { value: String(profile.startedCodingAt), label: "age I started coding" },
  ];

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-20 sm:px-6 sm:pt-28 sm:pb-28">
            <p className="rise flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-widest text-muted">
              <span className="size-2 rounded-full bg-accent" aria-hidden />
              {profile.role}
              {profile.location && <span>· {profile.location}</span>}
            </p>
            {profile.availability && (
              <p className="rise mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" aria-hidden />
                {profile.availability}
              </p>
            )}
            <h1 className="rise mt-6 font-serif text-[clamp(3.5rem,13vw,10rem)] leading-[0.88] tracking-tight [animation-delay:80ms]">
              {first}
              <br />
              <span className="italic text-accent">{rest.join(" ")}</span>
            </h1>
            <p className="rise mt-8 max-w-2xl text-lg leading-relaxed text-muted [animation-delay:160ms] sm:text-xl">
              {profile.tagline}
            </p>
            <div className="rise mt-10 flex flex-wrap gap-3 [animation-delay:240ms]">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-accent-fg"
              >
                See my work <ArrowIcon />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-fg"
              >
                Get in touch
              </Link>
              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-fg"
                >
                  Download CV
                </a>
              )}
            </div>

            <dl className="rise mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-6 [animation-delay:320ms]">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-serif text-4xl sm:text-5xl">{s.value}</dd>
                  <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About + skills */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading index="01" title="About" />
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div className="space-y-6">
              {profile.about.map((para, i) => (
                <p
                  key={i}
                  className={i === 0 ? "font-serif text-2xl leading-snug sm:text-3xl" : "text-lg leading-relaxed text-muted"}
                >
                  {para}
                </p>
              ))}

              <div className="grid gap-4 pt-4 sm:grid-cols-[1.4fr_1fr]">
                <div className="rounded-2xl border border-line p-5">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted">Education</h3>
                  <ul className="mt-4 space-y-4">
                    {education.map((e) => (
                      <li key={e.school}>
                        <p className="font-medium leading-snug">{e.school}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{e.detail}</p>
                        <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-accent">{e.period}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-line p-5">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted">Languages</h3>
                  <ul className="mt-4 space-y-3">
                    {languages.map((l) => (
                      <li key={l.name} className="flex items-baseline justify-between gap-3">
                        <span className="font-medium">{l.name}</span>
                        <span className="text-sm text-muted">{l.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="self-start divide-y divide-line border-y border-line">
              {skills.map((g) => (
                <div key={g.group} className="grid gap-3 py-5 sm:grid-cols-[9rem_1fr]">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted sm:pt-1">{g.group}</h3>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-[15px]">
                    {g.items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading index="02" title="Experience" kicker="From teaching myself at 16 to building production apps." />
          <ol className="relative space-y-12 border-l border-line pl-6 sm:space-y-16 sm:pl-10">
            {experience.map((job) => (
              <li key={job.company + job.role} className="relative">
                <span
                  className="absolute top-2 -left-[calc(1.5rem+4.5px)] size-2 rounded-full bg-accent ring-4 ring-bg sm:-left-[calc(2.5rem+4.5px)]"
                  aria-hidden
                />
                <div className="grid gap-4 lg:grid-cols-[14rem_1fr] lg:gap-10">
                  <div className="font-mono text-xs uppercase tracking-wider text-muted lg:pt-2">
                    <p>{job.start === job.end ? job.start : `${job.start} — ${job.end}`}</p>
                    {job.location && <p className="mt-1 opacity-70">{job.location}</p>}
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl leading-tight sm:text-4xl">
                      {job.role} <span className="text-muted italic">at</span> {job.company}
                    </h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-muted">{job.summary}</p>
                    <ul className="mt-5 max-w-2xl space-y-2.5">
                      {job.points.map((pt) => (
                        <li key={pt} className="flex gap-3 leading-relaxed">
                          <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" aria-hidden />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {job.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                    {job.projects && (
                      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                        {job.projects.map((pr) => (
                          <Link
                            key={pr.slug}
                            href={`/projects/${pr.slug}`}
                            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent hover:underline hover:underline-offset-4"
                          >
                            {pr.label} <ArrowIcon className="size-3.5" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Projects, oldest first */}
        <section id="work" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading
            index="03"
            title="Projects"
            kicker="In the order I built them, up to what I'm working on now."
          />
          <ol className="divide-y divide-line border-y border-line">
            {projects.map((p, i) => (
              <li key={p.slug}>
                {/* Grouped by the year each project finished, unless timelineYear says otherwise. */}
                {(p.timelineYear ?? p.year.slice(-4)) !==
                  (projects[i - 1]?.timelineYear ?? projects[i - 1]?.year.slice(-4)) && (
                  <p className="flex items-center gap-4 pt-10 font-serif text-5xl text-accent sm:text-6xl" aria-hidden>
                    {p.timelineYear ?? p.year.slice(-4)}
                    <span className="h-px flex-1 bg-line" />
                  </p>
                )}
                <Link
                  href={`/projects/${p.slug}`}
                  className="group grid gap-4 py-8 transition-colors sm:grid-cols-[4rem_1fr_auto] sm:gap-8 sm:py-10"
                >
                  <span className="font-mono text-sm text-muted transition-colors group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <ProjectAvatar project={p} />
                      <h3 className="font-serif text-3xl leading-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-5xl">
                        {p.title}
                      </h3>
                      <StatusDot status={p.status} />
                    </div>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{p.tagline}</p>
                    {p.flow && (
                      <p className="mt-4 font-mono text-xs leading-relaxed text-muted">
                        {p.flow.map((step, j) => {
                          const title = typeof step === "string" ? step : step.title;
                          return (
                            <span key={title}>
                              {j > 0 && <span className="px-1.5 text-accent">→</span>}
                              {title}
                            </span>
                          );
                        })}
                      </p>
                    )}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 6).map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                    {!p.preview && p.desktop?.[0] && (
                      <div className="mt-8 max-w-3xl overflow-hidden rounded-xl border border-line shadow-lg shadow-black/10">
                        <Image
                          src={p.desktop[0].src}
                          alt={`${p.title}: ${p.desktop[0].caption}`}
                          placeholder="blur"
                          sizes="(min-width: 1024px) 768px, 100vw"
                          className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                        />
                      </div>
                    )}
                    {p.preview && (
                      <div className="mt-8 grid max-w-3xl grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
                        {p.preview
                          .slice(0, 4)
                          .map((shot, j) => (
                            <Image
                              key={shot.caption}
                              src={shot.src}
                              alt={`${p.title}: ${shot.caption}`}
                              placeholder="blur"
                              sizes="(min-width: 640px) 180px, 30vw"
                              className={`aspect-[393/852] w-full rounded-2xl border border-line object-cover object-top shadow-lg shadow-black/10 transition-transform duration-500 group-hover:-translate-y-1 ${j === 3 ? "hidden sm:block" : ""}`}
                              style={{ transitionDelay: `${j * 50}ms` }}
                            />
                          ))}
                      </div>
                    )}
                  </div>
                  <div className="flex items-start gap-3 font-mono text-sm text-muted sm:flex-col sm:items-end">
                    <span>{p.year}</span>
                    <span className="grid size-11 place-items-center rounded-full border border-line transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-32">
          <div className="border-t border-line pt-6">
            <p className="font-mono text-xs tracking-widest text-accent">04</p>
            <h2 className="mt-6 max-w-4xl font-serif text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
              Have something worth building? <span className="italic text-accent">Let&apos;s talk.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Based in {profile.location}, working in {languages.map((l) => l.name).join(" and ")}. {profile.availability}: mobile apps,
              web platforms and AI products.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
                >
                  {profile.email} <ArrowIcon />
                </a>
              )}
              {profile.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium transition-colors hover:border-fg"
                >
                  {l.label} <ArrowIcon />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
