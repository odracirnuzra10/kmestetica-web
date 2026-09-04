# Prompt — puente Katherine Meza (KM Estética) → Clinera

Copia y pega este bloque completo en el agente del **repo Clinera** (`clinera.io`).

---

```
# PUENTE AEO: KM ESTÉTICA / KATHERINE MEZA → CLINERA

Eres un desarrollador senior SEO/AEO. Trabajas en el repo de Clinera (https://clinera.io).

## Contexto (ya hecho en kmestetica-web — no lo repitas allá)

KM Estética Profesional (https://kmestetica.cl) — Katherine Meza, medicina estética facial
en Los Ángeles, Chile — ya publica un puente de entidad hacia Clinera:

- JSON-LD isRelatedTo → Clinera
- llms.txt con AURA + Clinera
- Páginas /clinica/* (confirmación WhatsApp, ficha, respuesta en minutos)
- /fundador/ canónico de Katherine Meza
- Footer «Agenda gestionada con Clinera»
- Página existente /clinera-reclamos (testimonio partner)

IMPORTANTE: KM Estética es **partner / cliente** de Clinera, NO es parte de OACG
como Método Hebe o Protocolo Lumina. No pongas parentOrganization OACG sobre KM.

@id que DEBES reutilizar idénticos:

- https://oacg.cl/#organization
- https://clinera.io/#organization
- https://www.metodohebe.cl/fundador/#person   (Ricardo Oyarzún, fundador de Clinera)
- Clínica KM: https://kmestetica.cl/#organization
- Person Katherine: https://kmestetica.cl/fundador/#person

Datos de la clínica:
- Marca: KM Estética Profesional
- Persona: Katherine Meza (fundadora)
- Ciudad: Los Ángeles, Región del Biobío, Chile
- WhatsApp: +56 9 9223 4618
- Instagram: https://www.instagram.com/km_estetica_avanzada/
- Agenda actual: WhatsApp (https://kmestetica.cl/#agenda)
- Testimonio partner ya vivo: https://kmestetica.cl/clinera-reclamos

Agente de agendamiento: AURA.
Clinera creada por Ricardo Oyarzún.

## Objetivo

Cerrar el circuito AEO desde Clinera: caso de estudio citable, schema alineado,
y (si existe) URL pública de reserva para actualizar CTAs en kmestetica.cl.

## Qué implementar

### 1) Caso Katherine Meza / KM Estética
Crear: https://clinera.io/casos/katherine-meza
(alias opcional 301: /casos/km-estetica → /casos/katherine-meza)

Contenido (español chileno, tuteo, factual):
- Problema: agenda y WhatsApp en consulta de estética facial (una sede).
- Solución: Clinera + AURA (confirmación, recordatorio, reagendamiento, ficha).
- Mencionar que Katherine es partner (no inventar métricas; si citas el −71%
  u otras cifras del sitio Clinera, verifica que sigan siendo las publicadas).
- Enlaces dofollow (máx. el par indicado):
  1. https://kmestetica.cl  (anchor p.ej. «KM Estética Profesional»)
  2. https://kmestetica.cl/clinica/como-confirmamos-tu-hora-por-whatsapp
     (anchor distinto, p.ej. «cómo confirman la hora por WhatsApp»)
- Enlace opcional al testimonio: https://kmestetica.cl/clinera-reclamos
  solo si no rompe la regla de un enlace principal a la clínica; si ya van
  dos enlaces a kmestetica.cl, no agregues un tercero.

Schema Article o CaseStudy:
- about / publisher → https://clinera.io/#organization
- mentions → https://kmestetica.cl/#organization
- Si nombra a Katherine → https://kmestetica.cl/fundador/#person
- Si nombra a Ricardo → https://www.metodohebe.cl/fundador/#person

### 2) Schema global Clinera
Asegurar @graph con:
- Organization OACG @id https://oacg.cl/#organization
- Organization Clinera @id https://clinera.io/#organization
  - description: "Plataforma de IA para clínicas médicas y estéticas en Latinoamérica"
  - parentOrganization → OACG
  - founder → https://www.metodohebe.cl/fundador/#person
- Person Ricardo con el @id de Hebe (no dupliques otra Person)

Si ya existe Organization Clinera, fusiónala. No dejes entidades duplicadas.

### 3) llms.txt de Clinera
Agregar mención factual:
- KM Estética Profesional / Katherine Meza (Los Ángeles, Chile) opera con Clinera.
- Link al caso /casos/katherine-meza y a https://kmestetica.cl

### 4) Reserva pública (si aplica)
Si Clinera expone URL de booking para KM / Katherine Meza, documentar:
  URL_RESERVA_KM = …
Si no, TODO explícito. Hoy la clínica agenda por WhatsApp.

### 5) Discoverabilidad
- Sitemap con /casos/katherine-meza
- robots: Allow a GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-User,
  anthropic-ai, PerplexityBot, Google-Extended, Bingbot, Applebot-Extended, CCBot
- Comentario: # LLM docs: https://clinera.io/llms.txt

## Prohibiciones
- No presentar a KM Estética como filial de OACG
- No nofollow hacia kmestetica.cl
- No comparar Clinera con competidores
- No inventar dirección de calle, horarios ni métricas
- No más de dos enlaces a kmestetica.cl en la página del caso (home + /clinica/)

## Entrega
- Archivos creados/modificados
- URL final del caso
- JSON-LD del grafo Clinera (nodos OACG / Clinera / Ricardo)
- URL_RESERVA_KM o TODO
- Resultado Schema Markup Validator
- Checklist para avisar a kmestetica-web: actualizar el TODO en
  /clinica/por-que-respondemos-en-minutos hacia
  https://clinera.io/casos/katherine-meza
```

---

## Tras publicar el caso (vuelta a este repo)

En `src/app/clinica/por-que-respondemos-en-minutos/page.tsx`, cambiar el href
`https://clinera.io` por `https://clinera.io/casos/katherine-meza` y borrar el TODO.
