'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { galleryImages, prevadzkaMomentPhoto } from '@/data/galleryImages';
import LightboxModal from './LightboxModal';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="galeria" className="scroll-mt-24 border-t border-[#c9a227]/15 bg-[#2f2b27] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#e8c547]">Galéria</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] font-semibold text-[#f2ebe3]">
            Chuť, ktorú vidíte
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#9a928a]">
            Rovnaká ponuka ako na jedálnom lístku — veľkosti 33 cm a 50 cm, metrová{' '}
            <span className="font-semibold text-[#e8c547]/95">One Meter Food</span> osobitne. Kliknite na obrázok pre
            zväčšenie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.article
              key={`${image.src}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="mp-card-hover overflow-hidden rounded-2xl border border-[#c9a227]/25 bg-black/25 shadow-[0_20px_48px_rgba(0,0,0,0.25)]"
            >
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative block w-full cursor-zoom-in text-left"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
                </div>
              </button>
              <div className="border-t border-[#c9a227]/15 p-5">
                <h3 className="font-serif text-xl font-semibold text-[#f2ebe3]">{image.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9a928a]">{image.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-[#c9a227]/25 bg-[#161412]"
          >
            <div className="flex justify-center bg-black/80 px-2 py-3 sm:px-4">
              <img
                src={prevadzkaMomentPhoto.src}
                alt={prevadzkaMomentPhoto.alt}
                width={prevadzkaMomentPhoto.width}
                height={prevadzkaMomentPhoto.height}
                className="h-auto max-h-[min(88vh,820px)] w-auto max-w-full rounded-t-xl object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="border-t border-[#c9a227]/20 px-5 py-5 sm:px-8 sm:py-6">
              <p className="m-0 text-base font-semibold text-[#f2ebe3] sm:text-lg">Dvaja hostia, štyri pizze</p>
              <p className="mt-2 m-0 text-sm leading-relaxed text-[#9a928a] sm:text-base">
                Monster Pizza, Shopping Palace — moment z prevádzky. Jedna pizza len málokedy stačí: keď je
                cesto chrumkavé, syr ťahavý a partia v poriadku, druhá (a často aj tretia) si na stôl nájde
                cestu úplne sama. Preto sme tu — od jedného kusu po celý meter.
              </p>
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-[#c9a227]/25 bg-[#161412]"
          >
            <div className="flex justify-center bg-black/80 px-2 py-3 sm:px-4">
              <img
                src="/images/caputo-flour.png"
                alt="Talianska múka Caputo Pizzeria — Farina di Grano Tenero Tipo 00, používaná v Monster Pizza"
                width={1200}
                height={900}
                className="h-auto max-h-[min(88vh,820px)] w-auto max-w-full rounded-t-xl object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="border-t border-[#c9a227]/20 px-5 py-5 sm:px-8 sm:py-6">
              <p className="m-0 text-base font-semibold text-[#f2ebe3] sm:text-lg">Talianska kvalita v každom ceste</p>
              <p className="mt-2 m-0 text-sm leading-relaxed text-[#9a928a] sm:text-base">
                Používame výhradne taliansku múku Caputo Pizzeria — Tipo &quot;00&quot;, ktorú si vyberajú
                najlepšie pizzerie na svete. Kvalitné suroviny priamo z Talianska sú základom každej
                našej pizze, pretože na chuti sa nešetrí.
              </p>
            </figcaption>
          </motion.figure>
        </div>
      </div>

      <LightboxModal
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </section>
  );
}
