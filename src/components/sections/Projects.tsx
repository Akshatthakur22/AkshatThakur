"use client";

import { Section } from "@/components/ui/Section";
import { projects } from "@/content/data";
import { RubberStamp } from "@/components/hand-drawn";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

function ProjectSpread({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const stampVariant =
    project.status === "shipped"
      ? "success"
      : project.status === "dreaming"
        ? "dream"
        : "default";

  const stampText =
    project.status === "shipped"
      ? "SHIPPED"
      : project.status === "dreaming"
        ? "DREAMING"
        : "IN PROGRESS";

  return (
    <article
      ref={ref}
      className={cn(
        "relative",
        "p-8 md:p-12",
        "bg-white border border-[var(--gray-100)]",
        "transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Rubber stamp — top right */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8">
        <RubberStamp
          text={stampText}
          variant={stampVariant}
          rotation={index % 2 === 0 ? -6 : 8}
        />
      </div>

      {/* Title & Tagline */}
      <h3 className="text-h2 font-[var(--font-geist-sans)] mb-2 max-w-md">
        {project.title}
      </h3>
      <p className="text-base font-[var(--font-instrument-serif)] italic text-[var(--gray-500)] mb-8">
        {project.tagline}
      </p>

      {/* Problem → Solution narrative */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <span className="text-xs font-[var(--font-ibm-plex-mono)] text-[var(--gray-400)] uppercase tracking-wider block mb-3">
            Problem
          </span>
          <p className="text-base text-[var(--gray-600)] font-[var(--font-inter)] leading-relaxed">
            {project.problem}
          </p>
        </div>
        <div>
          <span className="text-xs font-[var(--font-ibm-plex-mono)] text-[var(--gray-400)] uppercase tracking-wider block mb-3">
            Solution
          </span>
          <p className="text-base text-[var(--gray-600)] font-[var(--font-inter)] leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs font-[var(--font-ibm-plex-mono)] text-[var(--gray-500)] bg-[var(--gray-50)] px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Lessons — handwritten style */}
      <div className="border-t border-[var(--gray-100)] pt-6">
        <span className="font-[var(--font-caveat)] text-[var(--ink-blue)] text-base block mb-3">
          Lessons learned:
        </span>
        <ul className="space-y-2">
          {project.lessons.map((lesson, i) => (
            <li
              key={i}
              className="text-sm text-[var(--gray-600)] font-[var(--font-inter)] flex items-start gap-2"
            >
              <span className="font-[var(--font-caveat)] text-[var(--pencil-gray)] shrink-0">
                {i + 1}.
              </span>
              {lesson}
            </li>
          ))}
        </ul>
      </div>

      {/* Links */}
      {(project.github || project.link) && (
        <div className="flex gap-4 mt-6 pt-6 border-t border-[var(--gray-100)]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--ink-blue)] font-[var(--font-inter)] hover:underline underline-offset-4"
            >
              GitHub →
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--ink-blue)] font-[var(--font-inter)] hover:underline underline-offset-4"
            >
              Live →
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      {/* Section number */}
      <span className="text-hand-label block mb-2" aria-hidden="true">
        05.
      </span>

      <h2 className="text-h1 font-[var(--font-geist-sans)] mb-6 max-w-2xl">
        Projects
      </h2>

      <p className="text-body text-[var(--gray-500)] mb-16 max-w-xl font-[var(--font-inter)]">
        Every project is a notebook spread. Problem on the left, solution on the right, lessons in the margins.
      </p>

      {/* Project spreads */}
      <div className="grid gap-12 max-w-4xl">
        {projects.map((project, i) => (
          <ProjectSpread key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
