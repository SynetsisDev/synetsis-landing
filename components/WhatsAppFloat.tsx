import Link from "next/link";
import { WhatsAppIcon } from "./icons";

const PHONE = "56222505215";
const MESSAGE = encodeURIComponent("Buenos días, me gustaría solicitar una cotización para sus servicios.");
const HREF = `https://wa.me/${PHONE}?text=${MESSAGE}`;

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <Link
        href={HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp para cotizar un servicio"
        title="Escríbenos por WhatsApp"
        className="group inline-flex items-center justify-center w-14 h-14 rounded-full shadow-xl ring-1 ring-black/10 bg-[#25D366] text-white hover:scale-105 active:scale-95 transition-transform"
      >
        <WhatsAppIcon size={26} className="drop-shadow-sm" />
      </Link>
    </div>
  );
}
