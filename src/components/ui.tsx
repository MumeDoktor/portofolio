import type { ReactNode } from "react";

export function SectionHeading({ index, title, kicker }: { index: string; title: ReactNode; kicker?: string }) {
  return (
    <div className="mb-10 flex flex-col gap-3 border-t border-line pt-6 sm:mb-14 sm:flex-row sm:items-baseline sm:justify-between">
      <h2 className="flex items-baseline gap-4 font-serif text-4xl leading-none sm:text-5xl">
        <span className="font-mono text-xs tracking-widest text-accent">{index}</span>
        {title}
      </h2>
      {kicker && <p className="max-w-sm text-sm text-muted sm:text-right">{kicker}</p>}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

export function StatusDot({ status }: { status: string }) {
  const color =
    status === "In progress" ? "bg-accent animate-pulse" : status === "Shipped" || status === "Delivered" || status === "Completed" ? "bg-emerald-500" : "bg-amber-400";
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">
      <span className={`size-1.5 rounded-full ${color}`} aria-hidden />
      {status}
    </span>
  );
}

export function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
