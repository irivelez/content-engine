# Lead Magnet Verification Report — Claude 2026 Features
**Date verified:** April 14, 2026
**Verifier:** Claude (against PRIMARY Anthropic sources only)
**Standard:** anthropic.com, claude.com, platform.claude.com, code.claude.com, support.claude.com

---

## Summary

| Status | Count |
|--------|-------|
| CONFIRMED | 11 |
| WRONG | 2 |
| UNCLEAR | 2 |

**Total claims verified:** 15

---

## Claim-by-claim verification

### 1. Claude Opus 4.6 max output tokens — CONFIRMED
- **Research claim:** 128K max output
- **Primary source:** "Opus 4.6 offers 128k max output tokens" — official "What's new in Claude 4.6" doc.
- The models overview table also lists "Max output: 128k tokens" for Opus 4.6.
- **Source URLs:**
  - https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-6
  - https://platform.claude.com/docs/en/about-claude/models/overview

### 2. Claude Opus 4.6 context window — CONFIRMED
- **Research claim:** 1M tokens
- **Primary source:** "Claude Opus 4.6 and Sonnet 4.6 both support a 1M token context window"
- Models overview confirms "Context window: 1M tokens" for Opus 4.6.
- **Source URLs:**
  - https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-6
  - https://platform.claude.com/docs/en/about-claude/models/overview

### 3. Claude Sonnet 4.6 specs — CONFIRMED (1M context, 64K output)
- **Research claim:** 1M context, 64K output
- **Primary source:** "Sonnet 4.6 offers 64k max output tokens" + "Claude Opus 4.6 and Sonnet 4.6 both support a 1M token context window"
- Models overview confirms: Context window 1M tokens, Max output 64k tokens for Sonnet 4.6.
- **Source URLs:**
  - https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-6
  - https://platform.claude.com/docs/en/about-claude/models/overview

### 4. 1M context pricing (no premium multiplier after Mar 13, 2026 GA) — CONFIRMED
- **Research claim:** Standard pricing, same per-token as 9K requests after Mar 13, 2026 GA. No premium multiplier.
- **Primary source (pricing doc):** "Opus 4.6 and Sonnet 4.6 include the full 1M token context window at standard pricing. (A 900k-token request is billed at the same per-token rate as a 9k-token request.)"
- **Primary source (release notes):** "March 13, 2026 — The 1M token context window is now generally available for Claude Opus 4.6 and Sonnet 4.6 at standard pricing. Requests over 200k tokens work automatically for these models with no beta header required."
- **Important nuance:** The 1M beta on Sonnet 4.5 and Sonnet 4 is being retired April 30, 2026; those older Sonnet models still carry long-context premium until retirement. Only 4.6 models are at flat standard pricing.
- **Source URLs:**
  - https://platform.claude.com/docs/en/about-claude/pricing (Long context pricing section)
  - https://platform.claude.com/docs/en/release-notes/overview (March 13, 2026)

### 5. Memory on Free tier — CONFIRMED
- **Research claim:** Memory is available on Free tier.
- **Primary source (Plans & Pricing):** The Free plan feature list on claude.com/pricing explicitly lists "Memory across conversations" as a Free-tier feature.
- **Release notes corroboration:** March 2, 2026 release note: "Memory from chat history is now available for all Claude users, including free users."
- **Source URLs:**
  - https://claude.com/pricing
  - https://support.claude.com/en/articles/12138966-release-notes (March 2, 2026 entry)

### 6. Claude Managed Agents pricing — CONFIRMED
- **Research claim:** $0.08 per session-hour + standard token pricing.
- **Primary source:** "Session runtime: $0.08 per session-hour. Metering: `running` status duration."
- Pricing doc confirms tokens billed at standard model rates (no fast-mode, no batch discount, no long-context premium, no data-residency multiplier apply inside Managed Agents).
- Runtime meters only while session is `running` — not `idle`, `rescheduling`, or `terminated`.
- **Source URL:** https://platform.claude.com/docs/en/about-claude/pricing (Claude Managed Agents pricing section)

### 7. Cowork Windows GA date (April 9, 2026) — CONFIRMED
- **Research claim:** April 9, 2026.
- **Primary source (Release Notes):** "April 9, 2026 — Claude Cowork is now generally available on macOS and Windows through the Claude Desktop app."
- The same release also launched: Cowork in Analytics API, usage analytics for Team/Enterprise, OpenTelemetry support, role-based access controls for Enterprise.
- **Source URL:** https://support.claude.com/en/articles/12138966-release-notes

### 8. Claude for Word launch date (April 13, 2026) — WRONG
- **Research claim:** April 13, 2026.
- **Correct answer:** April 10-11, 2026 (third-party press); NO dated announcement found on primary Anthropic sources.
- Primary Anthropic Release Notes contain NO Claude for Word entry. The product page (claude.com/claude-for-word) and support article (support.claude.com/en/articles/14465370) state "currently in beta" with no launch date.
- Anthropic's newsroom for April 2026 shows Project Glasswing (Apr 7) and LTBT board appointment (Apr 14), but NO "Claude for Word" entry.
- Third-party tech press (Digital Trends, TheStreet, Storyboard18, SSBCrack, etc.) consistently reports April 10-11, 2026 as the launch date. One source (FinancialContent abnewswire) is dated April 13, 2026.
- **Recommendation for guide:** Do NOT cite a specific day. Use "launched in beta in April 2026" OR cite the exact claude.com/claude-for-word product URL as the source, stating "currently in beta for Team and Enterprise plans" — which IS verifiable. Avoid specific day attribution since Anthropic has not published one.
- **Source URLs:**
  - https://claude.com/claude-for-word (no date shown; "in beta")
  - https://support.claude.com/en/articles/14465370-use-claude-for-word (no launch date)
  - https://support.claude.com/en/articles/12138966-release-notes (Claude for Word NOT listed)

### 9. Channels platforms (Telegram, Discord, iMessage only) — CONFIRMED
- **Research claim:** Telegram, Discord, iMessage only as of April 14.
- **Primary source (exact quote):** "Telegram, Discord, and iMessage are included in the research preview."
- Also: "You can also build your own channel for systems that don't have a plugin yet" — meaning custom channels are possible via the Channels Reference, but the officially supported plugins are only those 3 (plus `fakechat` as a localhost demo).
- **Source URL:** https://code.claude.com/docs/en/channels

### 10. Agent Teams parallelism (up to 10 parallel, configurable) — WRONG
- **Research claim:** Up to 10 parallel agents (configurable, not hard limit).
- **Correct answer:** There is NO hard limit of 10. The docs explicitly say "There's no hard limit on the number of teammates" and recommend "Start with 3-5 teammates for most workflows."
- The docs give an example where "16 agents" were used to build a C compiler, so Anthropic itself has demonstrated far more than 10.
- Practical constraints cited: (1) token costs scale linearly, (2) coordination overhead grows, (3) diminishing returns.
- **Recommendation for guide:** Correct the claim to: "No hard limit on teammates; Anthropic recommends 3-5 for most workflows, with real-world examples of 16+. Constrained by token cost, not by product setting." Citing 10 as a limit is factually wrong.
- **Source URL:** https://code.claude.com/docs/en/agent-teams

### 11. Cowork on Pro plans (Jan 16, 2026) — CONFIRMED
- **Research claim:** Jan 16, 2026 (initially Max-only on Jan 12).
- **Primary source (Release Notes):** "January 16, 2026 — Cowork is now available to Pro plan users on Claude Desktop (macOS only)."
- The Jan 12 Max-only date is corroborated by multiple third-party mentions but not directly verified on the release notes page I fetched. The Jan 16 Pro date IS verified on primary sources.
- **Source URL:** https://support.claude.com/en/articles/12138966-release-notes

### 12. Compliance API scope (admin/resource audit logs but NOT prompts/completions) — UNCLEAR
- **Research claim:** Logs admin + resource audit logs but NOT prompts/completions.
- **What we actually know from primary sources:**
  - Support article 13015708 states the Compliance API pulls "activity logs, chat data, and file content programmatically through a compliance access key" — meaning it DOES pull chat content, not just admin logs.
  - Separately, audit logs for standard Admin console exports DO exclude chat title/content (only identifiers): "title and content of chats and projects are not available to be exported in audit logs (only their unique identifiers will be exported), however, chat inputs/outputs will be exportable by Primary Owners via data exports."
  - Full Compliance API technical spec requires NDA via Anthropic Trust Center — not publicly verifiable.
- **Conclusion:** The research claim conflates two different mechanisms. **Audit logs (Admin console export)** do NOT contain prompts/completions. **Compliance API** DOES include chat data and file content per Anthropic's support documentation. These are distinct surfaces.
- **Recommendation for guide:** Do NOT claim "Compliance API logs admin + resource audit logs but NOT prompts/completions" — that is misleading. The accurate statement is: "Anthropic's standard audit log export excludes chat prompts/completions (metadata only). The Compliance API (Enterprise, NDA-gated) does include chat data and file content for regulated workflows."
- **Source URLs:**
  - https://support.claude.com/en/articles/13015708-access-the-compliance-api
  - https://support.claude.com/en/articles/9970975-how-to-access-audit-logs
  - https://trust.anthropic.com/ (NDA-gated full spec)

### 13. Fast Mode pricing (2.5x faster, 6x standard Opus pricing) — CONFIRMED
- **Research claim:** 2.5x faster, 6x standard Opus pricing.
- **Primary source (Fast Mode doc):** "Fast mode is up to 2.5x as fast at premium pricing ($30/$150 per MTok). This is the same model running with faster inference (no change to intelligence or capabilities)."
- Pricing page confirms: "Fast mode ... for Claude Opus 4.6 provides significantly faster output at premium pricing (6x standard rates)" — Input $30/MTok, Output $150/MTok.
- Standard Opus 4.6 rates are $5 input / $25 output, so $30/$150 is exactly 6x.
- Important caveats to include in guide: fast mode is Opus 4.6 only; not available with Batch API or Priority Tier; invalidates prompt cache when switching modes.
- **Source URLs:**
  - https://platform.claude.com/docs/en/build-with-claude/fast-mode
  - https://platform.claude.com/docs/en/about-claude/pricing (Fast mode pricing section)

### 14. Routines announcement date (April 14, 2026) — CONFIRMED
- **Research claim:** April 14, 2026 (same day as this research).
- **Primary source (Anthropic blog):** "Today, we're introducing routines in Claude Code in research preview." Announcement dated April 14, 2026.
- Available on Pro, Max, Team, Enterprise plans with Claude Code on the web enabled.
- Note: The platform.claude.com release notes do NOT list Routines (since routines is a Claude Code feature, not a Claude Platform API feature), but the Anthropic blog is a valid primary source.
- **Source URLs:**
  - https://claude.com/blog/introducing-routines-in-claude-code
  - https://code.claude.com/docs/en/routines

### 15. Channels session persistence (terminal must stay open) — CONFIRMED
- **Research claim:** Terminal must stay open; session dies when terminal closes.
- **Primary source (exact quote):** "Events only arrive while the session is open, so for an always-on setup you run Claude in a background process or persistent terminal."
- Also: "The bot can only reply while the channel is active." — confirmed in each of Telegram/Discord/iMessage setup flows.
- **Nuance worth including in guide:** Anthropic's guidance is NOT that sessions catastrophically die, but that events only deliver while the session runs — this is semantically what the research says. Users are pointed to "background process or persistent terminal" for always-on use.
- **Source URL:** https://code.claude.com/docs/en/channels

---

## Red flags to address in the guide

1. **Claim #8 (Claude for Word April 13):** WRONG — do not publish a specific day. Anthropic has not officially dated this launch on primary sources. Use "April 2026, beta for Team/Enterprise" only.

2. **Claim #10 (Agent Teams 10 parallel):** WRONG — there is no "10" limit anywhere in Anthropic's docs. Using this number could be challenged by any reader who checks the source. Correct to "no hard limit; 3-5 recommended" with the 16-agent C-compiler example as support.

3. **Claim #12 (Compliance API scope):** UNCLEAR — the research confuses two different mechanisms. Separate "audit logs (Admin export, metadata only)" from "Compliance API (Enterprise, NDA, includes chat content)". Misstating this around a compliance audience destroys authority instantly.

4. **Minor note for Claim #4 (1M pricing):** CONFIRMED, but add the nuance that the 1M beta on older Sonnet 4.5/Sonnet 4 retires April 30, 2026 — if the guide recommends those older models for long context, it will be outdated within weeks.

5. **Minor note for Claim #11 (Cowork Jan 16):** Pro date confirmed. Jan 12 Max-only date is plausible and widely reported but I did not directly verify it on platform.claude.com. Acceptable to cite, but flag if absolute precision matters.

---

## Claims safe to publish as-is

1, 2, 3, 5, 6, 7, 9, 13, 14, 15 — 10 claims confirmed against primary Anthropic sources with exact quotes and URLs.

Claim 4 safe to publish with the "April 30, 2026 Sonnet 4.5 beta retirement" caveat added.
Claim 11 safe to publish, citing Jan 16 (Pro GA) as the primary-verified date.
