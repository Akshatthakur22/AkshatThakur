# GitHub Profile — Build Guide

Working notes behind `README.md` — not for the public repo.

---

## 1. What changed from the previous pass, and why

The last version was correct but safe: four static blocks, no motion, no product identity. This pass pushes further on two things the brief called out directly — the Hero as a signature piece, and the Work section as identity rather than a list — while holding the line everywhere else, since restraint was never the thing that needed fixing.

**Hero** — now a small typographic composition rather than three stacked lines: name, a short hand-drawn accent rule, role, tagline — each entering once, staggered, on load. Not decoration; it's the one moment in the whole page that behaves like a poster instead of a document.

**Work** — reintroduced, but not as a repo list. Three products, each one sentence written to create curiosity about what it does rather than describe it feature-by-feature. This is different from pinned repositories (still recommended — see below): pins are *access*, this is *identity*. Both can exist; they do different jobs.

**Everything else — Philosophy, Now, Contact — is unchanged.** Nothing there was safe in the sense of timid; it was already load-bearing. Adding motion or ornamentation to those sections would have been decoration without meaning, which the ADS document rules out directly.

---

## 2. The emotional arc, mapped to sections

| Section | Feeling | Mechanism |
|---|---|---|
| Hero | Pause → Understanding | The entrance motion gives the page one breath before it settles — long enough to register as considered, short enough (under 1 second, total) to never feel like a loading screen. |
| Philosophy | Curiosity | Two lines that explain *why*, not *what* — curiosity about the reasoning pulls a reader into the next section. |
| Work | Admiration | Each line is written to make you want the next sentence, not to close the thought — SafeExam's line, for instance, withholds *how*, which is what makes someone click through. |
| Now | Exploration | A single present-tense line — signals there's more happening than what's on this page. |
| Contact | Trust | The only section that asks for anything. It's placed last deliberately: trust is earned by then, not assumed at the top. |

---

## 3. The Hero, in detail

**Composition** — left-aligned, four elements on an 8px baseline rhythm: name (40px, weight 700), a 40×3px accent rule, role (17px), tagline (15px). The rule is the only purely graphic element in the entire profile, and it's justified because it does a real job: it separates *identity* (the name) from *context* (everything under it) faster than whitespace alone would at this scale.

**Motion** — each element rises 7px and fades in, staggered 140–160ms apart, total sequence under 900ms, using an ease-out curve (`cubic-bezier(0.16, 1, 0.3, 1)`) chosen because it decelerates hard at the end — it reads as settling into place, not bouncing or sliding, which is the difference between "expensive" motion and "cute" motion. The rule draws in via `stroke-dashoffset`, not a scale transform, because a hand-drawn line reads as drawn, not stretched.

**It plays once.** There's no loop, no hover state, no re-trigger — the SVG is loaded once per page view and the animation runs on load and stops. That's the entire interaction. Motion that repeats or reacts to hovering over a *static image* isn't possible anyway (browsers don't fire `:hover` on `<img>`-sourced SVGs), which conveniently rules out the temptation to add any.

**Reduced motion is respected at the file level.** The animation rules are wrapped in `@media (prefers-reduced-motion: no-preference)`, so anyone with reduced-motion enabled at the OS level sees the hero fully rendered, instantly, with no animation at all — not a stripped-down version, the exact same final composition.

**Why this lives in the SVG file and not in the README's HTML:** GitHub sanitizes HTML written directly in a README's Markdown — `<style>` blocks and animations placed inline there would likely be stripped. The hero is a *linked* image file, which the browser renders on its own terms once fetched; GitHub's Markdown sanitizer never inspects the contents of a file a README merely points to. This is the one piece of "push past normal Markdown" from the brief that's genuinely load-bearing — everything else stayed intentionally plain for the reasons in §4 below.

---

## 4. What was researched and rejected, again

Re-reviewed the full capability list from the brief against the ADS test ("does this improve the experience, or does it exist because it's possible"):

- **SMIL animation** — deprecated in most browsers in favor of CSS animation; CSS does everything needed here and works everywhere SMIL doesn't.
- **Custom Open Graph image** — a real feature, but it's a repository/organization *setting*, not something a README file controls. Noted for you to set manually in repo settings if you want a custom social-preview card; not part of this deliverable because it isn't a README concern.
- **GitHub Pages** — still deferred. Nothing here needs a second surface yet.
- **Animated illustrations / SVG layers beyond the hero** — considered for the Work section and rejected. Three sentences don't need graphic support; adding icons or artwork per product would be decoration standing in for the writing doing its job.
- **Hover transitions** — technically inert on GitHub (see above), so building them would be effort spent on something no visitor can ever trigger.

---

## 5. Product Showcase — how the three sentences were written

Brief for each line: identity, not feature list — a sentence that creates curiosity rather than closes it.

- **SafeExam**: leads with what it protects against (compromise), not what it does mechanically. Trust is the actual product; the sentence says so directly.
- **MailMyCertificate**: describes the *absence* of friction ("before anyone has to think about it") rather than the mechanism, which is more memorable than "automates certificate generation and delivery."
- **AthletixOS**: uses the same "disappears" idea from the Philosophy section, applied concretely — consistency of thought is what makes a set of one-liners feel like one person wrote them, not marketing copy per product.

NGO Platform was cut from this list (kept in pinned repos only) — three is a complete, memorable set; four starts to read as an inventory.

---

## 6. Pinned repositories — unchanged guidance

Still recommended, still separate from this section. Pin 3–4 repos via **Customize your pins** on your profile. This remains the access layer (browse the actual code); the Work section above is the identity layer (understand what it is before deciding to look). They reinforce each other without repeating each other.

---

## 7. Folder structure

```
akshatthakur/
├── README.md
└── assets/
    ├── hero-light.svg
    └── hero-dark.svg
```

Unchanged — the added craftsmanship lives inside the two existing SVG files, not in new files or folders.

---

## 8. Accessibility, performance, dark/light — updated review

**Accessibility**
- `role="img"` and a full `aria-label` on each SVG, unchanged from the previous version — screen readers get the complete name/title/tagline regardless of the visual composition inside.
- **New:** the entrance animation is gated behind `prefers-reduced-motion: no-preference`, so it never runs for anyone who has asked their system not to animate things. This isn't a fallback — it's the same final layout, just without the transition to get there.
- Contrast checked directly (WCAG AA, 4.5:1 for body text): name text exceeds 19:1 on both themes; role text is 6.8:1 (light) / 8.6:1 (dark); tagline text is 4.9:1 (light) / 7.0:1 (dark) — all pass. The accent rule uses a lighter blue on dark backgrounds (`#6E9CDB` vs `#2F5DA6` on light) specifically to clear the 3:1 non-text contrast minimum against a near-black background; the darker blue alone would have landed right at the threshold.

**Performance**
- Both SVGs remain well under 1KB each. The animation is pure CSS running once — no JavaScript, no re-render loop, nothing that costs anything after the first ~900ms.

**Dark / light mode**
- Unchanged mechanism (`<picture>` + `prefers-color-scheme` sources), now with matching light/dark entrance motion and independently tuned colors — including the accent rule adjustment above, which is exactly the kind of theme-specific refinement a single shared asset couldn't do.

---

## 9. Self-critique

Reviewed against the Final Test in the ADS document, plus the brief's instruction not to stop at the first version:

- **Can anything be removed?** Tried the profile with no accent rule — the hero read as flat, name and role ran together optically without it. Tried it with a full-width rule — read as a template header bar. The short, hand-length rule was the version that survived.
- **Does this feel handcrafted?** The specific numbers matter here: 7px of rise, not 10; 140ms of stagger, not 200; a 40px rule, not 48. These came from looking at the motion and composition directly and adjusting until nothing felt like a default — that process is the actual craftsmanship, not any individual number.
- **Would Apple simplify this further?** Possibly the third Work line — two products might be enough. Kept at three because the rhythm of three short sentences reads as a considered set; two would read as incomplete, four as a list. This is the judgment call in this version most worth revisiting once there's real traffic to learn from.
- **Would this still feel modern in ten years?** The motion is restrained enough, and disappears entirely for anyone who prefers that — nothing here depends on a visual trend holding up.
- **"I didn't know GitHub profiles could look like this"** — the honest test: does anything here require the visitor to notice the craft consciously? No — the rule, the timing, the sentence construction all work beneath awareness. That's the standard the brief asked for, and it's the reason nothing louder was added instead.
