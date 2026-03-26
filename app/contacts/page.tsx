export default function ContactsPage() {
  return (
    <main className="shell section-gap page-stack">
      <section className="contact-grid">
        <div className="card card--paper contact-copy">
          <p className="eyebrow">Контакты</p>
          <h1 className="page-title">Связаться с редакцией</h1>
          <p className="lead">Страница контактов не выбивается из общей эстетики: те же бумажные поверхности, природные оттенки и editorial-структура.</p>
          <div className="contact-list">
            <div><span>Email</span><p>hello@cofactor-journal.ru</p></div>
            <div><span>Telegram</span><p>@ng_health</p></div>
            <div><span>Город</span><p>Пермь</p></div>
            <div><span>Формат</span><p>журнал / digital / рекламно-информационный проект</p></div>
          </div>
        </div>
        <div className="card contact-form-mock">
          <div className="field"><label>Ваше имя</label><div /></div>
          <div className="field"><label>Email</label><div /></div>
          <div className="field"><label>Тема обращения</label><div /></div>
          <div className="field field--lg"><label>Сообщение</label><div /></div>
          <button className="button">Отправить</button>
        </div>
      </section>
    </main>
  );
}