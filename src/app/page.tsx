import { Header, Hero, FamilySummerBar, Gallery, Contact, Footer } from '@/components';
import { contactInfo } from '@/data/contactInfo';
import { SITE_URLS } from '@/data/siteUrls';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Monster Pizza v Shopping Palace',
    image: 'https://monsterpizza.sk/images/brand/hero-kids-1.png',
    '@id': 'https://monsterpizza.sk',
    url: SITE_URLS.sk,
    email: contactInfo.email,
    description:
      'Monster Pizza v Shopping Palace, Bratislava: poctivá pizza v nákupnom centre, metrová pizza (One Meter Food). Objednávky výhradne osobne v prevádzke — bez rozvozu.',
    sameAs: [SITE_URLS.eu, SITE_URLS.online],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shopping Palace',
      addressLocality: 'Bratislava',
      addressCountry: 'SK',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '11:00',
        closes: '20:00',
      },
    ],
    servesCuisine: ['Pizza', 'Metrová pizza'],
    knowsAbout: ['Metrová pizza', 'One Meter Food', 'Shopping Palace Bratislava'],
    priceRange: '€',
  };

  return (
    <div className="flex min-h-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <FamilySummerBar />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
