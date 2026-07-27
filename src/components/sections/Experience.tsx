"use client";

import { experiences } from "@/content/data";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ChapterLabel } from "@/components/ui/ChapterLabel";

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <article
      ref={ref}
      className={cn(
        "relative py-5 sm:py-7 px-4 sm:px-6 md:px-8",
        "bg-[var(--card-bg)] border border-[var(--card-border)]",
        "transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Paper clip on first card */}
      {index === 0 && (
        <svg
          className={cn(
            "absolute -top-3 left-6 sm:left-8 pointer-events-none",
            "transition-opacity duration-700 delay-500",
            isInView ? "opacity-100" : "opacity-0"
          )}
          width="16"
          height="32"
          viewBox="0 0 16 32"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M 4 0 L 4 24 C 4 28 12 28 12 24 L 12 6 C 12 3 8 3 8 6 L 8 20"
            stroke="var(--ink-blue)"
            strokeWidth="1.3"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      )}

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
        {/* Period */}
        <span className="text-[0.65rem] sm:text-xs font-[var(--font-ibm-plex-mono)] text-[var(--gray-400)] tracking-tight shrink-0 sm:w-32">
          {experience.period}
        </span>

        <div className="mt-1.5 sm:mt-0">
          {/* Role & Company */}
          <h3 className="text-h3 font-[var(--font-geist-sans)]">
            {experience.role}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--gray-500)] font-[var(--font-inter)] mt-0.5">
            {experience.company}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[var(--gray-600)] font-[var(--font-inter)] mt-2 sm:mt-3 max-w-md leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>

      {/* Margin highlight */}
      {index === 0 && (
        <div
          className={cn(
            "absolute left-0 top-6 sm:top-8 w-[2.5px] h-10 sm:h-12 bg-[var(--ink-blue)] opacity-0",
            "transition-opacity duration-700 delay-700",
            isInView && "opacity-25"
          )}
          aria-hidden="true"
        />
      )}

      {/* Handwritten margin note — hidden on small screens */}
      {experience.note && (
        <span
          className={cn(
            "absolute -right-2 sm:right-2 lg:right-4 bottom-2 sm:bottom-3 hidden sm:inline",
            "font-[var(--font-caveat)] text-[var(--ink-blue)] text-[0.7rem] sm:text-[0.75rem]",
            "transition-opacity duration-500 delay-600",
            isInView ? "opacity-45" : "opacity-0"
          )}
          style={{ transform: "rotate(-1.5deg)" }}
          aria-hidden="true"
        >
          — {experience.note}
        </span>
      )}
    </article>
  );
}

export function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="chapter-spacing content-container"
    >
      {/* Chapter opener — the question this chapter answers */}
      <ChapterLabel
        number="04"
        question="Where has he worked?"
        isInView={isInView}
      />

      <h2
        className={cn(
          "text-h1 font-[var(--font-geist-sans)] mb-3 sm:mb-4 max-w-xl",
          "transition-all duration-700 delay-100",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        Where I&apos;ve worked
      </h2>

      <p
        className={cn(
          "text-body text-[var(--gray-500)] mb-8 sm:mb-10 max-w-md font-[var(--font-inter)]",
          "transition-all duration-700 delay-200",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        Each role taught me something the previous one couldn&apos;t.
      </p>

      {/* Cards */}
      <div className="grid gap-3 sm:gap-4 max-w-2xl">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.id} experience={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
