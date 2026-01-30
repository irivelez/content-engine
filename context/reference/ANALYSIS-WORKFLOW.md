# Creator Analysis Workflow

> Quick guide for systematically analyzing top creators and extracting their proven techniques

---

## Step-by-Step Process

### 1. Choose Your Creator
Pick a creator who:
- Has proven high engagement in your niche or adjacent niche
- Excels at something you want to improve (hooks, storytelling, structure)
- Has a style that could translate to your audience

**Record**:
- Name
- Niche/topics
- What they excel at
- Why you're studying them

---

### 2. Collect Their Top Posts

Gather **5-10 of their highest-performing posts**:
- Copy full post text
- Note engagement metrics if available
- Save any visual descriptions
- Note what caught your attention

**Create a collection file**: `research/creator-[name]-posts.md`

```markdown
# [Creator Name] - Post Collection

## Post 1: [Topic/Title]
**Engagement**: [metrics if available]
**Why I saved this**: [your note]

**Full text**:
[paste complete post]

**Visual**: [describe the image/carousel]

---

## Post 2: [Topic/Title]
[repeat format]
```

---

### 3. Analyze Each Post

For each post, use the **Technique Analyzer agent**:

**Prompt**:
```
Read agents/technique-analyzer.md and analyze this post from [Creator Name]:

[paste post]

Focus on:
- Hook structure and why it works
- Content structure and flow
- Engagement mechanics
- Specific techniques I could adapt for Spanish-speaking tech audience
- What aligns or conflicts with my voice (context/voice/voice-and-style.md)
```

**Save analysis** to: `research/creator-[name]-analysis-[post-number].md`

---

### 4. Identify Patterns Across Posts

After analyzing 5-10 posts, look for:
- **Repeated hook structures** (do they always start with questions? stories? stats?)
- **Consistent content patterns** (listicle? narrative? tutorial?)
- **Signature phrases or transitions** (unique to this creator)
- **Engagement tactics** (how do they drive comments?)
- **Visual strategies** (carousels? simple images? text screenshots?)

---

### 5. Create Creator Profile

Use the template in `README.md` to create: `context/creators/creator-[number]-[name].md`

Fill out:
1. **Overview** (who they are, why studying them)
2. **Signature Style** (voice characteristics, content mix)
3. **Proven Techniques** (5-10 techniques with examples)
4. **Top Performing Posts** (3-5 with full breakdown)
5. **Pattern Summary** (their formula)
6. **Integration Guide** (how to adapt to YOUR voice)

**Critical sections**:
- ✅ **What Translates to Irina's Voice** - techniques you can use
- ❌ **What Doesn't Fit** - techniques that conflict with your brand
- **Integration Guide** - specific scenarios when to use their techniques

---

### 6. Extract Adaptable Techniques

From each creator analysis, extract 3-5 specific techniques to add to:
`context/techniques/creator-techniques.md`

**Format**:
```markdown
### [Technique Name] - from [Creator Name]

**What it is**: [Brief description]

**Why it works**: [Psychology/engagement reason]

**Example from [Creator]**:
[Quote their usage]

**How to adapt for Irina**:
- [Specific adaptation 1]
- [Specific adaptation 2]

**When to use**:
- [Scenario 1]
- [Scenario 2]

**Voice alignment**: ✅ Fits / ⚠️ Use carefully / ❌ Doesn't fit
```

---

### 7. Test Integration

After documenting a creator's techniques:
1. Pick one technique to test
2. Apply it to your next post draft
3. Note if it feels authentic to your voice
4. Track engagement results
5. Update creator file with what worked/didn't work

---

## Quick Reference Commands

### To analyze a post:
```
Read agents/technique-analyzer.md and analyze this post from [Creator]:
[paste post]
```

### To generate ideas from techniques:
```
Read agents/content-strategist.md and suggest 3 content angles
applying [Creator Name]'s [specific technique] to my voice and topics
```

### To apply technique to draft:
```
Read agents/content-writer.md and rewrite my draft at output/drafts/[file]
applying [Creator Name]'s [technique] while maintaining my voice
```

---

## Red Flags While Analyzing

⚠️ **Don't copy these**:
- Techniques that contradict your core values
- Styles that feel inauthentic to Spanish-speaking audience
- Clickbait or manipulation tactics
- Overly salesy or promotional approaches
- Content types your audience doesn't engage with

✅ **Do adapt these**:
- Structural patterns (hook → body → CTA)
- Engagement mechanics (questions, challenges, frameworks)
- Storytelling frameworks (narrative arcs)
- Educational formats (how-tos, breakdowns)
- Visual strategies (simple, clear, value-first)

---

## Success Metrics

You'll know creator analysis is working when:
- ✅ You can identify WHY a post works (not just that it does)
- ✅ You have 10-15 proven techniques in your library
- ✅ You can adapt techniques naturally to your voice
- ✅ Your engagement metrics improve
- ✅ Posts feel authentic but more strategic

---

## Templates for Each Step

### Collection File Template
See: `research/creator-[name]-posts.md` example above

### Analysis File Template
```markdown
# Analysis: [Creator Name] - Post [Number]

## Original Post
[full text]

## Hook Analysis
- Type: [question/story/stat/bold claim]
- Why it works: [psychological reason]
- Adaptation for Irina: [how to use this in Spanish/tech context]

## Structure Analysis
- Pattern: [listicle/narrative/tutorial]
- Flow: [how they move through content]
- Length: [short/medium/long]

## Engagement Mechanics
- CTA type: [question/challenge/resource]
- Comment bait: [what makes people respond]
- Shareability: [what makes it shareable]

## Techniques Identified
1. [Technique 1 with example]
2. [Technique 2 with example]

## Adaptability for Irina
✅ Can use: [list]
⚠️ Use carefully: [list]
❌ Doesn't fit: [list]
```

---

## Start Here

**Your first task**:
1. Choose 1 creator to analyze first
2. Collect 5-10 of their top posts in a research file
3. Come back and we'll analyze them systematically using the Technique Analyzer agent

**Prompt to use**:
```
I've chosen [Creator Name] as my first creator to analyze.
I've collected their posts in research/creator-[name]-posts.md

Let's analyze the first post using agents/technique-analyzer.md
```

---

## Notes

- This is an **iterative learning process** - don't expect perfection on first try
- **Quality > Quantity** - Better to deeply analyze 3 creators than superficially scan 10
- **Test everything** - A technique isn't useful until you've tested it in your content
- **Update continuously** - As you learn what works, update your creator files
- **Trust your voice** - When in doubt, preserve authenticity over technique perfection

