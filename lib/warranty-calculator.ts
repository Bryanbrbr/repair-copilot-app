import { getWarrantyDurationMonths } from "./legal-references";

export interface WarrantyStatus {
  isUnderWarranty: boolean;
  purchaseDate: Date;
  warrantyEndDate: Date;
  daysRemaining: number;
  monthsRemaining: number;
  totalWarrantyMonths: number;
  message: string;
}

/**
 * Calcule le statut de garantie légale de conformité en France.
 * Durée : 24 mois à compter de la date d'achat (délivrance du bien).
 *
 * Note : Ce calcul est indicatif. La date exacte peut varier selon
 * la date de livraison effective du bien.
 */
export function calculateWarrantyStatus(purchaseDateStr: string): WarrantyStatus {
  const warrantyMonths = getWarrantyDurationMonths();
  const purchaseDate = new Date(purchaseDateStr);
  const today = new Date();

  // Calculer la date de fin de garantie
  const warrantyEndDate = new Date(purchaseDate);
  warrantyEndDate.setMonth(warrantyEndDate.getMonth() + warrantyMonths);

  // Calculer les jours restants
  const timeDiff = warrantyEndDate.getTime() - today.getTime();
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  // Calculer les mois restants
  const monthsRemaining = Math.max(
    0,
    Math.floor(daysRemaining / 30.44) // Moyenne de jours par mois
  );

  const isUnderWarranty = daysRemaining > 0;

  let message: string;
  if (isUnderWarranty) {
    if (daysRemaining > 180) {
      message = `D'après la date d'achat indiquée, la garantie légale de conformité (${warrantyMonths} mois) semble encore active. Il vous reste environ ${monthsRemaining} mois.`;
    } else if (daysRemaining > 30) {
      message = `D'après la date d'achat indiquée, la garantie légale de conformité semble encore active mais arrive bientôt à échéance. Il vous reste environ ${monthsRemaining} mois. Nous vous conseillons d'agir rapidement.`;
    } else {
      message = `Attention : d'après la date d'achat indiquée, la garantie légale de conformité arrive à échéance dans ${daysRemaining} jour${daysRemaining > 1 ? "s" : ""}. Agissez immédiatement.`;
    }
  } else {
    message = `D'après la date d'achat indiquée, la garantie légale de conformité (${warrantyMonths} mois) semble expirée depuis ${Math.abs(daysRemaining)} jours. Cependant, vous pourriez encore bénéficier de la garantie des vices cachés (article 1641 du Code civil) si le défaut existait avant l'achat.`;
  }

  return {
    isUnderWarranty,
    purchaseDate,
    warrantyEndDate,
    daysRemaining: Math.max(0, daysRemaining),
    monthsRemaining,
    totalWarrantyMonths: warrantyMonths,
    message,
  };
}

/**
 * Formate une date en format français lisible.
 */
export function formatDateFR(date: Date): string {
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
