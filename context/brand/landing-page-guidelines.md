# Landing Page Design Guidelines — Señal

**Purpose:** Reusable design system for all Modo Build landing pages (AI Fast Track being the first application; future courses, lead magnets, event pages, cohort programs will inherit the same rules).

**Adopted:** 2026-04-15
**Master reference:** `context/brand/design-guidelines.md` — palette, typography, illustrations inherited from master
**Reference template:** `context/brand/assets/html-blocks/landing-page-template.html`

---

## Positioning Thesis

Landing pages are **conversion surfaces** — not reading surfaces. Different context, different rules. Where newsletters and archive pages reward comfort and long reads, landing pages reward **impact, scan-first hierarchy, and decisive action**. The design language shifts accordingly.

A landing page has one job: **one click**. Everything serves that click.

---

## The Three-Tier Design System Across Modo Build

Each surface in the ecosystem has its own canvas treatment — they are NOT interchangeable. Mixing them breaks the system.

| Surface | Canvas | Purpose | Design rules |
|---------|--------|---------|--------------|
| **Landing pages** | **Dark obsidian** `#0A0A0C` | Conversion — short scan, one decision | Maximal visual impact, scaled-up typography, aggressive coral CTAs, lime for data moments |
| **Homepage + archive pages** | **Light paper** `#FBE8D9` | Browsing, reading, habitual return | Comfort-first, long-read typography, gentle ornaments |
| **Newsletter emails** | **Beehiiv default minimal** | Trust, warmth, personal communication | No custom design components, markdown-native, restraint-as-voice |

**Why this rhythm works:** each time a reader crosses from one surface to another, the canvas shift signals context. Landing page = "something happens here." Archive page = "read something." Email = "hear from me."

---

## Canvas: Dark Obsidian by Default

Every landing page begins as dark unless there's a specific reason to break the rule.

**Reasons dark wins on landing pages:**
- Visual impact > readability (short copy, quick scan)
- Premium positioning (Stripe Press, Linear, Anthropic launch pages, Arc Browser, Midjourney all use dark for conversion surfaces)
- Coral CTAs hit ~3x harder on obsidian than on paper
- Electric lime finally shines — data moments become dramatic
- Differentiates from every other generic Spanish AI course landing page (all currently light/Canva-default)
- Photography and video content render more cinematically

**When to break the rule (rare):**
- Free opt-in page for a specific cold audience where trust precedes premium (consider light paper variant — document the decision)
- Event/webinar pages where the partner brand requires light canvas

Default assumption: **dark. Document any exception.**

---

## Color Deployment on Dark Canvas

Ratios flip from the newsletter's paper-dominant world. On landing pages:

| Role | Color | Coverage | Use |
|------|-------|----------|-----|
| **Canvas** | Obsidian `#0A0A0C` | ~70% | Primary background |
| **Text base** | Warm Paper `#FBE8D9` | ~20% (text weight) | Body copy, headlines, most UI |
| **Action weapon** | Coral `#FF5941` | ~7% | CTA buttons, key emphasis, accent marks, primary conversion element |
| **Data weapon** | Electric Lime `#D4FF3A` | ~2% | Price callouts, metric blocks, stat numbers, data tags (obsidian text inside) |
| **Meta** | Titanium `#88898C` | ~1% | Footer text, disclaimers, small metadata |

**Critical:**
- Paper (`#FBE8D9`) on obsidian = the new "body text" — warm cream on dark, very readable
- Lime FINALLY gets its stage — on dark, contrast is ~14:1, maximum impact
- Coral stays the action weapon — CTA buttons, key outcome words

---

## Standard Page Structure

Every landing page has these seven sections in this order. Not every page uses all seven — short offers may skip Curriculum or FAQ — but order never changes.

### 1. Hero
- Oversized Manrope headline (72-120pt) — the promise in 6-12 words
- Mono eyebrow above: what this is (one line)
- Deck below: one sentence, ~20 words, expands the promise
- Primary CTA (coral button) immediately below deck
- Optional: one visual element (Señal hero illustration OR short video thumbnail OR typographic mark)

### 2. Outcome / Promise ("qué vas a lograr")
- 3-5 bullet points, large type (20-24pt)
- Each bullet led by coral `→` or checkmark
- Specific, measurable outcomes — not features
- Example: "Despliega un agente IA en 11 minutos" not "Learn about AI agents"

### 3. Social Proof / Credibility
- Numbers-forward — metric blocks (lime + obsidian) are perfect here
- Press logos if relevant (Bloomberg Línea > random podcasts)
- Named clients/institutions
- Short testimonial quotes in coral pull-quote style (max 1-2)
- **NO stock testimonial photos. Real attribution or no quote.**

### 4. Curriculum / Deliverables ("qué incluye")
- Numbered list — Manrope display numerals in coral ("01.", "02." ...)
- Each item: tight subheadline + 1-line description
- Optional: lime data tag marking each item's duration/format ("15 min", "video", "código")
- Scannable. Reader should understand the full offer in 20 seconds.

### 5. Author / "¿Por qué yo?"
- Short, direct paragraph (~50 words)
- First-person, Builder Mode voice
- Optional: one photo (Señal duotone treatment — obsidian × paper or coral × obsidian)
- Photo is not required if the copy carries — typographic signature works

### 6. Objection Handling / FAQ
- 3-6 common objections, each collapsed or expanded
- Question in Manrope medium weight, coral accent on question mark
- Answer in body Inter, paper color
- Direct. No hedging. Address the real skepticism.

### 7. Final CTA
- Massive Manrope headline repeating the promise in a new frame
- Coral CTA button, same text as hero CTA or stronger
- Optional: secondary link (e.g., "Ver el syllabus completo") in titanium underlined
- This section should be impossible to miss — full-width, heavy vertical padding

---

## Hero Specifications (the most important surface)

The hero is the 2-second decision moment. If it fails, nothing else matters.

**Layout rules:**
- Content fits in first viewport on mobile (375×667 minimum)
- Single-column, center-aligned or left-aligned (pick ONE across the system — left recommended for editorial consistency with newsletter masthead)
- 80-120px vertical padding top and bottom

**Typography scale (mobile → desktop):**
- Eyebrow mono: 11px / 13px
- Headline: 48pt mobile → 96pt+ desktop, weight 800, letter-spacing -0.04em
- Deck: 18pt mobile → 24pt desktop, weight 400
- CTA button text: 16-18pt, weight 700

**Headline craft rules:**
- Promise-forward: "Despliega un agente IA en 11 minutos" not "Curso sobre agentes IA"
- Specificity wins: numbers, outcomes, timeframes
- Max 12 words. If you can't fit the promise in 12 words, the offer isn't clear enough.
- Negative letter-spacing creates the confident compressed look

**CTA button rules:**
- Coral fill, obsidian text
- No border-radius (brutal confidence)
- 18-22px padding vertical, 36-48px padding horizontal
- Never use "Submit" / "Click here" / "Learn more." Always specific verb + object: "Empezar ahora" / "Obtén el curso" / "Agendar llamada"
- Right-arrow `→` after the text is optional but consistent — pick one convention

---

## Typography Scale (Landing Context)

Scale up everything vs. newsletter. Landing pages have less content per viewport, so type can breathe bigger.

| Element | Mobile | Desktop | Weight | Letter-spacing |
|---------|--------|---------|--------|----------------|
| Hero headline | 48pt | 96pt+ | 800 | -0.04em |
| Section headline | 36pt | 56pt | 700 | -0.03em |
| Sub-headline | 24pt | 32pt | 600 | -0.02em |
| Body large | 18pt | 22pt | 400 | 0 |
| Body | 16pt | 18pt | 400 | 0 |
| Mono eyebrow | 11px | 13px | 500 | 0.2em |
| Metric numeral (lime) | 80pt | 128pt+ | 800 | -0.05em |

**Rule:** If you're unsure, go bigger. Landing pages fail from being too subtle more often than from being too bold.

---

## CTA Patterns (The Conversion Spine)

Every landing page has 2-4 CTA placements:

1. **Hero CTA** (above fold) — primary action, coral button
2. **Mid-page CTA** (optional, after Outcome or Curriculum) — same button or "Ver precio"
3. **Final CTA** (below FAQ) — massive headline + button + secondary link

**Microcopy patterns:**
- **For courses:** "Empezar el curso →" / "Inscríbete →" / "Comenzar ahora"
- **For lead magnets:** "Descargar la guía →" / "Obtener acceso →"
- **For cohort programs:** "Agendar llamada →" / "Aplicar →" (scarcity-appropriate)
- **For events/webinars:** "Reservar mi lugar →" / "Guardar mi silla →"

**Never:**
- "Submit" / "Click here" / "Learn more"
- Multiple competing primary CTAs (one decision per page)
- Coral buttons used for anything other than THE conversion action (don't dilute)

---

## Mobile First (375px is the Canvas)

95%+ of traffic from LinkedIn arrives on mobile. Desktop layout is a courtesy; mobile is the product.

**Rules:**
- Hero must fully render at 375×667 (iPhone SE) — no scrolling to see CTA
- Thumb-reachable CTA placement (bottom ~40% of first viewport on mobile)
- Single column at all sizes (no side-by-side on mobile)
- 20-24px horizontal padding on mobile
- Line-length capped at 60-70 characters
- Touch targets minimum 44×44px
- Test on real device before publishing

---

## Images / Media Guidance

**When to use:**
- Course mockup / product screenshot (show the actual thing)
- Video thumbnail (YouTube preview — her face + course title in Manrope)
- Proof element (event photo, dashboard, real output)
- Hero illustration (Señal SVG — `senal`, `amanecer`, or `red`)

**When NOT to use:**
- Stock photos of any kind
- AI-generated imagery
- Generic tech clichés (handshakes, lightbulbs, "AI brain")
- Fake testimonial avatars

**Treatment for photos on dark canvas:**
- Obsidian × Paper duotone (primary) — free tool: duotone.shapefactory.co
- Coral × Obsidian duotone (dramatic — use rarely)
- Natural warm grade (only for proof elements like real event photos)

---

## Component Reuse Map (From Señal System)

Existing components in `context/brand/assets/html-blocks/beehiiv-components.html` — invert these for dark canvas:

| Component | Light variant (existing) | Dark variant (landing) |
|-----------|--------------------------|------------------------|
| Masthead | Paper bg, obsidian text | Obsidian bg, paper text + coral/lime accents |
| Hero Typographic | Paper bg, obsidian headline | Obsidian bg, paper headline |
| Hero with Illustration | Paper bg, obsidian SVG lines | Obsidian bg — either invert SVG (paper lines) OR use SVG as-is (works because SVGs have obsidian + coral which read against dark too) |
| Section Header | Paper bg, obsidian text + coral number | Obsidian bg, paper text + coral number (no change to accents) |
| Pull Quote | Paper bg, coral text + coral bar | Obsidian bg, paper text + coral bar (inverts the text, keeps the weapon) |
| Metric Hero | Already obsidian — use AS-IS | No change |
| Prueba Esto | Already obsidian — use AS-IS | Can rename to "Empezar" or "Próximo paso" for landing context |
| CTA Subscribe | Paper bg, coral button | Obsidian bg, coral button (only the bg changes) |
| Footer | Paper bg, obsidian text | Obsidian bg, paper text + titanium metadata |
| Data Tag | Lime fill, obsidian text | Same — works on any bg |
| Code Inline | Lime fill, obsidian text | Same |

**Reference template:** `landing-page-template.html` shows all dark variants assembled into a complete page.

---

## Forbidden Patterns

- ❌ Countdown timers (cheap urgency, brand-corrosive)
- ❌ Stock photo testimonials ("happy customer using product")
- ❌ AI-generated headshots / avatars
- ❌ Multiple competing primary CTAs
- ❌ Lime on paper as text (always illegible)
- ❌ Light gray text on dark backgrounds (use paper, not gray — or titanium deliberately for metadata only)
- ❌ "As seen on" logo walls with fake logos
- ❌ Pop-ups / exit-intent modals
- ❌ Chat widgets ("Habla conmigo" bots)
- ❌ Clickbait microcopy ("Solo 3 cupos!" if not literally true)
- ❌ Stock testimonial avatars or AI-generated person images
- ❌ Gradient backgrounds
- ❌ More than 3 typefaces (Manrope + Inter + JetBrains Mono only)
- ❌ Any color outside the 5-color palette
- ❌ Generic stock illustrations from Storyset / Undraw / Blush

---

## Per-Page Build Workflow (Step-by-Step)

For each new landing page:

1. **Define the offer** — one sentence answer to: "What promise does this page make?"
2. **Copy the template** — start from `landing-page-template.html`
3. **Fill in hero** — eyebrow + headline (12 words max) + deck + primary CTA
4. **Write outcome bullets** — 3-5 specific, measurable wins
5. **Insert proof** — real numbers, real names, real metrics (use lime data tags)
6. **Break down the deliverable** — 5-8 curriculum items with Manrope numerals
7. **Write author section** — 50 words, Builder Mode voice, one photo OR typographic
8. **Surface objections** — list 3-6 real questions your audience asks
9. **Close with final CTA** — massive repeat of the promise + coral button
10. **Mobile test** — actual iPhone at 375px. Thumb-reachable CTA. Scrollable.
11. **Publish** — Beehiiv Website Builder → new page → paste custom HTML

---

## Governance

- This document overlays `context/brand/design-guidelines.md` (master) with landing-specific rules
- Palette, typography, illustrations, naming — defer to master
- Landing-specific context (canvas, structure, CTAs) — this document is authoritative
- When in conflict: landing guide for landing pages, master for everything else

---

## Roadmap for Landing Pages

**First application:** AI Fast Track (existing course, needs rebuild on new system)

**Planned future landing pages:**
- Lead magnets (when built)
- Cohort programs (future)
- Events / webinars (future)
- Individual productized offers

**Each follows this guide. Template first, then customize.** Do not re-invent the system per page — that's the point of guidelines.
