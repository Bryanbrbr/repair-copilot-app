import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Repair Copilot — Faites valoir votre garantie en 30 secondes",
    template: "%s | Repair Copilot",
  },
  description:
    "Votre appareil est en panne ? Découvrez vos droits de garantie et générez un mail de réclamation professionnel gratuit en 30 secondes. Garantie légale de conformité, Code de la consommation.",
  keywords: [
    "garantie légale",
    "réclamation garantie",
    "appareil en panne",
    "garantie conformité",
    "lettre réclamation",
    "mail garantie",
    "droit consommateur",
    "électroménager panne",
    "réparation garantie",
  ],
  authors: [{ name: "Repair Copilot" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Repair Copilot",
    title: "Repair Copilot — Faites valoir votre garantie en 30 secondes",
    description:
      "Votre appareil est en panne ? Générez un mail de réclamation professionnel gratuit basé sur vos droits de garantie.",
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
