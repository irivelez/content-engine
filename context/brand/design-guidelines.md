# Design Guidelines — Señal

**Version:** 2.1 · **Adopted:** 2026-04-14 · **Direction:** Dispatch from SF — future-forward, AI-native, bold

> **Supersedes:** v1.0 "Editorial AI Authority" (rejected as too past-anchored — read as financial newsletter, not AI newsletter). Also supersedes `visual-specs.md` (Electric Blue + Crimson + Neon Green creator-hype system). Both retained for historical reference only.

---

## Positioning Thesis

This is not a serious publication *about* AI. This is a transmission *from* the frontier, written by someone who is inside the future showing LATAM what's coming and how to build it. Irina is not translating SF to LATAM — she is broadcasting from SF as a LATAM builder.

The design doesn't borrow authority from 1850s editorial tradition (Economist, Every.to, Monocle). It claims authority from *being native to the medium*: bold modernist typography, interface-grade color systems, radical typographic scale, AI-native visual language. When a C-level exec opens this newsletter, they should think: *"I've never seen an AI newsletter look like this. What is this?"*

That curiosity is the conversion. Safe doesn't convert — surprise does.

---

## Three Core Design Principles

### 1. Future-Forward, Not Past-Anchored — The Skeleton

Modernist sans-serif display (Manrope) at radical scale. Monospace metadata as interface. Grid systems visible. Issue numbering rendered as broadcast codes ("NO.47") not classical ("Edición XLVII"). Visual language borrows from *Stripe Press · Wired · Linear · A24 · Anthropic brand* — not from *Bloomberg Businessweek · Monocle · The Economist*.

**Rule:** When in doubt, the move is *modernist and confident*, not *refined and restrained*. Scale big. Letter-space tight. Make the typography itself the design.

### 2. Bold Declaration, Not Editorial Restraint — The Voice

Conviction lives in *typographic scale* and *unapologetic color*. A 96pt issue number. A pull quote that bleeds past the margin. A coral signal that lands like a transmission. Not whispered elegance — declared confidence.

**Rule:** Whitespace still matters (nothing shouts when everything shouts). But when the moment hits, commit fully. No half-measures, no timid accents, no apologetic spacing.

Reference models:
- **Stripe Press** — dramatic monochrome covers + one confident accent, modern serif used like a weapon
- **Linear brand system** — brutal minimalism that still feels human through warmth and motion
- **Anthropic brand** — warm neutrals + unexpected color, confident without shouting
- **WIRED** (the 1994-2003 Carson/Plunkett era) — radical typography as the product
- **A24 film titles** — restrained most of the time, radically bold at the moment of impact
- **Kraftwerk album design** — human-made future, legible and cold and warm at once

### 3. AI-Native Pride, Not AI-Shame — The Identity

This newsletter is *built with AI, about AI, for people who will build with AI*. The design encodes that fact rather than hiding it. Monospace metadata (not humanist serif). Grid visible. Code-native structural feel. Data rendered as primary visual elements. Terminal-era cues (bars, coordinates, frame markers) reclaimed as editorial ornament.

**Rule:** If a visual element could appear in any generic editorial publication, it's too neutral. The design should make people think *"wait, this was made by someone who actually builds with AI."* Proof through visual vocabulary.

---

## Visual Identity System

### Color Palette

| Role | Name | Hex | Character | Deployment |
|------|------|-----|-----------|-----------|
| **Primary** | Obsidian | `#0A0A0C` | Slightly warm tech-native black — interface-grade | Text, structure, Metric Hero + "Prueba Esto" block fills. ~25% |
| **Base** | Coral-Tinted Paper | `#FBE8D9` | Pale cream tinted by the accent — distinct from Anthropic/Stripe/Every cream | Backgrounds, breathing room. ~55-60% |
| **Action Weapon** | Coral Signal | `#FF5941` | Warm red-orange — action, warmth, emotion, human signal | CTAs, pull quotes, masthead accents, primary weapon. ~10% |
| **Data Weapon** | Electric Lime | `#D4FF3A` | Cold electric signal — data, code, system, technical | Metric Hero number, Data Tag fills, Code Inline highlights. Obsidian bg ONLY. ~2% |
| **Meta** | Titanium | `#88898C` | Neutral mid-grey | UI metadata, secondary text, disabled states. ~3% |

**Deployment rules:**

**DO:**
- Use coral as a *signal*: one CTA, one pull quote, one key metric per composition — intentional, weaponized
- Let paper dominate — most of the canvas should breathe
- Use obsidian as the structural voice — text, rules, fills
- Keep titanium for metadata only — never for headlines or body

**DO NOT:**
- Light coral and lime in the same visual moment — they're complementary weapons, never lit together
- Use lime as text on paper `#FBE8D9` — illegible contrast. Lime lives on obsidian or as fill-with-obsidian-text only
- Use lime for CTAs, pull quotes, or emotional signals — that's coral's job (lime is scarce data/code signal only)
- Use coral on body text (it becomes shouting — reserve for declarations)
- Use gradients (flatness reads tech-native; gradients read SaaS marketing)
- Use pure black `#000000` — obsidian `#0A0A0C` has warmth, pure black feels cold and dead
- Introduce any color outside this 5-color system (obsidian · paper · coral · lime · titanium)

**Coral vs Lime — Semantic Distinction:**
- **Coral `#FF5941`** = ACTION, warmth, emotion, human signal. Default weapon. Works on both paper and obsidian backgrounds. Appears in: CTAs, pull quotes, masthead eyebrows, section-header numbers, Prueba Esto eyebrow.
- **Lime `#D4FF3A`** = DATA, code, system, technical signal. Scarce weapon. **Obsidian backgrounds ONLY** (lime on paper = contrast <1.5:1, illegible). Appears in: Metric Hero number (112pt on obsidian block), Data Tag fills, Code Inline highlights for tool names / commands.
- **When both would fit:** default to coral. Lime is reserved specifically for data/code/system content that deserves its own visual signature.

### Typography

All three typefaces are **free on Google Fonts** — Beehiiv-compatible, zero licensing cost.

**Display (headlines, issue numbers, declarations):**
- **Manrope** — variable weight 200-800, geometric modern sans. Closest free equivalent to SF Pro (the original target — dropped because Windows substitutes break the render). Consistent cross-platform rendering on macOS + Windows.
- Usage: issue numbers at 96pt+, headlines at 48-64pt, pull quotes at 28-36pt
- Character: confident, geometric, slightly compressed caps, unmistakably modern
- Font URL: `https://fonts.google.com/specimen/Manrope`

**Body (running text, UI, labels):**
- **Inter** — weight 400/500/600/700, clean contemporary sans
- Usage: body 16-18px, UI 14px, labels 11-13px
- Character: legible, neutral, excellent Spanish diacritics
- Font URL: `https://fonts.google.com/specimen/Inter`

**Mono (metadata, data, coordinates, signal):**
- **JetBrains Mono** — weight 400/500/600, clean monospace with technical warmth
- Usage: issue coordinates (SF / 04.14.2026), data callouts, section numbers (01. 02. 03.), CTAs, unsubscribe links
- Character: AI-native, technical, human
- Font URL: `https://fonts.google.com/specimen/JetBrains+Mono`

**Typography rules:**

- Maximum **three typefaces per composition** (Manrope + Inter + JetBrains Mono). Each has a specific role — never swap.
- **Negative letter-spacing on Manrope display** (`-0.03em` to `-0.05em` at large sizes) — this is signature. It compresses the typography into a confident, declarative unit.
- **Generous letter-spacing on mono uppercase** (`0.15em` to `0.25em`) — makes metadata feel like interface, not body copy.
- **Retired forever:** Impact, Bebas Neue, Montserrat Extra Bold, Fraunces, Playfair Display, Georgia (as display), any serif that reads "old editorial."
- **Spanish specifics:** Test every glyph for ñ, ¿¡, á-í-ó-ú at display sizes. Manrope handles all cleanly. Keep `¿¡` opening punctuation always — stripping it is an amateur global-template tell.
- **All-caps:** Used for issue headers ("NO.47"), section labels ("DISPATCH", "PRUEBA ESTO"), and brand name. Never for body copy.
- **No italics as default** — reserved for signoffs and the occasional editorial quote (use sparingly, feels like a different register).

### Photography Direction

**Core treatment:** warm gold-hour lighting — not cold editorial duotone. This newsletter comes from somewhere the sun is rising, not a mahogany study.

**The single-photo reality:** Irina has one professional photo. The design system multiplies it via 3 crops × 4 treatments = ~12 unique-looking heroes.

**Crops:**
- Wide landscape (3:1 or 2:1) — hero banner
- Close portrait (1:1) — footer signature, avatar
- Medium shot (4:5) — carousel covers, speaker bio

**Treatments:**
1. **Warm natural** (default) — slight warmth boost, preserved color, film grain added
2. **Obsidian × Paper duotone** — gradient map using `#0A0A0C` + `#FBE8D9`. Premium, editorial. Free tool: duotone.shapefactory.co
3. **High-contrast warm B&W** — desaturated with crushed blacks and warm highlights
4. **Coral × Obsidian duotone** (dramatic) — for milestone/contrarian issues. Use rarely.

**Shot direction (when future shoot happens):**
- Environmental: build-mode contexts (SF coworking, home office, actual laptop screens visible)
- Golden-hour or tungsten interior light — never ring-light flat, never studio cold
- One wardrobe element in coral (becomes visible thread across all photography)
- Confident present expression — not grinning, not stern
- No phone selfies, no AI-generated headshots, no stock

### Hero Illustrations (Abstract-Technical, Not Classical)

The 3-hero SVG library in `context/brand/assets/illustrations/`:

| Hero | Meaning | When to use |
|------|---------|-------------|
| **Señal** — concentric broadcast pattern | Transmission from the frontier. Default hero. | ~40% of issues — any Builder Mode dispatch, frontier insight, "here's what I'm seeing" content |
| **Amanecer** — minimalist sunrise | Dawn of a new era, opening, optimism, breakthrough | ~30% — breakthrough/learning/"I finally figured out X" posts |
| **La Red** — network grid with highlighted node | Systems, connections, frameworks, "you're in the network now" | ~20% — framework/systems/"here's the architecture" posts |
| **(No illustration)** — pure typography hero | Declaration mode — the headline alone carries the weight | ~10% — big contrarian claims where nothing should distract |

**Do not commission new illustrations.** The library of 3 + typographic-only = the system. Repetition creates recognition; one-off illustrations destroy recognition.

### Brand Mark — The Cursor (adopted 2026-04-16)

**Primary mark:** A coral `#FF5941` cursor block `▌` + "MODO BUILD" wordmark in Manrope 800. The cursor represents "live, active, transmitting now" — the publication is running, not archived.

**Replaces:** The 5-bar signal-strength pattern used in v2.0. Signal bars are retired from all new production. Existing published content keeps its marks; the system moves forward with the cursor.

**Variants (all in `context/brand/assets/logo/`):**

| Asset | Dimensions | Use |
|-------|-----------|-----|
| `modobuild-logo-navbar.png` | 440×96, transparent | Navbar on cream/light backgrounds |
| `modobuild-logo-navbar-dark.png` | 440×96, transparent | Navbar on obsidian/dark backgrounds |
| `modobuild-logo-800.png` | 800×800, obsidian bg | Beehiiv publication logo, mobile app, social avatar |
| `modobuild-favicon-512.png` | 512×512, obsidian bg | Browser favicon (cursor + MB monogram) |

**Animation:** The cursor blinks (`animation: blink 1.2s ease-in-out infinite`) on web surfaces where CSS animation is supported. Static everywhere else (favicon, PNG, email). The static cursor still reads as a cursor — animation is enhancement, not requirement.

**Brand mark in thumbnails:** Every post thumbnail includes `▌ MODO BUILD` + date in the bottom-center row. Centered layout ensures it survives Beehiiv's card-grid crop.

### Ornamental System

**Section divider:** Coral horizontal rule (1px `#FF5941`) or simple `· · ·` mono dots. Replaces the retired 5-bar signal pattern.

**Signal markers:** Use mono-rendered unicode blocks `▌` or `|` for eyebrow accents where a mark is needed before text. Single cursor block preferred over multiples.

**Corner frames (retired):** Terminal-style corners `┌ ┐ └ ┘` retired — belonged to the v1 legacy system. The cursor mark now carries the AI-native identity without decorative framing.

---

## Content Design Patterns by Platform

### LinkedIn Text Posts

Core text-first system (Allie K. Miller model) continues to work. Minor evolution:

- Preserve punctuation emoji: `•` `→` `✔` `‣`
- When image accompanies: new palette (obsidian + paper + coral), no navy
- Retire the Standard Blue Box permanently

### LinkedIn Carousels (new signature system)

- **Format:** 1080x1350 (4:5 portrait)
- **Count:** 8-12 slides
- **Template:** "NO.[N]" — broadcast-transmission framing, not "Edición"
- **Slide 1 structure:**
  - Top: mono metadata "SF / 04.14 / DISPATCH" in coral tracked caps
  - Center: massive Manrope display headline (6-10 words, `-0.04em` tracking)
  - Bottom-left: circular photo (72px) + "irina velez" in Inter
- **Interior slides:**
  - One idea per slide (25-60 words — LATAM text density allowed)
  - Section number in mono ("01.", "02.") top-left
  - One coral accent per slide max
- **Final slide:** single CTA, mono + coral underline

### Beehiiv Newsletter — Publication: *Modo Build*

**Publication identity:** "Modo Build" is the name of the newsletter. The authorial identity "por Irina Vélez" appears as a subordinate mono eyebrow beneath the wordmark — never competing with the brand. Modo Build leads recognition; Irina claims the signature moment in the footer (photo + bio + signoff).

**Three-surface canvas system (locked 2026-04-16):**

| Surface | Canvas | Beehiiv page type | Purpose |
|---------|--------|-------------------|---------|
| **Brand zones** (Navbar, Post Masthead, Signoff, Directory, Footer) | Paper `#FBE8D9` | Home, Default pages | Identity, warmth, editorial frame |
| **Post body** (long-form reading surface) | White `#FFFFFF` | Post (Dynamic page) | Screenshot-friendly reading zone — zero per-post canvas adjustment |
| **Landing** (lead magnets, course pages) | Obsidian `#0A0A0C` | Custom pages | Conversion |

The cream → white → cream transition on every post is intentional. Canvas shift signals context: cream = brand zone, white = reading zone. A crisp 1px obsidian rule marks every transition. Reference pattern: Apple newsroom, Stripe Press articles, The New Yorker online — cream identity zones framing white reading zones.

#### Beehiiv Theme 1: `Modo Build — Cream`

*Apply to: Home, Archive, Default pages (Reset/Update Password), any non-post brand surface.*

| Field | Value | Role |
|-------|-------|------|
| Heading Font | `Manrope` | Display headlines |
| Body Font | `Inter` | Running text |
| Button Font | `Manrope` | Confident branded CTAs |
| Core | `#FBE8D9FF` | Paper canvas (main background) |
| Accent | `#FF5941FF` | Coral — links, CTAs, highlights |
| Primary | `#0A0A0CFF` | Obsidian — headings, main text |
| Secondary | `#88898CFF` | Titanium — metadata, dates, captions |
| Tertiary | `#EFE5D6FF` | Darker cream — cards, boxes, dividers on paper |
| Border Radius | `0` px | Sharp editorial chrome |

#### Beehiiv Theme 2: `Modo Build — White`

*Apply to: Post (Dynamic page) — the weekly reading surface.*

| Field | Value | Role |
|-------|-------|------|
| Heading Font | `Manrope` | Same as Theme 1 |
| Body Font | `Inter` | Same as Theme 1 |
| Button Font | `Manrope` | Same as Theme 1 |
| Core | `#FFFFFFFF` | Pure white (reading zone) |
| Accent | `#FF5941FF` | Coral — unchanged |
| Primary | `#0A0A0CFF` | Obsidian — unchanged |
| Secondary | `#88898CFF` | Titanium — unchanged |
| Tertiary | `#F2F2F2FF` | Light grey — code blocks, inline code, card backgrounds, subtle dividers on white |
| Border Radius | `0` px | Consistent with Theme 1 |

#### Theme design rationale

- **Only Core changes between themes.** All other fields are identical → canvas shifts without brand discontinuity. Coral, obsidian, titanium stay stable.
- **Button Font = Manrope.** Keeps the wordmark voice consistent across CTAs — "Suscribirse →" reads as a confident brand declaration in the same family as the headlines. JetBrains Mono stays reserved for true interface metadata (issue numbers, dates, eyebrow labels, coordinates) — not for action elements.
- **Secondary = Titanium `#88898C`.** Creates visual hierarchy: primary text reads full-weight, metadata/dates/captions read muted. Without this differentiation, everything reads same-weight and editorial structure collapses.
- **Tertiary differs by theme**: on cream it's darker cream (`#EFE5D6`) for brand continuity; on white it's neutral grey (`#F2F2F2`) for code blocks and subtle containers. Reading zone stays neutral — no cream bleed into the white reading surface.
- **Border Radius = 0** on chrome. Sharp editorial aligns with modernist declarative voice. Screenshots inside post body use 8px radius manually — a content-level treatment, not a theme default.

#### Screenshot treatment recipe (Post body)

Applied per-screenshot inside the white reading zone. Operational goal: minimal per-post adjustment.

| Element | Treatment |
|---------|-----------|
| Terminal screenshots (dark) | 8px radius, no border needed — contrast against white is sufficient |
| Code blocks | Background `#1E1E1E`, text `#FBE8D9`, 12px radius, 20px 26px padding |
| UI screenshots (light/white) | 8px radius + `1px solid rgba(10, 10, 12, 0.08)` border to define edges on white canvas (often unnecessary when the screenshot has its own chrome) |
| Inline code | Background `#F2F2F2` (Tertiary), 4px radius, 2px 8px padding |
| Figure caption | Inter 14px, Titanium `#88898C`, italic, centered below screenshot |

**The core operational win:** paste any screenshot (dark or light) into Beehiiv's Post editor as-is. The white canvas handles both without per-screenshot background adjustment.

#### Reference files

- `context/brand/assets/logo/` — all logo variants (navbar cream/dark, 800×800, favicon)
- `context/brand/assets/templates/thumbnail-template.html` — reusable thumbnail starter (copy for each post)
- `context/brand/assets/templates/modobuild-default-thumbnail.png` — default Beehiiv thumbnail
- `context/brand/assets/html-blocks/beehiiv-components.html` — component library (supersede as needed)
- `output/newsletter/assets/` — per-post thumbnails (dated content)

### LinkedIn Thumbnails / Post Images

- **Typographic dominant:** Manrope display (800 weight) on paper background, one coral accent mark
- **With photo:** single professional photo (one of the 4 treatments) + Manrope headline overlay
- **Retire:** the Standard Blue Box entirely

---

## Authority Signals

### Credibility Architecture

- Deploy as numbers accumulate: "1,200+ líderes reciben Guía Práctica"
- Press/feature logos when earned (Bloomberg Línea > random podcasts)
- Named conferences/companies over generic titles
- Hand-crafted quality over volume signaling

### Typography as Signal

- Manrope display at large scale = "built in this decade, not last century"
- Mono metadata = "AI-native, built with code"
- Coral signal = "this transmission is coming from somewhere different"

### Anti-Signals (what breaks authority)

- Any AI brain / circuit / neural net imagery
- Stock photos of any kind
- Canva default templates (detectable at 100 paces)
- More than 3 typefaces per composition
- Gradients on anything
- "Let's go!" energy or hustle-culture visual language
- Any remaining trace of Electric Blue / Crimson / Neon Green / Impact typography

---

## Do's and Don'ts (Quick Reference)

### DO

- ✓ Scale Manrope display aggressively (48pt minimum for headlines, 96pt+ for issue numbers)
- ✓ Use negative letter-spacing on display (`-0.03em` to `-0.05em`)
- ✓ Use mono for metadata, numbers, coordinates — always
- ✓ Let paper dominate (55-60% of every composition)
- ✓ Coral as weapon — once per composition, lands hard
- ✓ Obsidian for structure — text, rules, fills
- ✓ Single professional photo rotated through 4 treatments for variety
- ✓ Abstract technical hero illustrations (Señal / Amanecer / Red)
- ✓ Typographic hero when the headline can carry alone

### DO NOT

- ✗ Reintroduce: Fraunces, Georgia as display, any traditional editorial serif
- ✗ Reintroduce: Electric Blue, Crimson Red, Neon Green, gold, navy, bone from previous systems
- ✗ Use: Impact, Bebas Neue, Montserrat Extra Bold
- ✗ Use: stock photos, AI-generated imagery, brain/circuit/neural network motifs
- ✗ Use: Canva default templates
- ✗ Use: gradients on anything
- ✗ Use: pure black `#000000` (use obsidian `#0A0A0C`)
- ✗ Use: more than coral as an accent color
- ✗ Use: emoji graphics (keep punctuation emoji `• → ✔ ‣` only)
- ✗ Mimic: Every.to / Economist / Monocle / Bloomberg Businessweek (old-editorial)
- ✗ Mimic: DotCSV / Platzi aesthetic (engineer-casual)
- ✗ Ship anything that looks like it could be from a 2023 corporate newsletter template
- ✗ Clickbait CTAs ("comenta X y te envío Y") per Memory Rule #1
- ✗ Lead with "LATAM" in Spanish copy per Memory Rule #2

---

## Migration Path from Current System

**Phase 1 — Foundation (immediate):**
1. Install typography: Manrope + Inter + JetBrains Mono via Google Fonts
2. Lock new palette in Beehiiv brand settings (`#0A0A0C` / `#FBE8D9` / `#FF5941`)
3. Newsletter redesign using `beehiiv-components.html` library
4. LinkedIn banner refresh with new palette

**Phase 2 — Content system:**
5. "NO.[N]" carousel template master file
6. Build-mode post image template using Manrope display + photo or illustration
7. Retire Standard Blue Box permanently

**Phase 3 — Photography (within 3 months):**
8. Set up duotone pipeline (free tool: duotone.shapefactory.co) for single photo
9. Test all 4 treatments, select top 3 for rotation
10. Eventual professional editorial shoot (post-revenue)

**Phase 4 — Amplification:**
11. Speaker deck template matching the system
12. Landing page / website in same visual language

**Do not retroactively redesign published posts.** Brand evolution is readable as growth. Lock new system forward from 2026-04-14.

---

## References & Mood Board

**Future-forward editorial (structural reference):**
- [Stripe Press](https://press.stripe.com/) — book covers as confident typography + dramatic monochrome
- [Linear](https://linear.app/) — brutal minimalism, bold but warm
- [Anthropic brand](https://www.anthropic.com/) — warm neutrals + unexpected accent
- [Vercel](https://vercel.com/) — high-contrast typographic confidence
- [Replicate](https://replicate.com/) — stark modernism + bright signal accent
- WIRED 1994-2003 (Carson/Plunkett era) — radical typography at scale
- A24 film title design — restrained until radically bold

**Typography inspiration:**
- [Manrope specimen](https://fonts.google.com/specimen/Manrope) — Mikhail Sharanda (SF Pro equivalent, consistent cross-platform render)
- Stripe Press — look at *High Growth Handbook*, *Working in Public* covers
- [Pangram Pangram foundry](https://pangrampangram.com/) — aspirational paid alternatives (Editorial New, Migra, Neue Machina) for post-revenue upgrade

**Latin design with future-forward attitude:**
- Casa Fayette (Guadalajara) — modernist Mexican hospitality
- [Tereza Bettinardi](https://terezabettinardi.com/) — Brazilian modernist editorial
- Aesop brand system (Australian but distinctly Latin-modernist in color)

**Anti-references (what NOT to become):**
- The Economist, Monocle, Every.to (too past-anchored for this positioning)
- Morning Brew, The Hustle (US creator-economy hype)
- Any "AI newsletter" that uses brain/circuit imagery
- DotCSV, Freddy Vega (engineer-aesthetic)
- Any Canva-default Spanish LinkedIn newsletter

---

## Governance

This document is the **source of truth** for all visual design decisions. When in conflict:
- This doc > v1 "Editorial AI Authority" (deprecated)
- This doc > `visual-specs.md` (deprecated)
- This doc > individual agent defaults
- This doc > platform default templates

Updates require strategic review. Serial consistency creates authority — do not drift issue-to-issue.
