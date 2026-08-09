import { XMLParser } from 'fast-xml-parser';

const FEED = 'https://medium.com/feed/@radoslaw_jan';

export type Article = {
  title: string;
  href: string;
  date: string;
};

/**
 * Reads the Medium feed at build time. A failing feed degrades to an empty
 * list rather than a failing build — the rest of the page still ships.
 */
export async function fetchArticles(limit = 5): Promise<Article[]> {
  let xml: string;
  try {
    const response = await fetch(FEED);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    xml = await response.text();
  } catch (error) {
    console.warn(`[medium] feed unavailable, skipping articles: ${error}`);
    return [];
  }

  const parsed = new XMLParser().parse(xml);
  const items = parsed?.rss?.channel?.item;
  const list = Array.isArray(items) ? items : items ? [items] : [];

  return list.slice(0, limit).map((item) => ({
    title: String(item.title),
    href: String(item.link).split('?')[0],
    date: new Date(item.pubDate).toISOString().slice(0, 10),
  }));
}
