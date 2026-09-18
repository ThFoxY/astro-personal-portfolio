// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'David Melocco',
  role: 'Junior full-stack developer with hope and dreams',
  email: 'davidmel7562@gmail.com',
  tagline: 'I design and build interfaces that hold up under real use.',
  description:
    'Portfolio of David Melocco — product design and frontend engineering, with an emphasis on speed, clarity, and the details most people skip.',
  status: 'Currently building at Studio Co · open to new work, Q3 2026',
  social: [
    { label: 'GitHub', href: 'https://github.com/ThFoxY' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/david-melocco-4ba965341/' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
] as const;
