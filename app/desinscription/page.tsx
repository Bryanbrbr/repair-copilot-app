"use client";

import Link from "next/link";
import { useState } from "react";

export default function DesinscriptionPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-[var(--color-text-light)]">
          <Link href="/" className="hover:text-[var(--color-primary)]">
            Accueil
          </Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[var(--color-text)]">Se desinscrire</span>
        </nav>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-[var(--color-text)] mb-4">
            Se desinscrire
          </h1>
          <p className="text-[var(--color-text-light)] max-w-lg mx-auto">
            Vous ne souhaitez plus recevoir nos emails ? Entrez votre adresse
            email ci-dessous et nous vous retirerons immediatement de toutes nos
            listes d&apos;envoi.
          </p>
        </div>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mt-10 max-w-md mx-auto bg-white border border-[var(--color-border)] rounded-2xl p-8 shadow-sm"
          >
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[var(--color-text)] mb-2"
            >
              Votre adresse email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              required
              className="w-full px-4 py-3 border-2 border-[var(--color-border)] rounded-lg text-base focus:border-[var(--color-primary)] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-[var(--color-primary)] text-white py-3 px-6 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity cursor-pointer"
            >
              Se desinscrire
            </button>
          </form>
        ) : (
          <div className="mt-10 max-w-md mx-auto bg-green-50 border border-green-200 text-green-800 rounded-2xl p-8 text-center">
            <p className="font-medium">
              Votre demande de desinscription a bien ete prise en compte. Vous
              ne recevrez plus d&apos;emails de notre part. Le traitement peut
              prendre jusqu&apos;a 48 heures.
            </p>
          </div>
        )}

        <div className="mt-8 max-w-md mx-auto bg-[var(--color-bg-soft)] border-l-4 border-[var(--color-primary)] rounded-xl p-6">
          <p className="font-semibold text-[var(--color-text)] mb-3">
            Comment ca fonctionne :
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--color-text-light)]">
            <li>
              Votre adresse est immediatement ajoutee a notre liste de
              suppression
            </li>
            <li>Vous ne recevrez plus aucun email de nos campagnes</li>
            <li>Cette action est gratuite et definitive</li>
            <li>
              Vous pouvez aussi nous contacter a{" "}
              <a
                href="mailto:bryanbr.service@gmail.com"
                className="text-[var(--color-primary)] hover:underline"
              >
                bryanbr.service@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
