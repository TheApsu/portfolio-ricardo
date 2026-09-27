# Ricardo Duque | Portfolio

One-page portfolio built with React 19, TypeScript, Tailwind CSS v4, and Vite. The build is a fully static site in `dist/`, so it can be hosted for free anywhere that serves files.

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + static build into dist/
npm run preview   # serve dist/ at http://localhost:4173
npm run lint
```

## Edit content

- **All text** (roles, dates, bullets, skills, certifications, contact) lives in `src/data/cv.ts`. It mirrors `Ricardo_Duque_CV.pdf`; keep the two in sync. Wrap a metric in `**…**` to emphasize it.
- **The downloadable CV** is `public/Ricardo_Duque_CV.pdf`. Replace the file to update it (keep the name, or update `profile.cvFile`).
- **Resty images** are in `src/assets/resty/` (sourced from app-resty.com).
- **Design rules** (colors, type, spacing, motion, layout per section) are in `DESIGN.md`. Colors are CSS variables in `src/index.css`.

## Deploy (free)

**Live:** https://theapsu.github.io/portfolio-ricardo/

Every push to `main` runs `.github/workflows/deploy.yml` (lint, build, publish `dist/` to GitHub Pages), so updating the site is just:

```bash
git add -A && git commit -m "Update portfolio" && git push
```

Progress shows under the repo's **Actions** tab; the site updates about a minute later.

The Vite `base` is `./`, so the same build also works on other hosts, at a domain root or a sub-path:

| Host | Build command | Output directory |
|---|---|---|
| Cloudflare Pages | `npm run build` | `dist` |
| Netlify | `npm run build` | `dist` |
| Vercel | `npm run build` | `dist` (framework preset: Vite) |

## Project skills

`.claude/skills/` holds the Claude Code skills used to design and audit this site: `taste-skill` and `image-to-code` (Leonxlnx/taste-skill, MIT), `web-design-guidelines` (vercel-labs/agent-skills), `awesome-design-md` (VoltAgent/awesome-design-md, MIT), and `playwright-cli` (microsoft/playwright-cli, installed as a dev dependency).
