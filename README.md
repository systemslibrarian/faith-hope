# Faith & Hope

Scripture-centered tools for understanding, remembering, discerning, and interceding.

A personal ministry-tech portfolio by Paul Clark / Systems Librarian, gathering four projects into one discipleship path:

| Stage      | Project           | Live                                         |
| ---------- | ----------------- | -------------------------------------------- |
| Understand | Scripture Journey | https://www.scripturejourney.com/            |
| Remember   | Hide in Heart     | https://hideinheart.com/                     |
| Discern    | HisWillGuide      | https://hiswillguide.com/                    |
| Intercede  | PrayerWarriors    | _in development_                             |

## Tech

- Next.js 15 (App Router) with static export (`output: "export"`)
- TypeScript
- Tailwind CSS
- Inter + Cormorant Garamond (via `next/font`)
- Zero runtime — deployable to GitHub Pages, Vercel, Netlify, or any static host

## Local development

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

Useful scripts:

```bash
npm run build       # static export to ./out
npm run lint
npm run type-check
```

## Deploying to GitHub Pages

The repo ships with `.github/workflows/deploy.yml`, which builds the static site on every push to `main` and publishes it to GitHub Pages.

One-time setup:

1. On GitHub, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main`. The workflow will build and deploy automatically.

Default URL: `https://systemslibrarian.github.io/faith-hope/`

The build sets `NEXT_PUBLIC_BASE_PATH=/faith-hope` so all internal links resolve under the project path. If you ever move this site to:

- a **custom domain** (e.g. `faithandhope.com`), or
- a **user/organization page** (e.g. `systemslibrarian.github.io`),

set `NEXT_PUBLIC_BASE_PATH=""` in the workflow (or remove the env line) and the basePath will drop away. For a custom domain, also add a `public/CNAME` file containing the domain.

## Deploying to Vercel

1. Import the GitHub repo at https://vercel.com/new.
2. Framework preset: **Next.js**.
3. No environment variables needed — Vercel serves at the root, so leave `NEXT_PUBLIC_BASE_PATH` unset (or set to `""`). You may also remove `output: "export"` from `next.config.mjs` if you want server features on Vercel; the site works either way.

## Project structure

```
app/
  layout.tsx              Root layout, fonts, metadata
  page.tsx                Home (all major sections)
  projects/page.tsx       Expanded project cards
  about/page.tsx          About Paul Clark
  faith-and-hope/page.tsx Reflection on faith & hope
  not-found.tsx
  globals.css
components/
  Header.tsx
  Footer.tsx
  Hero.tsx
  DiscipleshipPath.tsx
  FaithAndHopeSection.tsx
  BuilderStatement.tsx
  ProjectGrid.tsx
  ProjectCard.tsx
  icons/Icons.tsx         All inline SVG icons
lib/
  projects.ts             Single source of truth for projects + stages
```

## Editing content

All project copy, tags, links, and stage verses live in `lib/projects.ts`. Edit that file to add, remove, or rewrite a project — every page picks the changes up automatically.

## License

Code: MIT (or your preference — update before publishing).
Content & copy: © Paul Clark / Systems Librarian.

_Soli Deo gloria._
