"use client";

import { Section } from "@/components/ui/Section";
import { principles } from "@/content/data";
import { ConstructionLines } from "@/components/hand-drawn";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

function PrincipleItem({
  principle,
  index,
}: {
  principle: (typeof principles)[number];
  index: number;
}) {
  const { ref, isInView } = useInView({ threshold: 0.4 });

  return (
    <div
      ref={ref}
      className={cn(
        "relative py-8 border-b border-[var(--gray-100)] last:border-b-0",
        "transition-all duration-700",
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Number — hand-drawn style */}
      <span
        className="font-[var(--font-caveat)] text-[var(--ink-blue)] text-lg absolute -left-8 top-8 hidden md:block"
        aria-hidden="true"
      >
        {index + 1}
      </span>

      <h3 className="text-h3 font-[var(--font-geist-sans)] mb-2">
        {principle.title}
      </h3>
      <p className="text-base text-[var(--gray-500)] font-[var(--font-inter)] max-w-lg leading-relaxed">
        {principle.description}
      </p>
    </div>
  );
}

export function Principles() {
  return (
    <Section id="principles" className="relative">
      {/* Background dot grid */}
      <ConstructionLines variant="grid" className="inset-0 w-full h-full" />

      {/* Section number */}
      <span className="text-hand-label block mb-2 relative z-10" aria-hidden="true">
        06.
      </span>

      <h2 className="text-h1 font-[var(--font-geist-sans)] mb-6 max-w-2xl relative z-10">
        Engineering Principles
      </h2>

      <p className="text-body text-[var(--gray-500)] mb-12 max-w-xl font-[var(--font-inter)] relative z-10">
        Rules I build by. Not fixed — evolving with every project.
      </p>

      {/* Principles list */}
      <div className="max-w-2xl md:ml-10 relative z-10">
        {principles.map((principle, i) => (
          <PrincipleItem key={principle.id} principle={principle} index={i} />
        ))}
      </div>

      {/* Hand-drawn note */}
      <div className="mt-10 max-w-2xl md:ml-10 relative z-10">
        <span
          className="font-[var(--font-caveat)] text-[var(--pencil-gray)] text-base"
          style={{ transform: "rotate(-1deg)", display: "inline-block" }}
          aria-hidden="true"
        >
          ✶ these aren&apos;t commandments — they&apos;re compass points
        </span>
      </div>
    </Section>
  );
}
