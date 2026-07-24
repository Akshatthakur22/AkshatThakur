"use client";

import { Section } from "@/components/ui/Section";
import { MarginNote, StickyNote, HandDrawnArrow } from "@/components/hand-drawn";
import { aboutContent } from "@/content/data";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function About() {
  const { ref: noteRef, isInView: noteVisible } = useInView({ threshold: 0.3 });

  return (
    <Section id="about" className="relative">
      {/* Section number — hand-drawn */}
      <span className="text-hand-label block mb-2" aria-hidden="true">
        02.
      </span>

      {/* Section title */}
      <h2 className="text-h1 font-[var(--font-geist-sans)] mb-16 max-w-2xl">
        Why I build things
      </h2>

      {/* Intro statement — large editorial */}
      <p className="text-h2 font-[var(--font-instrument-serif)] italic text-[var(--gray-700)] mb-16 max-w-3xl leading-relaxed">
        {aboutContent.intro}
      </p>

      {/* Story blocks */}
      <div className="relative max-w-2xl space-y-8" ref={noteRef}>
        {aboutContent.story.map((paragraph, i) => (
          <p
            key={i}
            className="text-body text-[var(--gray-600)] font-[var(--font-inter)] relative"
          >
            {paragraph}

            {/* Margin note on the first paragraph */}
            {i === 0 && (
              <MarginNote side="right" rotation={-2}>
                this is the question that started everything →
              </MarginNote>
            )}
          </p>
        ))}

        {/* Hand-drawn arrow between intro and philosophy */}
        <div
          className={cn(
            "flex justify-center py-4",
            "transition-opacity duration-700 delay-300",
            noteVisible ? "opacity-60" : "opacity-0"
          )}
        >
          <HandDrawnArrow direction="down" size={36} visible={noteVisible} />
        </div>

        {/* Philosophy — set apart with a sticky note feel */}
        <div
          className={cn(
            "relative pl-6 border-l-2 border-[var(--ink-blue)]/20",
            "transition-all duration-700 delay-500",
            noteVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4"
          )}
        >
          <p className="text-body text-[var(--gray-700)] font-[var(--font-inter)] italic">
            {aboutContent.philosophy}
          </p>
        </div>
      </div>

      {/* Sticky note — placed asymmetrically */}
      <div className="mt-16 flex justify-end max-w-2xl">
        <StickyNote rotation={2}>
          &quot;The best products disappear.&quot;
        </StickyNote>
      </div>
    </Section>
  );
}
