import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-03");
  return [
    {
      url: "https://kmestetica.cl/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://kmestetica.cl/clinera-reclamos",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
