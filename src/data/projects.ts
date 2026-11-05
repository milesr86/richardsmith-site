// The two project cards, shared by Home and the Projects index.
// `line` may contain {{es|…}} language markup (see markup() in site.ts).
//
// TODO(approval): the one-line summaries are the style guide's examples
// (written from Richard's material), not Richard's own words. The Tallersol
// eyebrow has no dates because Richard hasn't given the project's start and
// end dates (the old placeholder "2021–2026" was invented).

export const projects = [
  {
    href: '/projects/tallersol/',
    eyebrow: 'Archive',
    strand: 'red' as const,
    line: 'Digitising the {{es|Tallersol}} poster collection with UCLA’s Modern Endangered Archives Program.',
  },
  {
    href: '/projects/migration-music-memory/',
    eyebrow: 'Community · ongoing',
    strand: 'blue' as const,
    line: 'With Sara Cohen and Lisa Shaw, working with Chilean, Yemeni and Ukrainian communities in Liverpool.',
  },
];
