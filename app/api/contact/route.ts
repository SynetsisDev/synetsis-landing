import { NextRequest, NextResponse } from "next/server";
import { transporter, mailDefaults } from "@/lib/mailer";
import { contactHtmlTemplate, contactTextTemplate } from "@/lib/emailTemplates";

export const runtime = "nodejs"; // Nodemailer requires Node.js runtime
export const dynamic = "force-dynamic";

function isEmail(v: string) {
  return /.+@.+\..+/.test(v);
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const name = String(data?.name || "").trim();
    const email = String(data?.email || "").trim();
    const message = String(data?.message || "").trim();
    const phone = data?.phone ? String(data.phone).trim() : undefined;
    const company = data?.company ? String(data.company).trim() : undefined;
    const origin = req.headers.get("referer") || data?.origin || undefined;

    // Basic validation
    const errors: string[] = [];
    if (!name) errors.push("El nombre es requerido");
    if (!email || !isEmail(email)) errors.push("Email inválido");
    if (!message) errors.push("El mensaje es requerido");
    if (errors.length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const subject = `Nuevo contacto — ${name}`;
    const html = contactHtmlTemplate({ name, email, phone, company, message, origin });
    const text = contactTextTemplate({ name, email, phone, company, message, origin });

    const to = process.env.MAIL_TO || mailDefaults.to;
    const from = process.env.MAIL_FROM || mailDefaults.from;

    const info = await transporter.sendMail({
      to,
      from,
      subject,
      html,
      text,
      replyTo: email,
      headers: {
        "X-Source": "synetsis-contact",
      },
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err: any) {
    console.error("[contact] error:", err);
    return NextResponse.json({ ok: false, error: "No se pudo enviar el mensaje" }, { status: 500 });
  }
}
