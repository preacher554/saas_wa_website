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

## Demo Login

Marketing site ini punya demo frontend-only untuk melihat tampilan dalam tanpa akun:

- Buka `#/login`
- Klik `Masuk Demo Tanpa Akun`
- Dashboard demo terbuka di `#/app`

Session demo hanya disimpan di `localStorage`. Belum ada Supabase Auth, database, role access, atau backend runtime.

## Struktur Komponen

- `src/data/siteData.js` menyimpan konten landing page seperti fitur, pain points, workflow, industri, pricing, dan FAQ.
- `src/components/` berisi section modular untuk navbar, hero, dashboard preview, pricing teaser, FAQ, CTA, dan footer.
- `src/index.css` menyimpan design tokens, utilities, dan style mockup dashboard.

## Billing Tool Demo

Dashboard demo `#/app` memiliki static billing/usage meter sebagai contoh tool client-facing. Billing ditampilkan berdasarkan paket aktif dan kuota AI reply per client, termasuk billing period, AI Replies used/quota, Customers used/quota, Human Takeovers, Add-on AI Replies, serta warning 80% dan 100%.

Preview ini tidak terkoneksi Supabase, tidak menjalankan billing real, tidak memproses payment, dan tidak menampilkan detail teknis/internal seperti token, model call, provider, atau estimated cost.

## Catatan

Ini adalah marketing site dengan dashboard demo frontend-only, bukan dashboard runtime produksi. Belum ada backend, Supabase connection, auth asli, payment, atau secret/API key.

Jangan commit secret, `.env`, atau konfigurasi credential ke repo.
