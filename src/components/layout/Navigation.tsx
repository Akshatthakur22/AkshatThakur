"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", label: "Top" },
  { id: "about", label: "About" },
  { id: "timeline", label: "Journey" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "principles", label: "Principles" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const progress = useScrollProgress();
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setVisible(progress > 0.02);
  }, [progress]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-6 right-6 z-50",
        "transition-all duration-500 ease-out",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      )}
      aria-label="Page navigation"
    >
      <div className="bg-white/70 backdrop-blur-xl rounded-full px-5 py-3 shadow-sm border border-black/[0.04]">
        <ul className="flex items-center gap-4">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "text-xs font-medium tracking-wide transition-colors duration-200",
                  activeSection === id
                    ? "text-[var(--foreground)]"
                    : "text-[var(--gray-400)] hover:text-[var(--gray-600)]"
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll progress line — hand-drawn style */}
      <div className="mt-2 mx-auto w-[80%] h-[2px] bg-[var(--gray-200)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--ink-blue)] rounded-full transition-all duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </nav>
  );
}
