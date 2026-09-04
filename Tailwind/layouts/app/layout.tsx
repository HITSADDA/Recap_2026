'use client';

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

function Header() {
  return (
    <header className="flex h-16 items-center  justify-around border-b border-zinc-200 bg-zinc-50 font-sans dark:border-zinc-800 dark:bg-black">
      <h1 className="font-bold text-xl">Header</h1>
      <ul className="flex space-x-4">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/topics/grid" className="hover:underline">grid</Link></li>
        <li><Link href="/topics/peer" className="hover:underline">peer</Link></li>
        <li><Link href="/topics/group" className="hover:underline">group</Link></li>
        <li><Link href="/topics/apply-declarative" className="hover:underline">apply-declarative</Link></li>
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
        <motion.div
          className="flex flex-1 flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
        {children}
        </motion.div>
        <Footer />
      </body>
    </html>
  );
}
