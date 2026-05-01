# LinkedIn Post — 2026-03-02

**Status:** Draft
**Topic:** Claude Chrome Extension + LinkedIn + Notion workflow
**Type:** Field Report / Failure Lesson
**Framework:** PAS + Failure Lesson hybrid
**Hook pattern:** "Funciona. Pero no como crees."

---

Obtuve un análisis detallado del performance de mis posts de LinkedIn
Usando la extensión de Claude en Google Chrome.

Cuando necesitas analizar información de una página web que es difícil de consultar de otra manera
Las tools que permiten tomar el control de tu navegador son bastante útiles


Le pedí a Claude:
"Analiza mis posts del último mes. Identifica aquellos que tienen mejor performance vs los peores. Específicamente identifica aquellos con mayor engagement. Clasifícalos + tus insights de cada post."
Y le dejé la página de LinkedIn abierta, para que Claude tome control de tu pantalla directamente en donde quieres que haga el análisis.


Luego del primer resultado, le pedí:
"Revisa post por post del último mes y crea un top rank de los posts con mayor cantidad de comentarios"
Aquí puedes usar la métrica que sea más relevante para ti, incluso rankear los peores posts para saber qué no genera ningún engagement

Como resultado de este proceso, así es como funciona la extensión de Claude:

• La extensión de Chrome opera SOLO con el navegador, no con MCP

Cuando Claude intentó conectarse a Notion, usó el browser en lugar del Model Context Protocol.
La extensión está optimizada para controlar el navegador, no para usar integraciones externas.

• Le puedes pedir que escriba un reporte en Notion, pero va a ser más lento, porque va campo por campo, depende de screenshots y del scrolling
Copiar y pegar el resultado es más rápido en este caso.

• Cuidado con cambiar de pestaña mientras el agente está corriendo
En teoría, Claude sigue trabajando si cambias de tab.
En la práctica, a mí se me detuvo varias veces.
La extensión es beta, si puedes, quédate en la misma pantalla hasta que termine o usa una pantalla alterna para no interrumpir al agente

• Claude no guarda el historial cuando cierras la sesión, la conversación desaparece
La extensión no guarda chats. No hay historial, no hay forma de recuperar lo que hiciste. Cierras el sidebar y todo se fue.


Vale la pena usar la extensión cuando necesitas analizar algo directamente en el navegador, que de otra manera es difícil
Diligenciar campos y formularios es posible, pero aún toma tiempo, por el mecanismo que usa.

♻️ Repostea si esta información te pareció relevante

---

**Word count:** ~270
**Visual:** Video de la grabación del workflow
