"use client";

import { aboutContent } from "@/content/data";
import { person } from "@/lib/site";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ChapterLabel } from "@/components/ui/ChapterLabel";

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="chapter-spacing content-container relative"
    >
      {/* Chapter opener — the question this chapter answers */}
      <ChapterLabel
        number="02"
        question="Who is Akshat Thakur?"
        isInView={isInView}
      />

      {/* Headline */}
      <h2
        className={cn(
          "text-h1 font-[var(--font-geist-sans)] max-w-xl",
          "transition-all duration-700 delay-100",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        How I think
      </h2>

      {/* Core statement — large editorial italic */}
      <p
        className={cn(
          "mt-6 sm:mt-10 max-w-2xl",
          "font-[var(--font-instrument-serif)] italic",
          "text-[clamp(1.1rem,2vw,1.6rem)] leading-[1.5] text-[var(--gray-700)]",
          "transition-all duration-700 delay-300",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        {aboutContent.intro}
      </p>

      {/* Philosophy — one quiet thought */}
      <div
        className={cn(
          "mt-8 sm:mt-12 pl-4 sm:pl-6 border-l border-[var(--gray-200)] max-w-lg",
          "transition-all duration-700 delay-500",
          isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
        )}
      >
        <p className="text-body text-[var(--gray-500)] font-[var(--font-inter)]">
          {aboutContent.philosophy}
        </p>
      </div>

      {/* Plain-language summary — the factual paragraph search and AI engines quote */}
      <p
        className={cn(
          "mt-8 sm:mt-10 max-w-2xl text-xs sm:text-sm leading-relaxed",
          "text-[var(--gray-600)] font-[var(--font-inter)]",
          "transition-all duration-700 delay-[600ms]",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        )}
      >
        {aboutContent.summary}
      </p>

      {/* The stack, stated plainly — the answer to "what does he work with?" */}
      <dl
        className={cn(
          "mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl",
          "transition-all duration-700 delay-[650ms]",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        {aboutContent.stack.map((group) => (
          <div key={group.label}>
            <dt className="text-[0.55rem] sm:text-[0.6rem] font-[var(--font-ibm-plex-mono)] text-[var(--gray-400)] uppercase tracking-wider">
              {group.label}
            </dt>
            <dd className="mt-1 text-xs sm:text-sm text-[var(--gray-600)] font-[var(--font-inter)]">
              {group.items}
            </dd>
          </div>
        ))}
      </dl>

      {/* Credentials — experience and expertise signals in crawlable text */}
      <ul
        className={cn(
          "mt-6 sm:mt-8 space-y-1.5 max-w-2xl",
          "transition-all duration-700 delay-[700ms]",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        {person.education.map((school) => (
          <li
            key={school.name}
            className="text-[0.7rem] sm:text-xs text-[var(--gray-500)] font-[var(--font-inter)]"
          >
            <span className="text-[var(--gray-600)]">{school.credential}</span>
            {" — "}
            {school.name}
            <span className="font-[var(--font-ibm-plex-mono)] text-[var(--gray-400)]">
              {" "}
              ({school.period}
              {school.detail ? `, ${school.detail}` : ""})
            </span>
          </li>
        ))}
      </ul>

      {/* ═══ NOTEBOOK LANGUAGE: Thinking/Observation ═══ */}
      <div
        className={cn(
          "mt-10 sm:mt-14 relative",
          "transition-all duration-1000 delay-700",
          isInView ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
      >
        {/* Flowchart: idea → prototype → product */}
        <svg
          width="260"
          height="28"
          viewBox="0 0 260 28"
          fill="none"
          className="overflow-visible max-w-full"
        >
          {/* Connecting arrows */}
          <path
            d="M 52 14 C 60 13, 68 15, 78 14"
            stroke="var(--ink-blue)"
            strokeWidth="0.9"
            opacity="0.45"
            strokeLinecap="round"
          />
          <path
            d="M 75 11 L 80 14 L 75 17"
            stroke="var(--ink-blue)"
            strokeWidth="0.8"
            opacity="0.45"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 155 14 C 163 13, 171 15, 181 14"
            stroke="var(--ink-blue)"
            strokeWidth="0.9"
            opacity="0.45"
            strokeLinecap="round"
          />
          <path
            d="M 178 11 L 183 14 L 178 17"
            stroke="var(--ink-blue)"
            strokeWidth="0.8"
            opacity="0.45"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex items-center gap-0 -mt-[22px] ml-1">
          <span className="font-[var(--font-caveat)] text-[0.85rem] text-[var(--ink-blue)] opacity-55">
            idea
          </span>
          <span className="font-[var(--font-caveat)] text-[0.85rem] text-[var(--ink-blue)] opacity-55 ml-[34px]">
            prototype
          </span>
          <span className="font-[var(--font-caveat)] text-[0.85rem] text-[var(--ink-blue)] opacity-55 ml-[34px]">
            product
          </span>
        </div>
      </div>

      {/* Margin note — hidden on mobile, visible on large screens */}
      <div
        className={cn(
          "absolute top-[40%] -right-2 lg:right-8 hidden lg:block",
          "transition-opacity duration-1000 delay-[900ms]",
          isInView ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
      >
        <span
          className="font-[var(--font-caveat)] text-[0.78rem] text-[var(--gray-500)] opacity-50 line-through"
          style={{ transform: "rotate(-1.5deg)", display: "block" }}
        >
          move fast break things
        </span>
        <span
          className="font-[var(--font-caveat)] text-[0.8rem] text-[var(--ink-blue)] opacity-60 mt-0.5 block"
          style={{ transform: "rotate(-1deg)" }}
        >
          observe first.
        </span>
      </div>
    </section>
  );
}
