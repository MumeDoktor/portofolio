import Link from "next/link";
import { profile } from "@/content/profile";
import { ThemeToggle } from "./ThemeToggle";

const sections = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience", desktopOnly: true },
  { href: "/#work", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full bg-fg font-mono text-xs font-semibold tracking-tight text-bg transition-colors group-hover:bg-accent group-hover:text-accent-fg">
            {initials}
          </span>
          <span className="hidden text-sm font-medium sm:block">{profile.name}</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="flex items-center font-mono text-[11px] uppercase tracking-wider text-muted sm:text-xs">
            {sections.map((s) => (
              <li key={s.href} className={s.desktopOnly ? "hidden sm:block" : undefined}>
                <Link href={s.href} className="rounded px-2 py-1 transition-colors hover:text-fg">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
