import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex min-h-[70dvh] max-w-5xl flex-col justify-center px-4 sm:px-8">
        <p className="text-muted">
          <span className="text-accent">$</span> cat this-page
        </p>
        <h1 className="mt-3 text-2xl font-bold sm:text-4xl">404: no such file or directory</h1>
        <p className="mt-6">
          <Link href="/" className="lnk">
            cd ~
          </Link>
        </p>
      </main>
    </>
  );
}
