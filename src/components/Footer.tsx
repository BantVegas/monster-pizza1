'use client';

import { Phone, Mail, Clock, MapPin, Instagram } from 'lucide-react';
import { contactInfo } from '@/data/contactInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Monster Pizza
              <span className="text-[#f4a261]"> v Shopping Palace</span>
            </h3>
            <p className="text-white/70">
              Poctivá pizza, férové ceny, rodinná atmosféra. Presne tak, ako to má byť.
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <Clock size={20} className="text-[#f4a261]" />
              Otváracie hodiny
            </h4>
            <div className="space-y-2 text-white/70">
              <p>{contactInfo.openingHours.weekdays}</p>
              <p>{contactInfo.openingHours.weekends}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-white/70">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 hover:text-[#f4a261] transition-colors"
              >
                <Phone size={18} />
                {contactInfo.phoneFormatted}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 hover:text-[#f4a261] transition-colors break-all"
              >
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm">{contactInfo.email}</span>
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={18} className="flex-shrink-0" />
                {contactInfo.address}
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sledujte nás</h4>
            <div className="flex flex-col gap-3">
              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-[#f4a261] transition-colors"
              >
                <Instagram size={20} />
                Sme na Instagrame
              </a>
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-[#f4a261] transition-colors"
              >
                <MapPin size={20} />
                Zobraziť na mape
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} Monster Pizza v Shopping Palace
            </p>
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 bg-[#e63946] hover:bg-[#c62b38] text-white px-6 py-3 rounded-2xl font-semibold transition-colors"
            >
              <Phone size={18} />
              Zavolať
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
