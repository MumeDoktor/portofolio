import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} · ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.tagline,
  openGraph: {
    type: "website",
    title: `${profile.name} · ${profile.role}`,
    description: profile.tagline,
    siteName: profile.name,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#07090a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // Lets Next.js pause smooth scrolling during navigation so new pages open at the top.
      data-scroll-behavior="smooth"
      className={`${jetbrains.variable} antialiased`}
    >
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
