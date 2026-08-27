import type { MetadataRoute } from "next";

const BASE_URL = "https://kemetfc.com";

const primaryPaths = [
  "",
  "/academy",
  "/player-development",
  "/ai-assessment",
  "/programs",
  "/parents",
  "/about",
  "/partnerships",
  "/register",
  "/contact",
  "/faq",
];

const legalPaths = [
  "/legal/privacy-policy",
  "/legal/terms",
  "/legal/youth-data-privacy",
  "/legal/photo-video-policy",
  "/legal/refund-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...primaryPaths.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...legalPaths.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
