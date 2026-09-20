"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { GalleryGroup } from "@/content/projects";

export function Gallery({ project, groups }: { project: string; groups: GalleryGroup[] }) {
  const shots = groups.flatMap((g) => g.shots);
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  const step = (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + shots.length) % shots.length));
  const current = open === null ? null : shots[open];
  // Index of each group's first shot, so numbering runs across groups.
  const starts = groups.map((_, gi) => groups.slice(0, gi).reduce((n, g) => n + g.shots.length, 0));

  return (
    <div className="space-y-14">
      {groups.map((group, gi) => {
        const start = starts[gi];
        return (
          <section key={group.title} aria-label={group.title}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-2xl sm:text-3xl">{group.title}</h3>
              <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-muted">
                {group.shots.length} screens
              </span>
            </div>
            {group.description && <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">{group.description}</p>}
            <ul className="-mx-4 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-3 sm:mx-0 sm:scroll-px-0 sm:px-0">
              {group.shots.map((shot, i) => (
                <li key={shot.caption} className="w-40 shrink-0 snap-start sm:w-48 lg:w-[12.75rem]">
                  <button
                    type="button"
                    onClick={() => setOpen(start + i)}
                    className="group block w-full cursor-zoom-in text-left"
                    aria-label={`Enlarge: ${shot.caption}`}
                  >
                    <Image
                      src={shot.src}
                      alt={`${project}: ${shot.caption}`}
                      placeholder="blur"
                      sizes="(min-width: 1024px) 204px, (min-width: 640px) 192px, 160px"
                      style={{ aspectRatio: group.aspect ?? "393 / 852" }}
                      className="w-full rounded-[1.5rem] border border-line object-cover object-top shadow-lg shadow-black/10 transition-transform duration-300 group-hover:-translate-y-1"
                    />
                    <span className="mt-3 block font-mono text-[11px] uppercase leading-snug tracking-wider text-muted transition-colors group-hover:text-fg">
                      <span className="mr-1.5 text-accent">{String(start + i + 1).padStart(2, "0")}</span>
                      {shot.caption}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialog.current && setOpen(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-auto max-h-none max-w-none bg-transparent p-0 text-white backdrop:bg-black/85 backdrop:backdrop-blur-sm"
        aria-label="Screenshot viewer"
      >
        {current && open !== null && (
          <figure className="flex flex-col items-center gap-4 p-4">
            <Image
              key={open}
              src={current.src}
              alt={`${project}: ${current.caption}`}
              placeholder="blur"
              sizes="440px"
              className="h-auto max-h-[80dvh] w-auto max-w-[88vw] rounded-[2rem]"
            />
            <figcaption className="flex w-full max-w-md items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider">
              <button type="button" onClick={() => step(-1)} className="rounded-full border border-white/25 px-3 py-2 hover:bg-white/10" aria-label="Previous screen">
                ←
              </button>
              <span className="text-center">
                <span className="text-[#ff6b2c]">
                  {open + 1} / {shots.length}
                </span>{" "}
                {current.caption}
              </span>
              <span className="flex gap-2">
                <button type="button" onClick={() => step(1)} className="rounded-full border border-white/25 px-3 py-2 hover:bg-white/10" aria-label="Next screen">
                  →
                </button>
                <button type="button" onClick={() => setOpen(null)} className="rounded-full border border-white/25 px-3 py-2 hover:bg-white/10" aria-label="Close">
                  ✕
                </button>
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </div>
  );
}
