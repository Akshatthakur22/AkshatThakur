/**
 * Utility to combine class names conditionally
 */
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Generate a slightly irregular hand-drawn path for SVG
 * Takes start and end coordinates, returns a path with subtle wobble
 */
export function handDrawnLine(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  wobble: number = 2
): string {
  const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * wobble;
  const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * wobble;
  const cp1x = x1 + (midX - x1) * 0.5 + (Math.random() - 0.5) * wobble;
  const cp1y = y1 + (midY - y1) * 0.5 + (Math.random() - 0.5) * wobble;
  const cp2x = midX + (x2 - midX) * 0.5 + (Math.random() - 0.5) * wobble;
  const cp2y = midY + (y2 - midY) * 0.5 + (Math.random() - 0.5) * wobble;

  return `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;
}

/**
 * Generate a hand-drawn circle path (imperfect oval)
 */
export function handDrawnCircle(
  cx: number,
  cy: number,
  r: number,
  wobble: number = 3
): string {
  const points = 12;
  const angleStep = (Math.PI * 2) / points;
  let path = "";

  for (let i = 0; i <= points; i++) {
    const angle = i * angleStep;
    const wobbleR = r + (Math.random() - 0.5) * wobble;
    const x = cx + Math.cos(angle) * wobbleR;
    const y = cy + Math.sin(angle) * wobbleR;

    if (i === 0) {
      path += `M ${x} ${y}`;
    } else {
      const prevAngle = (i - 0.5) * angleStep;
      const cpR = r + (Math.random() - 0.5) * wobble;
      const cpX = cx + Math.cos(prevAngle) * cpR * 1.1;
      const cpY = cy + Math.sin(prevAngle) * cpR * 1.1;
      path += ` Q ${cpX} ${cpY} ${x} ${y}`;
    }
  }

  return path + " Z";
}
