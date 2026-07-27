import type { MetadataRoute } from "next";
import { SITE_URL, person } from "@/lib/site";
import { resume } from "@/content/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [person.image],
    },
    {
      // PDFs are indexable, so the résumé gets its own entry.
      url: `${SITE_URL}${resume.path}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
