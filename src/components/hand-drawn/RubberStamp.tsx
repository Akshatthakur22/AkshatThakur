"use client";

import { cn } from "@/lib/utils";

interface RubberStampProps {
  text: string;
  className?: string;
  rotation?: number;
  variant?: "default" | "success" | "dream";
}

export function RubberStamp({
  text,
  className,
  rotation = -8,
  variant = "default",
}: RubberStampProps) {
  const colors = {
    default: "border-[var(--ink-blue)] text-[var(--ink-blue)]",
    success: "border-[var(--green-check)] text-[var(--green-check)]",
    dream: "border-[var(--pencil-gray)] text-[var(--pencil-gray)]",
  };

  return (
    <span
      className={cn(
        "inline-block px-3 py-1",
        "border-2 rounded-sm",
        "font-[var(--font-geist-sans)] text-xs font-extrabold uppercase tracking-widest",
        "opacity-70",
        colors[variant],
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden="true"
    >
      {text}
    </span>
  );
}
