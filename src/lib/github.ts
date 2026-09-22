const API = 'https://api.github.com/repos/';

async function lastPush(href: string): Promise<string | undefined> {
  const response = await fetch(API + href.replace('https://github.com/', ''));
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return (await response.json()).pushed_at;
}

/**
 * Orders repos newest push first, asking GitHub at build time. A repo the API
 * won't answer for keeps its hand-written position, after the dated ones —
 * the page still ships.
 */
export async function byLastPush<T extends { href: string }>(repos: T[]): Promise<T[]> {
  const dated = await Promise.all(
    repos.map(async (repo) => {
      try {
        return { repo, pushed: await lastPush(repo.href) };
      } catch (error) {
        console.warn(`[github] ${repo.href} unavailable, keeping hand order: ${error}`);
        return { repo, pushed: undefined };
      }
    }),
  );
  // ISO timestamps sort lexically; '' puts the undated last. sort is stable.
  return dated
    .sort((a, b) => (b.pushed ?? '').localeCompare(a.pushed ?? ''))
    .map(({ repo }) => repo);
}
