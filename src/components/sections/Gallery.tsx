"use client";

import { Section } from "@/components/ui/Section";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

// Placeholder gallery items — replace with real images
const galleryItems = [
  { id: "1", caption: "Whiteboard session", rotation: -2 },
  { id: "2", caption: "Conference talk", rotation: 1.5 },
  { id: "3", caption: "Late night debugging", rotation: -1 },
  { id: "4", caption: "Team brainstorm", rotation: 2.5 },
  { id: "5", caption: "Notebook sketches", rotation: -3 },
  { id: "6", caption: "First deploy", rotation: 1 },
];

function GalleryCard({
  item,
  index,
}: {
  item: (typeof galleryItems)[number];
  index: number;
}) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={cn(
        "relative group",
        "transition-all duration-700",
        isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
      style={{
        transitionDelay: `${index * 100}ms`,
        transform: isInView ? `rotate(${item.rotation}deg)` : "rotate(0deg) scale(0.95)",
      }}
    >
      {/* Photo placeholder — paper-like container */}
      <div className="bg-[var(--gray-100)] aspect-[4/3] w-full flex items-center justify-center border border-[var(--gray-200)]">
        <span className="text-[var(--gray-400)] font-[var(--font-ibm-plex-mono)] text-xs">
          [ photo ]
        </span>
      </div>

      {/* Tape strip on top */}
      <div
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-[var(--highlighter-yellow)] opacity-60 rounded-sm"
        style={{ transform: `translateX(-50%) rotate(${item.rotation > 0 ? -5 : 5}deg)` }}
        aria-hidden="true"
      />

      {/* Caption — handwritten */}
      <p
        className="mt-3 font-[var(--font-caveat)] text-[var(--pencil-gray)] text-sm text-center"
        aria-hidden="true"
      >
        {item.caption}
      </p>
    </div>
  );
}

export function Gallery() {
  return (
    <Section id="gallery">
      {/* Section number */}
      <span className="text-hand-label block mb-2" aria-hidden="true">
        07.
      </span>

      <h2 className="text-h1 font-[var(--font-geist-sans)] mb-6 max-w-2xl">
        Gallery
      </h2>

      <p className="text-body text-[var(--gray-500)] mb-16 max-w-xl font-[var(--font-inter)]">
        Moments, not poses. Whiteboards, not headshots.
      </p>

      {/* Gallery grid — slightly irregular, like photos placed on a desk */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl">
        {galleryItems.map((item, i) => (
          <GalleryCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </Section>
  );
}
