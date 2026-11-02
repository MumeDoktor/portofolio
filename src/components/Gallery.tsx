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
  // Index of each group's first shot, so the viewer can step across groups.
  const starts = groups.map((_, gi) => groups.slice(0, gi).reduce((n, g) => n + g.shots.length, 0));

  return (
    <div className="space-y-12">
      {groups.map((group, gi) => {
        const start = starts[gi];
        return (
          <section key={group.title} aria-label={group.title}>
            <h3 className="text-lg font-bold">
              {group.title} <span className="font-normal text-muted">({group.shots.length})</span>
            </h3>
            {group.description && <p className="mt-1 max-w-xl leading-relaxed text-muted">{group.description}</p>}
            <ul className="-mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-3 sm:mx-0 sm:scroll-px-0 sm:px-0">
              {group.shots.map((shot, i) => (
                <li key={shot.caption} className="w-40 shrink-0 snap-start sm:w-48">
                  <button
                    type="button"
                    onClick={() => setOpen(start + i)}
                    className="block w-full cursor-zoom-in text-left"
                    aria-label={`Enlarge: ${shot.caption}`}
                  >
                    <Image
                      src={shot.src}
                      alt={`${project}: ${shot.caption}`}
                      placeholder="blur"
                      sizes="(min-width: 640px) 192px, 160px"
                      style={{ aspectRatio: group.aspect ?? "393 / 852" }}
                      className="w-full rounded-lg border border-line object-cover object-top"
                    />
                    <span className="mt-2 block text-sm leading-snug text-muted">{shot.caption}</span>
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
        className="m-auto max-h-none max-w-none bg-transparent p-0 text-white backdrop:bg-black/90"
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
              className="h-auto max-h-[80dvh] w-auto max-w-[88vw] rounded-xl"
            />
            <figcaption className="flex w-full max-w-md items-center justify-between gap-3 text-sm">
              <button type="button" onClick={() => step(-1)} className="rounded-md border border-white/30 px-3 py-1.5 hover:bg-white/10" aria-label="Previous screen">
                ←
              </button>
              <span className="text-center">
                {open + 1} of {shots.length}: {current.caption}
              </span>
              <span className="flex gap-2">
                <button type="button" onClick={() => step(1)} className="rounded-md border border-white/30 px-3 py-1.5 hover:bg-white/10" aria-label="Next screen">
                  →
                </button>
                <button type="button" onClick={() => setOpen(null)} className="rounded-md border border-white/30 px-3 py-1.5 hover:bg-white/10" aria-label="Close">
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
