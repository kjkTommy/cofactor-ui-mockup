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
                    Добро пожаловать в мир «КоФактора»!
                    <br/>
                    <br/>
                    Если представить тело как завод, то кофакторы — это инструменты, без которых рабочие (ферменты) не
                    смогут качественно выполнять свою работу. br
                    Это — верные помощники нашего организма, поддерживающие
                    важные процессы внутри клеток. Выбирая такое название, мы хотели подчеркнуть важность незаметных, но
                    значимых элементов нашей жизни.
                </p>
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
