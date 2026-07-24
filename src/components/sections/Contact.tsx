"use client";

import { Section } from "@/components/ui/Section";
import { contactInfo } from "@/content/data";
import { HandDrawnUnderline } from "@/components/hand-drawn";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Mail, ExternalLink } from "lucide-react";

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <Section id="contact">
      <div ref={ref} className="max-w-2xl">
        {/* Section number */}
        <span className="text-hand-label block mb-2" aria-hidden="true">
          09.
        </span>

        <h2 className="text-h1 font-[var(--font-geist-sans)] mb-4">
          Let&apos;s talk
        </h2>

        <HandDrawnUnderline width={120} visible={isInView} className="mb-12" />

        <p className="text-body text-[var(--gray-500)] font-[var(--font-inter)] mb-12 max-w-md">
          Building something interesting? Have a question? Just want to say hello?
          I&apos;d love to hear from you.
        </p>

        {/* Contact links — clean, minimal */}
        <div
          className={cn(
            "space-y-5",
            "transition-all duration-700 delay-300",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-3 text-[var(--foreground)] hover:text-[var(--ink-blue)] transition-colors group"
          >
            <Mail size={18} className="text-[var(--gray-400)] group-hover:text-[var(--ink-blue)] transition-colors" />
            <span className="text-base font-[var(--font-inter)]">
              {contactInfo.email}
            </span>
          </a>

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[var(--foreground)] hover:text-[var(--ink-blue)] transition-colors group"
          >
            <ExternalLink size={18} className="text-[var(--gray-400)] group-hover:text-[var(--ink-blue)] transition-colors" />
            <span className="text-base font-[var(--font-inter)]">
              GitHub
            </span>
          </a>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[var(--foreground)] hover:text-[var(--ink-blue)] transition-colors group"
          >
            <ExternalLink size={18} className="text-[var(--gray-400)] group-hover:text-[var(--ink-blue)] transition-colors" />
            <span className="text-base font-[var(--font-inter)]">
              LinkedIn
            </span>
          </a>
        </div>

        {/* Handwritten sign-off */}
        <div
          className={cn(
            "mt-20 pt-12 border-t border-[var(--gray-100)]",
            "transition-opacity duration-700 delay-700",
            isInView ? "opacity-100" : "opacity-0"
          )}
        >
          <p
            className="font-[var(--font-caveat)] text-[var(--pencil-gray)] text-xl"
            style={{ transform: "rotate(-1deg)" }}
          >
            Thanks for reading this far.
            <br />
            — Akshat
          </p>
        </div>
      </div>
    </Section>
  );
}
