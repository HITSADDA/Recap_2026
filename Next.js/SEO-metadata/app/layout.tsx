import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Learn SEO Metadata in Next.js | Vishal Singh Rajpurohit",
    template: "%s | Vishal Singh Rajpurohit",
  },
  description: "Learn how to use SEO metadata in Next.js",
  icons: {
    icon: "/globe.svg", // Path to your favicon
  },
  keywords: ["Next.js", "SEO", "Metadata", "Vishal Singh Rajpurohit"],

  metadataBase: new URL("https://vishalsinghrajpurohit.me"),

  // Creates Open Graph metadata for social media sharing -> Card for Social media
  openGraph: {
    title: "Learn SEO Metadata in Next.js | Vishal Singh Rajpurohit",
    description: "Learn how to use SEO metadata in Next.js",
    url: "https://vishalsinghrajpurohit.me",
    siteName: "Vishal Singh Rajpurohit",
    images: [
      {
        url: "/globe.svg", // Path to your OG image
        width: 800,
        height: 600,
        alt: "Learn SEO Metadata in Next.js | Vishal Singh Rajpurohit",
      },
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn SEO Metadata in Next.js | Vishal Singh Rajpurohit",
    description: "Learn how to use SEO metadata in Next.js",
    images: ["/globe.svg"] // Path to your Twitter image
  },
  // No longer needed as Open Graph and Twitter metadata are already defined above. You can uncomment and use them if you want to customize them further.  
  // instagram: {
  //   title: "Learn SEO Metadata in Next.js | Vishal Singh Rajpurohit",
  //   description: "Learn how to use SEO metadata in Next.js",
  //   images: ["/globe.svg"] // Path to your Instagram image
  // },
  // facebook: {
  //   title: "Learn SEO Metadata in Next.js | Vishal Singh Rajpurohit",
  //   description: "Learn how to use SEO metadata in Next.js",
  //   images: ["/globe.svg"] // Path to your Facebook image  
  // }
};


function Header() {
  return (
    <header className="flex h-16 items-center  justify-around border-b border-zinc-200 bg-zinc-50 font-sans dark:border-zinc-800 dark:bg-black">
      <h1 className="font-bold text-xl">Header</h1>
      <ul className="flex space-x-4">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/blogs" className="hover:underline">Blogs</Link></li>
      </ul>
    </header>
  );
}

function Footer() {
  return (
    <footer className="flex h-16 items-center justify-center border-t border-zinc-200 bg-zinc-50 font-sans dark:border-zinc-800 dark:bg-black">
      <h1 className="font-bold text-xl">Footer</h1>
    </footer>
  );
}

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
