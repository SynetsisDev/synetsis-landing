import { FacebookIcon, InstagramIcon, LinkedInIcon, PhoneIcon, MailIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm text-foreground/60">© <span suppressHydrationWarning>{new Date().getFullYear()}</span> Synetsis Chile SpA</p>
            <nav className="text-sm flex flex-wrap gap-x-4 gap-y-2 text-foreground/80">
              <a href="/privacidad" className="hover:text-foreground">Privacidad</a>
              <a href="/legales/terminos" className="hover:text-foreground">Términos</a>
              <a href="/legales/cookies" className="hover:text-foreground">Cookies</a>
              <a href="/legales/accesibilidad" className="hover:text-foreground">Accesibilidad</a>
              <a href="/status" className="hover:text-foreground">Status</a>
              <a href="/soporte-sla" className="hover:text-foreground">Soporte &amp; SLA</a>
              <a href="/faq" className="hover:text-foreground">FAQ</a>
              <a href="/#nosotros" className="hover:text-foreground">Nosotros</a>
            </nav>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-medium text-foreground">Contacto</p>
            <div className="flex items-center gap-4 flex-wrap">
              <a href="tel:+56222505215" className="inline-flex items-center gap-2 hover:text-foreground/90"><PhoneIcon /> <span suppressHydrationWarning>+56 (2) 2250-5215</span></a>
              <span className="hidden md:inline text-foreground/30">•</span>
              <a href="mailto:contacto@synetsis.com" className="inline-flex items-center gap-2 hover:text-foreground/90"><MailIcon /> <span suppressHydrationWarning>contacto@synetsis.com</span></a>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-medium text-foreground">Síguenos</p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/synetsisgroup" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground/90"><FacebookIcon /> Facebook</a>
              <a href="https://www.instagram.com/synetsis/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground/90"><InstagramIcon /> Instagram</a>
              <a href="https://www.linkedin.com/company/synetsis/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground/90"><LinkedInIcon /> LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
