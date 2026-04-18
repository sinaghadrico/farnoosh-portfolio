# Farnoosh Bagheri — Product Designer Portfolio

A premium, production-ready personal portfolio built with Next.js 15 (App Router),
React 19, TypeScript, and Tailwind CSS. Designed for product designers who care
about typography, restraint, and the small details that compound into trust.

---

## Highlights

- **Editorial design** — paper-like warm palette, serif display type (Fraunces)
  paired with Inter, JetBrains Mono for labels, and a single confident accent.
- **Full SEO suite** — `metadata` API across every route, dynamic `sitemap.xml`,
  `robots.txt`, dynamic Open Graph + Twitter images, JSON-LD (`Person`,
  `WebSite`, `CreativeWork`, `BreadcrumbList`).
- **Performance-first** — Next/Image with AVIF + WebP, Google Fonts via
  `next/font`, route-level static generation, `optimizePackageImports`, no
  unnecessary client components.
- **Accessible** — semantic landmarks, skip-to-content link, focus rings,
  `prefers-reduced-motion` honored, color contrast tuned for WCAG AA.
- **Dark mode** — class-based, no flash, OS-aware via `next-themes`.
- **Subtle motion** — Framer Motion for entrance reveals and a single
  on-load headline animation. Nothing distracting.

## Tech stack

| | |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Language  | TypeScript 5 |
| Styling   | Tailwind CSS 3.4 |
| Motion    | Framer Motion |
| Theming   | next-themes |
| Icons     | lucide-react |

## Getting started

```bash
# 1. Install
npm install

# 2. Run the dev server
npm run dev

# 3. Visit
open http://localhost:3000
```

Other scripts:

```bash
npm run build       # production build
npm run start       # serve the production build
npm run lint        # next lint
npm run type-check  # tsc --noEmit
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, metadata, fonts, theme
│   ├── page.tsx                # Home (Hero + Selected Work)
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── projects/[slug]/page.tsx
│   ├── contact/page.tsx
│   ├── not-found.tsx
│   ├── globals.css
│   ├── sitemap.ts              # dynamic /sitemap.xml
│   ├── robots.ts               # dynamic /robots.txt
│   ├── opengraph-image.tsx     # default OG card
│   ├── twitter-image.tsx       # mirrors OG card
│   ├── icon.tsx                # 32×32 favicon
│   └── apple-icon.tsx          # 180×180 apple touch icon
├── components/
│   ├── Navbar.tsx              # sticky, blurred-on-scroll, mobile sheet
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx         # feature + list variants
│   ├── SectionHeading.tsx
│   ├── Marquee.tsx
│   ├── Reveal.tsx              # in-view fade-up wrapper
│   ├── PlaceholderImage.tsx    # smart placeholder ↔ <Image />
│   ├── Tag.tsx
│   ├── Button.tsx
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   ├── CopyEmailButton.tsx
│   └── JsonLd.tsx
├── content/
│   ├── site.ts                 # 👈 edit name, role, email, socials
│   ├── about.ts                # 👈 edit bio, experience, recognition
│   └── projects.ts             # 👈 edit case studies
├── lib/
│   ├── utils.ts                # cn() helper, absoluteUrl()
│   └── jsonld.ts               # structured-data builders
└── types/index.ts              # shared TypeScript types
```

## How to personalize

1. **Identity & SEO** — edit `src/content/site.ts`. Change `url` to your final
   domain so canonical URLs and Open Graph paths are correct in production.
2. **Bio, experience, recognition** — edit `src/content/about.ts`.
3. **Case studies** — edit `src/content/projects.ts`. The slug becomes the URL
   (`/projects/<slug>`). Drop real images under
   `public/projects/<slug>/...` and reference them as
   `"/projects/<slug>/cover.jpg"`. Leave `cover.src` undefined to render a
   styled placeholder.
4. **Theme colors / type** — `src/app/globals.css` (CSS variables) and
   `tailwind.config.ts` (font families, scale).
5. **Favicon / OG art** — adjust `src/app/icon.tsx`,
   `src/app/apple-icon.tsx`, and `src/app/opengraph-image.tsx`. They generate
   PNGs at build time from JSX — no design tools required.

## Adding images

Use the Next.js `<Image />` component for any image you place in `public/`.
The `PlaceholderImage` component already does this — just supply a `src`:

```ts
{
  src: "/projects/helix-banking/cover.jpg",
  alt: "Helix Banking — home screen",
  ratio: "video",
  span: "full",
}
```

Allowed remote hosts (currently `images.unsplash.com`) live in
`next.config.ts` — add yours under `images.remotePatterns`.

## Deploying

The site is zero-config on **Vercel**:

```bash
npx vercel
```

For other hosts, run `npm run build` and serve the `.next` output. Make sure
to set the production URL in `src/content/site.ts` so canonical/OG metadata
points at the live domain.

## Performance notes

- All routes are statically generated except for the OG image responses
  (which use the Edge runtime).
- Fonts are self-hosted by Next.js — no render-blocking external requests.
- `framer-motion` and `lucide-react` are included in `optimizePackageImports`
  to reduce client bundle size.
- The placeholder image system avoids shipping decorative imagery you don't
  need yet.

## License

MIT — yours to use, modify, and ship.
