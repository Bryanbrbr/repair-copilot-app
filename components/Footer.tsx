import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[var(--color-border)] mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1 : À propos */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-[var(--color-primary)] mb-4">
              <span className="text-2xl">🔧</span>
              <span>Repair Copilot</span>
            </div>
            <p className="text-[var(--color-text-light)] text-sm leading-relaxed">
              Votre assistant pour faire valoir vos droits de garantie.
              Générez un mail de réclamation professionnel en 30 secondes.
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h3 className="font-semibold text-[var(--color-text)] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] text-sm transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/generateur"
                  className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] text-sm transition-colors"
                >
                  Générateur de mail
                </Link>
              </li>
              <li>
                <Link
                  href="/guide"
                  className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] text-sm transition-colors"
                >
                  Guides par appareil
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] text-sm transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Informations */}
          <div>
            <h3 className="font-semibold text-[var(--color-text)] mb-4">
              Informations
            </h3>
            <ul className="space-y-2">
              <li className="text-[var(--color-text-light)] text-sm">
                <a
                  href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032221271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  Code de la consommation — Légifrance ↗
                </a>
              </li>
              <li className="text-[var(--color-text-light)] text-sm">
                <a
                  href="https://www.economie.gouv.fr/dgccrf/les-garanties-legales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  DGCCRF — Les garanties légales ↗
                </a>
              </li>
              <li className="text-[var(--color-text-light)] text-sm">
                <a
                  href="https://www.quechoisir.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  UFC-Que Choisir ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-text-light)] leading-relaxed mb-4">
            <strong>Avertissement :</strong> Les informations fournies par Repair Copilot sont
            données à titre indicatif, sur la base du Code de la consommation français en vigueur.
            Elles ne constituent en aucun cas un conseil juridique personnalisé. En cas de litige
            complexe, nous vous recommandons de consulter un professionnel du droit ou une
            association de consommateurs.
          </p>
          <p className="text-xs text-[var(--color-text-light)]">
            © {currentYear} Repair Copilot. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
