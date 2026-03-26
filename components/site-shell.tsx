import Link from 'next/link';

const links = [
  { href: '/', label: 'Главная' },
  { href: '/article', label: 'Статья' },
  { href: '/category', label: 'Рубрика' },
  { href: '/archive', label: 'Архив' },
  { href: '/about', label: 'О журнале' },
  { href: '/contacts', label: 'Контакты' },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-bg">
      <header className="topbar">
        <div className="topbar__inner shell">
          <div className="topbar__lead">
            <Link href="/" className="brand" aria-label="КоФактор — на главную">
              КоФактор
            </Link>
            <p className="topbar__note">Editorial mockup</p>
          </div>
          <nav className="nav" aria-label="Основная навигация">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="nav__link">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="issue-badge">№1 / Весна 2026</div>
        </div>
      </header>
      {children}
      <footer className="footer">
        <div className="shell footer__grid">
          <div>
            <div className="brand brand--sm">КоФактор</div>
            <p className="muted">Первый пермский журнал о превентивной медицине в формате digital editorial mockup.</p>
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
            <p className="footer__title">Контакт</p>
            <p className="muted">hello@cofactor-journal.ru</p>
            <p className="muted">Telegram: @ng_health</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
