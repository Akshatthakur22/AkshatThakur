"use client";

import { Section } from "@/components/ui/Section";
import { timelineEvents } from "@/content/data";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

function TimelineNode({
  event,
  index,
}: {
  event: (typeof timelineEvents)[number];
  index: number;
}) {
  const { ref, isInView } = useInView({ threshold: 0.4 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex items-start gap-6 md:gap-10",
        "transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Year — left side */}
      <div className="w-16 shrink-0 text-right">
        <span className="text-sm font-[var(--font-ibm-plex-mono)] text-[var(--gray-400)] tracking-tight">
          {event.year}
        </span>
      </div>

      {/* Dot + Line */}
      <div className="relative flex flex-col items-center">
        {/* The dot — slightly imperfect circle */}
        <div
          className={cn(
            "w-3 h-3 rounded-full border-2 border-[var(--ink-blue)] bg-white",
            "transition-all duration-500",
            isInView ? "scale-100" : "scale-0"
          )}
          style={{
            borderRadius: isEven ? "50% 48% 52% 50%" : "48% 50% 50% 52%",
          }}
        />
        {/* Connecting line */}
        {index < timelineEvents.length - 1 && (
          <div className="w-[1.5px] h-16 bg-[var(--gray-200)] mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12 max-w-md">
        <h3 className="text-h3 font-[var(--font-geist-sans)] text-[var(--foreground)] mb-2">
          {event.title}
        </h3>
        <p className="text-body text-[var(--gray-500)] font-[var(--font-inter)] text-base leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <Section id="timeline">
      {/* Section number */}
      <span className="text-hand-label block mb-2" aria-hidden="true">
        03.
      </span>

      <h2 className="text-h1 font-[var(--font-geist-sans)] mb-6 max-w-2xl">
        The Journey
      </h2>

      <p className="text-body text-[var(--gray-500)] mb-16 max-w-xl font-[var(--font-inter)]">
        Not achievements — evolution. Each step shaped how I think about building.
      </p>

      {/* Timeline nodes */}
      <div className="relative ml-4 md:ml-8">
        {timelineEvents.map((event, i) => (
          <TimelineNode key={event.id} event={event} index={i} />
        ))}
      </div>

      {/* Hand-drawn note at the end */}
      <div className="mt-8 ml-[88px] md:ml-[120px]">
        <span
          className="font-[var(--font-caveat)] text-[var(--pencil-gray)] text-lg"
          style={{ transform: "rotate(-1deg)", display: "inline-block" }}
          aria-hidden="true"
        >
          ...and the story continues ↓
        </span>
      </div>
    </Section>
  );
}
