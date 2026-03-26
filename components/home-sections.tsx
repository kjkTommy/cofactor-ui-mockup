import Link from "next/link";

const features = [
  {
    title: "Тема номера: «Просыпайтесь! Весна!»",
    text: "Большой визуальный блок с мягким светом, интерьерной фотографией и журнальным ритмом колонок.",
    image: "/assets/window-spring.jpg",
  },
  {
    title: "Рубрика «Здоровые новости»",
    text: "Карточный web-ритм повторяет спокойные рамки, плотные текстовые блоки и акцентный хвойный зеленый.",
    image: "/assets/watch.jpg",
  },
  {
    title: "Развороты с экспертами",
    text: "Для интервью и колонок использованы крупные портреты, тонкие границы, деликатные подложки и много воздуха.",
    image: "/assets/portrait-2.jpg",
  },
];

const previews = [
  { href: "/article", title: "Страница статьи", image: "/assets/p12.png" },
  { href: "/category", title: "Страница рубрики", image: "/assets/p38.png" },
  {
    href: "/archive",
    title: "Архив и содержание",
    image: "/assets/leaves-left.jpg",
  },
  { href: "/about", title: "О журнале", image: "/assets/editor.jpg" },
];

export function HomeSections() {
  return (
    <>
      <section className="shell section-gap editorial-grid">
        <div className="section-title-wrap">
          <p className="eyebrow">Содержание номера</p>
        </div>
        <div className="timeline-card card">
          <div className="timeline">
            <div>
              <span>06</span>
              <p>История издателя и начало проекта</p>
            </div>
            <div>
              <span>12</span>
              <p>Весенний номер и тема пробуждения</p>
            </div>
            <div>
              <span>18</span>
              <p>Колонка про возраст счастья</p>
            </div>
            <div>
              <span>38</span>
              <p>Весенние дикоросы на страже здоровья</p>
            </div>
            <div>
              <span>46</span>
              <p>Как правильно выбрать магний</p>
            </div>
            <div>
              <span>51</span>
              <p>Банные премудрости и мягкая детоксикация</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shell section-gap features-grid">
        {features.map((item) => (
          <article key={item.title} className="feature-card card">
            <img
              src={item.image}
              alt={item.title}
              className="feature-card__image"
            />
            <div className="feature-card__body">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="shell section-gap">
        <div className="section-title-wrap section-title-wrap--row">
          <div>
            <p className="eyebrow">Набор макетов</p>
          </div>
          <Link href="/archive" className="text-link">
            Открыть архив
          </Link>
        </div>
        <div className="preview-grid">
          {previews.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="preview-card card"
            >
              <img
                src={item.image}
                alt={item.title}
                className="preview-card__image"
              />
              <div className="preview-card__body">
                <h3>{item.title}</h3>
                <p>
                  Отдельный route с desktop и mobile логикой в одном адаптивном
                  макете.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
