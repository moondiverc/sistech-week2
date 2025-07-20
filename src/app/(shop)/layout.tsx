import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HappyMart",
  description: "Discover a wide variety of collectible blind boxes — from popular anime figures to exclusive limited editions. Find your surprise, feel the thrill!",
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
        <header className="bg-pink-400 h-15 text-white flex px-4 items-center justify-between">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
          <Link href="./" className="font-bold text-3xl">HappyMart</Link>
          <div className="flex gap-x-10 justify-center w-full font-bold text-lg">
            <Link href="./" className="hover:text-rose-100">Home</Link>
            <Link href="./products" className="hover:text-rose-100">Product</Link>
            <Link href="./contact" className="hover:text-rose-100">Contact</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
