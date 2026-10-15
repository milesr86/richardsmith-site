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

// TODO(placeholder): every href below is "#". Swap in the real profile URLs.
export const profiles = [
  { label: 'ORCID', href: '#' },
  { label: 'Google Scholar', href: '#' },
  { label: 'Academia', href: '#' },
  { label: 'Bluesky', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

// The footer shows a shorter set (the style guide's footer example).
export const footerProfiles = [
  { label: 'ORCID', href: '#' },
  { label: 'Scholar', href: '#' },
  { label: 'Bluesky', href: '#' },
];

export type Publication = {
  title: string;
  authors: string;
  journal: string;
  detail?: string; // volume(issue), pages, etc.
  year: number;
  doi: string;
  repository?: string;
  tags?: string[];
};

export const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
