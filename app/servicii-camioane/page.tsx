'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

const services = [
  'Service mentenanță preventivă (revizie periodică)',
  'Schimb ulei și filtre',
  'Reparații motor, transmisie, diferențial',
  'Sistem frâne: reglaj, înlocuire plăcuțe și discuri',
  'Suspensie și direcție',
  'Sistem electric și electronic',
  'Diagnostic și estimare',
];

export default function ServiciiCamioanePage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative bg-navy-800 min-h-[40vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl text-white mb-4">
                SERVICII CAMIOANE
              </h1>
              <p className="text-white text-lg max-w-xl">
                Service profesional pentru camioane: mentenanță preventivă, reparații motor,
                transmisie, frâne, suspensii. Echipa noastră ține echipamentul tău în stare optimă.
              </p>
            </motion.div>
            <motion.div
              className="relative aspect-video lg:aspect-[4/3] rounded overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
                alt="Camion"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-navy-900 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-display text-3xl lg:text-4xl text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            CE OFERIM
          </motion.h2>
          <ul className="space-y-6">
            {services.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-4 text-white"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="w-2 h-2 rounded-full bg-slate-pale shrink-0" />
                <span className="text-lg">{item}</span>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-navy-900 font-semibold uppercase text-sm tracking-wider hover:bg-slate-pale transition-colors"
            >
              Solicită o ofertă
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
