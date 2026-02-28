import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogPosts,
  blogCategories,
  getBlogPostBySlug,
  getAllBlogSlugs,
} from "@/lib/blog";
import { SITE_URL } from "@/lib/config";
import BlogContent from "@/components/Blog/BlogContent";
import StructuredData, { buildFAQSchema } from "@/components/SEO/StructuredData";

// Génération statique
export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

// Metadata SEO dynamique
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article non trouvé" };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.seoKeywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "fr_FR",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Articles liés (même catégorie, ou autres)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

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
            <Link href="/blog" className="hover:text-[var(--color-primary)]">
              Blog
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--color-text)]">{post.title}</span>
          </nav>

          {/* Header article */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
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
              <span className="text-sm text-[var(--color-text-light)]">
                {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="text-sm text-[var(--color-text-light)]">
                · {post.readingTime} de lecture
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text)] leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Contenu */}
          <BlogContent sections={post.content} />

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold text-green-900 mb-2">
              🔧 Votre appareil est en panne ?
            </h2>
            <p className="text-sm text-green-700 mb-4">
              Générez un mail de réclamation professionnel avec les bons articles
              de loi en 30 secondes. Gratuit et sans inscription.
            </p>
            <Link
              href="/generateur"
              className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block"
            >
              Générer mon mail gratuit →
            </Link>
          </div>

          {/* FAQ */}
          {post.faq && post.faq.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">
                Questions fréquentes
              </h2>
              <div className="space-y-4">
                {post.faq.map((item, index) => (
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
          )}

          {/* Articles liés */}
          {relatedPosts.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">
                Articles liés
              </h2>
              <div className="space-y-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="block bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] p-4 card-hover"
                  >
                    <h3 className="font-medium text-[var(--color-text)] mb-1">
                      {related.title}
                    </h3>
                    <p className="text-xs text-[var(--color-text-light)]">
                      {related.readingTime} · {blogCategories[related.category].label}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      {/* Structured Data — Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt || post.publishedAt,
            author: {
              "@type": "Organization",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Repair Copilot",
              url: SITE_URL,
            },
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
          }),
        }}
      />

      {/* Structured Data — FAQ */}
      {post.faq && post.faq.length > 0 && (
        <StructuredData type="FAQPage" data={buildFAQSchema(post.faq)} />
      )}

      {/* Structured Data — Breadcrumb */}
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
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `${SITE_URL}/blog/${post.slug}`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
