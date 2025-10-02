import type { MetadataRoute } from "next";

const base = "https://synetsis.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const pages: Array<{ url: string; lastModified?: string; changeFrequency?: MetadataRoute.Sitemap[0]["changeFrequency"]; priority?: number; }> = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacidad`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/status`, changeFrequency: "daily", priority: 0.3 },
    { url: `${base}/legales/terminos`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/legales/cookies`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/legales/accesibilidad`, changeFrequency: "yearly", priority: 0.3 },
  ];

  return pages.map((p) => ({ ...p, lastModified: now }));
}
