# El Stack Claude 2026

## Todo lo que necesitas saber en una guía

**Abril 2026 · Por Irina Vélez**

---

## 1 · Por qué existe esta guía

En los últimos 4 meses, Anthropic lanzó más de 50 features de Claude.

Algunas cambian cómo trabajas. Otras no. Y hay una diferencia enorme entre las dos.

Esta guía es el mapa completo. No un resumen de noticias, no una lista de features al azar, no una traducción del blog de Anthropic.

Es el stack completo, organizado por cómo lo vas a usar en tu empresa, en tu negocio, o en tu carrera. Con lo que funciona, lo que aún no funciona, y el orden para configurarlo sin perder tiempo.

**Tres promesas:**

→ Vas a saber qué features existen, qué hacen, y cuáles te sirven HOY (no en teoría)
→ Vas a tener un orden de prioridad para configurarlo todo en 60 minutos
→ Vas a saber también qué NO hace Claude — porque la honestidad es más útil que el hype

Nada en esta guía requiere que sepas programar. Todo está accesible desde el plan que ya tienes (o un upgrade claro si lo necesitas).

---

## 2 · El Mapa Completo 2026

Claude ya no es un chat. Es cuatro superficies conectadas, más una capa de modelos que las alimenta:

### Los 5 componentes del stack

**1. MODELOS** — El cerebro. Opus 4.6, Sonnet 4.6, Haiku 4.5. Distintas capacidades, distintos precios.

**2. CLAUDE.AI (web + móvil)** — El punto de entrada. Chat, memoria, visuales, extensión de Chrome.

**3. CLAUDE COWORK (desktop)** — El agente que vive en tu Mac o Windows. Trabaja en tus archivos reales.

**4. CLAUDE CODE (terminal)** — Para construir. Agent Teams, skills, hooks, routines.

**5. API + PLATAFORMA** — Para productizar. Managed Agents, Agent SDK, Compliance API.

Cada superficie ganó capacidades en paralelo. La pregunta correcta no es "cuál uso" sino "cuál es mi superficie principal y cuáles son de apoyo."

### Timeline: 4 meses, 50+ features

**ENERO 2026**
→ Claude Cowork Research Preview (12 ene)
→ Cowork en planes Pro (16 ene)
→ HIPAA-Ready Enterprise (12 ene)
→ Deprecación de Opus 4 y 4.1 del selector (16 ene)

**FEBRERO 2026**
→ Claude Opus 4.6 — 1M contexto, 128K output (5 feb)
→ Claude Sonnet 4.6 — default Pro y Free (17 feb)
→ Fast Mode para Opus 4.6 (7 feb — research preview)
→ Claude para Excel, PowerPoint — research preview (5 feb)
→ Analytics API (13 feb)
→ Self-Serve Enterprise (12 feb)
→ Cowork Plugins + Marketplace (24 feb)
→ Enterprise Connectors — 13 nuevos (24 feb)
→ Scheduled Tasks (25 feb)
→ Free Claude Max para OSS Maintainers (27 feb)
→ Claude Code Security — vulnerability scanner (20 feb)

**MARZO 2026**
→ Claude for Office — contexto compartido (11 mar)
→ Inline Visuals — charts y diagramas nativos (12 mar)
→ 1M Context GA a precio estándar (13 mar)
→ Persistent Thread cross-device en Cowork (17 mar)
→ Channels — Telegram, Discord, iMessage (20 mar)
→ Computer Use — research preview (23 mar)
→ Auto Mode para Claude Code (24 mar)
→ Interactive Apps en mobile (25 mar)
→ Compliance API (30 mar)
→ MCP Registry (live 2026)
→ Anthropic Institute (11 mar)
→ Partner Network +$100M (12 mar)

**ABRIL 2026**
→ Project Glasswing — Claude Mythos preview (7 abr)
→ Claude Managed Agents — beta pública (8 abr)
→ Cowork GA en Windows (9 abr)
→ Claude para Word — beta Team/Enterprise (abril 2026)
→ Redesigned Claude Code Desktop — agentes en paralelo (14 abr)
→ Routines — automatizaciones en la nube de Claude Code (14 abr)

**Total al 14 de abril: 50+ shipments en 4 meses.**

Ninguna otra empresa de IA está lanzando a esta velocidad. Y la mayoría de los que usan Claude a diario no conocen ni la mitad.

---

## 3 · Las 3 rutas por perfil

No todos necesitan lo mismo. Esta guía funciona porque te permite saltar directo a tu perfil.

Elige uno — o lee los tres si lideras equipos con los tres perfiles.

### Ruta A · Ejecutivo con equipo y presupuesto

Tu objetivo: convertir Claude en una línea del P&L, no en un experimento.

Tu secuencia de features (orden de prioridad):

**1. Claude for Office + Contexto Compartido**
Es la feature que más ROI tiene para tu equipo. Tu equipo analiza en Excel, Claude construye la presentación en PowerPoint, redacta el memo en Word — todo con el mismo contexto. El tax que hoy se paga de "pasar datos a slides" desaparece.

**2. Cowork Plugins + Marketplace privado**
Instalas plugins por función: Finanzas, Legal, Ventas, Marketing, Operaciones, HR. El equivalente a contratar 6 firmas especializadas, pero en un clic y sin onboarding. En plan Team o Enterprise, tu admin controla qué plugins ve cada persona.

**3. Connectors (Google Workspace, Slack, DocuSign, FactSet, Harvey)**
Claude conectado a tu stack real, no a lo que tu equipo le pegue en el chat. Son gratuitos y cambian la economía de cualquier reporte semanal.

**4. Scheduled Tasks**
El briefing diario de las 7am. El reporte de los viernes. La revisión de competencia cada lunes. Todo autónomo. Tu equipo deja de hacer trabajo repetitivo y empieza a hacer decisiones.

**5. Audit Logs + Compliance API**
Tu CISO va a querer saber que existen dos mecanismos distintos. Los **Audit Logs** del admin console están disponibles en Team y Enterprise — registran actividad administrativa y de recursos (members, API keys, permisos, uploads), **pero NO incluyen prompts ni respuestas del chat**. Para audit de contenido (chat, archivos), Anthropic tiene el **Compliance API** — acceso exclusivo a Enterprise bajo NDA, que sí extrae activity logs, chat data y file content para evidencia SOC 2 / ISO 27001. Si tu caso de uso es "qué hizo la gente en la plataforma," Audit Logs alcanza. Si es "qué exactamente se conversó," necesitas Compliance API y una conversación con tu rep de Anthropic.

**6. Cowork GA en Windows (abril 9)**
Hasta hace 5 días, Cowork era solo Mac. Hoy está GA en ambos. Es el momento en que IT puede estandarizar y desplegar a toda la empresa con confianza.

**7. Memory (cross-session)**
Claude deja de re-presentarse contigo en cada sesión. Recuerda tu empresa, tus prioridades, tu formato preferido. Rollout incremental — confirma la disponibilidad en tu plan.

**8. Claude Opus 4.6 con 1M de contexto a precio estándar**
Metes el board pack completo, el data room de una adquisición, o el corpus legal entero en un solo prompt. Sin segmentar. Sin perder hilo. A precio estándar desde el 13 de marzo.

**La pregunta que te debes hacer el lunes:** ¿Cuántas horas a la semana está mi equipo haciendo trabajo que cualquiera de estas 8 features elimina?

### Ruta B · Founder que quiere escalar sin equipo

Tu objetivo: operar como un equipo de 15 con 3 personas (o tú solo).

Tu secuencia de features:

**1. Cowork + Scheduled Tasks + Dispatch**
El combo que reemplaza un COO. Scheduled Tasks corre tu cadencia operativa. Dispatch te deja mandar tareas desde el celular cuando no estás frente al Mac. Tu operación se ejecuta mientras tú haces el trabajo que solo tú puedes hacer.

**2. Agent Teams (agentes en paralelo)**
En Claude Code, puedes correr varios agentes coordinados por un team lead. No hay un límite duro — la práctica común es 3-5 para tareas típicas, pero Anthropic ha documentado ejemplos con más de 15 agentes trabajando en paralelo. Útil para research + review + debugging simultáneo. Experimental: se activa con `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=true`.

**3. `/ultraplan`**
Le dices lo que quieres construir. Claude arma el plan completo en un session en la nube. Tú lo revisas, lo ajustas, y él lo ejecuta. Planificación asíncrona sin bloquearte.

**4. Routines (14 abril)**
Automatizaciones de Claude Code que corren en la infraestructura de Anthropic. Tu Mac no necesita estar encendida. Nightly repo hygiene, workflows triggereados por GitHub, agentes que responden a eventos.

**5. Claude Managed Agents (beta pública)**
Productizar un agente propio sin montar Kubernetes, sin manejar sandboxing, sin implementar agent loops. Pagas $0.08 por session-hour + tokens. Notion, Rakuten, Sentry y Asana ya están en producción con esto.

**6. Agent SDK**
El mismo agent loop que usa Claude Code, programable en Python y TypeScript. Si quieres capacidades tipo Claude Code dentro de tu propio producto, esto es el atajo.

**7. Channels (Telegram / Discord / iMessage)**
Le mandas tareas a Claude Code desde el celular. Tu sesión en el Mac ejecuta. Un detalle importante: si cierras la terminal, la sesión muere. Usa tmux o screen si planeas tareas largas.

**8. Prompt Caching + Batch API**
Reducción del costo entre 50% y 90% cuando el uso escala. El cache-hit cuesta 10% del costo de input estándar. Batch te da 50% de descuento en procesamiento asíncrono. Combinables.

**La pregunta que te debes hacer hoy:** ¿Qué parte de mi operación no requiere mi intervención activa, pero todavía la estoy haciendo yo?

### Ruta C · Profesional que quiere dejar de sentirse atrás

Tu objetivo: pasar de "uso ChatGPT a veces" a "opero el stack completo de Claude."

Tu secuencia de features:

**1. Claude.ai Memory (plan gratuito)**
El punto de partida. Claude te aprende con el tiempo. Sin costo. Activa en Settings. Importante: es summary-based, no retrieval-augmented — útil, pero no sustituye un sistema RAG real.

**2. Claude para Excel + PowerPoint**
El upgrade de más alto apalancamiento para el trabajo que muchos profesionales ya hacen. Pivot tables, fórmulas complejas, generación de slides preservando tu plantilla. Tu próximo reporte debería pasar por aquí.

**3. Claude en Chrome (extensión)**
Captura screenshots, lee páginas, llena formularios, graba workflows repetitivos. El piso de entrada es bajísimo. Disponible en Max beta, rollout en expansión.

**4. Voice Mode (móvil o Claude Code)**
Hablas en lugar de escribir. Español incluido. Baja drásticamente la barrera si escribir te frena.

**5. Inline Visuals**
Le das datos, obtienes un gráfico nativo en el chat. Sin pasar a otro tool. Útil para entender algo rápido o para meter una visualización en un documento.

**6. Claude Cowork (plan Pro)**
El salto cualitativo. Un agente que trabaja en tus archivos reales. El "asistente de IA en mi Mac" que de verdad entrega.

**7. Skills (plug-and-play)**
Hay skills pre-construidas por Anthropic que ya hacen cosas complejas. No necesitas construir desde cero. Empieza usándolas antes de crear las tuyas.

**8. Interactive Apps en móvil (25 marzo)**
Claude construye apps interactivas que ves y usas directamente desde el celular. Útil para prototipar ideas sin abrir una laptop.

**La pregunta que te debes hacer esta semana:** ¿Cuál de estas features me mueve más del paso A al paso B? Empieza por esa. No necesitas las 8.

---

## 4 · Los 13 shifts mentales

Si Claude cambió en 4 meses, la forma de usarlo también. Estos son los cambios de mindset que separan a quien saca 10% del valor de quien saca 10x:

| Deja de hacer | Empieza a hacer |
|---|---|
| Copiar-pegar de Gmail al chat de Claude | Usar Connectors. Claude lee tu inbox con tu permiso. |
| Abrir Claude y re-explicarle tu empresa cada sesión | Activar Memory. Revisar el summary mensualmente. |
| Cortar documentos para que quepan en contexto | Usar 1M tokens a precio estándar. Meter el documento entero. |
| Correr un agente a la vez, secuencialmente | Agent Teams en paralelo, o Dispatch desde el celular. |
| Correr manualmente el mismo prompt cada lunes | Scheduled Tasks en Cowork, o Routines en Code. |
| Prender Claude solo cuando estás en tu escritorio | Channels (Telegram/Discord) + Dispatch desde el celular. |
| Tratar Claude como un chatbot que responde preguntas | Usarlo como un agente que ejecuta trabajo y reporta. |
| Subir un Excel solo para que lo resuma | Claude para Excel — edita el archivo en el mismo lugar. |
| Tomar screenshots y describir lo que ves | Claude en Chrome — captura y lee directo. |
| Montar tu propio sandbox, auth y estado de agente | Managed Agents. Enfócate en la lógica, no en la infra. |
| Preguntarte "¿Opus o Sonnet?" en cada tarea | Default a Sonnet 4.6. Usa Opus solo para razonamiento crítico. |
| Pagar Opus premium por prompts repetitivos | Prompt Caching. El contexto repetido cuesta 10%. |
| Probar Claude solo dentro de los productos de Anthropic | Claude corre en Cursor, Zed, GitHub Copilot, Vercel AI Gateway, Replit. Elige tu flujo. |

Si aplicas 3 de estos, ya estás por encima del 80% de los usuarios activos.

---

## 5 · Setup en 60 minutos

Si acabas de leer esto, tienes 60 minutos, y quieres máximo impacto para mañana — este es el orden exacto.

**Minuto 0-5 · Elige el plan correcto**

→ Solo Claude.ai + web: **Pro ($20/mes)** es suficiente para probar todo.
→ Cowork en desktop: **Pro** es el piso; **Max** te da más quota y prioridad.
→ Claude para Office: ya incluido en Pro.
→ Agent Teams, `/ultraplan`, Channels: instala Claude Code (CLI gratis, usa la quota de tu plan).

**Minuto 5-15 · Activa Memory**

→ Claude.ai → Settings → Memory → activa.
→ Dale un prompt inicial: "Soy [rol] en [empresa]. Hacemos [qué]. Mis 3 prioridades actuales son X, Y, Z. Respóndeme en español."

**Minuto 15-25 · Instala los Connectors correctos**

→ Google Workspace (Calendar + Drive + Gmail) = 90% del ROI de cualquier knowledge worker.
→ Slack si tu equipo lo usa.
→ DocuSign si firmas contratos con frecuencia.

**Minuto 25-40 · Instala los add-ins de Claude para Office**

→ Microsoft AppSource → "Claude by Anthropic" → instala Excel, PowerPoint, Word.
→ Abre tu última hoja de cálculo importante. Pregúntale: "Resume esto para un VP y constrúyeme un deck de 3 slides con los 3 insights clave."

**Minuto 40-50 · Instala Claude Cowork**

→ Desktop app → activa Cowork → dale acceso a 2 carpetas locales.
→ Primera tarea: "Organiza esta carpeta por tema y créame un README con lo que contiene."
→ Crea 1 Scheduled Task: "Cada mañana a las 8am, resume mis emails no leídos y los top 3 canales de Slack en una página de Notion."

**Minuto 50-60 · Instala Claude Code (si construyes algo)**

→ `npm install -g @anthropic-ai/claude-code`
→ `claude` en el directorio de tu proyecto.
→ Prueba `/ultraplan` con un refactor pequeño.
→ Añade Channels: conecta un bot de Telegram. Mándale un mensaje desde tu celular para confirmar.

**Bonus (siguientes 60 minutos si tienes energía):**

→ Explora el Marketplace de Cowork Plugins. Instala 2 plugins relevantes para tu rol.
→ Instala la extensión de Chrome.
→ Si usas API, activa Prompt Caching.

---

## 6 · Las 6 features que cambian todo (deep dives)

Estas son las 6 features que vas a ver esta semana, una por día, en LinkedIn. Aquí las tienes antes y con más profundidad.

### 6.1 · Cowork + Context Management

**Qué es:** Una estructura de carpetas que le da contexto permanente a Claude Cowork. Una vez configurada, mejora cada semana.

**Por qué importa:** La mayoría de usuarios de Cowork escriben prompts largos cada sesión y obtienen resultados genéricos. El problema nunca fue el prompt. Es que Claude no te conoce.

**La estructura:**

```
CLAUDE COWORK/
├── CONTEXT/              ← quién eres, cómo escribes, cómo quieres trabajar
├── PROJECTS/             ← una subcarpeta por proyecto
├── TEMPLATES/            ← plantillas de entregables recurrentes
├── ASSETS/               ← imágenes, logos, datasets
└── REFERENCE/            ← documentos que informan todo tu trabajo
```

**La carpeta que nadie menciona:** REFERENCE. Ahí viven los documentos transversales — contratos marco, guías de marca, investigaciones de mercado, manuales internos. Sin esto, le repites el contexto a Claude en cada sesión.

**La prueba:** Los archivos `voice-and-style.md`, `audience-profile.md` y `CLAUDE.md` de este sistema de contenido son este patrón. Claude ya me conoce antes de que escriba una palabra.

**Acción:** Crea la carpeta hoy. Llena CONTEXT primero (3 archivos, 30 minutos). Añade REFERENCE cuando identifiques documentos que usas en múltiples proyectos.

### 6.2 · Connectors

**Qué es:** Integraciones nativas que conectan Claude Cowork con tus herramientas reales — Gmail, Google Drive, Slack, Calendar, Docusign, y más de 50 más.

**Lo que cambia:** No son integraciones superficiales. Claude navega tu Drive autónomamente, lee documentos, sintetiza entre fuentes, redacta emails, revisa contratos. Con acceso real, no con lo que tú le pegues.

**Setup en 2 minutos:**

→ Settings → Connectors
→ Busca la integración
→ Click "Add"
→ Autentica
→ Listo. Una vez. Para siempre.

**Gratis en todos los planes.** Incluso el gratuito.

**3 prompts para empezar hoy:**

Con Gmail + Slack:
*"Revisa mis mensajes de Slack de los últimos 7 días y dame un resumen de lo que necesita follow-up. Organízalo por urgencia."*

Con Google Drive:
*"Encuentra el documento más reciente sobre [proyecto] en mi Drive. Léelo y dame los 3 puntos más importantes."*

Con Calendar:
*"Revisa mi calendario de esta semana, identifica conflictos, y redacta un email para reprogramar la reunión de menor prioridad."*

**La pregunta:** ¿Cuántas horas a la semana pasas moviendo información entre herramientas manualmente? Ese es el tiempo que Connectors te devuelve.

### 6.3 · Plugins por rol

**Qué es:** Plugins pre-construidos por función. No son plugins genéricos — ya saben tu trabajo. Cada uno incluye comandos, connectors y flujos listos.

**Roles oficiales disponibles:** Ventas, Marketing, Legal, Finanzas, Data, Producto, Customer Support, HR, Operaciones, Diseño, Ingeniería, Brand Voice.

**Cómo usarlos:**

Instalas en 1 clic desde el marketplace. Activas escribiendo `/` en cualquier chat.

Ejemplos:

→ `/marketing:draft-content` — toma tu brand voice, tu audiencia, tus plantillas y redacta el contenido.
→ `/sales:call-prep` — investiga la cuenta y prepara los talking points.
→ `/legal:review` — lee el contrato y te señala las cláusulas riesgosas.
→ `/data:explore` — subes un CSV, resume columnas, detecta anomalías, escribe SQL.
→ `/productivity:start` — revisa tu agenda y te prepara el día.

**El detalle que cambia todo:** después de instalar, escribe:

*"Customize the [nombre-del-plugin] plugin for me based on my company."*

Claude te pregunta sobre tus flujos, tu terminología, tus preferencias. Y las recuerda.

**En Team y Enterprise:** admin controla marketplaces privados con plugins internos. Tu empresa despliega especialistas de IA entrenados en su propia operación.

### 6.4 · Scheduled Tasks

**Qué es:** Tareas recurrentes o bajo demanda que corren solas en Claude Cowork. Se combinan con Connectors y plugins.

**El ejemplo del viernes:**

*"Cada viernes a las 10:30 a.m., revisa los documentos en /reportes-semanales de mi Drive y los mensajes de #métricas en Slack de los últimos 7 días. Compila: números clave, avances por área, riesgos. Guárdalo en /reportes-semanales/YYYY-MM-DD-cierre.md y déjalo como borrador en Gmail dirigido a mi equipo con el asunto 'Cierre de semana - [fecha]'."*

Una instrucción. Un viernes. Después: nunca más lo haces manualmente.

**Setup:**

→ Claude Desktop → Customize
→ Crea tu Scheduled Task
→ Conecta Gmail y Drive en Connectors
→ Deja tu computadora encendida a esa hora

**Lo que tienes que saber:** Scheduled Tasks en Cowork requiere que tu Mac esté encendida a la hora de ejecución. Si necesitas independencia de dispositivo, mira Routines (sección 6.6 conceptualmente, o la versión de Claude Code).

**Qué otras tareas corren solas:**

→ 8 a.m. — Brief de noticias de IA
→ Mediodía — Check de competencia
→ Tarde — Digest de comunidades relevantes

20-30 minutos cada una. Casi 2 horas al día que dejas de tocar.

### 6.5 · Dispatch

**Qué es:** El puente entre tu celular y Claude Cowork en tu Mac. Desde el móvil le mandas instrucciones. Tu computadora las ejecuta mientras tú estás en movimiento.

**El caso de uso real:** Sales de una reunión importante. 3 horas de decisiones. 40 cosas por documentar. Tu equipo se fue a otra junta. Tú vas caminando al carro intentando no olvidar las 5 cosas más críticas.

Desde el celular:

*"Lee las notas de la reunión de arquitectura que acabo de guardar en /reuniones. Compila las decisiones en un brief con: qué decidimos, quién es responsable, y deadlines. Deja un borrador en Gmail para [equipo] y actualiza el doc de arquitectura en Drive."*

Cuando llegas a tu escritorio, todo listo. Solo revisas y envías.

**Setup en 5 minutos:**

→ Claude Desktop → Cowork → Dispatch en el sidebar
→ Activa "Keep awake" (sin esto, se detiene cuando la laptop duerme)
→ Claude móvil → Dispatch en el sidebar
→ Listo

**3 cosas que nadie te dice:**

→ Dispatch no lee tu CLAUDE.md por defecto. Inclúyelo explícitamente: "lee mi CLAUDE.md antes de empezar."
→ Los Connectors se configuran en desktop ANTES de salir. Dispatch los hereda.
→ No puedes adjuntar archivos desde móvil. Mándalos por email y dile a Dispatch que los jale desde Gmail.

Disponible en Pro y Max.

### 6.6 · Channels (Claude Code)

**Qué es:** Un MCP server que conecta tu sesión de Claude Code a Telegram, Discord o iMessage. Le escribes por chat. Claude procesa con acceso completo a tus archivos, git y herramientas. Te responde por el mismo chat.

**Cuándo lo usas:**

→ Sales por un café: le mandas la tarea, vuelves y está lista
→ En una reunión: corre los tests mientras tú hablas
→ Manejando: actualiza el changelog y prepara el deploy
→ Fin de semana: resuelves un bug sin abrir el laptop

**Setup:**

```
/plugin install telegram@claude-plugins-official
/telegram:configure <TU_BOT_TOKEN>
claude --channels plugin:telegram@claude-plugins-official
```

Mandas un mensaje al bot, te devuelve un código de pairing, conectas.

Discord funciona igual con su propio plugin.

**El detalle que tienes que saber:** la sesión del terminal tiene que seguir corriendo. Usa tmux, screen, o un proceso en background. Si cierras la terminal, la sesión muere.

**Por qué importa:** hace unos meses, la comunidad construyó OpenClaw — un proyecto open source para mandarle mensajes a tu IA por Telegram antes de que Anthropic tuviera algo oficial. Hoy Anthropic envió la versión oficial, nativa, construida sobre MCP. Dejó de sentirse como herramienta. Empezó a sentirse como infraestructura.

---

## 7 · Lo que Claude NO hace (todavía)

El hype sobre IA es barato. La honestidad sobre qué no funciona es más valiosa. Si vas a apostarle a Claude, necesitas saber dónde todavía no llega.

**1. Generación nativa de imágenes o video.** Claude analiza imágenes, no las genera. Para crear imágenes o video usa Midjourney, DALL·E, Runway, Veo. Claude puede orquestarlos vía MCP, pero no los produce él mismo.

**2. Voz que habla de regreso.** Voice Mode existe para input (Claude Code y móvil). Voice output (Claude hablándote con voz natural) no es una feature de primera clase todavía.

**3. Cowork Projects NO sincronizan entre miembros de un equipo.** Los Projects viven en tu máquina. Si quieres estado de agente compartido en el equipo, necesitas Managed Agents o infraestructura custom.

**4. No hay generación de audio o música.** Punto.

**5. Ojo con la diferencia Audit Logs vs. Compliance API.** Los Audit Logs estándar (admin console, Team/Enterprise) registran actividad administrativa — pero NO prompts ni respuestas. Si necesitas audit de contenido (chat, files), existe un Compliance API separado, exclusivo de Enterprise bajo NDA. Confundir los dos va a hacer que prometas a tu CISO algo que el plan estándar no entrega.

**6. Channels muere cuando cierras la terminal.** No es un entorno de coding hospedado. Tu Mac sigue siendo la superficie de ejecución.

**7. No hay vector store nativo ni RAG persistente.** La memoria de Claude (#33) es basada en resúmenes, no en retrieval. Para RAG serio sigues necesitando Pinecone, Weaviate, Turbopuffer, o tu propio store.

**8. Managed Agents es beta pública.** SLA de producción, residencia regional, y precio para GA aún no están fijos. Lo que pagues hoy puede cambiar.

**9. Fast Mode tiene precios hostiles.** 6x el costo estándar de Opus. Es un tool de nicho para latencia, no un daily driver.

**10. Haiku 4.5 no tiene las protecciones anti-prompt-injection que tienen Sonnet y Opus.** No le des a un agente Haiku tools sensibles (tu email, tu CRM, APIs de pago).

**11. No hay Claude-dentro-de-Google-Docs como Gemini.** Connectors leen Workspace, pero no hay un add-in nativo estilo "Claude en el documento."

**12. Computer Use sigue en research preview.** Espera errores, clicks muertos, y ocasionalmente "Claude hizo click en el botón equivocado durante 15 minutos." Supervísalo.

**13. Modelos se deprecan. Planifica.** Opus 4 y 4.1 salieron del selector el 16 de enero. Sonnet 4 y Sonnet 4.5 con contexto de 1M tokens (beta) se retiran el 30 de abril de 2026. La vida útil de un modelo en uso activo es 6-12 meses. Tu workflow no puede depender de una versión específica.

---

## 8 · Glosario técnico en español

Términos que vas a encontrar. Traducidos sin perder precisión:

**Agent / Agente** — Claude configurado para ejecutar una tarea autónomamente, no solo responder una pregunta. Tiene acceso a tools, memoria, y un objetivo.

**Agent SDK** — La librería que te permite construir agentes usando el mismo motor que usa Claude Code. Disponible en Python y TypeScript.

**Claude.ai** — La interfaz web y móvil donde chateas con Claude directamente.

**Claude Code** — El CLI (terminal) orientado a construir software. Incluye Agent Teams, Skills, Hooks, Channels.

**Claude Cowork** — La app de escritorio donde Claude trabaja en tus archivos reales. Disponible en Mac y Windows.

**Computer Use** — Capacidad de Claude para controlar tu mouse y teclado — abrir apps, llenar formularios, navegar. Research preview.

**Connector** — Una integración nativa entre Claude y una herramienta externa (Gmail, Drive, Slack). Se autoriza una vez.

**Context Window** — La cantidad de tokens (palabras, aproximadamente) que Claude puede procesar en una sola conversación. Opus y Sonnet 4.6 tienen 1M tokens.

**Hooks** — Comandos de shell que se ejecutan automáticamente antes o después de acciones de Claude Code. Guardarraíles deterministas.

**Managed Agents** — Infraestructura hospedada por Anthropic para correr agentes autónomos. Pagas por session-hour + tokens.

**MCP (Model Context Protocol)** — El protocolo que permite a Claude conectarse con herramientas externas de forma estándar. Es el "USB-C de la IA." Stewarded por la Linux Foundation.

**Plugin** — Un paquete de skills, comandos y connectors orientado a una función (Marketing, Legal, Ventas). Instalable desde el marketplace.

**Prompt Caching** — Técnica para evitar pagar por contexto repetido. El cache-hit cuesta 10% del input estándar.

**Routines** — Automatizaciones de Claude Code que corren en la infraestructura de Anthropic (no en tu máquina local).

**Scheduled Tasks** — Tareas recurrentes que Claude Cowork ejecuta en tu Mac a horas específicas. Requieren tu máquina encendida.

**Skill** — Una capacidad reusable configurada en `.claude/skills/`. Cada skill es una carpeta con scripts, assets e instrucciones.

**Token** — La unidad mínima de texto que Claude procesa. ~0.75 palabras = 1 token en español.

---

## 9 · Qué sigue

Si llegaste hasta aquí, ya tienes el mapa completo del stack Claude 2026. Pero saber qué existe y configurarlo son dos cosas distintas.

Lo que viene para ti:

**Esta semana** (14-20 de abril):
Voy a publicar un post por día en LinkedIn explicando una de las 6 features del capítulo 6 con detalle. Si quieres seguir la serie con más contexto, busca los posts.

**En los próximos días**:
Te voy a mandar 2 emails cortos. El primero el día 2 — con la feature de esta guía que casi nadie está usando bien (y que tiene el ROI más alto). El segundo el día 5 — con una invitación a algo que estoy preparando para los que quieren pasar de "conozco Claude" a "opero Claude en mi trabajo."

**Si esta guía te sirvió**:
La mejor forma de agradecerla es usarla. Configura 2 features esta semana. No 10, no 20. Dos.

La diferencia entre quienes leen sobre IA y quienes la operan es exactamente esta semana.

---

*Irina Vélez*
*Abril 2026*

*Esta guía se actualiza trimestralmente. La próxima versión (julio 2026) incluirá las features que se lancen en Q2.*
