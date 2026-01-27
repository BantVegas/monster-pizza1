'use client';

import { motion } from 'framer-motion';

export default function PromoBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#e63946] to-[#f4a261] py-5 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white text-lg sm:text-xl md:text-2xl font-bold">
          👉 Do 14:00: 33 cm pizza za 6,90 € + Kofola ZADARMO.
        </p>
      </div>
    </motion.section>
  );
}
