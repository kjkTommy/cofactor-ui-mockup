const cards = [
  {
    title: 'Весенние дикоросы на страже здоровья',
    image: '/assets/p38.png',
    text: 'Категорийная страница собрана как редакционный каталог материалов с крупными превью и спокойными текстовыми модулями.',
  },
  {
    title: 'Как правильно выбрать магний',
    image: '/assets/p46.png',
    text: 'Акцент на экспертности, чистых карточках и деликатных цветовых подложках.',
  },
  {
    title: 'Банные премудрости',
    image: '/assets/p51.png',
    text: 'Визуалы могут быть теплее и фактурнее, но ритм страницы остается единым.',
  },
];

export default function CategoryPage() {
  return (
    <main className="shell section-gap page-stack">
      <section className="category-head card card--soft">
        <div>
          <p className="eyebrow">Рубрика</p>
          <h1 className="page-title">Здоровые новости и полезные практики</h1>
        </div>
        <img src="/assets/watch.jpg" alt="Фитнес гаджеты" className="category-head__image" />
      </section>
      <section className="masonry-grid">
        {cards.map((card) => (
          <article key={card.title} className="masonry-card card">
            <img src={card.image} alt={card.title} className="masonry-card__image" />
            <div className="masonry-card__body">
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}