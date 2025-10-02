"use client";

import { useState, useEffect } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; msg: string; details?: string[]; code?: number } | null>(null);

  // Auto-hide feedback after a short delay
  useEffect(() => {
    if (!result) return;
    const timeout = setTimeout(() => setResult(null), result.ok ? 2500 : 3500);
    return () => clearTimeout(timeout);
  }, [result]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    if (!form.name || !form.email || !form.message) {
      setResult({ ok: false, msg: "Revisa los campos obligatorios.", details: ["Nombre, email y mensaje son requeridos."] });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          company: form.company || undefined,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        const details: string[] | undefined = Array.isArray(data?.errors) ? data.errors : undefined;
        const baseMsg = data?.error || (res.status === 400 ? "Revisa los datos ingresados." : "No pudimos enviar tu mensaje en este momento.");
        setResult({ ok: false, msg: baseMsg, details, code: res.status });
      } else {
        setResult({
          ok: true,
          msg: "¡Gracias! Recibimos tu mensaje y te contactaremos a la brevedad.",
        });
        setForm({ name: "", email: "", phone: "", company: "", message: "" });
      }
    } catch (e) {
      setResult({
        ok: false,
        msg: "No hay conexión con el servidor.",
        details: ["Verifica tu conexión a internet e intenta nuevamente."],
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-3">
      <input
        name="name"
        required
        placeholder="Nombre"
        value={form.name}
        onChange={onChange}
        className="px-4 py-3 rounded-xl text-sm bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/20"
      />
      <input
        name="email"
        required
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={onChange}
        className="px-4 py-3 rounded-xl text-sm bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/20"
      />
      <input
        name="phone"
        type="tel"
        placeholder="Teléfono"
        value={form.phone}
        onChange={onChange}
        className="px-4 py-3 rounded-xl text-sm bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/20"
      />
      <input
        name="company"
        placeholder="Empresa"
        value={form.company}
        onChange={onChange}
        className="px-4 py-3 rounded-xl text-sm bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/20"
      />
      <textarea
        name="message"
        required
        placeholder="Cuéntanos brevemente tu necesidad"
        value={form.message}
        onChange={onChange}
        className="px-4 py-3 rounded-xl text-sm bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/20 sm:col-span-2 min-h-28"
      />
      <div className="sm:col-span-2 flex flex-col gap-2 items-stretch">
        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-3 text-sm font-semibold hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Enviando…" : "Enviar mensaje"}
        </button>
      </div>
    </form>
    {result && (
      <div className="fixed top-6 right-6 z-50 max-w-sm w-[calc(100vw-2rem)] sm:w-96">
        <div
          role="status"
          aria-live="polite"
          className={
            "relative rounded-xl px-4 py-3 text-sm shadow-lg border " +
            (result.ok
              ? "bg-green-600 text-white border-green-700"
              : "bg-red-600 text-white border-red-700")
          }
        >
          <button
            type="button"
            aria-label="Cerrar notificación"
            onClick={() => setResult(null)}
            className="absolute top-2 right-2 inline-flex items-center justify-center rounded-md/2 text-white/90 hover:text-white"
          >
            ×
          </button>
          <p className="font-medium pr-6">{result.msg}</p>
          {result.details && result.details.length > 0 && (
            <ul className="mt-1 list-disc list-inside text-[13px] text-white/90">
              {result.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
          {!result.ok && (
            <p className="mt-1 text-[13px] text-white/85">
              Si el problema persiste, contáctanos a <a className="underline" href="mailto:contacto@synetsis.cl">contacto@synetsis.cl</a>.
            </p>
          )}
        </div>
      </div>
    )}
    </>
  );
}
