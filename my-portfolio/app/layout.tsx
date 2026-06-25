import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "David Meguira — Développeur Full Stack",
  description:
    "Portfolio de David Meguira, développeur Full Stack en Master Ingénierie du Web à l'ESGI, alternant chez Lydia Solutions. React, TypeScript, Next.js, Laravel.",
  keywords: ["David Meguira", "développeur full stack", "React", "TypeScript", "Next.js", "Laravel", "portfolio", "ESGI", "Lydia Solutions"],
  authors: [{ name: "David Meguira" }],
  openGraph: {
    title: "David Meguira — Développeur Full Stack",
    description:
      "Portfolio de David Meguira, développeur Full Stack en alternance chez Lydia Solutions. React, TypeScript, Next.js, Laravel.",
    type: "website",
    locale: "fr_FR",
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
    <html lang="fr" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
