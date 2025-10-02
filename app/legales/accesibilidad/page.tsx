export const metadata = {
  title: "Accesibilidad – Synetsis",
  description: "Compromiso de accesibilidad y buenas prácticas de Synetsis.",
  alternates: { canonical: "/legales/accesibilidad" },
};

export default function AccesibilidadPage() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold">Accesibilidad</h1>
        <p className="text-foreground/80">Buscamos cumplir con WCAG 2.1 AA. Si encuentras barreras, contáctanos.</p>
        <div className="prose prose-invert">
          <h2>Medidas</h2>
          <ul>
            <li>Contrastes adecuados y soporte de teclado.</li>
            <li>Etiquetas semánticas y roles ARIA cuando corresponde.</li>
            <li>Focus visible y estados de interacción.</li>
          </ul>
          <h2>Contacto</h2>
          <p>Correo: <a href="mailto:contacto@synetsis.com">contacto@synetsis.com</a></p>
        </div>
      </div>
    </main>
  );
}
