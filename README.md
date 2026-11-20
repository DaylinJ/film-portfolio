# Daylin Jerome Film Portfolio

Eight selected films presented as a dark contact sheet. Each film has its own watch page with a YouTube player and direct watch link. Titles, full credits, descriptions, and video and image references live in `src/data/films.ts`.

![Desktop view of the film grid](docs/film-grid.webp)

## Local setup

Use Node.js 22.12 or newer and pnpm 10.34.3.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Vite. To check the production build locally, run:

```sh
pnpm build
pnpm preview
```

## Cloudflare Pages

For a future Git-connected Pages project, use these settings.

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | React (Vite) |
| Root directory | Repository root |
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Build environment | `NODE_VERSION=22.23.5`, `PNPM_VERSION=10.34.3` |

For Direct Upload, use the contents of `dist/` or a ZIP with `index.html` at its root. Preserve the generated `_redirects` file. The build has no top-level `404.html`, so Pages can serve the React app for deep links. The app handles unknown routes.

[Cloudflare Pages build settings](https://developers.cloudflare.com/pages/configuration/build-configuration/) · [Cloudflare Pages routing](https://developers.cloudflare.com/pages/configuration/serving-pages/)
