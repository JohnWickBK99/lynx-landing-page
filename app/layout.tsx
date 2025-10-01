import type { Metadata } from "next";
import localFont from "next/font/local";
import type React from "react";

import "./globals.css";

const suisseIntl = localFont({
  src: [
    {
      path: "../assets/fonts/SuisseIntl-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/SuisseIntl-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/SuisseIntl-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/SuisseIntl-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-suisse",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Lynx AI - Global AI & Web3 Solutions | Blockchain & AI Development",
  description:
    "Connect with the world through cutting-edge AI models, blockchain technology, and global Web3 innovations. We provide smart contract development, AI model training, DeFi protocols, and comprehensive blockchain consulting services.",
  keywords: [
    "Lynx AI",
    "AI solutions",
    "Web3 development",
    "blockchain technology",
    "smart contracts",
    "DeFi protocols",
    "AI model training",
    "blockchain consulting",
    "dApp development",
    "NFT platforms",
    "machine learning",
    "decentralized applications",
    "cross-chain solutions",
    "Web3 integration",
    "predictive analytics",
    "AI analytics",
  ],
  authors: [{ name: "Lynx AI" }],
  creator: "Lynx AI",
  publisher: "Lynx AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/logo/favicon.ico", sizes: "48x48" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lynxai.com",
    title: "Lynx AI - Global AI & Web3 Solutions",
    description:
      "Connect with the world through cutting-edge AI models, blockchain technology, and global Web3 innovations that transcend borders.",
    siteName: "Lynx AI",
    images: [
      {
        url: "/logo/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Lynx AI - Global AI & Web3 Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lynx AI - Global AI & Web3 Solutions",
    description:
      "Connect with the world through cutting-edge AI models, blockchain technology, and global Web3 innovations.",
    images: ["/logo/thumbnail.png"],
    creator: "@lynxai",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-site-verification",
    // yandex: "your-yandex-verification",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${suisseIntl.variable}`}>
      <body className="dark font-sans">{children}</body>
    </html>
  );
}
