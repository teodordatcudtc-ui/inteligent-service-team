import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicii Autoutilitare',
  description:
    'Service specializat pentru furgonete, autoutilitare și remorci. INTELIGENT SERVICE TEAM Timișoara.',
};

export default function ServiciiAutoutilitareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
