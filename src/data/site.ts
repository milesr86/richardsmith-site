// Site-wide data: navigation, profile links, and the publication type.

export const siteName = 'Richard G. Smith';

// Nav labels are final (from the style guide). The wordmark links to Home,
// so Home isn't repeated here.
export const nav = [
  { href: '/research/', label: 'Research' },
  { href: '/publications/', label: 'Publications' },
  { href: '/projects/', label: 'Projects' },
  { href: '/about/', label: 'About' },
];

// Profile URLs are the ones Richard supplied (Quals - Profiles - Contact.docx).
// TODO(pending): Richard has not supplied Academia or Bluesky URLs. The style
// guide lists both; add them here (and Bluesky to footerProfiles) once he does.
export const profiles = [
  { label: 'ORCID', href: 'https://orcid.org/0000-0001-5894-4600' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=g3nC-XAAAAAJ&hl=en' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/richgsmith/' },
  { label: 'University of Liverpool', href: 'https://www.liverpool.ac.uk/people/richard-george-smith' },
];

// The footer shows a shorter set (the style guide's footer example).
export const footerProfiles = [
  { label: 'ORCID', href: 'https://orcid.org/0000-0001-5894-4600' },
  { label: 'Scholar', href: 'https://scholar.google.com/citations?user=g3nC-XAAAAAJ&hl=en' },
];

/**
 * One entry on the Publications page.
 *
 * `journal` is the venue (journal, publisher, blog or series) and is set in
 * italics in the meta line. `doi` is a full URL. Where there is no DOI, give
 * `url` and `urlLabel` instead (e.g. "Blog post", "Repository").
 */
export type Publication = {
  title: string;
  authors: string;
  journal: string;
  detail?: string; // volume(issue), pages, month, etc.
  year: number;
  doi?: string;
  url?: string;
  urlLabel?: string;
  repository?: string;
  tags?: string[];
  /** "book" sets the title in italics, without quotes. Default "article". */
  kind?: 'article' | 'book' | 'chapter' | 'blog' | 'podcast' | 'report' | 'thesis';
  /** Shown in Home's "Recent work" (Richard's own picks). */
  featured?: boolean;
};

export const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Newest year first; entries within a year keep file order (sort is stable). */
export const groupByYear = (pubs: Publication[]) => {
  const sorted = [...pubs].sort((a, b) => b.year - a.year);
  const years = [...new Set(sorted.map((p) => p.year))];
  return years.map((year) => ({ year, items: sorted.filter((p) => p.year === year) }));
};
