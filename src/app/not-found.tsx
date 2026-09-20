import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex min-h-[70dvh] max-w-6xl flex-col justify-center px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-4 font-serif text-6xl leading-none sm:text-8xl">Nothing here.</h1>
        <Link href="/" className="mt-8 font-mono text-sm text-muted underline underline-offset-4 hover:text-fg">
          Back to the homepage
        </Link>
      </main>
    </>
  );
}
