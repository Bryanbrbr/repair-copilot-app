"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[var(--color-border)] sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-[var(--color-primary)]">
            <span className="text-2xl">🔧</span>
            <span>Repair Copilot</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/generateur"
              className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
            >
              Générateur de mail
            </Link>
            <Link
              href="/guide"
              className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
            >
              Guides par appareil
            </Link>
            <Link
              href="/blog"
              className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/generateur"
              className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              SOS Panne →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-[var(--color-text-light)] hover:text-[var(--color-text)] hover:bg-gray-100"
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

        {/* Mobile navigation */}
        <div className={`md:hidden mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="pb-4 border-t border-[var(--color-border)] mt-2 pt-4">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/generateur"
                className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Générateur de mail
              </Link>
              <Link
                href="/guide"
                className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Guides par appareil
              </Link>
              <Link
                href="/blog"
                className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/generateur"
                className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white px-4 py-2 rounded-lg font-medium transition-colors text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                SOS Panne →
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
