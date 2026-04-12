'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/navLinks';

function isExternalNavHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://');
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? 'border-[#c9a227]/30 bg-[#3d3834]/94 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]'
          : 'border-transparent bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#c9a227]/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="group flex items-center gap-3 no-underline"
          aria-label="Monster Pizza — domov"
        >
          <span className="relative flex size-[48px] shrink-0 items-center justify-center sm:size-[52px]">
            <span
              className="absolute inset-0 rounded-full opacity-50 blur-md transition-opacity group-hover:opacity-80"
              style={{
                background: 'radial-gradient(circle, rgba(232,197,71,0.45) 0%, transparent 70%)',
              }}
              aria-hidden
            />
            <Image
              src="/logo.png"
              alt=""
              width={104}
              height={104}
              priority
              className="relative h-12 w-12 object-contain drop-shadow-[0_0_18px_rgba(201,162,39,0.35)] sm:h-[52px] sm:w-[52px]"
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#c9a227]/95">
              Shopping Palace · Bratislava
            </span>
          </span>
        </motion.a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hlavná navigácia">
          {navLinks.map((link, index) => {
            const external = isExternalNavHref(link.href);
            return (
              <motion.a
                key={link.label + link.href}
                href={link.href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-[#8a827a] no-underline transition-colors hover:bg-black/[0.08] hover:text-[#f2ebe3]"
              >
                {link.label}
                {external ? ' ↗' : ''}
              </motion.a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="flex size-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-black/10 bg-black/[0.08] lg:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
        >
          {isMobileMenuOpen ? <X className="text-[#e8c547]" size={22} /> : <Menu className="text-[#e8c547]" size={22} />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-[#c9a227]/20 bg-[#454039]/98 px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobilná navigácia">
            {navLinks.map((link) => {
              const external = isExternalNavHref(link.href);
              return (
                <a
                  key={link.label + link.href}
                  href={link.href}
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="border-b border-black/[0.08] py-3.5 text-base font-semibold text-[#f2ebe3] no-underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                  {external ? ' ↗' : ''}
                </a>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
