import type { Metadata } from "next";
import MailGeneratorForm from "@/components/MailGenerator/MailGeneratorForm";
import { WARRANTY_DISCLAIMER } from "@/lib/legal-references";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "GÃ©nÃ©rateur de mail de rÃ©clamation garantie lÃ©gale â€” Gratuit",
  description:
    "GÃ©nÃ©rez gratuitement un mail de rÃ©clamation professionnel pour faire valoir votre garantie lÃ©gale de conformitÃ© (2 ans). Articles de loi inclus, 3 tons disponibles, prÃªt Ã  envoyer en 30 secondes.",
  keywords: [
    "gÃ©nÃ©rateur mail rÃ©clamation",
    "lettre rÃ©clamation garantie",
    "modÃ¨le courrier garantie",
    "mail garantie lÃ©gale",
    "rÃ©clamation garantie conformitÃ©",
    "modÃ¨le lettre panne appareil",
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
              <p className="eyebrow">GÃ©nÃ©rateur</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
                Produis un mail que le vendeur devra prendre au sÃ©rieux
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-text-soft)]">
                Tu renseignes l&apos;achat, la panne et le ton souhaitÃ©. Le site calcule une
                estimation de garantie puis rÃ©dige un message rÃ©utilisable immÃ©diatement.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="surface-card rounded-[24px] p-5">
                  <p className="text-sm font-semibold text-[var(--color-text)]">Aucune donnÃ©e stockÃ©e</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                    Le formulaire est conÃ§u pour Ãªtre utilisÃ© sans compte ni espace personnel.
                  </p>
                </div>
                <div className="surface-card rounded-[24px] p-5">
                  <p className="text-sm font-semibold text-[var(--color-text)]">RÃ©clamation + relance</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                    Tu repars avec un premier mail et une version de relance si le vendeur traÃ®ne.
                  </p>
                </div>
                <div className="surface-card rounded-[24px] p-5">
                  <p className="text-sm font-semibold text-[var(--color-text)]">Articles de loi intÃ©grÃ©s</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                    Les rÃ©fÃ©rences utiles sont dÃ©jÃ  rÃ©digÃ©es, sans jargon inutile dans le texte.
                  </p>
                </div>
              </div>
            </div>

            <div className="panel-dark rounded-[30px] p-6 text-white shadow-[0_30px_70px_-35px_rgba(15,23,42,0.75)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-highlight)]">
                Avant de commencer
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">PrÃ©pare simplement ces Ã©lÃ©ments</h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-white/78">
                <li>Le type d&apos;appareil, la marque et le vendeur.</li>
                <li>La date d&apos;achat et, si possible, un justificatif.</li>
                <li>Une description factuelle de la panne, sans roman ni agressivitÃ©.</li>
              </ul>
              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/6 p-5">
                <p className="text-sm font-semibold text-white">Conseil de fond</p>
                <p className="mt-2 text-sm leading-6 text-white/74">
                  Le meilleur levier n&apos;est pas d&apos;en faire trop. Il faut surtout un message net,
                  documentÃ© et juridiquement propre. C&apos;est ce que ce formulaire vise Ã  produire.
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
              <p className="eyebrow">Pourquoi Ã§a marche</p>
              <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">
                Un vendeur traite mieux un message cadrÃ© qu&apos;une demande vague
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--color-text-soft)]">
                Lorsque tu rappelles clairement la date d&apos;achat, la nature de la panne et les
                articles applicables, tu Ã©vites une partie des rÃ©ponses d&apos;Ã©vitement. Tu montres
                surtout que ta demande est sÃ©rieuse et documentÃ©e.
              </p>
            </div>

            <div className="surface-card rounded-[28px] p-7">
              <p className="eyebrow">Textes clÃ©s</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-soft)]">
                <li><strong>Article L217-3 :</strong> le vendeur rÃ©pond des dÃ©fauts de conformitÃ©.</li>
                <li><strong>Article L217-7 :</strong> pendant 24 mois, le dÃ©faut est prÃ©sumÃ© antÃ©rieur.</li>
                <li><strong>Article L217-8 :</strong> rÃ©paration ou remplacement selon le cadre lÃ©gal.</li>
                <li><strong>Article L217-11 :</strong> la mise en conformitÃ© s&apos;effectue sans frais.</li>
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
            name: "GÃ©nÃ©rateur de mail de rÃ©clamation garantie",
            description:
              "Outil gratuit pour gÃ©nÃ©rer un mail de rÃ©clamation professionnel basÃ© sur la garantie lÃ©gale de conformitÃ© franÃ§aise.",
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