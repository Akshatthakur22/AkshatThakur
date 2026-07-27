"use client";

import { contactInfo } from "@/content/data";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ChapterLabel } from "@/components/ui/ChapterLabel";

/** Hand-drawn envelope illustration — the "letter to collaborate" concept */
function EnvelopeIllustration({ isInView }: { isInView: boolean }) {
  return (
    <svg
      className={cn(
        "w-full max-w-[280px] sm:max-w-[320px] h-auto",
        "transition-all duration-1000 delay-300",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      viewBox="0 0 320 200"
      fill="none"
      aria-hidden="true"
    >
      {/* Envelope body — slightly wonky hand-drawn rectangle */}
      <path
        d="M 12 45 C 14 44, 305 43, 308 45 C 310 47, 311 155, 309 158 C 307 160, 14 161, 12 158 C 10 155, 10 47, 12 45"
        stroke="var(--ink-blue)"
        strokeWidth="1.2"
        fill="none"
        opacity="0.35"
        strokeLinecap="round"
        className={cn("hand-draw-path", isInView && "visible")}
        style={{ "--path-length": "680" } as React.CSSProperties}
      />
      
      {/* Envelope flap — triangle top */}
      <path
        d="M 14 46 C 50 46, 100 46, 160 100 C 220 46, 270 46, 306 46"
        stroke="var(--ink-blue)"
        strokeWidth="1"
        fill="none"
        opacity="0.25"
        strokeLinecap="round"
        className={cn("hand-draw-path", isInView && "visible")}
        style={{ "--path-length": "400" } as React.CSSProperties}
      />

      {/* Inner fold lines — V shape of open envelope */}
      <path
        d="M 14 158 L 130 95"
        stroke="var(--ink-blue)"
        strokeWidth="0.7"
        opacity="0.15"
        strokeLinecap="round"
        strokeDasharray="3 5"
      />
      <path
        d="M 306 158 L 190 95"
        stroke="var(--ink-blue)"
        strokeWidth="0.7"
        opacity="0.15"
        strokeLinecap="round"
        strokeDasharray="3 5"
      />

      {/* Letter peeking out — paper rectangle */}
      <rect
        x="60"
        y="20"
        width="200"
        height="50"
        rx="2"
        stroke="var(--ink-blue)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.2"
        strokeDasharray="2 4"
      />

      {/* Text lines on the letter */}
      <line x1="80" y1="34" x2="180" y2="34" stroke="var(--ink-blue)" strokeWidth="0.7" opacity="0.2" strokeLinecap="round" />
      <line x1="80" y1="44" x2="150" y2="44" stroke="var(--ink-blue)" strokeWidth="0.7" opacity="0.15" strokeLinecap="round" />
      <line x1="80" y1="54" x2="200" y2="54" stroke="var(--ink-blue)" strokeWidth="0.7" opacity="0.12" strokeLinecap="round" />

      {/* Stamp — small wobbly square top-right of letter */}
      <rect
        x="225"
        y="24"
        width="22"
        height="26"
        rx="1"
        stroke="var(--ink-blue)"
        strokeWidth="0.9"
        fill="none"
        opacity="0.25"
      />
      {/* Stamp postmark circle */}
      <circle cx="236" cy="37" r="8" stroke="var(--ink-blue)" strokeWidth="0.6" fill="none" opacity="0.2" strokeDasharray="2 2" />

      {/* "send" annotation */}
      <text
        x="145"
        y="185"
        className="font-[var(--font-caveat)]"
        fill="var(--ink-blue)"
        fontSize="12"
        opacity="0.4"
        style={{ transform: "rotate(-1deg)", transformOrigin: "145px 185px" }}
      >
        press send ↑
      </text>
    </svg>
  );
}

/** Contact link card with icon */
function ContactLink({
  href,
  label,
  sublabel,
  icon,
  isInView,
  delay,
  isEmail = false,
}: {
  href: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  isInView: boolean;
  delay: number;
  isEmail?: boolean;
}) {
  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className={cn(
        "group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg",
        "border border-[var(--card-border)] bg-[var(--card-bg)]",
        "hover:border-[var(--ink-blue)]/30 hover:bg-[var(--gray-50)]",
        "transition-all duration-300",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon container */}
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--gray-50)] border border-[var(--gray-100)] flex items-center justify-center shrink-0 group-hover:border-[var(--ink-blue)]/20 group-hover:bg-[var(--ink-blue)]/5 transition-colors duration-300">
        {icon}
      </div>
      
      {/* Text */}
      <div className="min-w-0">
        <span className="block text-sm sm:text-base font-[var(--font-geist-sans)] font-medium text-[var(--foreground)] group-hover:text-[var(--ink-blue)] transition-colors duration-200 truncate">
          {label}
        </span>
        <span className="block text-[0.65rem] sm:text-xs font-[var(--font-ibm-plex-mono)] text-[var(--gray-400)] mt-0.5">
          {sublabel}
        </span>
      </div>

      {/* Arrow */}
      <svg
        className="ml-auto w-4 h-4 text-[var(--gray-300)] group-hover:text-[var(--ink-blue)] group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 3 8 L 12 8" />
        <path d="M 9 5 L 12 8 L 9 11" />
      </svg>
    </a>
  );
}

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="chapter-spacing content-container"
    >
      {/* Chapter opener — the question this chapter answers */}
      <ChapterLabel
        number="10"
        question="How can I reach him?"
        isInView={isInView}
      />

      {/* Two-column layout on desktop: content left, illustration right */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-start">
        {/* LEFT: Content */}
        <div className="max-w-lg">
          <h2
            className={cn(
              "text-h1 font-[var(--font-geist-sans)] mb-2 sm:mb-3",
              "transition-all duration-700 delay-100",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Let&apos;s build something
          </h2>

          <p
            className={cn(
              "text-body text-[var(--gray-500)] font-[var(--font-inter)] mb-8 sm:mb-10 max-w-sm",
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            Ideas are better when built together. Drop me a message — I reply to everything.
          </p>

          {/* ═══ CONTACT CARDS ═══ */}
          <div className="space-y-2.5 sm:space-y-3">
            <ContactLink
              href={`mailto:${contactInfo.email}`}
              label={contactInfo.email}
              sublabel="email — fastest way to reach me"
              isEmail
              isInView={isInView}
              delay={350}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M 2 7 L 12 13 L 22 7" />
                </svg>
              }
            />

            <ContactLink
              href={contactInfo.github}
              label="GitHub"
              sublabel="@Akshatthakur22 — code & projects"
              isInView={isInView}
              delay={450}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--ink-blue)" className="opacity-70">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              }
            />

            <ContactLink
              href={contactInfo.linkedin}
              label="LinkedIn"
              sublabel="professional — let's connect"
              isInView={isInView}
              delay={550}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--ink-blue)" className="opacity-70">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              }
            />

            {contactInfo.twitter && (
              <ContactLink
                href={contactInfo.twitter}
                label="X (Twitter)"
                sublabel="@akshatt66612958 — thoughts & updates"
                isInView={isInView}
                delay={650}
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--ink-blue)" className="opacity-70">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                }
              />
            )}
          </div>

          {/* ═══ AVAILABILITY STATUS ═══ */}
          <div
            className={cn(
              "mt-8 sm:mt-10 flex items-center gap-2.5",
              "transition-all duration-700 delay-700",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            {/* Location + availability in crawlable text — local and hiring signals */}
            <address className="not-italic">
              <span className="flex items-center gap-2.5">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[var(--ink-blue)] shrink-0"
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-sm text-[var(--gray-600)] font-[var(--font-inter)]">
                  Based in {contactInfo.location}
                </span>
              </span>
              <span className="block mt-1.5 pl-[1rem] text-[0.7rem] sm:text-xs text-[var(--gray-400)] font-[var(--font-inter)]">
                {contactInfo.availability}
              </span>
            </address>
          </div>

          {/* ═══ SIGNATURE — The personal closing ═══ */}
          <div
            className={cn(
              "mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[var(--gray-100)]",
              "transition-all duration-700 delay-800",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            )}
          >
            <p
              className="font-[var(--font-caveat)] text-[var(--dark-ink)] text-lg sm:text-xl leading-relaxed"
              style={{ transform: "rotate(-0.8deg)" }}
            >
              Thanks for reading this far.
            </p>
            
            {/* Signature line — hand-drawn */}
            <svg
              className="mt-4 sm:mt-5 overflow-visible"
              width="140"
              height="28"
              viewBox="0 0 140 28"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 2 20 C 8 8, 18 4, 28 14 S 38 22, 48 16 C 56 10, 62 6, 72 12 S 84 20, 96 14 C 104 8, 112 12, 128 10"
                stroke="var(--dark-ink)"
                strokeWidth="1.3"
                fill="none"
                strokeLinecap="round"
                opacity="0.55"
                className={cn("hand-draw-path", isInView && "visible")}
                style={{ "--path-length": "180" } as React.CSSProperties}
              />
            </svg>
            
            <p
              className="mt-2 sm:mt-3 font-[var(--font-caveat)] text-[var(--pencil-gray)] text-sm sm:text-base opacity-60"
              style={{ transform: "rotate(-0.5deg)" }}
            >
              — Akshat
            </p>
          </div>
        </div>

        {/* RIGHT: Envelope Illustration — hidden on mobile, appears on md+ */}
        <div
          className={cn(
            "hidden md:flex flex-col items-center justify-center relative",
            "transition-all duration-1000 delay-500",
            isInView ? "opacity-100" : "opacity-0"
          )}
        >
          <EnvelopeIllustration isInView={isInView} />
          
          {/* Small decorative stamps / postal marks below envelope */}
          <div className="mt-6 flex items-center gap-4">
            {/* Postmark circle */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="opacity-20">
              <circle cx="20" cy="20" r="16" stroke="var(--ink-blue)" strokeWidth="0.8" strokeDasharray="2 3" />
              <circle cx="20" cy="20" r="10" stroke="var(--ink-blue)" strokeWidth="0.5" />
              <line x1="8" y1="20" x2="32" y2="20" stroke="var(--ink-blue)" strokeWidth="0.5" />
              <text x="12" y="17" className="font-[var(--font-ibm-plex-mono)]" fill="var(--ink-blue)" fontSize="4" opacity="0.8">2026</text>
              <text x="11" y="26" className="font-[var(--font-ibm-plex-mono)]" fill="var(--ink-blue)" fontSize="3.5" opacity="0.6">INDORE</text>
            </svg>

            {/* Air mail stripes */}
            <svg width="50" height="12" viewBox="0 0 50 12" fill="none" className="opacity-20">
              <rect x="0" y="0" width="7" height="12" fill="var(--ink-blue)" opacity="0.4" />
              <rect x="10" y="0" width="7" height="12" fill="var(--red-pen)" opacity="0.3" />
              <rect x="20" y="0" width="7" height="12" fill="var(--ink-blue)" opacity="0.4" />
              <rect x="30" y="0" width="7" height="12" fill="var(--red-pen)" opacity="0.3" />
              <rect x="40" y="0" width="7" height="12" fill="var(--ink-blue)" opacity="0.4" />
            </svg>
          </div>

          {/* "par avion" label */}
          <span
            className="mt-3 font-[var(--font-ibm-plex-mono)] text-[0.5rem] text-[var(--ink-blue)] opacity-25 tracking-[0.2em] uppercase"
          >
            par avion
          </span>
        </div>
      </div>

      {/* ═══ MOBILE ILLUSTRATION — simplified, appears only on small screens ═══ */}
      <div
        className={cn(
          "mt-10 flex md:hidden justify-center",
          "transition-all duration-700 delay-[900ms]",
          isInView ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
      >
        <svg width="180" height="60" viewBox="0 0 180 60" fill="none">
          {/* Simple envelope outline */}
          <rect x="20" y="10" width="140" height="40" rx="2" stroke="var(--ink-blue)" strokeWidth="0.8" opacity="0.25" />
          <path d="M 20 10 L 90 35 L 160 10" stroke="var(--ink-blue)" strokeWidth="0.7" opacity="0.2" />
          {/* Air mail stripes */}
          <rect x="22" y="46" width="5" height="3" fill="var(--ink-blue)" opacity="0.15" />
          <rect x="29" y="46" width="5" height="3" fill="var(--red-pen)" opacity="0.12" />
          <rect x="36" y="46" width="5" height="3" fill="var(--ink-blue)" opacity="0.15" />
          {/* Stamp */}
          <rect x="135" y="14" width="16" height="18" rx="1" stroke="var(--ink-blue)" strokeWidth="0.6" opacity="0.2" />
          <circle cx="143" cy="23" r="5" stroke="var(--ink-blue)" strokeWidth="0.4" opacity="0.15" />
        </svg>
      </div>
    </section>
  );
}
