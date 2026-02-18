---
name: hooks
description: Generates 5 winning LinkedIn hooks in Spanish for a given topic. Reads audience profile, proven hook patterns, and Irina's positioning to produce scroll-stopping hooks for LATAM professionals learning AI. Triggers on /hooks or when starting a LinkedIn post.
argument-hint: "[topic, brief, or angle description]"
---

# Hook Generator

Produce 5 compelling LinkedIn hooks in Spanish about the topic in `$ARGUMENTS`. If no topic is provided, ask the user.

## Context (Read Before Writing)

1. `context/audience-profile.md` — Target audience: pain points, fears, goals
2. `context/reference/hook-bank.md` — 7 categories of proven hooks with real examples
3. `context/voice/core-values.md` — Irina's positioning, beliefs, unfair advantages
4. `context/voice/performance-analysis.md` — Read ONLY the "What Doesn't Work" section and "Anti-Pattern Checklist" in voice-and-style.md. These are your guardrails. Do NOT read the "What Works" formulas — you are not here to replicate past posts.

## Process

1. Identify which audience pain point or desire this topic connects to
2. Identify the Builder Mode anchor: what Irina built, tried, or learned (if missing from the input, ask)
3. Select 5 hook categories from hook-bank.md that fit the topic
4. For EACH hook, apply the Creative Tension Test (see below)
5. Write each hook in Spanish, grounded in the Builder Mode anchor

## Creative Tension Test

Every hook MUST contain at least one of these tension elements:
- **Contrast**: Two things that don't usually go together ("Nunca me gustó X. Ahora puedo Y sin Z.")
- **Curiosity gap**: Implies something the reader doesn't know yet ("Pero hasta hace 3 semanas descubrí...")
- **Specificity that surprises**: A concrete detail that breaks expectations ("5 pasos. 0 líneas de código. 1 app.")
- **Stakes**: Something at risk or something gained ("Y casi nadie los está aprovechando")

A hook without tension is just a sentence. If a hook could work for ANY topic by swapping one word, it's too generic — kill it and write a new one.

## Hook Anti-Patterns (NEVER generate these)

- **The safe summary**: "Descubre cómo [tool] puede ayudarte a [benefit]" — no tension, no specificity
- **The generic question**: "¿Sabías que [fact]?" — could be anyone, about anything
- **The template with blanks filled**: Taking a pattern and mechanically swapping words without adding a point of view
- **The hype hook**: "Esto va a cambiar todo" — empty promise, no grounding
- **The interchangeable hook**: If you can swap the topic and the hook still works the same, it's too generic

## Constraints

- Max 2 lines per hook (must work in LinkedIn preview)
- Spanish with English tech terms where natural (AI, prompts, Claude Code, etc.)
- "Tú" form
- Each hook must lead to something Irina did, built, or discovered
- Each hook must pass the Creative Tension Test
- Each hook must be SPECIFIC to this topic — not interchangeable with another

## Examples

**Topic:** "Automaticé mi investigación de contenido con Claude Code"

**Hook 1 — "I Did X":**
> Automaticé mi investigación de contenido en 30 minutos. Antes me tomaba 3 horas.

**Hook 2 — "Stop / Don't Do This":**
> Dejé de leer sobre IA y empecé a construir con ella. Todo cambió.

**Hook 3 — "After X, I Noticed":**
> Después de 3 meses creando contenido con IA, noté un patrón que nadie menciona.

**Hook 4 — "How To":**
> Cómo configuré un sistema que investiga por mí mientras duermo.

**Hook 5 — "Contrarian":**
> Todos hablan de prompts. Pero el verdadero poder de la IA no está ahí.

## Output

```markdown
## Hooks: [topic]

**Audience connection:** [pain point or desire this addresses]
**Builder Mode anchor:** [what Irina built/did/learned]

---

### 1. [HOOK IN SPANISH]
**Category:** [from hook-bank.md] | **Tension:** [contrast/curiosity gap/specificity/stakes]
**Why it stops the scroll:** [1 sentence — what specific tension makes this hook work]
**The post goes here:** [1 sentence — what follows this hook]

### 2-5. [same format]

---

**Recommended winner:** #[N] — [1 sentence: why this hook + audience + topic is the strongest combination]
```
