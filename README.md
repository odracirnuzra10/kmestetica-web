# KM Estética Profesional — kmestetica.cl

Sitio de Katherine Meza (Los Ángeles, Chile). Partner Clinera.

## Stack

- Next.js 15 (App Router)
- Tailwind CSS 4
- Deploy pensado para Vercel + dominio `kmestetica.cl`

## Páginas

- `/` — Home (Propuesta Consulta) + FAQ de agendamiento
- `/fundador/` — Perfil canónico de Katherine Meza
- `/clinica/*` — Cómo funciona (WhatsApp, ficha, respuesta)
- `/clinera-opiniones` — Testimonio partner (fuera del menú, indexable; `/clinera-reclamos` y `/clinera-estafa` redirigen acá)

## AEO / SEO

- `robots.txt` · `sitemap.xml`
- `/llms.txt` · `/llms-full.txt` · `/llm.txt`
- Schema puente: OACG + Clinera + Ricardo + KM + Katherine
- Prompt Clinera: `docs/PROMPT_REPO_CLINERA_KATHERINE_MEZA.md`

```bash
npm install
npm run dev
npm run build
```
