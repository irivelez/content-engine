# Setup Instructions — El Stack Claude 2026

**Todo lo que necesitas para lanzar el lead magnet antes del post del martes.**

---

## Paso 1 · Generar el PDF desde HTML (5 minutos)

El archivo `guide.html` ya está listo con el sistema Editorial AI Authority (navy + bone + oxblood + gold, Fraunces + Inter + JetBrains Mono).

**Opción A: Chrome headless (recomendado)**

```bash
cd /Users/irina/AI-driven-OS/content-engine/output/lead-magnets/el-stack-claude-2026

# Generar PDF en tamaño A4
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="el-stack-claude-2026.pdf" \
  --print-to-pdf-no-header \
  guide.html
```

**Opción B: Chrome normal**

1. Abre `guide.html` en Chrome (doble click)
2. Cmd+P → "Save as PDF"
3. Margins: Default
4. Paper size: A4
5. Background graphics: ✓ checked (crítico — sin esto el fondo bone se pierde)
6. Guarda como `el-stack-claude-2026.pdf`

**Revisa el PDF** — debe tener ~35 páginas, portada editorial con título grande, secciones numeradas (#01 a #09), tablas con hairlines dorados, prompts en cajas con comillas oxblood.

---

## Paso 2 · Upgrade a Beehiiv Scale (5 minutos)

1. Login a Beehiiv
2. Settings → Billing → Upgrade
3. Elige **Scale**, plan anual ($43/mes = $516/año)
4. Confirma

**Lo que desbloqueas:** Digital Products, Automations v4, segmentación por form, referral program, 100K+ subs.

---

## Paso 3 · Crear el Digital Product en Beehiiv (10 minutos)

1. Dashboard → Monetize → Digital Products → Create New
2. Tipo: **File / Download**
3. Sube `el-stack-claude-2026.pdf`
4. Precio: **$0 (Free)**
5. Title: **El Stack Claude 2026 — Todo lo que necesitas saber en una guía**
6. Description: "35 páginas. 50+ features. 3 rutas por perfil. Setup priorizado en 60 minutos. Lo que funciona, lo que aún no, y el orden exacto."
7. Cover image: usa la cover del PDF como imagen (screenshot o export)
8. Save & Publish

**Guarda el link del Digital Product** — lo vas a usar en el email automation.

---

## Paso 4 · Crear el formulario + landing page (15 minutos)

### 4.a · Landing Page

1. Dashboard → Website → Pages → Create New Page
2. URL slug: `/stack-claude-2026` (o lo que prefieras)
3. Copia el contenido de `landing-page.md` en el editor
4. **Aplica el nuevo sistema de diseño** (ver sección "Diseño visual" en landing-page.md):
   - Background: Warm Bone `#F4EEE3`
   - Headings: Fraunces, 900 weight
   - Body: Inter, 400
   - CTA button: Oxblood `#7B1E26` sobre bone, texto warm-white
   - Hairline dividers: Antique Gold `#C9A96E`, 1px
5. Añade el formulario de suscripción embebido

### 4.b · Formulario

1. Audience → Forms → Create New Form
2. Name: **El Stack Claude 2026 — Lead Magnet**
3. Source tag: `stack-claude-2026` (esto es crítico — tu automation se disparará por esta source)
4. Campo único: Email
5. Success message: "Listo. Tu guía está en tu inbox en 2 minutos. Revisa también tu spam por si acaso."
6. Embed en la landing page

---

## Paso 5 · Configurar la automation de 3 emails (15 minutos)

1. Dashboard → Automations → Create New Automation
2. Trigger: **Email Submitted** → form specific → `El Stack Claude 2026 — Lead Magnet`

**Email 1 (instantáneo):**
- Copia el contenido de `nurture-sequence/email-1-bienvenida.md`
- Reemplaza `[link-a-digital-product-beehiiv]` con el link real del Digital Product (Paso 3)
- Subject: A/B test las 2 variantes
- Delay: 0 (instantáneo)

**Email 2 (día 2):**
- Copia el contenido de `nurture-sequence/email-2-dia-2.md`
- Reemplaza `[link-a-digital-product-beehiiv]` con el mismo link
- Subject: A/B test las 2 variantes
- Delay: 48 horas después de Email 1

**Email 3 (día 5):**
- Copia el contenido de `nurture-sequence/email-3-dia-5.md`
- Reemplaza `[link-a-sprint-ai]` con el link al Sprint AI (si ya existe) o usa la versión alternativa al final del archivo
- Subject: A/B test las 2 variantes
- Delay: 72 horas después de Email 2

3. Activa la automation

---

## Paso 6 · Publicar los 6 posts de LinkedIn con el link (2 min por post)

Los 6 drafts ya están retrofitted con el CTA al final. Cada uno tiene `[LINK-LANDING-BEEHIIV]` como placeholder.

**Antes de publicar cada post:**
1. Abre el draft en `output/linkedin/drafts/`
2. Busca `[LINK-LANDING-BEEHIIV]`
3. Reemplaza con la URL completa de tu landing page (ej: `https://newsletter.irinavelez.com/stack-claude-2026`)
4. Publica

**Los 6 drafts listos con CTA:**
- `2026-04-15-cowork-context-management.md` (Martes)
- `2026-04-16-connectors-gmail-slack-drive.md` (Miércoles)
- `2026-04-17-plugins-marketing-specialist.md` (Jueves)
- `2026-04-18-scheduled-tasks-friday-report.md` (Viernes)
- `2026-04-19-dispatch-architecture-meetings.md` (Sábado)
- `2026-04-20-channels-openclaw.md` (Domingo)

---

## Paso 7 · Actualizar bio de LinkedIn (5 minutos)

Tu bio actual probablemente no promete el lead magnet. Retrofit:

**Añade al bio de LinkedIn:**

```
📘 El Stack Claude 2026 — Guía de 35 páginas (gratis):
newsletter.irinavelez.com/stack-claude-2026
```

O en la sección "Featured" de tu perfil, añade la landing page como featured link.

---

## Paso 8 · Pin el primer post

Cuando publiques el post del martes (Cowork + Context Management), **ancla ese post en tu perfil**. Cada visitante a tu perfil ve primero ese post con el CTA al lead magnet.

LinkedIn → tu post → menú ⋯ → "Featured on profile"

---

## Checklist final antes del martes

- [ ] PDF generado y revisado (~35 páginas)
- [ ] Beehiiv upgraded a Scale
- [ ] Digital Product creado + link guardado
- [ ] Landing page live con formulario
- [ ] Automation de 3 emails activa
- [ ] Email 1 testeado (suscribirse con tu propio email) — debe llegar en <2 min con link de descarga
- [ ] Martes post retrofitted con URL real
- [ ] Bio de LinkedIn actualizada
- [ ] Primer post anclado al perfil después de publicar

---

## Si algo no funciona

**PDF se ve roto o sin estilos:**
Verifica que "Background graphics" esté activado en el diálogo de impresión de Chrome. Sin eso, el fondo bone se pierde y el diseño se ve en blanco.

**Automation no dispara:**
Verifica que el trigger sea "Email Submitted → Form: El Stack Claude 2026 — Lead Magnet" (no "Any subscribe").

**Link en el email no descarga el PDF:**
El link del Digital Product tiene que ser el "delivery URL" de Beehiiv, no el admin URL. Asegúrate de copiar el link público del Digital Product.

---

## Tiempo total estimado

- Generar PDF: 5 min
- Beehiiv upgrade: 5 min
- Digital Product: 10 min
- Landing page: 15 min
- Automation: 15 min
- Retrofit links en posts: 12 min (2 min x 6)
- Bio + pin: 10 min

**Total: ~70 minutos.**

Después del martes, la máquina corre sola.
