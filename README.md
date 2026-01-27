# Monster Pizza v Shopping Palace

Moderný landing page pre pizzeriu Monster Pizza v Shopping Palace, Bratislava.

## Tech Stack

- **Next.js 16** (App Router) + TypeScript
- **TailwindCSS v4** - styling
- **Framer Motion** - animácie
- **Lucide React** - ikony
- **next/image** - optimalizácia obrázkov

## Inštalácia

```bash
npm install
```

## Vývoj

```bash
npm run dev
```

Otvorte [http://localhost:3000](http://localhost:3000) v prehliadači.

## Build

```bash
npm run build
```

## Produkcia

```bash
npm run start
```

## Štruktúra projektu

```
monster-pizza/
├── public/
│   └── images/
│       └── gallery/          # Obrázky galérie (img01.jpg - img09.jpg)
├── src/
│   ├── app/
│   │   ├── globals.css       # Globálne štýly
│   │   ├── layout.tsx        # Root layout s SEO
│   │   ├── page.tsx          # Hlavná stránka
│   │   ├── robots.ts         # robots.txt
│   │   └── sitemap.ts        # sitemap.xml
│   ├── components/
│   │   ├── Header.tsx        # Navigácia (sticky, transparent → solid)
│   │   ├── Hero.tsx          # Hero sekcia
│   │   ├── PromoBar.tsx      # Promo banner
│   │   ├── About.tsx         # O nás + benefit karty
│   │   ├── Gallery.tsx       # Galéria obrázkov
│   │   ├── LightboxModal.tsx # Lightbox pre galériu
│   │   ├── Contact.tsx       # Kontaktná sekcia
│   │   └── Footer.tsx        # Pätička
│   └── data/
│       ├── contactInfo.ts    # Kontaktné údaje
│       ├── galleryImages.ts  # Zoznam obrázkov
│       └── navLinks.ts       # Navigačné odkazy
└── package.json
```

## Obrázky

Nahrajte svoje obrázky do `public/images/gallery/` s názvami:
- img01.jpg, img02.jpg, ... img09.jpg

## Konfigurácia

### Kontaktné údaje
Upravte súbor `src/data/contactInfo.ts`:
- Telefón
- Email
- Instagram URL
- Google Maps URL
- Adresa

### SEO
Upravte metadata v `src/app/layout.tsx` a JSON-LD schema v `src/app/page.tsx`.

## Deploy na Vercel

```bash
npx vercel
```

Alebo pripojte GitHub repozitár na [vercel.com](https://vercel.com).

## Licencia

© 2026 Monster Pizza v Shopping Palace
