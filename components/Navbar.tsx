"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { UserIcon } from "./icons";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[color:var(--surface)]/80 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--surface)]/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-horizontal.webp"
            alt="Synetsis"
            width={160}
            height={40}
            style={{ width: "150px", height: "35px" }}
            priority
            title="Synetsis Chile SpA"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {/* <Link href="/" className="text-foreground/80 hover:text-foreground" title="Inicio">Inicio</Link> */}
          <Link href="/#servicios" className="text-foreground/80 hover:text-foreground" title="Servicios">Servicios</Link>
          <Link href="/#nosotros" className="text-foreground/80 hover:text-foreground" title="Nosotros">Nosotros</Link>
          <Link href="/#cx" className="text-foreground/80 hover:text-foreground" title="Soluciones CX">Soluciones CX</Link>
          <Link href="/#soporte-sla" className="text-foreground/80 hover:text-foreground" title="Soporte &amp; SLA">Soporte &amp; SLA</Link>
          <Link href="/#faq" className="text-foreground/80 hover:text-foreground" title="FAQ">FAQ</Link>
          <Link href="/#contacto" className="text-foreground/80 hover:text-foreground" title="Contáctenos">Contáctenos</Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://odoo.synetsis.com/web"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Sistemas (Odoo) en una nueva pestaña"
            title="Sistemas (Odoo)"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-surface text-foreground/80 hover:text-foreground transition w-9 h-9"
          >
            <UserIcon size={20} />
          </a>
            {/* <Link
              href="/status"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-black/10 bg-surface px-3 py-1.5 text-xs font-medium text-foreground/80 hover:text-foreground transition"
              title="Ver estado del servicio"
            >
              <span className="inline-flex w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]"></span>
              Status
            </Link> */}
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] text-[color:var(--on-brand)] px-4 py-2 text-sm font-medium hover:brightness-95 transition"
          >
            Habla con nosotros
            <span aria-hidden>➜</span>
          </a>
        </div>
      </div>
    </header>
  );
}
