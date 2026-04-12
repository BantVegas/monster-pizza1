'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { galleryImages } from '@/data/galleryImages';
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
            Kliknite na obrázok pre zväčšenie. Nové vizuály v prémiovom štýle Monster Pizza.
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
