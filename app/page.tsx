'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

const serviceCards = [
  {
    href: '/servicii-camioane',
    label: 'SERVICII CAMIOANE',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&q=80',
    alt: 'Camion',
  },
  {
    href: '/promotii',
    label: 'PROMOȚII',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80',
    alt: 'Service auto',
  },
  {
    href: '/servicii-autoutilitare',
    label: 'SERVICII AUTOUTILITARE',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80',
    alt: 'Autoutilitar',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero - doar conținutul din poză: heading, slogan, descriere, 3 cutii */}
      <section className="relative bg-navy-800 pt-24 pb-16 lg:pt-28 lg:pb-24 px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="max-w-4xl">
          <motion.h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-none mb-4"
            {...fadeUp}
          >
            SERVICE
            <br />
            <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              CAMIOANE & AUTOUTILITARE
            </span>
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-white italic mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Echipamentul tău mereu pe drum!
          </motion.p>
          <motion.p
            className="text-white text-base sm:text-lg max-w-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Suntem specializați în service preventiv și reparații pentru camioane și autoutilitare.
            Prioritatea noastră: să păstrăm afacerea și echipamentul tău în mișcare.
          </motion.p>

          {/* 3 cutii servicii - cu imagini reale */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {serviceCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group block border-2 border-white/40 bg-navy-800 overflow-hidden hover:border-white/80 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/20 transition-colors" />
                </div>
                <p className="font-display text-lg text-white uppercase tracking-wider p-4 text-center">
                  {card.label}
                </p>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Secțiune 2 - Oferta lunii */}
      <section className="relative bg-navy-900 py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-4xl lg:text-5xl text-white mb-6">
              OFERTA LUNII
            </h2>
            <p className="text-2xl lg:text-3xl text-slate-pale font-semibold mb-6">
              Service complet la preț preferențial!
            </p>
            <ul className="space-y-3 text-white">
              <li className="flex items-center gap-2">
                <span className="text-slate-pale">•</span> Schimb ulei și filtre
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-pale">•</span> Reglaj frâne
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-pale">•</span> Ungere completă camion și remorcă
              </li>
            </ul>
            <Link
              href="/promotii"
              className="inline-block mt-8 px-6 py-3 border-2 border-white text-white font-semibold uppercase text-sm tracking-wider hover:bg-white hover:text-navy-900 transition-all"
            >
              Vezi oferta
            </Link>
          </motion.div>
          <motion.div
            className="relative aspect-video rounded overflow-hidden"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80"
              alt="Service camioane"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Secțiune 3 - De ce noi */}
      <section className="relative bg-navy-800 py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-display text-4xl lg:text-5xl text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            DE CE SĂ ALEGI INTELIGENT SERVICE TEAM?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: 'Experiență',
                desc: 'Specializare în vehicule comerciale și autoutilitare. Cunoaștem nevoile flotei tale.',
              },
              {
                title: 'Transparență',
                desc: 'Diagnostic clar, estimări corecte, fără surprize la factură.',
              },
              {
                title: 'Rapiditate',
                desc: 'Programare flexibilă și rezolvare în timp util.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-navy-700/50 border border-white/20 p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-display text-2xl text-white mb-3">{item.title}</h3>
                <p className="text-slate-pale text-sm lg:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secțiune 4 - Cum funcționăm */}
      <section className="relative bg-navy-900 py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-display text-4xl lg:text-5xl text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            CUM FUNCȚIONĂM
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            {[
              { step: '1', title: 'Programare', text: 'Sună sau trimite mesaj. Stabilim data și ora potrivită.' },
              { step: '2', title: 'Diagnostic', text: 'Analizăm vehiculul și îți oferim o estimare transparentă.' },
              { step: '3', title: 'Lucrări', text: 'Executăm service-ul la standarde înalte, cu garanție.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="border-l-4 border-slate-pale pl-6"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="font-display text-4xl text-slate-pale">{item.step}</span>
                <h3 className="font-display text-xl text-white mt-2 mb-2">{item.title}</h3>
                <p className="text-slate-pale text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secțiune 5 - CTA + Locație */}
      <section className="relative bg-navy-800 py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-display text-4xl lg:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            VINO ÎN VIZITĂ
          </motion.h2>
          <motion.p
            className="text-white text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            DN 59 KM 8+950, Strada Milano F.N, 300516 Timișoara
          </motion.p>
          <motion.p
            className="text-slate-pale mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Sună pentru programare: <a href="tel:0721251341" className="text-white font-semibold hover:underline">0721 251 341</a>
          </motion.p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-navy-900 font-semibold uppercase text-sm tracking-wider hover:bg-slate-pale transition-colors"
          >
            Contactează-ne
          </Link>
        </div>
      </section>
    </>
  );
}
