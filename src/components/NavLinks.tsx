"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Section = { href: string; label: string; desktopOnly?: boolean };

/** Nav links that underline whichever section is currently on screen. */
export function NavLinks({ sections }: { sections: Section[] }) {
  const pathname = usePathname();
  const [active, setActive] = useState("");

  useEffect(() => {
    if (pathname !== "/") return;
    const ids = sections.map((s) => s.href.split("#")[1]);
    const nodes = ids.map((id) => document.getElementById(id)).filter((n): n is HTMLElement => !!n);
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.01, 0.2, 0.5] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [pathname, sections]);

  return (
    <ul className="flex items-center font-mono text-[11px] uppercase tracking-wider text-muted sm:text-xs">
      {sections.map((s) => {
        const id = s.href.split("#")[1];
        const on = active === id;
        return (
          <li key={s.href} className={s.desktopOnly ? "hidden sm:block" : undefined}>
            <Link
              href={s.href}
              aria-current={on ? "true" : undefined}
              className={`relative rounded px-2 py-1 transition-colors hover:text-fg ${on ? "text-fg" : ""}`}
            >
              {s.label}
              <span
                className={`absolute inset-x-2 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${
                  on ? "scale-x-100" : "scale-x-0"
                }`}
                aria-hidden
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
