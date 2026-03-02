'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

export default function PromotiiPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative bg-navy-800 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <div className="relative w-32 h-32 mx-auto mb-6 rounded overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&q=80"
                alt="Service auto"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="font-display text-5xl lg:text-6xl text-white mb-4">
              PROMOȚII
            </h1>
            <p className="text-white text-lg">
              Beneficiează de oferte speciale pentru service-ul tău.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Deal of the month */}
      <section className="bg-navy-900 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="border-2 border-white/30 bg-navy-800 p-8 lg:p-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-slate-pale text-sm font-medium uppercase tracking-wider">
              Oferta lunii
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-white mt-2 mb-6">
              SERVICE COMPLET LA PREȚ PREFERENȚIAL
            </h2>
            <p className="text-white text-lg mb-8">
              Ofertă specială pentru mentenanță completă. Include:
            </p>
            <ul className="space-y-3 text-white mb-10">
              <li>• Schimb ulei și filtre de ulei</li>
              <li>• Reglaj frâne</li>
              <li>• Ungere completă camion și remorcă</li>
            </ul>
            <p className="text-slate-pale text-sm mb-8">
              Contactează-ne pentru detalii și programare.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-navy-900 font-semibold uppercase text-sm tracking-wider hover:bg-slate-pale transition-colors"
            >
              Programează acum
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 py-12 px-4 text-center">
        <p className="text-white mb-4">
          Ai nevoie de o ofertă personalizată?
        </p>
        <Link
          href="/contact"
          className="text-slate-pale font-semibold underline hover:text-white transition-colors"
        >
          Contactează-ne →
        </Link>
      </section>
    </div>
  );
}
