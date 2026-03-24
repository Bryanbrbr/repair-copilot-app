import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialite - Service emailing",
  description:
    "Politique de confidentialite du service d'emailing professionnel RepairCopilot. Conforme RGPD.",
  robots: { index: true, follow: true },
};

export default function ConfidentialiteEmailingPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-[var(--color-text-light)]">
          <Link href="/" className="hover:text-[var(--color-primary)]">
            Accueil
          </Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[var(--color-text)]">
            Confidentialite emailing
          </span>
        </nav>

        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-4">
          Politique de confidentialite
        </h1>
        <p className="text-sm text-[var(--color-text-light)] mb-8">
          <strong>Derniere mise a jour :</strong> 24 mars 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              1. Responsable du traitement
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              RepairCopilot, service d&apos;emailing professionnel.
              <br />
              Contact :{" "}
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
              2. Donnees collectees
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-3">
              Dans le cadre de notre service d&apos;envoi d&apos;emails, nous
              traitons les donnees suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-light)]">
              <li>
                Adresses email des destinataires (fournies par nos clients)
              </li>
              <li>Statistiques d&apos;envoi (ouvertures, clics, bounces)</li>
              <li>Demandes de desinscription</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              3. Base legale du traitement
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              Le traitement des donnees repose sur le consentement explicite des
              destinataires (opt-in) obtenu par nos clients avant toute
              transmission a notre service. Nous exigeons de nos clients
              qu&apos;ils fournissent la preuve que chaque destinataire a
              consenti a recevoir des communications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              4. Finalite du traitement
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-3">
              Les donnees sont utilisees exclusivement pour :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-light)]">
              <li>
                L&apos;envoi de campagnes d&apos;emailing pour le compte de nos
                clients
              </li>
              <li>Le suivi des performances des campagnes</li>
              <li>La gestion des desinscriptions et des bounces</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              5. Duree de conservation
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              Les adresses email sont conservees uniquement le temps necessaire a
              l&apos;envoi des campagnes. Les listes de suppression
              (desinscriptions, bounces) sont conservees de maniere permanente
              pour eviter tout envoi non desire.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              6. Partage des donnees
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              Les donnees sont traitees via l&apos;infrastructure Amazon Web
              Services (AWS SES) situee dans la region Europe (Irlande). Aucune
              donnee n&apos;est vendue ou partagee avec des tiers a des fins
              commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              7. Securite
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              Nous mettons en oeuvre des mesures techniques appropriees pour
              proteger les donnees : chiffrement en transit (TLS),
              authentification email (DKIM, SPF, DMARC), et acces restreint aux
              donnees.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              8. Droits des personnes concernees
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-3">
              Conformement au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-light)]">
              <li>
                <strong>Droit d&apos;acces :</strong> obtenir une copie de vos
                donnees personnelles
              </li>
              <li>
                <strong>Droit de rectification :</strong> corriger des donnees
                inexactes
              </li>
              <li>
                <strong>Droit a l&apos;effacement :</strong> demander la
                suppression de vos donnees
              </li>
              <li>
                <strong>Droit d&apos;opposition :</strong> vous opposer au
                traitement de vos donnees
              </li>
              <li>
                <strong>Droit a la portabilite :</strong> recevoir vos donnees
                dans un format structure
              </li>
            </ul>
            <p className="text-[var(--color-text-light)] leading-relaxed mt-3">
              Pour exercer vos droits, contactez-nous a :{" "}
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
              9. Desinscription
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              Vous pouvez vous desinscrire a tout moment en cliquant sur le lien
              de desinscription present dans chaque email, ou en utilisant notre{" "}
              <Link
                href="/desinscription"
                className="text-[var(--color-primary)] hover:underline"
              >
                formulaire de desinscription
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              10. Modifications
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              Nous nous reservons le droit de modifier cette politique de
              confidentialite. Toute modification sera publiee sur cette page
              avec la date de mise a jour.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
