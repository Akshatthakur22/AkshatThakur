"use client";

import { cn } from "@/lib/utils";

interface ChapterLabelProps {
  /** Chapter number, e.g. "02". Decorative. */
  number: string;
  /**
   * The question this chapter answers, in a visitor's voice.
   * Real text, not decoration — it is what a person skimming reads first, and
   * what search and AI engines match against the heading below it.
   */
  question: string;
  isInView: boolean;
}

/**
 * Chapter opener: number, then the question the chapter answers.
 *
 * The site's headings are statements ("What I've built"). Pairing each one with
 * the question it answers keeps the notebook voice while making the page
 * readable as a set of questions and answers — which is what an FAQ section was
 * doing, minus the section.
 */
export function ChapterLabel({ number, question, isInView }: ChapterLabelProps) {
  return (
    <div
      className={cn(
        "mb-6 sm:mb-8",
        "transition-opacity duration-700",
        isInView ? "opacity-100" : "opacity-0"
      )}
    >
      <span className="text-hand-label block opacity-70" aria-hidden="true">
        {number}.
      </span>
      <p
        className={cn(
          "mt-1.5 font-[var(--font-caveat)] text-[var(--ink-blue)] opacity-60",
          "text-[0.9rem] sm:text-[1rem] leading-snug"
        )}
        style={{ transform: "rotate(-0.4deg)" }}
      >
        {question}
      </p>
    </div>
  );
}
