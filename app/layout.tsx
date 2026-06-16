import type { Metadata } from "next";
import { DM_Serif_Display, Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Mohd Faisal Khan — CRM & Lifecycle Marketing Specialist",
  description:
    "CRM and lifecycle marketing specialist in Dubai. 8+ years building customer journeys, automation stacks, and data-driven campaigns across home services, consumer tech, food delivery, and retail.",
  openGraph: {
    title: "Mohd Faisal Khan — CRM & Lifecycle Marketing Specialist",
    description:
      "CRM and lifecycle marketing that moves the retention needle. 8+ years across UAE, India, and Canada.",
    type: "website",
  },
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
      <body>{children}</body>
    </html>
  );
}
