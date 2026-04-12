'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Pri stole',
    hint: 'Spoločné chvíle',
    src: '/images/brand/family.png',
    alt: 'Hostia pri pizze v príjemnom prostredí',
  },
  {
    title: 'Chuť pre každého',
    hint: 'Od klasiky po špeciality',
    src: '/images/brand/margherita.png',
    alt: 'Čerstvá pizza pripravená v Monster Pizza',
  },
  {
    title: 'Na zdieľanie',
    hint: 'Metrový formát',
    src: '/images/brand/summer.png',
    alt: 'Pizza a osvieženie v Shopping Palace',
  },
] as const;

export default function FamilySummerBar() {
  return (
    <section
      id="pre-vas"
      className="scroll-mt-24 border-y border-[#c9a227]/25 bg-[#2f2b27] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.22em] text-[#e8c547]">
          Shopping Palace, Bratislava
        </p>
        <h2 className="font-serif text-center text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-[#f2ebe3]">
          Monster Pizza — miesto na oddych a dobré jedlo
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#b8a99a]">
          Sme v nákupnom centre — ideálna zastávka po nákupe, pred filmom alebo keď chcete mať všetko
          na jednom mieste: teplú pizzu, priateľský prístup a osobný odber priamo v prevádzke.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mp-card-hover group relative overflow-hidden rounded-2xl border border-[#c9a227]/35 bg-black/25 shadow-[0_24px_48px_rgba(0,0,0,0.2)]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width:640px) 100vw, 33vw"
                  priority={i === 0}
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="font-serif text-2xl font-semibold text-[#f2ebe3] sm:text-3xl">{c.title}</p>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wider text-[#e8c547]/95">
                    {c.hint}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
