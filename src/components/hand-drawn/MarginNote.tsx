"use client";

import { cn } from "@/lib/utils";

interface MarginNoteProps {
  children: React.ReactNode;
  side?: "left" | "right";
  className?: string;
  rotation?: number;
}

export function MarginNote({
  children,
  side = "right",
  className,
  rotation = -1.5,
}: MarginNoteProps) {
  return (
    <span
      className={cn(
        "text-hand-note absolute hidden lg:block",
        "max-w-[180px] leading-snug",
        side === "right" ? "right-0 translate-x-[110%]" : "left-0 -translate-x-[110%]",
        "top-0",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
