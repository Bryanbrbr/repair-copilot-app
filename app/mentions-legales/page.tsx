import type { Metadata } from "next";
import Link from "next/link";
import { WARRANTY_DISCLAIMER } from "@/lib/legal-references";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales et conditions d'utilisation de Repair Copilot.",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-[var(--color-text-light)]">
          <Link href="/" className="hover:text-[var(--color-primary)]">
            Accueil
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[var(--color-text)]">Mentions légales</span>
        </nav>

        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-8">
          Mentions légales
        </h1>

        <div className="prose prose-slate max-w-none space-y-8">
          {/* Éditeur du site */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Éditeur du site
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              Le site Repair Copilot est un outil en ligne gratuit d&apos;aide à
              la rédaction de courriers de réclamation dans le cadre de la
              garantie légale de conformité.
            </p>
            <p className="text-[var(--color-text-light)] leading-relaxed mt-2">
              <strong>Contact :</strong>{" "}
              <a
                href="mailto:repaircopilot.contact@gmail.com"
                className="text-[var(--color-primary)] hover:underline"
              >
                repaircopilot.contact@gmail.com
              </a>
            </p>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Hébergement
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, États-Unis.
            </p>
          </section>

          {/* Avertissement juridique */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Avertissement juridique
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-800 leading-relaxed font-medium">
                {WARRANTY_DISCLAIMER}
              </p>
            </div>
            <div className="mt-4 space-y-3 text-[var(--color-text-light)] leading-relaxed">
              <p>
                Les modèles de courriers proposés par Repair Copilot sont des
                suggestions basées sur les dispositions du Code de la
                consommation français en vigueur. Ils sont fournis à titre
                purement informatif.
              </p>
              <p>
                Repair Copilot ne garantit pas le succès des démarches engagées
                à l&apos;aide des courriers générés. Chaque situation est unique et
                peut nécessiter un accompagnement juridique adapté.
              </p>
              <p>
                Les références aux articles de loi sont données à titre
                indicatif. La législation pouvant évoluer, nous vous invitons à
                vérifier les textes en vigueur sur{" "}
                <a
                  href="https://www.legifrance.gouv.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Légifrance
                </a>
                .
              </p>
            </div>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Données personnelles
            </h2>
            <div className="space-y-3 text-[var(--color-text-light)] leading-relaxed">
              <p>
                Repair Copilot ne collecte, ne stocke et ne transmet aucune
                donnée personnelle.
              </p>
              <p>
                Les informations que vous saisissez dans le générateur de mail
                (type d&apos;appareil, marque, date d&apos;achat, etc.) sont
                traitées <strong>exclusivement côté client</strong> (dans votre
                navigateur). Aucune de ces données n&apos;est envoyée à nos
                serveurs.
              </p>
              <p>
                Le site n&apos;utilise pas de cookies de suivi, de pixels de
                tracking, ni aucun outil d&apos;analyse comportementale.
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Propriété intellectuelle
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              L&apos;ensemble du contenu du site (textes, design, code source) est
              protégé. Les articles de loi cités sont issus du Code de la
              consommation et du Code civil français et sont librement
              accessibles sur{" "}
              <a
                href="https://www.legifrance.gouv.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline"
              >
                Légifrance
              </a>
              .
            </p>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Limitation de responsabilité
            </h2>
            <div className="space-y-3 text-[var(--color-text-light)] leading-relaxed">
              <p>
                Repair Copilot s&apos;efforce de fournir des informations exactes
                et à jour. Toutefois, l&apos;éditeur ne saurait être tenu
                responsable des erreurs, omissions ou des résultats qui
                pourraient être obtenus par l&apos;utilisation de ces
                informations.
              </p>
              <p>
                L&apos;utilisateur est seul responsable de l&apos;utilisation
                qu&apos;il fait des courriers générés par l&apos;outil.
              </p>
            </div>
          </section>

          {/* Ressources utiles */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              Ressources utiles
            </h2>
            <ul className="space-y-2 text-[var(--color-text-light)]">
              <li>
                <a
                  href="https://www.economie.gouv.fr/dgccrf/les-garanties-legales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  DGCCRF — Les garanties légales ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032221271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Légifrance — Code de la consommation ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.quechoisir.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  UFC-Que Choisir ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.clcv.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  CLCV — Consommation, Logement et Cadre de Vie ↗
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
