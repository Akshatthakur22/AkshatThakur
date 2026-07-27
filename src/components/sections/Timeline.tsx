"use client";

import { timelineEvents } from "@/content/data";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ChapterLabel } from "@/components/ui/ChapterLabel";

function MilestoneSketch({ id }: { id: string }) {
  switch (id) {
    case "research":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-60">
          <rect x="3" y="2" width="14" height="15" rx="1.5" stroke="var(--ink-blue)" strokeWidth="0.9" />
          <line x1="6" y1="6.5" x2="14" y2="6.5" stroke="var(--ink-blue)" strokeWidth="0.6" />
          <line x1="6" y1="9" x2="11" y2="9" stroke="var(--ink-blue)" strokeWidth="0.6" />
          <circle cx="10" cy="13" r="2" stroke="var(--ink-blue)" strokeWidth="0.6" fill="none" />
        </svg>
      );
    case "hackathon":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-60">
          <circle cx="10" cy="11" r="6.5" stroke="var(--ink-blue)" strokeWidth="0.9" fill="none" />
          <line x1="10" y1="11" x2="10" y2="7.5" stroke="var(--ink-blue)" strokeWidth="0.7" strokeLinecap="round" />
          <line x1="10" y1="11" x2="12.5" y2="11" stroke="var(--ink-blue)" strokeWidth="0.6" strokeLinecap="round" />
          <line x1="8.5" y1="3.5" x2="11.5" y2="3.5" stroke="var(--ink-blue)" strokeWidth="0.9" strokeLinecap="round" />
          <line x1="10" y1="3.5" x2="10" y2="4.5" stroke="var(--ink-blue)" strokeWidth="0.7" />
        </svg>
      );
    case "gfg":
      return (
        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" className="opacity-55">
          <path
            d="M 4 1 L 4 18 C 4 21.5 10 21.5 10 18 L 10 5.5 C 10 3 7 3 7 5.5 L 7 16"
            stroke="var(--ink-blue)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      );
    case "google":
      return (
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" className="opacity-60">
          <path
            d="M 9 2 C 5.5 2 3 4.8 3 8 C 3 12.5 9 20 9 20 C 9 20 15 12.5 15 8 C 15 4.8 12.5 2 9 2 Z"
            stroke="var(--ink-blue)"
            strokeWidth="0.9"
            fill="none"
          />
          <circle cx="9" cy="8" r="2.5" stroke="var(--ink-blue)" strokeWidth="0.7" fill="none" />
        </svg>
      );
    default:
      return null;
  }
}

function TimelineStation({
  event,
  index,
  total,
}: {
  event: (typeof timelineEvents)[number];
  index: number;
  total: number;
}) {
  const { ref, isInView } = useInView({ threshold: 0.4 });
  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      className={cn(
        "group relative grid grid-cols-[36px_1fr] sm:grid-cols-[48px_1fr] md:grid-cols-[80px_1fr] gap-3 sm:gap-4 md:gap-8",
        "transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* ─── LEFT COLUMN: Route line + station dot ─── */}
      <div className="relative flex flex-col items-center">
        {/* Station dot */}
        <div
          className={cn(
            "relative z-10 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-[1.5px] mt-1.5",
            "transition-all duration-500",
            isInView ? "scale-100" : "scale-0",
            isLast
              ? "border-[var(--ink-blue)] bg-[var(--ink-blue)]"
              : "border-[var(--ink-blue)] bg-[var(--card-bg)] group-hover:bg-[var(--ink-blue)]/10"
          )}
          style={{
            transitionDelay: `${index * 100 + 150}ms`,
          }}
        />

        {/* Route line */}
        {!isLast ? (
          <svg
            width="3"
            height="100%"
            className="flex-1 mt-1.5 min-h-[40px] sm:min-h-[48px]"
            viewBox="0 0 3 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 1.5 0 C 1.7 12, 1.3 24, 1.5 36 S 1.2 48, 1.5 60"
              stroke="var(--ink-blue)"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              opacity="0.2"
              className={cn(
                "hand-draw-path",
                isInView && "visible"
              )}
              style={{ "--path-length": "62" } as React.CSSProperties}
            />
          </svg>
        ) : (
          <svg
            width="3"
            height="48"
            className="mt-1.5"
            viewBox="0 0 3 48"
            aria-hidden="true"
          >
            <line
              x1="1.5" y1="0" x2="1.5" y2="48"
              stroke="var(--ink-blue)"
              strokeWidth="1"
              strokeDasharray="2 4"
              opacity="0.25"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      {/* ─── RIGHT COLUMN: Content ─── */}
      <div
        className={cn(
          "pb-6 sm:pb-8 md:pb-10 relative",
          "transition-all duration-300",
          "group-hover:translate-y-[-1px]"
        )}
      >
        {/* Year label */}
        <span className={cn(
          "text-[0.6rem] sm:text-[0.65rem] font-[var(--font-ibm-plex-mono)] tracking-wider uppercase",
          "transition-colors duration-300",
          isLast ? "text-[var(--ink-blue)] opacity-90" : "text-[var(--gray-500)]"
        )}>
          {event.year}
        </span>

        {/* Title */}
        <h3 className={cn(
          "text-[0.9rem] sm:text-[0.95rem] md:text-base font-[var(--font-geist-sans)] font-medium mt-1 sm:mt-1.5 mb-1 sm:mb-1.5",
          "text-[var(--foreground)]",
          "transition-colors duration-300",
          "group-hover:text-[var(--foreground)]"
        )}>
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[var(--gray-500)] font-[var(--font-inter)] leading-relaxed max-w-sm">
          {event.description}
        </p>

        {/* Handcrafted sketch icon — hidden on mobile */}
        <div
          className={cn(
            "absolute top-0 right-0 hidden md:block",
            "transition-opacity duration-700",
            isInView ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: `${index * 100 + 400}ms` }}
        >
          <MilestoneSketch id={event.id} />
        </div>
      </div>
    </div>
  );
}

export function Timeline() {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section
      id="timeline"
      ref={ref}
      className="chapter-spacing content-container relative"
    >
      {/* Chapter opener — the question this chapter answers */}
      <ChapterLabel
        number="03"
        question="How did he get here?"
        isInView={isInView}
      />

      {/* Headline */}
      <h2
        className={cn(
          "text-h1 font-[var(--font-geist-sans)] mb-2 max-w-xl",
          "transition-all duration-700 delay-100",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        The Journey
      </h2>

      {/* Subtitle */}
      <p
        className={cn(
          "text-body text-[var(--gray-500)] mb-8 sm:mb-12 max-w-md font-[var(--font-inter)]",
          "transition-all duration-700 delay-200",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        Not achievements. Evolution.
      </p>

      {/* ═══ THE ROUTE ═══ */}
      <div className="max-w-2xl">
        {timelineEvents.map((event, i) => (
          <TimelineStation
            key={event.id}
            event={event}
            index={i}
            total={timelineEvents.length}
          />
        ))}
      </div>

      {/* ═══ ENDING: route exits viewport ═══ */}
      <div
        className={cn(
          "mt-2 ml-[16px] sm:ml-[22px] md:ml-[38px] flex items-center gap-3",
          "transition-opacity duration-700 delay-[900ms]",
          isInView ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
      >
        <svg width="52" height="6" viewBox="0 0 52 6" fill="none">
          <line x1="0" y1="3" x2="38" y2="3" stroke="var(--ink-blue)" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
          <circle cx="46" cy="3" r="3" stroke="var(--ink-blue)" strokeWidth="0.8" fill="none" opacity="0.35" />
        </svg>
        <span
          className="font-[var(--font-caveat)] text-[0.75rem] sm:text-[0.8rem] text-[var(--ink-blue)] opacity-50"
          style={{ transform: "rotate(-0.5deg)" }}
        >
          still sketching...
        </span>
      </div>

      {/* ═══ NOTEBOOK ANNOTATIONS ═══ */}
      
      {/* Route label — hidden on mobile */}
      <div
        className={cn(
          "absolute top-16 right-6 lg:right-14 hidden md:block",
          "transition-opacity duration-1000 delay-600",
          isInView ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
      >
        <span
          className="font-[var(--font-ibm-plex-mono)] text-[0.5rem] text-[var(--ink-blue)] opacity-30 tracking-[0.15em] uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          route · 2023–present
        </span>
      </div>

      {/* Revision mark — only on large screens */}
      <span
        className={cn(
          "absolute bottom-[35%] right-8 lg:right-20 hidden lg:block",
          "font-[var(--font-caveat)] text-[0.72rem] text-[var(--ink-blue)]",
          "transition-opacity duration-700 delay-[1000ms]",
          isInView ? "opacity-30" : "opacity-0"
        )}
        style={{ transform: "rotate(-1.5deg)" }}
        aria-hidden="true"
      >
        revision 03
      </span>
    </section>
  );
}
