# Mi Stack de AI: Las 7 Herramientas que Uso Todos los Dias

**Por Irina Velez** · Abril 2026

---

## Esto no es una lista de herramientas de moda.

Es lo que realmente uso. Todos los dias. Para construir, automatizar y publicar.

Llevo mas de 10 anos en tecnologia enterprise. Hoy vivo en San Francisco, construyo sistemas multi-agente, gane un hackathon de AI, aplique a Y Combinator, y publico contenido para miles de profesionales en LATAM.

No te digo esto para impresionarte. Te lo digo para que entiendas: estas herramientas no las elegi porque las vi en un video de TikTok. Las elegi porque resuelven problemas reales en mi trabajo diario.

Algunas las amo. Otras las uso a pesar de sus limitaciones. Y hay herramientas famosas que NO estan en esta lista — porque no pasaron la prueba del uso diario.

**Lo que vas a encontrar aqui:**

• Las 7 herramientas que forman mi stack diario
• Para que las uso (casos reales, no teoricos)
• Un ejemplo que puedes copiar de cada una
• Mi veredicto honesto: para quien sirve, para quien no
• Como se conectan en un sistema (no son herramientas sueltas)

Vamos.

---

## 1. Claude / Claude Code

**AI principal para investigar, escribir, programar y analizar.**

### Para que lo uso

Claude es mi herramienta #1. No exagero — la uso 6-8 horas al dia.

Claude (la version web) para analisis estrategico, investigacion y escritura larga. Claude Code (la version de terminal) para construir sistemas completos: agentes, automatizaciones, scripts, analisis de datos.

Mi sistema de contenido entero — el que produce los posts que lees en LinkedIn y mi newsletter — corre sobre Claude Code. Son agentes de AI que curan noticias, generan angulos, escriben borradores y optimizan estructura. Todo orquestado por Claude.

### Ejemplo que puedes copiar

Este prompt lo uso para analizar decisiones de negocio. Copialo y adaptalo:

```
Contexto: Soy [tu rol] en [tu empresa/industria].
Estoy evaluando [decision especifica].

Analiza esto desde 3 perspectivas:
1. Impacto financiero a 6 meses (con numeros estimados)
2. Riesgo operacional (que puede salir mal y probabilidad)
3. Costo de oportunidad (que pierdo si NO lo hago)

Formato: Una tabla comparativa con las 3 perspectivas.
Al final, tu recomendacion con la razon principal.
```

### Veredicto

→ **Usa Claude si**: necesitas analisis profundo, escribir codigo, construir sistemas, o trabajar con documentos largos. Su ventana de contexto (lo que puede "recordar" en una conversacion) es la mas grande del mercado.

→ **No es ideal si**: necesitas buscar en internet en tiempo real o generar imagenes. Para eso, ChatGPT.

→ **Donde falla**: a veces es demasiado cauteloso. Cuando le pides algo ambiguo, te da respuestas largas y seguras en vez de ir al punto.

---

## 2. ChatGPT

**AI secundaria. Busqueda web, generacion de imagenes, tareas rapidas.**

### Para que lo uso

ChatGPT no es mi AI principal — es mi complemento. Lo uso para tres cosas especificas:

• **Busqueda web**: cuando necesito informacion actualizada que Claude no tiene
• **Generacion de imagenes**: con DALL-E integrado, para thumbnails rapidos y visuales
• **Tareas rapidas**: cuando necesito algo simple y no quiero abrir una conversacion larga en Claude

La clave es saber cuando usar cada uno.

### Ejemplo: Cuando uso ChatGPT vs. Claude

| Tarea | ChatGPT | Claude |
|-------|---------|--------|
| "Que paso con OpenAI esta semana?" | ✔ (busca web) | No ideal |
| "Genera una imagen para mi post" | ✔ (DALL-E) | No puede |
| "Analiza este documento de 80 paginas" | Limitado | ✔ (contexto largo) |
| "Escribe un script en Python" | Puede | ✔ (mas preciso) |
| "Construye un sistema multi-agente" | No | ✔ (Claude Code) |
| "Resumeme este articulo que encontre online" | ✔ (lee URLs) | Depende |

### Veredicto

→ **Usa ChatGPT si**: necesitas buscar en internet, generar imagenes, o hacer tareas rapidas donde la velocidad importa mas que la profundidad.

→ **No es ideal si**: necesitas analisis complejo, codigo de produccion, o trabajar con contextos largos.

→ **Donde falla**: en tareas que requieren razonamiento profundo o seguir instrucciones complejas, Claude es consistentemente mejor. ChatGPT a veces "adivina" en vez de razonar.

---

## 3. Perplexity

**Investigacion con fuentes. Verificacion de datos. Segundo cerebro para research.**

### Para que lo uso

Perplexity es mi fact-checker. Cuando Claude o ChatGPT me dan un dato, y necesito verificar que es real — Perplexity.

Tambien lo uso como punto de partida para investigaciones. A diferencia de Google, Perplexity me da respuestas estructuradas con fuentes que puedo verificar. A diferencia de ChatGPT, sus fuentes son mas transparentes y rastreables.

Mi flujo: Claude genera el analisis → Perplexity verifica los datos clave → yo publico con confianza.

### Ejemplo que puedes copiar

Cuando investigo un tema para un post o newsletter:

```
1. Pregunta en Perplexity: "Cuantas empresas en LATAM han implementado
   AI agents en produccion en 2025-2026? Dame datos de fuentes verificables."

2. Perplexity responde con 4-5 fuentes (reportes de McKinsey, Gartner,
   articulos de prensa).

3. Verifico las fuentes principales (hago clic, confirmo el dato).

4. Uso el dato verificado en mi contenido con confianza.
```

Tiempo total: 5 minutos. Sin Perplexity: 20-30 minutos buscando en Google y filtrando basura.

### Veredicto

→ **Usa Perplexity si**: investigas con frecuencia, necesitas datos verificables, o quieres respuestas con fuentes citadas.

→ **No es ideal si**: solo necesitas respuestas creativas o generacion de contenido. Para eso, Claude o ChatGPT.

→ **Donde falla**: a veces las "fuentes" que cita no dicen exactamente lo que Perplexity afirma. Siempre verifica el dato original — no confies ciegamente.

---

## 4. n8n

**Automatizacion de workflows. Conecta herramientas sin escribir codigo (o con poco).**

### Para que lo uso

n8n es el pegamento de mi operacion. Conecta herramientas que no se hablan entre si y automatiza tareas repetitivas.

Mi ejemplo mas importante: mi pipeline de curacion de contenido. Todos los dias, un workflow automatizado:

1. Recolecta noticias de 40+ fuentes (X/Twitter, Hacker News, RSS feeds, Reddit)
2. Filtra por relevancia usando reglas predefinidas
3. Me entrega un resumen estructurado listo para analizar

Eso me ahorra 3+ horas a la semana de lectura manual de fuentes.

### Ejemplo: Automatizacion simple que puedes copiar

**Workflow: Alerta de mencion de marca**

```
TRIGGER: Cada 6 horas
    ↓
BUSCAR: Menciones de tu marca/nombre en X/Twitter y Google News
    ↓
FILTRAR: Solo menciones con mas de 10 interacciones
    ↓
NOTIFICAR: Envia resumen a Telegram/Slack/email

Herramientas en n8n: HTTP Request → Filter → Telegram node
Tiempo de setup: ~30 minutos
```

### Veredicto

→ **Usa n8n si**: tienes tareas repetitivas que involucran multiples herramientas, y quieres automatizarlas sin depender de un desarrollador. n8n es open source — puedes correrlo gratis en tu propia maquina.

→ **No es ideal si**: tu automatizacion es simple (tipo "si recibo email, mandame notificacion"). Para eso, Zapier o Make son mas faciles de configurar.

→ **Donde falla**: la curva de aprendizaje es real. No es "drag and drop" como prometen. Necesitas entender conceptos basicos de APIs y flujos de datos. Pero una vez que lo entiendes, es mas poderoso que cualquier alternativa.

---

## 5. Notion

**Base de conocimiento. Organizacion de proyectos. Memoria externa.**

### Para que lo uso

Notion es donde vive todo lo que no es codigo: estrategia de marca, perfiles de audiencia, analisis de rendimiento, ideas de contenido, swipe files de posts que funcionaron.

No lo uso como "to-do list glorificado" (error comun). Lo uso como **base de conocimiento** — un lugar donde mis agentes de AI pueden consultar contexto, y donde yo puedo encontrar cualquier decision que tome hace 3 meses.

Mi estructura:

• **Brand Hub**: identidad, voz, estrategia, posicionamiento
• **Swipe Files**: posts propios clasificados por rendimiento (Top / Best / Good / Worst)
• **Content Calendar**: pipeline de ideas → borrador → publicado
• **Decisions Log**: decisiones importantes con contexto y razonamiento

### Ejemplo que puedes copiar

**Crea un Swipe File en Notion para tu contenido:**

```
Base de datos con estas columnas:
• Titulo del post
• URL
• Fecha
• Plataforma (LinkedIn, X, Newsletter)
• Rendimiento (Top / Best / Good / Worst)
• Hook usado
• Por que funciono (1 oracion)
• Pattern (Resource Curation / Builder Demo / Contrarian / etc.)

Revisa semanalmente. Despues de 20 posts, vas a ver patrones claros.
```

### Veredicto

→ **Usa Notion si**: necesitas organizar informacion compleja, crear bases de conocimiento, o construir sistemas que escalen con tu negocio.

→ **No es ideal si**: solo necesitas notas rapidas. Para eso, Apple Notes o cualquier app simple.

→ **Donde falla**: Notion es lento con bases de datos grandes (1000+ registros). Y la tentacion de sobre-organizar es real — no caigas en pasar mas tiempo organizando que produciendo.

---

## 6. Cursor

**Editor de codigo con AI. Para construir cosas sin ser developer (o para acelerar si lo eres).**

### Para que lo uso

Cursor es un editor de codigo que tiene AI integrado. Puedes escribir lo que quieres en lenguaje natural y el AI genera el codigo.

Yo lo uso para:

• Prototipar interfaces rapidas (landing pages, dashboards)
• Modificar scripts existentes sin recordar la sintaxis exacta
• Depurar errores — le pego el error y me explica que pasa y como arreglarlo

La diferencia con usar Claude para codigo: Cursor ve todo tu proyecto al mismo tiempo. Entiende como se conectan los archivos. Claude Code hace esto tambien, pero Cursor te da una interfaz visual que facilita ciertos flujos.

### Ejemplo que puedes copiar

**Modifica un script sin saber programar:**

```
1. Abre un archivo en Cursor (cualquier script que uses o te dieron)
2. Selecciona el codigo que quieres cambiar
3. Presiona Cmd+K (Mac) o Ctrl+K (Windows)
4. Escribe en lenguaje natural: "Cambia esto para que en vez de
   enviar un email, envie un mensaje a Slack con el mismo contenido"
5. Cursor genera el codigo modificado
6. Revisa los cambios (verde = nuevo, rojo = eliminado)
7. Acepta o rechaza
```

No necesitas entender el codigo. Necesitas entender que quieres lograr.

### Veredicto

→ **Usa Cursor si**: construyes cosas (aunque sea basicas), o necesitas modificar codigo que ya tienes. Es la forma mas accesible de construir con AI.

→ **No es ideal si**: no tienes ningun contexto tecnico y no planeas construir nada. En ese caso, Claude web es suficiente.

→ **Donde falla**: el AI de Cursor comete errores. Si no tienes forma de verificar que el codigo funciona (ni siquiera ejecutarlo), puedes terminar con algo roto sin saber por que. Siempre prueba lo que genera.

---

## 7. Beehiiv

**Plataforma de newsletter. Distribucion de contenido largo.**

### Para que lo uso

Beehiiv es donde publico mi newsletter semanal — "Guias Practicas" de 1000-1500 palabras sobre AI, herramientas y automatizacion.

Lo elegi sobre Substack y ConvertKit por tres razones:

• **SEO nativo**: cada newsletter es una pagina web indexable
• **Monetizacion integrada**: cuando escale, puedo vender ads y membresías sin migrar
• **Analytics detallados**: se exactamente que links hacen clic, cuanto leen, donde abandonan

LinkedIn atrae la audiencia. Beehiiv la retiene.

### Ejemplo: Mi flujo de newsletter

```
LUNES: Elijo tema (de mis angulos de contenido de la semana)
    ↓
MARTES: Escribo brief de 3-4 bullets (que hice, que paso, pasos clave)
    ↓
MIERCOLES: Mi agente de AI genera el borrador (1000-1500 palabras)
    ↓
JUEVES: Reviso, agrego mi voz, edito ejemplos reales
    ↓
VIERNES: Publico en Beehiiv + promuevo en LinkedIn
```

### Veredicto

→ **Usa Beehiiv si**: quieres construir una audiencia propia (no depender de algoritmos de LinkedIn/X) y planeas monetizar tu contenido eventualmente.

→ **No es ideal si**: solo quieres escribir de vez en cuando sin estrategia de crecimiento. Un blog simple o Substack gratuito es suficiente.

→ **Donde falla**: la curva de configuracion inicial es mas alta que Substack. Y el editor de emails podria ser mejor — a veces peleo con el formato.

---

## El Stack Completo: Como se Conectan

Estas herramientas no funcionan aisladas. Este es el flujo real de como se mueve informacion entre ellas:

```
                    ENTRADA DE INFORMACION
                           |
              +------------+------------+
              |            |            |
          Perplexity   n8n (RSS,     ChatGPT
         (research)    X, HN, Reddit) (web search)
              |            |            |
              +------------+------------+
                           |
                    PROCESAMIENTO
                           |
                     Claude / Claude Code
                  (analisis, escritura, codigo,
                   agentes, automatizacion)
                           |
              +------------+------------+
              |            |            |
           Cursor       Notion       Beehiiv
         (construir)  (organizar)   (publicar)
              |            |            |
              +------+-----+-----+-----+
                     |           |
                  LinkedIn    Newsletter
                 (5x/semana)  (1x/semana)
```

**El flujo diario simplificado:**

1. **n8n** recolecta noticias automaticamente (40+ fuentes)
2. **Claude Code** analiza y genera angulos de contenido
3. **Claude** escribe borradores basados en los mejores angulos
4. **Perplexity** verifica datos clave
5. **Notion** almacena todo: rendimiento, decisiones, aprendizajes
6. **Beehiiv** distribuye la newsletter semanal
7. **Cursor** construye las herramientas y automatizaciones que hacen todo esto posible

**La leccion**: el poder no esta en ninguna herramienta individual. Esta en como las conectas en un sistema que trabaja para ti todos los dias.

---

## Tu Siguiente Paso

No intentes adoptar las 7 herramientas a la vez. Empieza por una:

• **Si nunca has usado AI para trabajar** → empieza con Claude o ChatGPT. Usalo 30 minutos al dia por 2 semanas.
• **Si ya usas AI pero de forma aislada** → agrega Perplexity para verificar y Notion para organizar lo que aprendes.
• **Si ya tienes un flujo** → automatiza con n8n y construye con Cursor.

La herramienta no importa. El sistema si.

---

*Quieres aprender a conectar estas herramientas en un sistema que trabaje para ti?*

→ **Toma Sprint AI, mi curso gratuito de 5 dias: [link]**

En 5 dias vas a tener tu primer workflow automatizado funcionando.

---

*Irina Velez · San Francisco*
*linkedin.com/in/irivelez*
