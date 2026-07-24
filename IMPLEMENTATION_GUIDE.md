# Project Atlas — Complete Implementation Guide

> This document is a full reference for any AI agent or human developer working on this project. It describes exactly what exists, what each file does, where to put real content, and what enhancements are planned.

---

## 1. Project Overview

**Project Atlas** is Akshat Thakur's personal resume/portfolio website. It is a single-page narrative that fuses:

1. **Apple's structural discipline** — clean typography, editorial whitespace, fluid springs, restraint
2. **Hand-drawn creative personality** — pen sketches, margin notes, stickers, construction lines, Caveat handwriting font
3. **Psychology** — scroll-driven storytelling, progressive reveal, the feeling of discovering someone's private notebook

The site is NOT a typical portfolio. It's an engineering sketchbook where ideas evolve from rough to polished as you scroll.

---

## 2. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.2.11 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS v4 | 4.x |
| Animation | Motion (formerly Framer Motion) | 12.42.2 |
| Icons | Lucide React | 1.26.0 |
| React | React | 19.2.4 |
| Node | Node.js | 20+ recommended |

### Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint check
```

---

## 3. Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — fonts, metadata, html structure
│   │   ├── page.tsx            # Main page — composes all sections in order
│   │   ├── globals.css         # Design system — CSS variables, typography classes, animations
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   ├── hand-drawn/         # Hand-drawn decorative elements (SVG-based)
│   │   │   ├── index.ts        # Barrel export
│   │   │   ├── ConstructionLines.tsx  # Architectural grid/crosshair/guide overlays
│   │   │   ├── HandDrawnArrow.tsx     # SVG arrow with wobble (down/right/left)
│   │   │   ├── HandDrawnUnderline.tsx # SVG wavy underline that draws on scroll
│   │   │   ├── MarginNote.tsx         # Positioned handwritten note in margin
│   │   │   ├── RubberStamp.tsx        # "SHIPPED" / "IN PROGRESS" stamp
│   │   │   └── StickyNote.tsx         # Yellow/white sticky note container
│   │   │
│   │   ├── layout/
│   │   │   └── Navigation.tsx  # Floating nav bar with scroll progress indicator
│   │   │
│   │   ├── sections/           # Each page section as a standalone component
│   │   │   ├── index.ts        # Barrel export
│   │   │   ├── Hero.tsx        # Full-height intro with name, title, construction lines
│   │   │   ├── About.tsx       # Story + philosophy with margin notes
│   │   │   ├── Timeline.tsx    # Vertical timeline with year dots
│   │   │   ├── Experience.tsx  # Role cards with handwritten margin notes
│   │   │   ├── Projects.tsx    # Project "spreads" with problem→solution narrative
│   │   │   ├── Principles.tsx  # Engineering principles list with dot-grid background
│   │   │   ├── Gallery.tsx     # Photo grid with tape, rotation, captions (placeholders)
│   │   │   ├── Future.tsx      # Dreams/vision with sticky note
│   │   │   └── Contact.tsx     # Email, GitHub, LinkedIn links + handwritten sign-off
│   │   │
│   │   └── ui/
│   │       ├── Section.tsx     # Reusable section wrapper with scroll-reveal
│   │       └── SectionDivider.tsx  # Hand-drawn SVG line between sections
│   │
│   ├── content/
│   │   └── data.ts            # ★ ALL CONTENT LIVES HERE — single source of truth
│   │
│   ├── hooks/
│   │   ├── useInView.ts       # IntersectionObserver hook for scroll-triggered reveals
│   │   └── useScrollProgress.ts  # Returns 0→1 scroll position for progress bar
│   │
│   ├── lib/
│   │   └── utils.ts           # cn() class merger + SVG path generators
│   │
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces (TimelineEvent, Project, etc.)
│   │
│   ├── features/              # Empty — reserved for future complex features
│   ├── public/                # Empty — reserved for images/SVGs
│   └── styles/                # Empty — reserved for additional CSS modules
│
├── public/                    # Next.js static assets folder
├── prd.md                     # Product Requirements Document (design source of truth)
├── skill.md                   # Design System Reference (Apple + Hand-drawn rules)
├── AGENTS.md                  # AI agent rules
├── CLAUDE.md                  # AI context
└── package.json
```

---

## 4. Design System (globals.css)

### Color Tokens

**Apple Layer (structural):**
- `--background` / `--foreground` — white/near-black
- `--gray-50` through `--gray-900` — neutral scale
- `--accent-blue` — `#0071e3` (Apple blue, used sparingly)

**Hand Layer (personality):**
- `--ink-blue` — `#2B4C7E` (fountain pen ink, primary hand color)
- `--pencil-gray` — `#6B7B8D` (graphite, secondary)
- `--highlighter-yellow` — `#FFF3CD` (muted highlight)
- `--sticky-note` — `#FFFDE7` (pale yellow paper)
- `--red-pen` — `#C0392B` (corrections, rare)
- `--green-check` — `#27AE60` (approvals, very rare)
- `--dark-ink` — `#1A1A2E` (bold annotations)
- `--paper-warm` — `#FDFCFA` (page background)

### Typography Scale

| Class | Size | Use |
|-------|------|-----|
| `.text-display` | clamp(3rem, 6vw, 5rem) | Name on hero |
| `.text-h1` | clamp(2rem, 4vw, 3.5rem) | Section titles |
| `.text-h2` | clamp(1.5rem, 3vw, 2.5rem) | Subsection / editorial quotes |
| `.text-h3` | clamp(1.25rem, 2vw, 1.75rem) | Card titles |
| `.text-body` | 1.125rem | Paragraphs |
| `.text-caption` | 0.875rem | Small labels |
| `.text-hand` | (Caveat) | General hand text |
| `.text-hand-note` | 1rem | Margin annotations |
| `.text-hand-label` | 0.875rem bold | Section numbers |

### Fonts (loaded in layout.tsx)

| Variable | Font | Role |
|----------|------|------|
| `--font-geist-sans` | Geist | Display headings |
| `--font-inter` | Inter | Body text |
| `--font-instrument-serif` | Instrument Serif | Italic editorial accents |
| `--font-ibm-plex-mono` | IBM Plex Mono | Code, dates, tech tags |
| `--font-caveat` | Caveat | All handwritten elements |

### Key CSS Classes

- `.section-spacing` — Apple-scale vertical padding (clamp 6-10rem)
- `.content-container` — Max-width 72rem with responsive horizontal padding
- `.hand-draw-path` / `.hand-draw-path.visible` — SVG stroke-dashoffset animation
- `.hand-sticker` — Rotation + hover lift for sticky notes

---

## 5. Content Data Structure (`src/content/data.ts`)

This is the ONLY file you need to edit to update content. Types are defined in `src/types/index.ts`.

### Data Exports

| Export | Type | Used By |
|--------|------|---------|
| `timelineEvents` | `TimelineEvent[]` | Timeline.tsx |
| `projects` | `Project[]` | Projects.tsx |
| `experiences` | `Experience[]` | Experience.tsx |
| `principles` | `Principle[]` | Principles.tsx |
| `aboutContent` | `{ intro, story[], philosophy }` | About.tsx |
| `futureContent` | `{ dreams[], vision }` | Future.tsx |
| `contactInfo` | `{ email, linkedin, github, twitter }` | Contact.tsx |

### TypeScript Interfaces

```typescript
interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  tech: string[];
  lessons: string[];
  link?: string;
  github?: string;
  status: "shipped" | "in-progress" | "dreaming";
}

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  note?: string;  // handwritten margin note (optional)
}

interface Principle {
  id: string;
  title: string;
  description: string;
}
```

---

## 6. Component Architecture — How Each Section Works

### Hero (`Hero.tsx`)
- Full viewport height, centered content
- Construction line SVGs in background (crosshair + guides)
- Handwritten coordinates in corner (GPS location)
- Staggered opacity/translate animations with increasing delays
- SVG underline beneath tagline draws on view
- Scroll hint at bottom with bounce animation
- Margin note: "← start here. keep scrolling."

### About (`About.tsx`)
- Section number in Caveat (hand label)
- Large editorial intro in Instrument Serif italic
- Story paragraphs with a MarginNote on the first
- HandDrawnArrow pointing down between story and philosophy
- Philosophy block with left ink-blue border
- StickyNote placed asymmetrically at bottom right

### Timeline (`Timeline.tsx`)
- Vertical left-aligned timeline
- Year (mono) → dot → content, each revealed on scroll
- Dots have slightly irregular border-radius (hand-drawn feel)
- Connecting vertical lines between nodes
- Handwritten "...and the story continues ↓" at bottom

### Experience (`Experience.tsx`)
- Card-based layout (white bg, subtle border)
- Period in monospace, role/company, description, bullet highlights
- Optional handwritten `note` appears at bottom-right rotated
- Cards stagger-reveal on scroll

### Projects (`Projects.tsx`)
- "Spread" layout — large cards with problem/solution columns
- RubberStamp in top-right corner ("SHIPPED" / "IN PROGRESS" / "DREAMING")
- Tech stack as rounded pills
- "Lessons learned:" in Caveat with numbered list
- GitHub/Live links at bottom

### Principles (`Principles.tsx`)
- Dot-grid background (ConstructionLines variant="grid")
- Numbered list (Caveat numbers in left margin)
- Each principle: h3 title + body description
- Slide-in-from-left animation
- Handwritten closing note with star

### Gallery (`Gallery.tsx`)
- Grid of photo placeholders (currently shows "[ photo ]")
- Each card has slight rotation, tape strip on top, handwritten caption
- Cards stagger-reveal with scale animation
- Ready for real images — replace the placeholder `div`

### Future (`Future.tsx`)
- Arrow-prefixed list of dreams
- StickyNote with the vision statement
- Stagger-reveal animation per list item

### Contact (`Contact.tsx`)
- Mail + External links to GitHub/LinkedIn
- Icons from Lucide (Mail, ExternalLink)
- Handwritten sign-off: "Thanks for reading this far. — Akshat"

### Navigation (`Navigation.tsx`)
- Fixed top-right, floating translucent pill
- Shows after 2% scroll progress
- IntersectionObserver tracks active section
- Scroll progress bar below nav (linear fill, ink-blue)
- **← THIS IS THE SCROLL INDICATOR YOU WANT TO REDESIGN**

---

## 7. Animation System

### Scroll Reveal (useInView hook)
Every section uses IntersectionObserver to trigger:
- `opacity: 0 → 1`
- `translateY: 8px → 0` (or translateX for some)
- `transition-duration: 700ms`
- `transition-delay` staggered per child (100-200ms increments)

### SVG Path Drawing (hand-draw-path)
SVG elements with class `hand-draw-path`:
- `stroke-dasharray` set to total path length
- `stroke-dashoffset` transitions from full → 0 when `.visible` added
- Duration: 1200ms

### Sticker Placement
`.hand-sticker` elements:
- Base rotation via CSS variable `--rotation`
- On hover: extra -2px translateY + shadow increase

---

## 8. Known Issues & Enhancement Targets

### Issue: Scroll Progress Indicator (Priority: HIGH)
**Current state:** A thin 2px linear bar below the navigation pill.
**Problem:** It looks generic — doesn't match the hand-drawn creative aesthetic.
**Enhancement ideas:**
- Replace with a hand-drawn ink line that fills progressively (SVG path with stroke-dashoffset tied to scroll)
- Or a vertical pen stroke on the right edge of the screen
- Or dot markers that fill as you pass each section
- Or a small notebook tab indicator on the right margin
- Should feel hand-crafted, not like a standard progress bar

### Enhancement: Gallery — Real Images
**Current:** Placeholder `[ photo ]` divs
**Needed:** Replace with actual images in `public/images/`, update Gallery.tsx to use `<Image>` from Next.js

### Enhancement: Motion Library Integration
**Current:** All animations use CSS transitions via `transition-all duration-700`
**Could improve:** Use the `motion` library (already installed) for spring-based animations, stagger groups, and scroll-linked parallax

### Enhancement: Smooth Scroll Sections
**Current:** CSS `scroll-behavior: smooth` + anchor links
**Could improve:** More polished scroll-to behavior with spring easing via Motion

### Enhancement: Mobile Navigation
**Current:** Horizontal pill nav — may overflow on small screens
**Needed:** Collapse to hamburger or bottom sheet on mobile

### Enhancement: Dark Mode (Optional — low priority)
The PRD says "a notebook is white" — but a subtle warm-dark mode could be added as a toggle

### Enhancement: Real Hand-Drawn SVG Illustrations
**Current:** Construction lines and arrows are geometric approximations
**Could improve:** Add actual hand-drawn sketches (lightbulbs, gears, code brackets) as SVG files in `public/svgs/`

### Enhancement: Page Transitions
**Could add:** Subtle page-turn or paper-fold effects between sections using Motion layout animations

### Enhancement: Easter Eggs (from PRD)
- Console message for developers who inspect
- Double-click doodles to reveal thoughts
- Keyboard shortcut for "raw notes" view
- Second-visit-only margin notes (localStorage)

---

## 9. How to Update Content

### Step 1: Edit `src/content/data.ts`
All text content lives here. Change any string, add/remove items from arrays.

### Step 2: Add Images
Place images in `/public/images/` and reference them in the Gallery or other sections.

### Step 3: Update Contact Info
In `data.ts` → `contactInfo` object. All links update automatically.

### Step 4: Add/Remove Timeline Events
Add or remove objects in `timelineEvents[]`. The Timeline component auto-renders.

### Step 5: Add/Remove Projects
Add objects to `projects[]`. Each needs: id, title, tagline, problem, solution, tech[], lessons[], status.

---

## 10. How to Add a New Section

1. Create `src/components/sections/YourSection.tsx`
2. Use the `<Section id="your-id">` wrapper for consistent spacing + scroll reveal
3. Add a section number in `.text-hand-label`
4. Add 1-2 hand-drawn elements (from `components/hand-drawn/`)
5. Export from `src/components/sections/index.ts`
6. Add to `src/app/page.tsx` in the correct position with `<SectionDivider />` above
7. Add nav item in `Navigation.tsx` → `navItems[]`

---

## 11. Deployment

The project is statically exportable. Deploy to:
- **Vercel** (recommended — zero config with Next.js)
- **Netlify** (add `output: 'export'` to next.config.ts)
- **GitHub Pages** (same static export)

---

## 12. File-by-File Quick Reference

| File | Purpose | When to Edit |
|------|---------|--------------|
| `src/content/data.ts` | All content | To update any text, links, projects |
| `src/app/globals.css` | Design tokens | To change colors, spacing, fonts |
| `src/app/layout.tsx` | Fonts + metadata | To add fonts or change SEO |
| `src/app/page.tsx` | Section order | To reorder/add/remove sections |
| `src/components/layout/Navigation.tsx` | Nav + scroll progress | **TO FIX: redesign scroll indicator** |
| `src/components/sections/*.tsx` | Individual sections | To change layout/behavior of any section |
| `src/components/hand-drawn/*.tsx` | Decorative elements | To add new hand-drawn components |
| `src/hooks/*.ts` | React hooks | To change scroll/intersection behavior |
| `src/lib/utils.ts` | Utilities | To add helper functions |
| `src/types/index.ts` | TypeScript types | When adding new data structures |

---

## 13. Prompt Template for AI Enhancements

When asking an AI to make changes to this project, provide:

```
Context: This is Project Atlas — a personal resume website built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Motion library. It fuses Apple's editorial design with hand-drawn notebook elements (Caveat font, SVG ink illustrations, sticky notes, construction lines).

Design system: See `src/app/globals.css` for all CSS variables and tokens. See `skill.md` for the full design philosophy.

Content: All content is in `src/content/data.ts`. Types in `src/types/index.ts`.

The aesthetic rules:
- Apple layer: Perfect typography, generous whitespace, spring animations, editorial calm
- Hand layer: Caveat font, ink-blue (#2B4C7E) and pencil-gray (#6B7B8D) colors, imperfect SVG strokes, slight rotations, max 2 hand elements per viewport
- Both layers always present, never competing

Specific task: [describe what you want changed]
```

---

## 14. Current Status: ~80% Complete

**Done:**
- [x] Full project scaffold (Next.js 16, TS, Tailwind v4)
- [x] Design system (colors, typography, spacing, animations)
- [x] All 9 sections built and rendering
- [x] Hand-drawn component library (6 components)
- [x] Scroll-triggered animations throughout
- [x] Content data structure (editable in one file)
- [x] Responsive typography (clamp-based)
- [x] Accessibility (focus states, reduced motion, semantic HTML, aria)
- [x] SEO metadata (Open Graph, Twitter cards)
- [x] Build passes cleanly (zero errors)

**Remaining 20%:**
- [ ] Redesign scroll progress indicator (from generic bar → creative/hand-drawn)
- [ ] Replace gallery placeholders with real images
- [ ] Mobile navigation (currently overflows on small screens)
- [ ] Upgrade animations to Motion library springs (currently CSS transitions)
- [ ] Add real hand-drawn SVG illustrations (currently only geometric)
- [ ] Final content pass (real descriptions, real data)
- [ ] Performance audit (lighthouse, Web Vitals)
- [ ] Deploy to production (Vercel)
- [ ] Easter eggs implementation
- [ ] OG image generation
