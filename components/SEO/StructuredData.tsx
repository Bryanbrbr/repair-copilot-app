import { SITE_URL } from "@/lib/config";

interface FAQItem {
  question: string;
  answer: string;
}

interface StructuredDataProps {
  type: "FAQPage" | "WebApplication" | "Article" | "BreadcrumbList";
  data: Record<string, unknown>;
}

export function toSafeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data)
    .replace(/</g, "\u003c")
    .replace(/>/g, "\u003e")
    .replace(/&/g, "\u0026");
}

/**
 * Server component to inject JSON-LD safely.
 */
export default function StructuredData({ type, data }: StructuredDataProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toSafeJsonLd(jsonLd) }}
    />
  );
}

export function buildFAQSchema(items: FAQItem[]) {
  return {
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildWebAppSchema(overrides?: Record<string, unknown>) {
  const siteUrl = SITE_URL;
  return {
    name: "Repair Copilot",
    description:
      "Générateur gratuit de mail de réclamation pour faire valoir la garantie légale de conformité en France.",
    url: siteUrl,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    inLanguage: "fr",
    ...overrides,
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleSchema(overrides: Record<string, unknown>) {
  const siteUrl = SITE_URL;
  return {
    publisher: {
      "@type": "Organization",
      name: "Repair Copilot",
      url: siteUrl,
    },
    inLanguage: "fr",
    ...overrides,
  };
}
