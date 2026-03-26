export default function AboutPage() {
  return (
    <main className="shell section-gap page-stack">
      <section className="about-grid">
        <article className="card card--paper about-lead">
          <p className="eyebrow">О журнале</p>
          <h1 className="page-title">Редакционная платформа о превентивной медицине</h1>
          <p className="lead">
            Эта страница повторяет настроение вводных полос журнала: легкий фон бумаги, спокойные колонки,
            много воздуха и деликатный зеленый акцент вместо жесткого digital-UI.
          </p>
          <p>
            В качестве базовой идеи сохранено ощущение печатной публикации: материалы выглядят собранными,
            выверенными и медленными по ритму. Такой подход особенно важен для темы здоровья и бережного образа жизни.
          </p>
        </article>
        <aside className="card about-side">
          <img src="/assets/editor.jpg" alt="Издатель журнала" className="about-side__portrait" />
          <h2>Редакция</h2>
          <p>Издатель, редакция, авторы и приглашенные эксперты собраны в более камерной и доверительной подаче.</p>
        </aside>
      </section>

      <section className="team-grid">
        <article className="team-card card">
          <img src="/assets/portrait-1.jpg" alt="Автор журнала" />
          <div>
            <h3>Экспертный голос</h3>
            <p>Портретные карточки сделаны спокойными, без тяжелых интерфейсных обводок.</p>
          </div>
        </article>
        <article className="team-card card">
          <img src="/assets/portrait-2.jpg" alt="Редактор" />
          <div>
            <h3>Редакционный стиль</h3>
            <p>Используются мягкие блоки текста, тонкие рамки и ровные поля.</p>
          </div>
        </article>
        <article className="team-card card">
          <img src="/assets/group.jpg" alt="Команда" />
          <div>
            <h3>Комьюнити</h3>
            <p>Групповые фотографии работают как более живой якорь между длинными текстовыми блоками.</p>
          </div>
        </article>
      </section>
    </main>
  );
}