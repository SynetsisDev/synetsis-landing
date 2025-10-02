export const metadata = {
  title: "Política de Privacidad – Synetsis",
  description:
    "Política de Privacidad de Synetsis. Cómo recopilamos, usamos, almacenamos, compartimos y protegemos la información personal en nuestros sitios, aplicaciones e integraciones.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold">Política de Privacidad – Synetsis</h1>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-foreground/70 bg-surface rounded-full px-3 py-1 ring-1 ring-black/5">
              <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--brand)]"></span>
              Fecha de vigencia: 27 de agosto de 2025
            </p>
            <p className="mt-4 text-foreground/85 max-w-3xl">
              En <strong>Synetsis</strong> ("Synetsis", "nosotros", "nuestro"), respetamos y protegemos la privacidad de las personas que interactúan con nuestros servicios. Esta Política describe cómo recopilamos, utilizamos, almacenamos, compartimos y protegemos la información personal.
            </p>
          </header>

          <div className="mt-10 grid lg:grid-cols-4 gap-10">
            {/* Índice */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl bg-surface ring-1 ring-black/5 p-4 text-sm">
                <h3 className="font-semibold mb-2">Contenido</h3>
                <nav className="space-y-2">
                  {[
                    { id: "alcance", t: "1. Alcance" },
                    { id: "responsable", t: "2. Responsable del tratamiento" },
                    { id: "datos", t: "3. Información que recopilamos" },
                    { id: "finalidad", t: "4. Finalidad del tratamiento" },
                    { id: "base-legal", t: "5. Base legal" },
                    { id: "comparticion", t: "6. Compartición de información" },
                    { id: "transferencias", t: "7. Transferencias internacionales" },
                    { id: "conservacion", t: "8. Conservación de datos" },
                    { id: "derechos", t: "9. Derechos de los titulares" },
                    { id: "seguridad", t: "10. Seguridad de la información" },
                    { id: "terceros", t: "11. Servicios de terceros" },
                    { id: "menores", t: "12. Privacidad de menores" },
                    { id: "cambios", t: "13. Cambios en la política" },
                    { id: "contacto", t: "14. Contacto" },
                  ].map(({ id, t }) => (
                    <a key={id} href={`#${id}`} className="block text-foreground/80 hover:text-foreground">
                      {t}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Contenido */}
            <article className="lg:col-span-3 space-y-10">
              <section id="alcance" className="space-y-3">
                <h2 className="text-xl font-semibold">1. Alcance</h2>
                <p>Esta Política se aplica a:</p>
                <ul className="list-disc pl-5 space-y-1 text-foreground/85">
                  <li>
                    Nuestro sitio web oficial <a href="https://synetsis.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">https://synetsis.com</a> y páginas vinculadas.
                  </li>
                  <li>Aplicaciones, integraciones y servicios desarrollados o administrados por Synetsis.</li>
                  <li>Interacciones comerciales y de soporte tanto en línea como fuera de línea.</li>
                </ul>
                <p className="text-foreground/80">Quedan excluidos de este documento los datos procesados en nombre de clientes, en cuyo caso aplicarán los acuerdos contractuales específicos.</p>
              </section>

              <section id="responsable" className="space-y-3">
                <h2 className="text-xl font-semibold">2. Responsable del tratamiento</h2>
                <p>El responsable del tratamiento de los datos es Synetsis, con operaciones en Chile y Argentina. Las consultas relacionadas con privacidad deben dirigirse a:</p>
                <p>📩 <a href="mailto:contacto@synetsis.com" className="underline underline-offset-4">contacto@synetsis.com</a></p>
              </section>

              <section id="datos" className="space-y-3">
                <h2 className="text-xl font-semibold">3. Información que recopilamos</h2>
                <p>Podemos recopilar las siguientes categorías de información:</p>
                <ul className="list-disc pl-5 space-y-1 text-foreground/85">
                  <li>Datos de identificación y contacto: nombre, cargo, empresa, correo electrónico, teléfono.</li>
                  <li>Datos de comunicación: mensajes y metadatos generados en WhatsApp, Messenger, Instagram Direct u otros canales integrados.</li>
                  <li>Datos técnicos: direcciones IP, identificadores de dispositivo, navegador, cookies, registros de actividad.</li>
                  <li>Datos de uso: métricas de interacción, historial de soporte, formularios completados, eventos y descargas.</li>
                  <li>Datos comerciales: información de facturación y contractual cuando corresponda.</li>
                </ul>
              </section>

              <section id="finalidad" className="space-y-3">
                <h2 className="text-xl font-semibold">4. Finalidad del tratamiento</h2>
                <p>Los datos recopilados se utilizan para:</p>
                <ul className="list-disc pl-5 space-y-1 text-foreground/85">
                  <li>Prestar, personalizar y mejorar nuestros servicios.</li>
                  <li>Gestionar comunicaciones comerciales y de soporte.</li>
                  <li>Atender solicitudes de información, demostraciones y contacto.</li>
                  <li>Analizar métricas, realizar estudios de uso y generar estadísticas internas.</li>
                  <li>Cumplir con obligaciones legales, contractuales y regulatorias.</li>
                  <li>Prevenir fraudes, garantizar seguridad y mantener integridad de los sistemas.</li>
                </ul>
                <p className="text-foreground/80">Cuando se utilicen tecnologías como cookies, se informará y obtendrá el consentimiento conforme a la normativa aplicable.</p>
              </section>

              <section id="base-legal" className="space-y-3">
                <h2 className="text-xl font-semibold">5. Base legal</h2>
                <p>El tratamiento de datos personales se sustenta en:</p>
                <ul className="list-disc pl-5 space-y-1 text-foreground/85">
                  <li>El <strong>consentimiento del usuario</strong> al enviar formularios, registrarse o interactuar con nuestros servicios.</li>
                  <li>El <strong>interés legítimo</strong> de Synetsis para analizar, mejorar y proteger nuestras plataformas.</li>
                  <li>El cumplimiento de obligaciones legales o contractuales.</li>
                </ul>
              </section>

              <section id="comparticion" className="space-y-3">
                <h2 className="text-xl font-semibold">6. Compartición de información</h2>
                <p>Podemos compartir información personal únicamente con:</p>
                <ul className="list-disc pl-5 space-y-1 text-foreground/85">
                  <li>Proveedores de servicios tecnológicos y de infraestructura, bajo acuerdos de confidencialidad y seguridad.</li>
                  <li>Plataformas de terceros autorizadas, cuando el usuario haya vinculado o utilizado dichas integraciones.</li>
                  <li>Autoridades regulatorias, cuando la ley lo requiera.</li>
                </ul>
                <p className="text-foreground/80">Nunca vendemos ni alquilamos información personal.</p>
              </section>

              <section id="transferencias" className="space-y-3">
                <h2 className="text-xl font-semibold">7. Transferencias internacionales</h2>
                <p>En caso de transferir datos fuera del país de origen del usuario, implementamos garantías adecuadas como cláusulas contractuales tipo, asegurando niveles equivalentes de protección.</p>
              </section>

              <section id="conservacion" className="space-y-3">
                <h2 className="text-xl font-semibold">8. Conservación de datos</h2>
                <p>Conservamos la información personal solo durante el tiempo necesario para cumplir con las finalidades descritas o lo exigido por la ley. Posteriormente, los datos serán eliminados o anonimizados.</p>
              </section>

              <section id="derechos" className="space-y-3">
                <h2 className="text-xl font-semibold">9. Derechos de los titulares</h2>
                <p>Los usuarios tienen derecho a:</p>
                <ul className="list-disc pl-5 space-y-1 text-foreground/85">
                  <li>Acceder a sus datos.</li>
                  <li>Rectificar información inexacta.</li>
                  <li>Solicitar la supresión de datos.</li>
                  <li>Limitar u oponerse a determinados tratamientos.</li>
                  <li>Retirar el consentimiento otorgado en cualquier momento.</li>
                </ul>
                <p>Las solicitudes deberán enviarse a: <a href="mailto:contacto@synetsis.com" className="underline underline-offset-4">contacto@synetsis.com</a>.</p>
              </section>

              <section id="seguridad" className="space-y-3">
                <h2 className="text-xl font-semibold">10. Seguridad de la información</h2>
                <p>Aplicamos medidas técnicas y organizativas alineadas con estándares internacionales, incluyendo:</p>
                <ul className="list-disc pl-5 space-y-1 text-foreground/85">
                  <li>Cifrado de datos en tránsito y en reposo.</li>
                  <li>Control de accesos y autenticación reforzada.</li>
                  <li>Monitoreo, auditorías y planes de continuidad.</li>
                </ul>
                <p className="text-foreground/80">No obstante, ningún sistema es 100% seguro; por ello mantenemos planes de gestión de incidentes para mitigar riesgos.</p>
              </section>

              <section id="terceros" className="space-y-3">
                <h2 className="text-xl font-semibold">11. Servicios de terceros</h2>
                <p>Nuestros servicios pueden contener enlaces o integraciones con plataformas externas (ejemplo: Meta, Google, proveedores cloud). Cada una posee sus propias políticas de privacidad, por lo que recomendamos revisarlas.</p>
              </section>

              <section id="menores" className="space-y-3">
                <h2 className="text-xl font-semibold">12. Privacidad de menores</h2>
                <p>Nuestros servicios no están dirigidos a menores de 18 años, y no recopilamos intencionalmente datos de ellos. Si identificamos datos de menores, serán eliminados de forma inmediata.</p>
              </section>

              <section id="cambios" className="space-y-3">
                <h2 className="text-xl font-semibold">13. Cambios en la política</h2>
                <p>Podemos actualizar esta Política de Privacidad en cualquier momento. En caso de modificaciones significativas, lo comunicaremos mediante nuestros canales oficiales.</p>
              </section>

              <section id="contacto" className="space-y-3">
                <h2 className="text-xl font-semibold">14. Contacto</h2>
                <p>
                  Synetsis<br />
                  Email: <a href="mailto:contacto@synetsis.com" className="underline underline-offset-4">contacto@synetsis.com</a><br />
                  Sitio web: <a href="https://synetsis.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">https://synetsis.com</a>
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
