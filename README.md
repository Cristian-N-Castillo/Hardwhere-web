# Sitio web HardWhere

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4 · MDX · Server Actions.

## Desarrollo

```bash
npm install
cp .env.example .env.local   # completar variables
npm run dev                  # http://localhost:3000
npm run build && npm start   # producción
npm run lint
```

## Dónde se edita el contenido

| Qué | Archivo |
| --- | --- |
| Datos de la empresa (teléfono, dirección, comuna) | `src/content/site.ts` |
| Servicios | `src/content/services.ts` |
| Socios (fotos en `public/equipo/`) | `src/content/team.ts` |
| Casos | `src/content/cases.ts` |
| Checklist Ley 21.719 | `src/content/checklist.ts` |
| Precios PyMEs | `src/app/pymes/page.tsx` |
| Artículos del blog | `src/content/blog/*.mdx` + registrar el slug en `src/lib/blog.ts` |

Los datos pendientes se muestran con un recuadro amarillo punteado ("por confirmar") hasta que se completen.

## Formularios

Los formularios de contacto y checklist envían cada registro (con fecha de consentimiento y versión de la
política) al webhook definido en `LEADS_WEBHOOK_URL`. En producción es obligatorio; en desarrollo, si falta,
los envíos se imprimen en la consola.
