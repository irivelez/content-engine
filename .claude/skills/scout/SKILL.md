---
name: scout
description: Search X/Twitter in real-time for viral AI content using the Grok API. Finds high-engagement posts with replicable patterns that the-feed digest might miss. Use when you want live viral signals, not pre-curated digests. Triggers on /scout or when looking for what's trending on X right now.
argument-hint: "[topic or keyword to search, e.g. 'AI agents', 'Claude Code', 'multi-agent systems']"
---

# Viral AI Content Scout

Search X/Twitter for high-performing AI content using the Grok API. Find viral posts with replicable patterns for Irina's LATAM audience.

## Prerequisites

This skill requires the `XAI_API_KEY` environment variable. If not set:
1. Tell the user: "XAI_API_KEY is not set. You need a Grok API key from x.ai to use /scout."
2. Stop execution.

Check with: `echo "${XAI_API_KEY:+SET}"`

## Context (Read Before Searching)

1. `context/voice/core-values.md` — Irina's positioning (filter for relevance)
2. `context/audience-profile.md` — WHO this is for (LATAM professionals, semi-technical)

## Search Process

### Step 1: Build the Search

Take the topic from `$ARGUMENTS`. If empty, ask the user.

Use curl to call the Grok API:

```bash
curl -s -X POST "https://api.x.ai/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $XAI_API_KEY" \
  -d '{
    "model": "grok-3",
    "messages": [
      {
        "role": "system",
        "content": "You are a research assistant with access to real-time X/Twitter data. Search for viral posts about the given topic from the last 7-14 days with high engagement (1000+ likes preferred, 500+ minimum). Focus on BUILDER content: tutorials, demos, code walkthroughs, builds, discoveries, and how-tos. Exclude pure opinions, predictions without proof, and engagement bait. For each post provide: author handle, full tweet text, engagement metrics (likes/retweets/views), and date posted."
      },
      {
        "role": "user",
        "content": "Find 7-10 viral posts about [TOPIC] from the last 7-14 days. Requirements: 500+ likes minimum (prefer 1000+), BUILDER content over abstract thoughts. For each post: author @handle, full text, likes/RTs/views, date, and 1-sentence summary of why it performed well."
      }
    ],
    "search_parameters": {
      "mode": "auto",
      "return_citations": true,
      "from_date": "[calculate: 14 days ago, YYYY-MM-DD]",
      "to_date": "[today, YYYY-MM-DD]"
    }
  }'
```

Replace `[TOPIC]` with the actual search topic and dates with real dates.

### Step 2: Filter & Analyze

For each post returned, extract:

1. **Author**: @handle
2. **Full text**: Preserve formatting
3. **Engagement**: Likes, RTs, views
4. **Date**: When posted
5. **Builder Score** (1-10): 10 = "I built X, here's how" / 1 = "Thoughts on AI"
6. **Hook analysis**: What makes the first line stop the scroll?
7. **Replicable pattern**: The structural formula that can be adapted
8. **LATAM relevance**: Would this resonate with Spanish-speaking professionals?

**Filter out** posts scoring below 6 on Builder Score.

### Step 3: Content Gap Check

Scan `output/linkedin/drafts/` and `output/curated/` for overlapping topics from the last 7 days. Flag any overlaps.

## Output Format

Write results to `output/curated/{DATE}-scout-{topic-slug}.md`:

```markdown
# Scout Report — [Topic]
**Date:** YYYY-MM-DD
**Source:** Grok API (live X/Twitter search)
**Query:** [search terms used]
**Results:** [X] posts found, [Y] passed Builder filter

---

## Viral Signals

### 1. [Brief title]
**Author:** @handle | **Engagement:** [X] likes • [Y] RTs • [Z] views
**Date:** YYYY-MM-DD | **Builder Score:** X/10

> [Full tweet text]

**Why it went viral:** [1-2 sentences]
**Replicable pattern:** [The formula]
**LATAM angle:** [How to adapt for Irina's audience]

---

[repeat for each signal...]

---

## Top Patterns Found

1. **[Pattern name]:** [Description + which posts used it]
2. **[Pattern name]:** [Description]
3. **[Pattern name]:** [Description]

---

## Recommended Next Step

Pick 1-3 signals and run them through `signal-to-angles` to develop full content angles.
```

## Quality Rules

- **BUILDER content only**: Tutorials, demos, builds, discoveries, real results
- **Exclude**: Pure opinion, predictions without proof, engagement bait, promotional threads
- **Specificity wins**: Posts with concrete numbers, tools, timeframes score higher
- **Recency matters**: Last 7 days > last 14 days
- **Quality over quantity**: 5 excellent signals beats 10 mediocre ones

## If API Call Fails

1. Check `$XAI_API_KEY` is set: `echo "${XAI_API_KEY:+SET}"`
2. If key is missing, tell user to set it: `export XAI_API_KEY=your-key-here`
3. If API errors, report the exact error message
4. Suggest fallback: "Try /curate instead — it uses the-feed digest which doesn't need an API key"
