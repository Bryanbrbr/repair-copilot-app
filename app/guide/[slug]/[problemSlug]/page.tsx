import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getApplianceBySlug, getProblemBySlug } from "@/lib/appliances";
import {
  getProblemPageData,
  getAllProblemPageParams,
} from "@/lib/problem-pages";
import { getLegalArticle } from "@/lib/legal-references";
import { SITE_URL } from "@/lib/config";
import StructuredData, {
  buildFAQSchema,
  buildBreadcrumbSchema,
} from "@/components/SEO/StructuredData";

export function generateStaticParams() {
  return getAllProblemPageParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; problemSlug: string }>;
}): Promise<Metadata> {
  const { slug, problemSlug } = await params;
  const pageData = getProblemPageData(slug, problemSlug);

  if (!pageData) {
    return { title: "Problème non trouvé" };
  }

  return {
    title: pageData.seoTitle,
    description: pageData.seoDescription,
    keywords: pageData.seoKeywords,
    alternates: {
      canonical: `${SITE_URL}/guide/${slug}/${problemSlug}`,
    },
    openGraph: {
      title: pageData.seoTitle,
      description: pageData.seoDescription,
      type: "article",
      locale: "fr_FR",
    },
  };
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ slug: string; problemSlug: string }>;
}) {
  const { slug, problemSlug } = await params;
  const appliance = getApplianceBySlug(slug);
  const problem = getProblemBySlug(slug, problemSlug);
  const pageData = getProblemPageData(slug, problemSlug);

  if (!appliance || !problem || !pageData) {
    notFound();
  }

  const otherProblems = appliance.commonProblems.filter(
    (p) => p.slug !== problemSlug
  );

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
            <Link
              href={`/guide/${slug}`}
              className="hover:text-[var(--color-primary)]"
            >
              {appliance.name}
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--color-text)]">{problem.name}</span>
          </nav>

          {/* Hero */}
          <header className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{appliance.icon}</span>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
                  {appliance.name} : {problem.name}
                </h1>
                <p className="text-[var(--color-text-light)] mt-1">
                  Diagnostic, garantie et recours
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-4">
              <span
                className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${
                  problem.selfFixable
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {problem.selfFixable
                  ? "Vérification possible"
                  : "Réparation pro recommandée"}
              </span>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                Coût estimé : {problem.estimatedRepairCost}
              </span>
            </div>

            {/* Summary line */}
            <p className="mt-6 text-lg font-medium text-[var(--color-text)] leading-relaxed bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-4">
              {pageData.summaryLine}
            </p>

            {/* Hero description */}
            <div className="mt-6 text-[var(--color-text-light)] leading-relaxed space-y-4">
              {pageData.heroDescription.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </header>

          {/* CTA 1 */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-green-900 mb-2">
              Votre {appliance.name.toLowerCase()} {problem.name.toLowerCase()}{" "}
              ?
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

          {/* Diagnostic */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
              Diagnostic : que vérifier ?
            </h2>
            <div className="space-y-4">
              {pageData.diagnosticSteps.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 items-start bg-white rounded-xl border border-[var(--color-border)] p-5"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text)] mb-1">
                      {step.icon} {step.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Legal rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
              Vos droits de garantie pour ce type de panne
            </h2>
            <div className="bg-blue-50 rounded-xl border border-blue-100 p-6 space-y-4">
              {pageData.legalPoints.map((point) => {
                const article = getLegalArticle(point.articleRef);
                return article ? (
                  <div key={point.articleRef} className="flex gap-3 items-start">
                    <span className="text-blue-600 font-bold flex-shrink-0">
                      ⚖️
                    </span>
                    <div>
                      <h3 className="font-semibold text-blue-900">
                        {article.fullReference}
                      </h3>
                      <p className="text-sm text-blue-700 mt-1 leading-relaxed">
                        {point.relevance}
                      </p>
                    </div>
                  </div>
                ) : null;
              })}
            </div>

            {/* When covered / not covered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-semibold text-green-900 mb-2">
                  Quand réclamer la garantie
                </h3>
                <p className="text-sm text-green-700 leading-relaxed">
                  {pageData.whenToClaimWarranty}
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-semibold text-amber-900 mb-2">
                  Cas non couverts
                </h3>
                <p className="text-sm text-amber-700 leading-relaxed">
                  {pageData.whenNotCovered}
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {pageData.faq.map((item, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl border border-[var(--color-border)] p-5 group"
                >
                  <summary className="font-semibold text-[var(--color-text)] cursor-pointer list-none flex items-center justify-between gap-4">
                    <span>{item.question}</span>
                    <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform flex-shrink-0">
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
          <section className="bg-[var(--color-primary)] rounded-xl p-8 text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">
              {problem.name} ? Faites valoir vos droits
            </h2>
            <p className="text-blue-100 mb-6">
              Générez votre mail de réclamation en 30 secondes — c&apos;est
              gratuit.
            </p>
            <Link
              href="/generateur"
              className="bg-white hover:bg-gray-100 text-[var(--color-primary)] font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg inline-block"
            >
              Générer mon mail gratuitement
            </Link>
          </section>

          {/* Other problems for same appliance */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">
              Autres pannes : {appliance.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherProblems.map((p) => (
                <Link
                  key={p.slug}
                  href={`/guide/${slug}/${p.slug}`}
                  className="flex items-center gap-3 p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-primary-light)] transition-colors"
                >
                  <span className="text-[var(--color-primary)]">→</span>
                  <span className="text-sm text-[var(--color-text)]">
                    {p.name}
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href={`/guide/${slug}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline"
            >
              ← Retour au guide {appliance.name}
            </Link>
          </section>
        </div>
      </article>

      {/* Structured Data */}
      <StructuredData type="FAQPage" data={buildFAQSchema(pageData.faq)} />
      <StructuredData
        type="BreadcrumbList"
        data={buildBreadcrumbSchema([
          { name: "Accueil", url: SITE_URL },
          { name: "Guides", url: `${SITE_URL}/guide` },
          { name: appliance.name, url: `${SITE_URL}/guide/${slug}` },
          {
            name: problem.name,
            url: `${SITE_URL}/guide/${slug}/${problemSlug}`,
          },
        ])}
      />
    </>
  );
}
