import { Header, Hero, PromoBar, About, Gallery, Contact, Footer } from '@/components';
import { contactInfo } from '@/data/contactInfo';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Monster Pizza v Shopping Palace',
    image: '/images/gallery/img01.jpg',
    '@id': 'https://monsterpizza.sk',
    url: 'https://monsterpizza.sk',
    telephone: contactInfo.phone,
    email: contactInfo.email,
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
    servesCuisine: 'Pizza',
    priceRange: '€',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <PromoBar />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
