import Hero from "../components/Hero";
import { FacebookIcon, InstagramIcon, LinkedInIcon, PhoneIcon, MailIcon, OpsIcon, InfraIcon, CloudIcon, CheckIcon } from "../components/icons";
import CXSection from "../components/CXSection";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import Accordion, { AccordionItem } from "../components/Accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero />
        {/* Servicios IT especializadas */}
        <section id="servicios" className="py-18 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Servicios IT especializados para tu centro de contacto</h2>
            <p className="mt-3 max-w-3xl text-foreground/80">
              Administramos y damos soporte a toda tu infraestructura tecnológica garantizando continuidad operativa y máxima eficiencia. Gestionamos plataformas de comunicaciones, redes, servidores y servicios cloud disponibles 24/7.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl p-6 bg-surface ring-1 ring-black/5 shadow-sm hover:shadow-md transition">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[color:var(--brand)] text-[color:var(--on-brand)] mb-3">
                  <OpsIcon />
                </div>
                <h3 className="font-semibold">Operación 24/7</h3>
                <p className="mt-2 text-sm text-foreground/70">Monitoreo proactivo, alertamiento y continuidad operativa.</p>
                <ul className="mt-3 space-y-1 text-sm text-foreground/70 list-disc list-inside">
                  <li>NOC y soporte L1/L2/L3</li>
                  <li>Gestión de incidentes y cambios</li>
                  <li>Backups y planes de contingencia</li>
                </ul>
              </div>
              <div className="rounded-2xl p-6 bg-surface ring-1 ring-black/5 shadow-sm hover:shadow-md transition">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[color:var(--brand)] text-[color:var(--on-brand)] mb-3">
                  <InfraIcon />
                </div>
                <h3 className="font-semibold">Infraestructura y redes</h3>
                <p className="mt-2 text-sm text-foreground/70">Diseño, despliegue y hardening de plataformas.</p>
                <ul className="mt-3 space-y-1 text-sm text-foreground/70 list-disc list-inside">
                  <li>Servidores, virtualización y almacenamiento</li>
                  <li>Redes LAN/WAN, Wi‑Fi, SD‑WAN</li>
                  <li>Seguridad perimetral y Zero Trust</li>
                </ul>
              </div>
              <div className="rounded-2xl p-6 bg-surface ring-1 ring-black/5 shadow-sm hover:shadow-md transition">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[color:var(--brand)] text-[color:var(--on-brand)] mb-3">
                  <CloudIcon />
                </div>
                <h3 className="font-semibold">Cloud y automatización</h3>
                <p className="mt-2 text-sm text-foreground/70">Operaciones en la nube y orquestación de procesos.</p>
                <ul className="mt-3 space-y-1 text-sm text-foreground/70 list-disc list-inside">
                  <li>Infraestructura como código (IaC)</li>
                  <li>Pipelines CI/CD y observabilidad</li>
                  <li>Integraciones y bots con IA</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nosotros */}
        <Reveal>
          <section id="nosotros" className="py-18 scroll-mt-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Synetsis Chile SpA</h2>
              <div className="mt-4 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] items-start">
                <div className="space-y-4 text-foreground/90 max-w-none text-[15px] sm:text-base leading-7 sm:leading-8">
                  <p>
                    En Synetsis, somos expertos en servicios tecnológicos integrales con un enfoque especializado en Contact Centers internos y BPOs. Ofrecemos un amplio rango de soluciones que abarcan desde la implementación y el soporte de infraestructura tecnológica, incluyendo redes y telefonía (centrales telefónicas y plataformas de Contact Center), hasta el desarrollo e implementación de sistemas, como desarrollos a medida, RPA (Automatización Robótica de Procesos), CRMs, entre otros.
                  </p>
                  <p>
                    Nuestro compromiso es comprender a fondo las necesidades de nuestros clientes y proporcionarles soluciones tecnológicas eficientes, ya sea a través de nuevas implementaciones, integración de software existente o desarrollo personalizado, para ofrecerles un servicio que les permita alcanzar sus objetivos en el menor tiempo y costo posible.
                  </p>
                </div>
                <div className="rounded-lg p-4 bg-surface ring-1 ring-black/10 shadow-sm w-fit max-w-xs sm:max-w-sm justify-self-end self-start">
                  <h3 className="font-semibold">Nuestra propuesta</h3>
                  <ul className="mt-2 space-y-0.5 text-sm leading-6 text-foreground/80 list-disc list-inside">
                    <li>Experiencia en Contact Center y BPO</li>
                    <li>Integración de plataformas e IA</li>
                    <li>Operación 24/7 y continuidad</li>
                    <li>Proyectos rápidos, medibles y seguros</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        

        {/* Soluciones CX */}
        <CXSection />

        {/* Soporte & SLA */}
        <section id="soporte-sla" className="py-18 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Soporte &amp; SLA</h2>
            <p className="mt-3 max-w-3xl text-foreground/80">Canales y tiempos de respuesta para asegurar continuidad.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 bg-surface ring-1 ring-black/5">
                <h3 className="font-semibold">Canales</h3>
                <ul className="mt-2 text-sm text-foreground/75 list-disc list-inside space-y-1">
                  <li>Correo: soporte@synetsis.com</li>
                  <li>Teléfono: +56 (2) 2250-5215</li>
                  <li>Portal/mesa de ayuda (si aplica)</li>
                </ul>
              </div>
              <div className="rounded-2xl p-6 bg-surface ring-1 ring-black/5">
                <h3 className="font-semibold">Severidades y respuesta</h3>
                <ul className="mt-2 text-sm text-foreground/75 list-disc list-inside space-y-1">
                  <li>Crítica: 30 min, 24/7</li>
                  <li>Alta: 2 h</li>
                  <li>Media: 8 h hábiles</li>
                  <li>Baja: 24–48 h hábiles</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-18 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold">FAQ de compra e implementación</h2>
            <div className="mt-6">
              <Accordion type="single">
                <AccordionItem
                  title={
                    <>
                      <OpsIcon size={18} /> Tiempos
                      <span className="ml-2 inline-flex items-center rounded-full bg-black/5 px-2 py-0.5 text-[11px] font-medium text-foreground/70">
                        1–12 semanas
                      </span>
                    </>
                  }
                  defaultOpen
                >
                  <p>
                    Los plazos varían según alcance y dependencias externas. Como referencia:
                  </p>
                  <ul className="mt-2 list-disc list-inside text-foreground/70">
                    <li><strong>Piloto/MVP:</strong> 1–2 semanas (1 flujo, 1 integración ligera).</li>
                    <li><strong>Integración estándar:</strong> 4–8 semanas (CRM/ERP, telefonía, WABA).</li>
                    <li><strong>Proyecto end‑to‑end:</strong> 8–12 semanas (múltiples flujos, reporting, hardening).</li>
                  </ul>
                  <p className="mt-2">
                    Entregamos un <em>plan de hitos</em> con fechas, responsables y KPIs de aceptación desde el inicio.
                  </p>
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      <CloudIcon size={18} /> Integración
                      <span className="ml-2 inline-flex items-center rounded-full bg-black/5 px-2 py-0.5 text-[11px] font-medium text-foreground/70">
                        APIs & conectores
                      </span>
                    </>
                  }
                >
                  <p>
                    Trabajamos con APIs estándar y conectores certificados para reducir riesgos y tiempos de puesta en producción.
                  </p>
                  <ul className="mt-2 list-disc list-inside text-foreground/70">
                    <li>CRM/ERP: Salesforce, Dynamics, HubSpot, Odoo, SAP (vía BAPI/ODATA).</li>
                    <li>Telefonía/CC: SIP, WebRTC, Asterisk, Genesys, Avaya, Cisco, Five9.</li>
                    <li>Mensajería: WhatsApp Business (WABA), email, SMS, canales web.</li>
                  </ul>
                  <p className="mt-2">
                    Definimos contratos de datos claros (<code>request/response</code>), ambientes, y pruebas automatizadas para cada conector.
                  </p>
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      <InfraIcon size={18} /> Data Residency
                      <span className="ml-2 inline-flex items-center rounded-full bg-black/5 px-2 py-0.5 text-[11px] font-medium text-foreground/70">
                        Cumplimiento
                      </span>
                    </>
                  }
                >
                  <p>
                    Respetamos normativas locales y marcos internacionales para privacidad y protección de datos.
                  </p>
                  <ul className="mt-2 list-disc list-inside text-foreground/70">
                    <li><strong>Residencia:</strong> despliegue por región/país cuando es requerido.</li>
                    <li><strong>Cifrado:</strong> TLS 1.2+ en tránsito y AES‑256 en reposo.</li>
                    <li><strong>Cumplimiento:</strong> Ley 19.628, RGPD y políticas internas del cliente.</li>
                  </ul>
                  <p className="mt-2">
                    Ofrecemos <em>acuerdos de procesamiento de datos (DPA)</em> y controles de acceso con mínimo privilegio.
                  </p>
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      <CheckIcon size={18} /> SLA y soporte
                      <span className="ml-2 inline-flex items-center rounded-full bg-black/5 px-2 py-0.5 text-[11px] font-medium text-foreground/70">
                        24/7
                      </span>
                    </>
                  }
                >
                  <p>
                    Operación 24/7 con escalamiento L1/L2/L3 y monitoreo proactivo.
                  </p>
                  <ul className="mt-2 list-disc list-inside text-foreground/70">
                    <li>Crítica: respuesta &lt; 30 min (24/7) – recuperación prioritaria.</li>
                    <li>Alta: respuesta &lt; 2 h – impacto alto, workaround rápido.</li>
                    <li>Media/Baja: dentro de horario hábil, según ventana acordada.</li>
                  </ul>
                  <p className="mt-2">
                    Tableros de estado, registro de incidentes y reportes de disponibilidad mensuales.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-18 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-8 sm:p-12 bg-[color:var(--brand)] text-[color:var(--on-brand)] ring-1 ring-black/10">
              <h2 className="text-2xl sm:text-3xl font-bold">¿Listo para optimizar tu centro de contacto?</h2>
              <p className="mt-2 max-w-2xl">
                Conversemos sobre tus objetivos. Diseñamos proyectos tecnológicos a medida, integramos plataformas y orquestamos datos para procesos más rápidos y escalables.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
