# Beehiiv Newsletter Redesign Brief — "Guía Práctica"

**For:** Next agent tasked with redesigning Irina's Beehiiv newsletter
**Created:** 2026-04-14 · **Updated:** 2026-04-14 (v2 Señal direction)
**Owner:** Irina (final approval)
**Master reference:** `context/brand/design-guidelines.md` (v2) — read this first, always

---

## ⚠ v2 Señal Direction — Supersedes v1 Spec Details Below

**Design direction changed on 2026-04-14.** v1 "Editorial AI Authority" (Economist/Every.to-inspired, navy + bone + oxblood + Fraunces serif) was rejected as too past-anchored. v2 "Señal — Dispatch from SF" is now adopted: future-forward, AI-native, bold.

**Where to find authoritative specs:**
- `context/brand/design-guidelines.md` (v2) — palette, typography, principles
- `context/brand/assets/design-tokens.css` (v2) — hex codes, type sizes
- `context/brand/assets/html-blocks/beehiiv-components.html` (v2) — 11 copy-paste components with inline styles
- `context/brand/assets/README.md` (v2) — hero rotation, photo treatments, Beehiiv setup

**Sections 3-10 below were written for v1.** The structural guidance (test criteria, components to redesign, Beehiiv constraints, success criteria) remains valid. But any reference to specific palette hex codes, typography names (Fraunces/Inter/JetBrains), or v1 hero names (Taller/Columna/Puente) is obsolete — **defer to the v2 asset files for all specifics.**

---

## 0. Assets Ready to Use (v2, 2026-04-14)

All design assets generated and staged in `context/brand/assets/`. You are **not** building from scratch.

```
context/brand/assets/
├── README.md                           ← START HERE (v2 Beehiiv checklist, photo rotation, don'ts)
├── design-tokens.css                   ← v2 palette + typography — paste hex into Beehiiv
├── illustrations/
│   ├── masthead-ornament.svg           ← 3 geometric squares (obsidian/coral/obsidian)
│   ├── section-divider.svg             ← 5 coral signal bars (bell curve)
│   ├── hero-senal.svg                  ← Concentric broadcast (~40% of issues)
│   ├── hero-amanecer.svg               ← Minimalist dawn (~30%)
│   └── hero-red.svg                    ← Network grid (~20%)
└── html-blocks/
    └── beehiiv-components.html         ← 11 components: masthead, 3 hero variants, section header, pull quote, divider, metric hero, "Prueba Esto" block, CTA, footer
```

**v2 Palette (paste into Beehiiv Brand Settings):**
- Primary `#0A0A0C` (obsidian)
- Secondary `#F6F0E4` (warm paper)
- Accent `#FF5941` (coral signal)
- Background `#F6F0E4`

**v2 Typography (all free on Google Fonts):**
- Display: **Syne** (variable 400-800)
- Body: **Inter**
- Mono: **JetBrains Mono**

**Resolved constraints:**
- ✅ **No illustrator budget** — 3 abstract hero SVGs + typographic-only fallback. Rotation in README.md. Do not commission new illustrations.
- ✅ **Single professional photo** — 3 crops × 4 treatments = 12 unique-looking heroes from one source. Free duotone tool: [duotone.shapefactory.co](https://duotone.shapefactory.co).
- ✅ **Beehiiv custom HTML blocks confirmed supported** — all components in `beehiiv-components.html` copy-paste directly.

**Still open for Irina:**
- Publication name: keep "Guía Práctica" or workshop a stronger name? (Flag, don't rename.)

---

## 1. Context

Irina publishes a weekly Beehiiv newsletter called **"Guía Práctica"** (1000-1500 words) following format: Hook → Problem → What I Did → Step-by-Step → Result → Try This. The content engine produces the copy. This brief covers **visual/structural redesign** of the newsletter to match the new **Editorial AI Authority** brand positioning.

**Why redesign now:** Irina is repositioning from creator-hype visual system (Electric Blue + Crimson + Neon Green + Impact typography) to editorial authority positioning targeting LATAM executives and founders. The newsletter is the second-most-important surface after LinkedIn (future monetization primarily runs through email per Lara Acosta + Allie K Miller models). Current Beehiiv design uses default templates — low-signal, amateur. See `context/brand/research/2026-04-14-authority-design-research.md` for full research backing.

**What we're claiming:** The "Edición #[N]" — a serialized Spanish-language AI weekly modeled on Every.to, The Economist, and Bloomberg Businessweek's editorial disciplines. Nobody in Spanish LATAM AI space owns this lane.

---

## 2. Before You Design — Read These

| File | Purpose |
|------|---------|
| `context/brand/design-guidelines.md` | **Master design system** — palette, typography, principles, do's/don'ts. Non-negotiable. |
| `context/brand/research/2026-04-14-authority-design-research.md` | Research backing positioning choice, with Spanish AI creator landscape analysis |
| `context/audience-profile.md` | ICPs (CXOs, founders, ambitious professionals in LATAM) |
| `context/voice/voice-and-style.md` | Voice rules — Builder Mode, Spanish LATAM, "tú", punctuation emoji |
| `output/newsletter/` | Audit existing drafts, published issues, current assets |

**Audit first, design second.** Read at least 3 recent published newsletters and inspect current Beehiiv template settings before proposing changes.

---

## 3. Target State — Three Sensory Requirements

When a LATAM CXO opens this newsletter on their phone at 7am Tuesday, it should feel like:

1. **A serious Spanish-language publication** (El Tiempo + Bloomberg Línea editorial gravitas, not influencer newsletter)
2. **Unmistakably Irina** (Builder Mode, contrarian voice, declarative conviction)
3. **Premium but readable on mobile** (60%+ open on phone — design mobile-first)

If any of those three reads as "no," iterate.

---

## 4. Components to Redesign

### 4.1 Masthead (Email Header)

**Dimensions:** Beehiiv default email width (typically 600px max for email) + responsive web version

**Components (top to bottom):**

```
┌─────────────────────────────────────────┐
│                                         │
│  GUÍA PRÁCTICA                          │  ← Wordmark: Fraunces display, 28-32pt,
│                                         │     navy #121A2A, tracked +0.02em
│  ─────────── · ───────────              │  ← Gold hairline dividers flanking
│                                         │     center dot
│  POR IRINA VELEZ · EDICIÓN #47          │  ← Metadata: JetBrains Mono, 11pt,
│                                         │     uppercase, oxblood #7B1E26
│                                         │
└─────────────────────────────────────────┘
```

**Design decisions to make:**
- **Wordmark treatment:** pure typography OR include subtle graphic element (e.g., issue number as sidebar numeral). Recommend pure typography for launch — evolve later.
- **Name question to flag to Irina:** "Guía Práctica" is descriptive but utilitarian. Consider whether masthead should lead with "GUÍA PRÁCTICA" (current name) or use a stronger publication-style name. Out-of-scope for this redesign to rename, but worth raising.
- **Date format:** "Edición #47 · 14 de abril, 2026" in Spanish locale

**Email-safe fallback:** Fraunces → Georgia stack. Test in Gmail, Apple Mail, Outlook before shipping.

### 4.2 Hero / Issue Cover

**One of three approaches (pick based on content week):**

**A. Typographic hero (default — use for ~80% of issues):**
- Oversized serif display headline (Fraunces 900, 48-64pt on desktop / 32-40pt mobile)
- Headline = that week's hook (6-12 words)
- Deck below (Inter 18pt, navy): one-line expansion
- Heavy whitespace above and below
- No image needed

**B. Build-mode photo hero (use for 15% — issues with demonstrable build):**
- Full-width photo of Irina mid-build (laptop, screen, environment)
- Photo treated warm, slight film grain
- Headline overlay OR below photo
- Caption in mono below: context of the build

**C. Commissioned editorial illustration (aspirational — post-first-revenue):**
- Full-width illustration in Every.to / Lucas Crespo style
- Headline typography overlaid or beside

**Beehiiv constraint:** Custom illustrations require either (a) designed-per-issue workflow or (b) monthly retainer with an illustrator. For initial redesign, default to **Approach A (typographic hero)** with occasional B.

### 4.3 Section Structure (Body)

Current content format (preserve): Hook → Problem → What I Did → Step-by-Step → Result → Try This

**Visual translation:**

| Section | Typography | Treatment |
|---------|-----------|-----------|
| **Hook** | Fraunces display, 24pt, navy | First paragraph only — hits harder than body |
| **Problem** | Inter 18pt, navy, 1.7 line-height | Body copy discipline |
| **What I Did** | Same body style + *oxblood pull quote* for key claim | One pull quote max per section |
| **Step-by-Step** | Inter 18pt, numbered list with large numerals | Numbers in Fraunces 900, oxblood |
| **Result** | Body + *one oxblood number callout* | Specific metric in JetBrains Mono, oxblood, enlarged |
| **Try This** | Navy fill block, bone text inside | Visually distinct section — the "do something" closer |

**Section dividers:** Gold hairline rule + small centered dot pattern (`─── · ───`). Never solid full-width lines — too aggressive.

### 4.4 Pull Quotes (the Conviction Weapon)

Most important element for encoding boldness + conviction.

**Specs:**
- Fraunces, 28pt, italic OR 900 weight (pick one discipline — recommend 700 italic)
- Oxblood `#7B1E26`
- Left-aligned with generous left padding (40px) and oxblood vertical rule (3px) running alongside
- Short (≤20 words ideal)
- Used **maximum once per newsletter** — this is where conviction lands

**What to quote:** Irina's contrarian claim or the "what nobody tells you" moment. Never generic.

### 4.5 Color Deployment Inside Body

Follow master guidelines 60/25/10/5:
- **Bone `#F4EEE3`:** Newsletter background, section breaks, whitespace
- **Navy `#121A2A`:** All body text, section headers
- **Oxblood `#7B1E26`:** Pull quote, "Try This" block (inverted), CTA button, issue number, links
- **Gold `#C9A96E`:** Dividers, masthead ornament only

**Link styling:** Navy body text with oxblood underline (not full oxblood text — preserves body readability).

### 4.6 CTAs

**Three CTA types, each with distinct design:**

**A. Subscribe CTA (for sharing / forwarded issues):**
```
┌─────────────────────────────────────────┐
│                                         │
│   ¿Te lo reenviaron?                    │  ← Fraunces italic 20pt, navy
│                                         │
│   Suscríbete a Guía Práctica →          │  ← Inter 600, 16pt, bone text
│                                         │     on oxblood fill button
│                                         │
└─────────────────────────────────────────┘
```

**B. Reply CTA (conversation building):**
- Text-only invitation at end: "¿Qué construiste esta semana? Responde este email."
- Inter 16pt italic, navy
- No button — conversational, not transactional

**C. Share CTA (social amplification):**
- One line near end: "Si te sirvió, reenvíalo a alguien que esté construyendo con IA."
- NEVER "comenta X y te envío Y" — violates Memory Rule #1 (no clickbait CTAs)

### 4.7 Footer / Signature

**Structure:**

```
─── · ─── · ───

Con convicción,
Irina

[small circular photo, 48px]

Irina Velez Lopez
Fundadora · Guía Práctica
Escribo desde San Francisco y LATAM.

[minimal social icons — LinkedIn only, small, navy, thin-line]

───

Unsubscribe · Archivo · Edición #47 · 2026
```

**Specs:**
- Signoff "Con convicción," in Fraunces italic 22pt (one of several rotating signoffs — "Desde la trinchera," / "Construyendo," / "A seguir" — keep one primary, rotate secondary 20% of time)
- Name + title in Inter 14pt
- Photo: 48px circular, same image as everywhere else (single signature headshot)
- Social icons: LinkedIn only (avoid icon clutter — Twitter/IG can be added when she's active there)
- Utility links in JetBrains Mono 11pt, uppercase, tracked — editorial magazine imprint feel

### 4.8 Archive / Web Page Version

Beehiiv generates web archive URLs. These need to:
- Load actual Fraunces and Inter via Google Fonts (CSS `@import`)
- Use full palette (email often degrades to web-safe; web version should be premium)
- Include masthead + issue number prominently
- Be shareable as a standalone editorial page

**Test:** Open a past issue's web URL, redesign with full typography + full palette, compare.

---

## 5. Beehiiv Platform Constraints

Before committing to final design, verify what Beehiiv supports:

| Feature | Default Support | Notes |
|---------|----------------|-------|
| Custom fonts in email | Limited (email client support varies) | Google Fonts sometimes render in Gmail web; fallback stack critical |
| Custom fonts in web archive | Yes (full CSS control) | Can use Fraunces + Inter via Google Fonts |
| Custom HTML blocks | Yes (premium tiers) | Check Irina's tier; needed for complex layouts |
| Custom color palette | Yes | Set in brand settings |
| Custom email template | Yes | Beehiiv allows template editing |
| Custom button styles | Yes | Can match oxblood fill CTA spec |
| Section dividers | Limited (use spacer + image for custom dividers if needed) | Gold hairline may need to be an SVG image |
| Pull quote block | Not native — use a custom HTML block or styled blockquote | Verify during implementation |
| Mobile responsiveness | Automatic | Test every element at 375px width |

**Action:** Audit Beehiiv settings + Irina's plan tier before committing to final specs. Flag gaps to Irina.

### Email-safe Font Fallback Stack

```css
/* Display */
font-family: 'Fraunces', 'Georgia', 'Times New Roman', serif;

/* Body */
font-family: 'Inter', -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

/* Mono */
font-family: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
```

Test in Gmail (web + iOS + Android), Apple Mail, Outlook (web + desktop), before shipping.

---

## 6. Deliverables

The redesign agent should produce:

1. **Audit report** (brief): screenshots of current newsletter state + 3-5 specific issues identified
2. **Redesigned email template in Beehiiv** (applied to Irina's account)
3. **Component library document** (`plans/newsletter-components.md`): each component with specs, HTML/CSS snippets where custom, Beehiiv settings path
4. **Test rendering report**: screenshots across Gmail web/iOS/Android + Apple Mail + Outlook (or flagged gaps if testing blocked)
5. **Web archive version** (test one past issue with new design applied)
6. **Handoff note** for Irina: what's live, what's pending, what requires her decision (e.g., masthead name, illustration budget)

---

## 7. Success Criteria

The redesign succeeds when:

- [ ] **Gravitas test:** Reads as a serious Spanish-language publication, not an influencer newsletter
- [ ] **Recognition test:** Distinguishable from DotCSV, Freddy Vega, Jon Hernández, and every Spanish AI content template in the first 3 seconds
- [ ] **Voice test:** Carries conviction and boldness through oxblood accent + pull quote + typographic weight (editorial ≠ muted)
- [ ] **Mobile test:** Reads beautifully at 375px width — Irina's mother could read it on her phone without pinching
- [ ] **Consistency test:** Same masthead, palette, typography, footer every issue — serial recognition
- [ ] **Irina test:** Irina opens it, feels "this is mine, only more me" — not "this is a template applied to my content"

---

## 8. Visual References (Mood Board)

**Target aesthetic references (editorial authority + bold):**
- Every.to newsletter (Signifier + Lucas Crespo illustrations)
- Stratechery / Dithering (Ben Thompson — minimal editorial email)
- The Generalist (Mario Gabriele — editorial newsletter with personality)
- Matt Levine's Money Stuff (Bloomberg — serif editorial + conviction voice)
- The Browser (editorial + restraint)
- 032c magazine (serif + radical typography moments)

**Spanish-language references to lead, not follow:**
- Bloomberg Línea
- Forbes Centroamérica
- El País (design section)
- Gatopardo (Mexican editorial magazine)

**Anti-references (do NOT mimic):**
- Morning Brew (too loud, too illustrated — US influencer aesthetic)
- Default Beehiiv templates
- Default Substack templates
- Any newsletter using AI brain / circuit / neural net imagery

---

## 9. Open Questions for Irina

Flag these to Irina during or after the redesign:

1. **Name:** Is "Guía Práctica" the final publication name, or should we workshop a stronger editorial name (e.g., "La Edición," "Construir," "Trinchera," "Boletín IA")?
2. **Illustrator budget:** Is there budget for a recurring illustrator (USD $200-500/issue) for Approach C hero illustrations? If yes, sourcing Lucas Crespo-adjacent LATAM illustrators becomes a parallel task.
3. **Photography investment:** Has she booked the professional editorial shoot? If not, Approach B (build-mode photo hero) depends on this landing first.
4. **Signoff rotation:** Lock "Con convicción," as primary OR propose alternatives before first issue ships in new design.
5. **Beehiiv tier:** Confirm she's on a tier that supports custom HTML blocks (needed for pull quotes and custom CTAs). Upgrade may be warranted.

---

## 10. What NOT To Do

- ❌ Do not redesign published past issues (brand evolution is readable as growth)
- ❌ Do not introduce any color outside the master palette
- ❌ Do not use stock photos, AI-generated imagery, or neural net / circuit motifs
- ❌ Do not use more than 2 typefaces per email (display + body; mono only in code/data moments)
- ❌ Do not write new copy — redesign visual system only, content stays as-is
- ❌ Do not add clickbait CTAs ("comenta X y te envío Y") — Memory Rule #1
- ❌ Do not ship without testing in at least 3 email clients
- ❌ Do not copy Morning Brew / Milk Road / The Hustle aesthetic — those are US creator-economy, not editorial authority
