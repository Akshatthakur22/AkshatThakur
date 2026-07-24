---
name: atlas-design-system
description: The complete design system for Project Atlas — Akshat Thakur's creative resume website. This fuses Apple's structural discipline (fluid motion, springs, typography, restraint, editorial calm) with a hand-crafted sketchbook personality (pen illustrations, handwritten notes, stickers, sketches, margin doodles). Apple is the skeleton. The hand is the soul. Use when building or reviewing any component, animation, layout, or interaction in this project. This file defines how both layers work independently AND how they merge into one cohesive experience.
---

# Project Atlas Design System

> **Apple designed a notebook for a software engineer who thinks with a pen.**

This document defines the complete design language for Project Atlas. It operates on two layers that are always present, always in tension, and always in harmony.

---

## Layer 1: The Structure (Apple)

How Apple builds interfaces that stop feeling like a computer and start feeling like an extension of you. This knowledge comes from Apple's WWDC design talks — chiefly *Designing Fluid Interfaces* (WWDC 2018) — distilled and translated into the web platform (CSS, Pointer Events, `requestAnimationFrame`, spring libraries like Motion/Framer Motion).

The through-line: **an interface feels alive when motion starts from the current on-screen value, inherits the user's velocity, projects momentum forward, and can be grabbed and reversed at any instant.** Springs are the tool that makes all of this natural, because they are inherently interruptible and velocity-aware.

---

## Layer 2: The Soul (Hand-Crafted Creativity)

The hand-drawn layer is what makes Atlas unmistakable. It is NOT decoration applied after the fact — it is a parallel design system that lives alongside Apple's structure. Every section of the site contains hand-drawn elements that represent the way Akshat actually thinks: with a pen, with sketches, with margin notes, with crossed-out ideas and sudden insights.

The through-line: **an interface feels personal when imperfection is intentional, when marks feel spontaneous, when the visitor senses a human hand behind every pixel.**

---

## How the Two Layers Merge

| Apple provides | The Hand provides |
| --- | --- |
| Grid system | Content that overflows the grid |
| Perfect typography | Handwritten annotations beside it |
| Smooth spring animations | Drawing/sketching animations |
| White space | Paper texture within that space |
| Restraint | Personality within that restraint |
| Editorial calm | Intimate warmth |
| Trust through precision | Connection through imperfection |
| Professional credibility | Creative memorability |

**The Rule:** Apple's layer never breaks. It remains structurally perfect. The hand-drawn layer lives WITHIN and AROUND the Apple structure — like margin notes in a beautifully typeset book. The hand never overwhelms the structure. The structure never suppresses the hand.

---

## The Three Forces

### Force 1 — Apple Design
Structure. Precision. Restraint. Typography. Whitespace. Editorial calm. Motion that disappears. Premium feel.

### Force 2 — Psychology & Human Connection
Every element is placed with intent to evoke emotion. Curiosity → Wonder → Connection → Trust → Respect → Inspiration. The feeling of being invited into someone's personal space.

### Force 3 — Creative Thinking Through the Hand
Hand notes. Pen illustrations. Small doodles. Stickers. Sketches. Margin thoughts. Crossed-out words. Arrows. Stars. Underlines. Circles around important things. The overflow of ideas that can't be contained by structure alone.

---

## 1. Response — kill latency

The moment lag appears, the feeling of directness "falls off a cliff." Response is the foundation everything else is built on.

- **Respond on pointer-down, not on release.** Highlight a button the instant it's pressed. Waiting for `click`/touch-up to show feedback feels dead.
- **Be vigilant about every latency.** Audit debounces, artificial timers, transition waits, and the ~300ms tap delay. Anything on the input path that isn't essential is a regression.
- **Feedback must be continuous *during* the interaction, not just at the end.** For a drag, slider, or drawer, update the UI 1:1 with the pointer the whole way through — never animate only when the gesture completes.

```css
/* Feedback lives on the press, and it's instant */
.button:active {
  transform: scale(0.97);
  transition: transform 100ms ease-out;
}
```

## 2. Direct manipulation — 1:1 tracking

> "Touch and content should move together."

When the user drags something, it must stay glued to the finger — and respect the offset from *where they grabbed it*. Snapping to the element's center on grab breaks the illusion immediately.

- Use Pointer Events with `setPointerCapture` so tracking continues even when the pointer leaves the element's bounds.
- Track a short **velocity/position history** (last few `pointermove` events), not just the current point — you'll need velocity at release.

```js
el.addEventListener('pointerdown', (e) => {
  el.setPointerCapture(e.pointerId);
  const grabOffset = e.clientY - el.getBoundingClientRect().top; // respect where they grabbed
  // ...track position + timestamp history for velocity
});
```

## 3. Interruptibility — the single most important principle

> "The thought and the gesture happen in parallel."

Every animation must be interruptible and redirectable at any moment. A user must be able to grab a moving element mid-flight and reverse it without waiting for the animation to finish. A closing modal the user grabs again should follow the finger — not finish closing first, then reopen.

- **Never lock out input during a transition.**
- **Always animate from the *presentation* (current) value, never the target value.** On interrupt, read the element's live on-screen transform and start the new animation from there. Starting from the logical/target value causes a visible jump.
- **Avoid CSS transitions and `@keyframes` for anything gesture-driven** — they can't be smoothly grabbed and reversed mid-flight. Springs animate from the current value by default, which is exactly what interruption needs.
- **When a gesture reverses, blend velocity — don't hard-cut it.** Replacing one animation with another at a reversal creates a velocity discontinuity, a "brick wall." Spring libraries that carry velocity through a re-target avoid it. (This is what iOS's *additive animations* do natively; on the web, choose a spring library that re-targets from the current velocity.)
- **Decompose 2D motion into independent X and Y springs.** A single spring on a 2D distance desyncs when X and Y have different velocities.

## 4. Behavior over animation — use springs

> "Think of animation as a conversation between you and the object, not something prescribed by the interface."

A pre-scripted, fixed-duration animation can't respond to new input. A spring can — new input just changes the target, and the motion stays continuous. Reach for springs for anything a user can touch.

Apple deliberately replaced the physics triplet (mass/stiffness/damping) with two designer-friendly parameters. Think in these:

- **Damping ratio** — controls overshoot. `1.0` = critically damped, no bounce, smooth settle. `< 1.0` = overshoots and oscillates. Lower = bouncier.
- **Response** — how quickly the value reaches the target, in seconds. Lower = snappier. **This is not "duration"** — a spring has no fixed duration; its settle time emerges from the parameters.

**Defaults:**
- Start most UI at **damping `1.0`** (critically damped) — graceful and non-distracting.
- Add bounce (**damping ~`0.8`**) **only when the gesture itself carried momentum** (a flick, a throw, a drag release). Overshoot on a menu that just faded in feels wrong; overshoot on a card you flicked feels right.

**Concrete values Apple ships:**

| Interaction | Damping | Response |
| --- | --- | --- |
| Move / reposition (e.g. PiP) | `1.0` | `0.4` |
| Rotation | `0.8` | `0.4` |
| Drawer / sheet | `0.8` | `0.3` |

**Web mapping (Motion / Framer Motion):** the `bounce` + `duration` spring API maps closely to Apple's damping + response. A safe house style is `damping: 1.0` springs everywhere by default; reserve bounce for momentum-driven, physical interactions.

```js
import { animate } from 'motion';

// Critically damped default (no overshoot)
animate(el, { y: 0 }, { type: 'spring', bounce: 0, duration: 0.4 });

// Momentum interaction — a little bounce, only because a flick preceded it
animate(el, { y: target }, { type: 'spring', bounce: 0.2, duration: 0.4 });
```

## 5. Velocity handoff — the seam between drag and animation

When a gesture ends, the animation must **continue at the finger's exact velocity**, so there's no visible seam between dragging and animating. This is the detail that most separates "fluid" from "fine."

Pass the pointer's release velocity as the spring's initial velocity. Some spring APIs want **relative** velocity — normalize it by the remaining distance to the target:

```
relativeVelocity = gestureVelocity / (targetValue − currentValue)
```

Example: element at `y=50`, target `y=150` (100px to go), finger moving 50px/s → initial spring velocity = `50 / 100 = 0.5`. Framer Motion / Motion take absolute px/s velocity directly (`velocity` option), so you usually hand it the raw value.

## 6. Momentum projection — animate to where the gesture is *going*

> "Take a small input and make a big output."

Don't snap to the nearest boundary from the *release point*. Use velocity to **project the resting position** — exactly like scroll deceleration — then snap to the target nearest that projected point. This is what makes a flick feel like it throws the element.

Apple's exact projection function (from the *Designing Fluid Interfaces* sample code):

```js
// decelerationRate ≈ 0.998 for normal scroll feel; 0.99 for snappier
function project(initialVelocity /* px/s */, decelerationRate = 0.998) {
  return (initialVelocity / 1000) * decelerationRate / (1 - decelerationRate);
}

const projectedEndpoint = currentPosition + project(releaseVelocity);
const target = nearestSnapPoint(projectedEndpoint);   // choose target from the projection
animateSpringTo(target, { velocity: releaseVelocity }); // then hand off velocity (§5)
```

Note: the physics-textbook `v²/(2·decel)` is *not* what Apple ships — use the exponential-decay form above. This is the standard behavior in good bottom-sheets and carousels (Vaul, Embla).

## 7. Spatial consistency — symmetric paths, anchored origins

> "If something disappears one way, we expect it to emerge from where it came."

- **Enter and exit along the same path.** A panel that slides in from the right must dismiss to the right. In-from-right / out-the-bottom feels disconnected and confusing.
- **Anchor interactions to their source.** A menu, popover, or sheet should originate from the element that triggered it — set `transform-origin` to the trigger, so the spatial relationship between button and content is obvious. (This is the same origin-awareness point as popovers scaling from their trigger, not their center.)
- **Mirror the easing on reversible transitions** so the outbound path matches the return path (use inverse cubic-bézier control points for the two directions).

## 8. Hint in the direction of the gesture

Humans predict a final state from a trajectory. Intermediate motion should telegraph where things are going — Control Center modules "grow up and out toward your finger." Make the in-between frames point at the outcome, not just interpolate blindly to it.

## 9. Rubber-banding — soft boundaries

At an edge, resist progressively instead of stopping hard. A hard stop reads as "frozen"; continuous resistance reads as "responsive, but there's nothing more here." Apply damping that increases the further past the boundary the user drags.

```js
// The further past the bound, the less the element follows — real things slow before they stop
function rubberband(overshoot, dimension, constant = 0.55) {
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
}
```

## 10. Gesture design details (the "feel" checklist)

- **Tap:** highlight on touch-*down* (instant), commit on touch-*up*. Add ~10px of hysteresis/hit padding around the target, and allow cancel-by-dragging-away and back.
- **Drag/swipe:** require a small movement threshold (hysteresis, ~10px) before committing to a direction, then track 1:1.
- **Detect all plausible gestures in parallel from the first move**, then confidently cancel the losers once intent is clear. Avoid recognizers that only report a *final* state (`swipeleft`-type events) — they throw away the continuous tracking you need for feedback.
- **Minimize disambiguation delays.** Double-tap detection unavoidably delays single taps; only pay that cost where double-tap truly exists.

## 11. Frame-level smoothness

Smoothness is about *what's in the frames*, not just the frame rate.

- Keep the per-frame positional change below the perception threshold to avoid strobing.
- For very fast motion, a subtle **motion blur / stretch** encodes speed and reads better than a hard sharp streak.
- `requestAnimationFrame` is the web's display-synced clock (Apple uses `CADisplayLink`). Animate only compositor-friendly properties — `transform` and `opacity` — and hint with `will-change` where motion is imminent.

## 12. Materials & depth — translucency conveys hierarchy

Apple uses translucent materials as a floating functional layer that brings structure without stealing focus. On the web, approximate with `backdrop-filter`.

- **Build nav/toolbars/sheets as translucent layers** (`backdrop-filter: blur()` + a semi-transparent background) with content scrolling underneath — not opaque bars that consume a fixed strip.
- **Material weight encodes hierarchy:** darker/heavier materials separate structural regions (sidebars); lighter materials draw attention to interactive elements (buttons). **Never stack a light translucent surface on another** — legibility collapses.
- **Bigger surfaces should read as thicker:** stronger blur + a deeper shadow than small chips. Consider context-aware shadow — heavier over busy/text content for separation, lighter over plain backgrounds.
- **Dim to focus, separate to keep flow.** A modal task pairs the surface with a dimming scrim and pushes the background back/down. A parallel, non-blocking panel uses translucency and offset *without* a scrim so the flow isn't broken. For stacked sheets, progressively dim and push back each parent layer.
- **Vibrancy keeps text legible over changing backgrounds.** Over blurred/translucent surfaces, don't use flat gray text — use higher-contrast, slightly heavier weight, and a small letter-spacing bump. Put color on a solid layer, not the translucent foreground.
- **Scroll edge effects, not hard dividers.** Instead of a 1px border under a sticky header, fade a small blur/gradient mask where content meets floating chrome — only where floating UI actually overlaps content.
- **Materialize, don't just fade.** For glass/blur surfaces, animate blur radius and scale together on enter/exit, so the surface reads as a real material arriving rather than a plain opacity fade.

```css
.toolbar {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px) saturate(180%);
  border-top: 1px solid rgba(255, 255, 255, 0.4); /* bright top edge = light catching the material */
}
```

## 13. Multimodal feedback — motion + sound + haptics

Three rules for combining senses (from *Designing Audio-Haptic Experiences*):

1. **Causality** — it must be obvious what caused the feedback. Trigger it on the actual causal event (the toggle flipping, the item snapping home), and match its character to the action's physicality.
2. **Harmony** — the visual, the sound, and the haptic must fire on the **same frame**. Latency between them destroys the illusion. Don't let a CSS transition lag the audio/haptic (Vibration API).
3. **Utility** — add feedback only where it earns its place. Reserve haptics/sound for meaningful moments (success, error, commit, snap). Over-feedback trains users to ignore all of it.

## 14. Reduced motion & accessibility

Reduced motion doesn't mean *no* feedback — it means a gentler, non-vestibular equivalent. Respond to three independent signals and bake them into your components:

- **`prefers-reduced-motion: reduce`** — replace slides/springs/parallax with short opacity **cross-fades or static transitions**. Drop elastic/overshoot. Keep opacity/color changes that aid comprehension.
- **`prefers-reduced-transparency: reduce`** — make translucent surfaces frostier/solid: raise background opacity, drop the blur.
- **`prefers-contrast: more`** — near-solid backgrounds with a defined, contrasting border.

Also: avoid full-viewport moving backgrounds, slow looping oscillations (near 0.2 Hz / one cycle per 5s), and abrupt brightness jumps (ease dark↔light theme changes). Make large moving objects semi-transparent while they travel, and fade big surfaces out during a large reposition and back in once settled.

```css
@media (prefers-reduced-motion: reduce) {
  .sheet { transition: opacity 200ms ease; transform: none !important; }
}
@media (prefers-reduced-transparency: reduce) {
  .toolbar { background: white; backdrop-filter: none; }
}
```

## 15. Typography — optical sizing, tracking, leading

Apple designs type to change shape with size; the same discipline applies on the web. (From *The Details of UI Typography*, WWDC 2020.)

- **Tracking (letter-spacing) is size-specific — never one value for all sizes.** Large display text wants *negative* tracking (letters read too far apart as they grow); small text wants slightly *positive* tracking for legibility. A fixed `letter-spacing` is wrong somewhere. Tighten headings, leave body near `0`.
- **Leading (line-height) tracks size inversely.** Tight on large headings, looser on body copy. Increase it for scripts with tall ascenders/descenders; tighten it for dense, information-heavy UI.
- **Build hierarchy from weight + size + leading as a set,** not size alone. Emphasize with weight — it adds presence without taking more space.
- **Respect the user's text-size setting** (Dynamic Type). Scale layout *with* the text — spacing in `rem`/`em`, not fixed px — so a larger font doesn't break the layout.
- **Default to the platform's system font** before a custom face; it already ships optical sizing, tracking tables, and legibility tuning. Override only with a reason.

```css
:root { font: 100%/1.5 system-ui, sans-serif; } /* body: system font, comfortable leading */

.display {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.05;        /* tight leading for large text */
  letter-spacing: -0.02em;  /* negative tracking as it grows */
  font-optical-sizing: auto;
}
```

## 16. Design foundations — the eight principles

The motion and craft above serve Apple's eight design principles (*Principles of Great Design*, WWDC 2026). Use these as the names you reason with:

1. **Purpose.** Make with intention; decide what *not* to build. Every feature asks for the user's time, attention, and trust — spend that budget only where it pays off.
2. **Agency.** Keep people in control: offer choices, don't force a single path. Back it with forgiveness — easy undo for slips, a confirmation dialog only for genuinely destructive, irreversible actions (use sparingly; overusing it trains people to click through).
3. **Responsibility.** Act in the user's interest. Privacy: ask at the right moment, only for what's needed, transparently. Safety: anticipate misuse and harm — especially with AI (an allergy-aware recipe app must not suggest a harmful ingredient). Add previews, confirmations, disclaimers; cut a feature whose risk outweighs its value.
4. **Familiarity.** Build on what people already know. Use metaphors that are neither too literal nor too abstract (a trash can means delete), and honor their physics. Be consistent: things that look the same must behave the same and live in the same place (close is always top-left on macOS) so people can predict what happens next. Only break a familiar pattern if you can prove it's better — then test it, don't assume.
5. **Flexibility.** Design for different contexts, devices, and the full range of abilities. Adapt to the platform (iPhone = quick touch; desktop = deep workflows with precise pointer control) and to the situation. Design inclusively (age, language, expertise, accessibility). When no single layout fits everyone, let people personalize — rearrange controls, hide what they don't use.
6. **Simplicity — not minimalism.** Strip the unnecessary so the core purpose shines; burying everything in one place looks minimal but isn't simple. Be concise (plain language, no jargon, fewer steps) and clear (use hierarchy — order, spacing, contrast — so the most important thing is the most obvious). Every element earns its place; sometimes *adding* context simplifies (a video scrubber that shows time remaining). Show the common path first, advanced options one level deeper.
7. **Craft.** Uncompromising attention to detail builds trust. Beautiful typography, colors that adapt to light/dark, clear iconography, and responsive animations that give immediate, natural feedback. Nothing is random — every spacing, timing, and alignment value is a deliberate choice you can defend. Jittery scroll, misaligned icons, and layouts that break on rotation read as carelessness. Craft needs iteration and longevity — keep evolving the design as features and hardware change.
8. **Delight.** The result of getting the other seven right, not confetti tacked on top. Decide the emotion you want people to feel (calm, confident, excited) and reinforce it in every decision.

Tactical rules that serve these:

- **Feedback comes in four kinds:** status, completion, warning, error. Confirm meaningful actions, expose ongoing status, warn before problems, validate inline (not on submit).
- **Wayfinding.** Every screen should answer: Where am I? Where can I go? What's there? How do I get out? Never trap the user.
- **Grouping & mapping.** Proximity implies relationship; place a control near what it affects and arrange controls to mirror what they change. If you need a label to explain a control, the mapping is weak.
- **Direct, specific labels beat safe generic ones.** Name nav items for their contents ("Progress", "Library"), not vague umbrellas ("Home"). Specificity creates predictability.

## 17. Process

- **Prototype interactively — an interactive demo is worth "a million static designs."** You discover the interface by building and playing with it; a working prototype also sets a concrete bar that prevents a mediocre final implementation.
- **Design interaction and visuals together.** "You shouldn't be able to tell where one ends and the other begins." Motion is not a layer added after the pixels.
- **Test with real people in real context**, and review motion with fresh eyes — play it in slow motion / frame-by-frame to catch what's invisible at full speed.

## Quick Reference

| Need | Technique | Concrete value |
| --- | --- | --- |
| Default UI spring | Critically damped, no overshoot | `damping 1.0`, `response 0.3–0.4` |
| Momentum / flick spring | Under-damped, slight bounce | `damping ~0.8`, `response 0.3–0.4` |
| Gesture → spring velocity | Hand off release velocity | `gestureVelocity / (target − current)` if normalized |
| Flick landing point | Project momentum | `current + (v/1000)·d/(1−d)`, `d ≈ 0.998` |
| Interrupt cleanly | Start from presentation (live) value | read the on-screen transform |
| Avoid reversal "brick wall" | Carry velocity through re-target | spring that blends velocity |
| Reversible transition | Mirror the easing curve | inverse cubic-bézier |
| Decide reverse vs. commit | Use velocity **sign**, not position | at release |
| 1:1 drag | Pointer Events + capture | respect the grab offset |
| Feedback | On pointer-down, continuous | never only at the end |
| Boundary | Rubber-band, don't hard-stop | progressive resistance |
| Translucent chrome | `backdrop-filter` layer | content scrolls under |
| Type tracking | Size-specific, never fixed | tighten large text (`-0.02em`), body near `0` |
| Reduced motion | Cross-fade, not slide/spring | `@media (prefers-reduced-motion)` |


---

# Part II: The Hand-Crafted Layer

Everything above (§1–§17) defines Apple's structural discipline. Everything below defines the hand-drawn creative system that gives Atlas its soul.

---

## 18. The Shining Philosophy

The word is **shining**.

This website shines not through effects, glow, or particles — it shines because every element carries intention. The combination of Apple's restraint with hand-drawn warmth creates something no one has seen before.

The shine comes from **tension**:
- Perfect typography next to imperfect hand notes
- Precise layouts containing spontaneous sketches
- Clean architecture presented through messy brainstorm diagrams
- Editorial calm disrupted by moments of raw creative energy

This tension makes visitors think: "This person thinks differently."

---

## 19. Hand-Drawn Elements — Visual Language

### Stroke Characteristics

All hand-drawn elements follow these rules:

- **Irregular stroke width:** varies between 0.5px and 2.5px along a single path
- **Pressure simulation:** thicker where the "pen" starts and where emphasis lives, thinner on connecting strokes
- **Imperfect curves:** bezier curves with small random offsets (±1–3px from the "ideal" path)
- **Pencil texture:** varying opacity (0.6–1.0) along strokes, or subtle dash patterns
- **Ink behavior:** occasional slight pooling at corners and endpoints (slightly thicker/darker)

### Color Palette for Hand Elements

| Element | Color | Hex | Usage |
| --- | --- | --- | --- |
| Primary ink | Fountain Pen Blue | `#2B4C7E` | Main illustrations, arrows, diagrams |
| Pencil | HB Graphite | `#6B7B8D` | Construction lines, guidelines, light sketches |
| Highlighter | Muted Yellow | `#FFF3CD` | Emphasis behind text (very subtle) |
| Sticky note | Pale Paper | `#FFFDE7` | Note backgrounds |
| Correction | Red Pen | `#C0392B` | Crossed-out words, corrections (rare) |
| Approval | Green Check | `#27AE60` | Checkmarks, "done" marks (very rare) |
| Dark ink | Near Black | `#1A1A2E` | Bold annotations, important marks |

**Critical rule:** These colors ONLY appear on hand-drawn elements. The main structural layer uses the Apple palette exclusively (white, near-black, soft gray, Apple blue accent).

---

## 20. Element Catalogue

### Text Annotations

```
┌─────────────────────────────────────────────┐
│                                             │
│  "Note to self: this was the moment        │ ← Margin note (Caveat font, ink blue,
│   everything clicked."                      │    slight rotation 1-2°, positioned
│                                             │    in the right margin)
│  ~~~~~~~~                                   │ ← Hand-drawn underline (SVG path,
│                                             │    irregular wave, stroke-width varies)
│  important! ←── circled                     │ ← Circle annotation (imperfect oval
│                                             │    SVG, slight gap where pen lifted)
│  first attempt ←── crossed out              │ ← Strikethrough (single wavy line,
│  second try ←── written above               │    not CSS line-through)
│                                             │
│  ★                                          │ ← Hand-drawn star (5 strokes,
│                                             │    slightly uneven points)
│  → see below                                │ ← Hand-drawn arrow (curved, not
│                                             │    straight, with slight hook at tip)
└─────────────────────────────────────────────┘
```

### Illustrations (SVG-based)

Small, purposeful pen sketches placed near relevant content:

- **Conceptual:** lightbulb, gear, puzzle piece, brain, eye, magnifying glass
- **Technical:** server rack, database cylinder, mobile screen, code brackets `{ }`, terminal cursor
- **Connective:** dotted paths between sections, branching trees, flowchart nodes
- **Personal:** coffee cup, notebook, pen, desk lamp, headphones
- **Navigational:** compass, map pin, dotted route line, signpost

**Size rule:** illustrations are SMALL. Maximum 80×80px for standalone, 40×40px for inline. They whisper — they never shout.

### Stickers & Physical Elements

- **Sticky notes:** Pale yellow (`#FFFDE7`), slight rotation (±2°), subtle drop shadow (2px blur, 10% opacity), contain 1-2 line handwritten thoughts
- **Washi tape:** Holds photos or cards in place, semi-transparent, patterned (subtle dots or stripes), crosses corner at 30-45°
- **Paper clips:** Simple wire shape SVG, positioned on top-corner of cards or images, metallic gray gradient
- **Torn paper edges:** `clip-path` with irregular polygon points (16+ points with random Y offsets) on section boundaries
- **Rubber stamps:** Rotated 5-15°, slightly faded ink effect (opacity 0.7), used for status ("SHIPPED", "DREAMING", "v1.0")
- **Pin holes:** Tiny circles (3px) with subtle shadow, indicate something is "pinned" to the page

### Paper & Texture

- **Background:** Off-white with extremely subtle fiber texture (2-3% opacity noise)
- **Dot grid:** Faint dots at 20px intervals (opacity 0.04-0.06), appears behind some sections
- **Lined paper:** Faint horizontal rules (opacity 0.03), only in "writing" sections
- **Graph paper:** Light blue grid (opacity 0.03), only behind technical/architecture content
- **Fold marks:** Very faint diagonal lines suggesting the paper was folded
- **Page edges:** Barely visible shadow on left/right margins suggesting stacked pages

---

## 21. Animation Patterns for Hand Elements

### Drawing Animation (Primary)

Hand-drawn elements should appear as if being drawn in real-time:

```css
/* SVG path drawing animation */
.hand-drawn-path {
  stroke-dasharray: var(--path-length);
  stroke-dashoffset: var(--path-length);
  transition: stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.hand-drawn-path.visible {
  stroke-dashoffset: 0;
}
```

```js
// With Motion library — draw a hand-drawn SVG path
import { animate } from 'motion';

function drawPath(pathElement) {
  const length = pathElement.getTotalLength();
  pathElement.style.strokeDasharray = length;
  pathElement.style.strokeDashoffset = length;

  animate(
    pathElement,
    { strokeDashoffset: 0 },
    { duration: 1.2, easing: [0.4, 0, 0.2, 1] }
  );
}
```

### Placement Animation (Stickers, Notes)

Elements "place" themselves onto the page:

```js
// Sticker/note placement — slight scale + rotation settle
animate(stickerEl, {
  scale: [0.85, 1.02, 1.0],
  rotate: [randomRotation - 2, randomRotation + 1, randomRotation],
  opacity: [0, 1, 1]
}, {
  duration: 0.6,
  easing: 'ease-out'
});
```

### Writing Animation (Text)

Handwritten text appears character by character with natural timing:

```js
// Character-by-character with variable speed (not mechanical)
function writeText(element, text, baseDelay = 50) {
  element.textContent = '';
  let i = 0;

  function nextChar() {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
      // Variable delay simulates natural writing rhythm
      const delay = baseDelay + Math.random() * 30 - 15;
      // Longer pause after punctuation
      const pause = '.!?,;:'.includes(text[i - 1]) ? 200 : delay;
      setTimeout(nextChar, pause);
    }
  }
  nextChar();
}
```

### Fade & Settle (Margin Notes)

Margin notes slide in softly from the edge:

```js
// Margin note: slide from outside + fade
animate(noteEl, {
  x: [20, 0],
  opacity: [0, 1]
}, {
  type: 'spring',
  bounce: 0,
  duration: 0.8,
  delay: 0.3 // slightly after parent content
});
```

---

## 22. Density & Rhythm Rules

### The "Two Element" Rule

Never more than **2 hand-drawn elements** visible simultaneously per viewport height. This prevents visual noise and maintains the Apple layer's breathing room.

**Hierarchy per section:**
1. ONE primary hand element (illustration, major annotation, or sticker cluster)
2. ONE secondary hand element (small margin note, single arrow, or subtle texture)
3. Background texture (doesn't count — it's ambient)

### Spacing Between Hand Elements

- Minimum 200px vertical distance between hand-drawn elements
- Hand elements should be placed at asymmetric positions (not centered, not aligned to the grid)
- They should feel "placed" — as if someone set them down without measuring

### Progressive Reveal

- Hand elements animate AFTER the structural content is visible (200-400ms delay)
- They should feel like afterthoughts the author added while reviewing the page
- Earlier in the scroll = rougher/sketchier; later = more refined

---

## 23. The Evolution Gradient

As the visitor scrolls from top to bottom, the hand-drawn layer evolves:

| Scroll Position | Hand Style | Apple Style |
| --- | --- | --- |
| 0-20% (Hero) | Raw pencil, construction lines, coordinates | Maximum whitespace, huge type |
| 20-40% (About/Timeline) | Ink sketches, margin notes, arrows | Editorial layout, generous spacing |
| 40-60% (Experience) | Stickers, sticky notes, photos with tape | Clean cards, systematic layout |
| 60-80% (Projects) | Technical diagrams, architecture sketches | Structured information hierarchy |
| 80-100% (Future/Contact) | Clean line drawings, subtle accents | Polished, resolved, minimal |

This mirrors the creative process: **rough idea → active exploration → refinement → finished product.**

---

## 24. Component Fusion Patterns

How specific components blend both layers:

### Section Header
- **Apple:** Large editorial headline, perfect tracking, generous top margin
- **Hand:** Small pencil illustration to the left, faint construction line below, handwritten section number in margin

### Timeline Node
- **Apple:** Clean dot on a vertical line, precise date typography, smooth expand animation
- **Hand:** Dot is slightly imperfect circle, connecting line has subtle wobble, expanded content has margin doodles

### Project Card
- **Apple:** Clean container, structured layout, precise shadow, editorial image treatment
- **Hand:** Torn paper edge on one side, small sketch of the core concept, "status stamp" rotated in corner

### Gallery Image
- **Apple:** Optimized image, smooth reveal animation, precise aspect ratio
- **Hand:** Slight rotation (1-3°), washi tape or pin holding it, small handwritten caption below

### Navigation
- **Apple:** Floating, minimal, precise, smooth opacity transitions
- **Hand:** Progress indicator uses a hand-drawn line that fills as you scroll (not a perfect bar)

---

## 25. Interaction Patterns — Both Layers

### Hover States

| Element Type | Apple Response | Hand Response |
| --- | --- | --- |
| Buttons/links | Subtle opacity/color shift | — |
| Hand illustrations | — | Lines get slightly darker (more pressure) |
| Stickers/notes | — | Lift slightly (shadow deepens 1px) |
| Project cards | Scale 1.01, shadow deepens | Corner sketch adds one detail stroke |
| Timeline nodes | Smooth expand | Connecting lines draw to new content |

### Scroll Behavior

- **Structural content:** Fade-in on scroll (Motion `inView` with spring)
- **Hand elements:** Draw/place themselves 200-400ms AFTER structural content settles
- **Background textures:** Static — never animate (they're ambient)
- **Construction lines:** Draw progressively with scroll position (parallax-linked)

### Reduced Motion

When `prefers-reduced-motion: reduce`:
- All hand-drawing animations → instant opacity fade (200ms)
- Sticker placement → simple fade, no rotation/scale
- Writing animations → text appears instantly
- Construction lines → appear at full opacity, no drawing
- Spring animations on structural content → short cross-fade

---

## 26. Typography System — Both Layers

### Structural Type (Apple Layer)

| Role | Font | Weight | Size | Tracking | Leading |
| --- | --- | --- | --- | --- | --- |
| Display | Geist | 700 | clamp(3rem, 6vw, 5rem) | -0.03em | 1.0 |
| H1 | Geist | 600 | clamp(2rem, 4vw, 3.5rem) | -0.02em | 1.1 |
| H2 | Inter | 600 | clamp(1.5rem, 3vw, 2.5rem) | -0.01em | 1.2 |
| H3 | Inter | 500 | clamp(1.25rem, 2vw, 1.75rem) | 0 | 1.3 |
| Body | Inter | 400 | 1.125rem | 0 | 1.6 |
| Caption | Inter | 400 | 0.875rem | 0.01em | 1.5 |
| Code | IBM Plex Mono | 400 | 0.9rem | 0 | 1.5 |
| Serif accent | Instrument Serif | 400 | varies | 0 | 1.4 |

### Hand Type (Creative Layer)

| Role | Font | Style | Usage |
| --- | --- | --- | --- |
| Margin notes | Caveat | 400, 16-18px | Annotations beside content |
| Labels | Caveat | 700, 14-16px | Labeling illustrations |
| Stamps | Geist (uppercased) | 800, 12px | "SHIPPED", "DREAM" |
| Page numbers | Caveat | 400, 14px | Section numbering |
| Corrections | Caveat | 400, 16px | Crossed-out/replaced text |

**Critical spacing:** Hand-type elements are ALWAYS positioned outside the main content column — in margins, above, below, or overlapping edges. They never replace structural typography.

---

## 27. Responsive Strategy — Both Layers

### Desktop (1200px+)
- Full notebook experience with generous margins for hand elements
- Margin notes in actual margins (left or right of content column)
- Illustrations at full size
- Construction lines span full width

### Tablet (768px–1199px)
- Margins reduce — margin notes move to inline (above/below content)
- Illustrations scale to 60-70%
- Hand elements that were in margins become inline callouts
- Fewer simultaneous hand elements (reduce to 1 per viewport)

### Mobile (< 768px)
- Hand elements become punctuation between sections, not parallel to content
- Margin notes become full-width callout blocks (styled as sticky notes)
- Illustrations scale to 50% and center
- Paper texture remains (it's ambient)
- ONE hand element per section maximum
- Construction lines hidden (too thin to read at small sizes)

### The Constant
Regardless of viewport:
- The Apple structural layer remains immaculate
- Typography scales smoothly (clamp-based)
- The FEELING of a notebook persists (texture, occasional annotation, warmth)
- No section loses its hand-drawn element entirely — it just adapts

---

## 28. Performance Rules for Hand Elements

### SVG Optimization
- All hand-drawn SVGs: max 5KB each, pre-optimized with SVGO
- Use `<symbol>` + `<use>` for repeated elements (arrows, stars, dots)
- Inline critical SVGs (hero section), lazy-load the rest

### Animation Budget
- Maximum 3 simultaneous SVG path animations per viewport
- Use `will-change: transform, opacity` only on elements about to animate
- Remove `will-change` after animation completes
- Intersection Observer for triggering — never animate off-screen elements
- `stroke-dashoffset` animations on SVG are compositor-friendly

### Image Textures
- Paper texture: CSS noise via subtle gradient, NOT an image file
- If texture image needed: WebP, max 20KB, tiled with `background-repeat`
- Photo treatments (rotation, tape): CSS transforms, not pre-processed images

### Loading Strategy
1. First paint: structural content + critical fonts only
2. After hydration: paper texture + hero hand elements
3. On scroll (lazy): remaining hand-drawn elements per section
4. Never block LCP with hand-drawn decoration

---

## 29. Building a New Component — Checklist

When creating any new component for Atlas, verify:

**Apple Layer ✓**
- [ ] Uses the correct font from the typography scale
- [ ] Respects the spacing system (8px base grid for structure)
- [ ] Animations use springs (Motion library), not CSS keyframes
- [ ] Interruptible — no animation locks out input
- [ ] Responsive at all three breakpoints
- [ ] Accessible (keyboard, screen reader, reduced motion)
- [ ] Semantic HTML, correct heading hierarchy

**Hand Layer ✓**
- [ ] Has exactly 1-2 hand-drawn accent elements (not zero, not three+)
- [ ] Hand elements use the correct ink/pencil color palette
- [ ] Hand elements are positioned asymmetrically (not centered)
- [ ] Drawing animation is triggered by scroll (IntersectionObserver)
- [ ] Hand elements have reduced-motion fallback (simple opacity fade)
- [ ] SVG paths are optimized (< 5KB each)
- [ ] Hand elements delay 200-400ms after structural content appears

**Fusion ✓**
- [ ] Both layers are visible and complementary
- [ ] Neither layer dominates — the tension is balanced
- [ ] The component fits the evolution gradient (rougher at top, refined at bottom)
- [ ] The component tells a micro-story (not just displays information)

---

## 30. Anti-Patterns — What Atlas Is NOT

### Not a Cartoon
Hand-drawn ≠ childish. Lines are precise enough to feel engineering-grade. Think: architect's sketch, not children's illustration. Ink, not crayon.

### Not Cluttered
More hand elements ≠ more personality. Restraint is inherited from Apple. One perfectly placed annotation > five scattered doodles.

### Not Random
Every hand element has purpose. A margin note says something meaningful. An arrow points to something important. A sketch illustrates a concept. Nothing is decorative-only.

### Not Symmetrical
Hand elements break the grid intentionally. But the grid itself (Apple layer) remains perfect. The "mess" is curated. The imperfection is designed.

### Not Slow
No animation exceeds 1.5s. Drawing animations feel quick and confident (like someone sketching fast), not labored and slow.

### Not Dark
This is a bright, airy notebook. White dominates. Ink is the darkest thing on the page. No dark mode by default (a notebook is white).

### Not Glassmorphism
No frosted panels floating over content. No neon glows. No gradients on cards. Translucency is reserved for the floating nav only (and kept extremely subtle).

---

## Quick Reference — The Complete System

| Need | Apple Solution | Hand Solution |
| --- | --- | --- |
| Emphasize text | Weight + size | Underline, circle, or margin note |
| Show progress | Clean progress bar | Hand-drawn line filling on scroll |
| Transition between sections | Smooth fade + spring | Notebook divider + torn edge |
| Display status | Badge with precise type | Rubber stamp (rotated, faded) |
| Show connection | Clean line/hierarchy | Dotted hand-drawn path with arrows |
| Present an image | Optimized, clean border | Slight rotation + tape/pin |
| Indicate importance | Size hierarchy | Star, exclamation, or "!!!" annotation |
| Navigation feedback | Opacity/color transition | Active section's tab gets hand-drawn underline |
| Loading state | Skeleton or spinner | Pencil lines drawing themselves |
| Empty state | Structured message | "Nothing here yet..." in handwriting + small doodle |
