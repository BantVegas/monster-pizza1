export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  allergens?: string;
}

export const galleryImages: GalleryImage[] = [
  { 
    src: '/images/img01.jpg', 
    alt: 'Monster Pizza – pizza so salámou a syrom',
    title: 'Salámová pizza',
    description: 'Klasická pizza s pikantnou salámou, mozzarellou a cheddarom na paradajkovom základe.',
    allergens: 'Alergény: 1 (lepok), 7 (mlieko)'
  },
  { 
    src: '/images/2.jpg', 
    alt: 'Monster Pizza – pizza so šunkou a kukuricou',
    title: 'Šunková s kukuricou',
    description: 'Jemná šunka, sladká kukurica, cherry paradajky a mozzarella na paradajkovom základe.',
    allergens: 'Alergény: 1 (lepok), 7 (mlieko)'
  },
  { 
    src: '/images/3.png', 
    alt: 'Monster Pizza – pizza so šampiňónmi',
    title: 'Šampiňónová pizza',
    description: 'Čerstvé šampiňóny, kukurica, mozzarella a smotanový základ pre jemnú chuť.',
    allergens: 'Alergény: 1 (lepok), 7 (mlieko)'
  },
  { 
    src: '/images/4.png', 
    alt: 'Monster Pizza – pizza s klobásou a cibuľou',
    title: 'Klobásová pizza',
    description: 'Domáca klobása, červená cibuľa, paprika a mozzarella na paradajkovom základe.',
    allergens: 'Alergény: 1 (lepok), 7 (mlieko)'
  },
  { 
    src: '/images/5.png', 
    alt: 'Monster Pizza – pizza s červenou cibuľou',
    title: 'Slanina s pažítkou',
    description: 'Chrumkavá slanina, červená cibuľa, čerstvá pažítka na smotanovom základe.',
    allergens: 'Alergény: 1 (lepok), 7 (mlieko)'
  },
  { 
    src: '/images/6.png', 
    alt: 'Monster Pizza – pizza so syrom a kukuricou',
    title: 'Quattro Formaggi',
    description: 'Štyri druhy syra – mozzarella, niva, eidam a cheddar s kukuricou.',
    allergens: 'Alergény: 1 (lepok), 7 (mlieko)'
  },
  { 
    src: '/images/7.jpg', 
    alt: 'Monster Pizza – pizza s rukolou a balzamicom',
    title: 'Rukola s balzamicom',
    description: 'Čerstvá rukola, cherry paradajky, balzamikový krém a parmezán na paradajkovom základe.',
    allergens: 'Alergény: 1 (lepok), 7 (mlieko)'
  },
  { 
    src: '/images/8.png', 
    alt: 'Monster Pizza – náš tím',
    title: 'Náš tím',
    description: 'Spoznajte ľudí, ktorí pre vás s láskou pripravujú každú pizzu.',
    allergens: undefined
  },
  { 
    src: '/images/download.jpg', 
    alt: 'Monster Pizza – Grand Opening akcia',
    title: 'Akcia do 14:00',
    description: 'Všetky pizze za jednu cenu 6,90 € + Kofola zadarmo! Platí denne do 14:00.',
    allergens: undefined
  },
];
