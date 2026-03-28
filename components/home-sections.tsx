import Link from "next/link";
import CircleHistory from "@/app/archive/page";

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
    {href: "/article", title: "Страница статьи", image: "/assets/p12.png"},
    {href: "/category", title: "Страница рубрики", image: "/assets/p38.png"},
    {
        href: "/archive",
        title: "Архив и содержание",
        image: "/assets/leaves-left.jpg",
    },
    {href: "/about", title: "О журнале", image: "/assets/editor.jpg"},
];

export function HomeSections() {
    return (
        <>
            <CircleHistory/>
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
                        <p className="eyebrow">Статьи</p>
                    </div>
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
