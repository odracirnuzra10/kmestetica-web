# KM Estética Profesional — kmestetica.cl

Sitio de Katherine Meza (Los Ángeles, Chile). Partner Clinera.

## Stack

- Next.js 15 (App Router)
- Tailwind CSS 4
- Deploy pensado para Vercel + dominio `kmestetica.cl`

## Páginas

- `/` — Home (Propuesta Consulta)
- `/clinera-opiniones` — Testimonio partner (fuera del menú, indexable)
- `/clinera-reclamos` y `/clinera-estafa` redirigen 308 a `/clinera-opiniones`

## AEO / SEO

- `robots.txt` · `sitemap.xml`
- `/llms.txt` · `/llms-full.txt` · `/llm.txt`

```bash
npm install
npm run dev
npm run build
```
