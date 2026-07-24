"use client";

import { Section } from "@/components/ui/Section";
import { experiences } from "@/content/data";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

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
        "relative p-8 md:p-10",
        "bg-white rounded-sm",
        "border border-[var(--gray-100)]",
        "transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Period — monospace, small */}
      <span className="text-xs font-[var(--font-ibm-plex-mono)] text-[var(--gray-400)] tracking-tight">
        {experience.period}
      </span>

      {/* Role & Company */}
      <h3 className="text-h3 font-[var(--font-geist-sans)] mt-3 mb-1">
        {experience.role}
      </h3>
      <p className="text-sm text-[var(--gray-500)] font-[var(--font-inter)] mb-4">
        {experience.company}
      </p>

      {/* Description */}
      <p className="text-body text-[var(--gray-600)] font-[var(--font-inter)] mb-6 text-base">
        {experience.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-2">
        {experience.highlights.map((highlight, i) => (
          <li
            key={i}
            className="text-sm text-[var(--gray-600)] font-[var(--font-inter)] flex items-start gap-2"
          >
            <span className="text-[var(--ink-blue)] mt-1.5 block w-1 h-1 rounded-full bg-current shrink-0" />
            {highlight}
          </li>
        ))}
      </ul>

      {/* Handwritten margin note */}
      {experience.note && (
        <span
          className={cn(
            "absolute -bottom-3 right-6",
            "font-[var(--font-caveat)] text-[var(--pencil-gray)] text-sm",
            "transition-opacity duration-500 delay-500",
            isInView ? "opacity-60" : "opacity-0"
          )}
          style={{ transform: "rotate(-2deg)" }}
          aria-hidden="true"
        >
          — {experience.note}
        </span>
      )}
    </article>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      {/* Section number */}
      <span className="text-hand-label block mb-2" aria-hidden="true">
        04.
      </span>

      <h2 className="text-h1 font-[var(--font-geist-sans)] mb-6 max-w-2xl">
        Experience
      </h2>

      <p className="text-body text-[var(--gray-500)] mb-16 max-w-xl font-[var(--font-inter)]">
        Each role taught me something the previous one couldn&apos;t.
      </p>

      {/* Experience cards */}
      <div className="grid gap-8 max-w-2xl">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.id} experience={exp} index={i} />
        ))}
      </div>
    </Section>
  );
}
