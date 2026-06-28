# Deployment Guide

## Prerequisites

- Node.js 20+
- npm 9+
- Git

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (hot reload)
npm run dev
# → Opens at http://localhost:5173/portfolio/
```

---

## Before First Deploy — Checklist

1. **Formspree endpoint** — `src/components/sections/Contact.tsx`
   Replace `YOUR_FORM_ID` with your actual endpoint from https://formspree.io

2. **Email** — `src/data/portfolio.data.ts`
   Replace `'TODO: add email'` with your real email address

3. **Resume PDF** — Add `public/resume.pdf`
   The Resume download button links to this file

4. **OG image** — Add `public/og-image.png` (1200×630px)
   Used for social sharing previews on LinkedIn, Twitter, Slack

5. **Favicon icons** (optional but recommended)
   - `public/icons/icon-192.png` (192×192px)
   - `public/icons/icon-512.png` (512×512px)
   The SVG favicon already works in modern browsers

6. **LiveKit bug report URL** — `src/data/portfolio.data.ts`
   Replace the placeholder URL with the exact GitHub issue URL

7. **Twitter handle** — `src/data/portfolio.data.ts`
   Replace `'@TODO'` if you have one

8. **Vite base path** — `package.json`
   `vite build --base=/portfolio/` and `vite --base=/portfolio/` — change if your GitHub repo has a different name

---

## Deploy to GitHub Pages (Automatic — Recommended)

The `.github/workflows/deploy.yml` file handles this automatically.

### Setup (one-time)

1. Go to your GitHub repo → **Settings** → **Pages**
2. Under "Build and deployment", set **Source** to **GitHub Actions**
3. Push to `main` branch

Every push to `main` will:
- Run `npm run build`
- Deploy `dist/` to GitHub Pages automatically

### Manual Deploy (alternative)

```bash
npm run build
npm run deploy
# Uses gh-pages package to push dist/ to gh-pages branch
```

---

## Environment Variables

No environment variables are required. All config is in `src/data/portfolio.data.ts`.

The Formspree endpoint is hardcoded (it's a public endpoint by design — Formspree validates
by domain, not by keeping the URL secret).

---

## Performance Notes

- Fonts: Google Fonts with `display=swap` — no render blocking
- Images: lazy-loaded via native `loading="lazy"` on all `<img>` tags
- 3D: R3F/Three.js NOT included in Phase 2-5 — can be added later via dynamic import
- Chunks: React, Framer Motion, and Lucide split into separate cache chunks
- Animations: all disabled via CSS when `prefers-reduced-motion: reduce` is set

---

## Updating Content

All content lives in one file: `src/data/portfolio.data.ts`

- Add/remove projects → `projects` array
- Update skills → `skills` array
- Add experience → `experience` array
- Flip availability → `identity.available`

No other files need to change for content updates.

---

## Adding the Contact Form

1. Create a free account at https://formspree.io
2. Create a new form
3. Copy the endpoint URL (format: `https://formspree.io/f/xxxxxxxx`)
4. Paste it into `Contact.tsx`:
   ```ts
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xxxxxxxx'
   ```
5. Formspree handles email delivery, spam filtering, and dashboard

---

## Sitemap Date

Update the `<lastmod>` date in `public/sitemap.xml` when you make major content changes.

---

## Troubleshooting

**Blank page after deploy**
→ Check the `--base` value in `package.json` — it must match your repo name exactly, including case.

**Fonts not loading**
→ The preconnect tags in `index.html` handle this. If still failing, check CSP headers on your hosting.

**Form not submitting**
→ Verify the Formspree endpoint is correct. Formspree free tier requires email verification.

**Animation janky on mobile**
→ Check if `prefers-reduced-motion` is set on the device. If not, reduce blob count in `AuroraBackground.tsx`.
