import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Repair Copilot — Mail de réclamation garantie gratuit en 30 secondes",
    template: "%s | Repair Copilot",
  },
  description:
    "Appareil en panne ? Vérifiez gratuitement votre garantie légale de conformité (2 ans) et générez un mail de réclamation professionnel avec les articles de loi. Sans inscription, sans frais.",
  keywords: [
    "garantie légale conformité",
    "réclamation garantie",
    "appareil en panne garantie",
    "lettre réclamation garantie",
    "mail garantie légale",
    "droit consommateur panne",
    "électroménager en panne que faire",
    "modèle courrier garantie",
    "garantie 2 ans",
    "article L217-3",
  ],
  authors: [{ name: "Repair Copilot" }],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Repair Copilot",
    title: "Repair Copilot — Mail de réclamation garantie gratuit",
    description:
      "Appareil en panne ? Générez un mail de réclamation professionnel gratuit avec les articles de loi en 30 secondes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Repair Copilot — Générateur de mail de réclamation garantie légale",
      },
    ],
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
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
