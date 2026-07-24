import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Principles } from "@/components/sections/Principles";
import { Gallery } from "@/components/sections/Gallery";
import { Future } from "@/components/sections/Future";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/layout/Navigation";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Timeline />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Principles />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <Future />
        <SectionDivider />
        <Contact />
      </main>

      {/* Footer — minimal */}
      <footer className="content-container py-12 text-center">
        <p className="text-xs text-[var(--gray-400)] font-[var(--font-inter)]">
          Designed & built by Akshat Thakur — {new Date().getFullYear()}
        </p>
        <p
          className="mt-2 text-xs font-[var(--font-caveat)] text-[var(--pencil-gray)] opacity-50"
          aria-hidden="true"
        >
          every pixel placed with intent
        </p>
      </footer>
    </>
  );
}
