import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  appliances,
  getApplianceBySlug,
  getAllApplianceSlugs,
} from "@/lib/appliances";
import { SITE_URL } from "@/lib/config";
import { toSafeJsonLd } from "@/components/SEO/StructuredData";

// Génération statique des pages
export function generateStaticParams() {
  return getAllApplianceSlugs().map((slug) => ({ slug }));
}

// Metadata SEO dynamique
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const appliance = getApplianceBySlug(slug);

  if (!appliance) {
    return { title: "Guide non trouvé" };
  }

  return {
    title: appliance.seoTitle,
    description: appliance.seoDescription,
    keywords: [
      `${appliance.name.toLowerCase()} panne garantie`,
      `réclamation ${appliance.name.toLowerCase()}`,
      `garantie légale ${appliance.name.toLowerCase()}`,
      `${appliance.name.toLowerCase()} en panne que faire`,
      `réparation ${appliance.name.toLowerCase()} droits`,
    ],
    alternates: {
      canonical: `/guide/${slug}`,
    },
    openGraph: {
      title: appliance.seoTitle,
      description: appliance.seoDescription,
      type: "article",
      locale: "fr_FR",
    },
  };
}

export default async function GuideAppliancePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const appliance = getApplianceBySlug(slug);

  if (!appliance) {
    notFound();
  }

  return (
    <>
      <article className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-[var(--color-text-light)]">
            <Link href="/" className="hover:text-[var(--color-primary)]">
              Accueil
            </Link>
            <span className="mx-2">›</span>
            <Link href="/guide" className="hover:text-[var(--color-primary)]">
              Guides
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--color-text)]">{appliance.name}</span>
          </nav>

          {/* En-tête */}
          <header className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{appliance.icon}</span>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
                  {appliance.name} en panne ?
                </h1>
                <p className="text-[var(--color-text-light)] mt-1">
                  Vos droits de garantie et recours
                </p>
              </div>
            </div>
            <p className="text-lg text-[var(--color-text-light)] leading-relaxed mt-4">
              {appliance.introduction}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-lg">
              <span>⏱️</span>
              <span>
                Durée de vie moyenne : <strong>{appliance.averageLifespan}</strong>
              </span>
            </div>
          </header>

          {/* CTA principal */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-green-900 mb-2">
              🔧 Votre {appliance.name.toLowerCase()} est en panne ?
            </h2>
            <p className="text-green-700 text-sm mb-4">
              Générez un mail de réclamation professionnel avec les bons articles
              de loi en 30 secondes.
            </p>
            <Link
              href="/generateur"
              className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block"
            >
              Générer mon mail gratuit →
            </Link>
          </div>

          {/* Pannes courantes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
              Pannes courantes
            </h2>
            <div className="space-y-4">
              {appliance.commonProblems.map((problem) => (
                <Link
                  key={problem.slug}
                  href={`/guide/${appliance.slug}/${problem.slug}`}
                  className="bg-white rounded-xl border border-[var(--color-border)] p-5 block card-hover"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-[var(--color-text)] mb-2">
                        {problem.name}
                      </h3>
                      <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
                        {problem.description}
                      </p>
                      <span className="text-sm text-[var(--color-primary)] font-medium mt-3 inline-block">
                        Voir le diagnostic complet →
                      </span>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span
                        className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${
                          problem.selfFixable
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {problem.selfFixable
                          ? "Vérification possible"
                          : "Réparation pro"}
                      </span>
                      <p className="text-xs text-[var(--color-text-light)] mt-2">
                        Coût estimé : {problem.estimatedRepairCost}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Conseils de vérification */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
              Avant de réclamer : vérifications simples
            </h2>
            <ul className="space-y-3">
              {appliance.repairTips.map((tip, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="text-[var(--color-secondary)] font-bold text-lg flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-[var(--color-text-light)] leading-relaxed">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Vos droits */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
              Vos droits de garantie
            </h2>
            <div className="bg-blue-50 rounded-xl border border-blue-100 p-6 space-y-4">
              <div className="flex gap-3 items-start">
                <span className="text-blue-600 font-bold flex-shrink-0">⚖️</span>
                <div>
                  <h3 className="font-semibold text-blue-900">
                    Garantie légale de conformité (2 ans)
                  </h3>
                  <p className="text-sm text-blue-700 mt-1 leading-relaxed">
                    Selon l&apos;article L217-3 du Code de la consommation, le
                    vendeur est tenu de délivrer un bien conforme. Si votre{" "}
                    {appliance.name.toLowerCase()} présente un défaut dans les 24
                    mois suivant l&apos;achat, le vendeur doit le réparer ou le
                    remplacer sans frais.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-blue-600 font-bold flex-shrink-0">🛡️</span>
                <div>
                  <h3 className="font-semibold text-blue-900">
                    Présomption en votre faveur
                  </h3>
                  <p className="text-sm text-blue-700 mt-1 leading-relaxed">
                    L&apos;article L217-7 prévoit que tout défaut apparaissant dans
                    les 24 mois est présumé exister dès l&apos;achat. C&apos;est au
                    vendeur de prouver le contraire, pas à vous.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-blue-600 font-bold flex-shrink-0">💶</span>
                <div>
                  <h3 className="font-semibold text-blue-900">
                    Gratuité totale
                  </h3>
                  <p className="text-sm text-blue-700 mt-1 leading-relaxed">
                    L&apos;article L217-11 précise que la mise en conformité
                    (réparation ou remplacement) est effectuée sans aucun frais
                    pour le consommateur, y compris les frais de port ou de
                    déplacement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {appliance.faq.map((item, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl border border-[var(--color-border)] p-5 group card-hover"
                >
                  <summary className="font-semibold text-[var(--color-text)] cursor-pointer list-none flex items-center justify-between gap-4">
                    <span>{item.question}</span>
                    <span className="text-[var(--color-primary)] faq-chevron flex-shrink-0">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA final */}
          <section className="bg-[var(--color-primary)] rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Votre {appliance.name.toLowerCase()} est en panne ?
            </h2>
            <p className="text-blue-100 mb-6">
              Ne perdez plus de temps. Générez votre mail de réclamation en 30
              secondes.
            </p>
            <Link
              href="/generateur"
              className="bg-white hover:bg-gray-100 text-[var(--color-primary)] font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg inline-block"
            >
              🔧 Générer mon mail gratuitement
            </Link>
          </section>

          {/* Autres guides */}
          <section className="mt-12">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">
              Autres guides
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {appliances
                .filter((a) => a.slug !== appliance.slug)
                .slice(0, 6)
                .map((a) => (
                  <Link
                    key={a.slug}
                    href={`/guide/${a.slug}`}
                    className="flex items-center gap-2 p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] card-hover text-sm"
                  >
                    <span>{a.icon}</span>
                    <span className="text-[var(--color-text)]">{a.name}</span>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </article>

      {/* Structured Data — FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toSafeJsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: appliance.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* Structured Data — Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toSafeJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: `${SITE_URL}`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Guides",
                item: `${SITE_URL}/guide`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: appliance.name,
                item: `${SITE_URL}/guide/${appliance.slug}`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
