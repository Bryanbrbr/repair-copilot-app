// ===== Types =====

export type BlogCategory =
  | "droits-consommateur"
  | "garantie-legale"
  | "conseils-pratiques";

export interface BlogSection {
  type: "paragraph" | "heading" | "list" | "callout";
  content: string;
  items?: string[];
  level?: 2 | 3;
  variant?: "info" | "warning" | "tip";
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  seoKeywords: string[];
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: BlogCategory;
  readingTime: string;
  content: BlogSection[];
  faq?: { question: string; answer: string }[];
}

export const blogCategories: Record<
  BlogCategory,
  { label: string; description: string }
> = {
  "droits-consommateur": {
    label: "Droits du consommateur",
    description:
      "Comprendre et faire valoir vos droits face aux vendeurs et fabricants.",
  },
  "garantie-legale": {
    label: "Garantie légale",
    description:
      "Tout sur la garantie légale de conformité et la garantie des vices cachés.",
  },
  "conseils-pratiques": {
    label: "Conseils pratiques",
    description:
      "Astuces et démarches concrètes pour résoudre vos litiges de consommation.",
  },
};

// ===== Articles =====

export const blogPosts: BlogPost[] = [
  {
    slug: "garantie-legale-de-conformite-guide-complet",
    title:
      "Garantie légale de conformité : le guide complet pour les consommateurs",
    description:
      "Tout ce que vous devez savoir sur la garantie légale de conformité en France : durée, conditions, démarches et articles de loi. Guide pratique 2026.",
    seoKeywords: [
      "garantie légale de conformité",
      "garantie 2 ans",
      "article L217",
      "droits consommateur",
    ],
    publishedAt: "2026-02-27",
    author: "Repair Copilot",
    category: "garantie-legale",
    readingTime: "8 min",
    content: [
      {
        type: "paragraph",
        content:
          "Quand un appareil tombe en panne quelques mois après l'achat, beaucoup de consommateurs pensent qu'ils n'ont aucun recours. Pourtant, la loi française vous protège pendant 2 ans grâce à la garantie légale de conformité. Ce guide vous explique tout ce que vous devez savoir pour faire valoir vos droits.",
      },
      {
        type: "heading",
        content: "Qu'est-ce que la garantie légale de conformité ?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "La garantie légale de conformité est une protection prévue par le Code de la consommation (articles L217-3 et suivants). Elle oblige le vendeur — pas le fabricant — à vous livrer un produit conforme à ce qui était prévu au contrat. Si le produit présente un défaut, le vendeur doit le réparer ou le remplacer gratuitement.",
      },
      {
        type: "callout",
        content:
          "La garantie légale de conformité s'applique à tous les biens meubles corporels : électroménager, high-tech, meubles, vêtements, jouets, etc. Elle est d'ordre public, ce qui signifie qu'aucun contrat ne peut la supprimer ou la réduire.",
        variant: "info",
      },
      {
        type: "heading",
        content: "Combien de temps dure-t-elle ?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "La garantie légale de conformité dure 24 mois à compter de la délivrance du bien (c'est-à-dire la date où vous recevez le produit). Pour les biens d'occasion, le délai minimum est de 12 mois, mais le vendeur peut proposer un délai plus long.",
      },
      {
        type: "heading",
        content: "La présomption d'antériorité : un avantage considérable",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "L'article L217-7 du Code de la consommation prévoit que tout défaut apparaissant dans les 24 mois suivant la livraison est présumé exister au moment de l'achat. Concrètement, c'est au vendeur de prouver que le défaut n'existait pas au moment de la vente. Vous n'avez rien à prouver de votre côté.",
      },
      {
        type: "callout",
        content:
          "Si votre lave-linge tombe en panne après 18 mois, le vendeur ne peut pas simplement dire « c'est de l'usure normale ». Il doit apporter la preuve technique que le défaut est de votre fait.",
        variant: "tip",
      },
      {
        type: "heading",
        content: "Vos droits concrets : réparation ou remplacement",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Selon l'article L217-8, c'est vous qui choisissez entre la réparation et le remplacement de l'appareil. Le vendeur ne peut refuser votre choix que si celui-ci entraîne un coût manifestement disproportionné par rapport à l'autre option.",
      },
      {
        type: "list",
        content: "Ce que le vendeur doit respecter :",
        items: [
          "La mise en conformité doit être effectuée dans un délai de 30 jours maximum (article L217-10).",
          "Elle doit être totalement gratuite : pas de frais de main d'œuvre, de pièces, de port ou de déplacement (article L217-11).",
          "Si la réparation et le remplacement sont impossibles, vous pouvez demander une réduction du prix ou la résolution du contrat (article L217-12).",
          "Pendant la réparation, le compteur de garantie est suspendu : vous ne perdez pas de jours.",
        ],
      },
      {
        type: "heading",
        content: "Comment faire valoir la garantie ?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "La démarche est simple : contactez le vendeur (pas le fabricant) par email ou courrier en citant les articles de loi. Décrivez le défaut, mentionnez la date d'achat et demandez la réparation ou le remplacement. Notre outil génère ce mail automatiquement en 30 secondes.",
      },
      {
        type: "list",
        content: "Les étapes à suivre :",
        items: [
          "Rassemblez votre preuve d'achat (facture, ticket, relevé bancaire, confirmation email).",
          "Décrivez précisément le défaut constaté.",
          "Envoyez un mail ou un courrier au service client du vendeur en citant les articles L217-3 et suivants.",
          "Conservez une copie de tous vos échanges.",
          "Si pas de réponse sous 15 jours, envoyez un courrier de relance plus ferme.",
          "En dernier recours : médiateur de la consommation, association de consommateurs, ou tribunal.",
        ],
      },
      {
        type: "heading",
        content:
          "Garantie légale vs garantie commerciale : ne pas confondre",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "La garantie commerciale (ou « garantie constructeur ») est proposée volontairement par le fabricant ou le vendeur. Elle vient en complément de la garantie légale, mais ne la remplace jamais. Même si votre garantie commerciale a expiré, la garantie légale de 24 mois continue de s'appliquer.",
      },
      {
        type: "callout",
        content:
          "Un vendeur qui vous dit « votre garantie est expirée » en parlant de la garantie commerciale a peut-être raison, mais la garantie légale de conformité peut encore être en cours. Vérifiez toujours la date d'achat.",
        variant: "warning",
      },
    ],
    faq: [
      {
        question:
          "La garantie légale s'applique-t-elle aux achats d'occasion ?",
        answer:
          "Oui, mais le délai minimum est de 12 mois au lieu de 24 mois pour les biens neufs. Certains vendeurs professionnels proposent 24 mois même pour l'occasion.",
      },
      {
        question:
          "Je n'ai plus ma facture, puis-je quand même faire valoir la garantie ?",
        answer:
          "Oui. La facture n'est pas le seul justificatif accepté. Un relevé bancaire, une confirmation de commande par email, ou tout autre document prouvant l'achat et sa date sont valables.",
      },
      {
        question:
          "Le vendeur me renvoie vers le fabricant, est-ce normal ?",
        answer:
          "Non. La garantie légale de conformité s'exerce auprès du vendeur, pas du fabricant. C'est le vendeur qui est responsable et doit organiser la réparation ou le remplacement.",
      },
    ],
  },
  {
    slug: "comment-rediger-mail-reclamation-garantie",
    title:
      "Comment rédiger un mail de réclamation garantie efficace",
    description:
      "Les bonnes pratiques pour écrire un mail de réclamation qui obtient une réponse rapide du vendeur. Ton, structure, articles de loi et erreurs à éviter.",
    seoKeywords: [
      "mail réclamation garantie",
      "modèle lettre réclamation",
      "courrier garantie",
      "réclamation vendeur",
    ],
    publishedAt: "2026-02-27",
    author: "Repair Copilot",
    category: "conseils-pratiques",
    readingTime: "6 min",
    content: [
      {
        type: "paragraph",
        content:
          "Un mail de réclamation bien rédigé fait toute la différence. Un message clair, structuré et citant les bons articles de loi a beaucoup plus de chances d'obtenir une réponse favorable et rapide. Voici les bonnes pratiques pour maximiser vos chances.",
      },
      {
        type: "heading",
        content: "La structure idéale d'un mail de réclamation",
        level: 2,
      },
      {
        type: "list",
        content: "Votre mail doit contenir ces éléments essentiels :",
        items: [
          "Un objet clair mentionnant « garantie légale de conformité » et le type d'appareil.",
          "L'identification précise du produit : type, marque, modèle, numéro de série si possible.",
          "La date et le lieu d'achat.",
          "Une description factuelle et précise du défaut constaté.",
          "Les articles de loi applicables (L217-3 et suivants du Code de la consommation).",
          "Votre demande explicite : réparation ou remplacement.",
          "La mention que la mise en conformité doit être gratuite et sous 30 jours.",
        ],
      },
      {
        type: "heading",
        content: "Quel ton adopter ?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Le ton de votre mail est important. Pour un premier contact, un ton poli mais ferme est généralement le plus efficace. Vous montrez que vous connaissez vos droits sans être agressif, ce qui facilite la coopération du service client.",
      },
      {
        type: "heading",
        content: "Ton poli (premier contact)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Idéal pour une première prise de contact. Vous exprimez votre problème de manière courtoise tout en mentionnant vos droits légaux. C'est souvent suffisant pour obtenir une réponse positive, surtout avec les grandes enseignes qui ont des procédures SAV bien rodées.",
      },
      {
        type: "heading",
        content: "Ton standard (professionnel)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Le ton standard cite directement les articles de loi et formule une demande claire. Il est recommandé quand vous n'êtes pas sûr de la réactivité du vendeur, ou si le montant de l'appareil est conséquent.",
      },
      {
        type: "heading",
        content: "Ton ferme (mise en demeure)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Réservé aux situations où le vendeur fait la sourde oreille ou refuse de coopérer. Ce ton mentionne les recours possibles (médiateur, association de consommateurs, tribunal) et fixe un délai de réponse. Il est recommandé pour les relances.",
      },
      {
        type: "heading",
        content: "Les erreurs à éviter",
        level: 2,
      },
      {
        type: "list",
        content: "Ces erreurs courantes affaiblissent votre réclamation :",
        items: [
          "Ne pas citer les articles de loi : sans référence légale, le vendeur peut plus facilement ignorer votre demande.",
          "Contacter le fabricant au lieu du vendeur : c'est le vendeur qui est responsable au titre de la garantie légale.",
          "Être vague sur le défaut : décrivez précisément les symptômes, quand ils sont apparus, et dans quelles conditions.",
          "Oublier la date d'achat : c'est l'information clé qui détermine si la garantie est encore en cours.",
          "Accepter un avoir au lieu d'une réparation/remplacement : la loi vous donne droit à la mise en conformité, pas à un bon d'achat.",
          "Menacer sans suite : si vous mentionnez des recours, soyez prêt à les mettre en œuvre.",
        ],
      },
      {
        type: "callout",
        content:
          "Notre outil génère automatiquement un mail de réclamation structuré, avec les articles de loi appropriés et le ton de votre choix. Il suffit de renseigner les informations de votre appareil et le problème rencontré.",
        variant: "tip",
      },
      {
        type: "heading",
        content: "Que faire si le vendeur ne répond pas ?",
        level: 2,
      },
      {
        type: "list",
        content:
          "Si vous n'obtenez pas de réponse sous 15 jours, voici la marche à suivre :",
        items: [
          "Envoyez un mail de relance avec un ton plus ferme, en fixant un délai de 8 jours.",
          "Envoyez un courrier recommandé avec accusé de réception (valeur juridique plus forte).",
          "Saisissez le médiateur de la consommation du secteur concerné (obligatoirement indiqué par le vendeur).",
          "Contactez une association de consommateurs (UFC-Que Choisir, CLCV).",
          "En dernier recours, saisissez le tribunal judiciaire (pour les litiges de moins de 5 000 €, pas besoin d'avocat).",
        ],
      },
    ],
    faq: [
      {
        question:
          "Dois-je envoyer un courrier recommandé ou un email suffit ?",
        answer:
          "Un email suffit dans la plupart des cas pour un premier contact. Le courrier recommandé avec accusé de réception est conseillé en cas de relance ou si le vendeur ne répond pas, car il a une valeur juridique plus forte.",
      },
      {
        question: "Puis-je demander un remboursement directement ?",
        answer:
          "La loi prévoit d'abord la réparation ou le remplacement. Le remboursement (résolution du contrat) n'est possible que si la réparation et le remplacement sont impossibles, ou si le vendeur ne les effectue pas dans les 30 jours.",
      },
      {
        question:
          "Le vendeur me propose un avoir, suis-je obligé d'accepter ?",
        answer:
          "Non. La garantie légale vous donne droit à la réparation ou au remplacement, pas à un avoir ou un bon d'achat. Vous pouvez refuser l'avoir et exiger la mise en conformité de votre appareil.",
      },
    ],
  },
  {
    slug: "vendeur-refuse-garantie-recours",
    title:
      "Vendeur qui refuse la garantie : vos recours étape par étape",
    description:
      "Votre vendeur refuse d'appliquer la garantie légale ? Découvrez toutes les démarches et recours à votre disposition pour faire valoir vos droits.",
    seoKeywords: [
      "vendeur refuse garantie",
      "recours garantie",
      "médiateur consommation",
      "litige vendeur",
    ],
    publishedAt: "2026-02-27",
    author: "Repair Copilot",
    category: "droits-consommateur",
    readingTime: "7 min",
    content: [
      {
        type: "paragraph",
        content:
          "C'est une situation frustrante mais courante : votre appareil est en panne, vous contactez le vendeur et il refuse d'appliquer la garantie. Pas de panique : la loi est de votre côté et vous disposez de plusieurs recours efficaces.",
      },
      {
        type: "heading",
        content: "Les excuses les plus fréquentes des vendeurs",
        level: 2,
      },
      {
        type: "list",
        content:
          "Voici les arguments les plus courants utilisés par les vendeurs pour refuser la garantie, et pourquoi ils sont souvent infondés :",
        items: [
          "« La garantie est expirée » → Vérifiez : il parle peut-être de la garantie commerciale, pas de la garantie légale de 24 mois.",
          "« C'est de l'usure normale » → Pendant les 24 premiers mois, c'est au vendeur de prouver que le défaut est dû à l'usure (article L217-7).",
          "« Contactez le fabricant » → La garantie légale s'exerce auprès du vendeur, pas du fabricant.",
          "« Vous n'avez pas de facture » → Un relevé bancaire ou une confirmation de commande suffit.",
          "« Ce n'est pas couvert par la garantie » → La garantie légale couvre tout défaut de conformité, sans exception prédéfinie.",
        ],
      },
      {
        type: "heading",
        content: "Étape 1 : La relance écrite",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Si votre première demande a été refusée, envoyez un courrier de relance plus ferme. Citez explicitement les articles de loi (L217-3, L217-7, L217-8, L217-11) et fixez un délai de réponse de 8 jours. Mentionnez les recours possibles. Privilégiez un envoi en recommandé avec accusé de réception.",
      },
      {
        type: "heading",
        content: "Étape 2 : Le médiateur de la consommation",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Tout professionnel est obligé de proposer un médiateur de la consommation à ses clients (article L612-1). Les coordonnées du médiateur doivent figurer sur le site du vendeur et dans ses conditions générales de vente. La médiation est gratuite pour le consommateur et aboutit dans environ 70% des cas.",
      },
      {
        type: "callout",
        content:
          "La saisine du médiateur est gratuite et peut se faire en ligne. Le médiateur dispose de 90 jours pour proposer une solution. Vous n'êtes pas obligé d'accepter sa proposition, mais elle est souvent favorable au consommateur.",
        variant: "info",
      },
      {
        type: "heading",
        content: "Étape 3 : Les associations de consommateurs",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Des associations comme UFC-Que Choisir ou la CLCV peuvent vous accompagner dans vos démarches. Elles proposent des permanences juridiques, des modèles de courriers et peuvent intervenir directement auprès du vendeur. L'adhésion est payante mais donne accès à un accompagnement personnalisé.",
      },
      {
        type: "heading",
        content: "Étape 4 : Le signalement à la DGCCRF",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "La Direction générale de la concurrence, de la consommation et de la répression des fraudes (DGCCRF) peut être saisie via la plateforme SignalConso. Ce n'est pas une procédure individuelle de résolution, mais si un vendeur accumule les signalements, il peut faire l'objet d'un contrôle et de sanctions.",
      },
      {
        type: "heading",
        content: "Étape 5 : Le tribunal judiciaire",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "En dernier recours, vous pouvez saisir le tribunal judiciaire. Pour les litiges de moins de 5 000 €, la procédure est simplifiée et ne nécessite pas d'avocat. Vous pouvez vous faire assister par une association de consommateurs. Le juge peut ordonner la réparation, le remplacement ou le remboursement, plus d'éventuels dommages et intérêts.",
      },
      {
        type: "callout",
        content:
          "Dans la très grande majorité des cas, un mail de réclamation bien rédigé citant les articles de loi suffit à résoudre le problème. Les recours plus lourds sont rarement nécessaires.",
        variant: "tip",
      },
    ],
    faq: [
      {
        question: "Combien de temps prend une médiation ?",
        answer:
          "Le médiateur dispose de 90 jours maximum pour proposer une solution. En pratique, beaucoup de médiations aboutissent en 30 à 60 jours.",
      },
      {
        question: "La procédure au tribunal est-elle coûteuse ?",
        answer:
          "Pour les litiges de moins de 5 000 €, il n'y a pas besoin d'avocat et les frais de justice sont minimes. Si vous gagnez, le vendeur peut être condamné à rembourser vos frais.",
      },
      {
        question:
          "Puis-je laisser un avis négatif en ligne pour faire pression ?",
        answer:
          "Oui, vous avez le droit de partager votre expérience en ligne tant que vos propos sont factuels et non diffamatoires. Un avis argumenté et factuel est parfaitement légal.",
      },
    ],
  },
  {
    slug: "garantie-legale-vs-garantie-commerciale",
    title:
      "Garantie légale vs garantie commerciale : quelles différences ?",
    description:
      "Ne confondez plus garantie légale et garantie commerciale. Découvrez les différences clés et comment en tirer le meilleur parti pour protéger vos achats.",
    seoKeywords: [
      "garantie légale garantie commerciale",
      "différence garantie",
      "garantie constructeur",
      "extension garantie",
    ],
    publishedAt: "2026-02-27",
    author: "Repair Copilot",
    category: "garantie-legale",
    readingTime: "5 min",
    content: [
      {
        type: "paragraph",
        content:
          "Quand on achète un appareil électronique ou de l'électroménager, on entend souvent parler de « garantie ». Mais il existe en réalité plusieurs types de garanties, et les confondre peut vous faire perdre vos droits. Voici un guide clair pour comprendre les différences.",
      },
      {
        type: "heading",
        content: "La garantie légale de conformité",
        level: 2,
      },
      {
        type: "list",
        content: "Caractéristiques principales :",
        items: [
          "Durée : 24 mois (obligatoire, d'ordre public).",
          "Responsable : le vendeur.",
          "Coût : totalement gratuite pour le consommateur.",
          "Preuve : pendant 24 mois, le défaut est présumé exister dès l'achat.",
          "Fondement : articles L217-3 et suivants du Code de la consommation.",
          "Ne peut pas être réduite ou supprimée par un contrat.",
        ],
      },
      {
        type: "heading",
        content: "La garantie commerciale (ou garantie constructeur)",
        level: 2,
      },
      {
        type: "list",
        content: "Caractéristiques principales :",
        items: [
          "Durée : variable (1 an, 2 ans, 5 ans... au choix du fabricant ou vendeur).",
          "Responsable : le fabricant ou le vendeur qui la propose.",
          "Coût : gratuite ou payante selon les cas.",
          "Preuve : les conditions sont définies par le contrat de garantie.",
          "Fondement : contrat volontaire, pas la loi.",
          "Peut exclure certaines pannes ou conditions d'utilisation.",
        ],
      },
      {
        type: "callout",
        content:
          "La garantie commerciale ne remplace jamais la garantie légale. Elle vient toujours en complément. Même si un vendeur vous dit « votre garantie est expirée », la garantie légale de 24 mois peut encore être en cours.",
        variant: "warning",
      },
      {
        type: "heading",
        content: "La garantie des vices cachés",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Il existe une troisième garantie, souvent méconnue : la garantie des vices cachés (article 1641 du Code civil). Elle permet d'agir même au-delà des 24 mois si un défaut grave, antérieur à l'achat et non visible lors de l'achat, rend le produit impropre à son usage. Le délai pour agir est de 2 ans à compter de la découverte du vice.",
      },
      {
        type: "heading",
        content: "Faut-il prendre une extension de garantie ?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Les extensions de garantie payantes sont souvent proposées en caisse. En pratique, elles couvrent une période qui chevauche souvent avec la garantie légale de 24 mois. Avant de payer, vérifiez ce que l'extension couvre en plus de la garantie légale. Si elle ne commence qu'après les 24 mois légaux et couvre bien les pannes, elle peut avoir un intérêt. Sinon, elle fait doublon.",
      },
      {
        type: "callout",
        content:
          "Vérifiez toujours la date de début de l'extension de garantie. Si elle commence dès l'achat, elle fait doublon avec la garantie légale pendant 24 mois. Préférez les extensions qui commencent après la fin de la garantie légale.",
        variant: "tip",
      },
    ],
    faq: [
      {
        question:
          "Si j'ai une garantie commerciale de 5 ans, la garantie légale s'applique-t-elle aussi ?",
        answer:
          "Oui. Les deux garanties coexistent. Pendant les 24 premiers mois, vous pouvez invoquer soit la garantie légale, soit la garantie commerciale. Après 24 mois, seule la garantie commerciale (si elle court encore) s'applique.",
      },
      {
        question:
          "Le vendeur m'a dit que la garantie commerciale remplace la garantie légale, c'est vrai ?",
        answer:
          "Non, c'est faux. La garantie légale est d'ordre public et ne peut pas être remplacée, réduite ou supprimée. Tout contrat qui tenterait de le faire serait nul sur ce point.",
      },
      {
        question:
          "L'extension de garantie payante est-elle un bon investissement ?",
        answer:
          "Cela dépend. Si l'extension ne couvre que les 24 premiers mois, elle fait doublon avec la garantie légale et n'a aucun intérêt. Si elle prolonge réellement la couverture au-delà de 24 mois, elle peut être utile pour les appareils coûteux.",
      },
    ],
  },
  {
    slug: "erreurs-reclamation-garantie",
    title:
      "Les 10 erreurs à éviter quand vous réclamez la garantie",
    description:
      "Évitez ces erreurs courantes qui affaiblissent votre réclamation de garantie. Conseils pratiques pour maximiser vos chances d'obtenir réparation ou remplacement.",
    seoKeywords: [
      "erreurs garantie",
      "réclamation garantie",
      "conseils garantie",
      "panne appareil droits",
    ],
    publishedAt: "2026-02-27",
    author: "Repair Copilot",
    category: "conseils-pratiques",
    readingTime: "5 min",
    content: [
      {
        type: "paragraph",
        content:
          "Beaucoup de consommateurs voient leur réclamation de garantie échouer non pas parce qu'ils n'ont pas de droits, mais parce qu'ils commettent des erreurs dans leur démarche. Voici les 10 erreurs les plus fréquentes et comment les éviter.",
      },
      {
        type: "heading",
        content: "Erreur 1 : Contacter le fabricant au lieu du vendeur",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "La garantie légale de conformité s'exerce auprès du vendeur, pas du fabricant. Même si le fabricant a un SAV, c'est le vendeur qui est légalement responsable. Ne perdez pas de temps avec le fabricant.",
      },
      {
        type: "heading",
        content: "Erreur 2 : Ne pas citer les articles de loi",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Un mail de réclamation sans référence légale est beaucoup moins convaincant. Citez les articles L217-3 et suivants du Code de la consommation. Cela montre que vous connaissez vos droits et que vous êtes prêt à les faire valoir.",
      },
      {
        type: "heading",
        content: "Erreur 3 : Accepter un avoir au lieu d'une réparation",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "La loi vous donne droit à la réparation ou au remplacement, pas à un bon d'achat. Si le vendeur vous propose un avoir, vous pouvez le refuser et exiger la mise en conformité de votre appareil.",
      },
      {
        type: "heading",
        content: "Erreur 4 : Être trop vague dans la description",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "« Mon appareil ne marche plus » ne suffit pas. Décrivez précisément les symptômes : quand le problème est apparu, dans quelles conditions, quels messages d'erreur s'affichent, ce que vous avez déjà essayé. Plus votre description est précise, plus le traitement sera rapide.",
      },
      {
        type: "heading",
        content: "Erreur 5 : Attendre trop longtemps",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "La garantie légale dure 24 mois. Chaque jour qui passe vous rapproche de l'expiration. Dès que vous constatez un défaut, agissez rapidement. Plus vous attendez, plus la situation se complique.",
      },
      {
        type: "heading",
        content: "Erreur 6 : Jeter la preuve d'achat",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Conservez toujours vos factures, tickets de caisse et confirmations de commande pendant au moins 2 ans. Si vous les avez perdus, un relevé bancaire peut servir de justificatif.",
      },
      {
        type: "heading",
        content:
          "Erreur 7 : Faire réparer l'appareil soi-même avant de réclamer",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Si vous ouvrez l'appareil ou tentez une réparation avant de contacter le vendeur, celui-ci pourra argumenter que le défaut est de votre fait. Contactez d'abord le vendeur, puis décidez de la marche à suivre.",
      },
      {
        type: "heading",
        content: "Erreur 8 : Ne pas conserver les échanges",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Gardez une trace de tous vos échanges : emails, courriers, captures d'écran de chat en ligne, numéros de ticket SAV. Ces preuves sont essentielles en cas de litige prolongé.",
      },
      {
        type: "heading",
        content: "Erreur 9 : Appeler au lieu d'écrire",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Un appel téléphonique ne laisse pas de trace écrite. Privilégiez toujours l'email ou le courrier pour avoir une preuve de vos échanges. Si vous appelez, confirmez ensuite par écrit ce qui a été dit.",
      },
      {
        type: "heading",
        content: "Erreur 10 : Abandonner trop vite",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Beaucoup de consommateurs abandonnent après un premier refus. Pourtant, la loi est clairement de votre côté. Une relance ferme, citant les articles de loi et mentionnant les recours possibles (médiateur, association, tribunal) suffit souvent à débloquer la situation.",
      },
      {
        type: "callout",
        content:
          "Avec notre outil, vous pouvez générer un mail de réclamation en 30 secondes, structuré, avec les bons articles de loi et le ton adapté à votre situation. Ne laissez pas le vendeur ignorer vos droits.",
        variant: "tip",
      },
    ],
    faq: [
      {
        question:
          "J'ai fait réparer mon appareil chez un réparateur indépendant, ai-je perdu la garantie ?",
        answer:
          "Pas nécessairement, mais le vendeur pourrait argumenter que la réparation a causé le défaut. Il est toujours préférable de passer par le vendeur en premier pour la mise en conformité.",
      },
      {
        question:
          "Le vendeur me demande de payer les frais de port pour retourner l'appareil, est-ce normal ?",
        answer:
          "Non. L'article L217-11 du Code de la consommation prévoit que la mise en conformité est effectuée sans aucun frais pour le consommateur, y compris les frais de port, de déplacement et de main d'œuvre.",
      },
      {
        question:
          "Puis-je réclamer des dommages et intérêts en plus de la réparation ?",
        answer:
          "Oui, si le refus du vendeur ou le délai de réparation vous a causé un préjudice (par exemple, devoir acheter un appareil de remplacement), vous pouvez demander des dommages et intérêts devant le tribunal.",
      },
    ],
  },
];

// ===== Helpers =====

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}
