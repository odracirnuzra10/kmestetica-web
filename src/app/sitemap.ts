import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-04");
  return [
    {
      url: "https://kmestetica.cl/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://kmestetica.cl/fundador/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://kmestetica.cl/clinica/como-confirmamos-tu-hora-por-whatsapp",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://kmestetica.cl/clinica/que-pasa-con-tu-ficha-entre-sesiones",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://kmestetica.cl/clinica/por-que-respondemos-en-minutos",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://kmestetica.cl/clinera-opiniones",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
