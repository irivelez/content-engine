# CLAUDE.md

Guidance for Claude Code on this repo.

## What this is

File-based content engine for Irina's Spanish LinkedIn + Beehiiv newsletter. No build, no tests. Markdown agents/skills + a daily fetcher + a weekly metrics script.

**Voice ownership:**
- LinkedIn posts: AI never writes Spanish prose. AI gives hooks + structural beats; Irina writes.
- Beehiiv newsletters: AI drafts; Irina edits.

**Audience:** see `context/audience-profile.md` (canonical).

## Active components

| Component | Role |
|-----------|------|
| `scripts/fetch-sources.js` | Daily fetcher (launchd 8 AM). Pushes to `the-feed` GitHub. |
| `.claude/skills/angles/` | `/angles [date]` — raw items → ranked English angles. |
| `.claude/agents/content-architect.md` | Director: idea → brief + 3 hooks. Never writes prose. |
| `.claude/agents/post-polisher.md` | Reviews her Spanish draft. Verdict + hook alternatives. |
| `.claude/agents/newsletter-writer.md` | Drafts Beehiiv newsletters in Spanish. She edits. |
| `.claude/agents/chief-of-staff.md` | Sunday weekly review + Pattern Compass. |
| `.claude/agents/lead-magnet-architect.md` | Lead magnet + landing page (secondary). |
| `scripts/performance-loop.py` | xlsx + Beehiiv API → `data/weekly-review/{week}-raw.json`. |
| `scripts/weekly-commit.sh` | Sat 11 PM launchd: auto-commit xlsx exports. |
| Cloud routine `weekly-content-review` | Sun 6:30 COT: cloud agent runs review. See `memory/project_sunday_automation.md`. |

## Workflows

**LinkedIn post:** `/angles` → pick angle → Irina writes Spanish → `post-polisher` → publish.

**Beehiiv newsletter:** pick angle → `newsletter-writer` → Irina edits → publish.

**Sunday review (autonomous):** xlsx exports Sat → weekly-commit → cloud routine Sun → `data/weekly-review/{YYYY-WW}.md`.

## Repo map

```
content-engine/
├── .claude/{CLAUDE.md, agents/, skills/}
├── context/{audience-profile.md, voice/, reference/, brand/}
├── input/{discovery-config.json, daily/}
├── output/{angles/, linkedin/{drafts,shipped}, newsletter/{drafts,published,assets}, lead-magnets/}
├── data/{post-analytics/, audience-analytics/, weekly-review/}
├── scripts/{fetch-sources.js, performance-loop.py, weekly-commit.sh, *.plist}
└── archive/  ← retired agents/skills/outputs (recoverable)
```

## Source-of-truth rules

- **LinkedIn URL = canonical** for shipped posts. Local `shipped/` is workflow kanban + history, not faithful text.
- **Content ships as packages.** A piece can be `.md` alone or `.md` + carousel + thumbnails + companion images. Group multi-asset pieces in a per-post subfolder under `drafts/` or `shipped/`. No metadata files, no URL bookkeeping.
- **Never fabricate personal claims.** If unsure she did/built/tried something, omit it.

## Fetcher

- Schedule: launchd `~/Library/LaunchAgents/ai.content-engine.fetch.plist` (daily 8 AM).
- Manual run: `npm run fetch`. Log: `input/fetch.log`.
- Env vars: `.env` — `BIRD_AUTH_TOKEN`, `BIRD_CT0`, `BRAVE_API_KEY`, `GITHUB_TOKEN`. Optional: `BEEHIIV_API_KEY`, `BEEHIIV_PUBLICATION_ID`.
