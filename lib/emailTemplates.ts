export function contactHtmlTemplate(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  origin?: string;
}) {
  const { name, email, phone, company, message, origin } = data;
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;");
  return `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Nuevo contacto — Synetsis</title>
      <style>
        body { font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif; background:#f7f7f7; color:#111; }
        .card { max-width: 640px; margin: 32px auto; background: #fff; border-radius: 14px; border: 1px solid rgba(0,0,0,.06); box-shadow: 0 10px 30px rgba(0,0,0,.05); overflow:hidden; }
        .header { background: #E5DF49; color: #111; padding: 16px 20px; font-weight: 700; }
        .content { padding: 20px; }
        .row { margin-bottom: 8px; }
        .label { font-size: 12px; color: #666; }
        .value { font-size: 14px; color: #111; }
        .msg { white-space: pre-wrap; border: 1px solid rgba(0,0,0,.06); padding: 12px; border-radius: 10px; background:#fafafa; }
        .footer { padding: 16px 20px; font-size: 12px; color:#555; border-top:1px solid rgba(0,0,0,.06); }
        a { color: #0b6bcb; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">Nuevo contacto desde el sitio</div>
        <div class="content">
          <div class="row"><span class="label">Nombre</span><div class="value">${esc(name)}</div></div>
          <div class="row"><span class="label">Email</span><div class="value"><a href="mailto:${esc(email)}">${esc(email)}</a></div></div>
          ${phone ? `<div class="row"><span class="label">Teléfono</span><div class="value">${esc(phone)}</div></div>` : ""}
          ${company ? `<div class="row"><span class="label">Empresa</span><div class="value">${esc(company)}</div></div>` : ""}
          ${origin ? `<div class="row"><span class="label">Origen</span><div class="value">${esc(origin)}</div></div>` : ""}
          <div class="row"><span class="label">Mensaje</span><div class="msg">${esc(message)}</div></div>
        </div>
        <div class="footer">
          Enviado automáticamente por synetsis.cl
        </div>
      </div>
    </body>
  </html>
  `;
}

export function contactTextTemplate(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  origin?: string;
}) {
  const lines = [
    `Nombre: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Teléfono: ${data.phone}` : undefined,
    data.company ? `Empresa: ${data.company}` : undefined,
    data.origin ? `Origen: ${data.origin}` : undefined,
    "",
    "Mensaje:",
    data.message,
    "",
    "— Enviado automáticamente por synetsis.cl",
  ].filter(Boolean);
  return lines.join("\n");
}
