# Brand Assets — Modo Build

**Direction:** Dispatch from SF — future-forward, AI-native, bold
**Updated:** 2026-04-16
**Brand mark:** Coral cursor `▌` + "MODO BUILD" wordmark (Manrope 800)

Production-ready design assets. Built to work **without an illustrator budget**, with **a single available professional photo**, and entirely on **free Google Fonts**.

**Master reference:** `context/brand/design-guidelines.md` — always read first.

---

## Contents

```
context/brand/assets/
├── README.md                         ← You are here
├── design-tokens.css                 ← Palette + typography + utility classes
├── logo/
│   ├── modobuild-logo-navbar.html    ← Navbar logo (cream/light bg) — 440×96
│   ├── modobuild-logo-navbar.png
│   ├── modobuild-logo-navbar-dark.html ← Navbar logo (obsidian/dark bg) — 440×96
│   ├── modobuild-logo-navbar-dark.png
│   ├── modobuild-logo-800.html       ← Publication logo (Beehiiv, social) — 800×800
│   ├── modobuild-logo-800.png
│   ├── modobuild-favicon-source.html  ← Favicon (cursor + MB) — 512×512
│   └── modobuild-favicon-512.png
├── templates/
│   ├── thumbnail-template.html        ← Reusable thumbnail starter (copy for each post)
│   ├── modobuild-default-thumbnail.html ← Default Beehiiv thumbnail — 1200×630
│   └── modobuild-default-thumbnail.png
├── illustrations/
│   ├── masthead-ornament.svg          ← 3 geometric squares (obsidian/coral/obsidian)
│   ├── section-divider.svg            ← Coral horizontal rule (legacy 5-bar retired)
│   ├── hero-senal.svg                 ← Concentric broadcast — ~40% rotation
│   ├── hero-amanecer.svg              ← Minimalist dawn w/ coral sun — ~30%
│   └── hero-red.svg                   ← Network grid w/ highlighted node — ~20%
└── html-blocks/
    ├── beehiiv-components.html        ← Copy-paste components for Beehiiv newsletter
    └── landing-page-template.html     ← Landing page starter (obsidian canvas)
```

**Per-post thumbnails** live in `output/newsletter/assets/` (dated content, not brand reference).

---

## Palette

| Role | Name | Hex | Deployment |
|------|------|-----|------------|
| Primary | Obsidian | `#0A0A0C` | Text, structure, fills — ~25% |
| Base | Paper | `#FBE8D9` | Brand zone backgrounds — ~55-60% |
| Action weapon | Coral | `#FF5941` | CTAs, cursor mark, eyebrows, accents — ~10% |
| Data weapon | Lime | `#D4FF3A` | Metric numbers, data tags (obsidian bg ONLY) — ~2% |
| Meta | Titanium | `#88898C` | Metadata, secondary text — ~3% |

**Post body canvas:** White `#FFFFFF` — reading zone for screenshot-friendly content.

---

## Typography (all free on Google Fonts)

- **Display:** [Manrope](https://fonts.google.com/specimen/Manrope) — variable 200-800, SF Pro equivalent, consistent cross-platform render
- **Body:** [Inter](https://fonts.google.com/specimen/Inter)
- **Mono:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

**Rules:**
- Max 3 typefaces per composition
- Negative letter-spacing on Manrope display (`-0.03em` to `-0.05em`)
- Generous letter-spacing on mono uppercase (`0.15em` to `0.25em`)
- No italics as default — reserved for pre-headlines + rare editorial moments

---

## Brand Mark — The Cursor

**Mark:** Coral `#FF5941` cursor block `▌` + "MODO BUILD" wordmark in Manrope 800.
**Meaning:** "Live, active, transmitting now" — AI-native, interface-grade identity.
**Animation:** Blinks on web (CSS); static elsewhere (PNG, favicon, email).

| Variant | File | Size | Use on |
|---------|------|------|--------|
| Navbar (cream) | `logo/modobuild-logo-navbar.png` | 440×96 | Light backgrounds |
| Navbar (dark) | `logo/modobuild-logo-navbar-dark.png` | 440×96 | Dark backgrounds |
| Publication | `logo/modobuild-logo-800.png` | 800×800 | Beehiiv logo, social avatar |
| Favicon | `logo/modobuild-favicon-512.png` | 512×512 | Browser tab (cursor + MB) |

**Retired:** The 5-bar signal-strength pattern from v2.0. Existing published content keeps its marks; all new production uses the cursor.

---

## Three-Surface Canvas System

| Surface | Canvas | Use |
|---------|--------|-----|
| Brand zones (navbar, footer, masthead) | Paper `#FBE8D9` | Identity, warmth |
| Post body (reading) | White `#FFFFFF` | Screenshot-friendly, zero per-post adjustment |
| Landing pages (conversion) | Obsidian `#0A0A0C` | Maximum impact, conversion |

---

## Thumbnail Workflow

1. Copy `templates/thumbnail-template.html`
2. Replace placeholders (headline, data, date, issue number)
3. Render via headless Chrome: `--window-size=1200,630`
4. Save PNG to `output/newsletter/assets/thumbnail-[DATE]-[SLUG].png`
5. Upload to Beehiiv post

**Layout:** All content centered (crop-proof for Beehiiv card grid).
**Three hero options:** pre-headline + headline (copy IS hook), data weapon + headline (number IS hook), or meta + headline (context IS hook).

---

## What NOT to Do

- Lime as text on paper bg — always illegible
- Lime for CTAs / emotional signals — that's coral's job
- AI/brain/circuit/neural net imagery
- Stock photos or AI-generated imagery
- Colors outside the 5-color palette
- Gradients on anything
- Leading with "LATAM" in customer-facing copy
- Clickbait CTAs ("comenta X y te envío Y")
