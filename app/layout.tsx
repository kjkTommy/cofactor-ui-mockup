import './globals.css';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: 'КоФактор',
    template: '%s | КоФактор',
  },
  description: 'Редакционный журнал о здоровье, образе жизни, людях и среде.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'КоФактор',
    title: 'КоФактор',
    description: 'Редакционный журнал о здоровье, образе жизни, людях и среде.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
