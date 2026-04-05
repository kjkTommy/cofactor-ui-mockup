import { ContactForm } from '@/components/contact-form';

export default function ContactsPage() {
  return (
    <main className="shell section-gap page-stack">
      <section className="contact-grid">
        <div className="card card--paper contact-copy">
          <p className="eyebrow">Контакты</p>
          <h1 className="page-title">Связаться с редакцией</h1>
          <p className="lead">
            Страница контактов остается отдельной точкой входа для партнеров, авторов и читателей.
          </p>
          <div className="contact-list">
            <div><span>Email</span><a href="mailto:vk2218484@gmail.com">vk2218484@gmail.com</a></div>
            <div><span>Telegram</span><a href='https://t.me/ng_health' target="_blank">@ng_health</a></div>
            <div><span>Город</span><p>Пермь</p></div>
            <div><span>Формат</span><p>журнал / digital / рекламно-информационный проект</p></div>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
