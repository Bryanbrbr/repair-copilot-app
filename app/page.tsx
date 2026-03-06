import type { Metadata } from "next";
import Link from "next/link";
import { appliances } from "@/lib/appliances";
import StructuredData, {
  buildFAQSchema,
  buildWebAppSchema,
} from "@/components/SEO/StructuredData";

export const metadata: Metadata = {
  title:
    "Appareil en panne ? Mail de réclamation garantie légale gratuit | Repair Copilot",
  description:
    "Lave-linge, frigo, TV, smartphone en panne ? Vérifiez votre garantie légale de conformité (2 ans) et générez un mail de réclamation professionnel gratuit avec les articles de loi. Sans inscription, 100% gratuit.",
  alternates: {
    canonical: "/",
  },
};

const homeFAQ = [
  {
    question: "Qu'est-ce que la garantie légale de conformité ?",
    answer:
      "La garantie légale de conformité est une protection prévue par le Code de la consommation français, notamment les articles L217-3 et suivants. Elle oblige le vendeur à réparer ou remplacer un produit non conforme pendant 24 mois après l'achat, sans frais pour le consommateur.",
  },
  {
    question: "Dois-je contacter le fabricant ou le vendeur ?",
    answer:
      "La garantie légale de conformité s'exerce auprès du vendeur. Même si le fabricant dispose d'un SAV, l'interlocuteur légal reste le magasin ou le site où vous avez acheté le produit.",
  },
  {
    question: "J'ai perdu ma facture, puis-je quand même agir ?",
    answer:
      "Oui. Un relevé bancaire, un email de confirmation de commande, un ticket de caisse ou tout autre justificatif d'achat peut suffire.",
  },
  {
    question: "Le site conserve-t-il mes données ?",
    answer:
      "Non. Le générateur est conçu pour fonctionner directement dans votre navigateur. Les informations saisies servent à produire votre mail et ne nécessitent pas la création d'un compte.",
  },
  {
    question: "Que faire si le vendeur refuse de réparer ?",
    answer:
      "Vous pouvez envoyer une relance, demander un courrier recommandé, saisir le médiateur de la consommation ou contacter une association de consommateurs comme UFC-Que Choisir ou la CLCV.",
  },
];

const trustItems = [
  "Base juridique issue du Code de la consommation",
  "Vérification de la période de garantie en quelques secondes",
  "Mail prêt à copier avec un ton clair et défendable",
];

const authorityPoints = [
  {
    title: "Cadre légal clair",
    text: "Le contenu s'appuie sur les textes français applicables à la garantie légale de conformité, avec les articles utiles déjà intégrés dans le mail.",
  },
  {
    title: "Aucune friction inutile",
    text: "Pas de compte, pas de paiement, pas de tunnel artificiel. Vous arrivez, vous vérifiez votre situation, vous repartez avec un courrier exploitable.",
  },
  {
    title: "Orienté action",
    text: "Le produit ne se contente pas d'expliquer vos droits. Il vous aide à produire un mail sérieux, structuré et immédiatement envoyable.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Renseignez votre achat",
    text: "Type d'appareil, marque, date d'achat, vendeur et votre identité. Le minimum nécessaire pour produire un courrier crédible.",
  },
  {
    number: "02",
    title: "Décrivez la panne",
    text: "Vous résumez le dysfonctionnement. Le générateur adapte ensuite la formulation et les références légales à votre situation.",
  },
  {
    number: "03",
    title: "Copiez et envoyez",
    text: "Vous récupérez un objet, un corps de mail, une relance possible et la liste des pièces recommandées à joindre.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-surface relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border-strong)] bg-white/80 px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[var(--color-secondary)]" />
              Gratuit, sans inscription, pensé pour être opposable au vendeur
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
              Votre appareil tombe en panne ?
              <span className="mt-2 block text-[var(--color-primary)]">
                Faites partir un mail solide avant de repayer.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-soft)] sm:text-xl">
              Repair Copilot vérifie votre fenêtre de garantie légale de conformité
              et génère un mail de réclamation prêt à envoyer, avec les articles de
              loi déjà formulés proprement.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/generateur"
                className="inline-flex items-center justify-center rounded-2xl bg-[var(--color-secondary)] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_35px_-18px_rgba(11,94,82,0.75)] transition hover:bg-[var(--color-secondary-strong)]"
              >
                Vérifier mes droits maintenant
              </Link>
              <Link
                href="/guide"
                className="inline-flex items-center justify-center rounded-2xl border border-[var(--color-border-strong)] bg-white px-7 py-4 text-base font-semibold text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                Lire les guides par appareil
              </Link>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-[var(--color-text-muted)] sm:grid-cols-3">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--color-border)] bg-white/75 px-4 py-4 shadow-sm backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-8">
            <div className="panel-dark rounded-[28px] p-6 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.7)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-highlight)]">
                Aperçu du résultat
              </p>
              <div className="mt-5 rounded-3xl border border-white/10 bg-white/95 p-5 shadow-inner">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                  Objet
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">
                  Mise en oeuvre de la garantie légale de conformité pour mon lave-linge Bosch
                </p>
                <div className="mt-5 rounded-2xl bg-[var(--color-bg-alt)] p-4 text-sm leading-7 text-[var(--color-text-soft)]">
                  <p>Bonjour,</p>
                  <p className="mt-3">
                    Je vous contacte au sujet d&apos;un lave-linge Bosch acheté le 12 avril 2025
                    dans votre enseigne. L&apos;appareil ne démarre plus malgré un usage normal.
                  </p>
                  <p className="mt-3">
                    En application des articles L217-3, L217-7 et L217-11 du Code de la
                    consommation, je vous demande la mise en conformité du produit sans frais.
                  </p>
                  <div className="relative mt-4 h-10 overflow-hidden rounded-b-xl">
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[var(--color-bg-alt)] via-[var(--color-bg-alt)]/95 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-1 pb-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-text-muted)]/80">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        Extrait du mail
                      </span>
                      <span aria-hidden="true" className="text-base tracking-[0.3em]">
                        ...
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">30 sec</p>
                  <p className="mt-1 text-sm text-white/70">pour produire le mail</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">24 mois</p>
                  <p className="mt-1 text-sm text-white/70">de garantie légale visée</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">22+</p>
                  <p className="mt-1 text-sm text-white/70">familles d&apos;appareils traitées</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="section-heading mx-auto max-w-3xl text-center">
            <p className="eyebrow">Pourquoi ce site inspire plus confiance qu&apos;un modèle trouvé au hasard</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Un outil de défense consommateur, pas un gadget de formulaire
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-text-soft)]">
              Le sujet est sensible. Vous écrivez à un vendeur qui peut refuser, temporiser
              ou vous renvoyer vers le fabricant. Le site doit donc produire un courrier
              crédible et vous éviter le ton hésitant ou maladroit.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {authorityPoints.map((item) => (
              <article
                key={item.title}
                className="surface-card rounded-[26px] p-7 shadow-[0_20px_45px_-35px_rgba(15,23,42,0.45)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                  {item.title}
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--color-text-soft)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">Méthode</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                Trois étapes, aucune ambiguïté
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--color-text-soft)]">
                Le parcours est court parce que le but n&apos;est pas de vous capturer dans
                un tunnel. Il est de vous faire sortir avec un message exploitable et une
                lecture claire de votre position.
              </p>
              <div className="mt-8 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-6">
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  Ce que vous obtenez à la fin
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-soft)]">
                  <li>Un objet de mail prêt à envoyer</li>
                  <li>Une version de réclamation et une version de relance</li>
                  <li>La liste des pièces à joindre pour renforcer la demande</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-4">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="surface-card flex gap-5 rounded-[26px] p-6 shadow-[0_20px_45px_-35px_rgba(15,23,42,0.45)]"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-lg font-semibold text-white">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-[var(--color-text-soft)]">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="section-heading mx-auto max-w-3xl text-center">
            <p className="eyebrow">Couverture</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Guides ciblés par type d&apos;appareil
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-text-soft)]">
              Chaque guide conserve le même angle : comprendre votre levier juridique
              sans vous perdre dans un jargon inutile.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {appliances.map((appliance) => (
              <Link
                key={appliance.slug}
                href={`/guide/${appliance.slug}`}
                className="surface-card flex min-h-32 flex-col items-center justify-center rounded-[22px] border px-4 py-5 text-center transition hover:-translate-y-1"
              >
                <span className="text-3xl">{appliance.icon}</span>
                <span className="mt-3 text-sm font-semibold text-[var(--color-text)]">
                  {appliance.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 rounded-[32px] border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
            <div>
              <p className="eyebrow">Questions fréquentes</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)]">
                Ce qu&apos;il faut savoir avant d&apos;envoyer
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--color-text-soft)]">
                Les réponses ci-dessous sont là pour réduire l&apos;hésitation et cadrer
                proprement les cas les plus fréquents.
              </p>
            </div>
            <div className="space-y-4">
              {homeFAQ.map((item) => (
                <details
                  key={item.question}
                  className="surface-card rounded-[22px] p-6 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.4)]"
                >
                  <summary className="flex list-none items-center justify-between gap-4 text-lg font-semibold text-[var(--color-text)]">
                    {item.question}
                    <span className="faq-chevron text-[var(--color-primary)]">+</span>
                  </summary>
                  <p className="mt-4 text-base leading-7 text-[var(--color-text-soft)]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="panel-dark rounded-[32px] px-6 py-10 sm:px-10">
            <p className="eyebrow text-[var(--color-highlight)]">Dernière étape</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ne laisse pas le vendeur installer le doute à ta place
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/75">
              Vérifie d&apos;abord ta position, puis envoie un message propre, ferme et
              défendable. C&apos;est ce que ce site doit faire, et rapidement.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/generateur"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-base font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-highlight)]"
              >
                Ouvrir le générateur
              </Link>
              <Link
                href="/mentions-legales"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/8"
              >
                Vérifier les mentions et sources
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StructuredData type="WebApplication" data={buildWebAppSchema()} />
      <StructuredData type="FAQPage" data={buildFAQSchema(homeFAQ)} />
    </>
  );
}