/** Galéria ako na monsterpizza.eu/galeria — rovnaké položky a cesty k /images/* */
export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    title: 'Pikantná pizza s klobásou',
    description:
      'Bohatá pikantná pizza s klobásou, červenou cibuľou a cherry paradajkami. Chrumkavá kôrka a roztopený syr — presne taká, akú ju milujete.',
    src: '/images/pizza-mexicana.jpg',
    alt: 'Monster Pizza - pikantná pizza s klobásou a červenou cibuľou v krabici',
  },
  {
    title: 'Smotanová pizza so šunkou',
    description:
      'Jemná smotanová pizza so šunkou, červenou cibuľou a čerstvou pažítkou. Krémový základ, ktorý si zamilujete od prvého kúsku.',
    src: '/images/pizza-smotanova.jpg',
    alt: 'Monster Pizza - smotanová pizza so šunkou, cibuľou a pažítkou',
  },
  {
    title: 'Vegetariánska s rukolou',
    description:
      'Čerstvá vegetariánska pizza s rukolou, cherry paradajkami, kukuricou a balzamikovým krémom. Ľahká, svieža a plná chutí.',
    src: '/images/pizza-vegetarianska.jpg',
    alt: 'Monster Pizza - vegetariánska pizza s rukolou, paradajkami a balzamikom',
  },
  {
    title: 'Dvojica pizz na tanieroch',
    description:
      'Vegetariánska pizza s rukolou vedľa syrovej pizze so šampiňónmi. Servírované na tanieroch priamo v našej prevádzke v Shopping Palace.',
    src: '/images/pizza-dvojica.jpg',
    alt: 'Monster Pizza - dve pizze na tanieroch v prevádzke Shopping Palace Bratislava',
  },
  {
    title: 'Sedliacka pizza',
    description:
      'Pomodoro, mozzarella, červená cibuľa, saláma, klobása, slanina a štipka pikantných paprík. Poctivá „sedliacka“ chuť priamo z krabice.',
    src: '/images/pizza-sedliacka.png',
    alt: 'Monster Pizza - Sedliacka pizza v krabici s klobásou, salámou, slaninou, červenou cibuľou a syrom',
  },
  {
    title: 'Slovenský posúch',
    description:
      'Smotanový základ, syr, oravská slanina a jarná cibuľka. Slovenská klasika v podaní Monster Pizza.',
    src: '/images/pizza-posuch.jpg',
    alt: 'Monster Pizza - Slovenský posúch so smotanovým základom a oravskou slaninou',
  },
  {
    title: 'Bryndzová pizza',
    description:
      'Smotanový základ, oravská slanina, bryndza a jarná cibuľka. Jedinečná kombinácia slovenskej tradície a talianskej pizze.',
    src: '/images/pizza-bryndzova.jpg',
    alt: 'Monster Pizza - Bryndzová pizza s oravskou slaninou a jarnou cibuľkou',
  },
  {
    title: 'Margherita pizza',
    description: 'Jednoduchá, no dokonalá — pomodoro a syr. Klasika, ktorá nikdy nezklame.',
    src: '/images/pizza-margherita.jpg',
    alt: 'Monster Pizza - Margherita pizza s pomodoro a syrom',
  },
  {
    title: 'Salámová Classic pizza',
    description: 'Pomodoro, syr a peperóny. Obľúbená voľba našich zákazníkov.',
    src: '/images/pizza-salamova.jpg',
    alt: 'Monster Pizza - Salámová Classic pizza s peperónmi',
  },
  {
    title: 'Šunková pizza',
    description: 'Pomodoro, šunka a syr. Jednoduchá a chutná pizza pre celú rodinu.',
    src: '/images/pizza-sunkova.jpg',
    alt: 'Monster Pizza - Šunková pizza s pomodoro a šunkou',
  },
];
