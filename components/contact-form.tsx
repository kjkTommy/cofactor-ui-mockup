'use client';

import { FormEvent, useState } from 'react';

type Status =
  | { type: 'idle'; message: '' }
  | { type: 'success'; message: string }
  | { type: 'error'; message: string };

const INITIAL_STATUS: Status = { type: 'idle', message: '' };

export function ContactForm() {
  const [status, setStatus] = useState<Status>(INITIAL_STATUS);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(INITIAL_STATUS);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    const payload = (await response.json().catch(() => null)) as
      | { ok?: boolean; error?: string }
      | null;

    if (!response.ok) {
      setStatus({
        type: 'error',
        message: payload?.error || 'Не удалось отправить сообщение.',
      });
      setIsSubmitting(false);
      return;
    }

    form.reset();
    setStatus({
      type: 'success',
      message: 'Сообщение отправлено. Мы свяжемся с вами по указанному email.',
    });
    setIsSubmitting(false);
  }

  return (
    <form className="card contact-form-mock" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="contact-name">Ваше имя</label>
        <input id="contact-name" name="name" type="text" required />
      </div>

      <div className="field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" required />
      </div>

      <div className="field">
        <label htmlFor="contact-subject">Тема обращения</label>
        <input id="contact-subject" name="subject" type="text" required />
      </div>

      <div className="field field--lg">
        <label htmlFor="contact-message">Сообщение</label>
        <textarea id="contact-message" name="message" required />
      </div>

      {status.type !== 'idle' ? (
        <p className={`form-status form-status--${status.type}`}>{status.message}</p>
      ) : null}

      <button className="button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Отправляем…' : 'Отправить'}
      </button>
    </form>
  );
}
