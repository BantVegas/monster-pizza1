'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/contactInfo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/img01.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/60 to-[#1a1a1a]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
        >
          Kde to vonia domovom, dobrou náladou a poctivou pizzou.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto space-y-4"
        >
          <p>
            V Shopping Palace máme novú hviezdu – Monster Pizza. Malý rodinný podnik, 
            ktorý nerobí žiadnu vedu, len poctivú pizzu za férové ceny, úsmev a ochotu. 
            Presne tak, ako to má byť.
          </p>
          <p>
            Či prídete po rýchly obed, pizzu pre celú rodinu alebo len tak na jeden 
            „kúsok pokoja po ceste domov", Monster Pizza je miesto, kde sa vždy cítite vítaní.
          </p>
          <p>
            Úprimní ľudia, jednoduché menu, žiadne pózy – len kvalitné suroviny a chuť, ktorá nezradí.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-2 bg-[#e63946] hover:bg-[#c62b38] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
          >
            <Phone size={22} />
            Zavolať
          </a>
          <a
            href={contactInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105"
          >
            <MapPin size={22} />
            Zobraziť na mape
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
