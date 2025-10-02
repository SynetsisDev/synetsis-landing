export const metadata = {
  title: "Estado del servicio – Synetsis",
  description: "Uptime e incidentes de los servicios de Synetsis.",
  alternates: { canonical: "/status" },
};

export default function StatusPage() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold">Estado del servicio</h1>
          <div className="flex items-center gap-3 rounded-xl bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20 px-4 py-3">
            <span className="inline-flex w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <p className="text-sm">Todos los sistemas operativos. Última actualización: hace 5 min.</p>
          </div>
        </header>

        {/* Componentes */}
        <section className="grid gap-4">
          {[
            { name: "API principal", ok: true },
            { name: "Panel de administración", ok: true },
            { name: "Plataforma de Contact Center", ok: true },
            { name: "Integraciones (CRM/ERP)", ok: true },
          ].map((c) => (
            <div key={c.name} className="rounded-2xl bg-surface ring-1 ring-black/10 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium">{c.name}</p>
                <span className={`inline-flex items-center gap-2 text-xs font-medium ${
                  c.ok ? "text-emerald-400" : "text-amber-400"
                }`}>
                  <span className={`w-2 h-2 rounded-full ${c.ok ? "bg-emerald-400" : "bg-amber-400"}`}></span>
                  {c.ok ? "Operativo" : "Degradado"}
                </span>
              </div>
              <div className="mt-3">
                {/* Barra de uptime (placeholder) */}
                <div className="grid grid-cols-30 gap-1">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="h-5 rounded-sm bg-emerald-500/30" />
                  ))}
                </div>
                <p className="mt-2 text-[11px] text-foreground/60">Uptime últimos 30 días (placeholder)</p>
              </div>
            </div>
          ))}
        </section>

        {/* Incidentes recientes */}
        <section className="rounded-2xl bg-surface ring-1 ring-black/10 p-6">
          <h2 className="text-base font-semibold">Incidentes recientes</h2>
          <p className="mt-1 text-sm text-foreground/70">No se registran incidentes en los últimos 30 días.</p>
        </section>

        {/* Nota */}
        <p className="text-xs text-foreground/50">Placeholder — puedes integrar un proveedor externo (Statuspage, UptimeRobot, BetterStack) o publicar manualmente aquí.</p>
      </div>
    </main>
  );
}
