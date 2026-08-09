export const profile = {
  name: 'Radosław Ganczarek',
  tagline: 'Human Sorcerer/Bard',
  intro:
    'Backend developer in Wrocław. Python, Django, and a long-running interest in ' +
    'architecture that survives contact with a real codebase.',
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
  docs?: string;
};

const sources: Repo[] = [
  {
    name: 'zagrajmy/ludamus',
    blurb: 'Event management website for conventions and tabletop games. Co-authored.',
    language: 'Python',
  },
  {
    name: 'vekna',
    blurb: 'Coding agent overseer — rituals that keep an LLM on rails.',
    language: 'Python',
    docs: 'https://vekna.fancysnake.dev',
  },
  {
    name: 'glimpse-architecture',
    blurb: 'Framework-agnostic clean architecture for Python projects.',
    language: 'Python',
    docs: 'https://glimpse.fancysnake.dev',
  },
  {
    name: 'tingle',
    blurb: 'Spider-sense for refactoring.',
    language: 'Python',
    docs: 'https://tingle.fancysnake.dev',
  },
  {
    name: 'exemplar',
    blurb: 'Template repo for Python projects.',
    language: 'Jinja',
  },
  {
    name: 'acervus',
    blurb: 'Filesystem tagging tool.',
    language: 'Python',
  },
  {
    name: 'clon',
    blurb: 'Clon Locates Obvious Nonsense.',
    language: 'Python',
  },
];

export const repos = sources.map((repo) => ({
  ...repo,
  // Bare names live under my account; anything with a slash is already qualified.
  href: `https://github.com/${repo.name.includes('/') ? repo.name : `fancysnake/${repo.name}`}`,
}));
