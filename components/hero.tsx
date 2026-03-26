import Link from "next/link";

export function Hero() {
  return (
    <section className="hero shell section-gap">
      <div className="hero__copy card card--soft">
        <div className="hero__intro">
          <p className="eyebrow">Весенний выпуск</p>
          <span className="hero__issue">№1 / Весна 2026</span>
        </div>
        <h1 className="display-title">
          Журнал о здоровье, привычках и внимании к себе
        </h1>
        <p className="lead">
          Веб-версия сохраняет мягкую природную палитру, журнальный ритм,
          свободную композицию и ощущение печатного editorial-разворота.
        </p>
        <div className="hero__actions">
          <Link href="/article" className="button">
            Открыть главную историю
          </Link>
          <Link href="/archive" className="button button--ghost">
            Смотреть содержание
          </Link>
        </div>
        <div className="hero__notes">
          <span>Editorial макет</span>
          <span>Природная палитра</span>
          <span>Desktop + mobile</span>
        </div>
      </div>
      <div className="hero__cover">
        <div className="hero__cover-header">
          <div className="hero__logo">КоФактор</div>
          <p className="hero__edition">Первый пермский журнал по превентивной медицине</p>
        </div>
        <div className="hero__meta">
          <span className="hero__meta-label">Новый номер</span>
          <p>Весенний выпуск про здоровье, привычки и бережный ритм жизни.</p>
        </div>
      </div>
    </section>
  );
}
