# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Content Engine - Project Instructions

## Overview

A file-based agent system (no code, no build tools, no tests) for creating content in **Spanish** while maintaining Irina's authentic voice. Everything is markdown files + Claude Code agents.

| Platform | Output | Format |
|----------|--------|--------|
| **LinkedIn** | 5 posts/week | Short-form (200-400 words) |
| **Beehiiv** | 1 newsletter/week | "Guía Práctica" (1000-1500 words) |

**Core Philosophy**: Irina writes better Spanish than AI. The system RESPECTS her writing and only enhances structural patterns—never rewrites prose.

---

## Session Continuity

**Start of session**: Read `.claude/SESSION-LOG.md` to see where we left off.
**End of session**: Say "close session" or "wrap up" to trigger the session-closer agent, which updates the log.

---

## Agents & Skills

### LinkedIn Writing (Two Modes)

| Mode | Agent/Skill | Purpose |
|------|-------------|---------|
| **Autonomous** | **signal-to-angles** → **`/hooks`** → **linkedin-post-writer** | AI develops angle → generates hooks → writes publication-ready post |
| **Human-AI** | **post-polisher** | You write: AI reviews structure, offers options, never rewrites prose |

### Newsletter Writing

| Agent | Purpose | When to Use |
|-------|---------|-------------|
| **guide-writer** | Writes "Guía Práctica" newsletters (1000-1500 words) | Weekly Beehiiv newsletter from a brief |

### Skills

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| **`/scout`** | Live X/Twitter search for viral AI content via Grok API | When you want real-time viral signals (requires XAI_API_KEY) |
| **`/curate`** | Curates daily digest from the-feed into content angles | Primary daily research workflow |
| **`/hooks`** | Audience-first hook generator in Spanish | After picking an angle, before writing |
| **`/ai-briefing`** | Autonomous executive AI digest from RSS feeds | Standalone intelligence briefing (no the-feed dependency) |

### Research & Angles

| Agent | Purpose | When to Use |
|-------|---------|-------------|
| **signal-to-angles** | Transforms signals into ranked content angles with full briefs | ALWAYS before writing — develops the angle the post-writer needs |

### Strategy & Learning Agents

| Agent | Purpose | When to Use |
|-------|---------|-------------|
| **pattern-analyzer** | Learns from Notion Swipe Files | Weekly (Sunday) |
| **brand-strategy-architect** | Strategic guidance, positioning, briefs | Monthly planning, strategic decisions |

### Utility Agents

| Agent | Purpose | When to Use |
|-------|---------|-------------|
| **lead-magnet-architect** | Lead magnet & landing page design | Creating lead magnets |
| **session-closer** | Session summary & handoff | End of work sessions |

---

## Workflows

### AUTONOMOUS MODE: AI Writes LinkedIn Post

```
1. RESEARCH           → /curate (daily digest) OR /scout (live X search)
2. PICK (You)         → Choose a signal from the briefing
3. ANGLES (Agent)     → signal-to-angles develops the angle (LATAM gap, builder anchor, full skeleton)
4. PICK (You)         → Choose winning angle (or refine)
5. HOOKS (/hooks)     → Generate 5 hooks for the chosen angle
6. PICK (You)         → Choose or improve the best hook
7. WRITE (Agent)      → linkedin-post-writer takes hook + angle brief → publication-ready post
8. REVIEW (You)       → Final review, minor tweaks
9. PUBLISH (You)      → Post to LinkedIn
```

### HUMAN-AI MODE: You Write, AI Polishes

```
1. WRITE (You)        → Save to output/linkedin/drafts/YYYY-MM-DD-topic.md
2. POLISH (Agent)     → post-polisher reviews: Authority Checklist + hook alternatives
3. REVIEW (You)       → Pick options, apply changes
4. PUBLISH (You)      → Post to LinkedIn
```

### WEEKLY: Learn from Performance (Sunday)

```
1. UPDATE (You)       → Add posts to Notion Swipe Files (My Top/Best/Worst)
2. ANALYZE (Agent)    → "I updated my Notion Swipe Files. Analyze new posts."
3. REVIEW (You)       → Read updated performance-analysis.md
```

### RESEARCH: Daily Digest → Content (Primary)

```
1. CURATE             → /curate (or /curate 2026-02-12)
2. PICK               → Choose signal. 📬 Newsletter Pick → guide-writer, OR LinkedIn signal → next step
3. ANGLES (Agent)     → signal-to-angles transforms signal into ranked angles with briefs
4. HOOKS (/hooks)     → Generate hooks for winning angle
5. WRITE              → You write OR linkedin-post-writer / guide-writer
6. POLISH             → post-polisher (LinkedIn only, if you wrote it)
7. PUBLISH
```

### RESEARCH: Live Viral Search → Content

```
1. SCOUT              → /scout [topic] — live X/Twitter search via Grok API
2. PICK               → Choose 1-3 signals from scout report
3. ANGLES (Agent)     → signal-to-angles develops full angles
4. HOOKS (/hooks)     → Generate hooks for winning angle
5. WRITE              → You write OR linkedin-post-writer
6. POLISH             → post-polisher (if you wrote it)
7. PUBLISH
```

### RESEARCH: Ad-hoc Viral Posts (When you find something yourself)

```
1. ANGLES (Agent)     → signal-to-angles with the viral post(s)
2. HOOKS (/hooks)     → Generate hooks for winning angle
3. WRITE              → You write OR linkedin-post-writer
4. POLISH             → post-polisher (if you wrote it)
5. PUBLISH
```

### NEWSLETTER: Weekly Beehiiv "Guía Práctica"

```
1. TOPIC (5 min)      → Pick 📬 Newsletter Pick from /curate OR your week's experiment
2. BRIEF (5 min)      → Write 3-4 bullets: what you did, what happened, key steps
3. DRAFT (Agent)      → guide-writer generates 1000-1500 word draft
4. YOUR VOICE (30 min)→ Fill placeholders, add real examples, refine
5. PUBLISH (5 min)    → Send via Beehiiv + promote on LinkedIn
```

**Format:** Hook → Problem → What I Did → Step-by-Step → Result → Try This
**Rule:** Every newsletter starts from something you BUILT/TRIED, not just news.

---

## Context Files

### Voice (Read before ANY content work)

| File | Contains |
|------|----------|
| `context/voice/voice-and-style.md` | Hook patterns, emoji system (•→✔‣), formatting, tone |
| `context/voice/core-values.md` | Positioning, beliefs, contrarian takes |
| `context/voice/performance-analysis.md` | What works/doesn't work (update weekly) |

### Audience

**Single source of truth**: `context/audience-profile.md`

Three tiers organized by purchasing power:
- **ICP-1**: Business leaders (Directors, VPs, CXOs) at medium/large LATAM companies — $5K+/month — high-ticket buyers
- **ICP-2**: Profitable founders/entrepreneurs — $300K+/year — medium-ticket buyers
- **Fan Base**: Ambitious professionals & learners (~50-60%) — amplifiers + low-ticket + future ICP
- **Principle**: Builder Mode content naturally serves all tiers simultaneously

### Reference Library (`context/reference/`)

| Files | Use When |
|-------|----------|
| hook-bank.md | Proven hook patterns with real examples (from Literally Academy) |
| post-templates.md | Builder-mode post templates |
| prompting-patterns.md | META reference for writing better agent prompts (not read by agents at runtime) |
| creators/*.md (4 analyses) | Study a specific creator's approach (key reference: Allie K Miller) |

### Brand (`context/brand/`)

| Files | Use When |
|-------|----------|
| visual-specs.md | Brand colors, dimensions, thumbnail specs, screenshot rules |

---

## Directory Structure

```
content-engine/
├── .claude/
│   ├── CLAUDE.md                    # This file
│   ├── agents/                      # 7 agents
│   └── skills/                      # /scout, /curate, /hooks, /ai-briefing
│
├── data/
│   └── trusted-sources.json         # RSS feeds for /ai-briefing skill
│
├── context/
│   ├── audience-profile.md          # ICP + audience tiers (single source of truth)
│   ├── voice/                       # voice-and-style.md, core-values.md, performance-analysis.md
│   ├── reference/                   # hook-bank, post-templates, prompting-patterns, creators/
│   └── brand/                       # visual-specs.md (visual identity)
│
├── input/                           # Briefings from ideation-engine-r
│
├── output/
│   ├── briefings/                   # /ai-briefing executive digests
│   ├── curated/                     # /curate briefings (feeds LinkedIn + Beehiiv)
│   ├── linkedin/                    # drafts/, published/
│   └── beehiiv/                     # drafts/, landing-pages/, published/
```

**External**: `/Users/irina/AI-driven-OS/ideation-engine-r/` (briefings)

---

## Key Principles

### 1. Voice Preservation is Sacred
- POST POLISHER suggests structure, NEVER rewrites prose
- Shows OPTIONS, doesn't force changes
- Irina writes better Spanish than AI

### 2. Builder Mode Over Philosopher Mode

| Builder Mode ✅ (High engagement) | Philosopher Mode ❌ (Low engagement) |
|-----------------------------------|--------------------------------------|
| "I built X in Y minutes" | "Reflexión de media noche..." |
| "I was resistant to X until..." | "Simplicidad es un skill..." |
| "Here's what I found that nobody uses" | Abstract concepts, borrowed wisdom |

**Test**: "What did I BUILD/DO/LEARN?" → If you can't answer specifically, reframe or kill the idea.

### 3. Bilingual Workflow
- **English**: Instructions, techniques, frameworks
- **Spanish**: Actual content creation

### 4. Two Modes of Operation
- **Autonomous mode**: AI writes (hooks → copywriter → final post). Irina reviews before publishing.
- **Human-AI mode**: Irina writes, AI polishes (post-polisher suggests options, never rewrites).
- Both modes: final manual review before publishing

---

## Instructions for Claude

### Always:
- ✅ Reference voice-and-style.md before content work
- ✅ Suggest OPTIONS, not rewrites
- ✅ Validate Builder vs Philosopher mode
- ✅ Preserve authentic voice over technique perfection

### Never:
- ❌ Rewrite Spanish prose without explicit permission
- ❌ Add generic LinkedIn language or corporate buzzwords
- ❌ Skip Builder vs Philosopher validation
- ❌ Use "usted" form (always "tú")
- ❌ Create philosopher mode posts
- ❌ Post in English on LinkedIn

---

## Quick Start Examples

### Autonomous Mode: Full Pipeline
```
/curate                              # Step 1: Get today's signals
```
Then: "I pick signal #2. Run it through signal-to-angles."
Then: "I like angle #1. Run /hooks for it."
Then: "Write a post from hook #3 using the angle brief."

### Live Viral Search
```
/scout AI agents                     # Search X/Twitter live for viral AI agent content
```
Then: "Run signals 1 and 3 through signal-to-angles."

### Human-AI Mode: Polish Your Draft
```
Polish my draft at output/linkedin/drafts/2026-01-08-ai-tools.md
```

### Weekly Performance Analysis
```
I updated my Notion Swipe Files. Analyze new posts.
```

### Write a Newsletter
```
Write a newsletter about [topic]. Here's my brief:
- I tried X with Claude Code
- It took me Y hours
- The key steps were A, B, C
- I was surprised by Z
```

### Research → Content
```
/curate 2026-02-12                   # Or: /scout Claude Code
```
Then follow the pipeline: pick signal → angles → hooks → write

---

## External Integrations

### ideation-engine-r
- Location: `/Users/irina/AI-driven-OS/ideation-engine-r`
- Run: `python curate.py`
- Output: `briefing_YYYY-MM-DD.md`

### the-feed (Daily AI Digest)
- Repo: `github.com/irivelez/the-feed`
- Digest URL: `https://raw.githubusercontent.com/irivelez/the-feed/main/digests/YYYY-MM-DD.md`
- Used by: `/curate` skill
- Output: 283 items → ~35 curated entries from X/Twitter + HN + RSS

### Notion (MCP)
- Used by: brand-strategy-architect
- For: Brand context, strategic decisions, performance tracking

---

## Success Metrics

The system is working when:
- ✅ Drafts feel more like YOU after polish, not less
- ✅ Builder mode posts dominate your content
- ✅ Publishing confidence increases
- ✅ Engagement improves on pattern-aligned posts

**Remember**: You write the Spanish. The system optimizes structure. Your voice is sacred.
