export default function ArticlePage() {
  return (
    <main className="shell section-gap page-stack">
      <section className="article-hero card card--paper">
        <div className="article-hero__media">
          <img src="/assets/window-spring.jpg" alt="Весенний интерьер" />
          <div className="article-hero__logo">КоФактор</div>
        </div>
        <div className="article-hero__copy">
          <p className="eyebrow">Тема номера</p>
          <h1 className="page-title">Просыпайтесь! Весна!</h1>
          <p className="lead">
            Макет страницы статьи перенесен в веб без потери ощущения полосы: крупная фотография,
            узкая колонка вводного текста, спокойные поля и мягкая типографическая иерархия.
          </p>
          <div className="article-meta">
            <span>10 минут чтения</span>
            <span>Редакция КоФактор</span>
            <span>Весна 2026</span>
          </div>
        </div>
      </section>

      <section className="article-layout">
        <aside className="article-sidebar card">
          <p className="sidebar-title">В этом материале</p>
          <ul>
            <li>Весеннее пробуждение и ритм сезона</li>
            <li>Привычки, которые легче внедрять весной</li>
            <li>Естественный свет, прогулки и мягкое движение</li>
            <li>Как выглядит editorial-сетка на desktop и mobile</li>
          </ul>
        </aside>

        <article className="article-body card card--paper">
          <p className="dropcap">
            Весенний материал в digital-версии строится на широких полях, мягкой межстрочности и
            свободной композиции блоков. Текст читается как журнальная полоса, а не как новостная лента.
          </p>
          <p>
            Внутри страницы сохранены тонкие рамки, сдержанные зеленые акценты, редакционные подзаголовки
            и крупные визуальные остановки. На широком экране работает двухколоночная логика: основная статья
            и спокойный боковой столбец с оглавлением и цитатами. На мобильном устройстве блоки собираются в
            последовательную вертикаль без потери воздуха.
          </p>
          <div className="quote-block">
            «Важно было сохранить не просто цвета и изображения, а именно ритм печатного журнала.»
          </div>
          <div className="inline-visuals">
            <img src="/assets/p12.png" alt="Фрагмент печатной полосы" />
            <img src="/assets/p13.png" alt="Фрагмент печатной полосы" />
          </div>
          <h2>Композиция и адаптив</h2>
          <p>
            В desktop-версии герой статьи раскладывается на крупное изображение и вводный текст. Ниже идет
            спокойный набор абзацев, цитат и editorial-врезок. В mobile-версии крупная картинка остается ведущим
            элементом, а сетка становится одноколоночной — это делает экран естественным для чтения пальцем.
          </p>
        </article>
      </section>
    </main>
  );
}