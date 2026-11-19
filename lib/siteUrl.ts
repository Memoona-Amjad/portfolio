import { site } from "@/content/site";

/**
 * The site's public URL (used for SEO tags, the sitemap and the share image).
 * Order: custom URL in content/site.ts -> Vercel's production URL -> localhost.
 * VERCEL_PROJECT_PRODUCTION_URL is set automatically by Vercel at build time.
 */
export function siteUrl(): string {
  if (site.url) return site.url.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
