'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { topicNavLinks } from '@/data/topics';

const links = [
  ...topicNavLinks,
  { href: '/contacts', label: 'Контакты' },
];

function isActiveLink(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div className="site-bg">
      <header className="topbar">
        <div className="topbar__inner shell">
          <div className="topbar__lead">
            <Link href="/" className="brand" aria-label="КоФактор — на главную">
              КоФактор
            </Link>
          </div>
          <button
            type="button"
            className={`topbar__burger${isMenuOpen ? ' is-open' : ''}`}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-controls="mobile-nav"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className="nav" aria-label="Основная навигация">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav__link${isActiveLink(pathname, link.href) ? ' is-active' : ''}`}
                aria-current={isActiveLink(pathname, link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <div
        id="mobile-nav"
        className={`topbar__mobile${isMenuOpen ? ' is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className="topbar__mobile-close"
          aria-label="Закрыть меню"
          onClick={() => setIsMenuOpen(false)}
        >
          <span />
          <span />
        </button>
        <nav className="topbar__mobile-nav" aria-label="Мобильная навигация">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`topbar__mobile-link${isActiveLink(pathname, link.href) ? ' is-active' : ''}`}
              aria-current={isActiveLink(pathname, link.href) ? 'page' : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a className="issue-badge issue-badge--mobile" href="/">№1 / Весна 2026</a>
      </div>
      {children}
      <footer className="footer">
        <div className="shell footer__grid">
          <div>
            <div className="brand brand--sm">КоФактор</div>
            <p className="muted">Первый пермский журнал о превентивной медицине</p>
          </div>
          <div>
            <p className="footer__title">Навигация</p>
            <div className="footer__links">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>{link.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="footer__title">Контакты</p>

            <a className="muted mail" href="mailto:hello@cofactor-journal.ru">hello@cofactor-journal.ru</a>
            <p className="muted tg">Telegram: </p>
            <a className="muted-link" href='https://t.me/ng_health' target="_blank">@ng_health</a>
            <Link className="footer__about-link" href="/about">О журнале</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
