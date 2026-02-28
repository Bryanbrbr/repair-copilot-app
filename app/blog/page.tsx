import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/lib/blog";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Blog — Garantie, droits consommateur et conseils pratiques",
  description:
    "Guides et conseils pratiques sur la garantie légale de conformité, vos droits de consommateur et les démarches pour faire réparer ou remplacer vos appareils en panne.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            Blog
          </h1>
          <p className="text-lg text-[var(--color-text-light)] max-w-2xl mx-auto leading-relaxed">
            Guides pratiques et informations pour comprendre vos droits de
            garantie et faire valoir vos intérêts face aux vendeurs.
          </p>
        </div>

        {/* Liste des articles */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-xl border border-[var(--color-border)] p-6 card-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      post.category === "garantie-legale"
                        ? "bg-blue-100 text-blue-700"
                        : post.category === "droits-consommateur"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {blogCategories[post.category].label}
                  </span>
                  <span className="text-xs text-[var(--color-text-light)]">
                    {post.readingTime}
                  </span>
                </div>
                <span className="text-xs text-[var(--color-text-light)]">
                  {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)]">
                {post.title}
              </h2>
              <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-3">
                {post.description}
              </p>
              <span className="text-sm font-medium text-[var(--color-primary)]">
                Lire l&apos;article →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[var(--color-text-light)] mb-4">
            Votre appareil est en panne ? Générez un mail de réclamation en 30
            secondes.
          </p>
          <Link
            href="/generateur"
            className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl inline-block"
          >
            🔧 Générer mon mail de réclamation
          </Link>
        </div>
      </div>

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "Blog",
                item: `${SITE_URL}/blog`,
              },
            ],
          }),
        }}
      />
    </section>
  );
}
