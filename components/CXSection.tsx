"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckIcon } from "./icons";

gsap.registerPlugin(ScrollTrigger);

const features: { title: string; desc: string }[] = [
  { title: "Omnicanalidad (voz, chat, WhatsApp)", desc: "Unifica la experiencia en todos los canales con enrutamiento inteligente." },
  { title: "Grabación de llamadas y pantalla", desc: "Cumplimiento y calidad con almacenamiento seguro y búsqueda ágil." },
  { title: "Speech analytics", desc: "Insights automáticos de sentimiento, motivos de contacto y palabras clave." },
  { title: "Dashboards de BI", desc: "KPIs en tiempo real, reportes ejecutivos y seguimiento de SLAs." },
  { title: "Asistentes virtuales", desc: "Bots multicanal que resuelven rápido y escalan cuando corresponde." },
  { title: "Integraciones", desc: "Conecta CRM, ERP y plataformas CX para flujos sin fricción." },
  { title: "Escalabilidad cloud", desc: "Arquitectura elástica y de alta disponibilidad en la nube." },
  { title: "Seguridad y cumplimiento", desc: "Controles, auditoría y cifrado extremo a extremo." },
];

export default function CXSection() {
  const scope = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(scope);

      gsap.to(q(".cx-title"), {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: scope.current as Element,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      gsap.to(q(".cx-card"), {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        force3D: true,
        scrollTrigger: {
          trigger: scope.current as Element,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="cx" ref={scope} className="relative py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--brand)]"></span>
          <h2 className="cx-title text-2xl sm:text-3xl font-bold opacity-0 translate-y-4 will-change-transform">Plataforma y Soluciones CX</h2>
        </div>
        <p className="cx-title mt-3 max-w-3xl text-foreground/85 opacity-0 translate-y-4 will-change-transform">
          SaaS para potenciar tu centro de contacto: omnicanalidad, grabación, analytics y BI con asistentes virtuales multicanal sobre una arquitectura flexible y escalable.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="cx-card rounded-2xl p-6 ring-1 ring-black/10 bg-surface shadow-lg hover:shadow-xl hover:ring-[color:var(--brand)]/60 transition-transform transform hover:-translate-y-0.5 group min-h-32 opacity-0 translate-y-6 will-change-transform"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-[color:var(--brand)]/15 text-[color:var(--brand)]">
                  <CheckIcon />
                </span>
                <div>
                  <p className="text-[15px] sm:text-base font-semibold">{f.title}</p>
                  <p className="mt-1 text-sm text-foreground/75">{f.desc}</p>
                </div>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-[color:var(--brand)]/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[color:var(--brand)] text-[color:var(--on-brand)] font-semibold shadow-sm hover:shadow-md transition"
          >
            Solicitar demo
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full ring-1 ring-black/10 bg-surface text-foreground hover:ring-[color:var(--brand)]/60 transition"
          >
            Ver arquitectura
          </a>
        </div>
      </div>
    </section>
  );
}
