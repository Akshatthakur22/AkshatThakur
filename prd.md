# Product Requirements Document (PRD)

## Project Atlas

### *The Digital Sketchbook of a Software Engineer*

**Version:** 1.0
**Status:** Product Definition
**Owner:** Akshat Thakur

---

# 1. Vision

> **Every great product begins as a sketch. This is the story of mine.**

Project Atlas is not a portfolio.

It is a digital sketchbook.

It is an interactive journey through the evolution of an engineer—from curiosity to building products that solve real problems.

Instead of showcasing projects as isolated achievements, Atlas reveals the thinking behind them.

Visitors don't browse.

They travel.

Every section feels like a notebook page where ideas slowly transform into software.

---

# 2. Product Philosophy

Atlas combines two seemingly opposite worlds.

## Apple

* Minimalism
* Extraordinary typography
* Space
* Precision
* Editorial layouts
* Motion that disappears
* Calm interface
* Premium feel

with

## Artist's Sketchbook

* Pencil sketches
* Margin notes
* Torn paper
* Maps
* Draft diagrams
* Crossed-out ideas
* Handwritten labels
* Technical doodles
* Puzzle pieces
* Construction lines

The result should feel like

> Apple designed a notebook for software engineers.

---

# 3. Core Experience

The visitor should never feel like they're browsing a portfolio.

Instead they should feel like they found someone's engineering notebook.

The entire experience exists on **one infinitely scrollable page**.

Every scroll reveals another chapter.

The website slowly transforms from rough sketches into polished software.

The beginning feels unfinished.

The ending feels complete.

---

# 4. Emotional Journey

The experience should guide users through these emotions.

Curiosity

↓

Wonder

↓

Connection

↓

Trust

↓

Respect

↓

Inspiration

---

# 5. Design Language

## Theme

Editorial

Notebook

Sketchbook

Museum

Apple

Minimal

Human

Crafted

---

## Visual Style

White dominates.

Everything breathes.

Large margins.

Editorial typography.

Tiny pencil imperfections.

Paper texture (extremely subtle).

Construction grids.

Measurement lines.

Engineering notes.

Invisible geometry.

Nothing noisy.

---

## Colors

Background

Pure White

Soft Ivory

Warm Paper

Typography

Near Black

Soft Gray

Accent

Apple Blue

Muted Pencil Gray

Very occasional warm beige.

No colorful gradients.

No neon.

No glassmorphism.

No gaming aesthetics.

---

# 6. Information Architecture

Entire portfolio is one continuous story.

```
Hero

↓

Introduction

↓

Who I Am

↓

The Sketchbook

↓

Journey Timeline

↓

Map

↓

Experience

↓

Projects

↓

Engineering Principles

↓

Gallery

↓

Future

↓

Contact
```

Every transition should feel natural.

---

# 7. Hero

First screen.

Almost empty.

Only a few elements.

Huge whitespace.

Portrait appears as a half-sketched, half-real illustration.

Small construction lines.

Handwritten coordinates.

Tiny notebook notes.

Name.

Simple headline.

Example

> Akshat Thakur

Software Engineer

Building products that begin as sketches.

Small scroll hint.

Nothing else.

---

# 8. About Me

Not biography.

Storytelling.

Topics

Why engineering.

Why building.

How curiosity became products.

Personal philosophy.

Tiny illustrations.

Margin notes.

Handwritten arrows.

No large paragraphs.

---

# 9. Timeline

One of the biggest sections.

Shows evolution.

Not achievements.

Journey.

Example

School

↓

First Code

↓

International Conference

↓

Research Paper

↓

Hackathons

↓

Google Student Ambassador

↓

Open Source

↓

Products

↓

Today

↓

Future

Each milestone expands beautifully.

---

# 10. Interactive Map

Hand-drawn map.

Pins.

Routes.

Flights.

Cities.

Experiences.

Each location opens stories.

Not Google Maps.

Illustrated.

---

# 11. Experience

Presented like notebook entries.

Each experience becomes a page.

Date.

Sketch.

Lessons.

Impact.

Photos.

Notes.

---

# 12. Projects

Not project cards.

Every project is its own notebook spread.

Each contains

Problem

↓

Sketch

↓

Architecture

↓

Iterations

↓

Challenges

↓

Solution

↓

Final Product

↓

Lessons

Projects become stories.

---

# 13. Engineering Principles

Very unique section.

A notebook page containing principles.

Example

Build for people.

Design before code.

Speed is a feature.

Accessibility matters.

Small sketches.

Diagrams.

---

# 14. Gallery

Collection of

Conference photos

Events

Design sketches

Screenshots

Notebook pages

Whiteboards

Photos should appear naturally.

Pinned with tape.

Paper clips.

Sticky notes.

---

# 15. Future

Dreams.

Vision.

Products to build.

Research interests.

Roadmap.

Should feel hopeful.

---

# 16. Contact

Simple.

Minimal.

Looks handwritten.

Email.

LinkedIn.

GitHub.

Resume.

Nothing more.

---

# 17. Motion Language

Motion should never attract attention.

Motion should support storytelling.

Allowed

Fade

Draw line

Paper unfold

Ink writing

Soft parallax

Image reveal

Notebook flip

Sketch becoming reality

Forbidden

Bounce

Heavy zoom

Elastic

Flash

Excessive rotation

Particle explosions

---

# 18. Illustration Style

Everything should feel handmade.

Engineering notebook.

Technical sketchbook.

Magazine editorial.

Apple keynote.

Design journal.

Never cartoon.

Never childish.

---

# 19. Typography

Editorial scale.

Huge headlines.

Comfortable body text.

Very generous spacing.

Recommended fonts

Primary

Geist

Inter

Secondary

Instrument Serif

IBM Plex Mono

Handwritten labels

Caveat (sparingly)

---

# 20. UI Components

All custom.

No component library appearance.

Components include

Navigation

Notebook Divider

Timeline Node

Map Pin

Sketch Card

Engineering Card

Gallery Stack

Paper Note

Pinned Image

Code Snippet

Quote Block

Section Header

Notebook Stamp

Margin Annotation

Construction Grid

Measurement Overlay

---

# 21. Navigation

Floating.

Minimal.

Almost invisible.

Appears while scrolling.

Progress indicator.

Section titles.

---

# 22. Technical Stack

Framework

Next.js 16 (App Router)

Language

TypeScript

Styling

Tailwind CSS v4

Animation

Motion (formerly Framer Motion)

3D / Canvas

React Three Fiber (only if a scene truly benefits; avoid gratuitous 3D)

Icons

Lucide

Image Optimization

next/image

Typography

next/font

Deployment

Vercel

Analytics

Google Analytics (via GTM)

Performance

Partial Prerendering (where applicable)

Metadata API

Server Components by default

Client Components only for interaction

---

# 23. Performance Goals

Lighthouse

Performance

100

Accessibility

100

SEO

100

Best Practices

100

First Load

<150 KB JS where practical

CLS

Near Zero

Animations

60 FPS

Image Loading

Lazy

---

# 24. Accessibility

Keyboard navigation

Reduced motion support

Semantic HTML

Correct heading hierarchy

Color contrast

Alt text

Focus visibility

Screen reader support

---

# 25. SEO

Rich metadata

Open Graph

Twitter cards

Structured Data (Person)

Dynamic sitemap

Robots.txt

Canonical URLs

---

# 26. Responsive Design

Desktop first.

Tablet optimized.

Mobile is not simplified.

Instead

The notebook intelligently rearranges.

Same experience.

Different layout.

---

# 27. Folder Structure

```text
app/
components/
features/
hooks/
lib/
styles/
public/
content/
types/
```

---

# 28. Engineering Standards

* Strict TypeScript
* ESLint
* Prettier
* Husky + lint-staged
* Absolute imports
* Feature-based architecture
* Reusable components
* Accessibility-first
* Clean code
* No unnecessary client-side rendering

---

# 29. Non-Functional Requirements

The site must:

* Feel handcrafted without sacrificing polish.
* Prioritize typography over decoration.
* Use whitespace intentionally.
* Reward curiosity with subtle details.
* Maintain smooth performance on mid-range devices.
* Degrade gracefully when JavaScript is disabled where feasible.

---

# 30. Success Criteria

A visitor should:

* Understand who you are within the first 20 seconds.
* Remember at least one distinctive interaction or visual metaphor.
* Leave with a clear sense of your engineering philosophy, not just your tech stack.
* Feel invited to explore every section through narrative rather than obligation.
* Reach the end of the page with a strong impression that they have read a thoughtfully crafted story, not scanned a résumé.

---

# Final Design Principle

**Atlas is not a portfolio.**

It is **a living engineering sketchbook** where every section begins as a pencil idea and gradually resolves into a finished product. Apple's restraint provides the structure; the handcrafted notebook aesthetic provides the personality. Together, they create a single-page narrative that is calm, memorable, and unmistakably yours.

---

# 31. The Creative Soul — Hand-Drawn Personality Layer

This is the most important section of the entire document.

Apple provides the skeleton.

**The hand provides the soul.**

## Philosophy

The website is not just inspired by Apple.

It is a fusion of three forces.

### Force 1 — Apple Design

Structure. Precision. Restraint. Typography. Whitespace. Editorial calm.

### Force 2 — Psychology & Human Connection

Every element is placed with intent to evoke emotion. Curiosity. Warmth. Intimacy. The feeling of being invited into someone's personal space. A notebook you shouldn't be reading. But you can't stop.

### Force 3 — Creative Thinking Through the Hand

Hand notes. Hand pen. Small illustrations. Stickers. Sketches. Doodles. Scribbles. Margin thoughts. Crossed-out words. Arrows. Stars. Underlines. Circles around important things.

This is not decoration.

This is the actual personality of the person.

---

## Why This Works

A perfectly polished website says: "I am professional."

A hand-drawn creative website says: "I am human. I think deeply. I sketch before I build. I have ideas that overflow the margins."

People remember the imperfect.

People trust the handmade.

People connect with the human.

---

## Hand-Drawn Elements Catalogue

### Text Elements

* Handwritten margin notes beside sections
* Crossed-out words with corrections above
* Underlined words with pen strokes
* Circled keywords
* Small arrows pointing to important things
* "Note to self:" annotations
* Page numbers written by hand
* Date stamps in handwriting
* Stars and asterisks drawn by pen

### Illustrations

* Tiny pen sketches of concepts (lightbulbs, gears, code brackets)
* Small portrait doodle
* Architecture diagrams drawn by hand
* Flowcharts with hand-drawn boxes and arrows
* Mind maps
* Circuit-like connection lines between sections
* Small icons drawn in ink (not SVG icons — actual hand-drawn)
* Technical doodles (server racks, databases, mobile screens)

### Stickers & Labels

* Sticky notes with thoughts
* Washi tape holding photos
* Paper clips on documents
* Torn paper edges
* Rubber stamps ("SHIPPED", "IN PROGRESS", "DREAM")
* Label maker text
* Badge stickers
* Folder tabs

### Sketches & Marks

* Construction lines (the kind architects draw)
* Grid dots (like dot-grid notebook paper)
* Pencil guidelines that are partially erased
* Coffee ring stains (extremely subtle, very rare)
* Ink blots (tiny, intentional)
* Fold marks on paper
* Tape marks
* Pin holes

---

## Implementation Guidelines for Hand-Drawn Elements

### SVG-Based Illustrations

All hand-drawn elements should be created as SVGs with:

* Irregular stroke widths (varying between 0.5px and 2px)
* Slightly imperfect lines (use bezier curves with small random offsets)
* Pencil-like texture (dashed or varying opacity along strokes)
* Hand-pressure simulation (thicker at start, thinner at end)

### CSS-Based Marks

Some elements can be pure CSS:

* Underlines with `border-bottom` using wavy or rough styles
* Circles around text using `border-radius` with slight rotation
* Arrows using pseudo-elements with hand-drawn SVG paths
* Torn paper edges using clip-path with irregular polygon points

### Animation of Hand-Drawn Elements

When hand-drawn elements appear on scroll:

* Lines should draw themselves (SVG path animation via `stroke-dashoffset`)
* Text should appear as if being written (character by character with slight delay variations)
* Stickers should "place" themselves (slight rotation + scale from 0.8 to 1.0)
* Sketches should fade in with a pencil-scratch motion

### Density Rules

* Never more than 2 hand-drawn elements visible at once per viewport
* Each section gets ONE primary hand element and optionally ONE secondary
* Whitespace between hand elements must be generous
* Hand elements should never compete with content for attention

---

## The Shining Factor

The word is **shining**.

This website should shine.

Not with neon. Not with particles. Not with flashy effects.

It shines because:

* Every detail is intentional
* The hand-drawn elements create intimacy
* The Apple structure creates trust
* The combination creates something no one has seen before
* It feels like discovering a genius's notebook
* It makes the visitor think: "This person thinks differently"

The shine comes from the contrast.

Perfect typography next to imperfect hand notes.

Precise layouts containing wild sketches.

Clean code architecture presented through messy brainstorm diagrams.

This tension is the magic.

---

## Content Personality Voice

When writing content for the site:

* First person, always
* Short sentences
* Honest, not humble-braggy
* Specific details over vague claims
* Show the thinking process, not just the result
* Include failed ideas and pivots
* Use "we" when talking about team projects
* Handwritten notes should feel spontaneous, not curated

Example content tone:

> "I spent three weeks trying to make this work with WebSockets before realizing HTTP polling was actually the right answer. Sometimes the boring solution is the brave one."

---

## Color Palette Extension for Hand Elements

Hand-drawn elements use a slightly different palette:

* Ink Blue — `#2B4C7E` (fountain pen ink)
* Pencil Gray — `#6B7B8D` (HB graphite)
* Highlighter Yellow — `#FFF3CD` (very muted, never neon)
* Sticky Note — `#FFFDE7` (pale yellow paper)
* Red Pen — `#C0392B` (correction marks, used sparingly)
* Green Check — `#27AE60` (approval marks, rare)

These colors ONLY appear on hand-drawn elements. The main site structure remains in the Apple palette (pure white, near-black, soft gray).

---

# 32. Creative Interaction Patterns

## Hover States

When hovering hand-drawn elements:

* Pencil lines get slightly darker (as if pressing harder)
* Stickers lift slightly (subtle shadow increase)
* Handwritten text gets a subtle highlight behind it
* Sketches add one more detail (an extra line appears)

## Scroll Interactions

* Margin notes slide in from the edge as you scroll past their section
* Construction lines draw themselves along the scroll progress
* Stickers "peel" onto the page as they enter viewport
* Sketches build progressively (first strokes, then details)

## Micro-interactions

* Clicking a hand-drawn element reveals a tooltip in handwriting
* Dragging a sticker moves it slightly (like it's not glued down yet)
* Long-pressing a sketch shows the "clean" version underneath

---

# 33. The Notebook Metaphor — Deeper

The entire site IS a notebook. Not just inspired by one.

## Page Feel

* Sections are separated by subtle page-turn effects or notebook dividers
* The background has extremely subtle paper texture (fiber pattern at 2-3% opacity)
* Page edges are slightly uneven (irregular crop marks)
* Some sections feel like they're on different paper types (graph paper, dot grid, lined, blank)

## Notebook Hardware

* Spiral binding indicator on the left edge (visible but not distracting)
* Tab markers on the right edge for sections
* Bookmark ribbon (functional — scrolls to a section)
* Page corner fold (purely decorative, 1-2 per page)

## The Evolution Effect

As the visitor scrolls from top to bottom:

* Beginning: Rougher, more sketchy, more hand-drawn
* Middle: Mix of hand and polished
* End: Clean, resolved, professional — but still warm

This mirrors the creative process: idea → refinement → product.

---

# 34. Photography & Image Treatment

Photos in the portfolio should NOT look like stock photography.

## Treatment

* Slightly desaturated (not black and white, just muted)
* Soft paper-like border (not a hard frame)
* Slight rotation (1-3 degrees, like placed by hand)
* Optionally: tape holding the photo, paper clip in corner
* Shadow suggests the photo sits ON the page, not IN it

## Photo Types Needed

* Working at desk (side angle, not staged)
* Conference speaking (natural moment, not posed)
* Whiteboard/brainstorming session
* Team collaboration
* Close-up of handwritten notes on real paper
* Screen showing code (from over-the-shoulder perspective)

---

# 35. Sound Design (Optional — Progressive Enhancement)

If enabled (user opts in):

* Very subtle paper rustle on scroll
* Pen scratch sound when hand-drawn elements appear
* Soft "place" sound when stickers land
* Page turn swoosh between major sections

Volume: barely perceptible. 5-10% of normal volume.

Default: OFF. Opt-in only. Accessible alternative: none needed, purely additive.

---

# 36. Easter Eggs

Hidden details for curious visitors:

* Double-clicking a hand-drawn doodle reveals the "thought behind it"
* Scrolling past the footer reveals a "backstage" page
* Specific keyboard shortcut opens a "raw notes" view
* Some margin annotations only appear on second visit (localStorage)
* A tiny signature hidden in the page source HTML comment
* Console message: a brief note from Akshat to fellow developers who inspect

These reward exploration without punishing those who don't find them.
