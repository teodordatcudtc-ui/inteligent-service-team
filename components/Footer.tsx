import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="bg-navy-900 border-t border-navy-600"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-navy-700 border-2 border-slate-light flex items-center justify-center">
                <TruckIcon className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-xl tracking-wide text-white">
                INTELIGENT SERVICE TEAM
              </span>
            </Link>
            <p className="text-slate-light text-sm">
              Service profesional pentru camioane și autoutilitare în Timișoara.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-lg text-white mb-4">LINKURI</h3>
            <ul className="space-y-2">
              {[
                { href: '/servicii-camioane', label: 'Servicii Camioane' },
                { href: '/servicii-autoutilitare', label: 'Servicii Autoutilitare' },
                { href: '/promotii', label: 'Promoții' },
                { href: '/despre-noi', label: 'Despre Noi' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-light hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg text-white mb-4">CONTACT</h3>
            <ul className="space-y-3 text-slate-light text-sm">
              <li>
                <a
                  href="tel:0721251341"
                  className="hover:text-white transition-colors"
                >
                  0721 251 341
                </a>
              </li>
              <li>
                <address className="not-italic">
                  DN 59 KM 8+950, Strada Milano F.N
                  <br />
                  300516 Timișoara
                </address>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-display text-lg text-white mb-4">PROGRAMEAZĂ</h3>
            <p className="text-slate-light text-sm mb-4">
              Programează-ți următoarea mentenanță cu noi.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-slate-pale text-navy-900 font-semibold uppercase text-sm tracking-wider hover:bg-white transition-colors border border-navy-700"
            >
              Contactează-ne
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-600 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-gray text-xs">
            © {new Date().getFullYear()} INTELIGENT SERVICE TEAM. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
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
