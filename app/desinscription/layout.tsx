import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Se desinscrire",
  description:
    "Formulaire de desinscription du service d'emailing RepairCopilot. Retirez-vous immediatement de nos listes d'envoi.",
  robots: { index: true, follow: true },
};

export default function DesinscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
