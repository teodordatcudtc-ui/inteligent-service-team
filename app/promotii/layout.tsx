import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Promoții',
  description: 'Oferte speciale pentru service camioane și autoutilitare. INTELIGENT SERVICE TEAM Timișoara.',
};

export default function PromotiiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
