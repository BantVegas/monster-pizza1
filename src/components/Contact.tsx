'use client';

import { motion } from 'framer-motion';
import { Mail, Clock, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/contactInfo';

export default function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 border-t border-[#c9a227]/15 bg-[#38342f] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#e8c547]">Kontakt</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] font-semibold text-[#f2ebe3]">
            Príďte osobne
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#9a928a]">
            Tešíme sa na vás v <span className="font-semibold text-[#f2ebe3]">Shopping Palace</span>. Rozvoz
            nerealizujeme — pizzu vždy na{' '}
            <span className="font-semibold text-[#e8c547]">osobný odber</span> v prevádzke. Napíšte nám na{' '}
            <a
              href={`mailto:${contactInfo.email}`}
              className="font-semibold text-[#e8c547] underline-offset-4 hover:underline"
            >
              e-mail
            </a>
            .
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/[0.1] bg-black/22 p-8 backdrop-blur-xl"
          >
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl border border-[#c9a227]/35 bg-[#c9a227]/10 text-[#e8c547]">
              <Clock size={24} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#f2ebe3]">Otváracie hodiny</h3>
            <div className="mt-3 space-y-2 text-[#9a928a]">
              <p>{contactInfo.openingHours.weekdays}</p>
              <p>{contactInfo.openingHours.weekends}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl border border-white/[0.1] bg-black/22 p-8 backdrop-blur-xl"
          >
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl border border-[#c9a227]/35 bg-[#c9a227]/10 text-[#e8c547]">
              <Mail size={24} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#f2ebe3]">E-mail</h3>
            <div className="mt-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="break-all text-lg font-semibold text-[#e8c547] hover:underline"
              >
                {contactInfo.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-white/[0.1] bg-black/22 p-8 backdrop-blur-xl md:col-span-2"
          >
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl border border-[#c9a227]/35 bg-[#c9a227]/10 text-[#e8c547]">
              <MapPin size={24} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#f2ebe3]">Adresa</h3>
            <p className="mt-3 text-[#9a928a]">{contactInfo.address}</p>
            <div className="mt-5 flex justify-center">
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#b8860b] via-[#d4af37] to-[#b8860b] px-5 py-3 text-sm font-bold text-[#1a150d] no-underline hover:brightness-110 sm:w-auto"
              >
                <MapPin size={18} />
                Mapa
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
