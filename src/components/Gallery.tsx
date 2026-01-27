'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AlertTriangle } from 'lucide-react';
import { galleryImages } from '@/data/galleryImages';
import LightboxModal from './LightboxModal';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="galeria" className="py-20 md:py-28 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Naše pizze
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Nahliadnite do našej kuchyne a pozrite si naše výtvory. Kliknite na obrázok pre zväčšenie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#2d2d2d] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div 
                className="relative aspect-[4/3] cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                <p className="text-white/70 text-sm mb-3">{image.description}</p>
                {image.allergens && (
                  <div className="flex items-start gap-2 text-[#f4a261] text-xs">
                    <AlertTriangle size={14} className="mt-0.5 flex-shrink-0" />
                    <span>{image.allergens}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Allergen Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 bg-[#2d2d2d] rounded-2xl"
        >
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle size={18} className="text-[#f4a261]" />
            Zoznam alergénov
          </h4>
          <p className="text-white/60 text-sm leading-relaxed">
            1 – Obilniny obsahujúce lepok | 2 – Kôrovce | 3 – Vajcia | 4 – Ryby | 
            5 – Arašidy | 6 – Sója | 7 – Mlieko | 8 – Orechy | 9 – Zeler | 
            10 – Horčica | 11 – Sezam | 12 – Oxid siričitý | 13 – Vlčí bôb | 14 – Mäkkýše
          </p>
        </motion.div>
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
