# Style guide: versions and how to change it

The live guide is `public/styleguide/index.html`, published at `/styleguide/`
(unlinked, `noindex`). The master copy is in Dropbox. Every earlier version is kept
in this folder so any of them can be found and compared.

```
docs/styleguide/
  README.md          this file
  CHANGELOG.md       what changed in each version, plus what is queued for the next
  archive/
    v0.2/            index.html (the published page) and the PDF printout
    v0.3/ …          one folder per superseded version, added when the next one ships
```

Git also keeps every state of the guide: `git log -- public/styleguide/index.html`.
Each shipped version is tagged `styleguide-vX.Y` on the commit that published it.

## Before changing the guide

Do these in order, in the same commit as the change:

1. **Archive the current version.** Copy `public/styleguide/index.html` to
   `docs/styleguide/archive/vX.Y/index.html`, where X.Y is the version you are
   about to replace. If a PDF printout of it exists, put it beside it.
2. **Bump the version** in the guide: the `<title>`, the eyebrow line and the
   "What changed" section.
3. **Add a CHANGELOG entry** for the new version, and clear whatever it resolves
   from "Queued for next version".
4. **Update the master copy in Dropbox** so it matches the published page (the
   published copy differs only by its `noindex` tag, favicon and footer note).
5. After the commit, tag it: `git tag styleguide-vX.Y`.

A design value changes in two places: `src/styles/global.css` and the guide.
Change both in the same commit.

## Not in this repo

v0.1 of the guide and the first-draft proposal sent to Richard were moved to
`_Superseded` in Dropbox when v0.2 was written. They are not archived here.
