import nodemailer from "nodemailer";

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } = process.env as Record<string, string | undefined>;

function bool(value: string | undefined) {
  return value === "true" || value === "1";
}

if (!SMTP_HOST || !SMTP_PORT) {
  // We don't throw here to allow build to succeed; runtime will error if used without config
  console.warn("[mailer] Missing SMTP_HOST/SMTP_PORT. Configure your .env to send emails.");
}

export const mailDefaults = {
  from: MAIL_FROM || '"Synetsis Website" <no-reply@synetsis.cl>',
  to: MAIL_TO || 'contacto@synetsis.cl',
};

export const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT || 587),
  secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
});

export async function verifyTransport() {
  try {
    await transporter.verify();
    return true;
  } catch (e) {
    console.error("[mailer] Transport verify failed:", e);
    return false;
  }
}
