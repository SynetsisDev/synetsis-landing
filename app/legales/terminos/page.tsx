export const metadata = {
  title: "Términos y Condiciones – Synetsis",
  description: "Términos de uso de los servicios y sitio web de Synetsis.",
  alternates: { canonical: "/legales/terminos" },
};

export default function TerminosPage() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold">Términos y Condiciones</h1>
        <p className="text-foreground/80">Documento base de términos. Personalizar según tus servicios y contratos.</p>
        <div className="prose prose-invert">
          <h2>Uso aceptable</h2>
          <p>El usuario se compromete a utilizar los servicios conforme a la ley y a estas condiciones.</p>
          <h2>Propiedad intelectual</h2>
          <p>Los contenidos, marcas y software son propiedad de sus titulares y cuentan con la protección legal aplicable.</p>
          <h2>Limitación de responsabilidad</h2>
          <p>Synetsis no será responsable por daños indirectos o lucro cesante, en los límites permitidos por la ley.</p>
        </div>
      </div>
    </main>
  );
}
