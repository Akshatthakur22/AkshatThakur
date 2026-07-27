"use client";

import { futureContent } from "@/content/data";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ChapterLabel } from "@/components/ui/ChapterLabel";

export function Future() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="future"
      ref={ref}
      className="chapter-spacing content-container relative"
    >
      {/* Chapter opener — the question this chapter answers */}
      <ChapterLabel
        number="08"
        question="Where is he going?"
        isInView={isInView}
      />

      <h2
        className={cn(
          "text-h1 font-[var(--font-geist-sans)] mb-8 sm:mb-10 max-w-xl",
          "transition-all duration-700 delay-100",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        Where I&apos;m going
      </h2>

      {/* ═══ CONCEPT SKETCH LANGUAGE ═══ */}
      <div className="max-w-lg space-y-4 sm:space-y-5 mb-10 sm:mb-12">
        {futureContent.dreams.map((dream, i) => (
          <div
            key={i}
            className={cn(
              "relative flex items-start gap-3 sm:gap-4 pl-3 sm:pl-4",
              "transition-all duration-600",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            )}
            style={{ transitionDelay: `${250 + i * 120}ms` }}
          >
            {/* Dotted path */}
            <svg
              className="absolute left-0 top-1.5 sm:top-2 shrink-0"
              width="6"
              height="14"
              viewBox="0 0 6 14"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="3" cy="3" r="1.5" fill="none" stroke="var(--ink-blue)" strokeWidth="1" opacity="0.5" />
              <line x1="3" y1="6" x2="3" y2="14" stroke="var(--ink-blue)" strokeWidth="0.7" opacity="0.3" strokeDasharray="1.5 2" />
            </svg>
            <p className="text-xs sm:text-sm text-[var(--gray-600)] font-[var(--font-inter)] leading-relaxed ml-3 sm:ml-4">
              {dream}
            </p>
          </div>
        ))}
      </div>

      {/* Vision — calm, work-in-progress feel */}
      <div className="relative max-w-md">
        <div
          className={cn(
            "py-4 sm:py-5 px-4 sm:px-6 border border-dashed border-[var(--gray-200)]",
            "transition-all duration-700 delay-700",
            isInView ? "opacity-100" : "opacity-0"
          )}
        >
          <p className="font-[var(--font-instrument-serif)] italic text-[clamp(0.95rem,1.4vw,1.2rem)] text-[var(--gray-600)] leading-relaxed">
            {futureContent.vision}
          </p>
        </div>

        {/* Open question mark */}
        <span
          className={cn(
            "absolute -top-3 -right-2 sm:-right-3",
            "font-[var(--font-caveat)] text-lg sm:text-xl text-[var(--ink-blue)]",
            "transition-opacity duration-700 delay-[900ms]",
            isInView ? "opacity-30" : "opacity-0"
          )}
          aria-hidden="true"
        >
          ?
        </span>
      </div>

      {/* Annotation */}
      <span
        className={cn(
          "block mt-6 sm:mt-8",
          "font-[var(--font-caveat)] text-[var(--ink-blue)] text-[0.75rem] sm:text-[0.8rem]",
          "transition-opacity duration-700 delay-[1000ms]",
          isInView ? "opacity-40" : "opacity-0"
        )}
        style={{ transform: "rotate(-0.5deg)" }}
        aria-hidden="true"
      >
        there has to be a better way.
      </span>
    </section>
  );
}
