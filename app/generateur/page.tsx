import type { Metadata } from "next";
import MailGeneratorForm from "@/components/MailGenerator/MailGeneratorForm";
import { WARRANTY_DISCLAIMER } from "@/lib/legal-references";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Générateur de mail de réclamation garantie légale – Gratuit",
  description:
    "Générez gratuitement un mail de réclamation professionnel pour faire valoir votre garantie légale de conformité (2 ans). Articles de loi inclus, 3 tons disponibles, prêt à envoyer en 30 secondes.",
  keywords: [
    "générateur mail réclamation",
    "lettre réclamation garantie",
    "modèle courrier garantie",
    "mail garantie légale",
    "réclamation garantie conformité",
    "modèle lettre panne appareil",
  ],
  alternates: {
    canonical: "/generateur",
  },
};

export default function GenerateurPage() {
  return (
    <>
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="eyebrow">Générateur</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
                Produis un mail que le vendeur devra prendre au sérieux
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-text-soft)]">
                Tu renseignes l&apos;achat, la panne et le ton souhaité. Le site calcule une
                estimation de garantie puis rédige un message réutilisable immédiatement.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="surface-card rounded-[24px] p-5">
                  <p className="text-sm font-semibold text-[var(--color-text)]">Aucune donnée stockée</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                    Le formulaire est conçu pour être utilisé sans compte ni espace personnel.
                  </p>
                </div>
                <div className="surface-card rounded-[24px] p-5">
                  <p className="text-sm font-semibold text-[var(--color-text)]">Réclamation + relance</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                    Tu repars avec un premier mail et une version de relance si le vendeur traîne.
                  </p>
                </div>
                <div className="surface-card rounded-[24px] p-5">
                  <p className="text-sm font-semibold text-[var(--color-text)]">Articles de loi intégrés</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                    Les références utiles sont déjà rédigées, sans jargon inutile dans le texte.
                  </p>
                </div>
              </div>
            </div>

            <div className="panel-dark rounded-[30px] p-6 text-white shadow-[0_30px_70px_-35px_rgba(15,23,42,0.75)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-highlight)]">
                Avant de commencer
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">Prépare simplement ces éléments</h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-white/78">
                <li>Le type d&apos;appareil, la marque et le vendeur.</li>
                <li>La date d&apos;achat et, si possible, un justificatif.</li>
                <li>Une description factuelle de la panne, sans roman ni agressivité.</li>
              </ul>
              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/6 p-5">
                <p className="text-sm font-semibold text-white">Conseil de fond</p>
                <p className="mt-2 text-sm leading-6 text-white/74">
                  Le meilleur levier n&apos;est pas d&apos;en faire trop. Il faut surtout un message net,
                  documenté et juridiquement propre. C&apos;est ce que ce formulaire vise à produire.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <MailGeneratorForm />
          </div>

          <div className="mt-8 rounded-[24px] border border-[var(--color-border)] bg-white px-5 py-4 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.35)]">
            <p className="text-xs leading-6 text-[var(--color-text-muted)]">
              <strong>Avertissement :</strong> {WARRANTY_DISCLAIMER}
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="surface-card rounded-[28px] p-7">
              <p className="eyebrow">Pourquoi ça marche</p>
              <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">
                Un vendeur traite mieux un message cadré qu&apos;une demande vague
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--color-text-soft)]">
                Lorsque tu rappelles clairement la date d&apos;achat, la nature de la panne et les
                articles applicables, tu évites une partie des réponses d&apos;évitement. Tu montres
                surtout que ta demande est sérieuse et documentée.
              </p>
            </div>

            <div className="surface-card rounded-[28px] p-7">
              <p className="eyebrow">Textes clés</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-soft)]">
                <li><strong>Article L217-3 :</strong> le vendeur répond des défauts de conformité.</li>
                <li><strong>Article L217-7 :</strong> pendant 24 mois, le défaut est présumé antérieur.</li>
                <li><strong>Article L217-8 :</strong> réparation ou remplacement selon le cadre légal.</li>
                <li><strong>Article L217-11 :</strong> la mise en conformité s&apos;effectue sans frais.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Générateur de mail de réclamation garantie",
            description:
              "Outil gratuit pour générer un mail de réclamation professionnel basé sur la garantie légale de conformité française.",
            url: `${SITE_URL}/generateur`,
            applicationCategory: "UtilityApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
            },
            inLanguage: "fr",
          }),
        }}
      />
    </>
  );
}