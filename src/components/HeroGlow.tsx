"use client";

import { useEffect, useRef } from "react";

/**
 * A soft accent glow that drifts toward the pointer behind the hero, and
 * parallaxes slightly as the page scrolls. Purely decorative.
 */
export function HeroGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = 0.35, targetY = 0.3, x = targetX, y = targetY, frame = 0;
    const tick = () => {
      x += (targetX - x) * 0.06;
      y += (targetY - y) * 0.06;
      el.style.setProperty("--gx", `${(x * 100).toFixed(2)}%`);
      el.style.setProperty("--gy", `${(y * 100).toFixed(2)}%`);
      frame = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      targetX = e.clientX / window.innerWidth;
      targetY = Math.min(1, e.clientY / window.innerHeight);
    };
    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <div ref={ref} className="hero-glow pointer-events-none absolute inset-0" aria-hidden />;
}
