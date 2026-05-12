import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rehan Ali | AI/ML Engineer - Portfolio",
  description:
    "AI/ML Engineer specializing in production-grade LLM and Computer Vision systems. 5+ years delivering scalable AI pipelines across government, enterprise SaaS, and automation platforms.",
  keywords: [
    "Rehan Ali",
    "AI Engineer",
    "ML Engineer",
    "LLM",
    "Computer Vision",
    "RAG",
    "Portfolio",
  ],
  authors: [{ name: "Rehan Ali" }],
  openGraph: {
    title: "Rehan Ali | AI/ML Engineer",
    description: "Building the future with AI - Production-grade ML systems, LLMs, and Computer Vision",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground noise-overlay`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
