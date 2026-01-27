import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monster Pizza v Shopping Palace | Poctivá pizza v Bratislave",
  description:
    "Monster Pizza v Shopping Palace - malý rodinný podnik s poctivou pizzou za férové ceny. Kvalitné suroviny, rodinná atmosféra. Do 14:00 pizza 33cm za 6,90€ + Kofola zadarmo!",
  keywords: [
    "pizza",
    "Monster Pizza",
    "Shopping Palace",
    "Bratislava",
    "rodinná pizzeria",
    "poctivá pizza",
  ],
  authors: [{ name: "Monster Pizza" }],
  openGraph: {
    title: "Monster Pizza v Shopping Palace",
    description:
      "Poctivá pizza za férové ceny v Shopping Palace Bratislava. Rodinná atmosféra a kvalitné suroviny.",
    url: "https://monsterpizza.sk",
    siteName: "Monster Pizza",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/images/gallery/img01.jpg",
        width: 1200,
        height: 630,
        alt: "Monster Pizza v Shopping Palace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monster Pizza v Shopping Palace",
    description:
      "Poctivá pizza za férové ceny v Shopping Palace Bratislava.",
    images: ["/images/gallery/img01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
