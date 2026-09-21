// Canonical site URL. Metadata, the sitemap and robots.txt all point here, so
// it stays the custom domain even on a preview deployment — a preview should
// not advertise itself as the canonical address. Override it with
// NEXT_PUBLIC_SITE_URL if a build ever needs to claim a different origin.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amarmuminovic.com";
