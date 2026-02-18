# Visual Specs Bible

Single source of truth for brand visuals, platform dimensions, and production specs.
Source: Notion "Visual Identity" page.

---

## 1. Brand Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Electric Blue | `#00E5FF` | 50% — main accents, key text boxes, CTAs |
| Crimson Red | `#DC143C` | 30% — emphasis, borders, highlights, CTAs |
| Deep Black | `#0A0A0A` | Base for text boxes, backgrounds |
| Pure White | `#FFFFFF` | Text, light backgrounds |
| Neon Green | `#39FF14` | 10% — special highlights only |

### Typography

- **Primary fonts**: Impact, Bebas Neue, or Montserrat Extra Bold
- **Weight**: Always bold (700-900)
- **Style**: Uppercase for main statements
- **LinkedIn sizing**: 48-72px main text, 32-40px subtitles
- **TikTok sizing**: 56-84px main text, 32-40px subtitles

### Standard Blue Box (Reusable Component)

The go-to visual element — use 80% of the time on LinkedIn.

- Rectangle: Black fill (`#0A0A0A`), Electric Blue stroke (`#00E5FF`, 4px)
- Text: White, Impact/Bebas Neue, Bold, 60px
- Position: Bottom third of frame (Y-axis ~80% from top), center-aligned
- Padding: 20px all sides, 40px margin from bottom edge
- Never rotate or skew

### Color Priority by Platform

**LinkedIn**: Electric Blue (dominant) > Crimson Red (key words only) > Black & White (base)
**TikTok**: Electric Blue (dominant) > Crimson Red (emphasis) > Neon Green (experimental tags)

---

## 2. Platform Dimensions

| Asset | Dimensions | Format | Max Size | Notes |
|-------|-----------|--------|----------|-------|
| **LinkedIn feed (square)** | 1080x1080px (1:1) | JPG/PNG | — | Preferred for video |
| **LinkedIn feed (vertical)** | 1080x1350px (4:5) | JPG/PNG | — | More real estate |
| **TikTok** | 1080x1920px (9:16) | MP4 | — | Vertical video |
| **Beehiiv Post Thumbnail** | 1200x630px | JPG | <90KB | Recommended by Beehiiv. Email preview + social share |
| **Email in-body image** | 600px wide | PNG | <30KB each | Tutorial screenshots |
| **Email banner** | 600x730px | JPG/PNG | <50KB | Hero image in newsletter |
| **Logo** | 800x800px | PNG | <25KB | Email header |

---

## 3. Beehiiv Email Specs

- Template width: 600px (standard, ensures compatibility)
- Max email total size: 100KB (Gmail clips at 102KB)
- 55% of readers on mobile
- CTA buttons: 42-72px height (thumb-friendly)
- Keep images optimized — each screenshot under 30KB

---

## 4. Thumbnail Creation Specs (for Claude)

**Dimensions:** 1200x630px
**Style:** Brand system — Electric Blue accents, black/dark backgrounds, white bold text

**Layout options:**
- **Option A** (default): Dark background (`#0A0A0A`) + white uppercase headline + blue accent elements
- **Option B**: White background + Standard Blue Box with headline + visual element

**Text rules:**
- Headline: 6-8 words max, 48-60px, bold uppercase (Impact/Bebas Neue style)
- Subtext: 24-32px, lighter weight
- Always Spanish
- Must be readable at 300px width (mobile thumbnail preview)

**Prompt template:**
```
Create a 1200x630px newsletter thumbnail.
Brand colors: Electric Blue #00E5FF, Crimson Red #DC143C, Black #0A0A0A, White #FFFFFF.
Headline: "[SPANISH HEADLINE, 6-8 WORDS, UPPERCASE]"
Subtext: "[supporting line]"
Style: Bold, high contrast, professional. Use Standard Blue Box pattern
(black fill, blue stroke) or dark background with white text.
Export as JPG, optimized to <90KB.
```

---

## 5. Screenshot Guidelines

- Crop to relevant area only (not full desktop)
- Resize to 600px width for email
- PNG format (preserves text clarity)
- Use light mode terminal/UI (better contrast in email)
- Annotations: Crimson Red (`#DC143C`) arrows/boxes for emphasis
- Hide personal info (API keys, emails, paths with real names)
- Per newsletter: 1 result screenshot (hook) + 3-5 step screenshots

---

## 6. File Naming Conventions

- Thumbnails: `thumbnail-YYYY-MM-DD-topic-slug.jpg`
- Screenshots: `topic-slug-step-N-description.png`
- Banners: `banner-series-name-edition.jpg`
- All stored in: `output/beehiiv/assets/`

---

## 7. Mobile Pre-Publish Checklist

- [ ] Thumbnail text readable at 300px width?
- [ ] CTA buttons at least 44x44px?
- [ ] Screenshots show only essential UI (no tiny text)?
- [ ] Single-column layout (no side-by-side images)?
- [ ] Total email under 100KB?

---

## 8. LinkedIn Text Overlay Rules (from Notion)

- Use Standard Blue Box 80% of the time
- Professional tone in text
- Single message per video/image
- Logo: Small, bottom-right corner

## 9. TikTok Text Overlay Rules (from Notion)

- More dynamic, can use 2-3 boxes per video
- Slightly larger text (more screen space)
- Can experiment with Neon Green here
