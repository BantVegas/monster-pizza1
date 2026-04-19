/** Galéria zladená s jedálnym lístkom (33 / 50 cm) — rovnaká ponuka ako na monsterpizza.eu/menu. */
export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    title: "Sedliacka · 50 cm",
    description:
      "Paradajkový základ, syr, šunka, saláma, klobása a cibuľa — veľký formát z prevádzky, ideálny na zdieľanie.",
    src: "/images/pizza-sedliacka.png",
    alt: "Monster Pizza — Sedliacka pizza 50 cm v krabici",
  },
  {
    title: "Salámová Classic · 50 cm",
    description: "Pomodoro, mozzarella a saláma — klasika v prémiovom priemere 50 cm.",
    src: "/images/pizza-salamova.jpg",
    alt: "Monster Pizza — Salámová Classic 50 cm",
  },
  {
    title: "Provinciale · 50 cm",
    description:
      "Paprika, saláma, kukurica, feferónky a syr; na želanie bez papričiek alebo navyše s cibuľou.",
    src: "/images/pizza-posuch.jpg",
    alt: "Monster Pizza — Provinciale 50 cm",
  },
  {
    title: "Provinciale s Nivou · 50 cm",
    description: "Šunka, kukurica, cibuľa, syr a plesňový syr Niva na paradajkovom základe.",
    src: "/images/pizza-bryndzova.jpg",
    alt: "Monster Pizza — Provinciale s Nivou 50 cm",
  },
  {
    title: "Šunková · kukurica · cibuľa · 50 cm",
    description: "Pomodoro, šunka, kukurica, cibuľa a syr — výrazná kombinácia z prevádzky.",
    src: "/images/pizza-mexicana.jpg",
    alt: "Monster Pizza — šunková pizza s kukuricou a cibuľou 50 cm",
  },
  {
    title: "Prosciutto Crudo · 50 cm",
    description:
      "Mozzarella, prosciutto crudo a čerstvá rukola pridaná po upečení — jemná a výrazná chuť.",
    src: "/images/pizza-dvojica.jpg",
    alt: "Monster Pizza — Prosciutto Crudo so rukolou 50 cm",
  },
  {
    title: "Trhaná šunka · 33 cm",
    description: "Paradajkový základ, trhaná šunka a syr — menší priemer, rovnaká poctivosť.",
    src: "/images/pizza-smotanova.jpg",
    alt: "Monster Pizza — Trhaná šunka 33 cm",
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
];

export const prevadzkaMomentPhoto = {
  src: "/images/prevadzka-styri-pizze.png",
  alt: "Hostia pri pulte so štyrmi pizzami v Monster Pizza, Shopping Palace",
  width: 300,
  height: 399,
} as const;

