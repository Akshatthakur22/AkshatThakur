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
      className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-8 lg:pt-0 lg:pb-0 lg:h-screen"
    >
      {/* Main content — two-column editorial */}
      <div className="content-container w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

          {/* LEFT: Typography */}
          <div className="relative order-2 lg:order-1 text-center lg:text-left">
            {/* Name */}
            <h1
              className={cn(
                "font-[var(--font-geist-sans)] font-bold tracking-[-0.04em]",
                "text-[clamp(2.2rem,5.5vw,5rem)] leading-[0.92]",
                "text-[var(--foreground)]",
                "transition-all duration-1000 delay-200 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
            >
              Akshat
              <br />
              Thakur
            </h1>

            {/* Philosophy */}
            <p
              className={cn(
                "mt-6 sm:mt-8 max-w-[340px] mx-auto lg:mx-0",
                "font-[var(--font-instrument-serif)] italic",
                "text-[clamp(1rem,1.6vw,1.35rem)] leading-[1.45] text-[var(--gray-600)]",
                "transition-all duration-1000 delay-500 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              Every product begins as a sketch.
              <br />
              Mine become software.
            </p>

            {/* Role — monospace */}
            <p
              className={cn(
                "mt-5 sm:mt-6 text-[0.7rem] font-[var(--font-ibm-plex-mono)] text-[var(--gray-400)]",
                "tracking-[0.08em] uppercase",
                "transition-all duration-1000 delay-700 ease-out",
                isInView ? "opacity-100" : "opacity-0"
              )}
            >
              Software Engineer
            </p>

            {/* Hand-drawn underline */}
            <svg
              className={cn(
                "mt-4 sm:mt-5 overflow-visible mx-auto lg:mx-0",
                "transition-opacity duration-1000 delay-[900ms]",
                isInView ? "opacity-100" : "opacity-0"
              )}
              width="100"
              height="6"
              viewBox="0 0 100 6"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 2 3 C 15 1.8, 35 4.2, 50 3 S 80 4, 98 3.2"
                stroke="var(--ink-blue)"
                strokeWidth="1"
                strokeLinecap="round"
                className={cn("hand-draw-path", isInView && "visible")}
                style={{ "--path-length": "100" } as React.CSSProperties}
              />
            </svg>
          </div>

          {/* RIGHT: Portrait with construction drawing language */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className={cn(
                "relative w-[180px] h-[225px] sm:w-[240px] sm:h-[300px] md:w-[280px] md:h-[350px] lg:w-[340px] lg:h-[420px]",
                "transition-all duration-1000 delay-300 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              {/* ═══ CONSTRUCTION DRAWING: proportion guides ═══ */}
              <svg
                className={cn(
                  "absolute inset-0 w-full h-full pointer-events-none hidden sm:block",
                  "transition-opacity duration-[1600ms] delay-[800ms]",
                  isInView ? "opacity-100" : "opacity-0"
                )}
                viewBox="0 0 340 420"
                fill="none"
                aria-hidden="true"
              >
                {/* Outer frame — architectural crop marks */}
                <path d="M 28 32 L 28 20 L 40 20" stroke="var(--ink-blue)" strokeWidth="0.7" opacity="0.3" />
                <path d="M 312 32 L 312 20 L 300 20" stroke="var(--ink-blue)" strokeWidth="0.7" opacity="0.3" />
                <path d="M 28 388 L 28 400 L 40 400" stroke="var(--ink-blue)" strokeWidth="0.7" opacity="0.3" />
                <path d="M 312 388 L 312 400 L 300 400" stroke="var(--ink-blue)" strokeWidth="0.7" opacity="0.3" />

                {/* Vertical center axis */}
                <line
                  x1="170" y1="15" x2="170" y2="405"
                  stroke="var(--ink-blue)"
                  strokeWidth="0.4"
                  opacity="0.12"
                  strokeDasharray="4 8"
                />

                {/* Horizontal golden section line */}
                <line
                  x1="25" y1="160" x2="315" y2="160"
                  stroke="var(--ink-blue)"
                  strokeWidth="0.4"
                  opacity="0.1"
                  strokeDasharray="4 8"
                />

                {/* Proportion circle */}
                <circle
                  cx="170" cy="130" r="55"
                  stroke="var(--ink-blue)"
                  strokeWidth="0.5"
                  opacity="0.12"
                  fill="none"
                  strokeDasharray="2 5"
                />

                {/* Measurement ticks — left edge */}
                <line x1="20" y1="80" x2="26" y2="80" stroke="var(--ink-blue)" strokeWidth="0.6" opacity="0.25" />
                <line x1="20" y1="160" x2="26" y2="160" stroke="var(--ink-blue)" strokeWidth="0.6" opacity="0.25" />
                <line x1="20" y1="240" x2="26" y2="240" stroke="var(--ink-blue)" strokeWidth="0.6" opacity="0.25" />
                <line x1="20" y1="320" x2="26" y2="320" stroke="var(--ink-blue)" strokeWidth="0.6" opacity="0.25" />

                {/* Dimension arrow — right side */}
                <line x1="320" y1="32" x2="320" y2="390" stroke="var(--ink-blue)" strokeWidth="0.4" opacity="0.15" />
                <path d="M 318 32 L 320 28 L 322 32" stroke="var(--ink-blue)" strokeWidth="0.5" opacity="0.2" fill="none" />
                <path d="M 318 390 L 320 394 L 322 390" stroke="var(--ink-blue)" strokeWidth="0.5" opacity="0.2" fill="none" />
              </svg>

              {/* Portrait image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/akshat.png"
                  alt="Portrait of Akshat Thakur, software engineer based in Indore, India"
                  fill
                  priority
                  className="object-cover object-top grayscale"
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 240px, (max-width: 1024px) 280px, 340px"
                />
                {/* Bottom fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, var(--paper-warm) 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* ═══ FIELD NOTES — hidden on small mobile ═══ */}

              {/* Left: technical label */}
              <div
                className={cn(
                  "absolute top-4 -left-4 lg:-left-20 hidden md:flex flex-col gap-3",
                  "transition-all duration-[1400ms] delay-[1000ms] ease-out",
                  isInView ? "opacity-100" : "opacity-0"
                )}
                aria-hidden="true"
              >
                <span className="font-[var(--font-ibm-plex-mono)] text-[0.5rem] text-[var(--ink-blue)] opacity-50 tracking-[0.12em] uppercase">
                  field notes
                </span>
                <span className="font-[var(--font-caveat)] text-[0.75rem] text-[var(--ink-blue)] opacity-45" style={{ transform: "rotate(-0.5deg)" }}>
                  prototype_01
                </span>
              </div>

              {/* Right: scale/coordinates */}
              <div
                className={cn(
                  "absolute top-6 -right-3 lg:-right-16 hidden md:flex flex-col gap-2 items-end",
                  "transition-all duration-[1400ms] delay-[1200ms] ease-out",
                  isInView ? "opacity-100" : "opacity-0"
                )}
                aria-hidden="true"
              >
                <span className="font-[var(--font-ibm-plex-mono)] text-[0.5rem] text-[var(--ink-blue)] opacity-40">
                  scale 1:1
                </span>
                <span className="font-[var(--font-ibm-plex-mono)] text-[0.5rem] text-[var(--ink-blue)] opacity-35 leading-relaxed text-right mt-2">
                  22.7196° N<br />75.8577° E
                </span>
              </div>

              {/* Bottom: still sketching */}
              <span
                className={cn(
                  "absolute -bottom-8 left-1 hidden sm:inline",
                  "font-[var(--font-caveat)] text-[0.8rem] text-[var(--ink-blue)]",
                  "transition-opacity duration-1000 delay-[1400ms]",
                  isInView ? "opacity-40" : "opacity-0"
                )}
                style={{ transform: "rotate(-1deg)" }}
                aria-hidden="true"
              >
                still sketching...
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={cn(
          "absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2",
          "transition-opacity duration-1000 delay-[1600ms]",
          isInView ? "opacity-40" : "opacity-0"
        )}
        aria-hidden="true"
      >
        <svg width="1" height="32" className="hero-scroll-line">
          <line x1="0.5" y1="0" x2="0.5" y2="32" stroke="var(--pencil-gray)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
