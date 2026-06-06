# NusaAI SaaS Website

Marketing website untuk NusaAI Messaging Agent, AI frontdesk terkelola untuk WhatsApp, CRM snapshot, dan human handoff.

## Stack

- React + Vite
- Tailwind CSS
- lucide-react
- JavaScript

## Cara Install

```bash
npm install
```

## Cara Run Lokal

```bash
npm run dev
```

## Cara Build

```bash
npm run build
```

## Cara Test dari HP

```bash
npm run dev -- --host 0.0.0.0
```

## Struktur Komponen

- `src/data/siteData.js` menyimpan konten landing page seperti fitur, pain points, workflow, industri, pricing, dan FAQ.
- `src/components/` berisi section modular untuk navbar, hero, dashboard preview, pricing teaser, FAQ, CTA, dan footer.
- `src/index.css` menyimpan design tokens, utilities, dan style mockup dashboard.

## Catatan

Ini adalah marketing site, bukan dashboard runtime. Belum ada backend, Supabase connection, auth, payment, atau secret/API key.

Jangan commit secret, `.env`, atau konfigurasi credential ke repo.
