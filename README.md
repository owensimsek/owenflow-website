# OwenFlow — Marketing Website

Marketing website for [owenflow.com](https://owenflow.com).

OwenFlow is a personal finance iOS app built around a simple idea: manually entering your income, expenses, and debt makes money feel real. No bank connections, no automatic syncing — just you and your numbers.

---

## Stack

| | |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Language | TypeScript |
| Font | [Geist](https://vercel.com/font) via `next/font` |
| Deployment | [Vercel](https://vercel.com) |

---

## Local Setup

**Prerequisites:** Node.js ≥ 18 (via [nvm](https://github.com/nvm-sh/nvm) or direct install)

```bash
# Clone
git clone git@github.com:owensimsek/owenflow-website.git
cd owenflow-website

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note (macOS + nvm):** If you see a Turbopack error about a missing `node` binary, run the dev server manually from a shell where nvm is loaded: `npm run dev`

---

## Project Structure

```
app/
  components/          # All UI components
    Navbar.tsx
    Hero.tsx
    PhilosophySection.tsx
    FeaturesSection.tsx
    PreviewSection.tsx
    CTASection.tsx
    Footer.tsx
    Logo.tsx
    AppStoreButton.tsx
    IPhoneMockup.tsx
    LegalLayout.tsx
  privacy/page.tsx     # /privacy route
  terms/page.tsx       # /terms route
  opengraph-image.tsx  # Auto-generated OG image (1200×630)
  favicon.ico          # Browser favicon
  globals.css          # Design tokens + Tailwind config
  layout.tsx           # Root layout + metadata
  page.tsx             # Home page (/)
public/
  icon.svg             # Brand icon (SVG)
  favicon-16x16.png
  favicon-32x32.png
  apple-touch-icon.png
assets/
  favicon/             # Source favicon files
```

---

## Deployment

The site deploys automatically to Vercel on every push to `main`.

To deploy manually:

```bash
npm run build   # Verify the build locally first
vercel --prod   # Deploy to production
```

**Environment variables:** None required. The site is fully static.

**Domain:** Point `owenflow.com` to Vercel in your DNS settings.

---

## Making Changes

- **Copy / content** — edit the relevant component in `app/components/`
- **App Store link** — replace `href="#"` in `AppStoreButton.tsx` calls across the page once the link is live
- **Legal pages** — update placeholder text in `app/privacy/page.tsx` and `app/terms/page.tsx`
- **OG image** — edit `app/opengraph-image.tsx`
