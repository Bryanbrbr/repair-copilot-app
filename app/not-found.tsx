import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <div className="max-w-lg mx-auto px-4">
        <span className="text-6xl block mb-6">🔍</span>
        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-4">
          Page non trouvée
        </h1>
        <p className="text-[var(--color-text-light)] mb-8 leading-relaxed">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/generateur"
            className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Générer un mail
          </Link>
        </div>
      </div>
    </section>
  );
}
