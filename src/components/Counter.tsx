"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to a number when it scrolls into view. Any non-digit parts of the
 * label (a "+", "~", a year range) are kept exactly as written.
 */
export function Counter({ value }: { value: string }) {
  const match = value.match(/^(\D*)([\d,.]+)([\s\S]*)$/);
  const target = match ? Number(match[2].replace(/[,.]/g, "")) : NaN;
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(Number.isNaN(target) ? -1 : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el || Number.isNaN(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setShown(target));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const duration = 900;
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(target * eased));
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  if (Number.isNaN(target)) return <span>{value}</span>;

  const grouped = match![2].includes(",");
  const text = grouped ? shown.toLocaleString("en-US") : String(shown);
  return (
    <span ref={ref} className="tabular-nums">
      {match![1]}
      {text}
      {match![3]}
    </span>
  );
}
