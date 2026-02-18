---
name: ai-briefing
description: "Generate an executive AI intelligence digest from trusted sources. Fetches RSS feeds, filters to last 72 hours, ranks by business relevance, and produces a clean briefing. Triggers on: ai briefing, ai digest, what's new in ai, ai news, brief me on ai, ai intel."
---

# AI Intelligence Briefing

Generate a concise, high-signal AI digest for a business leader — sourced exclusively from vetted experts and official channels.

---

## The Job

1. Read the trusted sources from `data/trusted-sources.json` (relative to the project root)
2. Fetch RSS feeds from every source using WebFetch
3. Filter to items published within the last 72 hours (3 days)
4. Analyze, deduplicate, and rank by business relevance
5. Generate a polished executive briefing in markdown
6. Save to `output/briefings/` with today's date

**Important:** Only use the sources defined in `trusted-sources.json`. Do NOT add external sources. If a feed fails or returns no recent items, skip it silently — do not fabricate content.

---

## Step 1: Load Sources

Read `data/trusted-sources.json` from the project root to get all feed URLs.

Process sources in this priority order:
1. **`official_sources`** (Anthropic, OpenAI, LangChain) — highest signal weight
2. **`trusted_voices`** sorted by `signal_weight` descending — `critical` priority first, then `high`, then `medium`
3. **`community_sources`** — lowest priority, use only if they add unique signal

Each source entry has a `channels` object with one or more feed URLs. Fetch every channel URL.

---

## Step 2: Fetch Feeds

For each feed URL, use `WebFetch` with the prompt:

```
Extract all articles/posts from this RSS/Atom feed. For each item return:
- title (exact)
- link (full URL)
- published date (ISO 8601 or as provided)
- summary or description (first 200 words max)
Return as a structured list. If this is not a valid feed or has no items, say "NO_ITEMS".
```

**Parallelization:** Fetch multiple feeds simultaneously using parallel tool calls to maximize speed.

**Date filter:** After collecting results, discard any item older than 72 hours from the current date/time. If a feed does not provide dates, include items but mark them as `[date unconfirmed]`.

---

## Step 3: Analyze and Rank

For all items that passed the date filter, evaluate each one on these criteria:

### Relevance Score (1-10)
- **Business impact:** Does this affect how companies build, buy, or deploy AI? (+3)
- **Strategic shift:** New model release, major partnership, policy change, funding round? (+3)
- **Practical utility:** Can a business leader act on this within 30 days? (+2)
- **Source authority:** Weight by `signal_weight` from trusted-sources.json (+2)

### Deduplication
Multiple sources often cover the same news. Group related items and keep the best source (highest authority, most detail). Note other sources that covered it.

### Categorization
Assign each item to exactly one category:
- **Model & Platform Updates** — New models, capabilities, API changes, pricing
- **Industry Moves** — Funding, acquisitions, partnerships, policy, regulation
- **Tools & Infrastructure** — Developer tools, frameworks, open source releases
- **Research & Breakthroughs** — Papers, benchmarks, technical advances
- **Strategy & Business** — Startup insights, go-to-market, AI adoption patterns
- **Contrarian & Critical** — Pushback on hype, risks, limitations, dissenting views

---

## Step 4: Generate the Briefing

### Output Format

```markdown
# AI Intelligence Briefing
**[Full date, e.g. February 13, 2026]** | Covering the last 72 hours

---

> **TL;DR — Top 3 signals this week:**
> 1. [One-line summary of #1 most important development]
> 2. [One-line summary of #2]
> 3. [One-line summary of #3]

---

## Model & Platform Updates

### [Headline]
[2-3 sentence summary. What happened, why it matters for business leaders.]

**Key stats:** [Any numbers, benchmarks, pricing — bullet points]
**Source:** [Author/Outlet Name](direct-link-to-article)
**Also covered by:** [Other source names if applicable]

---

## Industry Moves

### [Headline]
[Summary]

**Key stats:** [...]
**Source:** [Name](link)

---

## Tools & Infrastructure

### [Headline]
[Summary]

**Why it matters:** [One sentence on business relevance]
**Source:** [Name](link)

---

## Research & Breakthroughs

### [Headline]
[Summary — translate technical findings into business implications]

**Source:** [Name](link)

---

## Strategy & Business

### [Headline]
[Summary]

**Actionable takeaway:** [What a business leader should consider doing]
**Source:** [Name](link)

---

## Contrarian & Critical

### [Headline]
[Summary — the counterargument or risk worth knowing]

**Source:** [Name](link)

---

## Sources Scanned

| Source | Type | Items Found | Recent (72h) |
|--------|------|:-----------:|:------------:|
| Anthropic | Official | X | X |
| Andrej Karpathy | Expert | X | X |
| ... | ... | ... | ... |

**Total sources scanned:** X
**Items within 72h window:** X
**Items included in briefing:** X

---

*Generated [timestamp] from [X] trusted sources.*
*Next briefing recommended: [date + 3 days]*
```

### Formatting Rules

- **No fluff.** Every sentence must carry information. Write like you're briefing a CEO between meetings.
- **Lead with "so what."** Don't just report what happened — state why it matters for business.
- **Key stats in bold bullet points.** Numbers, benchmarks, and money figures should jump off the page.
- **Direct links only.** Every source must link to the original article, not an aggregator.
- **Skip empty categories.** If no items fall in a category, omit the section entirely. Don't include placeholder text.
- **Maximum 12-15 items total.** Quality over quantity. If there are more, keep only the highest-scored items.
- **Deduplication note:** When multiple sources cover the same story, list the primary source and note others in "Also covered by."

---

## Step 5: Save Output

Save the briefing to:
```
output/briefings/ai-briefing-YYYY-MM-DD.md
```

Create the `output/briefings/` directory if it doesn't exist.

If a briefing for today's date already exists, append a counter: `ai-briefing-YYYY-MM-DD-2.md`

After saving, display the full briefing to the user in the conversation.

---

## Edge Cases

- **Feed returns error or timeout:** Skip it, note in the Sources Scanned table as "unavailable"
- **No items in 72h window:** Report "No new content from [source] in the last 72 hours" in the table
- **All feeds fail:** Tell the user feeds are unreachable and suggest trying again later. Do NOT generate a briefing from memory or hallucinated content.
- **Very few items (< 3):** Still generate the briefing but add a note: "Light signal period — fewer updates than usual from tracked sources."

---

## Checklist

Before saving the briefing:

- [ ] Only used sources from `trusted-sources.json` — no external sources added
- [ ] All items are within the 72-hour window (or marked `[date unconfirmed]`)
- [ ] Every item has a direct link to the original source
- [ ] No fabricated content — everything traces to a real feed item
- [ ] Empty categories are omitted
- [ ] TL;DR section captures the 3 highest-impact signals
- [ ] Sources Scanned table is complete and accurate
- [ ] File saved to `output/briefings/ai-briefing-YYYY-MM-DD.md`
