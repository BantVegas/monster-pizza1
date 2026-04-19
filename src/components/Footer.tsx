'use client';

import Image from 'next/image';
import { Mail, Clock, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '@/data/contactInfo';
import { SITE_URLS } from '@/data/siteUrls';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#c9a227]/15 bg-[#252220]">
      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-9">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="flex gap-4">
            <Image
              src="/logo.png"
              alt="Monster Pizza"
              width={80}
              height={80}
              className="size-11 shrink-0 object-contain opacity-95 sm:size-12"
            />
            <div className="min-w-0 pt-0.5">
              <p className="font-serif text-base font-semibold leading-snug text-[#f2ebe3] sm:text-lg">
                Monster Pizza · <span className="text-[#e8c547]">Shopping Palace</span>
              </p>
              <p className="mt-1 max-w-sm text-xs leading-relaxed text-[#7a726b]">
                Bratislava · osobný odber v prevádzke.{' '}
                <a
                  href={SITE_URLS.eu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9a227] underline-offset-2 hover:text-[#e8c547] hover:underline"
                >
                  Menu a blog — súhrn značky
                </a>
              </p>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-3 lg:max-w-2xl lg:gap-6">
            <div>
              <p className="mb-2 flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#c9a227]/90">
                <Clock size={13} strokeWidth={2} aria-hidden />
                Hodiny
              </p>
              <p className="text-xs leading-relaxed text-[#9a928a]">{contactInfo.openingHours.weekdays}</p>
              <p className="text-xs leading-relaxed text-[#9a928a]">{contactInfo.openingHours.weekends}</p>
            </div>
            <div>
              <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#c9a227]/90">
                Kontakt
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-2 text-xs text-[#9a928a] underline-offset-2 hover:text-[#e8c547]"
              >
                <Mail size={14} className="mt-0.5 shrink-0 opacity-80" aria-hidden />
                <span className="break-all">{contactInfo.email}</span>
              </a>
              <a
                href={contactInfo.businessPhoneTel}
                className="mt-2 flex items-start gap-2 text-xs font-semibold text-[#9a928a] underline-offset-2 hover:text-[#e8c547]"
                title="Telefonický kontakt"
              >
                <Phone size={14} className="mt-0.5 shrink-0 opacity-80" aria-hidden />
                <span>
                  <span className="block text-[0.65rem] font-normal text-[#7a726b]">Telefonický kontakt</span>
                  {contactInfo.businessPhoneDisplay}
                </span>
              </a>
              <p className="mt-2 flex items-start gap-2 text-xs text-[#9a928a]">
                <MapPin size={14} className="mt-0.5 shrink-0 opacity-80" aria-hidden />
                {contactInfo.address}
              </p>
            </div>
            <div>
              <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#c9a227]/90">
                Odkazy
              </p>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <a
                    href={contactInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#9a928a] hover:text-[#e8c547]"
                  >
                    <MapPin size={14} aria-hidden />
                    Mapa
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_URLS.eu}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7a726b] hover:text-[#e8c547]"
                  >
                    Menu a blog
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_URLS.online}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7a726b] hover:text-[#e8c547]"
                  >
                    Metrová pizza
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/[0.06] pt-5 text-center">
          <p className="text-[0.7rem] text-[#5c564f]">
            © {currentYear} Monster Pizza — Shopping Palace, Bratislava
          </p>
        </div>
      </div>
    </footer>
  );
}
