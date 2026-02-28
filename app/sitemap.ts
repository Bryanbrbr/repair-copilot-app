import type { MetadataRoute } from "next";
import { getAllApplianceSlugs } from "@/lib/appliances";
import { getAllProblemPageParams } from "@/lib/problem-pages";
import { getAllBlogSlugs } from "@/lib/blog";
import { SITE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const now = new Date();

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/generateur`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  // Pages dynamiques — guides par appareil
  const guidePages: MetadataRoute.Sitemap = getAllApplianceSlugs().map(
    (slug) => ({
      url: `${baseUrl}/guide/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // Pages longue traîne — pannes spécifiques
  const problemPages: MetadataRoute.Sitemap = getAllProblemPageParams().map(
    ({ slug, problemSlug }) => ({
      url: `${baseUrl}/guide/${slug}/${problemSlug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  // Pages blog
  const blogIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  const blogPostPages: MetadataRoute.Sitemap = getAllBlogSlugs().map(
    (slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  return [
    ...staticPages,
    ...guidePages,
    ...problemPages,
    ...blogIndexPage,
    ...blogPostPages,
  ];
}
