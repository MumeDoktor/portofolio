import Link from "next/link";

const sections = [
  { href: "/#experience", label: "./experience", desktopOnly: true },
  { href: "/#projects", label: "./projects" },
  { href: "/#about", label: "./about", desktopOnly: true },
  { href: "/#contact", label: "./contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-12 max-w-5xl items-center justify-between gap-4 px-4 text-sm sm:px-8">
        <Link href="/" className="font-bold whitespace-nowrap text-accent hover:underline">
          amar@portfolio:~$
        </Link>
        <ul className="flex items-center gap-4 sm:gap-6">
          {sections.map((s) => (
            <li key={s.href} className={s.desktopOnly ? "hidden sm:block" : undefined}>
              <Link href={s.href} className="text-muted hover:text-accent">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
