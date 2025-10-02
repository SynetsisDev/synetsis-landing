export const metadata = {
  title: "FAQ de compra e implementación – Synetsis",
  description:
    "Preguntas frecuentes sobre tiempos de implementación, integración y data residency para soluciones de Synetsis.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold">FAQ de compra e implementación</h1>
        <p className="mt-2 text-foreground/80 max-w-2xl">
          Respuestas a las dudas más comunes sobre tiempos, integración y residencia de datos.
        </p>

        <div className="mt-10 divide-y divide-white/10">
          <section className="py-6" id="tiempos">
            <h2 className="text-lg font-semibold">¿Cuáles son los tiempos típicos de implementación?</h2>
            <p className="mt-2 text-foreground/80">
              Depende del alcance. Un piloto puede estar listo en 1–2 semanas; proyectos integrados con CRM/ERP suelen
              requerir 4–8 semanas incluyendo pruebas y capacitación.
            </p>
          </section>
          <section className="py-6" id="integracion">
            <h2 className="text-lg font-semibold">¿Cómo realizan las integraciones?</h2>
            <p className="mt-2 text-foreground/80">
              Utilizamos APIs estándar y conectores certificados (CRM, ERP, WhatsApp Business Platform, telefonía). Definimos
              flujos, autenticación y pruebas integrales antes de producción.
            </p>
          </section>
          <section className="py-6" id="data-residency">
            <h2 className="text-lg font-semibold">Residencia de datos (Data Residency)</h2>
            <p className="mt-2 text-foreground/80">
              Priorizamos la residencia en regiones solicitadas por el cliente. Para datos personales, cumplimos normativa
              aplicable (por ejemplo, Ley 19.628 y RGPD) y aplicamos cifrado en tránsito y en reposo.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
