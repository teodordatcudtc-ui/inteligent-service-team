import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactează INTELIGENT SERVICE TEAM: DN 59 KM 8+950, Timișoara. Telefon 0721 251 341.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
