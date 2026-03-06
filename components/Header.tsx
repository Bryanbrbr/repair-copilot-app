"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/generateur", label: "Générateur" },
  { href: "/guide", label: "Guides" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(251,248,242,0.82)] backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between gap-6 py-3">
          <Link href="/" className="flex items-center gap-3 text-[var(--color-text)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-lg font-bold text-white shadow-[0_16px_28px_-18px_rgba(23,59,122,0.9)]">
              RC
            </span>
            <div>
              <span className="block text-base font-semibold tracking-tight">Repair Copilot</span>
              <span className="block text-xs text-[var(--color-text-muted)]">
                Garantie légale de conformité
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
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
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--color-text-soft)] transition hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-primary)]"
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
