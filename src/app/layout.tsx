import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Playfair_Display, Source_Sans_3 } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { contactInfo } from "@/data/contactInfo";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3d3834",
  colorScheme: "dark",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Monster Pizza",
  url: "https://monsterpizza.sk",
  inLanguage: "sk-SK",
  publisher: {
    "@type": "Organization",
    name: "Monster Pizza",
    url: "https://monsterpizza.sk",
    telephone: contactInfo.businessPhoneE164,
    logo: {
      "@type": "ImageObject",
      url: "https://monsterpizza.sk/logo.png",
    },
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://monsterpizza.sk"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  title: "Monster Pizza Shopping Palace Bratislava | Metrová pizza | Osobný odber",
  description:
    "Monster Pizza v Shopping Palace, Bratislava: poctivá pizza v nákupnom centre, metrová pizza One Meter Food, férové ceny. Výhradne osobný odber v prevádzke.",
  keywords: [
    "Monster Pizza",
    "pizza Shopping Palace",
    "Shopping Palace Bratislava pizza",
    "pizza Bratislava",
    "metrová pizza Slovensko",
    "One Meter Food",
    "osobný odber pizza Bratislava",
    "pizzeria Shopping Palace",
    "MonsterLab pizza",
    "súhrnný web Monster Pizza",
    "objednávka pizza Bratislava",
    "poctivá pizza",
  ],
  authors: [{ name: "Monster Pizza" }],
  creator: "Monster Pizza",
  publisher: "Monster Pizza",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Monster Pizza Shopping Palace Bratislava",
    description:
      "Pizza v Shopping Palace: metrová pizza, osobný odber, férové ceny. Monster Pizza Bratislava.",
    url: "https://monsterpizza.sk",
    siteName: "Monster Pizza",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/images/brand/hero-kids-1.png",
        width: 1200,
        height: 630,
        alt: "Monster Pizza — deti, pizza a letná rodinná atmosféra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monster Pizza Shopping Palace Bratislava",
    description:
      "Pizza v Shopping Palace, Bratislava. Metrová pizza, osobný odber.",
    images: ["/images/brand/hero-kids-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${display.variable} ${serif.variable} ${sans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="grain min-h-full bg-[#3d3834] font-sans text-[#f2ebe3]">
        <JsonLd data={websiteJsonLd} />
        {children}
      </body>
    </html>
  );
}
