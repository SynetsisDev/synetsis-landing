import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Synetsis Chile SpA | Soluciones tecnológicas para un mundo evolutivo",
    template: "%s | Synetsis Chile SpA",
  },
  description:
    "Telefonía avanzada, automatización de procesos y asistentes virtuales. Servicios IT para centros de contacto y soluciones CX en la nube.",
  metadataBase: new URL("https://synetsis.cl"),
  icons: { icon: "/favicon.ico" },
  applicationName: "Synetsis Chile SpA",
  keywords: [
    "Synetsis Chile SpA",
    "Soluciones tecnológicas",
    "Telefonía avanzada",
    "Automatización de procesos",
    "Asistentes virtuales",
    "Centros de contacto",
    "Soluciones CX",
    "Servicios IT",
    "Telefonía",
    "Automatización"
  ],
  openGraph: {
    title: "Synetsis Chile SpA | Soluciones tecnológicas para un mundo evolutivo",
    description:
      "Telefonía avanzada, automatización de procesos y asistentes virtuales. Servicios IT para centros de contacto y soluciones CX en la nube.",
    type: "website",
    locale: "es-AR",
    siteName: "Synetsis Chile SpA",
    images: [
      {
        url: "https://synetsis.cl/images/logo-horizontal.webp",
        width: 160,
        height: 40,
        alt: "Synetsis Chile SpA",
      },
    ],
  },
  robots: "/robots.txt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <div className="pt-16">{children}</div>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
