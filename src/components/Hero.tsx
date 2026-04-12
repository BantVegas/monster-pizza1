'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { contactInfo } from '@/data/contactInfo';
import { SITE_URLS } from '@/data/siteUrls';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/brand/hero-kids-1.png"
          alt="Letná rodinná atmosféra — deti a pizza pri stole v teplom zlatom svetle"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-linear-to-r from-black/72 via-black/45 to-black/25 sm:from-black/65 sm:via-black/38 sm:to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-linear-to-t from-black/55 via-transparent to-black/35"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-4 pb-28 pt-28 sm:px-6 sm:pb-32 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl min-w-0 overflow-visible"
        >
          <div className="mb-5 inline-flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[#c9a227]/50 bg-black/35 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#e8c547] backdrop-blur-md">
              Shopping Palace
            </span>
            <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#c4bcb4] backdrop-blur-md">
              Bratislava
            </span>
            <a
              href={SITE_URLS.online}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#c9a227]/40 bg-black/25 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#e8c547]/95 backdrop-blur-md no-underline transition-colors hover:border-[#e8c547] hover:bg-black/40"
            >
              Metrová pizza ↗
            </a>
          </div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#9a928a]">
            Monster Pizza
          </p>

          <h1
            id="hero-heading"
            className="font-serif text-[clamp(2.25rem,6vw,3.75rem)] font-semibold leading-[1.18] tracking-normal text-[#f2ebe3]"
          >
            Pizza priamo{" "}
            <span className="text-gradient-gold italic">v Shopping Palace</span>
          </h1>

          <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-[#c4bcb4]">
            Monster Pizza je chuť, ktorá vonia Talianskom a pripomína leto: poctivé cesto, syr, čo sa nebojí
            trochu divočiny, a chvíle pri stole, keď sa rozpráva najmä cez plné ústa. Radi pečieme pizzu, pri
            ktorej sa zastaví čas — a tešíme sa, že ju raz ochutnáš aj ty.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={contactInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c9a227]/45 bg-black/30 px-7 py-3 text-sm font-bold text-[#f2ebe3] no-underline backdrop-blur-md transition-colors hover:border-[#e8c547] hover:bg-[#c9a227]/12"
            >
              <MapPin size={18} />
              Mapa — Shopping Palace
            </a>
            <a
              href="#pre-vas"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-black/25 px-7 py-3 text-sm font-bold text-[#f2ebe3] no-underline backdrop-blur-md hover:border-white/45 hover:bg-black/35"
            >
              Prečo práve u nás
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="h-9 w-6 rounded-full border-2 border-[#c9a227]/45"
        >
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-[#e8c547]/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
