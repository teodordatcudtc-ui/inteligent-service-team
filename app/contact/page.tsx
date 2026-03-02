'use client';

import { motion } from 'framer-motion';

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

export default function ContactPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="bg-navy-800 py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-4xl mx-auto" {...fadeUp}>
          <h1 className="font-display text-5xl lg:text-6xl text-white mb-4">
            CONTACT
          </h1>
          <p className="text-white text-lg">
            Suntem aici pentru tine. Programează o vizită sau solicită o ofertă.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="flex flex-col lg:flex-row min-h-[60vh]">
        {/* Left - Info - fundal navy pentru text alb */}
        <div className="flex-1 bg-navy-900 py-12 lg:py-16 px-4 sm:px-6 lg:px-12">
          <div className="max-w-lg">
            <motion.h2
              className="font-display text-2xl lg:text-3xl text-white mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              DETALII CONTACT
            </motion.h2>
            <motion.div
              className="space-y-6 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div>
                <p className="text-slate-pale text-sm font-medium uppercase tracking-wider mb-1">
                  Telefon
                </p>
                <a
                  href="tel:0721251341"
                  className="text-xl font-semibold text-white hover:text-slate-pale transition-colors"
                >
                  0721 251 341
                </a>
              </div>
              <div>
                <p className="text-slate-pale text-sm font-medium uppercase tracking-wider mb-1">
                  Adresă
                </p>
                <address className="not-italic text-lg text-white">
                  DN 59 KM 8+950, Strada Milano F.N
                  <br />
                  300516 Timișoara
                </address>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right - Map */}
        <div className="lg:w-[55%] bg-navy-800 min-h-[400px] lg:min-h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89133.7004996011!2d21.12514719957261!3d45.722508015755245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455ce6969cd6d5%3A0x2400d691ddd1c53f!2sINTELIGENT%20SERVICE%20TEAM!5e0!3m2!1sen!2sro!4v1772445388354!5m2!1sen!2sro"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '400px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Locația INTELIGENT SERVICE TEAM pe Google Maps"
            className="block w-full h-[400px] lg:h-[500px]"
          />
        </div>
      </section>
    </div>
  );
}
