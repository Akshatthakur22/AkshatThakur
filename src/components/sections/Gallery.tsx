"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ChapterLabel } from "@/components/ui/ChapterLabel";

const galleryItems = [
  { id: "1", caption: "whiteboard session", date: "jan '23", rotation: -2.5, pin: "tape" as const },
  { id: "2", caption: "first deploy celebration", date: "mar '24", rotation: 1.8, pin: "clip" as const },
  { id: "3", caption: "notebook sketches", date: "aug '23", rotation: -0.8, pin: "pushpin" as const },
  { id: "4", caption: "hackathon 48hrs", date: "nov '21", rotation: 2.5, pin: "tape" as const },
];

/** Binder clip SVG */
function BinderClipSVG() {
  return (
    <svg
      className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
      width="18"
      height="26"
      viewBox="0 0 18 26"
      fill="none"
      aria-hidden="true"
    >
      <rect x="3" y="10" width="12" height="10" rx="1" fill="var(--gray-700)" opacity="0.55" />
      <path d="M 5.5 10 L 5.5 5 C 5.5 3, 7.5 2, 9 2 C 10.5 2, 12.5 3, 12.5 5 L 12.5 10" stroke="var(--gray-500)" strokeWidth="1.5" fill="none" opacity="0.4" />
    </svg>
  );
}

/** Pushpin dot */
function PushpinDot() {
  return (
    <div
      className="absolute -top-1 left-1/2 -translate-x-1/2 z-10 w-[8px] h-[8px] rounded-full bg-[var(--red-pin)] shadow-sm"
      aria-hidden="true"
    />
  );
}

/** Tape strip */
function TapeStripEl({ rotation }: { rotation: number }) {
  return (
    <div
      className="absolute -top-1.5 left-1/2 -translate-x-1/2 z-10 tape-strip"
      style={{
        width: "40px",
        height: "12px",
        transform: `translateX(-50%) rotate(${rotation}deg)`,
      }}
      aria-hidden="true"
    />
  );
}

export function Gallery() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="gallery"
      ref={ref}
      className="chapter-spacing content-container"
    >
      {/* Chapter opener — the question this chapter answers */}
      <ChapterLabel
        number="07"
        question="What moments shaped him?"
        isInView={isInView}
      />

      <h2
        className={cn(
          "text-h1 font-[var(--font-geist-sans)] mb-3 sm:mb-4 max-w-xl",
          "transition-all duration-700 delay-100",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        Moments
      </h2>

      <p
        className={cn(
          "text-body text-[var(--gray-500)] mb-8 sm:mb-10 max-w-md font-[var(--font-inter)]",
          "transition-all duration-700 delay-200",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        Whiteboards, not headshots.
      </p>

      {/* ═══ SCRAPBOOK GALLERY — photos pinned to a board ═══ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-3xl">
        {galleryItems.map((item, i) => (
          <div
            key={item.id}
            className={cn(
              "relative",
              "transition-all duration-700",
              isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
            style={{
              transitionDelay: `${300 + i * 120}ms`,
              transform: isInView ? `rotate(${item.rotation}deg)` : "rotate(0deg) scale(0.95)",
            }}
          >
            {/* Pin/clip/tape — varies per photo */}
            {item.pin === "clip" && <BinderClipSVG />}
            {item.pin === "pushpin" && <PushpinDot />}
            {item.pin === "tape" && <TapeStripEl rotation={item.rotation > 0 ? -4 : 5} />}

            {/* Polaroid frame */}
            <div className="polaroid-frame">
              <div className="bg-[var(--gray-200)] aspect-[4/3] w-full flex items-center justify-center">
                <span className="text-[var(--gray-400)] font-[var(--font-ibm-plex-mono)] text-[0.45rem] sm:text-[0.5rem]">
                  [ photo ]
                </span>
              </div>
            </div>

            {/* Handwritten caption below — like pen on polaroid white strip */}
            <div className="mt-1 px-1">
              <span className="font-[var(--font-caveat)] text-[var(--ink-blue)] text-[0.7rem] sm:text-[0.8rem] opacity-55 leading-tight block">
                {item.caption}
              </span>
              <span className="font-[var(--font-ibm-plex-mono)] text-[0.4rem] sm:text-[0.45rem] text-[var(--gray-400)] mt-0.5 block">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
