"use client";

import { principles } from "@/content/data";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ChapterLabel } from "@/components/ui/ChapterLabel";

export function Principles() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="principles"
      ref={ref}
      className="chapter-spacing content-container relative"
    >
      {/* Chapter opener — the question this chapter answers */}
      <ChapterLabel
        number="06"
        question="What does he believe?"
        isInView={isInView}
      />

      <h2
        className={cn(
          "text-h1 font-[var(--font-geist-sans)] mb-8 sm:mb-10 max-w-xl",
          "transition-all duration-700 delay-100",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        What I believe
      </h2>

      {/* ═══ NOTEBOOK PAGE LANGUAGE ═══ */}
      <div className="max-w-lg relative">
        {principles.map((principle, i) => (
          <div
            key={principle.id}
            className={cn(
              "py-4 sm:py-5 border-b border-[var(--gray-100)] last:border-b-0 relative",
              "transition-all duration-600",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            )}
            style={{ transitionDelay: `${200 + i * 80}ms` }}
          >
            {/* Principle title */}
            <h3 className="relative inline">
              <span className="text-sm sm:text-base font-[var(--font-geist-sans)] font-medium text-[var(--foreground)]">
                {principle.title}
              </span>
              {/* Highlighter mark on "Ship, then iterate" */}
              {principle.id === "ship-iterate" && (
                <span
                  className={cn(
                    "absolute -left-1 top-0 bottom-0 -right-1",
                    "bg-[var(--highlighter-yellow)] opacity-0 -z-10 rounded-sm",
                    "transition-opacity duration-700",
                    isInView && "opacity-40"
                  )}
                  style={{ transitionDelay: `${600 + i * 80}ms` }}
                  aria-hidden="true"
                />
              )}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--gray-500)] font-[var(--font-inter)] mt-1">
              {principle.description}
            </p>

            {/* Margin comment — only on large screens */}
            {principle.id === "design-before-code" && (
              <span
                className={cn(
                  "absolute -right-4 lg:right-[-80px] top-5 hidden lg:block",
                  "font-[var(--font-caveat)] text-[0.75rem] text-[var(--ink-blue)]",
                  "transition-opacity duration-700 delay-[800ms]",
                  isInView ? "opacity-45" : "opacity-0"
                )}
                style={{ transform: "rotate(-1.5deg)" }}
                aria-hidden="true"
              >
                ← this one.
              </span>
            )}
          </div>
        ))}

        {/* Cross-out: a principle that was revised */}
        <div
          className={cn(
            "mt-5 sm:mt-6 relative",
            "transition-opacity duration-700 delay-[900ms]",
            isInView ? "opacity-100" : "opacity-0"
          )}
          aria-hidden="true"
        >
          <span className="font-[var(--font-caveat)] text-[0.78rem] sm:text-[0.82rem] text-[var(--gray-500)] opacity-50 line-through">
            Move fast, break things
          </span>
          <span className="font-[var(--font-caveat)] text-[0.78rem] sm:text-[0.82rem] text-[var(--ink-blue)] opacity-55 ml-2 sm:ml-3">
            Move carefully, build trust
          </span>
        </div>
      </div>

      {/* Page bookmark — top-right */}
      <div
        className={cn(
          "absolute top-6 right-4 sm:right-6 lg:right-12",
          "transition-opacity duration-1000 delay-500",
          isInView ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
      >
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M 0 0 L 16 0 L 16 20 L 8 14 L 0 20 Z" fill="var(--ink-blue)" opacity="0.1" />
        </svg>
      </div>
    </section>
  );
}
