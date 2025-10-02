"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero='badge']", { y: 10, opacity: 0, duration: 0.6 })
        .from("[data-hero='title']", { y: 30, opacity: 0, duration: 0.8 }, "<0.05")
        .from("[data-hero='desc']", { y: 20, opacity: 0, duration: 0.6 }, "<0.1")
        .from("[data-hero='cta']", { y: 10, opacity: 0, duration: 0.6 }, "<0.05");

      // gentle parallax on mouse move
      const onMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 10;
        const y = (e.clientY / innerHeight - 0.5) * 10;
        gsap.to("[data-hero='video']", { xPercent: x, yPercent: y, duration: 0.6 });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    },
    { scope: root }
  );

  return (
    <section id="inicio" ref={root} className="relative pt-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <span
              data-hero="badge"
              className="inline-block text-xs font-semibold tracking-wide rounded-full px-3 py-1 bg-[color:var(--brand)] text-[color:var(--on-brand)] ring-1 ring-black/10 shadow-sm"
            >
              Synetsis Chile SpA
            </span>
            <h1 data-hero="title" className="mt-4 text-4xl/[1.1] sm:text-5xl md:text-6xl font-extrabold text-foreground">
              Soluciones tecnológicas para un mundo evolutivo.
            </h1>
            <p data-hero="desc" className="mt-5 text-base sm:text-lg text-foreground/80 max-w-xl">
              Impulsamos la comunicación de tu empresa con tecnología inteligente: telefonía avanzada, automatización de procesos y asistentes virtuales para optimizar la atención al cliente.
            </p>
            <div data-hero="cta" className="mt-7 flex flex-wrap gap-3">
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] text-[color:var(--on-brand)] px-5 py-3 text-sm font-semibold hover:brightness-95 transition">
                Habla con nosotros <span aria-hidden>➜</span>
              </a>
              <a href="#servicios" className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-foreground/90 hover:bg-black/5 transition">
                Ver servicios
              </a>
            </div>
          </div>

          <div className="relative aspect-[16/10] lg:aspect-[5/4]">
            <div data-hero="video" className="absolute inset-0 rounded-[28px] overflow-hidden shadow-2xl ring-1 ring-black/10">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/videos/synetsis-video.mp4" type="video/mp4" />
              </video>
            </div>
            {/* decorative shapes */}
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-[40px] bg-[color:var(--brand)]/25 blur-2xl"></div>
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[color:var(--brand-dark)]/15 blur-2xl"></div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-b from-transparent to-background"></div>
    </section>
  );
}
