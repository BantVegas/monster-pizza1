'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Instagram } from 'lucide-react';
import { contactInfo } from '@/data/contactInfo';

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 md:py-28 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Kontakt
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/70 max-w-2xl mx-auto">
            Tešíme sa na vašu návštevu alebo telefonát
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#e63946] to-[#f4a261] rounded-2xl flex items-center justify-center mb-6">
              <Clock size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Otváracie hodiny</h3>
            <div className="space-y-2 text-[#1a1a1a]/70">
              <p>{contactInfo.openingHours.weekdays}</p>
              <p>{contactInfo.openingHours.weekends}</p>
            </div>
          </motion.div>

          {/* Phone & Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#e63946] to-[#f4a261] rounded-2xl flex items-center justify-center mb-6">
              <Phone size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Kontaktujte nás</h3>
            <div className="space-y-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-[#1a1a1a]/70 hover:text-[#e63946] transition-colors"
              >
                <Phone size={20} />
                {contactInfo.phoneFormatted}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-[#1a1a1a]/70 hover:text-[#e63946] transition-colors break-all"
              >
                <Mail size={20} className="flex-shrink-0" />
                {contactInfo.email}
              </a>
            </div>
          </motion.div>

          {/* Location & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-lg md:col-span-2 lg:col-span-1"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#e63946] to-[#f4a261] rounded-2xl flex items-center justify-center mb-6">
              <MapPin size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Kde nás nájdete</h3>
            <p className="text-[#1a1a1a]/70 mb-6">{contactInfo.address}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#c62b38] text-white px-5 py-3 rounded-2xl font-semibold transition-colors"
              >
                <MapPin size={18} />
                Zobraziť na mape
              </a>
              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white px-5 py-3 rounded-2xl font-semibold transition-colors"
              >
                <Instagram size={18} />
                Sme na Instagrame
              </a>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href={`tel:${contactInfo.phone}`}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e63946] to-[#f4a261] hover:from-[#c62b38] hover:to-[#e8944f] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-lg"
          >
            <Phone size={24} />
            Zavolajte nám: {contactInfo.phoneFormatted}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
