# Style guide changelog

Newest first. Archived copies of each superseded version are in `archive/`.

## Queued for next version (v0.3): not yet in the guide

The site has moved on from v0.2 in these ways. They need writing into the guide
(and decision 03 re-opened) before v0.3 ships.

**Decisions made 4 November 2026**

- **Decision 03 (history and music only) is overridden.** Publications now has a
  separate "Earlier work in chemistry" block (9 papers, 1984 to 1994), and the
  list includes the 2017 bioeconomy policy report, which is neither history nor
  music.
- **Home shows four recent outputs, not three**, chosen by Richard (`featured` in
  `publications.json`).
- **Book block** gains a review quote (J. Patrice McSherry) and an ISBN/DOI line,
  and reads "Palgrave Macmillan, 2024" (v0.2's specimen said "Springer, 2024").
  Quote source still to be confirmed.
- **About** gains a "Professional activities" section after Qualifications.
- **Publications list** now includes the book, a book chapter, blog posts, a
  podcast, a report and the PhD thesis, not only articles. Entry links can read
  "Blog post", "Podcast", "Article", "Report" or "Repository", not only "DOI".
  A book title is italic with no quotes.
- **Research** "Current work" has two H3 sub-sections (one per project).
- **Project card eyebrow** for Tallersol is "Archive" with no dates, until
  Richard supplies them.

**Rules added in the build**

- **Spanish names in plain-string copy** (publication titles, card lines) are
  marked with `{{es|…}}`, which renders as `lang="es"`. See `markup()` in
  `src/data/site.ts`.

**Still open from v0.2:** items 12 (Spanish version), 13 (portrait), 14 (domain),
15 (line length). Richard's real text now pushes five paragraphs to 93–101 words
(three on Research, one on Tallersol, one on About), which bears on item 15.

## v0.2: October 2026

Published 26 October 2026 (archived in `archive/v0.2/`). Unified the v0.1
foundations and the first-draft proposal into one document and brought it into
line with the first build, read back on 16 October 2026. Two boxes named; dark
palette redone; publication titles 18px regular in quotes; burger menu below
640px; three-line footer with Light / System / Dark slider; drawn link arrow;
contrast recalculated.

## v0.1 and the first-draft proposal

Superseded by v0.2. Held in `_Superseded` in Dropbox, not in this repo.
