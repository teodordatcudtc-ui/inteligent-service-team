import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicii Camioane',
  description:
    'Service complet pentru camioane: mentenanță, reparații, diagnostic. INTELIGENT SERVICE TEAM Timișoara.',
};

export default function ServiciiCamioaneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
