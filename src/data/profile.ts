export const profile = {
  name: 'Radosław Ganczarek',
  tagline: 'Code sorcerer / TTRPG bard',
  intro: 'Writing code, songs, and games nobody asked for ✨',
  /** `icon` is an SVG path on a 24×24 viewBox (Simple Icons for the brands). */
  links: [
    {
      label: 'GitHub',
      href: 'https://github.com/fancysnake',
      icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
    },
    {
      label: 'Medium',
      href: 'https://medium.com/@radoslaw_jan',
      icon: 'M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/radoslawganczarek/',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
    {
      label: 'Email',
      href: 'mailto:radoslaw@ganczarek.in',
      icon: 'M2 4h20a1 1 0 0 1 1 1v.6l-11 7-11-7V5a1 1 0 0 1 1-1zm-1 4.4l11 7 11-7V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V8.4z',
    },
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
