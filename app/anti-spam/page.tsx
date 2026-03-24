import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique anti-spam",
  description:
    "Politique anti-spam de RepairCopilot. Tolerance zero envers le spam, conformite RGPD et respect des bonnes pratiques d'emailing.",
  robots: { index: true, follow: true },
};

export default function AntiSpamPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-[var(--color-text-light)]">
          <Link href="/" className="hover:text-[var(--color-primary)]">
            Accueil
          </Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[var(--color-text)]">Politique anti-spam</span>
        </nav>

        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-4">
          Politique anti-spam
        </h1>
        <p className="text-sm text-[var(--color-text-light)] mb-8">
          <strong>Derniere mise a jour :</strong> 24 mars 2026
        </p>

        <div className="bg-[var(--color-bg-soft)] border-l-4 border-[var(--color-primary)] rounded-xl p-6 mb-8">
          <p className="text-[var(--color-text)] font-medium leading-relaxed">
            <strong>Notre engagement :</strong> RepairCopilot applique une
            politique de tolerance zero envers le spam. Nous nous engageons a
            envoyer uniquement des emails sollicites a des destinataires ayant
            donne leur consentement explicite.
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              1. Consentement obligatoire (Opt-in)
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-3">
              Avant tout envoi, nous exigeons de nos clients :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-light)]">
              <li>
                La preuve que chaque destinataire a explicitement consenti a
                recevoir des emails (opt-in)
              </li>
              <li>
                La date et la methode d&apos;obtention du consentement
              </li>
              <li>
                L&apos;interdiction d&apos;utiliser des listes achetees, louees
                ou collectees sans consentement
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              2. Contenu des emails
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-3">
              Chaque email envoye via notre service contient obligatoirement :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-light)]">
              <li>L&apos;identite claire de l&apos;expediteur</li>
              <li>Un objet fidele au contenu du message</li>
              <li>Un lien de desinscription fonctionnel et visible</li>
              <li>
                L&apos;adresse physique ou de contact de l&apos;expediteur
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              3. Gestion des desinscriptions
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-3">
              Les demandes de desinscription sont traitees de maniere :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-light)]">
              <li>
                <strong>Immediate :</strong> l&apos;adresse est ajoutee a la
                liste de suppression des la demande
              </li>
              <li>
                <strong>Permanente :</strong> l&apos;adresse ne recevra plus
                aucun email de cette campagne
              </li>
              <li>
                <strong>Gratuite :</strong> aucun cout ni condition pour se
                desinscrire
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              4. Surveillance des bounces et plaintes
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-3">
              Nous surveillons activement :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-light)]">
              <li>
                <strong>Taux de bounce :</strong> les adresses invalides sont
                automatiquement retirees apres un hard bounce
              </li>
              <li>
                <strong>Taux de plainte :</strong> nous maintenons un taux de
                plainte inferieur a 0.1% (seuil AWS)
              </li>
              <li>
                <strong>Liste de suppression :</strong> toutes les adresses
                problematiques sont stockees dans une liste de suppression
                globale
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              5. Authentification des emails
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-3">
              Tous nos emails sont authentifies via :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-light)]">
              <li>
                <strong>DKIM</strong> (DomainKeys Identified Mail) : signature
                cryptographique de chaque email
              </li>
              <li>
                <strong>SPF</strong> (Sender Policy Framework) : autorisation
                des serveurs d&apos;envoi
              </li>
              <li>
                <strong>DMARC</strong> (Domain-based Message Authentication) :
                politique d&apos;authentification du domaine
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              6. Infrastructure
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              Nous utilisons Amazon Web Services Simple Email Service (AWS SES),
              une infrastructure de niveau entreprise qui garantit :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-light)] mt-3">
              <li>Une delivrabilite optimale</li>
              <li>Le respect des standards de l&apos;industrie</li>
              <li>Un chiffrement TLS pour tous les envois</li>
              <li>
                Une surveillance en temps reel des metriques de reputation
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              7. Sanctions en cas de non-respect
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-3">
              Si un de nos clients ne respecte pas cette politique :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-light)]">
              <li>La campagne est immediatement suspendue</li>
              <li>Le client est notifie de la violation</li>
              <li>En cas de recidive, le compte du client est resilie</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              8. Signaler un abus
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              Si vous recevez un email non sollicite envoye via notre service,
              signalez-le a :{" "}
              <a
                href="mailto:bryanbr.service@gmail.com"
                className="text-[var(--color-primary)] hover:underline"
              >
                bryanbr.service@gmail.com
              </a>{" "}
              avec l&apos;objet &ldquo;Signalement spam&rdquo;. Nous traiterons
              votre signalement sous 24 heures.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">
              9. Conformite legale
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-3">
              Notre politique anti-spam est conforme a :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-light)]">
              <li>
                Le Reglement General sur la Protection des Donnees (RGPD)
              </li>
              <li>La directive europeenne ePrivacy</li>
              <li>La loi francaise Informatique et Libertes</li>
              <li>Les conditions d&apos;utilisation d&apos;Amazon SES</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
