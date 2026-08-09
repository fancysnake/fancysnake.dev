export const profile = {
  name: 'Radosław Ganczarek',
  tagline: 'Code sorcerer / TTRPG bard',
  intro:
    'Most of the code with my name on it is written by an agent these days. That ' +
    'makes architecture and tooling the only real lever left on quality — code now ' +
    'arrives faster than anyone can review it, so the guardrails have to live in the ' +
    'structure, not the review queue. I build small Python tools for that, and write ' +
    'about what I find.',
  links: [
    { label: 'GitHub', href: 'https://github.com/fancysnake' },
    { label: 'Medium', href: 'https://medium.com/@radoslaw_jan' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/radoslawganczarek/' },
    { label: 'Email', href: 'mailto:radoslaw@ganczarek.in' },
  ],
};

type Repo = {
  /** Bare name for my own repos, `owner/name` for anything else. */
  name: string;
  blurb: string;
  language: string;
  /** Second link next to the repo — docs site, live instance, whatever fits. */
  site?: { label: string; href: string };
  /** Path under `public/logos/`. */
  logo?: string;
};

const sources: Repo[] = [
  {
    name: 'zagrajmy/ludamus',
    blurb: 'Event management website for conventions and tabletop games. Co-authored.',
    language: 'Python',
    site: { label: 'zagrajmy.net', href: 'https://zagrajmy.net' },
    logo: '/logos/ludamus.svg',
  },
  {
    name: 'vekna',
    blurb: 'Coding agent overseer — rituals that keep an LLM on rails.',
    language: 'Python',
    site: { label: 'Docs', href: 'https://vekna.fancysnake.dev' },
    logo: '/logos/vekna.png',
  },
  {
    name: 'glimpse-architecture',
    blurb: 'Framework-agnostic clean architecture for Python projects.',
    language: 'Python',
    logo: '/logos/glimpse.png',
    site: { label: 'Docs', href: 'https://glimpse.fancysnake.dev' },
  },
  {
    name: 'tingle',
    blurb: 'Spider-sense for refactoring.',
    language: 'Python',
    site: { label: 'Docs', href: 'https://tingle.fancysnake.dev' },
    logo: '/logos/tingle.png',
  },
];

export const repos = sources.map((repo) => ({
  ...repo,
  // Bare names live under my account; anything with a slash is already qualified.
  href: `https://github.com/${repo.name.includes('/') ? repo.name : `fancysnake/${repo.name}`}`,
}));
