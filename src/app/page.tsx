import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Principles } from "@/components/sections/Principles";
import { Gallery } from "@/components/sections/Gallery";
import { Future } from "@/components/sections/Future";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/layout/Navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { person } from "@/lib/site";
import { contactInfo } from "@/content/data";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navigation />

      <main className="relative z-10">
        {/* Chapter 01 — Who is this person? */}
        <Hero />

        <div className="chapter-transition" aria-hidden="true" />

        {/* Chapter 02 — How does he think? */}
        <About />

        <div className="chapter-transition" aria-hidden="true" />

        {/* Chapter 03 — How did he get here? */}
        <Timeline />

        <div className="chapter-transition" aria-hidden="true" />

        {/* Chapter 04 — Where has he worked? */}
        <Experience />

        <div className="chapter-transition" aria-hidden="true" />

        {/* Chapter 05 — What has he built? */}
        <Projects />

        <div className="chapter-transition" aria-hidden="true" />

        {/* Chapter 06 — What does he believe? */}
        <Principles />

        <div className="chapter-transition" aria-hidden="true" />

        {/* Chapter 07 — What moments shaped him? */}
        <Gallery />

        <div className="chapter-transition" aria-hidden="true" />

        {/* Chapter 08 — Where is he going? */}
        <Future />

        <div className="chapter-transition" aria-hidden="true" />

        {/* Chapter 09 — Can I take this with me? */}
        <Resume />

        <div className="chapter-transition" aria-hidden="true" />

        {/* Chapter 10 — How can I reach him? */}
        <Contact />
      </main>

      {/* Footer — carries the entity name, role and location in crawlable text */}
      <footer className="content-container py-8 sm:py-10 text-center relative z-10">
        <p className="text-[0.65rem] sm:text-xs text-[var(--gray-500)] font-[var(--font-inter)]">
          <strong className="font-medium text-[var(--gray-600)]">
            {person.name}
          </strong>{" "}
          — {person.jobTitle}, {contactInfo.location}
        </p>
        <p className="mt-2 text-[0.6rem] sm:text-[0.65rem] text-[var(--gray-400)] font-[var(--font-ibm-plex-mono)] tracking-wider">
          Designed & built by hand — {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
