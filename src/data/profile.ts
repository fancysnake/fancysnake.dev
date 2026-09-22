export const profile = {
  name: 'Radosław Ganczarek',
  tagline: 'Code sorcerer / TTRPG bard',
  intro: 'Writing code, songs, and games nobody asked for ✨',
  links: [
    { label: 'GitHub', href: 'https://github.com/fancysnake' },
    { label: 'Medium', href: 'https://medium.com/@radoslaw_jan' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/radoslawganczarek/' },
    { label: 'Email', href: 'mailto:radoslaw@ganczarek.in' },
  ],
};

/** One tile per category, in this order. */
export const categories = ['Apps', 'Quality', 'AI'] as const;

type Repo = {
  /** Bare name for my own repos, `owner/name` for anything else. */
  name: string;
  category: (typeof categories)[number];
  blurb: string;
  language: string;
  /** Second link next to the repo — docs site, live instance, whatever fits. */
  site?: { label: string; href: string };
  /** Path under `public/logos/`. */
  logo?: string;
  /** Bar colour — any CSS colour, usually the project's docs theme. */
  color: string;
};

const sources: Repo[] = [
  {
    name: 'zagrajmy/ludamus',
    category: 'Apps',
    blurb: 'Event management website for conventions and tabletop games. Co-authored.',
    language: 'Python',
    site: { label: 'zagrajmy.net', href: 'https://zagrajmy.net' },
    logo: '/logos/ludamus.svg',
    color: '#f85a3c',
  },
  {
    name: 'vekna',
    category: 'AI',
    blurb: 'Coding agent overseer — rituals that keep an LLM on rails.',
    language: 'Python',
    site: { label: 'Docs', href: 'https://vekna.fancysnake.dev' },
    logo: '/logos/vekna.png',
    color: '#3b4a2a',
  },
  {
    name: 'glimpse-architecture',
    category: 'Quality',
    blurb: 'Framework-agnostic clean architecture for Python projects.',
    language: 'Python',
    logo: '/logos/glimpse.png',
    site: { label: 'Docs', href: 'https://glimpse.fancysnake.dev' },
    color: '#7e56c2',
  },
  {
    name: 'tingle',
    category: 'Quality',
    blurb: 'Spider-sense for refactoring.',
    language: 'Python',
    site: { label: 'Docs', href: 'https://tingle.fancysnake.dev' },
    logo: '/logos/tingle.png',
    color: '#c62828',
  },
  {
    name: 'cantare',
    category: 'Apps',
    blurb: 'Static songbook for singing meetups — search lyrics, flip on chords, sing along.',
    language: 'Astro',
    site: { label: 'Docs', href: 'https://cantare.fancysnake.dev' },
    logo: '/logos/cantare.png',
    color: '#ffec3d',
  },
  {
    name: 'cabinet',
    category: 'AI',
    blurb: 'My collection of vekna rituals and Claude skills.',
    language: 'vekna + Claude Code skills',
    site: { label: 'Docs', href: 'https://cabinet.fancysnake.dev' },
    logo: '/logos/cabinet.png',
    color: '#311b92',
  },
];

export const repos = sources.map((repo) => ({
  ...repo,
  // Bare names live under my account; anything with a slash is already qualified.
  href: `https://github.com/${repo.name.includes('/') ? repo.name : `fancysnake/${repo.name}`}`,
}));
