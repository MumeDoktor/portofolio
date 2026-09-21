"use client";

import type React from "react";
import { useRef, type ElementType, type ReactNode } from "react";

/**
 * Tracks the pointer inside the wrapper and exposes it as --mx / --my, so
 * children with the `spotlight` class can light up under the cursor.
 */
export function Spotlight({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);

  return (
    <Tag
      ref={ref}
      className={className}
      onPointerMove={(e: React.PointerEvent<HTMLElement>) => {
        const el = e.currentTarget;
        const card = (e.target as HTMLElement).closest<HTMLElement>(".spotlight") ?? el;
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      {children}
    </Tag>
  );
}
