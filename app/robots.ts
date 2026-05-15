import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://systemslibrarian.github.io/faith-hope";

export default function robots(): MetadataRoute.Robots {
  const root = siteUrl.replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${root}/sitemap.xml`,
  };
}
