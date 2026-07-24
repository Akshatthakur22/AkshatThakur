"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface HandDrawnUnderlineProps {
  width?: number;
  className?: string;
  visible?: boolean;
  color?: string;
}

export function HandDrawnUnderline({
  width = 200,
  className,
  visible = true,
  color = "var(--ink-blue)",
}: HandDrawnUnderlineProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.setProperty("--path-length", String(length));
    }
  }, []);

  // Generate a slightly wobbly line
  const y = 8;
  const wobble = 1.5;
  const d = `M 0 ${y} C ${width * 0.2} ${y + wobble}, ${width * 0.4} ${y - wobble}, ${width * 0.5} ${y + wobble * 0.5} S ${width * 0.8} ${y - wobble}, ${width} ${y + wobble * 0.3}`;

  return (
    <svg
      width={width}
      height="16"
      viewBox={`0 0 ${width} 16`}
      fill="none"
      className={cn("overflow-visible", className)}
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        d={d}
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        className={cn("hand-draw-path", visible && "visible")}
        style={{ opacity: 0.8 }}
      />
    </svg>
  );
}
