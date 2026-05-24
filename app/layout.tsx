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
  formatDetection: {
    telephone: false,
  },
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

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'kofaktor',
  alternateName: ['КоФактор', 'Гладких Наталья Михайловна'],
  url: SITE_URL.toString(),
  email: 'ko_faktor@mail.ru',
  telephone: '+79026472190',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Виноградная улица, 14, жилой район Ново-Бродовский',
    addressLocality: 'Пермь',
    addressCountry: 'RU',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'editorial office',
    telephone: '+79026472190',
    email: 'ko_faktor@mail.ru',
    availableLanguage: 'ru',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
