import { formatDateFR } from "./warranty-calculator";

export interface MailFormData {
  applianceType: string;
  brand: string;
  purchaseDate: string;
  store: string;
  problemDescription: string;
  hasReceipt: boolean;
  customerName: string;
}

export interface GeneratedMail {
  subject: string;
  body: string;
  type: "reclamation" | "relance";
}

/**
 * Génère un mail de réclamation pour faire valoir la garantie légale
 * de conformité auprès du vendeur.
 */
export function generateReclamationMail(data: MailFormData): GeneratedMail {
  const purchaseDate = new Date(data.purchaseDate);
  const formattedDate = formatDateFR(purchaseDate);

  const subject = `Réclamation au titre de la garantie légale de conformité — ${data.applianceType} ${data.brand}`;

  const body = `Madame, Monsieur,

Je me permets de vous contacter au sujet d'un ${data.applianceType.toLowerCase()} de marque ${data.brand} que j'ai acheté dans votre ${getStoreType(data.store)} le ${formattedDate}.

Depuis peu, cet appareil présente le dysfonctionnement suivant :
${data.problemDescription}

Ce défaut est apparu dans le cadre d'une utilisation normale de l'appareil.

Or, conformément aux articles L217-3 et suivants du Code de la consommation, le vendeur est tenu de délivrer un bien conforme au contrat et répond des défauts de conformité existant lors de la délivrance du bien.

Par ailleurs, l'article L217-7 du même code dispose que les défauts de conformité qui apparaissent dans un délai de vingt-quatre mois à compter de la délivrance du bien sont, sauf preuve contraire, présumés exister au moment de la délivrance.

En conséquence, je vous demande de bien vouloir procéder, à votre convenance, soit à la réparation, soit au remplacement de cet appareil, conformément à l'article L217-8 du Code de la consommation.

Je vous rappelle que cette mise en conformité doit être effectuée sans aucun frais à ma charge (article L217-11) et dans un délai raisonnable n'excédant pas trente jours (article L217-10).

${data.hasReceipt ? "Je tiens à votre disposition la facture d'achat correspondante." : "Je suis en mesure de justifier de la date d'achat par tout moyen (relevé bancaire, confirmation de commande, etc.)."}

Dans l'attente de votre réponse, que j'espère rapide, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

${data.customerName}`;

  return { subject, body, type: "reclamation" };
}

/**
 * Génère un mail de relance si le vendeur n'a pas répondu
 * dans un délai raisonnable.
 */
export function generateRelanceMail(data: MailFormData): GeneratedMail {
  const purchaseDate = new Date(data.purchaseDate);
  const formattedDate = formatDateFR(purchaseDate);

  const subject = `RELANCE — Réclamation garantie légale de conformité — ${data.applianceType} ${data.brand}`;

  const body = `Madame, Monsieur,

Je fais suite à mon précédent courrier concernant mon ${data.applianceType.toLowerCase()} de marque ${data.brand}, acheté dans votre ${getStoreType(data.store)} le ${formattedDate}, et qui présente un défaut de conformité.

À ce jour, je n'ai reçu aucune réponse de votre part malgré ma demande initiale.

Je vous rappelle mes droits au titre de la garantie légale de conformité (articles L217-3 et suivants du Code de la consommation) :
— Le vendeur est responsable des défauts de conformité (article L217-3).
— La réparation ou le remplacement doit intervenir dans un délai de 30 jours maximum (article L217-10).
— Cette mise en conformité doit être effectuée sans aucun frais (article L217-11).

À défaut de réponse de votre part sous 8 jours, je me verrai dans l'obligation de :
— Saisir le médiateur de la consommation compétent.
— Contacter une association de défense des consommateurs (UFC-Que Choisir, CLCV).
— Le cas échéant, engager une procédure judiciaire.

Conformément à l'article L217-12 du Code de la consommation, si la mise en conformité n'est pas effectuée, je suis en droit de demander une réduction du prix ou la résolution du contrat (remboursement).

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

${data.customerName}`;

  return { subject, body, type: "relance" };
}

/**
 * Détermine le type d'enseigne pour une formulation naturelle
 */
function getStoreType(store: string): string {
  const onlineStores = [
    "amazon",
    "cdiscount",
    "fnac",
    "darty",
    "boulanger",
    "ldlc",
    "rue du commerce",
    "rakuten",
    "back market",
    "ebay",
  ];

  const lowerStore = store.toLowerCase().trim();

  if (
    onlineStores.some((s) => lowerStore.includes(s)) ||
    lowerStore.includes(".fr") ||
    lowerStore.includes(".com") ||
    lowerStore.includes("en ligne")
  ) {
    return `enseigne (${store})`;
  }

  return `magasin ${store}`;
}

/**
 * Liste des types d'appareils pour le formulaire
 */
export const applianceTypes = [
  "Lave-linge",
  "Lave-vaisselle",
  "Réfrigérateur",
  "Congélateur",
  "Four",
  "Micro-ondes",
  "Sèche-linge",
  "Aspirateur",
  "Aspirateur robot",
  "Télévision",
  "Ordinateur portable",
  "Ordinateur de bureau",
  "Smartphone",
  "Tablette",
  "Machine à café",
  "Robot culinaire",
  "Climatiseur",
  "Imprimante",
  "Console de jeux",
  "Casque audio",
  "Enceinte connectée",
  "Montre connectée",
  "Autre",
];

/**
 * Liste des enseignes courantes en France
 */
export const commonStores = [
  "Amazon",
  "Fnac",
  "Darty",
  "Boulanger",
  "Cdiscount",
  "Carrefour",
  "Leclerc",
  "Auchan",
  "Conforama",
  "But",
  "LDLC",
  "Rue du Commerce",
  "Back Market",
  "Samsung",
  "Apple Store",
  "Xiaomi",
];
