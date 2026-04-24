/** Galéria zladená s jedálnym lístkom (33 / 50 cm) — rovnaká ponuka ako na monsterpizza.eu/menu. */
export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    title: "Salámová Classic · 50 cm",
    description: "Pomodoro, mozzarella a saláma — klasika v prémiovom priemere 50 cm.",
    src: "/images/pizza-salamova.jpg",
    alt: "Monster Pizza — Salámová Classic 50 cm",
  },
  {
    title: "Slovenský posuch · 33 cm",
    description:
      "Smotanový základ, syr, slanina a pažítka.",
    src: "/images/pizza-posuch.jpg",
    alt: "Monster Pizza — Slovenský posuch 33 cm",
  },
  {
    title: "Prosciutto Crudo · bezlepkové cesto · 33 cm",
    description:
      "Mozzarella, prosciutto crudo a čerstvá rukola pridaná po upečení — bezlepkové cesto.",
    src: "/images/pizza-dvojica.jpg",
    alt: "Monster Pizza — Prosciutto Crudo bezlepkové cesto 33 cm",
  },
  {
    title: "Slovenský posuch s cibuľou · 33 cm",
    description: "Smotanový základ, syr, slanina, cibuľa a pažítka.",
    src: "/images/pizza-smotanova.jpg",
    alt: "Monster Pizza — Slovenský posuch s cibuľou 33 cm",
  },
  {
    title: "Margherita · 33 cm",
    description: "Pomodoro, mozzarella a bazalka — nestarnúca klasika.",
    src: "/images/pizza-margherita.jpg",
    alt: "Monster Pizza — Margherita 33 cm",
  },
  {
    title: "Vegetariána · 33 cm",
    description:
      "Cherry paradajky, paprika, kukurica, rukola a balzamiko — ľahšia voľba bez mäsa.",
    src: "/images/pizza-vegetarianska.jpg",
    alt: "Monster Pizza — vegetariánska pizza 33 cm",
  },
  {
    title: "Hawai · 33 cm",
    description: "Pomodoro, mozzarella, šunka a ananás.",
    src: "/images/pizza-hawai-33.png",
    alt: "Monster Pizza — Hawai 33 cm",
  },
  {
    title: "Salámová pikant · 33 cm",
    description: "Pomodoro, mozzarella, saláma a jalapeño.",
    src: "/images/pizza-salamova-pikant-33.png",
    alt: "Monster Pizza — Salámová pikant 33 cm",
  },
  {
    title: "Quattro formaggi · 33 cm",
    description: "Pomodoro, mozzarella, gorgonzola, parmezán, ementál.",
    src: "/images/pizza-quattro-formaggi-33.png",
    alt: "Monster Pizza — Quattro formaggi 33 cm",
  },
  {
    title: "Prosciutto e funghi · 33 cm",
    description: "Pomodoro, mozzarella, šunka a šampiňóny.",
    src: "/images/pizza-prosciutto-funghi-33.png",
    alt: "Monster Pizza — Prosciutto e funghi 33 cm",
  },
  {
    title: "Kukuricová · 33 cm",
    description: "Pomodoro, mozzarella, kukurica a šunka.",
    src: "/images/pizza-kukuricova-33.png",
    alt: "Monster Pizza — Kukuricová 33 cm",
  },
  {
    title: "Šunková · 33 cm",
    description: "Pomodoro, mozzarella a šunka.",
    src: "/images/pizza-sunkova-33.png",
    alt: "Monster Pizza — Šunková 33 cm",
  },
];

export const prevadzkaMomentPhoto = {
  src: "/images/prevadzka-styri-pizze.png",
  alt: "Hostia pri pulte so štyrmi pizzami v Monster Pizza, Shopping Palace",
  width: 300,
  height: 399,
} as const;

