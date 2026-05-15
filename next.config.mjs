/** @type {import('next').NextConfig} */

// GitHub Pages deploys to https://systemslibrarian.github.io/faith-hope/
// so the production build needs a basePath. Local dev keeps `/` clean.
// Set NEXT_PUBLIC_BASE_PATH="" when deploying to a custom domain or a user-page repo.
const isProd = process.env.NODE_ENV === "production";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? "/faith-hope" : "");

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
