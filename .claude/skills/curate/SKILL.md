---
name: curate
description: Curate daily AI digest from the-feed into content angles for LATAM audience. Use when asked to "curate", "analyze today's digest", or "/curate". Reads the-feed digest for a given date, performs two-tier curation (deep dive on top 3 + description-based for rest), generates briefing with signals, trends, takeaways, and content opportunities.
argument-hint: "[YYYY-MM-DD or today]"
---

# Curate Signals Skill

You are curating AI signals from the-feed digest for a professional building her brand around practical AI applications for LATAM professionals and business leaders who want to USE AI tools, not build them.

Your input is the digest from the-feed. If you need richer context on a specific digest entry, WebFetch its original URL to enrich the analysis.

## Step 1: Read Context Files

Read these 2 files:

1. `context/audience-profile.md` — WHO we curate for
2. `context/voice/core-values.md` — Strategic positioning filter

## Step 2: Fetch Digest

- Parse `$ARGUMENTS` for a date (YYYY-MM-DD). If empty or "today", use today's date.
- Construct URL: `https://raw.githubusercontent.com/irivelez/the-feed/main/digests/{DATE}.md`
- Fetch via WebFetch. If the digest doesn't exist, tell the user and suggest trying yesterday's date.

## Step 3: Two-Tier Curation

### Tier 1: Deep Dive (Top 3)

Filter entries with highest engagement (>1K likes, >100 HN points, or relevance: 10). Select top 3 by engagement.

For each Tier 1 item:
1. WebFetch the original URL from the digest to get full content
2. If WebFetch fails (blocked, timeout, error), fall back to the title + description from the digest
3. Deep analysis with full context

### Tier 2: Description-Based (remaining entries)

- Analyze from title + description in the digest only
- Items from last 3 days get higher weight
- Standard signal analysis

## Step 4: Signal Scoring

Score each item as a percentage with visual signal bars.

**HIGH SIGNAL (70-100%):**
- New tool/framework releases or major updates
- Practical tutorials with concrete results
- Trend-setting ideas
- Real production case studies with metrics
- Announcements from key players (Anthropic, OpenAI, Google)
- Contrarian insights challenging conventional wisdom

**MEDIUM SIGNAL (40-70%):**
- Useful but not groundbreaking content
- Good explanations of existing concepts

**LOW SIGNAL (filter out):**
- Generic AI hype without substance
- Rehashed content, promotional filler
- Content too technical for non-developer audience

## Step 5: Content Gap Check

Scan `output/linkedin/drafts/` and `output/curated/` for topics from the last 7 days. Deprioritize overlapping topics.

## Step 6: Generate Briefing

Write the briefing to `output/curated/{DATE}-curated-briefing.md` using this format:

```markdown
# Curated Briefing — [Month Day, Year]
**Date:** YYYY-MM-DD
**Source:** the-feed digest — [X] curated items

---

## Top Signals Today

### 1. [Headline]
**Signal:** [visual bars] (X%) | **Type:** [type] | **Source:** [author] ([engagement])

**Why it matters:** [explanation]

**Action:** [actionable takeaway]

[URL]

---

[repeat for each signal, max 7...]

---

## Emerging Trends

- **[Trend name]:** [description]
- **[Trend name]:** [description]
...

---

## Key Takeaways

- **[Takeaway]:** [interpretation — "so what" for LATAM AI professionals]
- **[Takeaway]:** [interpretation]
...

---

## Content Opportunities

### 📬 Newsletter Pick (Beehiiv "Guía Práctica")

From all signals, select the ONE best candidate for a step-by-step newsletter guide. This should be the signal that:
- Has the most depth for a practical walkthrough
- Connects to a tool/feature Irina can demonstrate
- Would give readers something to DO, not just know

**Format:**
```
### 📬 Newsletter: "[Practical title — what the reader will learn to DO]"
**Why this works as a guide:** [1 sentence — why this has enough depth for a step-by-step]
**Builder mode anchor:** [what Irina would build/try/demonstrate]
**Steps preview:** [3-4 bullet outline of what the walkthrough would cover]
```

---

### LinkedIn Opportunities (3-4 posts)

### 1. 🔥 "[Hook idea — compelling headline]"
**Format:** [format] | **Urgency:** now
**Audience:** [target audience]
**Builder mode anchor:** [what Irina could build/try/demonstrate]

**Key Points:**
- [point 1]
- [point 2]
- [point 3]
- [point 4]

---

### 2. 🔥 "[Hook idea]"
...

### 3. 🕐 "[Hook idea]"
...

### 4. 🌲 "[Hook idea]"
...
```

Signal bars use `/` characters proportional to score: `//////////` = 100%, `///////` = 70%, etc.

Urgency emojis: 🔥 = `now`, 🕐 = `this_week`, 🌲 = `evergreen`

Prioritize content opportunities that:
- Show practical results
- Offer contrarian or fresh takes
- Have strong LATAM-relevant angles
- Position Irina as ahead of the curve
- Are accessible to non-developer audience

Every content opportunity must pass:
- **Builder Mode**: Answers "What can I BUILD/DO/LEARN?"
- **LATAM Relevance**: Specific reason this resonates with Spanish-speaking professionals
- **Irina's Lens**: Connects to her journey, values, or positioning

## Execution

1. Read context files (audience profile, core values)
2. Fetch the digest for the given date
3. Identify Tier 1 items (top 3 by engagement)
4. WebFetch each Tier 1 URL for deep analysis
5. Analyze Tier 2 items from descriptions
6. Score and filter signals
7. Check content gaps against recent drafts and curated briefings
8. Generate the complete briefing
9. Write to output file
10. Report summary to user
