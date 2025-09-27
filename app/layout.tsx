import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: {
//     default: "PromptPay — Buy & Sell AI Prompts",
//     template: "%s | PromptPay",
//   },
//   description: "PromptPay — a marketplace for AI prompt creators and consumers. Upload, browse, and purchase prompts with ease.",
//   applicationName: "PromptPay",
//   authors: [
//     { name: "PromptPay Team", url: "https://your-domain.com" },
//   ],
//   generator: "PromptPay App",
//   keywords: [
//     "AI prompts",
//     "prompt marketplace",
//     "PromptPay",
//     "buy prompts",
//     "sell prompts",
//     "prompt sharing",
//   ],
//   openGraph: {
//     title: "PromptPay — Buy & Sell AI Prompts",
//     description: "A place for prompt creators and consumers to connect. Upload, browse & purchase prompts.",
//     url: "https://your-domain.com",
//     siteName: "PromptPay",
//     images: [
//       {
//         url: "http://localhost:3000/logo.png", // make sure this is absolute
//         width: 512,
//         height: 512,
//         alt: "PromptPay Logo",
//         type: "image/png",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "PromptPay — Buy & Sell AI Prompts",
//     description: "A marketplace for prompt creators and consumers. Upload, browse & purchase prompts.",
//     images: ["http://localhost:3000/logo.png"],
//     // optionally add creator / site handles
//     // creator: "@your_twitter_handle",
//     // site: "@your_twitter_handle",
//   },
//   icons: {
//     icon: "/logo.png",
//     shortcut: "/logo.png",
//     apple: "/logo.png",
//   },
//   // Optionally add other metadata like robots, verification, formatDetection, etc.
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

export const metadata: Metadata = {
  title: {
    default: "PromptPay — Buy & Sell AI Prompts",
    template: "%s | PromptPay",
  },
  description:
    "PromptPay — a marketplace for AI prompt creators and consumers. Upload, browse, and purchase prompts with ease.",
  applicationName: "PromptPay",
  authors: [
    { name: "PromptPay Team", url: "https://your-domain.com" },
  ],
  generator: "PromptPay App",
  keywords: [
    "AI prompts",
    "prompt marketplace",
    "PromptPay",
    "buy prompts",
    "sell prompts",
    "prompt sharing",
  ],
  openGraph: {
    title: "PromptPay — Buy & Sell AI Prompts",
    description:
      "A place for prompt creators and consumers to connect. Upload, browse & purchase prompts.",
    url: "https://your-domain.com",
    siteName: "PromptPay",
    images: [
      {
        url: "https://your-domain.com/logo.png",
        width: 512,
        height: 512,
        alt: "PromptPay Logo",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptPay — Buy & Sell AI Prompts",
    description:
      "A marketplace for prompt creators and consumers. Upload, browse & purchase prompts.",
    images: ["https://your-domain.com/logo.png"],
  },
  icons: {
    // This “icon” entry will cause Next.js to emit <link rel="icon" href="/favicon.ico" …>
    icon: "favicon.ico",
    // We can also optionally specify apple and shortcut icons:
    shortcut: "favicon.ico",
    apple: "favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
