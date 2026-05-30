import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import Navbar from "./_components/navbar/Navbar";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "sonner";

const space = Space_Grotesk({
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kerolos Adly | Front-End Developer",
  description: "Front-End Developer specialized in React and Next.js. Check out my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${space.className} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
