"use client";

import { cn } from "@/lib/utils";

interface StickyNoteProps {
  children: React.ReactNode;
  className?: string;
  rotation?: number;
  color?: "yellow" | "white";
}

export function StickyNote({
  children,
  className,
  rotation = -2,
  color = "yellow",
}: StickyNoteProps) {
  const bgColor = color === "yellow" ? "bg-[#FFFDE7]" : "bg-white";

  return (
    <div
      className={cn(
        "hand-sticker inline-block px-4 py-3 shadow-sm",
        bgColor,
        "font-[var(--font-caveat)] text-base text-[var(--dark-ink)]",
        "leading-relaxed",
        className
      )}
      style={{ "--rotation": `${rotation}deg` } as React.CSSProperties}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
