import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/siteUrl";

// /sitemap.xml for search engines (a one-page site, so one entry).
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl()}/`, changeFrequency: "monthly", priority: 1 }];
}
