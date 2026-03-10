import type { MetadataRoute } from "next";
import { getAllNeighborhoodSlugs } from "@/data/neighborhoods";
import { getAllGuideSlugs } from "@/data/guides";
import { getAllConnectorSlugs } from "@/data/connectors";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tokyoitine.com";

  const durations = [1, 2, 3, 4, 5, 6, 7].map((d) => ({
    url: `${baseUrl}/${d}-day-tokyo-itinerary`,
    lastModified: new Date("2026-03-10"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const neighborhoods = getAllNeighborhoodSlugs().map((slug) => ({
    url: `${baseUrl}/neighborhoods/${slug}`,
    lastModified: new Date("2026-03-10"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const guides = getAllGuideSlugs().map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date("2026-03-10"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const connectors = getAllConnectorSlugs().map((slug) => ({
    url: `${baseUrl}/japan/${slug}`,
    lastModified: new Date("2026-03-10"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    ...durations,
    ...neighborhoods,
    ...guides,
    ...connectors,
  ];
}
