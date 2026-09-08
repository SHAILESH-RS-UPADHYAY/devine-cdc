import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/thank-you'],
    },
    sitemap: 'https://devinecdc.in/sitemap.xml',
  };
}
