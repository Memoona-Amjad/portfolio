import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/siteUrl";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = `${site.name} | ${site.title}`;

// SEO + social sharing. The share image comes from app/opengraph-image.tsx
// and the favicon from app/icon.svg (Next.js adds both automatically).
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.contact.github }],
  keywords: [
    "Agentic AI",
    "AI agents",
    "AI engineer",
    "LangGraph",
    "LLM",
    "RAG",
    "Gemini",
    "Next.js",
    "Python",
    site.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0b10",
  colorScheme: "dark",
};

// Structured data so search engines understand this is a person's portfolio.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  email: `mailto:${site.contact.email}`,
  url: siteUrl(),
  sameAs: [site.contact.github, site.contact.linkedin].filter(Boolean),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
