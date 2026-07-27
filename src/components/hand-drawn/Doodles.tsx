"use client";

import { cn } from "@/lib/utils";

/**
 * Scrapbook decorative elements — physical stationery items
 * that make the page feel like a real handmade notebook.
 * 
 * Binder clips, tape, pushpins, small ink marks,
 * coffee rings, pencil smudges — the artifacts of making.
 */

interface DoodleProps {
  className?: string;
  style?: React.CSSProperties;
}

/** Binder clip SVG — holding something to the page */
export function BinderClip({ className, style }: DoodleProps) {
  return (
    <svg
      className={cn("pointer-events-none", className)}
      width="20"
      height="28"
      viewBox="0 0 20 28"
      fill="none"
      style={style}
      aria-hidden="true"
    >
      {/* Clip body */}
      <rect x="3" y="10" width="14" height="12" rx="1" fill="var(--gray-700)" opacity="0.6" />
      {/* Handles */}
      <path d="M 6 10 L 6 5 C 6 3, 8 2, 10 2 C 12 2, 14 3, 14 5 L 14 10" stroke="var(--gray-600)" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Highlight */}
      <rect x="5" y="12" width="10" height="1" rx="0.5" fill="var(--gray-500)" opacity="0.3" />
    </svg>
  );
}

/** Washi tape strip — translucent decorative tape */
export function TapeStrip({ className, style }: DoodleProps) {
  return (
    <div
      className={cn("pointer-events-none tape-strip", className)}
      style={{
        width: "48px",
        height: "14px",
        ...style,
      }}
      aria-hidden="true"
    />
  );
}

/** Red pushpin */
export function Pushpin({ className, style }: DoodleProps) {
  return (
    <div
      className={cn("pointer-events-none pushpin", className)}
      style={style}
      aria-hidden="true"
    />
  );
}

/** Small pencil scribble — like someone tested their pen */
export function PencilMark({ className, style }: DoodleProps) {
  return (
    <svg
      className={cn("pointer-events-none", className)}
      width="24"
      height="8"
      viewBox="0 0 24 8"
      fill="none"
      style={style}
      aria-hidden="true"
    >
      <path
        d="M 2 5 C 5 3, 8 6, 12 4 S 18 3, 22 5"
        stroke="var(--pencil-gray)"
        strokeWidth="0.7"
        fill="none"
        strokeLinecap="round"
        opacity="0.15"
      />
    </svg>
  );
}

/** Tiny star — like a doodle in margins */
export function TinyStar({ className, style }: DoodleProps) {
  return (
    <svg
      className={cn("pointer-events-none", className)}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      style={style}
      aria-hidden="true"
    >
      <path
        d="M 6 1 L 7 4.5 L 11 5 L 8 7.5 L 9 11 L 6 9 L 3 11 L 4 7.5 L 1 5 L 5 4.5 Z"
        stroke="var(--ink-blue)"
        strokeWidth="0.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.15"
      />
    </svg>
  );
}

/** Small arrow pointing */
export function SmallArrow({ className, style }: DoodleProps) {
  return (
    <svg
      className={cn("pointer-events-none", className)}
      width="28"
      height="14"
      viewBox="0 0 28 14"
      fill="none"
      style={style}
      aria-hidden="true"
    >
      <path
        d="M 2 8 C 8 6, 16 8, 22 6"
        stroke="var(--ink-blue)"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.18"
      />
      <path
        d="M 19 4 L 23 6 L 19 9"
        stroke="var(--ink-blue)"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.18"
      />
    </svg>
  );
}

/** Circle doodle — like circling something on a page */
export function CircleMark({ className, style }: DoodleProps) {
  return (
    <svg
      className={cn("pointer-events-none", className)}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      style={style}
      aria-hidden="true"
    >
      <ellipse
        cx="11"
        cy="11"
        rx="9"
        ry="8.5"
        stroke="var(--red-pen)"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.1"
        strokeDasharray="0"
      />
    </svg>
  );
}

/** Dot cluster — like ink splatter */
export function InkDots({ className, style }: DoodleProps) {
  return (
    <svg
      className={cn("pointer-events-none", className)}
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      style={style}
      aria-hidden="true"
    >
      <circle cx="4" cy="6" r="1.2" fill="var(--ink-blue)" opacity="0.08" />
      <circle cx="8" cy="4" r="0.8" fill="var(--ink-blue)" opacity="0.06" />
      <circle cx="12" cy="7" r="1" fill="var(--ink-blue)" opacity="0.07" />
      <circle cx="6" cy="9" r="0.6" fill="var(--ink-blue)" opacity="0.05" />
    </svg>
  );
}

/**
 * PageDoodles — scattered stationery artifacts fixed to the viewport.
 * Creates the scrapbook feel of a page that's been worked on.
 * 
 * Visible on md+ screens only. Mobile stays clean.
 */
export function PageDoodles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden hidden lg:block" aria-hidden="true">
      {/* Top-left: tape strip holding something */}
      <TapeStrip 
        className="absolute top-[6%] left-[5%]" 
        style={{ transform: "rotate(-8deg)" }} 
      />

      {/* Top-right: binder clip */}
      <BinderClip 
        className="absolute top-[4%] right-[10%]" 
        style={{ transform: "rotate(3deg)" }} 
      />

      {/* Left side scattered */}
      <PencilMark className="absolute top-[22%] left-[3%]" style={{ transform: "rotate(-3deg)" }} />
      <TinyStar className="absolute top-[35%] left-[4.5%]" style={{ transform: "rotate(12deg)" }} />
      <InkDots className="absolute top-[50%] left-[3%]" />

      {/* Right side */}
      <Pushpin className="absolute top-[28%] right-[5%]" />
      <SmallArrow className="absolute top-[42%] right-[4%]" style={{ transform: "rotate(-5deg)" }} />
      <TapeStrip 
        className="absolute top-[58%] right-[6%]" 
        style={{ transform: "rotate(5deg)", width: "36px", height: "12px" }} 
      />

      {/* Lower area */}
      <CircleMark className="absolute top-[68%] left-[5%]" style={{ transform: "rotate(-4deg)" }} />
      <PencilMark className="absolute top-[75%] right-[4%]" style={{ transform: "rotate(2deg)" }} />
      <TinyStar className="absolute top-[82%] left-[6%]" style={{ transform: "rotate(-15deg) scale(0.9)" }} />
      <Pushpin className="absolute top-[88%] right-[7%]" />
    </div>
  );
}
