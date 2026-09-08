# Xiangyu Wang — Academic Homepage

A lightweight, research-first academic homepage built with Astro and TypeScript, generated as static HTML, and deployed to GitHub Pages through GitHub Actions.

## Local development

Requires Node.js 20 or later and npm.

```bash
npm install
npm run dev
```

To validate the production build:

```bash
npm run build
npm run preview
```

The generated site is written to `dist/`.

## Content organization

- `src/data/profile.ts` — biography, affiliation, contact links, leadership, and interests
- `src/data/research.ts` — research and education background
- `src/data/publications.ts` — publication metadata, status, summaries, and links
- `src/data/projects.ts` — selected project content
- `src/data/news.ts` — dated news entries

Reusable rendering lives in `src/components/`, metadata and structured data are in `src/layouts/BaseLayout.astro`, and the homepage is composed in `src/pages/index.astro`. Global visual styles and responsive rules are in `src/styles/global.css`.

### Add a publication or news item

Add a publication object to `src/data/publications.ts`; use only real URLs and keep review decisions accurate. Add dated news near the top of `src/data/news.ts`.

### Replace the photo or CV

Replace `public/images/xiangyu-wang.jpg` while keeping the same filename and update its width and height attributes if its dimensions change. Replace `public/cv/Xiangyu_Wang_CV.pdf` while keeping the same filename.

## GitHub Pages deployment

The Astro site URL is configured as `https://ga1axy0051.github.io` with no repository subpath. `.github/workflows/deploy.yml` builds and deploys every push to `main` using official Astro and GitHub Pages actions.

In repository settings, **Settings → Pages → Build and deployment → Source** must be **GitHub Actions**. Deployment status appears under the repository's Actions tab.

## Google Search / SEO

After deployment:

1. Open [Google Search Console](https://search.google.com/search-console/).
2. Add the URL-prefix property `https://ga1axy0051.github.io/`.
3. Complete the verification method offered by Search Console.
4. Open **URL inspection**, enter `https://ga1axy0051.github.io/`, and run the live URL test.
5. Select **Request indexing**.
6. Open **Sitemaps** and submit `https://ga1axy0051.github.io/sitemap-index.xml`.
7. Wait for Google to crawl and index the site; indexing is not immediate.

Ranking for a common name such as “Xiangyu Wang” can take time. Consistent links from established profiles help search engines associate the page with the correct person. Add the homepage to the GitHub profile website field and, when those real profiles exist, to Google Scholar, ORCID, OpenReview, institutional or lab pages, and publication project pages. Do not create or publish guessed profile URLs.

## Troubleshooting deployment

- If dependencies fail, use a supported Node.js version and rerun `npm install`.
- If the workflow cannot identify the package manager, confirm `package-lock.json` is committed.
- If Pages returns a 404, confirm the repository is public, named `Ga1axy0051.github.io`, and Pages uses GitHub Actions.
- If assets 404, confirm `astro.config.mjs` has the root site URL and no base path.
- If the build fails, reproduce it locally with `npm run build`, fix the error, commit, and push again.
