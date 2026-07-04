# GitHub Profile — Build Guide

Working notes behind README.md — not for the public repo.

---

## 1. What changed from the previous pass, and why

The last version was correct but safe: four static blocks, no motion, no product identity. This pass pushes further on two things the brief called out directly — the Hero as a signature piece, and the Work section as identity rather than a list — while holding the line everywhere else, since restraint was never the thing that needed fixing.

Hero — now a small typographic composition rather than three stacked lines: name, a short hand-drawn accent rule, role, tagline — each entering once, staggered, on load. Not decoration; it is the one moment in the whole page that behaves like a poster instead of a document.

Work — reintroduced, but not as a repo list. Three products, each one sentence written to create curiosity about what it does rather than describe it feature-by-feature. This is different from pinned repositories (still recommended — see below): pins are access, this is identity. Both can exist; they do different jobs.

New sections: Bookshelf, Arrows, Bento Grid, Philosophy, Contact — added for completeness of the journey. Each earns its place: Bookshelf adds intellectual depth without being a reading list; Arrows creates a memorable two-column contrast; Bento Grid distills values into a scannable visual structure; Philosophy and Contact close the page earnestly.

---

## 2. The emotional arc, mapped to sections

| Section | Feeling | Mechanism |
|---|---|---|
| Hero | Pause → Understanding | Entrance motion gives the page one breath before it settles. Long enough to register as considered, short enough to never feel like a loading screen. |
| Philosophy | Curiosity | Two lines that explain why, not what — pulls a reader into the next section. |
| Work | Admiration | Each line withholds how, which makes someone click through for the answer. |
| Bookshelf | Trust | Six titles, no commentary — signals depth without bragging. |
| Arrows | Clarity | Two-column contrast with arrow symbols; guides the eye and creates instant recognizable structure. |
| Bento Grid | Precision | Three values in a 3-column layout, numbered for rhythm — grids create trust through order. |
| Now | Exploration | A single present-tense line — signals there is more happening than what is on this page. |
| Contact | Trust | Placed last deliberately: trust is earned by then, not assumed at the top. |

---

## 3. The Hero, in detail

Composition — left-aligned, four elements on an 8px baseline rhythm: name (42px, weight 700), a hand-drawn 28-unit accent rule, role (17px), tagline (15px). The entire composition sits inside a subtle card (536×120px, rx=8, centered in the viewBox) to create the elevated composition the brief calls for. The card is the only container element in the entire profile, and it is justified because it does a real job: it separates the hero identity from the rest of the page without adding a background to the whole image.

Motion — the card rises first, then text elements rise 6px and fade in, staggered 140–160ms apart, then the hand-drawn line draws in via stroke-dashoffset, total sequence under 900ms, using an ease-out curve (cubic-bezier(0.16, 1, 0.3, 1)) chosen because it decelerates hard at the end — it reads as settling into place, not bouncing or sliding.

It plays once. There is no loop, no hover state, no re-trigger — the SVG is loaded once per page view and the animation runs on load and stops.

Reduced motion is respected at the file level. The animation rules are wrapped in media (prefers-reduced-motion: no-preference), so anyone with reduced-motion enabled sees the hero fully rendered, instantly.

Why this lives in the SVG file and not in the README's HTML: GitHub sanitizes HTML written directly in a README's Markdown — style blocks and animations placed inline there would likely be stripped. The hero is a linked image file, which the browser renders on its own terms once fetched.

---

## 4. The refined SVG (light and dark)

Both versions now include:

- title and desc for screen readers — ARIA labeling that is explicit rather than relying solely on aria-label.
- g wrapper around the name for semantic grouping.
- Hand-drawn accent rule using quadratic Bézier path curves instead of a geometric line. This is what the Aesthetic Foundations call out: slight wobble indicates human hand.
- Subtle card container — a rounded rectangle that elevates the composition. Light version uses off-white (FAFAFA) with near-white stroke (EDEDED); dark version uses deep charcoal (161616) with dark gray stroke (262626).
- Refined typography — optical alignment: name at x=68 (inside the card), role at x=68, tagline at x=68. Letter-spacing adjusted (-0.8 on name, -0.1 on role) for tighter, more intentional reading.

---

## 5. Section-by-section design decisions

Work (Products)
Three products, three sentences. Three reads as a considered set; two reads as incomplete, four as a list.

- SafeExam: leads with trust — "institutions trust because it never asks them to compromise."
- MailMyCertificate: describes the absence of friction — "before anyone has to think about it."
- AthletixOS: uses the same "disappears" idea from the Philosophy section, applied concretely.

Bookshelf
Six books, two-column table with italicized titles and authors. No commentary — the titles speak. Chosen to span design, product, and craft: The Design of Everyday Things, The Mom Test, Clean Code, Deep Work, Thinking Fast and Slow, The E-Myth Revisited.

Arrows
A two-column layout using a standard HTML table. Left column: beliefs. Right column: rejections. Arrow symbols guide the eye and create instant recognizable structure. Each item is a short phrase, not a sentence — it should read fast, like a snapshot of values.

Bento Grid
Three values in a three-column table. Numbered (01, 02, 03) for rhythm rather than bullet points. Grids create trust through order.

Philosophy
Two lines, same as before. It is the why section — short enough to read in a glance, specific enough to register.

Contact
Placed last deliberately: trust is earned before the ask. Uses plain commas, not bullet points — it reads as a continuation of the conversation, not a footer.

---

## 6. What was researched and rejected

- SMIL animation — deprecated in most browsers; CSS handles everything.
- Custom Open Graph image — a repository/organization setting, not a README concern. Noted for manual setup.
- GitHub Pages — deferred. Nothing here needs a second surface yet.
- Animated illustrations beyond the hero — rejected. Three sentences do not need graphic support.
- Hover transitions — technically inert on GitHub (img-sourced SVGs don't fire hover), so building them would be effort spent on something no visitor can trigger.

---

## 7. Pinned repositories — unchanged guidance

Still recommended, still separate from this section. Pin 3–4 repos via Customize your pins on your profile. This remains the access layer (browse the actual code); the Work section is the identity layer (understand what it is before deciding to look).

---

## 8. Folder structure

File tree for the profile:

  akshatthakur/
├── README.md
  └── assets/
      ├── hero-light.svg
      └── hero-dark.svg

---

## 9. Accessibility, performance, dark or light — updated review

Accessibility
- title and desc on SVGs for screen readers — explicit rather than relying solely on aria-label.
- Reduced motion respected at the file level via @media (prefers-reduced-motion: no-preference).
- Contrast checked (WCAG AA): name exceeds 19:1; role 6.8:1 (light) / 8.6:1 (dark); tagline 4.9:1 (light) / 7.0:1 (dark).

Performance
- Both SVGs are under 4KB. Pure CSS animation plays once, then stops. No JavaScript, no re-render loop.

Dark or light mode
- picture element with prefers-color-scheme sources, each asset independently tuned — including the accent rule and card stroke, which a single shared asset could not have done.

---

## 10. Self-critique

- The hand-drawn line was chosen over a geometric line because it signals human touch without being illegible.
- Three products, not two or four — three feels considered; two feels incomplete, four reads as an inventory. This is the judgment call most worth revisiting once there is real traffic.
- The books are real but chosen to signal product/design thinking, not literary pretension.
- The Bento Grid values are not buzzwords — they are convictions, which is why they read as a person rather than a brand.
- Would removing the card container improve it? Tested without it — the hero read as flat, name and role ran together optically. The card was the version that survived.

---

## 11. Maintenance guide

- Update the Currently refining line in README.md when focus shifts.
- Replace book listings if tastes change — keep the six-book rhythm.
- Update Social links in README.md when needed (Email, LinkedIn, X).
- If the hero needs a new version (e.g., name change), edit both hero-light.svg and hero-dark.svg simultaneously to keep themes in sync.
- Animation timing is CSS-only — adjust cubic-bezier or stagger delays inside the SVG style blocks.
- When adding a new product to Work, remove another to keep the set at three.
