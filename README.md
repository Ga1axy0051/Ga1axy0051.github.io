# Xiangyu Wang — Academic Homepage

A lightweight, research-first academic homepage for Xiangyu Wang. The site is built with Astro and TypeScript, generated as static HTML, and deployed to GitHub Pages through GitHub Actions.

## Local development

Requirements: Node.js 20 or later and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Astro. To validate the production build:

```bash
npm run build
npm run preview
```

The generated site is written to `dist/`.

## Content organization

Most updates only require editing a small TypeScript data file:

- `src/data/profile.ts` — introduction, affiliation, education, contact links, leadership, and interests
- `src/data/research.ts` — current and previous research experience
- `src/data/publications.ts` — publication metadata, status, summaries, and links
- `src/data/projects.ts` — selected project content
- `src/data/news.ts` — dated news entries

Reusable rendering lives in `src/components/`, the document shell and metadata are in `src/layouts/BaseLayout.astro`, and the single homepage is composed in `src/pages/index.astro`. Global visual styles and responsive rules are in `src/styles/global.css`.

### Add a publication

Add one object to the `publications` array in `src/data/publications.ts`. Use only links with real URLs; omit unavailable Paper, Code, or Project Page links from the `links` array. Keep review decisions accurate and do not label work as accepted until it is accepted.

### Add news

Add a `{ date, text }` object near the top of the `news` array in `src/data/news.ts`.

### Update research, profile, or the selected project

Edit the matching object in `src/data/research.ts`, `src/data/profile.ts`, or `src/data/projects.ts`. Components will preserve the site hierarchy automatically.

### Replace the CV

Replace `public/cv/Xiangyu_Wang_CV.pdf` with the new PDF, keeping the same filename. The header and hero CV links will update automatically.

## GitHub Pages deployment

The Astro site URL is configured as `https://Ga1axy0051.github.io` with no repository subpath because this is a GitHub user site. `.github/workflows/deploy.yml` builds and deploys every push to `main` using the official Astro and GitHub Pages actions.

In the repository settings, **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**. The deployment status appears under the repository’s Actions tab.

## Troubleshooting deployment

- If dependencies fail to install, use a supported Node.js version and rerun `npm install`.
- If the workflow cannot identify the package manager, confirm `package-lock.json` is committed.
- If Pages returns a 404, confirm the repository is public, named exactly `Ga1axy0051.github.io`, and Pages uses GitHub Actions.
- If styling or assets 404, confirm `astro.config.mjs` has the root `site` URL and no `base` path.
- If the build fails, reproduce it locally with `npm run build`, fix the reported file, commit, and push again.

## Future additions

The data model supports adding profile links, publication project pages, paper/code links, robot demo media, and new research or news entries without restructuring the homepage. Empty links and unused placeholders are intentionally not rendered.
