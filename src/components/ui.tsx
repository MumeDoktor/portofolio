import type { ReactNode } from "react";

/** A page section headed like a shell command, with the plain name as a comment under it. */
export function Section({
  cmd,
  label,
  id,
  children,
}: {
  cmd: string;
  label: ReactNode;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-dashed border-line py-10 sm:py-14">
      <h2 className="mb-7">
        <span className="block font-bold text-fg">
          <span className="text-accent">$</span> {cmd}
        </span>
        <span className="mt-1 block text-sm text-muted"># {label}</span>
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

/** Technology names, written the way a package list prints. */
export function StackLine({ items, className = "" }: { items: string[]; className?: string }) {
  return <p className={`text-sm leading-relaxed text-muted ${className}`}>{items.join(" · ")}</p>;
}
