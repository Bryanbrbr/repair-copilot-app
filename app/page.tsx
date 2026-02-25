import type { Metadata } from "next";
import Link from "next/link";
import { appliances } from "@/lib/appliances";

export const metadata: Metadata = {
  title: "Repair Copilot — Votre appareil est en panne ? Vos droits en 30 secondes",
  description:
    "Votre appareil est en panne ? Découvrez gratuitement vos droits de garantie et générez un mail de réclamation professionnel en 30 secondes. Garantie légale, Code de la consommation.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)] leading-tight mb-6">
            Votre appareil est en panne ?
            <br />
            <span className="text-[var(--color-primary)]">
              Découvrez vos droits en 30 secondes
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-light)] max-w-2xl mx-auto mb-8 leading-relaxed">
            Ne rachetez pas trop vite. La garantie légale vous protège pendant
            <strong> 2 ans</strong>. Vérifiez vos droits et générez un mail de
            réclamation professionnel <strong>gratuitement</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/generateur"
              className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white text-lg font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              🔧 Générer mon mail de réclamation
            </Link>
            <Link
              href="/guide"
              className="bg-white hover:bg-gray-50 text-[var(--color-primary)] text-lg font-semibold px-8 py-4 rounded-xl transition-colors border-2 border-[var(--color-primary)]"
            >
              📖 Consulter les guides
            </Link>
          </div>
        </div>
      </section>

      {/* Proposition de valeur */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[var(--color-text)] mb-12">
            Pourquoi utiliser Repair Copilot ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">
                Connaissez vos droits
              </h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                La garantie légale de conformité vous protège <strong>2 ans</strong> après
                l&apos;achat. Le vendeur doit réparer ou remplacer sans frais.
                Beaucoup de consommateurs l&apos;ignorent.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">
                Mail prêt en 30 secondes
              </h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                Générez un mail de réclamation professionnel avec les bons
                articles de loi. Plus besoin de chercher des modèles sur
                internet.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">
                100% gratuit
              </h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                Aucun compte à créer, aucun paiement. Vérifiez votre garantie et
                générez votre mail sans inscription ni engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[var(--color-text)] mb-12">
            Comment ça marche ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)]">
                Décrivez votre panne
              </h3>
              <p className="text-[var(--color-text-light)]">
                Type d&apos;appareil, marque, date d&apos;achat, magasin et description du
                problème.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)]">
                Vérifiez votre garantie
              </h3>
              <p className="text-[var(--color-text-light)]">
                On calcule automatiquement si votre garantie légale de 2 ans est
                encore active.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)]">
                Copiez et envoyez
              </h3>
              <p className="text-[var(--color-text-light)]">
                Un mail professionnel avec les articles de loi est généré.
                Copiez-le et envoyez-le au vendeur.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/generateur"
              className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white text-lg font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl inline-block"
            >
              Commencer maintenant →
            </Link>
          </div>
        </div>
      </section>

      {/* Appareils couverts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[var(--color-text)] mb-4">
            Guides par appareil
          </h2>
          <p className="text-center text-[var(--color-text-light)] mb-12 max-w-2xl mx-auto">
            Consultez nos guides dédiés pour comprendre vos droits selon votre type
            d&apos;appareil en panne.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {appliances.map((appliance) => (
              <Link
                key={appliance.slug}
                href={`/guide/${appliance.slug}`}
                className="flex flex-col items-center p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-primary-light)] hover:shadow-md transition-all"
              >
                <span className="text-3xl mb-2">{appliance.icon}</span>
                <span className="text-sm font-medium text-[var(--color-text)] text-center">
                  {appliance.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ pour SEO */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[var(--color-text)] mb-12">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            <details className="bg-white rounded-xl border border-[var(--color-border)] p-6 group">
              <summary className="font-semibold text-[var(--color-text)] cursor-pointer list-none flex items-center justify-between">
                Qu&apos;est-ce que la garantie légale de conformité ?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">
                La garantie légale de conformité est une protection prévue par le Code de la
                consommation français (articles L217-3 et suivants). Elle oblige le vendeur à
                réparer ou remplacer tout produit présentant un défaut de conformité dans les
                24 mois suivant l&apos;achat, sans frais pour le consommateur.
              </p>
            </details>
            <details className="bg-white rounded-xl border border-[var(--color-border)] p-6 group">
              <summary className="font-semibold text-[var(--color-text)] cursor-pointer list-none flex items-center justify-between">
                Dois-je contacter le fabricant ou le vendeur ?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">
                La garantie légale de conformité s&apos;exerce auprès du <strong>vendeur</strong>,
                pas du fabricant. C&apos;est le magasin ou le site où vous avez acheté le produit
                qui est votre interlocuteur légal. Le vendeur peut ensuite se retourner contre
                le fabricant, mais ce n&apos;est pas votre problème.
              </p>
            </details>
            <details className="bg-white rounded-xl border border-[var(--color-border)] p-6 group">
              <summary className="font-semibold text-[var(--color-text)] cursor-pointer list-none flex items-center justify-between">
                J&apos;ai perdu ma facture, puis-je quand même faire valoir la garantie ?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">
                Oui. La facture n&apos;est pas le seul moyen de prouver la date d&apos;achat.
                Vous pouvez utiliser un relevé bancaire, une confirmation de commande par
                email, un ticket de caisse ou tout autre document prouvant l&apos;achat.
              </p>
            </details>
            <details className="bg-white rounded-xl border border-[var(--color-border)] p-6 group">
              <summary className="font-semibold text-[var(--color-text)] cursor-pointer list-none flex items-center justify-between">
                La garantie couvre-t-elle les achats en ligne ?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">
                Oui, la garantie légale de conformité s&apos;applique de la même manière
                pour les achats en magasin et en ligne. Les sites e-commerce (Amazon,
                Cdiscount, Fnac, etc.) sont soumis aux mêmes obligations que les
                magasins physiques.
              </p>
            </details>
            <details className="bg-white rounded-xl border border-[var(--color-border)] p-6 group">
              <summary className="font-semibold text-[var(--color-text)] cursor-pointer list-none flex items-center justify-between">
                Que faire si le vendeur refuse de réparer ?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">
                Si le vendeur refuse alors que vous êtes dans la période de garantie légale,
                vous pouvez : envoyer un courrier recommandé avec accusé de réception,
                saisir le médiateur de la consommation du secteur, contacter une association
                de consommateurs (UFC-Que Choisir, CLCV), ou en dernier recours, saisir
                le tribunal compétent.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Votre appareil est en panne ?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Ne perdez plus de temps ni d&apos;argent. Vérifiez vos droits et agissez maintenant.
          </p>
          <Link
            href="/generateur"
            className="bg-white hover:bg-gray-100 text-[var(--color-primary)] text-lg font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg inline-block"
          >
            🔧 Générer mon mail gratuitement
          </Link>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Repair Copilot",
            description:
              "Générateur de mail de réclamation pour faire valoir la garantie légale de conformité en France.",
            url: "https://repair-copilot.vercel.app",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Qu'est-ce que la garantie légale de conformité ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La garantie légale de conformité est une protection prévue par le Code de la consommation français (articles L217-3 et suivants). Elle oblige le vendeur à réparer ou remplacer tout produit présentant un défaut de conformité dans les 24 mois suivant l'achat, sans frais pour le consommateur.",
                },
              },
              {
                "@type": "Question",
                name: "Dois-je contacter le fabricant ou le vendeur ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La garantie légale de conformité s'exerce auprès du vendeur, pas du fabricant. C'est le magasin ou le site où vous avez acheté le produit qui est votre interlocuteur légal.",
                },
              },
              {
                "@type": "Question",
                name: "J'ai perdu ma facture, puis-je quand même faire valoir la garantie ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui. Vous pouvez utiliser un relevé bancaire, une confirmation de commande par email, un ticket de caisse ou tout autre document prouvant l'achat.",
                },
              },
              {
                "@type": "Question",
                name: "La garantie couvre-t-elle les achats en ligne ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, la garantie légale de conformité s'applique de la même manière pour les achats en magasin et en ligne.",
                },
              },
              {
                "@type": "Question",
                name: "Que faire si le vendeur refuse de réparer ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vous pouvez envoyer un courrier recommandé, saisir le médiateur de la consommation, contacter une association de consommateurs (UFC-Que Choisir, CLCV), ou saisir le tribunal compétent.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
