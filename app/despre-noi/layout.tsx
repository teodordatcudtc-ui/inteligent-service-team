import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Despre Noi',
  description:
    'Echipa INTELIGENT SERVICE TEAM - service profesional pentru camioane și autoutilitare în Timișoara.',
};

export default function DespreNoiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
