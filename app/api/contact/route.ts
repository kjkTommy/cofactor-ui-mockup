import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const CONTACT_TO_EMAIL = 'vk2218484@gmail.com';
const SMTP_HOST = 'smtp.gmail.com';
const SMTP_PORT = 465;

function getField(value: FormDataEntryValue | null) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = getField(formData.get('name'));
  const email = getField(formData.get('email'));
  const subject = getField(formData.get('subject'));
  const message = getField(formData.get('message'));

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: 'Заполните все поля формы.' },
      { status: 400 },
    );
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    return NextResponse.json(
      {
        error:
          'SMTP не настроен. Добавьте SMTP_USER и SMTP_PASS в переменные окружения Vercel.',
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"КоФактор" <${smtpUser}>`,
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `КоФактор: ${subject}`,
    text: [
      `Имя: ${name}`,
      `Email: ${email}`,
      `Тема: ${subject}`,
      '',
      'Сообщение:',
      message,
    ].join('\n'),
    html: `
      <h2>Новое сообщение с формы обратной связи</h2>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Тема:</strong> ${subject}</p>
      <p><strong>Сообщение:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
