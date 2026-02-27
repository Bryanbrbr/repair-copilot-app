import Link from "next/link";

export default function ProblemNotFound() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-4">
          Page non trouvée
        </h1>
        <p className="text-[var(--color-text-light)] mb-8">
          Ce guide de panne n&apos;existe pas ou a été déplacé.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/guide"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Voir tous les guides
          </Link>
          <Link
            href="/generateur"
            className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Générer un mail de réclamation
          </Link>
        </div>
      </div>
    </section>
  );
}
