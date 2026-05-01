# Email 2 · La feature que casi nadie usa bien

> **Trigger:** Día 2 después de suscripción (enrolled en automation)
> **Delay:** 48 horas después del Email 1
> **Audiencia:** Suscriptores de la guía
> **Objetivo:** Entregar valor específico + calificar al suscriptor (¿está aplicando o solo acumulando PDFs?)

---

## Subject line (probar 2 variantes)

**A:** La feature de Claude con más ROI (casi nadie la usa bien)
**B:** Si solo configuras una cosa esta semana, que sea esta

## Preview text

No es Cowork. No es Agent Teams. Es mucho más simple.

---

## Body del email

Hola,

Hace 2 días te mandé **El Stack Claude 2026**. Si no la has abierto todavía, [aquí está de nuevo](link-a-digital-product-beehiiv).

Hoy quiero contarte qué feature de la guía tiene el ROI más alto. No es la más sexy. Tampoco la más nueva. Pero es la que separa a quienes sacan 10% del stack de quienes sacan 10x.

---

**La feature: Context Management en Cowork.**

No los prompts. No los modelos. No los agentes.

La estructura de carpetas que le das a Claude Cowork para que te conozca antes de que escribas una sola palabra.

Lo revisé en la guía (sección 6.1). Aquí la versión corta:

```
CLAUDE COWORK/
├── CONTEXT/          ← quién eres, cómo escribes, cómo trabajas
├── PROJECTS/         ← un folder por proyecto
├── TEMPLATES/        ← plantillas de entregables recurrentes
├── ASSETS/           ← imágenes, logos, datasets
└── REFERENCE/        ← documentos que informan todo tu trabajo
```

La carpeta que nadie menciona es **REFERENCE**.

Ahí viven los documentos transversales — contratos marco, guías de marca, investigaciones de mercado, manuales internos, voice guides. Sin esta carpeta, le repites el contexto a Claude en cada sesión.

Yo tengo configurado este patrón hace meses. Mis archivos `voice-and-style.md` y `audience-profile.md` son exactamente CONTEXT + REFERENCE. Claude me conoce antes de que abra la conversación.

**La diferencia medible:** un prompt de 10 palabras te da resultados de primera pasada. No tienes que "educar" a Claude en cada sesión.

---

**Tu acción para hoy (15 minutos):**

1. Crea la carpeta `CLAUDE COWORK/` en tu Mac.
2. Dentro, crea 3 archivos en `CONTEXT/`:
   - `about-me.md` — quién eres, qué haces, qué empresa, qué estás construyendo
   - `voice.md` — cómo escribes (formal, directo, con humor, etc.)
   - `rules.md` — cómo quieres que Claude trabaje (siempre en español, siempre con bullet points, nunca listas numeradas, etc.)
3. Dale acceso a esta carpeta a Cowork.

Con eso, mañana abres una sesión y escribes "ayúdame con X" — y la respuesta ya se siente tuya, no genérica.

---

**Por qué esto importa más que cualquier otra feature:**

Todo el stack Claude mejora con contexto. Connectors leen tu contexto. Plugins lo heredan. Scheduled Tasks lo usan. Agent Teams lo comparten.

Context Management no es una feature — es el multiplicador de todas las demás.

---

Configúralo hoy. Respóndeme cuando lo hagas y cuéntame qué cambió.

En 3 días te escribo con una última cosa.

**Irina**

---

## Footer

Creado por Irina Vélez
San Francisco · Abril 2026

[LinkedIn] · [Unsubscribe]

---

## Notas de diseño

- **Tono:** enseñar, no vender. Este email debe ser tan valioso como la guía misma.
- **Longitud:** aprox 400 palabras. Un poco más largo que email 1 porque entrega un tutorial.
- **Call to action:** tangible, 15 minutos, hoy. No "piensa en esto" sino "haz esto."
- **Referencia a la guía:** implícita, no hay venta. El valor del email es el contenido, no un "lee la guía completa."
- **Re-link al PDF arriba** — en caso de que no hayan abierto el primer email. Cobertura, no insistencia.
- **Zero menciones a Sprint AI.** El pitch viene en el email 3.
