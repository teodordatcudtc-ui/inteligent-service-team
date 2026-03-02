'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

export default function DespreNoiPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative flex flex-col lg:flex-row min-h-[50vh]">
        <div className="flex-1 bg-navy-800 py-16 lg:py-24 px-4 sm:px-6 lg:px-12 flex items-center">
          <motion.div className="max-w-xl" {...fadeUp}>
            <h1 className="font-display text-5xl lg:text-6xl text-white mb-6">
              DESPRE NOI
            </h1>
            <p className="text-white text-lg leading-relaxed">
              INTELIGENT SERVICE TEAM este echipa ta de încredere pentru service camioane și
              autoutilitare în Timișoara. Ne dedicăm menținerii echipamentului tău în stare optimă,
              astfel încât afacerea ta să ruleze fără întreruperi.
            </p>
          </motion.div>
        </div>
        <div className="lg:w-1/2 bg-navy-900 flex items-center justify-center py-12 lg:py-0 min-h-[300px]">
          <motion.div
            className="relative w-full h-full min-h-[300px] lg:min-h-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80"
              alt="Service camioane"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-800 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-display text-3xl lg:text-4xl text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            CE NE DIFERENȚIAZĂ
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Experiență',
                text: 'Specializare în vehicule comerciale. Cunoaștem nevoile specifice ale flotei tale.',
              },
              {
                title: 'Transparență',
                text: 'Diagnostic clar, estimări corecte. Nicio surpriză la factură.',
              },
              {
                title: 'Rapiditate',
                text: 'Programare flexibilă și rezolvare în timp util. Timpul tău contează.',
              },
              {
                title: 'Calitate',
                text: 'Piese și materiale de calitate. Lucrări garantate.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="border border-white/20 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-display text-xl text-white mb-2">{item.title}</h3>
                <p className="text-slate-pale text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
