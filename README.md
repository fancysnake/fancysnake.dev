# fancysnake.dev

Personal profile page. Astro, one page, no client-side JavaScript.

Tooling: [mise](https://mise.jdx.dev) for tools and tasks,
[aube](https://github.com/jdx/aube) for packages.

## Local

```sh
mise install       # node + aube, versions pinned in mise.toml
mise run install   # dependencies
mise run dev       # http://localhost:4321
mise run build     # -> dist/
mise run check     # astro check
```

`mise tasks` lists them all.

## Content

- `src/data/profile.ts` — name, intro, links, and the curated repo list. Bare
  repo names resolve under `fancysnake/`; use `owner/name` for anything else.
  An optional `docs` field adds a Docs link next to the repo link.
- `src/lib/medium.ts` — pulls the latest Medium posts from
  `https://medium.com/feed/@radoslaw_jan` **at build time**. If the feed is
  unreachable the section is dropped and the build still succeeds.

## Publishing new articles

The article list is baked in at build time, so a new Medium post appears on the
next build. Trigger one without a commit:

**Actions → Deploy to GitHub Pages → Run workflow.**

## GitHub Pages setup (one-time)

1. Push this repo to `github.com/fancysnake/<repo>`.
2. Settings → Pages → Source: **GitHub Actions**.
3. Settings → Pages → Custom domain: `fancysnake.dev` (`public/CNAME` already
   carries it), then enable **Enforce HTTPS**.
4. DNS for `fancysnake.dev`: `A`/`ALIAS` records to GitHub's Pages IPs, or a
   `CNAME` to `fancysnake.github.io` for the `www` subdomain.

## Note on TypeScript

`typescript` is pinned to `^6` because `astro check` relies on a programmatic
API that TypeScript's native 7.x compiler does not expose yet
([roadmap](https://github.com/withastro/roadmap/discussions/1321)).
