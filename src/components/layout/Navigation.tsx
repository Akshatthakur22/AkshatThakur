"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { id: "hero", label: "01", name: "Intro" },
  { id: "about", label: "02", name: "About" },
  { id: "timeline", label: "03", name: "Journey" },
  { id: "experience", label: "04", name: "Work" },
  { id: "projects", label: "05", name: "Projects" },
  { id: "principles", label: "06", name: "Beliefs" },
  { id: "gallery", label: "07", name: "Moments" },
  { id: "future", label: "08", name: "Future" },
  { id: "resume", label: "09", name: "Résumé" },
  { id: "contact", label: "10", name: "Contact" },
];

export function Navigation() {
  const progress = useScrollProgress();
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setVisible(progress > 0.03);
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

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ═══ DESKTOP NAV — right side dots ═══ */}
      <nav
        className={cn(
          "fixed top-1/2 -translate-y-1/2 right-6 z-50",
          "transition-all duration-500 ease-out",
          "hidden lg:block",
          visible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4 pointer-events-none"
        )}
        aria-label="Page navigation"
      >
        <ul className="flex flex-col items-end gap-3">
          {navItems.map(({ id, label, name }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "block text-[0.6rem] font-[var(--font-ibm-plex-mono)] tracking-wider transition-all duration-200",
                  activeSection === id
                    ? "text-[var(--foreground)] opacity-100"
                    : "text-[var(--gray-400)] opacity-40 hover:opacity-70"
                )}
                aria-label={`Go to ${name} section`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Progress line */}
        <div className="mt-4 ml-auto w-[1px] h-12 bg-[var(--gray-200)] rounded-full overflow-hidden">
          <div
            className="w-full bg-[var(--ink-blue)] rounded-full transition-all duration-150 ease-out origin-top"
            style={{ height: `${progress * 100}%` }}
          />
        </div>
      </nav>

      {/* ═══ MOBILE/TABLET TOP BAR ═══ */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 lg:hidden",
          "transition-all duration-300",
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div
          className="flex items-center justify-between px-4 sm:px-6 py-3"
          style={{
            background: "var(--nav-bg)",
            borderBottom: "1px solid var(--nav-border)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {/* Logo / Name */}
          <a
            href="#hero"
            className="font-[var(--font-geist-sans)] text-sm font-semibold text-[var(--foreground)] tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("hero");
            }}
          >
            AT
          </a>

          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle p-2 rounded-full text-[var(--gray-500)] hover:text-[var(--foreground)] transition-colors"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-8 h-8 flex items-center justify-center text-[var(--foreground)]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={cn(
                  "absolute w-5 h-[1.5px] bg-current transition-all duration-300",
                  mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                )}
              />
              <span
                className={cn(
                  "absolute w-5 h-[1.5px] bg-current transition-all duration-300",
                  mobileOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute w-5 h-[1.5px] bg-current transition-all duration-300",
                  mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ═══ MOBILE NAV OVERLAY ═══ */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          "mobile-nav-overlay",
          "transition-all duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{ background: "var(--nav-bg)" }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-1" aria-label="Mobile navigation">
          {navItems.map(({ id, label, name }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={cn(
                "flex items-center gap-4 py-3 px-6 rounded-lg transition-all duration-200",
                "text-left w-full max-w-[240px]",
                activeSection === id
                  ? "text-[var(--foreground)] bg-[var(--gray-50)]"
                  : "text-[var(--gray-500)] hover:text-[var(--foreground)] hover:bg-[var(--gray-50)]"
              )}
            >
              <span className="text-[0.65rem] font-[var(--font-ibm-plex-mono)] tracking-wider opacity-50 w-5">
                {label}
              </span>
              <span className="text-base font-[var(--font-geist-sans)] font-medium">
                {name}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* ═══ DESKTOP THEME TOGGLE — bottom right ═══ */}
      <button
        onClick={toggleTheme}
        className={cn(
          "fixed bottom-6 right-6 z-50 hidden lg:flex",
          "w-10 h-10 items-center justify-center rounded-full",
          "bg-[var(--card-bg)] border border-[var(--card-border)]",
          "shadow-sm hover:shadow-md transition-all duration-200",
          "text-[var(--gray-500)] hover:text-[var(--foreground)]",
          "theme-toggle",
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </button>
    </>
  );
}
