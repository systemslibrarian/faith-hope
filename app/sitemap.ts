import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// siteUrl is the canonical, fully-qualified site root and already includes any
// project-page basePath (e.g. .../faith-hope). Don't append basePath again.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://systemslibrarian.github.io/faith-hope";

const url = (path: string) => {
  const root = siteUrl.replace(/\/$/, "");
  const suffix = path.replace(/^\//, "");
  return `${root}/${suffix}`.replace(/\/$/, "") + "/";
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: url("/"), lastModified: now, priority: 1 },
    { url: url("/projects"), lastModified: now, priority: 0.9 },
    { url: url("/faith-and-hope"), lastModified: now, priority: 0.8 },
    { url: url("/about"), lastModified: now, priority: 0.7 },
  ];
}
