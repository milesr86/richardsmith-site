# Richard G. Smith: research site

A static [Astro](https://astro.build) site for Dr Richard G. Smith (University of Liverpool).
**Everything on it is placeholder content.** Nothing here is real yet.

Not deployed, no Vercel project, no domain. Pages carry `noindex` until launch.

## Run it locally

Needs Node 22.22 or newer (`node -v` to check).

```sh
npm install
npm run dev        # http://localhost:4321, live-reloads as you edit
```

To see the production build instead: `npm run build && npm run preview`.

Dark mode follows the system setting, so flip macOS between Light and Dark
(System Settings → Appearance) to see both palettes.

## Where things are

```
src/
  styles/global.css     Design tokens, type scale, links, focus, tags. Source of truth: the style guide
  layouts/BaseLayout    <head>, skip link, masthead, footer, 720/960 shell
  components/           Masthead, FeaturedBook, PublicationList + PublicationEntry,
                        ProjectCard, PosterFigure, ExtLink (body link), Footer
  pages/                index, research, publications, about, 404,
                        projects/index, projects/tallersol, projects/migration-music-memory
  data/
    publications.json   The publications list: one file to swap
    site.ts             Nav labels, profile links
    lorem.ts            The lorem ipsum used for body copy
public/favicon.svg      Placeholder "RGS" on a sun square
```

The design lives in `global.css` as CSS custom properties with the style guide's
names (`--paper`, `--ink`, `--poster-red`, `--space-1` to `--space-4`,
`--measure`, `--wide`, …). Dark values are in the `prefers-color-scheme` block.
Components only use those tokens, so changing a value there changes the whole site.

## Replacing the placeholders

Every placeholder is tagged `TODO(placeholder)`. To list them all:

```sh
grep -rn "TODO(placeholder)" src public astro.config.mjs
```

Main jobs:

- **Publications:** replace the contents of `src/data/publications.json`. Home's
  "Recent work" and the Migration, Music and Memory page's related list read from
  the same file. Topic tags (and so the filter buttons) are generated from the `tags` field.
- **Body copy:** swap `{lede}` / `{para[n]}` in each page for real paragraphs.
- **Posters:** in `projects/tallersol.astro`, give each `<PosterFigure>` a `src`,
  `width`, `height`, real `alt` and a caption (title, year, source). Without a
  `src` it draws the grey 3:4 box.
- **Links:** every external link is `#` for now (profiles, DOIs, repository copies,
  publisher page, UCLA archive).
- **At launch:** set `site` in `astro.config.mjs`, delete the `noindex` tag in
  `BaseLayout.astro`, add the social card, and replace the favicon.

## Rules the code follows (from the style guide)

Square corners and no shadows (rounded only on tags and the focus ring); red is
the only accent; sun is a fill used once, on the book block; no icon set (links
that leave the site carry a ↗); Spanish names are marked `lang="es"`; one H1 per page.

One deliberate departure from the guide: below 640px the nav collapses behind a
burger button (the guide originally said "no hamburger"). From 640px up the four
links sit inline, and with JavaScript off they simply show.

**Light / dark.** The site follows the visitor's system setting by default, and
the footer has a Light / Dark / System switch that overrides it (remembered in
that browser only). The dark palette also departs from the guide's first dark
values: those lightened every ink into a pastel (salmon red, baby-cyan blue, a
glaring yellow block). The current dark values keep each hue and only drop
lightness as far as contrast allows, and are listed with their contrast ratios in
`src/styles/global.css`. Change them there, in both dark blocks (the
`prefers-color-scheme` one and the `[data-theme='dark']` one).
