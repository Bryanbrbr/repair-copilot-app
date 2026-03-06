"use client";

import { useDeferredValue, useState } from "react";
import { useRouter } from "next/navigation";
import { appliances } from "@/lib/appliances";
import { sanitizeSingleLineInput } from "@/lib/input-sanitizer";

interface HeaderSearchProps {
  compact?: boolean;
  onNavigate?: () => void;
}

const quickLinks = [
  { label: "Ouvrir le générateur", href: "/generateur", hint: "Créer un mail maintenant" },
  { label: "Voir tous les guides", href: "/guide", hint: "Par appareil et panne fréquente" },
];

const applianceAliases: Record<string, { label?: string; keywords: string[] }> = {
  "panne-lave-linge-garantie": {
    keywords: ["machine a laver", "machine à laver", "linge", "washing machine"],
  },
  "panne-lave-vaisselle-garantie": {
    keywords: ["vaisselle", "dishwasher"],
  },
  "panne-refrigerateur-garantie": {
    keywords: ["frigo", "refrigerateur", "réfrigerateur", "refrigérateur"],
  },
  "panne-four-garantie": {
    keywords: ["four", "micro onde", "micro-ondes", "micro onde combiné", "mini four"],
  },
  "panne-seche-linge-garantie": {
    keywords: ["seche linge", "sèche linge", "dryer"],
  },
  "panne-aspirateur-garantie": {
    keywords: ["aspirateur balai", "sans fil", "dyson", "traineau", "traîneau"],
  },
  "panne-television-garantie": {
    label: "TV",
    keywords: ["tv", "tele", "télé", "televiseur", "téléviseur", "ecran tv", "écran tv"],
  },
  "panne-ordinateur-portable-garantie": {
    keywords: ["pc", "pc portable", "laptop", "macbook", "ordi", "ordinateur", "portable"],
  },
  "panne-smartphone-garantie": {
    label: "Téléphone",
    keywords: ["telephone", "téléphone", "portable", "mobile", "iphone", "samsung", "android"],
  },
  "panne-machine-a-cafe-garantie": {
    keywords: ["machine a cafe", "machine à café", "cafetière", "cafe", "expresso", "nespresso"],
  },
  "panne-congelateur-garantie": {
    keywords: ["congelateur", "congélateur", "freezer"],
  },
  "panne-micro-ondes-garantie": {
    keywords: ["micro onde", "micro ondes", "micro-ondes", "microonde"],
  },
  "panne-aspirateur-robot-garantie": {
    keywords: ["robot aspirateur", "roomba", "robot menager", "robot ménager"],
  },
  "panne-tablette-garantie": {
    keywords: ["ipad", "tablette tactile", "galaxy tab"],
  },
  "panne-console-jeux-garantie": {
    keywords: ["console", "ps5", "playstation", "xbox", "switch", "nintendo"],
  },
  "panne-montre-connectee-garantie": {
    keywords: ["montre", "watch", "apple watch", "smartwatch", "bracelet connecté", "bracelet connecte"],
  },
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

export default function HeaderSearch({ compact = false, onNavigate }: HeaderSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const deferredQuery = useDeferredValue(query);
  const normalized = normalize(deferredQuery);

  const applianceMatches = appliances
    .filter((appliance) => {
      if (!normalized) {
        return true;
      }

      const aliases = applianceAliases[appliance.slug]?.keywords ?? [];
      const haystack = [
        appliance.name,
        appliance.slug,
        appliance.introduction,
        ...aliases,
        ...appliance.commonProblems.map((problem) => problem.name),
      ]
        .map(normalize)
        .join(" ");

      return haystack.includes(normalized);
    })
    .slice(0, compact ? 4 : 5)
    .map((appliance) => ({
      label: applianceAliases[appliance.slug]?.label ?? appliance.name,
      href: `/guide/${appliance.slug}`,
      hint: appliance.commonProblems[0]?.name ?? "Guide détaillé",
    }));

  const items = normalized ? applianceMatches : [...quickLinks, ...applianceMatches.slice(0, 3)];

  function goTo(href: string) {
    router.push(href);
    setIsOpen(false);
    setQuery("");
    onNavigate?.();
  }

  function submitSearch() {
    if (!normalized) {
      goTo("/guide");
      return;
    }

    const firstMatch = applianceMatches[0];

    if (firstMatch) {
      goTo(firstMatch.href);
      return;
    }

    goTo("/guide");
  }

  return (
    <div className="relative">
      <div
        className={`search-shell flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white/92 shadow-[0_16px_36px_-30px_rgba(15,23,42,0.45)] backdrop-blur ${compact ? "px-3 py-2.5" : "px-3.5 py-3"}`}
      >
        <svg
          className="h-4 w-4 flex-shrink-0 text-[var(--color-text-muted)]"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.5 14.5 4 4" />
          <circle cx="8.5" cy="8.5" r="5.75" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(sanitizeSingleLineInput(event.target.value, 80));
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => {
            window.setTimeout(() => setIsOpen(false), 120);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              submitSearch();
            }
          }}
          placeholder={compact ? "Chercher un appareil" : "Chercher un appareil ou une panne"}
          className="min-w-0 flex-1 bg-transparent text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none"
          maxLength={80}
          aria-label="Rechercher un appareil ou une panne"
        />
        <button
          type="button"
          onMouseDown={(event) => event.preventDefault()}
          onClick={submitSearch}
          className="inline-flex h-9 items-center justify-center rounded-xl bg-[var(--color-primary)] px-3 text-xs font-semibold text-white transition hover:bg-[var(--color-primary-strong)]"
        >
          Aller
        </button>
      </div>

      {isOpen && items.length > 0 ? (
        <div className="absolute inset-x-0 top-[calc(100%+0.6rem)] z-50 overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-white/98 p-2 shadow-[0_28px_70px_-38px_rgba(15,23,42,0.45)] backdrop-blur">
          {items.map((item) => (
            <button
              key={`${item.href}-${item.label}`}
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => goTo(item.href)}
              className="flex w-full items-start justify-between gap-3 rounded-2xl px-3 py-3 text-left transition hover:bg-[var(--color-bg-alt)]"
            >
              <span>
                <span className="block text-sm font-semibold text-[var(--color-text)]">
                  {item.label}
                </span>
                <span className="mt-1 block text-xs leading-5 text-[var(--color-text-muted)]">
                  {item.hint}
                </span>
              </span>
              <span className="mt-1 text-xs font-medium text-[var(--color-primary)]">
                Ouvrir
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
