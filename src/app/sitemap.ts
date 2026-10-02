import { MetadataRoute } from 'next';
import { SITE_CONFIG, THERAPIES } from '@/lib/constants';

type Freq = MetadataRoute.Sitemap[number]['changeFrequency'];

const PAGES: [path: string, priority: number, freq: Freq][] = [
  ['', 1, 'weekly'],
  ['/consultation', 0.9, 'monthly'],
  ['/programs', 0.9, 'monthly'],
  ['/therapies', 0.9, 'monthly'],
  ['/about', 0.8, 'monthly'],
  ['/team', 0.6, 'monthly'],
  ['/resources', 0.7, 'weekly'],
  ['/faq', 0.7, 'monthly'],
  ['/contact', 0.8, 'monthly'],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = PAGES.map(([path, priority, changeFrequency]) => ({
    url: `${SITE_CONFIG.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
  const therapyPages = THERAPIES.map((t) => ({
    url: `${SITE_CONFIG.url}${t.href}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  return [...pages, ...therapyPages];
}
