"use client";

import { Section } from "@/components/ui/Section";
import { futureContent } from "@/content/data";
import { StickyNote } from "@/components/hand-drawn";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function Future() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <Section id="future">
      {/* Section number */}
      <span className="text-hand-label block mb-2" aria-hidden="true">
        08.
      </span>

      <h2 className="text-h1 font-[var(--font-geist-sans)] mb-6 max-w-2xl">
        What&apos;s Next
      </h2>

      <p className="text-body text-[var(--gray-500)] mb-16 max-w-xl font-[var(--font-inter)]">
        Dreams with deadlines. Things I want to build, explore, and solve.
      </p>

      {/* Dreams list */}
      <div ref={ref} className="max-w-2xl space-y-6 mb-12">
        {futureContent.dreams.map((dream, i) => (
          <div
            key={i}
            className={cn(
              "flex items-start gap-4",
              "transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            )}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {/* Hand-drawn bullet */}
            <span
              className="font-[var(--font-caveat)] text-[var(--ink-blue)] text-lg shrink-0 mt-0.5"
              aria-hidden="true"
            >
              →
            </span>
            <p className="text-base text-[var(--gray-600)] font-[var(--font-inter)] leading-relaxed">
              {dream}
            </p>
          </div>
        ))}
      </div>

      {/* Vision statement — set apart */}
      <div className="max-w-2xl mt-12">
        <StickyNote rotation={-1} color="white">
          <span className="text-base leading-relaxed">
            {futureContent.vision}
          </span>
        </StickyNote>
      </div>
    </Section>
  );
}
