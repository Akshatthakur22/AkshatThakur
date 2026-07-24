"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function Hero() {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ═══════════════════════════════════════════
          BACKGROUND LAYER — Notebook page feel
          ═══════════════════════════════════════════ */}

      {/* Faint dot grid — barely visible notebook paper */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero-dots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="0.6" fill="var(--pencil-gray)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* ═══════════════════════════════════════════
          MAIN CONTENT — Two-column editorial
          ═══════════════════════════════════════════ */}
      <div className="content-container w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[80vh] py-24 lg:py-0">

          {/* ─── LEFT COLUMN: Typography ─── */}
          <div className="relative order-2 lg:order-1">
            {/* Page marker */}
            <span
              className={cn(
                "block font-[var(--font-caveat)] text-[var(--pencil-gray)] text-sm mb-10",
                "transition-all duration-1000 delay-200",
                isInView ? "opacity-50" : "opacity-0"
              )}
              aria-hidden="true"
            >
              pg. 01
            </span>

            {/* Name — Display scale, tight leading */}
            <h1
              className={cn(
                "font-[var(--font-geist-sans)] font-bold tracking-[-0.04em]",
                "text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.92]",
                "text-[var(--foreground)]",
                "transition-all duration-1000 delay-300 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              Akshat
              <br />
              Thakur
            </h1>

            {/* Philosophy — the only copy needed */}
            <div
              className={cn(
                "mt-10 max-w-[380px]",
                "transition-all duration-1000 delay-600 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
            >
              <p className="font-[var(--font-instrument-serif)] italic text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.4] text-[var(--gray-700)]">
                Every product begins as a sketch.
              </p>
              <p className="font-[var(--font-instrument-serif)] italic text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.4] text-[var(--gray-700)] mt-1">
                Mine become software.
              </p>
            </div>

            {/* Subtle hand-drawn underline */}
            <svg
              className={cn(
                "mt-6 overflow-visible",
                "transition-opacity duration-1000 delay-1000",
                isInView ? "opacity-100" : "opacity-0"
              )}
              width="140"
              height="8"
              viewBox="0 0 140 8"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 2 4 C 20 2.5, 45 5.5, 70 3.8 S 110 5, 138 4.2"
                stroke="var(--ink-blue)"
                strokeWidth="1.2"
                strokeLinecap="round"
                className={cn("hand-draw-path", isInView && "visible")}
                style={{ "--path-length": "140" } as React.CSSProperties}
              />
            </svg>

            {/* Role label — monospace, understated */}
            <p
              className={cn(
                "mt-8 text-[0.75rem] font-[var(--font-ibm-plex-mono)] text-[var(--gray-400)]",
                "tracking-[0.08em] uppercase",
                "transition-all duration-1000 delay-800 ease-out",
                isInView ? "opacity-100" : "opacity-0"
              )}
            >
              Software Engineer
            </p>
          </div>

          {/* ─── RIGHT COLUMN: Portrait + Annotations ─── */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Portrait container with notebook treatment */}
            <div
              className={cn(
                "relative w-[280px] h-[340px] sm:w-[320px] sm:h-[390px] lg:w-[380px] lg:h-[460px]",
                "transition-all duration-1200 delay-400 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              {/* ── Construction lines behind portrait ── */}
              <svg
                className={cn(
                  "absolute inset-0 w-full h-full pointer-events-none",
                  "transition-opacity duration-1500 delay-700",
                  isInView ? "opacity-100" : "opacity-0"
                )}
                viewBox="0 0 380 460"
                fill="none"
                aria-hidden="true"
              >
                {/* Vertical center guide */}
                <line
                  x1="190" y1="20" x2="190" y2="440"
                  stroke="var(--pencil-gray)"
                  strokeWidth="0.4"
                  opacity="0.15"
                  strokeDasharray="3 5"
                />
                {/* Horizontal golden ratio line */}
                <line
                  x1="30" y1="175" x2="350" y2="175"
                  stroke="var(--pencil-gray)"
                  strokeWidth="0.4"
                  opacity="0.12"
                  strokeDasharray="3 5"
                />
                {/* Outer measurement frame */}
                <rect
                  x="40" y="30" width="300" height="400"
                  stroke="var(--pencil-gray)"
                  strokeWidth="0.4"
                  opacity="0.08"
                  fill="none"
                  rx="2"
                />
                {/* Corner tick marks */}
                <path d="M 40 40 L 40 30 L 50 30" stroke="var(--pencil-gray)" strokeWidth="0.5" opacity="0.15" />
                <path d="M 340 40 L 340 30 L 330 30" stroke="var(--pencil-gray)" strokeWidth="0.5" opacity="0.15" />
                <path d="M 40 420 L 40 430 L 50 430" stroke="var(--pencil-gray)" strokeWidth="0.5" opacity="0.15" />
                <path d="M 340 420 L 340 430 L 330 430" stroke="var(--pencil-gray)" strokeWidth="0.5" opacity="0.15" />
                {/* Architectural circle — head proportion guide */}
                <circle
                  cx="190" cy="140"
                  r="65"
                  stroke="var(--pencil-gray)"
                  strokeWidth="0.35"
                  opacity="0.1"
                  fill="none"
                  strokeDasharray="2 4"
                />
                {/* Second proportion circle */}
                <circle
                  cx="190" cy="140"
                  r="95"
                  stroke="var(--pencil-gray)"
                  strokeWidth="0.25"
                  opacity="0.06"
                  fill="none"
                />
                {/* Small measurement ticks on left */}
                <line x1="32" y1="80" x2="38" y2="80" stroke="var(--pencil-gray)" strokeWidth="0.4" opacity="0.2" />
                <line x1="32" y1="140" x2="38" y2="140" stroke="var(--pencil-gray)" strokeWidth="0.4" opacity="0.2" />
                <line x1="32" y1="200" x2="38" y2="200" stroke="var(--pencil-gray)" strokeWidth="0.4" opacity="0.2" />
                <line x1="32" y1="260" x2="38" y2="260" stroke="var(--pencil-gray)" strokeWidth="0.4" opacity="0.2" />
                <line x1="32" y1="320" x2="38" y2="320" stroke="var(--pencil-gray)" strokeWidth="0.4" opacity="0.2" />
                <line x1="32" y1="380" x2="38" y2="380" stroke="var(--pencil-gray)" strokeWidth="0.4" opacity="0.2" />
              </svg>

              {/* ── Portrait image ── */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/akshat.png"
                  alt="Akshat Thakur — editorial portrait"
                  fill
                  priority
                  className="object-cover object-top grayscale"
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
                />
                {/* Fade-to-page gradient at bottom — blends into notebook */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[35%] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, var(--paper-warm) 0%, var(--paper-warm) 5%, transparent 100%)",
                  }}
                />
                {/* Subtle vignette at edges */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 50%, var(--paper-warm) 100%)",
                  }}
                />
              </div>

              {/* ══════════════════════════════════════
                  FIELD NOTES — Left margin stream
                  Reads like a vertical thought trail
                  ══════════════════════════════════════ */}
              <div
                className={cn(
                  "absolute top-4 -left-5 lg:-left-20 hidden sm:flex flex-col gap-[18px]",
                  "transition-all duration-[1400ms] delay-[900ms] ease-out",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                )}
                aria-hidden="true"
              >
                <span className="font-[var(--font-ibm-plex-mono)] text-[0.55rem] text-[var(--pencil-gray)] opacity-40 tracking-[0.12em] uppercase">
                  field notes
                </span>
                <span className="font-[var(--font-caveat)] text-[0.78rem] text-[var(--pencil-gray)] opacity-40" style={{ transform: "rotate(-0.8deg)" }}>
                  07 · 2026
                </span>
                <span className="font-[var(--font-caveat)] text-[0.75rem] text-[var(--pencil-gray)] opacity-35" style={{ transform: "rotate(0.5deg)" }}>
                  notice.
                </span>
                <span className="font-[var(--font-caveat)] text-[0.75rem] text-[var(--pencil-gray)] opacity-35" style={{ transform: "rotate(-0.3deg)" }}>
                  design.
                </span>
                <span className="font-[var(--font-caveat)] text-[0.75rem] text-[var(--pencil-gray)] opacity-35" style={{ transform: "rotate(0.7deg)" }}>
                  build.
                </span>

                {/* Small connecting line — like a margin rule */}
                <svg width="1" height="16" className="opacity-15 ml-3" aria-hidden="true">
                  <line x1="0.5" y1="0" x2="0.5" y2="16" stroke="var(--pencil-gray)" strokeWidth="0.5" strokeDasharray="2 3" />
                </svg>

                <span className="font-[var(--font-caveat)] text-[0.72rem] text-[var(--ink-blue)] opacity-30" style={{ transform: "rotate(-1deg)" }}>
                  still sketching...
                </span>
              </div>

              {/* ══════════════════════════════════════
                  RIGHT MARGIN — Process + coordinates
                  ══════════════════════════════════════ */}
              <div
                className={cn(
                  "absolute top-8 -right-4 lg:-right-20 hidden sm:flex flex-col gap-[16px] items-end",
                  "transition-all duration-[1400ms] delay-[1100ms] ease-out",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                )}
                aria-hidden="true"
              >
                <span className="font-[var(--font-ibm-plex-mono)] text-[0.55rem] text-[var(--pencil-gray)] opacity-35">
                  prototype_01
                </span>
                <span className="font-[var(--font-caveat)] text-[0.75rem] text-[var(--pencil-gray)] opacity-35" style={{ transform: "rotate(1deg)" }}>
                  ship.
                </span>
                <span className="font-[var(--font-caveat)] text-[0.75rem] text-[var(--pencil-gray)] opacity-35" style={{ transform: "rotate(0.3deg)" }}>
                  improve.
                </span>
                <span className="font-[var(--font-caveat)] text-[0.75rem] text-[var(--pencil-gray)] opacity-35" style={{ transform: "rotate(-0.5deg)" }}>
                  repeat.
                </span>

                <svg width="1" height="12" className="opacity-10 mr-3" aria-hidden="true">
                  <line x1="0.5" y1="0" x2="0.5" y2="12" stroke="var(--pencil-gray)" strokeWidth="0.5" strokeDasharray="1 3" />
                </svg>

                <span className="font-[var(--font-ibm-plex-mono)] text-[0.5rem] text-[var(--pencil-gray)] opacity-30 leading-relaxed text-right">
                  22.7196° N
                  <br />
                  75.8577° E
                </span>
              </div>

              {/* ══════════════════════════════════════
                  TOP — Header annotations
                  ══════════════════════════════════════ */}
              <span
                className={cn(
                  "absolute -top-7 left-3",
                  "font-[var(--font-caveat)] text-[0.78rem] text-[var(--pencil-gray)]",
                  "transition-all duration-1000 delay-[1000ms]",
                  isInView ? "opacity-40" : "opacity-0"
                )}
                style={{ transform: "rotate(-1.5deg)" }}
                aria-hidden="true"
              >
                idea → prototype → product
              </span>

              <span
                className={cn(
                  "absolute -top-7 right-3",
                  "font-[var(--font-ibm-plex-mono)] text-[0.55rem] text-[var(--pencil-gray)]",
                  "transition-all duration-1000 delay-[1050ms]",
                  isInView ? "opacity-35" : "opacity-0"
                )}
                style={{ transform: "rotate(1deg)" }}
                aria-hidden="true"
              >
                v∞
              </span>

              {/* ══════════════════════════════════════
                  BOTTOM — Grounding annotations
                  ══════════════════════════════════════ */}
              <span
                className={cn(
                  "absolute -bottom-9 left-3",
                  "font-[var(--font-caveat)] text-[0.72rem] text-[var(--pencil-gray)]",
                  "transition-all duration-1000 delay-[1400ms]",
                  isInView ? "opacity-35" : "opacity-0"
                )}
                style={{ transform: "rotate(-0.8deg)" }}
                aria-hidden="true"
              >
                made with curiosity.
              </span>

              <span
                className={cn(
                  "absolute -bottom-9 right-3",
                  "font-[var(--font-ibm-plex-mono)] text-[0.55rem] text-[var(--pencil-gray)]",
                  "transition-all duration-1000 delay-[1500ms]",
                  isInView ? "opacity-30" : "opacity-0"
                )}
                aria-hidden="true"
              >
                engineer
              </span>

              {/* ══════════════════════════════════════
                  CALL-FORWARD — bottom center
                  A single invitation to keep going
                  ══════════════════════════════════════ */}
              <span
                className={cn(
                  "absolute -bottom-16 left-1/2 -translate-x-1/2",
                  "font-[var(--font-caveat)] text-[0.8rem] text-[var(--ink-blue)]",
                  "transition-all duration-1000 delay-[1700ms]",
                  isInView ? "opacity-35" : "opacity-0"
                )}
                style={{ transform: "translateX(-50%) rotate(-1deg)" }}
                aria-hidden="true"
              >
                keep building →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          SCROLL INDICATOR — minimal, calm
          ═══════════════════════════════════════════ */}
      <div
        className={cn(
          "absolute bottom-10 left-1/2 -translate-x-1/2",
          "flex flex-col items-center gap-3",
          "transition-all duration-1000 delay-[1800ms]",
          isInView ? "opacity-40" : "opacity-0"
        )}
      >
        <span className="text-[0.65rem] font-[var(--font-ibm-plex-mono)] text-[var(--gray-400)] tracking-[0.15em] uppercase">
          scroll
        </span>
        <svg
          width="1"
          height="28"
          viewBox="0 0 1 28"
          fill="none"
          aria-hidden="true"
          className="hero-scroll-line"
        >
          <line
            x1="0.5" y1="0" x2="0.5" y2="28"
            stroke="var(--gray-300)"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}
