# Noor & Knot Landing Page

Next.js + TypeScript + Tailwind landing page for **Noor & Knot**.

Tagline: **Handmade with barakah.**

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Resend (contact email delivery)

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
cp .env.example .env.local
```

3. Run development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env.local`:

```env
RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=you@example.com
CONTACT_REPLY_TO=you@example.com
```

If you use Formspree instead of API route, set `formActionUrl` in `src/config/site.ts`.

## Brand Config

Update brand links and contact values in:

- `src/config/site.ts`

Key fields:

- `instagramUrl`
- `whatsappUrl`
- `contactEmail`
- `formActionUrl` (optional)

## Images

Drop product images into:

- `public/images/products/`

Current product cards use filenames like:

- `crochet-1.jpeg`
- `crochet-2.jpeg`
- `crochet-3.jpeg`

Update mapped items in:

- `src/data/products.ts`

## Contact Form Flow

- If `formActionUrl` exists in `src/config/site.ts`, form submits to Formspree.
- Otherwise, form posts to `POST /api/contact`.
- API route validates required fields, checks honeypot, applies in-memory rate limit, and sends via Resend.

## Deploy (Vercel)

1. Push repo to GitHub.
2. Import project in Vercel.
3. Add env vars in Vercel Project Settings:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_REPLY_TO` (optional)
4. Deploy.

## Build

```bash
npm run build
npm run start
```
