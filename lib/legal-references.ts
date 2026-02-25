export interface LegalArticle {
  code: string;
  article: string;
  title: string;
  summary: string;
  fullReference: string;
  url: string;
}

/**
 * Références juridiques basées sur le Code de la consommation français.
 * Ces informations sont fournies à titre indicatif et ne constituent
 * pas un conseil juridique personnalisé.
 */
export const legalArticles: LegalArticle[] = [
  {
    code: "Code de la consommation",
    article: "L217-3",
    title: "Garantie légale de conformité",
    summary:
      "Le vendeur délivre un bien conforme au contrat et répond des défauts de conformité existant lors de la délivrance. Il répond également des défauts de conformité résultant de l'emballage, des instructions de montage ou de l'installation lorsque celle-ci a été mise à sa charge.",
    fullReference: "Article L217-3 du Code de la consommation",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044142607",
  },
  {
    code: "Code de la consommation",
    article: "L217-4",
    title: "Critères de conformité",
    summary:
      "Le bien est conforme au contrat s'il correspond à la description, au type, à la quantité et à la qualité prévus dans le contrat. Il doit être propre à l'usage habituellement attendu d'un bien de même type.",
    fullReference: "Article L217-4 du Code de la consommation",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044142609",
  },
  {
    code: "Code de la consommation",
    article: "L217-5",
    title: "Critères de conformité objectifs",
    summary:
      "Le bien doit posséder les qualités qu'un acheteur peut légitimement attendre. Il doit correspondre à la description donnée par le vendeur et posséder les qualités présentées sous forme d'échantillon ou modèle.",
    fullReference: "Article L217-5 du Code de la consommation",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044142611",
  },
  {
    code: "Code de la consommation",
    article: "L217-7",
    title: "Présomption d'antériorité du défaut",
    summary:
      "Les défauts de conformité qui apparaissent dans un délai de vingt-quatre mois à compter de la délivrance du bien sont, sauf preuve contraire, présumés exister au moment de la délivrance.",
    fullReference: "Article L217-7 du Code de la consommation",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044142615",
  },
  {
    code: "Code de la consommation",
    article: "L217-8",
    title: "Choix entre réparation et remplacement",
    summary:
      "En cas de défaut de conformité, le consommateur a le choix entre la réparation et le remplacement du bien. Le vendeur peut toutefois ne pas procéder selon le choix du consommateur si ce choix entraîne un coût manifestement disproportionné.",
    fullReference: "Article L217-8 du Code de la consommation",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044142617",
  },
  {
    code: "Code de la consommation",
    article: "L217-10",
    title: "Délai de réparation raisonnable",
    summary:
      "La réparation ou le remplacement du bien doit intervenir dans un délai raisonnable qui ne peut excéder trente jours suivant la demande du consommateur et sans inconvénient majeur pour celui-ci.",
    fullReference: "Article L217-10 du Code de la consommation",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044142621",
  },
  {
    code: "Code de la consommation",
    article: "L217-11",
    title: "Gratuité de la mise en conformité",
    summary:
      "La mise en conformité est effectuée sans aucun frais pour le consommateur. Le consommateur n'est pas tenu de payer pour l'utilisation normale du bien remplacé pendant la période précédant le remplacement.",
    fullReference: "Article L217-11 du Code de la consommation",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044142623",
  },
  {
    code: "Code de la consommation",
    article: "L217-12",
    title: "Réduction de prix ou résolution du contrat",
    summary:
      "Le consommateur peut obtenir une réduction du prix ou la résolution du contrat lorsque la mise en conformité est impossible ou ne peut être mise en œuvre sans inconvénient majeur.",
    fullReference: "Article L217-12 du Code de la consommation",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044142625",
  },
  {
    code: "Code civil",
    article: "1641",
    title: "Garantie des vices cachés",
    summary:
      "Le vendeur est tenu de la garantie à raison des défauts cachés de la chose vendue qui la rendent impropre à l'usage auquel on la destine, ou qui diminuent tellement cet usage que l'acheteur ne l'aurait pas acquise, ou n'en aurait donné qu'un moindre prix, s'il les avait connus.",
    fullReference: "Article 1641 du Code civil",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006441924",
  },
];

export function getLegalArticle(articleNumber: string): LegalArticle | undefined {
  return legalArticles.find((a) => a.article === articleNumber);
}

export function getWarrantyDurationMonths(): number {
  return 24; // Garantie légale de conformité : 24 mois
}

export const WARRANTY_DISCLAIMER =
  "Les informations fournies par cet outil sont données à titre indicatif, sur la base du Code de la consommation français en vigueur. Elles ne constituent en aucun cas un conseil juridique personnalisé. En cas de litige complexe, nous vous recommandons de consulter un professionnel du droit ou une association de consommateurs (UFC-Que Choisir, CLCV, etc.).";
