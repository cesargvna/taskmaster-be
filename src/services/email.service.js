import { createTransport } from 'nodemailer';

const transport = createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    type: "LOGIN",
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
  // auth: {
  //   type: 'OAUTH2',
  //   user: process.env.SMTP_USER,
  //   clientId: process.env.SMTP_CLIENT_ID,
  //   clientSecret: process.env.SMTP_CLIENT_SECRET,
  // }
})

export async function sendMail(payload) {
  const verified = await transport.verify();
  if (!verified) throw new Error('SMTP is not configured');

  const isIdle = transport.isIdle();
  if (isIdle) return;

  const {
    to,
    subject,
    body,
  } = payload;

  try {
    await transport.sendMail({
      to,
      from: process.env.SMTP_USER,
      subject,
      html: body,
    });
  } catch (err) {
    console.log('error', JSON.stringify(err));
  }
}
