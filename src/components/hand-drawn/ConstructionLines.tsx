"use client";

import { cn } from "@/lib/utils";

interface ConstructionLinesProps {
  className?: string;
  variant?: "grid" | "crosshair" | "guides";
}

export function ConstructionLines({
  className,
  variant = "crosshair",
}: ConstructionLinesProps) {
  if (variant === "crosshair") {
    return (
      <svg
        className={cn("absolute pointer-events-none opacity-[0.06]", className)}
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
      >
        <line x1="60" y1="0" x2="60" y2="120" stroke="var(--pencil-gray)" strokeWidth="0.5" />
        <line x1="0" y1="60" x2="120" y2="60" stroke="var(--pencil-gray)" strokeWidth="0.5" />
        <circle cx="60" cy="60" r="20" stroke="var(--pencil-gray)" strokeWidth="0.5" />
        <circle cx="60" cy="60" r="50" stroke="var(--pencil-gray)" strokeWidth="0.3" />
      </svg>
    );
  }

  if (variant === "guides") {
    return (
      <svg
        className={cn("absolute pointer-events-none opacity-[0.04]", className)}
        width="200"
        height="300"
        viewBox="0 0 200 300"
        fill="none"
        aria-hidden="true"
      >
        <line x1="0" y1="50" x2="200" y2="50" stroke="var(--pencil-gray)" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="0" y1="150" x2="200" y2="150" stroke="var(--pencil-gray)" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="0" y1="250" x2="200" y2="250" stroke="var(--pencil-gray)" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="100" y1="0" x2="100" y2="300" stroke="var(--pencil-gray)" strokeWidth="0.3" strokeDasharray="2 6" />
      </svg>
    );
  }

  // Grid variant
  return (
    <svg
      className={cn("absolute pointer-events-none opacity-[0.03]", className)}
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>
        <pattern id="dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="0.8" fill="var(--pencil-gray)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-grid)" />
    </svg>
  );
}
