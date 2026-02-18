# Prompting Patterns Reference

> Extracted from Ruben Hassid (800K+ LinkedIn followers). Use these patterns to write cleaner, more effective agent instructions.

---

## The Core Formula

```
[ROLE] + [GOAL] + [SUCCESS DEFINITION] + [METHOD] + [OUTPUT]
```

**Example:**
> "Act as a misinformation detective. Your goal is to debunk or confirm a viral claim, defining success as tracing its origin post, amplification chain (50+ retweets/quotes), and counter-evidence from credible web sources."

---

## 1. Role Definitions (The "Act As" Library)

### Research Roles
| Role | When to Use |
|------|-------------|
| **World-class LinkedIn content strategist and growth analyst** | Analyzing post performance, building playbooks |
| **Expert Content Strategist and Senior Editor for a leading digital publication** | Repurposing content, extracting value from sources |
| **Public opinion researcher** | Gauging polarized views, categorizing sentiment |
| **Misinformation detective** | Verifying claims, tracing origins |
| **Expert market researcher specializing in user pain points from social media** | Finding audience struggles on Reddit/X |
| **Expert product/opportunity researcher** | Extracting pain points before they become trends |

### Writing Roles
| Role | When to Use |
|------|-------------|
| **Specialized Ghostwriter for Thought Leaders on LinkedIn** | Writing carousels, posts for influence |
| **LinkedIn ghostwriter who writes posts that get saved + shared** | Creating viral-worthy content |
| **Content strategist who turns audience problems into viral content ideas** | Transforming research into angles |

### Analysis Roles
| Role | When to Use |
|------|-------------|
| **World-class researcher in front of [audience]** | Summarizing trends for specific audience |

---

## 2. Success Definitions (The "Defining Success As" Library)

Success definitions make expectations measurable. Always include specific numbers or concrete outcomes.

### Research Success
- "...defining success as categorizing 30+ X posts into pro/con/neutral buckets with engagement metrics, backed by web snippets for context"
- "...defining success as tracing its origin post, amplification chain (50+ retweets/quotes), and counter-evidence from credible web sources"

### Content Success
- "Turn the user's uploaded 'best' and 'worst' LinkedIn posts into a repeatable, personalized playbook"
- "Create 5 LinkedIn posts on the new topic... with 1 clear takeaway + 1 framework (steps)"

### Output Success
- "Each slide must provide a specific insight, a lightbulb moment, or a counter-intuitive fact"
- "Target: 50% shorter"
- "Headlines should be scroll-stopping. No bland 'Ultimate Guide' garbage."

---

## 3. Phased Delivery Pattern

Break complex tasks into phases. Deliver Phase 1, then STOP and ask questions.

```
PHASE 1 — Diagnosis (deliver this first, then stop and ask questions)

1) Rapid patterns (max 7 bullets): what winners share, what losers share, 3 do-more, 3 stop.

2) Post audit (for each post, max 10 lines):
   - Winner/Loser verdict + 2–4 reasons tied to specific lines
   - Keep / Change / Remove (bullets)
   - One "biggest lever" to improve it

3) Winner DNA: a short checklist of repeatable ingredients (max 8 items).

PHASE 2 — Execution plan (only after the user answers your questions)

4) Double-down: 6 next-post concepts...
5) Repurpose: pick the top 2 winners...

Collaboration (end PHASE 1 with questions):
Ask 6 targeted questions to tailor PHASE 2...
```

**Key principles:**
- Max constraints on every output ("max 7 bullets", "max 10 lines", "max 8 items")
- Stop points before continuing
- Questions to tailor next phase

---

## 4. Transformation Prompts (Don't Ask X, Ask Y)

These are the most powerful patterns. Use when you need to improve existing content.

### 1. Cut the Fluff
**Don't ask:** "Make this shorter"

**Ask:** "Read [text]. Remove every word that doesn't add meaning. Keep the message, lose the fat. Target: 50% shorter. Output: Clean version + list of what you cut and why. Write like you're charging $10 per word."

---

### 2. Make Me Care
**Don't ask:** "Make this more engaging"

**Ask:** "Take [text] and add emotional weight. Find the human angle. Why should anyone stop scrolling for this? Output: Rewrite + the emotional trigger you used (fear, curiosity, desire, urgency). No drama, just truth that hits."

---

### 3. Explain Like I'm Busy
**Don't ask:** "Simplify this"

**Ask:** "Rewrite [text] so a busy CEO gets it in 10 seconds. One core idea. No setup, no background, no 'in today's world.' Start with what matters. Output: Rewrite + the one sentence someone would remember tomorrow."

---

### 4. Find My Voice
**Don't ask:** "Match my tone"

**Ask:** "Here's how I write [paste 3 samples]. Study my patterns, sentence length, word choice, rhythm, quirks. Now rewrite [text] so it sounds like me, not you. Output: Voice breakdown + rewrite + what you changed to match me."

---

### 5. Make it Bold
**Don't ask:** "Make this stronger"

**Ask:** "This is too soft [text]. Make it bold. Add opinion. Take a stance. Boring is 'tips for productivity.' Better is 'most productivity advice is garbage, here's what works.' Output: Spicier version + the weak phrases you killed."

---

### 6. Fix the Flow
**Don't ask:** "Improve the writing"

**Ask:** "[Paste text] reads choppy. Fix the rhythm. Mix short punchy lines with longer ones. Add transitions that don't feel forced. Output: Smooth version + before/after of your 3 biggest fixes."

---

### 7. One Idea Only
**Don't ask:** "Focus this"

**Ask:** "[Paste text] tries to say too much. Find the single strongest point. Build everything around it. Cut the rest. Output: Focused rewrite + the ideas you removed and why they weakened the piece."

---

### 8. Write for Skimmers
**Don't ask:** "Make this scannable"

**Ask:** "Rewrite [text] for people who won't read every word. Front-load the value. Make the first line earn the second. Structure it so skimming still delivers the point. Output: Skim-friendly version + what you moved and why."

---

### 9. Hook Me in 2 Seconds
**Don't ask:** "Write a better intro"

**Ask:** "Turn [idea/text] into an opening line for [platform]. Make it impossible to scroll past. Use a pattern interrupt, unexpected stat, bold claim, weird question, or personal confession. Output: 5 hook options ranked by stopping power + why each works."

---

## 5. Search & Research Prompts

### Find Reddit Pain Points
```
"Find active subreddits where [YOUR TARGET AUDIENCE] discusses their problems.
Include member count, activity level, and what problems people discuss there.
Focus on communities with real conversations, not just meme dumps."
```

### Deep Reddit Analysis
```
"Act as an expert product/opportunity researcher who extracts actionable pain points and unmet needs from Reddit discussions before they become obvious trends.

Focus on the following subreddits: [r/XXX, r/XXX, r/XXX].

For each subreddit, do the following:
1. Find the top 20 posts from the past 7 days sorted by Hot or Top.
2. For the 5 most engaged posts, read the post content and the top 20 comments.
3. Extract recurring pain points, frustrations, wishes, or "I wish there was a..." statements.
4. Cluster similar complaints into clear themes.

Output format per subreddit:
- Subreddit name
- 3 most promising pain points ranked by frequency/intensity
- For each pain point: 2 direct quotes/examples, estimated severity (low/medium/high), and why this pain point could be an opportunity (product idea, content angle)

At the end, list the top 3 cross-subreddit pain points that appear to be gaining momentum."
```

### Find Viral Tweets
```
"Search deeply, and find the last 5 viral tweets from @[account], and explain their theme and why they went viral. Over a million impressions is considered viral."
```

### Gauge Public Opinion
```
"Act as a public opinion researcher. Your goal is to gauge polarized views on a hot-button issue, defining success as categorizing 30+ X posts into pro/con/neutral buckets with engagement metrics, backed by web snippets for context."
```

### Find Trends (with Sources)
```
"Act like a world-class researcher in front of [audience]. Summarize the latest 2025-2026 trends on [topic] in bullet points: key stats, 3 emerging tools, 2 risks, 1 opportunity for consultants. Sources only from reputable sites (McKinsey, Gartner, a16z)."
```

---

## 6. Content Creation Prompts

### Viral Hook Generator
```
"These are my most viral hooks (2 lines in one hook) on LinkedIn, ever. Let's try to recreate it but differently in the new topic (new topic: [your caption draft]):

///Hook 1 [VIRAL HOOK]
///Hook 2 [VIRAL HOOK]
///Hook 3 [VIRAL HOOK]
///Hook 4 [VIRAL HOOK]"
```

### LinkedIn Post from Pain Point
```
"Act like a LinkedIn ghostwriter who writes posts that get saved + shared.

Goal: Create 5 LinkedIn posts on the new topic.

Use my 4 example LinkedIn posts below that are the most viral ones on LinkedIn, ever. You must match their structure, pacing, formatting (short lines + whitespace + listicle), and "voice" — but the ideas, wording, and hooks must be NEW.

Rules:
- Each post starts with a strong 2-line hook.
- Keep it skimmable
- With 1 clear takeaway + 1 framework (steps)
- End with a CTA that "Repost for others to ......."
- No fluff, no generic advice, no repeated angles across posts.
- Do NOT copy phrases or lines from the examples.

Here are the 4 example posts (study them first):

///Example Post 1
[PASTE POST]
///Example Post 2
[PASTE POST]
///Example Post 3
[PASTE POST]
///Example Post 4
[PASTE POST]

Now write 5 new posts about: [TOPIC]"
```

### Content Ideas from Reddit Problem
```
"You're a content strategist who turns audience problems into viral content ideas.

Here's a real problem from Reddit:

POST TITLE: [paste title]
POST DESCRIPTION: [paste description]
TOP COMMENTS: [paste 3-5 comments]

Generate 15 content ideas from this:

1. 5 "How to" articles (tactical, step-by-step)
2. 5 listicles (tools, mistakes, tips, examples)
3. 3 contrarian takes (challenge conventional advice)
4. 2 frameworks (systematic approaches with memorable names)

For each idea give me:
- Headline (make it specific, not generic)
- Hook (first line that pulls readers in)
- Angle (what makes this different from existing content)

Make headlines scroll-stopping. No bland "Ultimate Guide" garbage."
```

### Carousel Creator
```
"You are a specialized Ghostwriter for Thought Leaders on LinkedIn. Your task is to turn a specific angle into a high-retention, 10-slide carousel outline.

The Input Angle: [WHAT YOU CHOSE]
The Source Material: [SOURCE]

Your Formatting Rules:

No Fluff: Every slide must provide a specific insight, a lightbulb moment, or a counter-intuitive fact.

The Slide Breakdown:
Slide 1: The Hook. A polarizing or curiosity-gap headline that stops the scroll.
Slide 2: The Stakes. Why does this matter right now? What is the cost of inaction?
Slide 3: The Insight. The core thesis or the Golden Quote from the video.
Slides 4-8: The Value Meat. Break down the framework or facts into one aha moment per slide. Use specific data or steps from the video.
Slide 9: The Summary. A TL;DR checklist for readers to save or screenshot.
Slide 10: The CTA. A low-friction question to spark comments.

Structure each slide as:
[Slide #] [Slide headline]
[Text Content]"
```

---

## 7. Extraction & Repurposing

### Extract Value from Video
```
"Act like an expert Content Strategist and Senior Editor for a leading digital publication. Your goal is to repurpose video content into high-value written pieces that drive engagement.

Part 1: The Extraction
First, provide a comprehensive breakdown of the video content. Do not just summarize; extract the "meat" of the content using the following structure:

Core Thesis: What is the single most important argument or lesson in one sentence?
Key Data/Facts: List specific numbers, case studies, or hard facts mentioned.
Golden Quotes: Extract 3–5 verbatim quotes that are punchy or profound.
The Framework: If the speaker uses a specific step-by-step process or mental model, outline it clearly.

Part 2: The Angles
Based only on the extraction above, pitch 5 narrow, specific article angles.
Constraint: Avoid generic titles like "Summary of [Video Name]."
Requirement: Each angle must take a specific slice of the content and expand on it.
Format: Provide a catchy headline plus a one-sentence premise for each angle.

Example of a "Narrow Angle"
Bad: How to do Sales.
Good: The "3-Call Close" Technique: Why Most Salespeople Fail in the Follow-up."
```

---

## 8. The 5 Prompting Principles

From Ruben's playbook:

### 1. Goals > Instructions
Tell AI what you're trying to achieve, not how to achieve it.

**Bad:** "First, analyze the data. Then, identify patterns. Finally, write conclusions."

**Good:** "I need an analysis where stakeholders can understand the key patterns without a technical background."

### 2. Constraints > Rules
Specify boundaries and priorities. Let the model choose execution.

**Bad:** "Follow these rules: 1) Keep it brief, 2) Use simple language, 3) No jargon."

**Good:** "This is for someone encountering this topic for the first time, so focus on clarity and practical examples."

### 3. Examples > Descriptions
Show what you want instead of describing it.

**Bad:** "Make it accurate."

**Good:** "The facts should be verifiable - something a reader could fact-check in 2 minutes online using this website [link]."

### 4. Put Important Info at Start & End
AI literally forgets the middle.

### 5. Less is More
Every extra token exhausts AI's attention.

---

## Quick Reference: Output Structures

### For Post Audits
```
- Winner/Loser verdict + 2–4 reasons tied to specific lines
- Keep / Change / Remove (bullets)
- One "biggest lever" to improve it
```

### For Content Ideas
```
- Headline (make it specific, not generic)
- Hook (first line that pulls readers in)
- Angle (what makes this different from existing content)
```

### For Rewrites
```
- Clean version
- List of what you cut and why
```

### For Voice Matching
```
- Voice breakdown
- Rewrite
- What you changed to match me
```

### For Carousel Slides
```
[Slide #] [Slide headline]
[Text Content]
```

---

## How to Use This File

1. **Pick a role** from Section 1 that matches your task
2. **Add a success definition** from Section 2 (or write your own with specific numbers)
3. **Use transformation prompts** from Section 4 when improving existing content
4. **Copy search prompts** from Section 5 when doing research
5. **Follow the 5 principles** from Section 8 always

**Remember:** Short, specific, outcome-focused beats long and detailed.
