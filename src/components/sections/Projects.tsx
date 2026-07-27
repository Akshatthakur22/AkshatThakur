"use client";

import { projects } from "@/content/data";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ChapterLabel } from "@/components/ui/ChapterLabel";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <article
      ref={ref}
      className={cn(
        "relative p-5 sm:p-8 md:p-10",
        "bg-[var(--card-bg)] border border-[var(--card-border)]",
        "transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Version label — top right */}
      <span
        className={cn(
          "absolute top-3 sm:top-4 right-4 sm:right-5",
          "font-[var(--font-ibm-plex-mono)] text-[0.5rem] sm:text-[0.55rem] text-[var(--ink-blue)]",
          "tracking-wider uppercase opacity-0",
          "transition-opacity duration-700 delay-500",
          isInView && "opacity-45"
        )}
        aria-hidden="true"
      >
        v{index + 1}.0 — {project.status}
      </span>

      {/* Blueprint corner frame */}
      <svg
        className={cn(
          "absolute top-0 left-0 pointer-events-none hidden sm:block",
          "transition-opacity duration-1000 delay-600",
          isInView ? "opacity-100" : "opacity-0"
        )}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path d="M 0 12 L 0 0 L 12 0" stroke="var(--ink-blue)" strokeWidth="0.6" opacity="0.25" />
      </svg>
      <svg
        className={cn(
          "absolute bottom-0 right-0 pointer-events-none hidden sm:block",
          "transition-opacity duration-1000 delay-600",
          isInView ? "opacity-100" : "opacity-0"
        )}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path d="M 40 28 L 40 40 L 28 40" stroke="var(--ink-blue)" strokeWidth="0.6" opacity="0.25" />
      </svg>

      {/* Title & Tagline */}
      <h3 className="text-h2 font-[var(--font-geist-sans)] mb-1 pr-12 sm:pr-20">
        {project.title}
      </h3>
      {project.period && (
        <p className="text-[0.55rem] sm:text-[0.6rem] font-[var(--font-ibm-plex-mono)] text-[var(--gray-400)] tracking-wider mb-1.5">
          {project.period}
        </p>
      )}
      <p className="text-xs sm:text-sm font-[var(--font-instrument-serif)] italic text-[var(--gray-500)] mb-4 sm:mb-6">
        {project.tagline}
      </p>

      {/* Problem → Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div>
          <span className="text-[0.55rem] sm:text-[0.6rem] font-[var(--font-ibm-plex-mono)] text-[var(--gray-400)] uppercase tracking-wider block mb-1.5 sm:mb-2">
            Problem
          </span>
          <p className="text-xs sm:text-sm text-[var(--gray-600)] font-[var(--font-inter)] leading-relaxed">
            {project.problem}
          </p>
        </div>
        <div className="relative">
          {/* Iteration arrow — hidden on mobile */}
          <svg
            className="absolute -left-4 top-3 hidden md:block"
            width="8"
            height="20"
            viewBox="0 0 8 20"
            fill="none"
            aria-hidden="true"
          >
            <path d="M 0 10 L 7 10" stroke="var(--ink-blue)" strokeWidth="0.7" opacity="0.35" />
            <path d="M 4 7 L 7 10 L 4 13" stroke="var(--ink-blue)" strokeWidth="0.7" opacity="0.35" fill="none" />
          </svg>
          <span className="text-[0.55rem] sm:text-[0.6rem] font-[var(--font-ibm-plex-mono)] text-[var(--gray-400)] uppercase tracking-wider block mb-1.5 sm:mb-2">
            Solution
          </span>
          <p className="text-xs sm:text-sm text-[var(--gray-600)] font-[var(--font-inter)] leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-[0.55rem] sm:text-[0.6rem] font-[var(--font-ibm-plex-mono)] text-[var(--gray-500)] bg-[var(--gray-50)] px-2 sm:px-2.5 py-0.5 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Outbound links — descriptive anchor text, one entity per link */}
      {(project.liveUrl || project.github) && (
        <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-[var(--ink-blue)] font-[var(--font-inter)] hover:underline underline-offset-4"
            >
              Visit {project.title} →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-[var(--ink-blue)] font-[var(--font-inter)] hover:underline underline-offset-4"
            >
              {project.title} source on GitHub →
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="chapter-spacing content-container"
    >
      {/* Chapter opener — the question this chapter answers */}
      <ChapterLabel
        number="05"
        question="What has he built?"
        isInView={isInView}
      />

      <h2
        className={cn(
          "text-h1 font-[var(--font-geist-sans)] mb-3 sm:mb-4 max-w-xl",
          "transition-all duration-700 delay-100",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        What I&apos;ve built
      </h2>

      <p
        className={cn(
          "text-body text-[var(--gray-500)] mb-8 sm:mb-10 max-w-md font-[var(--font-inter)]",
          "transition-all duration-700 delay-200",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        Every project is a notebook spread. Problem on the left, solution on the right.
      </p>

      {/* Project cards */}
      <div className="grid gap-5 sm:gap-8 max-w-3xl">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
