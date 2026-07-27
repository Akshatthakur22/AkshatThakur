"use client";

import { resume } from "@/content/data";
import { person } from "@/lib/site";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ChapterLabel } from "@/components/ui/ChapterLabel";

/** Hand-drawn document illustration — the "paper version" of the site. */
function DocumentIllustration({ isInView }: { isInView: boolean }) {
  return (
    <svg
      className={cn(
        "w-full max-w-[210px] sm:max-w-[240px] h-auto",
        "transition-all duration-1000 delay-300",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      viewBox="0 0 240 300"
      fill="none"
      aria-hidden="true"
    >
      {/* Back sheet — the second page, peeking out */}
      <path
        d="M 30 26 C 32 24, 205 25, 207 27 C 209 29, 208 250, 206 252 C 204 254, 34 253, 32 251 C 30 249, 28 28, 30 26"
        stroke="var(--ink-blue)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.15"
        strokeLinecap="round"
      />

      {/* Front sheet — wonky hand-drawn page with a folded corner */}
      <path
        d="M 20 40 C 22 38, 168 39, 172 43 C 176 47, 196 66, 197 70 C 198 74, 197 265, 195 267 C 193 269, 24 268, 22 266 C 20 264, 18 42, 20 40"
        stroke="var(--ink-blue)"
        strokeWidth="1.2"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
        className={cn("hand-draw-path", isInView && "visible")}
        style={{ "--path-length": "760" } as React.CSSProperties}
      />

      {/* Folded corner */}
      <path
        d="M 170 41 C 170 52, 171 65, 174 68 C 177 71, 187 70, 196 70"
        stroke="var(--ink-blue)"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
        strokeLinecap="round"
      />

      {/* Name block at the top of the page */}
      <line x1="38" y1="72" x2="122" y2="72" stroke="var(--dark-ink)" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
      <line x1="38" y1="84" x2="90" y2="84" stroke="var(--ink-blue)" strokeWidth="0.9" opacity="0.2" strokeLinecap="round" />

      {/* Section rules and text lines — a résumé at a glance */}
      {[110, 158, 206].map((y) => (
        <g key={y}>
          <line x1="38" y1={y} x2="70" y2={y} stroke="var(--ink-blue)" strokeWidth="1.1" opacity="0.28" strokeLinecap="round" />
          <line x1="38" y1={y + 12} x2="176" y2={y + 12} stroke="var(--pencil-gray)" strokeWidth="0.7" opacity="0.22" strokeLinecap="round" />
          <line x1="38" y1={y + 22} x2="158" y2={y + 22} stroke="var(--pencil-gray)" strokeWidth="0.7" opacity="0.18" strokeLinecap="round" />
          <line x1="38" y1={y + 32} x2="170" y2={y + 32} stroke="var(--pencil-gray)" strokeWidth="0.7" opacity="0.14" strokeLinecap="round" />
        </g>
      ))}

      {/* Download arrow — the gesture the section is about */}
      <g opacity="0.45">
        <line x1="108" y1="272" x2="108" y2="292" stroke="var(--ink-blue)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 101 285 L 108 293 L 115 285" stroke="var(--ink-blue)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/**
 * Résumé chapter — the paper version of everything above it.
 *
 * The PDF lives in /public, so the link is a plain anchor with `download`.
 * No client-side generation, no blob URLs, nothing to go wrong.
 */
export function Resume() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  const metaLine = [
    resume.format,
    `${resume.pages} pages`,
    resume.sizeLabel,
    `updated ${resume.updated}`,
  ].join(" · ");

  return (
    <section
      id="resume"
      ref={ref}
      className="chapter-spacing content-container"
    >
      {/* Chapter opener — the question this chapter answers */}
      <ChapterLabel
        number="09"
        question="Can I take this with me?"
        isInView={isInView}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-start">
        {/* LEFT: the download */}
        <div className="max-w-lg">
          <h2
            className={cn(
              "text-h1 font-[var(--font-geist-sans)] mb-2 sm:mb-3",
              "transition-all duration-700 delay-100",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Take the paper version
          </h2>

          <p
            className={cn(
              "text-body text-[var(--gray-500)] font-[var(--font-inter)] mb-6 sm:mb-8 max-w-sm",
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            Two pages, no scrolling. Everything on this site, condensed into the
            format recruiters actually forward.
          </p>

          {/* Primary action — downloads straight from /public */}
          <a
            href={resume.path}
            download={resume.fileName}
            className={cn(
              "group inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg",
              "border border-[var(--ink-blue)]/25 bg-[var(--card-bg)]",
              "hover:border-[var(--ink-blue)]/50 hover:bg-[var(--ink-blue)]/[0.04]",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink-blue)]",
              "transition-all duration-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            {/* Download icon */}
            <span
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--gray-50)] border border-[var(--gray-100)] flex items-center justify-center shrink-0 group-hover:border-[var(--ink-blue)]/25 group-hover:bg-[var(--ink-blue)]/5 transition-colors duration-300"
              aria-hidden="true"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ink-blue)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-75 group-hover:translate-y-0.5 transition-transform duration-200"
              >
                <path d="M12 3 L12 15" />
                <path d="M7 11 L12 16 L17 11" />
                <path d="M4 20 L20 20" />
              </svg>
            </span>

            <span className="min-w-0">
              <span className="block text-sm sm:text-base font-[var(--font-geist-sans)] font-medium text-[var(--foreground)] group-hover:text-[var(--ink-blue)] transition-colors duration-200">
                Download résumé
              </span>
              <span className="block text-[0.65rem] sm:text-xs font-[var(--font-ibm-plex-mono)] text-[var(--gray-400)] mt-0.5">
                {metaLine}
              </span>
            </span>
          </a>

          {/* Secondary action — read it without committing to a download */}
          <p
            className={cn(
              "mt-3 sm:mt-4 text-[0.7rem] sm:text-xs font-[var(--font-inter)] text-[var(--gray-400)]",
              "transition-opacity duration-700 delay-[400ms]",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            Or{" "}
            <a
              href={resume.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink-blue)] hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink-blue)] rounded-sm"
            >
              open {person.givenName}&apos;s résumé in a new tab
            </a>{" "}
            first.
          </p>

          {/* What's inside — crawlable summary of the PDF's contents */}
          <ul
            className={cn(
              "mt-8 sm:mt-10 space-y-2.5 border-l border-[var(--gray-200)] pl-4 sm:pl-6",
              "transition-all duration-700 delay-[500ms]",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            )}
          >
            {resume.contents.map((item) => (
              <li
                key={item}
                className="text-xs sm:text-sm text-[var(--gray-600)] font-[var(--font-inter)] leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: illustration — decorative, hidden on mobile */}
        <div
          className={cn(
            "hidden md:flex flex-col items-center justify-center",
            "transition-all duration-1000 delay-500",
            isInView ? "opacity-100" : "opacity-0"
          )}
        >
          <DocumentIllustration isInView={isInView} />
          <span
            className="mt-2 font-[var(--font-caveat)] text-[0.8rem] text-[var(--ink-blue)] opacity-40"
            style={{ transform: "rotate(-1deg)" }}
            aria-hidden="true"
          >
            two pages, that&apos;s it
          </span>
        </div>
      </div>
    </section>
  );
}
