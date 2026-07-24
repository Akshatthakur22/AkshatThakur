import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div className={cn("content-container py-8", className)} aria-hidden="true">
      <svg
        width="100%"
        height="2"
        viewBox="0 0 800 2"
        preserveAspectRatio="none"
        className="opacity-10"
      >
        <path
          d="M 0 1 C 100 0.5, 200 1.5, 300 1 S 500 0.5, 600 1.2 S 750 0.8, 800 1"
          stroke="var(--pencil-gray)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
