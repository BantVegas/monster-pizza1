import { SITE_URLS } from '@/data/siteUrls';

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Pre vás', href: '#pre-vas' },
  { label: 'O nás', href: SITE_URLS.eu },
  { label: 'Metrová pizza', href: SITE_URLS.online },
  { label: 'Galéria', href: '#galeria' },
  { label: 'Kontakt', href: '#kontakt' },
];
