import type { Metadata, Viewport } from 'next';
import { Outfit, Bebas_Neue } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-outfit',
  display: 'swap',
});

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://inteligentserviceteam.ro'),
  title: {
    default: 'INTELIGENT SERVICE TEAM | Service Camioane și Autoutilitare Timișoara',
    template: '%s | INTELIGENT SERVICE TEAM',
  },
  description:
    'Service profesional pentru camioane și autoutilitare în Timișoara. Mentenanță, reparații și service preventiv. Ținem echipamentul tău pe drum.',
  keywords: [
    'service camioane Timișoara',
    'service autoutilitare',
    'reparații camioane',
    'mentenanță vehicule comerciale',
  ],
  authors: [{ name: 'INTELIGENT SERVICE TEAM' }],
  creator: 'INTELIGENT SERVICE TEAM',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d2847',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ro"
      className={`${outfit.variable} ${bebas.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1" role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
