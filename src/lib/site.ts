// Canonical site URL: set NEXT_PUBLIC_SITE_URL once you have a custom domain.
// On Vercel this falls back to the production URL automatically.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
