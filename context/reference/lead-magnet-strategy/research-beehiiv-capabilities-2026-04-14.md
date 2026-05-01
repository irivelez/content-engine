# Beehiiv Capability Report for Lead Magnet Delivery

**Research date:** 2026-04-14
**Context:** Irina Velez — LATAM AI creator, Allie K Miller-style Authority Economy funnel, Beehiiv as email platform. Brand rule #1: NO clickbait/fake-engagement CTAs. Delivery must be clean, link-based, authentic.

---

## Executive Summary

Beehiiv CAN deliver a Allie-K-Miller-tier lead magnet cleanly and natively — **but only on a paid plan (Scale or higher, $43/mo annual)**. As of Winter 2025 + Automations v4 (March 2026), Beehiiv now supports:

1. **Native file/PDF hosting** via the Digital Products feature (set price to free = lead magnet).
2. **Multi-step automations** with branching, A/B testing, form-specific triggers, time delays, and conditional logic — triggerable by a specific subscribe form.
3. **Content gating** at the post level AND at the block level (paid vs free tier visibility).
4. **Custom signup forms + landing pages** with segmentation by form source, UTM-trackable.
5. **File attachments** directly in emails (since May 2024).

The free "Launch" plan is too limited — it only supports a single one-email welcome, no automations, no digital products. **Irina needs the Scale plan minimum** ($43/mo annual) to execute an Allie-tier funnel. This is not a blocker; it is the correct tier for her 2026 goals.

---

## Capability Matrix

| Feature | Supported? | Plan | Notes |
|---|---|---|---|
| Native PDF/file hosting | Yes | Scale+ | Via "Digital Products" with price=$0. Formats: link/media, file/download, coaching. |
| File attachments in emails | Yes | All plans (confirm) | Shipped May 2024. Renders in email, downloadable in browser. No published size cap found. |
| Welcome email (1-step) | Yes | Launch (free) + all | Every plan can send 1 welcome email on signup. |
| Multi-step welcome sequence | Yes | Scale+ | Automations v4 (Mar 2026): branching, delays, A/B, multi-split, random cohorts. |
| Form-specific trigger | Yes | Scale+ | "Email Submitted" trigger can fire on a specific subscribe form — enables lead magnet routing by source. |
| Segment on signup (tags, source, UTM) | Partial | Scale+ | Native form-source segmentation works. UTM/referral requires custom fields or integration (Zapier/Make/webhook). |
| Gated content (post-level) | Yes | Scale+ | Content gate: must subscribe or sign in to read. |
| Gated content (block-level inside post) | Yes | Scale+ | Show/hide blocks by subscriber tier (free vs paid). Subscriber-only sections inside a public post. |
| Magic link / subscriber-only URLs | Yes | Scale+ | Subscribers access via the subscriber management center (re-download anytime). |
| Standalone landing pages | Yes | All | Website Builder (revamped 2025) + drag-and-drop. AI Website Builder shipped Nov 2025. |
| Custom forms / embeds | Yes | All | Native embeddable forms; can be linked to automations directly. |
| Referral program | Yes | Scale+ | Customizable milestones + physical/digital/promo rewards. Clean mechanic — does NOT violate rule #1 (it's opt-in referral, not engagement bait). |
| Dynamic content (personalization) | Yes | Max | Tailor by location, interests, subscription tier. |
| AI content tools (AI block, AI site builder) | Yes | Varies | Shipped Nov 2025 Winter Release. |
| RSS to Send (automated newsletters) | Yes | Max+ | Autopublish from RSS. |
| API + webhooks + Zapier/Make | Yes | Scale+ (full API on Max/Enterprise) | For custom integrations (S3, external CRM). |
| Paid subscription tiers | Yes | Scale+ | 0% platform fee on subscription revenue (Stripe fees only). |
| Remove Beehiiv branding | Yes | Max only | $96/mo annual. |

---

## Recommended Delivery Architectures

### Option A — Pure Beehiiv Native (Digital Products + Automation)

**Flow:** Subscribe form (landing page) → form triggers automation → automation sends email with the hosted PDF link (Digital Product) → subscriber clicks, lands in Beehiiv's subscriber management center, downloads PDF → follow-up nurture emails in the same automation.

**Pros:**
- 100% inside Beehiiv. Zero external hosting to manage.
- PDF re-downloadable anytime from subscriber center = long-tail value.
- Form-specific trigger = clean routing if Irina runs multiple lead magnets.
- Automation analytics built-in (open, click, conversion per step).
- Branding consistent. No Dropbox/Google Drive ugliness.

**Cons:**
- Requires Scale plan ($43/mo annual). Not a real con — she's scaling anyway.
- Subscriber must visit the subscriber management center to download (one extra click vs. a raw PDF link). Minor friction.
- PDF updates = re-uploading in Beehiiv (no live CDN versioning).

---

### Option B — Beehiiv + External PDF Hosting (S3 or Cloudflare R2)

**Flow:** Subscribe form → Beehiiv automation → email contains a direct signed URL to PDF hosted on S3/R2/Cloudflare → subscriber downloads instantly.

**Pros:**
- Zero friction — direct PDF download, one click.
- Full control over PDF versioning, analytics (via CDN logs), and presentation.
- Can bypass Beehiiv's subscriber center entirely.
- S3/R2 is cheap (<$1/mo at this scale).

**Cons:**
- Extra infra to maintain. Breaks the "everything in one place" simplicity.
- No native analytics on PDF downloads unless Irina wires tracking.
- Easy for the link to leak/get shared outside the funnel (no gating after delivery).
- Not needed — Beehiiv's native Digital Products solves the same problem with one less moving part.

---

### Option C — Beehiiv Subscribe → Welcome Email With Resource Link (Minimum Viable)

**Flow:** Subscribe form → single welcome email (available on free Launch plan) → email contains a link to a Beehiiv post that is either public or gated to subscribers-only (block-level gating) → subscriber reads and/or downloads from there.

**Pros:**
- Works on the free Launch plan (if Irina wanted to defer upgrading).
- Content-as-lead-magnet feels authentic and on-brand for Irina's voice — matches the "generous authority" pattern.
- Gated sections let her give free subs a deep guide without a PDF at all.
- Easy to iterate — she can update the post anytime vs. re-uploading a PDF.

**Cons:**
- Single welcome email = no nurture sequence, no drip, no follow-up.
- Can't track PDF downloads specifically.
- Feels less "high-value asset" than a downloadable PDF — Allie K Miller-tier funnels use downloadable PDFs as the anchor deliverable.
- Launch plan caps at 2,500 subscribers; she will outgrow it within a quarter.

---

## Recommendation

**Go with Option A — Pure Beehiiv Native (Digital Products + Automation), on the Scale plan.**

Why:
1. **Authenticity + polish match Irina's brand rule #1.** The subscriber goes: form → email → download. No Dropbox links, no Google Drive warnings, no "comment the keyword" — exactly the Allie K Miller aesthetic.
2. **Automations v4 (March 2026) is new enough that the infra is modern** — branching, A/B testing, form-source triggers. She can run 3 lead magnets in parallel with clean routing.
3. **The subscriber management center is a moat, not friction.** It keeps Irina's brand central and lets subscribers come back for the PDF forever — which reinforces the funnel.
4. **One platform, one source of truth.** She's building a content engine; don't fragment it with external hosting unless there's a reason. There isn't one yet.
5. **$43/mo is correct tier pricing for her 2026 goals.** 100K subscribers, first $1M — the Scale plan is the floor, not the ceiling. Upgrade to Max ($96/mo) when she needs: remove branding, dynamic content, RSS to Send, or 10+ publications.

**Upgrade trigger to Max:** when Irina either (a) wants to white-label the subscriber experience (Max removes Beehiiv branding), or (b) launches a Spanish + English split (Max allows 10 publications).

**What to skip:** Don't bother with external PDF hosting unless she hits a specific pain point (e.g., needs to version a PDF live, or wants direct CDN analytics). That's a 2027 optimization, not a launch blocker.

**Referral program:** Turn it ON at launch. Set milestones at 1 / 3 / 10 referrals → digital rewards (e.g., bonus prompts, a second PDF, a 15-min AMA invite). This is NOT clickbait — it's a clean opt-in growth mechanic that fits her brand.

---

## Sources

- [Beehiiv Pricing 2026](https://www.beehiiv.com/pricing)
- [Free digital products as lead magnets](https://www.beehiiv.com/support/article/39024852575767-using-free-digital-products-as-lead-magnets)
- [Automations v4 announcement](https://product.beehiiv.com/p/automations-v4)
- [Lead generation automation setup](https://www.beehiiv.com/support/article/18315855092503-how-to-create-a-lead-generation-automation)
- [Automations: triggers and actions overview](https://www.beehiiv.com/support/article/13080928484887-using-automations-overview-of-triggers-and-actions)
- [Methods for enrolling subscribers in automations](https://www.beehiiv.com/support/article/21526057683991-methods-for-enrolling-subscribers-in-automations)
- [File attachments feature (May 2024)](https://product.beehiiv.com/p/file-attachments)
- [Beehiiv Winter Release 2025-2026](https://www.beehiiv.com/blog/beehiiv-winter-release-event)
- [Content gate / email capture](https://www.beehiiv.com/support/article/38217744316823-adding-a-content-gate-or-email-capture-to-your-website)
- [Gating individual content sections](https://www.beehiiv.com/support/article/15569753728535-how-do-i-gate-individual-content-sections-within-my-post)
- [Multiple subscription tiers](https://www.beehiiv.com/support/article/23080261008279-how-to-set-up-and-use-multiple-premium-tiers)
- [Referral program setup](https://www.beehiiv.com/support/article/13090888705943-referral-program-getting-set-up-sharing-and-monitoring)
- [Beehiiv Review 2026 (EmailVendorSelection)](https://www.emailvendorselection.com/beehiiv-review/)
- [Blog Marketing Academy: Beehiiv lead magnets practical walkthrough](https://www.blogmarketingacademy.com/beehiiv-lead-magnets/)
