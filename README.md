# Portfolio: Amar Muminović

Personal portfolio built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. Every page is statically pre-rendered.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Editing content

All content lives in two files. No component changes are needed:

- `src/content/profile.ts`: name, role, tagline, about text, email, social links, CV link, experience and skills
- `src/content/projects.ts`: projects. Each entry gets its own page at `/projects/<slug>`. Set `featured: true` to list it under "Selected work".

Search for `TODO` to find the fields still to fill in.

## Structure

```
src/app/page.tsx                 home: hero, selected work, all projects, experience, about, contact
src/app/projects/[slug]/page.tsx project detail pages
src/app/opengraph-image.tsx      social preview image
src/app/sitemap.ts, robots.ts    SEO
src/components/                  nav, theme toggle, project filter, shared UI
```

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new). No configuration is needed. Set `NEXT_PUBLIC_SITE_URL` if you add a custom domain.
