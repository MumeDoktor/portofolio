import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Nav } from "@/components/Nav";
import { ProjectAvatar } from "@/components/ProjectAvatar";
import { Section, StackLine } from "@/components/ui";
import {
  getProject,
  projects,
  type ArchLayer,
  type Brief,
  type Challenge,
  type Stat,
  type FlowStep,
  type GalleryGroup,
  type ProjectVideo,
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
    { label: "Status", value: project.status },
  ];

  const links = [
    project.links?.store && { href: project.links.store, label: "Get it on Google Play" },
    project.links?.live && { href: project.links.live, label: project.links.store ? "Website" : "Live site" },
    project.links?.repo && { href: project.links.repo, label: "Source code" },
  ].filter((l): l is { href: string; label: string } => Boolean(l));

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-4 sm:px-8">
        <article>
          <header className="pt-10 pb-10 sm:pt-14 sm:pb-14">
            <p className="text-sm">
              <Link href="/#projects" className="text-muted hover:text-accent">
                $ cd ../projects
              </Link>
            </p>
            <h1 className="glow mt-8 flex items-center gap-4 text-[clamp(1.75rem,5.5vw,3.25rem)] leading-[1.08] font-extrabold text-accent">
              <ProjectAvatar project={project} size="lg" />
              {project.title}
            </h1>
            <p className="mt-5 max-w-[46rem] text-lg leading-relaxed">{project.tagline}</p>
            {project.related && (
              <p className="mt-5 max-w-[44rem] leading-relaxed text-muted">
                Part of the same system as{" "}
                <Link href={`/projects/${project.related.slug}`} className="lnk">
                  {project.related.label}
                </Link>
                . {project.related.note}
              </p>
            )}
            {links.length > 0 && (
              <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="lnk">
                    {l.label}
                  </a>
                ))}
              </p>
            )}
          </header>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-dashed border-line py-6 sm:grid-cols-[2fr_1fr_1fr_1fr]">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-sm text-muted">{m.label}</dt>
                <dd className="mt-1 leading-snug">{m.value}</dd>
              </div>
            ))}
          </dl>

          {project.brief && <BriefSection brief={project.brief} solo={solo} />}

          {project.stats && <StatsSection stats={project.stats} />}

          {project.videos && <VideoSection videos={project.videos} />}

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

          <Section cmd="cat README.md" label={solo ? "Overview" : "System overview"}>
            <div className="max-w-[46rem] space-y-4 leading-relaxed">
              {project.summary.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Section>

          {project.roles && <RolesSection roles={project.roles} />}

          {project.architecture && <ArchitectureSection layers={project.architecture} />}

          {project.flow && <FlowSection steps={project.flow} />}

          <Section cmd="git log --author=amar" label={solo ? "What I built" : "My contribution"}>
            <ul className="term-list max-w-[46rem] space-y-3 leading-relaxed">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </Section>

          {project.challenges && <ChallengesSection challenges={project.challenges} />}

          {project.learned && (
            <Section cmd="cat learned.txt" label="What I learned">
              <ul className="term-list max-w-[46rem] space-y-3 leading-relaxed">
                {project.learned.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </Section>
          )}

          <Section cmd="cat package.json" label="Stack">
            <StackLine items={project.stack} className="max-w-[44rem] !text-base" />
          </Section>
        </article>

        <p className="border-t border-dashed border-line py-10 sm:py-14">
          <span className="block text-sm text-muted"># Next project in the log</span>
          <Link
            href={`/projects/${next.slug}`}
            className="lnk mt-2 inline-block text-xl font-bold sm:text-3xl"
          >
            {next.title}
          </Link>
        </p>
      </main>
      <Footer />
    </>
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
    ...(brief.shipping ?? []),
  ];

  return (
    <Section cmd="cat brief.md" label="In short">
      <dl className="max-w-[48rem] space-y-6">
        {rows.map((r) => (
          <div key={r.label}>
            <dt className="font-bold text-amber">{r.label}</dt>
            <dd className="mt-1 leading-relaxed">{r.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function StatsSection({ stats }: { stats: Stat[] }) {
  return (
    <Section cmd="stats --summary" label="In numbers">
      <dl className="grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-4">
        {stats.map((st) => (
          <div key={st.label}>
            <dd className="text-2xl font-bold text-accent tabular-nums">{st.value}</dd>
            <dt className="mt-1 text-sm leading-snug text-muted">{st.label}</dt>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Clip({ video, className }: { video: ProjectVideo; className?: string }) {
  return (
    <figure className={className}>
      <video
        controls
        playsInline
        preload="none"
        poster={video.poster.src}
        className="w-full rounded-md border border-line"
      >
        <source src={video.src} type="video/mp4" />
      </video>
      <figcaption className="mt-2 text-sm leading-snug text-muted">{video.caption}</figcaption>
    </figure>
  );
}

function VideoSection({ videos: all }: { videos: ProjectVideo[] }) {
  const wide = all.filter((v) => v.wide);
  const videos = all.filter((v) => !v.wide);
  const portrait = videos.filter((v) => v.poster.height > v.poster.width);
  const mixed = portrait.length > 0 && portrait.length < videos.length;
  const layout = mixed
    ? portrait.length > 1
      ? "grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-[19rem_19rem_1fr]"
      : "grid items-start gap-8 lg:grid-cols-[19rem_1fr]"
    : videos.length > 1
      ? "grid gap-8 lg:grid-cols-2"
      : "grid gap-10";

  return (
    <Section
      cmd="./demo --play"
      label={
        <>
          Watch it run
          {all.some((v) => v.hasSound) && <span className="font-normal text-muted"> (with sound)</span>}
        </>
      }
    >
      {wide.map((v) => (
        <Clip key={v.src} video={v} className="mb-8 w-full" />
      ))}
      <div className={layout}>
        {videos.map((v) => (
          <Clip
            key={v.src}
            video={v}
            className={v.poster.height > v.poster.width && !mixed ? "mx-auto w-full max-w-[19rem]" : "w-full"}
          />
        ))}
      </div>
    </Section>
  );
}

function PhoneShots({ project, groups }: { project: string; groups?: GalleryGroup[] }) {
  if (!groups?.length) return null;
  return (
    <Section
      cmd="ls screens/"
      label={
        <>
          Screens <span className="font-normal text-muted">(tap one to enlarge)</span>
        </>
      }
    >
      <Gallery project={project} groups={groups} />
    </Section>
  );
}

function DesktopShots({ project, shots }: { project: string; shots?: Screenshot[] }) {
  if (!shots?.length) return null;
  const grid = shots.length > 1;
  return (
    <Section cmd="ls desktop/" label="On desktop">
      <div className={grid ? "grid gap-x-6 gap-y-8 sm:grid-cols-2" : undefined}>
        {shots.map((shot) => (
          <figure key={shot.caption}>
            <Image
              src={shot.src}
              alt={`${project}: ${shot.caption}`}
              placeholder="blur"
              sizes={grid ? "(min-width: 1152px) 540px, (min-width: 640px) 50vw, 100vw" : "(min-width: 1152px) 1088px, 100vw"}
              className={`w-full rounded-md border border-line ${grid ? "aspect-[16/10] object-cover object-top" : ""}`}
            />
            <figcaption className="mt-2 text-sm leading-snug text-muted">{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function RolesSection({ roles }: { roles: Role[] }) {
  const user = roles.filter((r) => r.kind === "user");
  const staff = roles.filter((r) => r.kind === "staff");

  return (
    <Section cmd="cat roles.yaml" label="Who uses it">
      <p className="max-w-[44rem] leading-relaxed">
        Nobody declares their own status. A venue&apos;s staff confirm who its regulars are, and managers confirm who
        works there. Staff roles stack: each level can do everything below it, plus more.
      </p>
      <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        <div className="space-y-8">
          {user.map((r) => (
            <RoleBlock key={r.name} role={r} label="Account" />
          ))}
        </div>
        <ol className="space-y-8" aria-label="Staff roles, lowest to highest access">
          {staff.map((r, i) => (
            <li key={r.name}>
              <RoleBlock role={r} label={`Venue staff, level ${i + 1} of ${staff.length}`} />
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function RoleBlock({ role, label }: { role: Role; label: string }) {
  return (
    <div className="border-t border-line pt-4">
      <p className="text-sm text-muted">{label}</p>
      <h3 className="mt-0.5 text-lg font-bold">{role.name}</h3>
      <p className="mt-1 leading-relaxed">{role.summary}</p>
      {role.titles && <p className="mt-1 text-sm text-muted">{role.titles.join(", ")}</p>}
      <ul className="term-list mt-3 space-y-1 text-sm leading-relaxed">
        {role.can.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

function ArchitectureSection({ layers }: { layers: ArchLayer[] }) {
  return (
    <Section cmd="tree architecture/" label="How it fits together">
      {layers.map((layer, li) => (
        <div key={layer.label}>
          {li > 0 && (
            <p className="py-2 text-center text-muted" aria-hidden>
              ↓
            </p>
          )}
          <p className="mb-2 text-sm text-muted">{layer.label}</p>
          <ul
            className={`grid gap-2 ${layer.nodes.length > 1 ? "sm:grid-cols-2" : ""} ${layer.nodes.length > 2 ? "lg:grid-cols-3" : ""}`}
          >
            {layer.nodes.map((n) => (
              <li key={n.name} className={`border bg-surface p-3.5 ${n.mine ? "border-accent" : "border-line"}`}>
                <p className="font-semibold leading-snug">{n.name}</p>
                {n.mine && <p className="text-sm font-medium text-accent">{n.mine}</p>}
                <p className="mt-1 text-sm leading-relaxed text-muted">{n.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}

function FlowSection({ steps }: { steps: (string | FlowStep)[] }) {
  const items = steps.map((st) => (typeof st === "string" ? { title: st } : st));
  const detailed = items.some((st) => st.detail);

  return (
    <Section cmd="cat flow.log" label="How it flows">
      {detailed ? (
        <ol className="max-w-[44rem] space-y-5">
          {items.map((st, i) => (
            <li key={st.title} className="grid grid-cols-[1.75rem_1fr] gap-2">
              <span className="font-bold text-accent tabular-nums">{i + 1}.</span>
              <div>
                <h3 className="leading-snug font-bold">
                  {st.title}
                  {st.where && <span className="font-normal text-muted"> · {st.where}</span>}
                </h3>
                {st.detail && <p className="mt-1 leading-relaxed">{st.detail}</p>}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <ol className="flex max-w-[44rem] flex-wrap gap-x-2 gap-y-1 text-lg leading-relaxed">
          {items.map((st, i) => (
            <li key={st.title}>
              {st.title}
              {i < items.length - 1 && (
                <span className="pl-2 text-muted" aria-hidden>
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      )}
    </Section>
  );
}

function ChallengesSection({ challenges }: { challenges: Challenge[] }) {
  return (
    <Section cmd="cat fixed-bugs.md" label="Challenges I solved">
      <ol className="max-w-[44rem] divide-y divide-line">
        {challenges.map((c) => (
          <li key={c.problem} className="py-6 first:pt-0 last:pb-0">
            <h3 className="leading-snug font-bold text-amber">{c.problem}</h3>
            <p className="mt-2 leading-relaxed">{c.solution}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
