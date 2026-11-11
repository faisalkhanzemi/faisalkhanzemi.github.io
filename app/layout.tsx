import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/lib/content";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = "https://faisalkhanzemi.github.io";
const TITLE = "Mohd Faisal Khan (faisalkhanzemi) — CRM Manager, Lifecycle Marketing";
const DESCRIPTION =
  "Mohd Faisal Khan (@faisalkhanzemi), CRM Manager at Traininpink in Dubai. 8+ years building customer journeys, automation and data-driven campaigns across subscription apps, home services, consumer tech, food delivery and retail.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  authors: [{ name: "Mohd Faisal Khan" }],
  keywords: [
    "CRM Manager",
    "Klaviyo",
    "faisalkhanzemi",
    "Lifecycle Marketing",
    "Retention Marketing",
    "CleverTap",
    "MoEngage",
    "Dubai",
    "Mohd Faisal Khan",
  ],
  openGraph: {
    title: TITLE,
    description:
      "CRM and lifecycle marketing that moves the retention needle. 8+ years across UAE, India, and Canada.",
    url: SITE_URL,
    siteName: "Mohd Faisal Khan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "CRM and lifecycle marketing that moves the retention needle. 8+ years across UAE, India, and Canada.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f8f6",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohd Faisal Khan",
  alternateName: profile.handle,
  jobTitle: "CRM Manager",
  worksFor: { "@type": "Organization", name: "Traininpink" },
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  sameAs: [
    profile.linkedinUrl,
    profile.githubUrl,
    profile.threadsUrl,
    profile.instagramUrl,
    profile.xUrl,
  ],
  knowsAbout: [
    "CRM",
    "Lifecycle Marketing",
    "Retention Marketing",
    "Marketing Automation",
    "A/B Testing",
    "Customer Segmentation",
    "SEO",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
