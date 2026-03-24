import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions d'utilisation - Service emailing",
  description:
    "Conditions d'utilisation du service d'emailing professionnel RepairCopilot.",
  robots: { index: true, follow: true },
};

export default function ConditionsPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-[var(--color-text-light)]">
          <Link href="/" className="hover:text-[var(--color-primary)]">
            Accueil
          </Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[var(--color-text)]">
            Conditions d&apos;utilisation
          </span>
        </nav>

        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-4">
          Conditions d&apos;utilisation du service d&apos;emailing
        </h1>
        <p className="text-sm text-[var(--color-text-light)] mb-8">
          <strong>Derniere mise a jour :</strong> 24 mars 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              1. Objet du service
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              RepairCopilot propose un service d&apos;envoi d&apos;emails en
              masse pour le compte de ses clients professionnels. Le service
              comprend l&apos;envoi de campagnes d&apos;emailing, le suivi des
              performances et la gestion des desinscriptions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              2. Obligations du client
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-3">
              En utilisant notre service, le client s&apos;engage a :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-light)]">
              <li>
                Fournir uniquement des listes de destinataires ayant donne leur
                consentement explicite (opt-in) a recevoir des communications
              </li>
              <li>
                Ne pas envoyer de contenu illegal, diffamatoire, trompeur ou
                constitutif de spam
              </li>
              <li>
                Respecter la reglementation en vigueur, notamment le RGPD et la
                directive ePrivacy
              </li>
              <li>
                Fournir une identification claire de l&apos;expediteur dans
                chaque email
              </li>
              <li>
                Ne pas utiliser de listes d&apos;adresses achetees, louees ou
                collectees sans consentement
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              3. Nos engagements
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-3">
              RepairCopilot s&apos;engage a :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-light)]">
              <li>
                Inclure un lien de desinscription fonctionnel dans chaque email
              </li>
              <li>
                Traiter immediatement les demandes de desinscription
              </li>
              <li>
                Gerer activement les bounces et les plaintes pour maintenir une
                bonne reputation d&apos;envoi
              </li>
              <li>
                Authentifier tous les emails via DKIM, SPF et DMARC
              </li>
              <li>
                Proteger les donnees des destinataires conformement au RGPD
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              4. Contenu interdit
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-3">
              Il est strictement interdit d&apos;utiliser notre service pour
              envoyer :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-light)]">
              <li>Du spam ou des emails non sollicites</li>
              <li>Du contenu a caractere illegal ou frauduleux</li>
              <li>
                Des emails contenant des logiciels malveillants ou du phishing
              </li>
              <li>Du contenu portant atteinte aux droits de tiers</li>
              <li>
                Des communications ne respectant pas les lois anti-spam en
                vigueur
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              5. Suspension et resiliation
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              RepairCopilot se reserve le droit de suspendre ou resilier
              l&apos;acces au service en cas de non-respect des presentes
              conditions, notamment en cas d&apos;envoi de spam, de taux de
              plainte excessif ou de violation de la reglementation. Le client
              sera notifie de toute suspension.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              6. Tarification
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              Le tarif est de 100&#8364; par campagne, incluant l&apos;envoi de
              jusqu&apos;a 30 000 emails, le suivi des performances, la gestion
              des bounces et plaintes, et un rapport detaille. Le paiement est
              du avant l&apos;envoi de chaque campagne.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              7. Responsabilite
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              Le client est seul responsable du contenu de ses emails et de la
              legalite de ses listes de destinataires. RepairCopilot ne saurait
              etre tenu responsable des consequences liees au contenu envoye par
              le client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              8. Contact
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              Pour toute question relative a ces conditions, contactez-nous a :{" "}
              <a
                href="mailto:bryanbr.service@gmail.com"
                className="text-[var(--color-primary)] hover:underline"
              >
                bryanbr.service@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              9. Pages associees
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-light)]">
              <li>
                <Link
                  href="/confidentialite-emailing"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Politique de confidentialite
                </Link>
              </li>
              <li>
                <Link
                  href="/anti-spam"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Politique anti-spam
                </Link>
              </li>
              <li>
                <Link
                  href="/desinscription"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Se desinscrire
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
