"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface HandDrawnArrowProps {
  direction?: "down" | "right" | "left";
  size?: number;
  className?: string;
  visible?: boolean;
  color?: string;
}

export function HandDrawnArrow({
  direction = "down",
  size = 40,
  className,
  visible = true,
  color = "var(--pencil-gray)",
}: HandDrawnArrowProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.setProperty("--path-length", String(length));
    }
  }, []);

  const paths = {
    down: `M ${size / 2} 2 C ${size / 2 + 1} ${size * 0.3}, ${size / 2 - 1} ${size * 0.6}, ${size / 2} ${size - 8} M ${size / 2 - 6} ${size - 14} L ${size / 2} ${size - 6} L ${size / 2 + 6} ${size - 14}`,
    right: `M 2 ${size / 2} C ${size * 0.3} ${size / 2 + 1}, ${size * 0.6} ${size / 2 - 1}, ${size - 8} ${size / 2} M ${size - 14} ${size / 2 - 6} L ${size - 6} ${size / 2} L ${size - 14} ${size / 2 + 6}`,
    left: `M ${size - 2} ${size / 2} C ${size * 0.7} ${size / 2 - 1}, ${size * 0.4} ${size / 2 + 1}, 8 ${size / 2} M 14 ${size / 2 - 6} L 6 ${size / 2} L 14 ${size / 2 + 6}`,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      className={cn("overflow-visible", className)}
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        d={paths[direction]}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("hand-draw-path", visible && "visible")}
      />
    </svg>
  );
}
