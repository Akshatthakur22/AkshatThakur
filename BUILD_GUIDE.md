# GitHub Profile — Build Guide

This is the reasoning behind `README.md`, and how to ship and maintain it. It is not meant to be public — it's the working notes behind the profile.

---

## 1. What this is, and isn't

The deliverable is a personal homepage that happens to render inside a GitHub profile card. It is deliberately not a traditional developer README. Traditional sections were removed rather than filled in — see §2.

**Repository requirement:** this only renders as a profile page if the repo is named *exactly* your GitHub username (case-insensitive) and is public. If the repo is named anything else, it's just a normal repo.

---

## 2. Why the information architecture is this thin

The brief asked to question every section rather than default to a template. Here's what was cut, and why:

| Section considered | Decision | Reasoning |
|---|---|---|
| Selected Work | **Cut from README** | GitHub's native **pinned repositories** feature already renders a work grid directly below the profile README, with its own dark/light support and zero maintenance. Rebuilding that in Markdown duplicates a platform feature the visitor already expects to see in that exact spot. Pin 3–4 repos instead — see §3. |
| Principles (full list) | **Cut** | The full principle set belongs in the ADS document. Restating it here would turn a homepage into an internal manifesto. The two lines under Philosophy carry the same idea without the list format, which reads as templated. |
| Writing | **Cut for now** | An empty or placeholder "Writing" section is worse than no section — it signals unfinished rather than intentional. Add it back only once there are 2–3 published pieces worth linking (see §7). |
| Hero | **Kept** | Answers the 10-second test on its own. |
| Philosophy | **Kept, shortened to 2 lines** | Answers *why*, which is what makes someone remember you at 30 seconds. |
| Now | **Kept, 1 line** | Signals the profile is current, not abandoned — the strongest trust signal after craftsmanship. |
| Contact | **Kept** | Necessary for the 60-second action, but plain text — no icon row, which would reintroduce the "developer template" look. |

Result: four blocks, nothing else.

---

## 3. Pinned repositories (do this manually, once)

On your GitHub profile, click **Customize your pins** and choose 3–4 repositories — SafeExam, MailMyCertificate, AthletixOS, or the NGO platform, whichever best represent current work. This is the "Selected Work" section; it lives natively below the README, not inside it.

Each pinned repo should follow the Repository Standard already defined in the ADS document (README, LICENSE, CHANGELOG, Architecture, Screenshots, Installation, Roadmap) — the 60-second "open a repository" moment depends on what's *inside* the repo being just as considered as the profile that pointed there.

---

## 4. Folder structure

```
akshatthakur/                  ← repo name must match your GitHub username exactly
├── README.md
└── assets/
    ├── hero-light.svg
    └── hero-dark.svg
```

Nothing else. No `.github/workflows`, no `docs/`, no build tooling — see §5 for why.

---

## 5. What was deliberately left out, and why

The brief asked to research the maximum GitHub profiles support, and use only what genuinely helps. Most of what's technically possible was rejected on purpose:

- **GitHub Actions** — there's nothing here that needs automating. A static personal homepage doesn't benefit from a build pipeline; adding one would be technology added because it exists, not because it improves anything.
- **Dynamic stat cards / contribution graphs / typing animations / visitor counters** — these are explicitly on the "never use" list in the ADS document, and every one of them optimizes for looking busy rather than for trust.
- **GitHub Pages** — genuinely useful *later*, once there's a "Writing" section with real content and it's worth having a canonical home for it outside GitHub's chrome. Not needed to ship this version. Revisit in §7.
- **Badges / shields.io** — every additional badge is a third-party request and a piece of visual noise that has to individually earn its place. None did.
- **Custom fonts** — the hero SVGs use the system font stack (`-apple-system, Segoe UI, Roboto, Helvetica, Arial`), not an embedded webfont. This keeps each SVG a few hundred bytes, renders instantly, and looks native on every OS rather than imposing one "designed" typeface — closer to how Linear and Vercel actually typeset their own marketing pages.

What was kept:

- **Two static SVGs, theme-aware via `<picture>`** — the one piece of "dynamic" behavior that clears the bar, because a hero that looks wrong in dark mode actively breaks the calm-and-considered impression on roughly half of GitHub's users (dark mode is the majority preference among developers).

---

## 6. Accessibility, performance, dark/light — review

**Accessibility**
- The hero SVG carries `role="img"` and a full `aria-label` restating the name, title, and tagline, so screen reader users get the same information as sighted users even though it's an image.
- The `<img>` fallback `alt` text duplicates that same string, for browsers or clients that don't support `<picture>`.
- All other content (Philosophy, Now, Contact) is real text — selectable, searchable, and read correctly by assistive tech. Only the hero is an image, and only because typographic control isn't otherwise possible in GitHub Markdown.
- Link text ("Email," "LinkedIn," "X," "SafeExam") is descriptive on its own, not "click here."

**Performance**
- Total page weight beyond GitHub's own chrome: two SVGs, each well under 1KB. No external requests, no third-party badge services, no webfont downloads.
- No JavaScript, no animation loop, nothing that runs after load.

**Dark / light mode**
- Implemented with `<picture>` + `<source media="(prefers-color-scheme: …)">`, which is GitHub's current recommended approach (it supersedes the older `#gh-dark-mode-only` URL-fragment trick) and is confirmed to work with relative paths within the same repo.
- Two separate SVG files are used rather than one SVG with an embedded media query, because embedded-media-query SVGs are known to render incorrectly in Safari/WebKit dark mode. Two files sidestep that entirely.

---

## 7. Maintenance

- **Update "Now"** whenever what you're actively building changes — this line is the main evidence the profile is alive. Stale is worse than absent.
- **Add "Writing" back** once you have 2–3 pieces worth linking. Same visual language: a short intro line, then plain text links, no cards.
- **Re-pin repositories** as your best current work changes — the README doesn't need to change when this does.
- **Don't add sections reactively.** If you're tempted to add something because you saw it on someone else's profile, run it through the Final Test in the ADS document first: *does this increase trust? Would Apple simplify this?* If the honest answer is no, it stays out.

---

## 8. Self-review against the ADS Final Test

- **Can anything be removed?** Tried removing "Now" — the profile still reads clean but stops feeling current. Kept.
- **Does this increase trust?** Every remaining line answers who, why, what's active, or how to reach you. Nothing else survived.
- **Does this feel handcrafted?** The hero was typeset by hand in two colorways rather than pulled from a generator — deliberately the one place a little extra care goes furthest.
- **Would this still feel modern in ten years?** No embedded stats, no dependency on a third-party service staying online, no trend-driven visual effects. What's here doesn't age.
- **Would Apple simplify this further?** Possibly — even "Now" could be argued away. It's left in because currency is a trust signal a portfolio-style page can't fake. This is the one place restraint was weighed against usefulness and usefulness won, deliberately, not by default.
