import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mitsadhana.com"),
  title: "Mits Sadhana — Verified Pandits, Fresh Daily Flowers & Pooja Samagri",
  description: "India's trusted spiritual companion. Book 100% verified Vedic Pandits, subscribe for fresh puja flowers delivered before 7:30 AM, and get authentic pooja samagri.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Mits Sadhana — Verified Pandits, Fresh Daily Flowers & Pooja Samagri",
    description: "Doorstep Vedic Pandits & fresh flower subscription before 7:30 AM every morning.",
    url: "https://mitsadhana.com",
    siteName: "Mits Sadhana",
    images: [
      {
        url: "/og-image.png",
        width: 512,
        height: 512,
        alt: "Mits Sadhana",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mits Sadhana — Verified Pandits, Fresh Daily Flowers & Pooja Samagri",
    description: "Doorstep Vedic Pandits & fresh flower subscription before 7:30 AM every morning.",
    images: ["/og-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
