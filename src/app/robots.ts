import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://monsterpizza.sk',
    sitemap: 'https://monsterpizza.sk/sitemap.xml',
  };
}
