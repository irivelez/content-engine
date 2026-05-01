# CLAUDE.md

Guidance for Claude Code on this repo.

## What this is

File-based content engine for Irina's Spanish LinkedIn + Beehiiv. No build, no tests. Markdown agents/skills + a daily fetcher + a weekly metrics script.

**Hard rule — voice ownership:**
- **LinkedIn posts:** AI never writes Spanish prose. AI offers hook options + structural beats. Irina writes.
- **Beehiiv newsletters:** AI drafts the full piece. Irina edits.
- Audience reality (Apr 2026): 3,731 followers · **62% Senior IC + Entry (Valentina-tier)** · 7% CXO. Optimize for Valentina; let it bleed up.

## Active components

| Component | Type | Role |
|-----------|------|------|
| `scripts/fetch-sources.js` | script (launchd, 8 AM daily) | Fetches X/HN/RSS/Reddit → `input/daily/{date}.json`; pushes to `the-feed` GitHub. |
| `.claude/skills/angles/` | skill | `/angles [date]` — raw items → ranked angles in English. Output: `output/angles/{date}-angles.md`. |
| `.claude/agents/content-architect.md` | agent (Opus) | Director-level. Takes a raw idea, clarifies soul (3-5 questions), decides format/platform/CTA, scaffolds beats, returns brief + 3 hooks (Pattern A/B/C). NEVER writes prose. |
| `.claude/agents/post-polisher.md` | agent (Opus) | Reviews her Spanish draft. Builder vs Philosopher verdict + 3 hook alternatives drawn from URL-verified winning patterns. Never rewrites prose. |
| `.claude/agents/newsletter-writer.md` | agent (Sonnet) | Drafts complete 1000-1500 word Beehiiv newsletters in Spanish. Distinguishes builder-mode (her experience) from analyst-mode (synthesis only). She edits and ships. |
| `.claude/agents/chief-of-staff.md` | agent (Opus) | Sunday weekly review + **Pattern Compass**. Reads the last 3–4 `data/weekly-review/*-raw.json` snapshots (noise vs signal), fetches top/bottom posts live, returns OKR pacing + lever status + Stick/Change/Fix/Explore + ONE cut + ONE double-down + ONE priority. Brutally honest. NEVER auto-edits voice doctrine — only suggests changes when 3+ weekly readings agree. (Absorbed `pattern-analyzer` 2026-04-30.) |
| `.claude/agents/lead-magnet-architect.md` | agent | Lead magnet + landing page design (secondary). |
| `scripts/performance-loop.py` | script | Reads `data/post-analytics/Content_*.xlsx` + Beehiiv API → `data/weekly-review/{YYYY-WW}-raw.json`. |
| `scripts/weekly-commit.sh` | script (launchd, Sat 11 PM Mac local) | Auto-commits new xlsx exports to public repo before the Sunday cloud routine. |
| Cloud routine `weekly-content-review` | claude.ai routine | Sun 6:30 AM Bogotá. Clones repo → performance-loop → chief-of-staff → commits `data/weekly-review/{YYYY-WW}.md`. ID: `trig_01RD3ZaKAzhsmyrR3cXz7wbY`. See `memory/project_sunday_automation.md`. |

**Open this iteration:** ship one Beehiiv issue from the 7 abandoned drafts (Q4 — break the 0-published streak). HTML calendar dropped — gut-check whether `/angles` output alone is enough; revisit only if the daily list proves insufficient.

## Workflows

### LinkedIn post
```
1. /angles                              → ranked English angles + verbatim EN hook source
2. Pick winner                          → Irina chooses
3. Write Spanish (Irina)                → using verbatim EN hook source as raw material
4. post-polisher                    → 3 hook alternatives + structural review
5. Publish (Irina, manual edits OK)
```

### Sunday review (autonomous)
```
Sat afternoon  Irina exports 2 xlsx from LinkedIn → data/post-analytics/
Sat 11 PM PDT  weekly-commit launchd → git pull/add/commit/push xlsx
Sun 6:30 COT   cloud routine → performance-loop → chief-of-staff agent →
               data/weekly-review/{YYYY-WW}.md (strategic + Pattern Compass)
               committed back to GitHub
Sun morning    Irina reads the review. Doctrine update suggestions stay in
               the review markdown — voice-and-style.md only changes when
               she explicitly applies them.
```

### Beehiiv newsletter
```
1. Pick angle (often newsletter_candidate from /angles output)
2. newsletter-writer agent → 1000-1500 word draft (builder-mode if she has experience; analyst-mode otherwise)
3. Irina edits and publishes via Beehiiv
```

## Context files

| File | Contains |
|------|----------|
| `context/voice/voice-and-style.md` | URL-verified winning patterns (A: Numbers+Scene · B: Meme Template · C: Action+Contradiction), anti-patterns, quality gates |
| `context/audience-profile.md` | Three archetypes (Camila/Andrés/Valentina); model only — optimize for Valentina |
| `context/reference/hook-bank.md` | LinkedIn-tuned hooks |
| `context/reference/post-templates.md` | Structural templates |
| `context/reference/copywriting-frameworks.md` | AIDA / PAS reference |
| `context/reference/lara-linkedin-teardown-apr-2026.md` | Funnel strategy reference |
| `context/reference/ecosystem-analysis-lara-allie.md` | Authority economy reference |
| `context/brand/design-guidelines.md` | Visual identity (obsidian #0A0A0C · paper #F6F0E4 · coral #FF5941) |

## Source-of-truth rules

- **LinkedIn URL = ground truth** for what shipped. `output/linkedin/shipped/` is a workflow status marker, NOT a faithful record (Irina edits at posting time).
- **Don't duplicate shipped content locally.** For voice/hook analysis, fetch live from LinkedIn URLs using activity IDs in `data/weekly-review/*.json`.
- **Don't cross-reference local archives** when an external feed is already curated and timely (rule from 2026-04-30; trust the daily fetcher's freshness signal).
- **Never fabricate personal claims.** If unsure whether Irina built/tried/discovered something, omit the claim or set `requires_personal_experience: true` in `/angles` output.

## Repo map

```
content-engine/
├── .claude/{CLAUDE.md, agents/, skills/}
├── context/{audience-profile.md, voice/, reference/, brand/}
├── input/{discovery-config.json, daily/}
├── output/{angles/, linkedin/{drafts,shipped}, newsletter/{drafts,published,assets}, lead-magnets/, talks/}
├── data/{post-analytics/, audience-analytics/, weekly-review/}
├── scripts/{fetch-sources.js, performance-loop.py, weekly-commit.sh, *.plist}
└── archive/  ← dropped agents/skills/outputs (recoverable)
```

`output/linkedin/shipped/` is the **workflow kanban** — body-only files, written here when a draft ships. NOT the source of truth (LinkedIn URL is). It exists to mark history; metadata lives elsewhere.

## Fetcher

- Schedule: launchd plist `~/Library/LaunchAgents/ai.content-engine.fetch.plist` (daily 8 AM).
- Install/reload: `cp scripts/ai.content-engine.fetch.plist ~/Library/LaunchAgents/ && launchctl load ~/Library/LaunchAgents/ai.content-engine.fetch.plist`
- Manual run: `npm run fetch`
- Log: `input/fetch.log`
- Env vars: `.env` — `BIRD_AUTH_TOKEN`, `BIRD_CT0`, `BRAVE_API_KEY`, `GITHUB_TOKEN`. Optional for Beehiiv: `BEEHIIV_API_KEY`, `BEEHIIV_PUBLICATION_ID`.
