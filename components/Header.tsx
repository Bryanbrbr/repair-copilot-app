"use client";

import Link from "next/link";
import { useState } from "react";
import HeaderSearch from "@/components/HeaderSearch";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/generateur", label: "Générateur" },
  { href: "/guide", label: "Guides" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(251,248,242,0.88)] backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[76px] items-center justify-between gap-3 py-3 sm:gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3 text-[var(--color-text)]">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-lg font-bold text-white shadow-[0_16px_28px_-18px_rgba(23,59,122,0.9)] sm:h-12 sm:w-12">
              RC
            </span>
            <div className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-tight sm:text-base">
                Repair Copilot
              </span>
              <span className="block truncate text-[11px] text-[var(--color-text-muted)] sm:text-xs">
                Garantie légale de conformité
              </span>
            </div>
          </Link>

          <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
            <div className="w-full max-w-sm xl:max-w-md">
              <HeaderSearch />
            </div>
            <div className="flex items-center gap-6 xl:gap-7">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[var(--color-text-soft)] transition hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/generateur"
                className="inline-flex items-center justify-center rounded-2xl bg-[var(--color-secondary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-secondary-strong)]"
              >
                Vérifier mes droits
              </Link>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex lg:hidden">
            <Link
              href="/generateur"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--color-secondary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-secondary-strong)]"
            >
              Vérifier mes droits
            </Link>
          </div>

          <button
            type="button"
            className="rounded-xl border border-[var(--color-border)] p-2 text-[var(--color-text-soft)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menu de navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        <div className={`mobile-menu md:hidden ${isMenuOpen ? "open" : ""}`}>
          <div className="mb-4 rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.45)]">
            <div className="mb-4">
              <HeaderSearch compact onNavigate={() => setIsMenuOpen(false)} />
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-[var(--color-text-soft)] transition hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-primary)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/generateur"
                className="mt-2 inline-flex items-center justify-center rounded-2xl bg-[var(--color-secondary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-secondary-strong)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Vérifier mes droits
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
