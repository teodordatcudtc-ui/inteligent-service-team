'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'ACASĂ' },
  { href: '/servicii-camioane', label: 'SERVICII CAMIOANE' },
  { href: '/servicii-autoutilitare', label: 'SERVICII AUTOUTILITARE' },
  { href: '/promotii', label: 'PROMOȚII' },
  { href: '/despre-noi', label: 'DESPRE NOI' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-navy-600"
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navigare principală"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile: Acasă link stânga | Desktop: nav left */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className={`lg:hidden text-sm font-medium uppercase tracking-wider ${
                pathname === '/' ? 'text-slate-pale' : 'text-white hover:text-slate-pale'
              }`}
            >
              ACASĂ
            </Link>
            <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                  pathname === link.href
                    ? 'text-slate-pale border-b-2 border-slate-pale'
                    : 'text-white hover:text-slate-pale'
                }`}
              >
                {link.label}
              </Link>
            ))}
            </div>
          </div>

          {/* Logo - ascuns pe mobil (avem ACASĂ stânga) */}
          <Link
            href="/"
            className="hidden lg:flex items-center gap-3 shrink-0"
            aria-label="INTELIGENT SERVICE TEAM - Pagina principală"
          >
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-navy-700 border-2 border-slate-light flex items-center justify-center">
              <TruckIcon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <span className="font-display text-lg lg:text-xl tracking-wide text-white hidden sm:block">
              INTELIGENT SERVICE TEAM
            </span>
          </Link>

          {/* Desktop nav - right */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                  pathname === link.href
                    ? 'text-slate-pale border-b-2 border-slate-pale'
                    : 'text-white hover:text-slate-pale'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile: hamburger dreapta */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-slate-light"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Închide meniul' : 'Deschide meniul'}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-navy-600">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2 px-4 text-sm font-medium uppercase ${
                      pathname === link.href
                        ? 'text-slate-pale bg-navy-700'
                        : 'text-white hover:bg-navy-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 0-1.031.242L16 14" />
      <path d="M14 9h4" />
    </svg>
  );
}
