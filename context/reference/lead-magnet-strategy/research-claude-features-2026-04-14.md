# Claude Ecosystem 2026: Feature Inventory (Jan 1 – Apr 14)

**Research scope**: Every notable Anthropic / Claude product, feature, integration and model shipment announced between January 1, 2026 and April 14, 2026.
**Audience**: Irina Velez's LATAM audience — business leaders at medium-large companies, profitable founders, and ambitious professionals learning AI.
**Quality bar**: Reference-grade. Each entry is sourced, dated, and written for a serious user.
**Research date**: April 14, 2026.

---

## PART 1 — Master Feature Inventory (47 features)

Grouped by product line. Each entry = name, product, date, description, plan availability, primary use case for a business user, source.

### MODELS (6 shipments)

**1. Claude Opus 4.6** | Models | Feb 5, 2026
- Flagship reasoning + coding model. 1M token context window, 128K max output, extended thinking, multi-agent collaboration, 14.5-hour task completion time horizon.
- Plans: Pro, Max, Team, Enterprise, API
- Pricing: $5 / $25 per million tokens (input/output)
- For the business leader: the model you want behind your most important agentic workflows — legal review, financial modeling, strategy docs. If quality matters more than cost, use Opus.
- Source: https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-6

**2. Claude Sonnet 4.6** | Models | Feb 17, 2026
- Default model for Pro and Free users. Beat Opus 4.5 at 60% of the cost. 1M context, 64K output. Computer-use performance jumped to 72.5% on OSWorld.
- Plans: Free (limited), Pro, Max, Team, Enterprise, API
- Pricing: $3 / $15 per million tokens
- For the business leader: the workhorse. 90% of daily tasks (drafting, analysis, summarization, research) should run on Sonnet unless you specifically need Opus.
- Source: https://www.anthropic.com/news

**3. Fast Mode for Opus 4.6** | Models | Feb 7, 2026 (research preview)
- Same Opus 4.6 weights and intelligence, served through a high-priority inference path. Output tokens ~2.5x faster. Costs 6x standard Opus pricing.
- Plans: API + available via Claude Code, GitHub Copilot, Cursor, Vercel AI Gateway
- For the business leader: rarely what you want — expensive and only useful for latency-critical agentic loops. Skip unless you are building real-time interactive agents.
- Source: https://platform.claude.com/docs/en/build-with-claude/fast-mode

**4. 1M Context Window GA (Standard Pricing)** | API | Mar 13, 2026
- Removed beta header and premium multiplier. 1M token requests bill at identical per-token rate as 9K requests. Media capacity expanded 100 → 600 images/PDF pages per request.
- Plans: All plans with Opus 4.6 or Sonnet 4.6
- For the business leader: you can now drop an entire codebase, deal room, or board pack into one prompt. No segmentation gymnastics.
- Source: https://claude.com/blog/1m-context-ga

**5. Claude Mythos Preview (restricted)** | Models | Apr 7, 2026 (Project Glasswing)
- Next-generation frontier model. Only released under restricted access to ~50 tech/security partners (+$100M in usage credits). Not generally available.
- For the business leader: a signal, not a product. It tells you Claude's capability ceiling is accelerating — plan accordingly.
- Source: https://red.anthropic.com/2026/mythos-preview/

**6. Claude Haiku 4.5 (still current)** | Models | shipped Oct 2025, still the Haiku tier
- 73.3% SWE-bench Verified, 200K context, extended thinking, computer use, vision. $1 / $5 per million tokens.
- For the business leader: use for high-volume, low-complexity pipelines (classification, tagging, intake routing). Lacks prompt injection protections — don't give it sensitive tools.
- Source: https://www.anthropic.com/news/claude-haiku-4-5

---

### CLAUDE COWORK (desktop agent) — 14 shipments

**7. Claude Cowork Research Preview Launch** | Cowork | Jan 12, 2026
- Claude Code's agentic capabilities rewrapped for non-technical users. Direct permission-based access to local folders, multi-task queuing in parallel, autonomous file operations.
- Plans: initially Max, expanded to Pro
- For the business leader: an executive assistant that lives on your Mac. Extracts data from receipts into Excel, organizes file directories by content, synthesizes research reports across local files.
- Source: https://techcrunch.com/2026/01/12/anthropics-new-cowork-tool-offers-claude-code-without-the-code/

**8. Cowork on Pro Plans** | Cowork | Jan 16, 2026
- Pro-tier expansion of the Jan 12 launch.
- Source: https://support.claude.com/en/articles/12138966-release-notes

**9. Cowork Plugins + Private Marketplace** | Cowork | Feb 24, 2026
- Plugin ecosystem with admin-controlled private marketplaces, structured slash-command forms, per-user provisioning, auto-install. Private GitHub repos as plugin sources (beta).
- Plans: Team + Enterprise for admin controls
- For the business leader: you can now deploy pre-built, department-specific AI workflows to your entire team — not a DIY project, an org-wide capability.

**10. Pre-Built Department Plugins** | Cowork | Feb 24, 2026
- HR, Design, Engineering, Operations, Brand Voice (Tribe AI), Financial Analysis, Investment Banking, Equity Research, Private Equity, Wealth Management. Plus third-party: Slack by Salesforce, LSEG, S&P Global, Apollo, Common Room.
- For the business leader: these replace junior-analyst prep work (comps, memos, Q1-vs-Q2 reports). Hidden gem for CFOs and ops leads.
- Source: https://claude.com/blog/cowork-plugins-across-enterprise

**11. Enterprise Connectors (13 new)** | Cowork | Feb 24, 2026
- Google Workspace (Calendar, Drive, Gmail), Docusign, Apollo, Clay, Outreach, Similarweb, MSCI, LegalZoom, FactSet, WordPress, Harvey, and Slack.
- For the business leader: Cowork can now read/act across your actual work stack — no more copy-paste from Gmail to Claude.

**12. Scheduled Tasks** | Cowork | Feb 25, 2026
- `/schedule` slash command creates recurring or on-demand tasks with access to connectors, skills, and plugins.
- For the business leader: daily 7am briefing on Slack+email+calendar, weekly competitor scans, Monday team status roll-ups — fully autonomous.

**13. Dispatch (phone-to-desktop)** | Cowork | March 2026
- Send instructions to Cowork from your phone while your Mac executes. One phone conversation can run multiple parallel desktop sessions.
- For the business leader: dictate from the Uber, work happens on your laptop. Closes the "I had an idea but wasn't at my desk" gap.

**14. Persistent Thread in Cowork (cross-device)** | Cowork | Mar 17, 2026
- Single persistent agent thread that follows you across devices.
- Plans: Pro, Max

**15. Computer Use (research preview)** | Cowork | Mar 23, 2026
- Claude can click, scroll, navigate apps and web pages autonomously. 72.5% on OSWorld benchmark.
- Plans: Pro + Max as research preview
- For the business leader: handles tasks trapped inside legacy apps that have no API — SAP, old CRM, internal tools.
- Source: https://siliconangle.com/2026/03/23/anthropics-claude-gets-computer-use-capabilities-preview/

**16. Cowork Projects (local)** | Cowork | March 2026
- Projects moved inside Cowork. Persistent memory across sessions, custom instructions, dedicated folders, scheduled tasks attached.
- Limitation: local to your machine — not shareable with teammates.

**17. Claude for PowerPoint** | Cowork/Office | Feb 5, 2026 (research preview)
- Reads your existing templates (layouts, fonts, colors, masters) and generates/edits slides preserving formatting.
- Source: https://marketplace.microsoft.com/en-us/product/wa200010001

**18. Claude for Excel (native add-in)** | Cowork/Office | Feb 5, 2026 (improved)
- Native pivot table editing, complex formula generation, chart-building, financial modeling with cell-level explanations.

**19. Claude for Office + Shared Context** | Cowork/Office | Mar 11, 2026
- Cross-app shared context: analyze in Excel, ask Claude to build slides in PowerPoint, draft the memo in Word — Claude remembers the full conversation and data across all three.
- Plans: Pro ($20/mo), Teams, Enterprise, limited Free tier.
- For the business leader: this is the killer feature. The analyst-to-deck pipeline used to be hours of manual re-work. Now it's one conversation.

**20. Claude for Word Add-in** | Cowork/Office | Apr 13, 2026
- Completes the Office suite. Full Word + Excel + PowerPoint native support.
- Source: https://www.financialcontent.com/article/abnewswire-2026-4-13-anthropic-rolls-out-claude-for-word-add-in

**21. Cowork General Availability (Windows)** | Cowork | Apr 9, 2026
- Out of research preview, GA on both macOS and Windows. Analytics API, OpenTelemetry support, role-based access controls for admins.
- For the business leader: the moment it's safe to standardize on. Ops teams can now buy seats confidently.
- Source: https://9to5mac.com/2026/04/09/anthropic-scales-up-with-enterprise-features-for-claude-cowork-and-managed-agents/

---

### CLAUDE CODE (terminal) — 9 shipments

**22. Claude Code on Team Plan** | Code | Jan 16, 2026
- Claude Code bundled into standard Team seats (previously Max-only).

**23. Skills (unified with slash commands)** | Code | evolved through early 2026
- `.claude/skills/` folders with `/slash-command` interface each. A skill is a folder: scripts, assets, data, instructions.
- For the builder: package and reuse workflows (your own brand voice, test patterns, common fixes) as Skills.
- Source: https://code.claude.com/docs/en/skills

**24. Hooks** | Code | ongoing
- Shell commands that run before/after Claude Code actions (auto-run Prettier after edits, type-check before accepting changes, block compaction via `PreCompact`).
- For the builder: deterministic guardrails around a non-deterministic agent.

**25. Channels (Telegram / Discord / iMessage)** | Code | Mar 20, 2026
- MCP server bridges your local Claude Code session to messaging platforms. Send commands from your phone, your Mac executes.
- Limitation: the local session must stay running. Closing the terminal kills it.
- For the builder: ship code from a café, airport, or bed. Without opening a laptop.
- Source: https://code.claude.com/docs/en/channels

**26. Agent Teams (parallel agents)** | Code | 2026
- Up to 10 parallel Claude Code sessions coordinated by a team lead. Each teammate runs in its own context window and can message peers. Experimental — enable via `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS`.
- For the builder: research + review + debug scenarios where parallelism beats sequence.
- Source: https://code.claude.com/docs/en/agent-teams

**27. `/ultraplan` command** | Code | April 2026 (research preview, v2.1.91+)
- Offloads planning to a cloud-based Claude Code session while you keep working locally. Returns a detailed implementation plan.
- For the builder: "think while I keep shipping" — async planning without blocking your current work.
- Source: https://code.claude.com/docs/en/ultraplan

**28. Auto Mode** | Code | Mar 24, 2026 (research preview)
- Claude makes permission decisions automatically, with monitoring safeguards. Reduces "approve each action" fatigue.
- Plans: Team first, Enterprise + API rolling out
- Source: https://claude.com/blog/auto-mode

**29. Voice Mode** | Code | 2026
- Voice input in 20 languages. Speak the requirements, Claude writes the code.
- For the builder: hands-free coding; accessibility; pair-programming feel.

**30. Routines** | Code | Apr 14, 2026 (research preview)
- Scheduled/triggered automations that run on Claude Code's web infrastructure. Your Mac doesn't need to be on. Access to repos and connectors included.
- For the builder: nightly repo hygiene, scheduled API workflows, GitHub event-triggered agents.
- Source: https://9to5mac.com/2026/04/14/anthropic-adds-repeatable-routines-feature-to-claude-code-heres-how-it-works/

**31. `/powerup` interactive lessons** | Code | v2.1.90
- In-terminal interactive lessons and challenges. Skill progression inside the tool itself.

**32. Redesigned Claude Code Desktop (parallel agents)** | Code | Apr 14, 2026
- UI redesign centered around running and monitoring parallel agent sessions.
- Source: https://claude.com/blog

---

### CLAUDE.AI (web + mobile) — 7 shipments

**33. Memory (all tiers, including Free)** | Claude.ai | March 2026 (GA rollout)
- Cross-session memory with editable summary in Settings. Incognito chats bypass memory. Export your memory any time.
- For the business leader: Claude stops re-introducing itself to you every session. It remembers your company, your team, your preferred format.

**34. Claude in Chrome (Extension)** | Claude.ai | 2026 Max beta, broader rollout
- Browser-side Claude: uploads screenshots, captures specific screen regions, handles multi-step web workflows, continues working when you switch tabs.
- Plans: Max beta, rolling wider
- Source: https://claude.com/claude-for-chrome

**35. Inline Visuals** | Claude.ai | Mar 12, 2026
- Claude creates native charts, diagrams, and visualizations directly in the chat — no code blocks, no rendering extra steps.
- For the business leader: prototyping dashboards, explaining data in-line, board-ready charts without design tools.

**36. Health & Fitness Mobile Integration** | Claude.ai (iOS/Android) | Jan 12, 2026
- iOS/Android app reads Apple Health/Google Fit metrics for analysis.

**37. Interactive Apps on Mobile** | Claude.ai | Mar 25, 2026
- Mobile app renders fully interactive Claude-built apps with visual UI. Previously desktop-only.

**38. HIPAA-Ready Enterprise** | Claude.ai | Jan 12, 2026
- PHI processing supported under signed BAA.

**39. Self-Serve Enterprise Plans** | Enterprise | Feb 12, 2026
- Organizations can buy Enterprise directly online without engaging sales.

---

### API + PLATFORM (9 shipments)

**40. Analytics API** | API | Feb 13, 2026
- Programmatic usage/engagement data aggregated per org daily.

**41. Compliance API (audit logs)** | API | Mar 30, 2026
- Structured admin + resource audit logs (member adds, API key creation, entity permission changes, file/skill creates + deletes + downloads). Does NOT capture prompts/completions.
- For the business leader: the piece your CISO has been waiting for. SOC 2 / ISO 27001 evidence trail.
- Source: https://gadgetbond.com/anthropic-claude-platform-compliance-api-programmatic-audit-access/

**42. Agent SDK (renamed from Claude Code SDK)** | API | 2026
- The same tools, agent loop, and context management that power Claude Code — programmable in Python and TypeScript.
- For the builder: build Claude Code-like agents for your own product in a weekend.
- Source: https://platform.claude.com/docs/en/agent-sdk/overview

**43. Claude Managed Agents** | API | Apr 8, 2026 (public beta)
- Hosted infrastructure to deploy and run autonomous agents. Sandboxed code execution, checkpointing, credential management, scoped permissions, E2E tracing, SSE streaming. Header: `managed-agents-2026-04-01`.
- Pricing: $0.08 per session-hour + standard Claude token pricing.
- Early adopters: Notion, Rakuten, Sentry, Asana.
- For the builder: skip the Kubernetes, the agent loops, the sandboxing. Ship the agent logic.
- Source: https://platform.claude.com/docs/en/managed-agents/overview

**44. Prompt Caching (refined tiers)** | API | ongoing
- 5-minute and 1-hour cache durations. Cache hit = 10% of standard input cost. 1.25x write premium (5-min), 2x (1-hour). Pays off after 1 read (5-min) or 2 reads (1-hour). Combinable with Batch API 50% discount.
- For the builder: stop paying 40-100x for context you're sending repeatedly.

**45. Batch API** | API | ongoing
- Async processing of large request volumes at 50% input/output discount. Combinable with prompt caching.

**46. Free Claude Max for OSS Maintainers** | API/Max | Feb 27, 2026
- 6 months of $200/month Claude Max free to maintainers of 5,000+ GitHub-star or 1M+ NPM-download projects.

**47. Claude Code Security (vulnerability scanner)** | API | Feb 20, 2026
- Reasoning-based vulnerability scanning. Found 500+ zero-days in open-source production code; CTF-competitive.
- For the business leader: the underpinning of Project Glasswing — "Claude, audit our repo."

---

### ECOSYSTEM / META (Jan-Apr 2026 context)

**48. Partner Network +$100M investment** | Ecosystem | Mar 12, 2026
- Massive expansion of partners and integrations. Accelerates the long tail of Cowork plugins and connectors.

**49. Anthropic Institute** | Org | Mar 11, 2026
- New organizational entity for safety + policy research.

**50. Project Glasswing (critical software security)** | Security | Apr 7, 2026
- Claude Mythos Preview in the hands of 50+ launch partners (AWS, Apple, Broadcom, Cisco, CrowdStrike, Google, JPMorganChase, Linux Foundation, Microsoft, NVIDIA, Palo Alto). Already found thousands of zero-days.
- Source: https://www.anthropic.com/project/glasswing

**51. MCP Registry (Agentic AI Foundation)** | Ecosystem | donated Dec 2025, Registry live 2026
- Community-driven registry of MCP servers. 97M monthly SDK downloads by Dec 2025. 10,000+ active MCP servers. MCP now stewarded by the Linux Foundation's Agentic AI Foundation (co-founded with Anthropic, Block, OpenAI).
- For the business leader: every serious app you use will soon expose an MCP server. You're not "using Claude" — you're assembling a network of capabilities Claude can reach.

---

## PART 2 — Reader-Type Cheat Sheets

### A. Camila (Director/VP/CXO at medium-large LATAM company) — "I want ROI"
Top 8 features that turn Claude into a line-item on the P&L, not a toy:

1. **Claude for Office + Shared Context** (#19) — Excel → PowerPoint → Word with persistent context. Removes the analyst-to-deck tax.
2. **Claude Cowork Enterprise Plugins** (#10) — Pre-built Finance / HR / Ops plugins. The equivalent of hiring a specialized firm, on demand.
3. **Connectors (Google Workspace, Slack, Docusign, FactSet, Harvey)** (#11) — Claude reads/acts across your real stack, not just what you paste into it.
4. **Scheduled Tasks** (#12) — Daily briefings, weekly reports, competitor scans — autonomous.
5. **Compliance API** (#41) — The SOC 2 / ISO 27001 evidence your CISO needs before enterprise rollout.
6. **Claude Cowork GA on Windows** (#21) — Your IT team can finally deploy to the whole org.
7. **Memory** (#33) — Stop re-explaining your company to Claude every session.
8. **Claude Opus 4.6 with 1M context** (#1 + #4) — Drop the entire board pack, deal room, or legal corpus into one prompt.

### B. Andrés (profitable founder, $300K+/year solo or small team) — "I want leverage"
Top 8 features for punching above your weight:

1. **Claude Cowork + Scheduled Tasks + Dispatch** (#7, #12, #13) — Runs your operating cadence while you sleep.
2. **Agent Teams (10 parallel)** (#26) — Your 1-person eng team suddenly has a squad.
3. **`/ultraplan`** (#27) — Async planning. You ship while Claude plans the next thing.
4. **Routines** (#30) — GitHub, email, repo triggers → agent actions, 24/7.
5. **Claude Managed Agents** (#43) — Productize agent logic without building agent infrastructure.
6. **Agent SDK** (#42) — Ship Claude-Code-level capabilities inside your own product.
7. **Channels (Telegram/Discord)** (#25) — Run your company from your phone, literally.
8. **Prompt Caching + Batch API** (#44 + #45) — 50-90% cost reduction when usage scales.

### C. Valentina (ambitious professional, "I feel behind") — "I want to stop feeling behind"
Top 8 features for going from anxious observer to fluent user:

1. **Claude.ai Memory (free tier)** (#33) — Start here. Free. Claude learns you over weeks.
2. **Claude for Excel + PowerPoint** (#18 + #17) — The highest-leverage upgrade to work most LATAM professionals already do.
3. **Claude in Chrome** (#34) — Captures a screenshot, reads a page, fills a form. Skill floor = tiny.
4. **Voice Mode (via Claude Code or mobile)** (#29) — Speaking to Claude in Spanish lowers the barrier.
5. **Inline Visuals** (#35) — Turn every "I have this data" into a chart in seconds.
6. **Claude Cowork (Pro plan)** (#7) — One tier up; the true "AI assistant on my Mac" experience.
7. **Skills (pre-built from Anthropic)** (#23) — Use plug-and-play Skills; don't build from scratch.
8. **Interactive apps on mobile** (#37) — Claude builds tiny apps for you on your phone.

---

## PART 3 — "Stop doing X, start doing Y" (mental model shifts)

| Stop doing ❌ | Start doing ✅ |
|---|---|
| Copy-paste from Gmail into Claude | Use Connectors (#11). Claude reads your inbox with permission. |
| Opening Claude, re-explaining your company every time | Turn on Memory (#33). Review/edit the summary monthly. |
| Chunking documents to fit in context | Use 1M context (#4) at standard pricing. Drop the whole thing in. |
| Running one agent at a time, sequentially | Run Agent Teams (#26) or Dispatch (#13) in parallel. |
| Manually running the same prompt every Monday | Schedule it (#12 for Cowork, #30 Routines for Code). |
| Turning Claude on only when you're at your desk | Channels on Telegram/Discord (#25); Dispatch from your phone (#13). |
| Using Claude as a chatbot that answers questions | Use Claude as an agent that does the work, then reports. |
| Uploading a spreadsheet to summarize it | Use Claude for Excel (#18) — it edits the file in place. |
| Screenshotting and describing what you see | Claude in Chrome (#34) captures and reads directly. |
| Building your own agent sandbox + auth + state | Use Claude Managed Agents (#43). Ship the logic, skip the infra. |
| "Should I use Opus?" for every task | Default to Sonnet 4.6 (#2). Upgrade to Opus only for high-stakes reasoning. |
| Paying Opus premium for repetitive prompts | Use Prompt Caching (#44). 10% cost on repeated context. |
| Testing Claude only in Anthropic's products | Claude runs in Cursor, Zed, GitHub Copilot, Vercel AI Gateway, Replit. Pick your workflow. |

---

## PART 4 — 60-Minute Setup Priority Order

For a reader who opens this guide, commits 60 minutes, and wants maximum impact by tonight:

**Minute 0–5: Pick the right plan**
- If you only want Claude.ai + web: **Pro ($20/mo)** — enough to test.
- If you want Cowork on your desktop: **Pro** is the floor; **Max** unlocks priority + higher limits.
- If you want Claude for Office: already in Pro.
- If you want Agent Teams, `/ultraplan`, Channels: install Claude Code (free CLI; pulls your plan quota).

**Minute 5–15: Turn on Memory**
- Claude.ai → Settings → Memory. Add a starter prompt: "I am [role] at [company]. We do [what]. My 3 current priorities are X, Y, Z. Reply to me in [Spanish/English] unless I switch."

**Minute 15–25: Install the right connectors**
- Google Workspace (Calendar + Drive + Gmail) for 90% of knowledge-worker ROI.
- Add Slack if your team uses it.
- Add DocuSign if you sign things regularly.

**Minute 25–40: Install Claude for Office add-ins**
- Microsoft AppSource → "Claude by Anthropic" → Excel, PowerPoint, Word.
- Open your last important spreadsheet, ask: "Summarize this for a VP and build me a 3-slide deck from the top 3 insights."

**Minute 40–50: Install Claude Cowork**
- Desktop app → enable Cowork → pick 2 local folders Claude can read.
- First task: "Organize this folder by topic and create a README of what's inside."
- Create 1 Scheduled Task: "Every morning at 8am, summarize my unread Gmail and top 3 Slack channels into a Notion page."

**Minute 50–60: Install Claude Code (if you build anything)**
- `npm install -g @anthropic-ai/claude-code` → `claude` in your project directory.
- Try: `/ultraplan` on a small refactor.
- Add Channels: connect Telegram bot. Send it a message from your phone to verify.

**Bonus (next 60 minutes if you're still energized):**
- Browse the Cowork Plugin Marketplace. Install 2 department plugins relevant to you.
- Install the Chrome extension.
- Set up Prompt Caching in any API code you run.

---

## PART 5 — What's NOT in Claude (yet) — Honest Limitations

Critical for Irina's "no fluff" brand. A serious user needs to know these.

1. **No native image or video generation in Claude.** Claude analyzes images, does not generate them. For AI images/video use Midjourney, DALL·E, Runway, Veo. Claude can orchestrate them via MCP but does not create them.

2. **No multimodal voice output in Claude.ai.** Voice input exists in Claude Code (#29) and mobile. Voice *output* (ElevenLabs-style Claude-speaking) is not a first-class feature as of April 2026.

3. **Cowork Projects do not sync across team members.** Projects (#16) are local to your machine. If you want shared agent state across a team, you need Claude Managed Agents (#43) or custom infra.

4. **No Anthropic-hosted music or audio generation.** Period.

5. **Compliance API does not log prompts/completions** (#41). It logs *system and resource activity* — member adds, permission changes, API key creation. If you need prompt-level audit you still need a third-party gateway (Cloudflare AI Gateway, Portkey, custom proxy).

6. **Claude Code Channels sessions die when the terminal closes** (#25). It is not a cloud-hosted coding environment — your Mac is still the execution surface.

7. **No built-in vector store or persistent RAG infrastructure.** Claude's memory (#33) is summary-based, not retrieval-augmented. For serious RAG you still build your own store (Pinecone, Weaviate, Turbopuffer) and feed context into prompts.

8. **Managed Agents is still public beta** (#43). Production SLAs, regional residency, and GA pricing are not locked.

9. **Fast Mode pricing is hostile** (#3). 6x standard Opus rate makes it a niche latency tool, not a daily driver.

10. **Claude Haiku 4.5 lacks the prompt-injection protections of Sonnet/Opus.** Don't give Haiku agents sensitive tools (your email, your CRM, payment APIs).

11. **No first-party Claude-for-Google-Workspace native deep integration** the way Claude for Office exists. Connectors read Workspace (#11), but there's no Claude-inside-Docs the way Gemini lives inside Docs.

12. **Computer Use (#15) is still research preview.** Expect failures, dead clicks, and the occasional "Claude clicked the wrong button for 15 minutes." Supervise.

13. **Model deprecations are real.** Opus 4 and 4.1 were removed from the selector Jan 16, 2026. Plan for 6-12 month model lifespans.

14. **Spanish / LATAM-specific voice and context**. Claude handles Spanish well, but there is no region-specific Claude "LATAM edition" with pre-loaded regional business context. Irina's audience has to bring that context.

---

## PART 6 — Accuracy Warnings / Things to Verify Before Publishing

- **Opus 4.6 output token limit**: 128K cited in multiple sources (WaveSpeed, blog). Verify against `platform.claude.com/docs` before shipping the number. Some sources cite 64K.
- **Exact Free-tier access** to Memory and other features is rolling out incrementally. "Free users have Memory" was confirmed in spring 2026 but check the specific plan page before writing "free tier includes X."
- **Managed Agents session-hour price ($0.08)**: confirmed in multiple 3rd-party sources, but Anthropic's own pricing page may have changed for GA.
- **Agent Teams "10 parallel"**: repeated often but is user-configurable. Don't state "10" as a hard limit.
- **Claude Mythos Preview is NOT public.** If using in content, frame as restricted research preview. Never imply a reader can try it.
- **Fast Mode 2.5x faster, 6x price**: confirmed. Promotional discount ended Feb 16.
- **Channels: only Telegram/Discord/iMessage as of research date**. If more platforms shipped after Apr 14, update.
- **Claude for Word launched Apr 13, 2026** — 1 day before this research date. Very fresh; some 3rd-party details still being written.
- **Cowork on Windows GA**: Apr 9, 2026. Before this date it was macOS-only. Don't write "always available on Windows."
- **Project Glasswing partners** — verify the list before quoting individual company names; I have 12 launch partners but press releases sometimes restate slightly different lists.
- **Prompt cache math**: 5-minute cache = 1.25x write, 1-hour cache = 2x write. Verify with current API docs before publishing exact economics to an enterprise audience.
- **Claude Cowork Pro expansion date**: Jan 16. Before that it was Max-only (Jan 12 launch).
- **MCP numbers (97M SDK downloads, 10K+ servers)**: from Dec 2025 Anthropic data. Likely higher by now, but don't update unless you find fresher numbers.

---

## PART 7 — Structural Narrative for the Lead Magnet

Three narrative arcs for packaging this:

**Arc 1: "From Chat to Agent" (best for general audience)**
Jan → Feb → Mar → Apr story. Each month, Claude gets more agentic. Jan: Cowork arrives. Feb: Cowork gets plugged into real stacks (connectors + plugins). March: memory + computer use + scheduled cadence. April: GA + hosted managed agents. By April, "using Claude" means orchestrating agents, not chatting.

**Arc 2: "The Three Surfaces" (best for builders)**
Claude.ai (chat surface) + Cowork (desktop surface) + Claude Code (developer surface). Each surface gained power in parallel. Readers should pick the surface for their work and master it.

**Arc 3: "Leverage for LATAM" (best for Irina's brand)**
The gap between global AI users and LATAM knowledge workers. Every feature lands with a "cómo usarlo desde Bogotá / CDMX / Santiago" angle. This differentiates the lead magnet from 50 English-language guides.

---

## Sources (primary and reference)

- Anthropic News: https://www.anthropic.com/news
- Claude Blog: https://claude.com/blog
- Claude API Docs: https://platform.claude.com/docs/en/release-notes/overview
- Claude Help Center Release Notes: https://support.claude.com/en/articles/12138966-release-notes
- Claude Code Docs: https://code.claude.com/docs/en
- Simon Willison (anthropic tag): https://simonwillison.net/tags/anthropic/
- What's new in Claude 4.6: https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-6
- 1M Context GA: https://claude.com/blog/1m-context-ga
- Cowork + Plugins announcement: https://claude.com/blog/cowork-plugins-across-enterprise
- Managed Agents: https://platform.claude.com/docs/en/managed-agents/overview
- Project Glasswing: https://www.anthropic.com/project/glasswing
- Claude for Chrome: https://claude.com/claude-for-chrome
- Claude for Excel (marketplace): https://marketplace.microsoft.com/en-us/product/saas/wa200009404
- Claude for PowerPoint (marketplace): https://marketplace.microsoft.com/en-us/product/wa200010001
- Channels: https://code.claude.com/docs/en/channels
- Agent Teams: https://code.claude.com/docs/en/agent-teams
- Ultraplan: https://code.claude.com/docs/en/ultraplan
- Fast Mode: https://platform.claude.com/docs/en/build-with-claude/fast-mode
- Compliance API coverage: https://gadgetbond.com/anthropic-claude-platform-compliance-api-programmatic-audit-access/
- Agent SDK: https://platform.claude.com/docs/en/agent-sdk/overview
- Prompt Caching: https://platform.claude.com/docs/en/build-with-claude/prompt-caching
- Haiku 4.5 (pre-period context): https://www.anthropic.com/news/claude-haiku-4-5

---

*End of research document. Next step: narrow the feature list to a publishable structure for the Spanish lead magnet. Recommended cut: 20-25 features for the main body, the rest as an appendix or linked reference.*
