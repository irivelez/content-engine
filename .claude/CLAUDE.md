# Content Engine - Project Instructions

## Overview

A file-based agent system for creating content in **Spanish** while maintaining Irina's authentic voice.

| Platform | Output | Format |
|----------|--------|--------|
| **LinkedIn** | 5 posts/week | Short-form (200-400 words) |
| **Beehiiv** | 1 guide/week | Long-form (2000-3000 words) |

**Core Philosophy**: Irina writes better Spanish than AI. The system RESPECTS her writing and only enhances structural patterns—never rewrites prose.

---

## Agents (11 total in `.claude/agents/`)

### Content Creation Agents

| Agent | Purpose | When to Use |
|-------|---------|-------------|
| **post-polisher** | Structural advisor that respects Spanish prose | EVERY post before publishing |
| **linkedin-draft-writer** | Writes Spanish drafts from briefs | When AI writes (vs you writing) |
| **guide-writer** | Writes 2000-3000 word Beehiiv guides | Weekly newsletter creation |

### Research Pipeline Agents

| Agent | Purpose | When to Use |
|-------|---------|-------------|
| **viral-ai-content-scout** | Finds agentic AI signals on X/Twitter | Weekly research |
| **viral-to-angles** | Transforms signals into content angles | After scout, before writing |
| **angle-scorer** | Ranks angles, picks winner | When choosing between angles |

### Strategy & Learning Agents

| Agent | Purpose | When to Use |
|-------|---------|-------------|
| **content-strategist** | Briefing → content angles | When you have ideation-engine-r briefing |
| **pattern-analyzer** | Learns from Notion Swipe Files | Weekly (Sunday) |
| **brand-strategy-architect** | Strategic guidance, positioning, briefs | Monthly planning, strategic decisions |

### Utility Agents

| Agent | Purpose | When to Use |
|-------|---------|-------------|
| **lead-magnet-architect** | Lead magnet & landing page design | Creating lead magnets |
| **session-closer** | Session summary & handoff | End of work sessions |

---

## Workflows

### PRIMARY: Draft → Polish → Publish (LinkedIn)

```
1. WRITE (You)        → Save to output/linkedin/drafts/YYYY-MM-DD-topic.md
2. POLISH (Agent)     → "Polish my draft. Respect my Spanish. Show options."
3. REVIEW (You)       → Pick option, apply changes
4. PUBLISH (You)      → Final Builder vs Philosopher check, post
```

### WEEKLY: Learn from Performance (Sunday)

```
1. UPDATE (You)       → Add posts to Notion Swipe Files (My Top/Best/Worst)
2. ANALYZE (Agent)    → "I updated my Notion Swipe Files. Analyze new posts."
3. REVIEW (You)       → Read updated performance-analysis.md
```

### RESEARCH: X/Twitter → Content (Optional)

```
1. SCOUT              → "Find important ideas about agentic systems this week"
2. ANGLES             → "Transform Part 2 signals into content angles"
3. SCORE              → "Score these angles, pick the winner"
4. WRITE              → You write OR use linkedin-draft-writer
5. POLISH             → Use post-polisher
6. PUBLISH
```

**Shortcut**: Skip steps 2-3 if an insight resonates immediately.

### GUIDE: Weekly Beehiiv Newsletter

```
1. GATHER             → Pick 1-3 signals from week's research
2. GENERATE           → "Create a how-to guide from these signals"
3. REVIEW             → Add personal examples, verify Builder mode
4. PUBLISH            → Post to Beehiiv
```

---

## Context Files

### Voice (Read before ANY content work)

| File | Contains |
|------|----------|
| `context/voice/voice-and-style.md` | Hook patterns, emoji system (•→✔‣), formatting, tone |
| `context/voice/core-values.md` | Positioning, beliefs, contrarian takes |
| `context/voice/performance-analysis.md` | What works/doesn't work (update weekly) |

### Audience

**Single source of truth**: `/Users/irina/AI-driven-OS/ideation-engine-r/data/audience_profile.md`

- **Primary**: LATAM professionals upskilling in AI (40% Bogotá)
- **Secondary**: Corporate decision-makers
- **They follow you for**: Permission to be a beginner, vicarious transformation, practical step-by-step guidance
- **NOT for**: Multi-agent architecture diagrams, pure theory

### Reference Library (`context/reference/`)

| Level | Files | Use When |
|-------|-------|----------|
| **Quick Reference** | creator-techniques.md, copywriting-frameworks.md, post-templates.md | Need a fast formula |
| **Deep Dive** | creators/*.md (4 analyses, 700K+ followers each) | Study one creator's approach |

**Learning workflow**: Reference Library → Adapt to your voice → Experiment → Track in performance-analysis.md

---

## Directory Structure

```
content-engine/
├── .claude/
│   ├── CLAUDE.md                    # This file
│   └── agents/                      # 11 agents
│
├── context/
│   ├── voice/                       # voice-and-style.md, core-values.md, performance-analysis.md
│   ├── reference/                   # Techniques, frameworks, templates, creator deep dives
│   └── positioning/                 # grove-application-2026.md
│
├── input/                           # Briefings from ideation-engine-r
│
├── output/
│   ├── linkedin/                    # drafts/, ideas/, published/
│   └── beehiiv/                     # drafts/, landing-pages/, published/
│
└── research/                        # X scout reports, analyses
```

**External**: `/Users/irina/AI-driven-OS/ideation-engine-r/` (briefings, audience profile)

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

### 4. Human-in-the-Loop
- AI assists, human decides
- Always final manual review before publishing

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

### Polish a Draft (Primary Use Case)
```
Polish my draft at output/linkedin/drafts/2026-01-08-ai-tools.md
Respect my Spanish writing. Only suggest structural improvements.
```

### Weekly Performance Analysis
```
I updated my Notion Swipe Files. Analyze new posts.
```

### Research → Content
```
Help me find the most important ideas about agentic systems this week
```

---

## External Integrations

### xAI API (X/Twitter Search)
- Used by: viral-ai-content-scout
- Key: `XAI_API_KEY` in `.env`
- Model: `grok-3-fast` with `x_search` tool

### ideation-engine-r
- Location: `/Users/irina/AI-driven-OS/ideation-engine-r`
- Run: `python curate.py`
- Output: `briefing_YYYY-MM-DD.md`

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
