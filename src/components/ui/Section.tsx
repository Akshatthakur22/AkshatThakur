"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Legacy Section wrapper — kept for backward compatibility.
 * New chapters use direct <section> elements with chapter-spacing.
 */
export function Section({ id, children, className }: SectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "chapter-spacing content-container relative",
        "opacity-0 translate-y-6 transition-all duration-700 ease-out",
        isInView && "opacity-100 translate-y-0",
        className
      )}
    >
      {children}
    </section>
  );
}
