export const metadata = {
  title: "Política de Cookies – Synetsis",
  description: "Información sobre el uso de cookies y tecnologías similares en los sitios y apps de Synetsis.",
  alternates: { canonical: "/legales/cookies" },
};

export default function CookiesPage() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold">Política de Cookies</h1>
        <p className="text-foreground/80">Usamos cookies necesarias para el funcionamiento y opcionales para analítica/experiencia, previa autorización del usuario.</p>
        <div className="prose prose-invert">
          <h2>Tipos de cookies</h2>
          <ul>
            <li>Esenciales: operación básica del sitio.</li>
            <li>Analítica: métricas de uso para mejoras.</li>
            <li>Preferencias: recuerda opciones del usuario.</li>
          </ul>
          <h2>Gestión</h2>
          <p>Puedes gestionar o revocar tu consentimiento desde la configuración del navegador o un banner de cookies.</p>
        </div>
      </div>
    </main>
  );
}
