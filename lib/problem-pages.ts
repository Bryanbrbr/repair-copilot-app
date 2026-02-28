export interface DiagnosticStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProblemFAQ {
  question: string;
  answer: string;
}

export interface LegalPoint {
  articleRef: string;
  relevance: string;
}

export interface ProblemPageData {
  problemSlug: string;
  applianceSlug: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  summaryLine: string;
  heroDescription: string;
  diagnosticSteps: DiagnosticStep[];
  legalPoints: LegalPoint[];
  faq: ProblemFAQ[];
  whenToClaimWarranty: string;
  whenNotCovered: string;
}

export const problemPages: ProblemPageData[] = [
  // =============================================
  // LAVE-LINGE — 4 problèmes
  // =============================================
  {
    problemSlug: "tambour-ne-tourne-plus",
    applianceSlug: "panne-lave-linge-garantie",
    seoTitle: "Tambour lave-linge ne tourne plus | Garantie et recours",
    seoDescription:
      "Le tambour de votre lave-linge ne tourne plus ? Diagnostiquez la panne et découvrez comment faire valoir la garantie légale de conformité.",
    seoKeywords: [
      "tambour lave-linge bloqué",
      "lave-linge ne tourne plus garantie",
      "panne tambour machine à laver",
    ],
    summaryLine:
      "Un tambour de lave-linge immobile peut résulter d'une courroie cassée, d'un moteur défaillant ou d'un problème électronique couvert, en principe, par la garantie légale.",
    heroDescription:
      "Vous lancez un cycle de lavage, l'eau se remplit normalement, mais le tambour reste totalement immobile. Le linge baigne sans être brassé, et le programme ne progresse pas ou s'interrompt avec un code erreur.\n\nCe symptôme indique généralement une défaillance mécanique ou électronique : courroie d'entraînement rompue, charbon moteur usé, condensateur de démarrage grillé, ou carte électronique en panne. Dans certains cas, un objet coincé entre la cuve et le tambour peut aussi bloquer la rotation.\n\nSelon votre situation, ce type de dysfonctionnement peut relever de la garantie légale de conformité si l'appareil a moins de deux ans, car un lave-linge est censé pouvoir effectuer des cycles complets de lavage.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Vérifiez le verrouillage du hublot",
        description:
          "Assurez-vous que la porte se ferme correctement et que le voyant de verrouillage s'allume. Un hublot mal verrouillé empêche le démarrage du tambour par sécurité.",
        icon: "🔒",
      },
      {
        step: 2,
        title: "Écoutez le moteur au lancement",
        description:
          "Lancez un cycle et tendez l'oreille : si vous entendez un bourdonnement sourd sans rotation, le moteur tente de démarrer mais quelque chose bloque. Si c'est le silence total, le problème est probablement électrique.",
        icon: "👂",
      },
      {
        step: 3,
        title: "Tournez le tambour à la main",
        description:
          "Machine éteinte et débranchée, essayez de tourner le tambour manuellement. S'il est complètement bloqué, un objet (baleine de soutien-gorge, pièce de monnaie) peut être coincé. S'il tourne librement, la courroie est probablement cassée.",
        icon: "🖐️",
      },
      {
        step: 4,
        title: "Contrôlez la courroie d'entraînement",
        description:
          "Si vous pouvez accéder à l'arrière de l'appareil, retirez le panneau et vérifiez si la courroie reliant le moteur au tambour est toujours en place, tendue et non fissurée.",
        icon: "🔧",
      },
      {
        step: 5,
        title: "Notez le code erreur éventuel",
        description:
          "Relevez tout code affiché sur l'écran (ex. : E01, F08). Ce code est précieux pour le diagnostic du technicien et pour appuyer votre réclamation.",
        icon: "📟",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-3",
        relevance:
          "En principe, le vendeur est tenu de livrer un bien conforme au contrat. Un lave-linge dont le tambour ne tourne pas ne remplit pas sa fonction essentielle.",
      },
      {
        articleRef: "L217-7",
        relevance:
          "Selon cet article, un défaut de conformité apparaissant dans les deux ans suivant la livraison est, en principe, présumé exister au moment de la délivrance, sauf preuve contraire.",
      },
    ],
    faq: [
      {
        question:
          "La courroie de mon lave-linge a cassé au bout de 18 mois, est-ce couvert par la garantie ?",
        answer:
          "En principe, oui. Une courroie qui casse après seulement 18 mois d'utilisation normale peut être considérée comme un défaut de conformité au regard de la durabilité attendue. Vous pouvez demander la réparation ou le remplacement sans frais au vendeur.",
      },
      {
        question:
          "Mon tambour tourne en lavage mais pas en essorage, est-ce la même panne ?",
        answer:
          "Pas nécessairement. L'absence d'essorage peut provenir d'un problème de balourde (linge mal réparti), d'un pressostat défaillant ou d'un amortisseur usé. Le diagnostic diffère, mais le recours en garantie reste possible selon les circonstances.",
      },
      {
        question:
          "Un objet coincé dans le tambour annule-t-il ma garantie ?",
        answer:
          "Si un objet étranger (pièce, agrafe) a causé le blocage, le vendeur pourrait arguer d'un usage non conforme. Toutefois, selon votre situation, il peut être difficile de démontrer la faute de l'utilisateur, surtout si le filtre ou la conception de l'appareil auraient dû empêcher ce type d'incident.",
      },
    ],
    whenToClaimWarranty:
      "Vous pouvez envisager une réclamation au titre de la garantie légale de conformité si le tambour s'immobilise sans cause externe identifiable dans les deux ans suivant l'achat. En principe, ce type de défaillance mécanique est couvert car il empêche l'utilisation normale de l'appareil.",
    whenNotCovered:
      "Le blocage du tambour pourrait ne pas être couvert s'il résulte d'un objet volumineux introduit par l'utilisateur, d'une surcharge répétée excédant la capacité maximale indiquée, ou d'un détartrage jamais effectué dans une zone à eau très calcaire.",
  },
  {
    problemSlug: "fuite-eau",
    applianceSlug: "panne-lave-linge-garantie",
    seoTitle: "Fuite d'eau lave-linge : recours garantie et diagnostic",
    seoDescription:
      "Votre lave-linge fuit ? Identifiez l'origine de la fuite et découvrez vos droits pour une prise en charge au titre de la garantie légale.",
    seoKeywords: [
      "fuite eau lave-linge",
      "machine à laver fuit garantie",
      "lave-linge fuite dessous",
    ],
    summaryLine:
      "Une fuite d'eau sur un lave-linge peut provenir du joint de hublot, du bac à lessive, de la pompe ou d'un tuyau interne, et peut en principe être couverte par la garantie.",
    heroDescription:
      "Vous constatez une flaque d'eau sous ou autour de votre lave-linge pendant ou après un cycle. L'eau peut apparaître à l'avant (zone du hublot), à l'arrière (raccordement des tuyaux) ou directement sous la machine.\n\nLes origines possibles sont multiples : un joint de hublot fissuré ou décollé, un bac à lessive fissuré, un raccord de tuyau desserré en interne, une durite percée, ou encore une pompe de vidange dont le joint d'étanchéité est défaillant.\n\nUne fuite persistante qui ne provient pas d'un mauvais branchement externe peut, selon votre situation, constituer un défaut de conformité si l'appareil est récent, car l'étanchéité est une caractéristique essentielle attendue d'un lave-linge.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Localisez la zone de fuite",
        description:
          "Placez du papier absorbant ou du journal autour de la machine et lancez un cycle. Observez où l'eau apparaît en premier : avant, arrière, dessous. Cela oriente le diagnostic.",
        icon: "🗞️",
      },
      {
        step: 2,
        title: "Inspectez le joint de hublot",
        description:
          "Ouvrez la porte et examinez le manchon en caoutchouc. Cherchez des fissures, des déformations ou des dépôts de calcaire qui empêchent l'étanchéité. Passez le doigt le long du joint pour détecter une déchirure.",
        icon: "🔍",
      },
      {
        step: 3,
        title: "Vérifiez le bac à produits",
        description:
          "Retirez le tiroir du bac à lessive et regardez s'il y a des traces d'eau sur les parois du logement. Un bac fissuré ou un conduit obstrué par du détergent solidifié peut provoquer un débordement.",
        icon: "🧴",
      },
      {
        step: 4,
        title: "Contrôlez les raccords arrière",
        description:
          "Vérifiez que les tuyaux d'arrivée et d'évacuation d'eau sont bien serrés et en bon état. Un raccord desserré ou un joint de tuyau poreux peut causer une fuite lente.",
        icon: "🔩",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-5",
        relevance:
          "Selon cet article, le bien doit présenter les qualités annoncées et être propre à l'usage habituellement attendu. En principe, un lave-linge qui fuit ne répond pas à cette exigence d'étanchéité.",
      },
      {
        articleRef: "L217-12",
        relevance:
          "Cet article prévoit que, en cas de défaut de conformité, vous pouvez demander la réparation ou le remplacement du bien. Selon votre situation, le vendeur ne peut pas vous orienter vers la seule réparation si celle-ci est impossible ou disproportionnée.",
      },
    ],
    faq: [
      {
        question:
          "La fuite vient du joint de hublot qui s'est décollé au bout d'un an, que faire ?",
        answer:
          "Un joint de hublot qui se décolle après un an d'utilisation normale peut, en principe, être considéré comme un défaut de conformité. Vous pouvez contacter le vendeur pour demander une réparation sans frais au titre de la garantie légale.",
      },
      {
        question:
          "La fuite est intermittente et n'apparaît qu'en essorage, est-ce quand même un défaut ?",
        answer:
          "Une fuite même intermittente constitue un dysfonctionnement. Le fait qu'elle n'apparaisse qu'en essorage (quand la pression est maximale) peut indiquer un joint interne fatigué. Selon votre situation, cela peut relever de la garantie.",
      },
      {
        question:
          "Le vendeur affirme que la fuite est due à un excès de lessive, a-t-il raison ?",
        answer:
          "Un surdosage de lessive peut effectivement provoquer un débordement par le bac à produits. Toutefois, si la fuite provient d'un autre endroit (joint, pompe, durite), cet argument n'est pas recevable. Un diagnostic précis par un professionnel permet de trancher.",
      },
    ],
    whenToClaimWarranty:
      "Si la fuite provient d'un composant interne (joint de cuve, pompe, durite) sans lien avec un mauvais branchement de votre part, vous pouvez en principe invoquer la garantie légale de conformité dans les deux ans suivant l'achat. Documentez la fuite avec des photos et conservez le ticket de caisse.",
    whenNotCovered:
      "Une fuite causée par un tuyau d'alimentation externe mal raccordé, un surdosage manifeste de lessive provoquant un débordement, ou un déplacement de l'appareil ayant endommagé les raccords pourrait ne pas être considérée comme un défaut de conformité.",
  },
  {
    problemSlug: "ne-sallume-plus",
    applianceSlug: "panne-lave-linge-garantie",
    seoTitle: "Lave-linge ne s'allume plus | Garantie légale et solutions",
    seoDescription:
      "Votre lave-linge ne s'allume plus du tout ? Suivez nos étapes de diagnostic et découvrez comment activer la garantie légale de conformité.",
    seoKeywords: [
      "lave-linge ne s'allume plus",
      "machine à laver ne démarre plus garantie",
      "panne électrique lave-linge",
    ],
    summaryLine:
      "Un lave-linge qui ne s'allume plus du tout peut souffrir d'un problème de carte électronique, d'alimentation ou de sécurité, potentiellement couvert par la garantie légale.",
    heroDescription:
      "Vous appuyez sur le bouton marche/arrêt de votre lave-linge et rien ne se passe : aucun voyant ne s'allume, aucun bip, l'écran reste noir. L'appareil est totalement inerte comme s'il n'était pas branché.\n\nCe blocage complet peut provenir d'un antiparasite (filtre secteur) grillé, d'une carte électronique principale endommagée, d'un interrupteur marche/arrêt défectueux, ou plus rarement d'un problème de câblage interne.\n\nLorsque la prise murale fonctionne correctement et que le problème persiste, il s'agit en principe d'une panne interne à l'appareil. Selon votre situation, si votre lave-linge a moins de deux ans, ce type de défaillance complète peut relever de la garantie légale de conformité.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Testez la prise électrique",
        description:
          "Branchez un autre appareil (lampe, chargeur) sur la même prise pour vérifier qu'elle fonctionne. Vérifiez aussi le disjoncteur dans votre tableau électrique : un différentiel peut avoir sauté.",
        icon: "🔌",
      },
      {
        step: 2,
        title: "Essayez un reset électrique",
        description:
          "Débranchez la machine pendant 10 minutes puis rebranchez-la. Cette manipulation réinitialise la carte électronique et peut résoudre un blocage logiciel temporaire.",
        icon: "⏱️",
      },
      {
        step: 3,
        title: "Inspectez le cordon d'alimentation",
        description:
          "Examinez le câble sur toute sa longueur à la recherche de traces de brûlure, de coupure ou d'écrasement. Vérifiez que la fiche est en bon état et n'a pas fondu au niveau des broches.",
        icon: "🔋",
      },
      {
        step: 4,
        title: "Vérifiez l'interrupteur marche/arrêt",
        description:
          "Appuyez plusieurs fois sur le bouton on/off. S'il semble mou, enfoncé en permanence ou s'il n'offre plus de résistance au clic, l'interrupteur lui-même peut être en cause.",
        icon: "🔘",
      },
      {
        step: 5,
        title: "Repérez une éventuelle odeur de brûlé",
        description:
          "Une odeur de composant électronique grillé à l'arrière de l'appareil indique un antiparasite ou un composant de la carte qui a claqué. Ne rebranchez pas l'appareil dans ce cas.",
        icon: "👃",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-4",
        relevance:
          "En principe, le vendeur répond des défauts de conformité existant lors de la délivrance. Un lave-linge qui ne s'allume plus alors qu'il fonctionnait normalement peut, selon les circonstances, relever de cet article.",
      },
      {
        articleRef: "L217-8",
        relevance:
          "Cet article prévoit que la réparation ou le remplacement a lieu sans frais pour l'acheteur. Vous pouvez demander au vendeur de prendre en charge l'intervention sans avancer de coût.",
      },
    ],
    faq: [
      {
        question:
          "L'antiparasite de mon lave-linge a grillé, est-ce un défaut de fabrication ?",
        answer:
          "L'antiparasite (filtre secteur) est un composant de protection censé durer plusieurs années. S'il grille prématurément sans surtension documentée, il peut en principe être considéré comme un défaut de conformité. Vous pouvez demander sa prise en charge au vendeur.",
      },
      {
        question:
          "La carte électronique est en panne et le devis dépasse 200 €, quelles sont mes options ?",
        answer:
          "Si l'appareil est sous garantie légale, vous n'avez en principe pas à supporter ce coût. Le vendeur doit proposer la réparation ou, si celle-ci est disproportionnée, le remplacement. Selon votre situation, vous pouvez aussi demander une réduction du prix ou la résolution de la vente.",
      },
      {
        question:
          "Mon lave-linge a 20 mois et ne s'allume plus après une coupure de courant, suis-je couvert ?",
        answer:
          "Si la coupure de courant a été brève et normale (pas une surtension liée à la foudre), un appareil bien conçu devrait y résister. Selon votre situation, la panne peut être considérée comme un défaut de conformité si l'appareil n'est pas assez robuste face à un aléa courant.",
      },
    ],
    whenToClaimWarranty:
      "Un lave-linge qui refuse totalement de s'allumer alors que la prise électrique fonctionne constitue en principe un défaut de conformité grave. Si votre appareil a moins de deux ans, vous pouvez solliciter le vendeur pour une prise en charge au titre de la garantie légale. Conservez tout document prouvant la date d'achat.",
    whenNotCovered:
      "La panne pourrait ne pas être couverte si elle résulte d'une surtension avérée (foudre, incident électrique documenté), d'un branchement sur une installation non conforme, ou d'une tentative de réparation par un tiers non agréé ayant endommagé les composants.",
  },
  {
    problemSlug: "bruits-anormaux",
    applianceSlug: "panne-lave-linge-garantie",
    seoTitle: "Lave-linge bruits anormaux : diagnostic et garantie",
    seoDescription:
      "Votre lave-linge fait des bruits anormaux (claquements, grincements, vibrations) ? Identifiez la cause et faites jouer votre garantie légale.",
    seoKeywords: [
      "lave-linge bruit anormal",
      "machine à laver claque garantie",
      "bruit lave-linge essorage",
    ],
    summaryLine:
      "Des bruits anormaux sur un lave-linge (claquements, grincements, cognements) signalent souvent un défaut mécanique pouvant en principe relever de la garantie légale.",
    heroDescription:
      "Votre lave-linge produit des sons inhabituels : claquements métalliques réguliers pendant le lavage, grincements aigus à l'essorage, cognements sourds comme si le tambour heurtait la cuve, ou vibrations intenses qui font bouger l'appareil.\n\nCes bruits peuvent indiquer des roulements de tambour usés, des amortisseurs défaillants, un contrepoids desserré, des ressorts de suspension cassés, ou un corps étranger piégé entre le tambour et la cuve.\n\nEn principe, un lave-linge récent ne devrait pas produire de bruits excessifs lors d'un usage normal. Selon votre situation, ces symptômes peuvent constituer un défaut de conformité si l'appareil ne répond pas aux caractéristiques de fonctionnement qu'un acheteur est en droit d'attendre.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Identifiez le moment du bruit",
        description:
          "Notez précisément quand le bruit survient : au remplissage, pendant le brassage, à l'essorage, ou à la vidange. Un bruit uniquement à l'essorage oriente vers les roulements ; pendant le brassage, vers un objet coincé.",
        icon: "📝",
      },
      {
        step: 2,
        title: "Vérifiez la stabilité de l'appareil",
        description:
          "Poussez doucement la machine : si elle bascule, les pieds réglables ne sont pas correctement ajustés. Un lave-linge instable vibre excessivement et peut sembler en panne alors qu'il suffit de remettre les pieds à niveau.",
        icon: "📐",
      },
      {
        step: 3,
        title: "Contrôlez les boulons de transport",
        description:
          "Si l'appareil est récent, vérifiez que les boulons de transport (à l'arrière) ont bien été retirés à l'installation. Des boulons oubliés provoquent des vibrations violentes et des claquements.",
        icon: "🔩",
      },
      {
        step: 4,
        title: "Testez un cycle à vide",
        description:
          "Lancez un cycle court sans linge. Si le bruit persiste, le problème est bien mécanique et interne. S'il disparaît, un déséquilibre lié au chargement peut être en cause.",
        icon: "🔄",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-3",
        relevance:
          "En principe, le bien livré doit correspondre à la description et posséder les qualités présentées. Un lave-linge anormalement bruyant peut ne pas correspondre aux caractéristiques annoncées en matière de niveau sonore.",
      },
      {
        articleRef: "L217-11",
        relevance:
          "Si la réparation ou le remplacement est impossible ou entraîne des coûts disproportionnés, vous pouvez, selon cet article, demander une réduction du prix ou la résolution du contrat de vente.",
      },
    ],
    faq: [
      {
        question:
          "Les roulements de mon lave-linge sont usés après 14 mois, est-ce normal ?",
        answer:
          "Non, des roulements de tambour sont conçus pour durer bien plus longtemps en usage domestique normal. Une usure après 14 mois peut en principe être considérée comme un défaut de conformité, car la durabilité attendue n'est pas au rendez-vous.",
      },
      {
        question:
          "Le bruit ne survient qu'à grande vitesse d'essorage, puis-je quand même réclamer ?",
        answer:
          "Oui. L'essorage à grande vitesse fait partie du fonctionnement normal prévu par le fabricant. Si un bruit anormal apparaît à une vitesse que l'appareil est censé supporter, il peut s'agir d'un défaut. Vous pouvez demander un diagnostic au vendeur.",
      },
      {
        question:
          "Le vendeur dit que le bruit est normal pour ce modèle, comment contester ?",
        answer:
          "Vérifiez la fiche technique du produit et le niveau sonore annoncé (en décibels). Si le bruit constaté dépasse nettement la valeur indiquée, vous disposez d'un argument concret. Un enregistrement sonore et un constat par un technicien indépendant renforcent votre dossier.",
      },
    ],
    whenToClaimWarranty:
      "Des bruits anormaux persistants lors d'un usage conforme aux instructions du fabricant peuvent en principe constituer un défaut de conformité. Vous pouvez demander au vendeur un diagnostic et une prise en charge si l'appareil a moins de deux ans. Documentez les bruits (vidéo avec son) pour appuyer votre réclamation.",
    whenNotCovered:
      "Les bruits résultant de boulons de transport non retirés, d'une installation sur un sol instable, ou d'un chargement systématiquement déséquilibré (un seul drap lourd par exemple) pourraient ne pas être considérés comme un défaut imputable au vendeur.",
  },

  // =============================================
  // LAVE-VAISSELLE — 4 problèmes
  // =============================================
  {
    problemSlug: "ne-lave-plus-correctement",
    applianceSlug: "panne-lave-vaisselle-garantie",
    seoTitle: "Lave-vaisselle ne lave plus correctement | Garantie",
    seoDescription:
      "Votre lave-vaisselle laisse des résidus et ne nettoie plus ? Diagnostic complet et démarches pour faire jouer la garantie légale de conformité.",
    seoKeywords: [
      "lave-vaisselle ne lave plus",
      "vaisselle sale après lavage garantie",
      "lave-vaisselle résidus",
    ],
    summaryLine:
      "Un lave-vaisselle qui ne nettoie plus correctement malgré un entretien normal peut présenter un défaut de conformité couvert, en principe, par la garantie légale.",
    heroDescription:
      "Vous ouvrez votre lave-vaisselle en fin de cycle et la vaisselle est toujours sale : résidus alimentaires collés, traces blanches sur les verres, film gras sur les assiettes, ou pastille de lavage non dissoute au fond de la cuve.\n\nCe problème peut être lié à une pompe de cyclage défaillante qui ne projette plus l'eau avec assez de pression, à des bras de lavage bouchés ou cassés, à une résistance de chauffe qui ne porte plus l'eau à la bonne température, ou à une électrovanne d'arrivée d'eau qui limite le débit.\n\nSelon votre situation, si les résultats de lavage se dégradent nettement malgré un usage et un entretien conformes aux recommandations du fabricant, cela peut constituer un défaut de conformité au sens de la loi.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Vérifiez les bras de lavage",
        description:
          "Retirez les bras de lavage (supérieur et inférieur) et nettoyez les buses à l'aide d'un cure-dent. Des orifices bouchés par du calcaire ou des débris empêchent la bonne répartition de l'eau.",
        icon: "🚿",
      },
      {
        step: 2,
        title: "Contrôlez la température de l'eau",
        description:
          "En milieu de cycle, touchez la porte du lave-vaisselle : elle doit être chaude. Si elle reste froide, la résistance de chauffe peut être défaillante, ce qui empêche un nettoyage efficace.",
        icon: "🌡️",
      },
      {
        step: 3,
        title: "Inspectez le filtre et la cuve",
        description:
          "Retirez et nettoyez le filtre au fond de la cuve. Des résidus alimentaires accumulés peuvent obstruer le circuit d'eau et réduire la pression de lavage.",
        icon: "🧹",
      },
      {
        step: 4,
        title: "Testez avec un cycle intensif à vide",
        description:
          "Lancez un cycle à haute température sans vaisselle avec un nettoyant machine. Si le résultat montre des traces ou dépôts dans la cuve, le problème est bien interne à l'appareil.",
        icon: "♨️",
      },
      {
        step: 5,
        title: "Vérifiez le compartiment à produit",
        description:
          "Assurez-vous que le volet du bac à détergent s'ouvre pendant le cycle. Un mécanisme grippé empêche la libération du produit au bon moment du programme.",
        icon: "🧫",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-5",
        relevance:
          "En principe, un lave-vaisselle doit être propre à l'usage habituellement attendu d'un bien semblable, c'est-à-dire laver la vaisselle efficacement. Un résultat de lavage insuffisant peut constituer un défaut de conformité au sens de cet article.",
      },
      {
        articleRef: "L217-10",
        relevance:
          "Si le défaut de conformité est établi, cet article précise que vous pouvez, en principe, mettre en œuvre la garantie légale dans un délai de deux ans à compter de la délivrance du bien.",
      },
    ],
    faq: [
      {
        question:
          "La pompe de cyclage de mon lave-vaisselle semble faible, peut-on invoquer la garantie ?",
        answer:
          "Oui, si la pompe de cyclage ne fournit plus une pression suffisante malgré un entretien conforme, il peut s'agir d'un défaut de conformité. En principe, vous pouvez demander au vendeur de faire intervenir un technicien sans frais dans le cadre de la garantie légale.",
      },
      {
        question:
          "La vaisselle ressort avec des traces blanches de calcaire, est-ce la machine ou l'eau ?",
        answer:
          "Les traces blanches peuvent venir d'un adoucisseur interne défaillant ou d'un réglage incorrect de la dureté de l'eau. Si vous avez correctement paramétré la dureté et ajouté du sel régénérant, un adoucisseur défectueux peut, selon votre situation, relever de la garantie.",
      },
      {
        question:
          "Le volet du bac à détergent ne s'ouvre plus en cours de cycle, que faire ?",
        answer:
          "Un mécanisme d'ouverture grippé ou cassé est une panne mécanique qui empêche le lavage normal. Vous pouvez contacter le vendeur pour signaler ce défaut et demander une intervention. Selon votre situation, cela peut être pris en charge au titre de la garantie légale.",
      },
    ],
    whenToClaimWarranty:
      "Si votre lave-vaisselle ne nettoie plus correctement malgré un entretien régulier (nettoyage des filtres, sel régénérant, bras de lavage dégagés), vous pouvez en principe faire valoir la garantie légale de conformité auprès du vendeur. La fonction principale de l'appareil n'est plus assurée.",
    whenNotCovered:
      "Un mauvais résultat de lavage lié à l'absence prolongée de sel régénérant, au non-nettoyage du filtre sur plusieurs mois, ou à l'utilisation de produits non adaptés pourrait être considéré comme relevant d'un défaut d'entretien et non d'un vice du produit.",
  },
  {
    problemSlug: "ne-vidange-plus",
    applianceSlug: "panne-lave-vaisselle-garantie",
    seoTitle: "Lave-vaisselle ne vidange plus | Recours en garantie",
    seoDescription:
      "Votre lave-vaisselle ne vidange plus et l'eau stagne au fond ? Découvrez les causes possibles et comment faire jouer la garantie légale.",
    seoKeywords: [
      "lave-vaisselle ne vidange plus",
      "eau stagnante lave-vaisselle garantie",
      "pompe vidange lave-vaisselle panne",
    ],
    summaryLine:
      "Un lave-vaisselle qui ne vidange plus, laissant l'eau stagner dans la cuve, souffre probablement d'un problème de pompe ou d'évacuation couvert en principe par la garantie.",
    heroDescription:
      "En ouvrant votre lave-vaisselle, vous découvrez que l'eau sale stagne au fond de la cuve. Le cycle s'est interrompu ou terminé sans évacuer l'eau, et une odeur désagréable peut se dégager de l'appareil.\n\nCe problème résulte généralement d'une pompe de vidange bloquée ou défaillante, d'un tuyau d'évacuation coudé ou obstrué, d'un clapet anti-retour défectueux, ou d'une panne de la carte électronique qui ne commande plus le cycle de vidange.\n\nL'absence de vidange est un dysfonctionnement qui empêche l'utilisation normale de l'appareil. Selon votre situation et si votre lave-vaisselle a été acheté il y a moins de deux ans, vous pouvez en principe envisager un recours au titre de la garantie légale de conformité.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Contrôlez le filtre de vidange",
        description:
          "Retirez le filtre au fond de la cuve et nettoyez-le sous l'eau courante. Des morceaux de verre, des noyaux ou des cure-dents peuvent bloquer l'évacuation de l'eau.",
        icon: "🪤",
      },
      {
        step: 2,
        title: "Examinez le tuyau d'évacuation",
        description:
          "Suivez le tuyau d'évacuation depuis l'arrière de l'appareil jusqu'au siphon ou à l'évacuation murale. Assurez-vous qu'il n'est pas plié, écrasé par un meuble, ou trop enfoncé dans le tuyau mural (max 15 cm).",
        icon: "〰️",
      },
      {
        step: 3,
        title: "Écoutez la pompe de vidange",
        description:
          "Au moment où la vidange devrait démarrer, approchez votre oreille de la base de l'appareil. Un silence total indique une pompe qui ne démarre pas. Un bourdonnement continu suggère une pompe bloquée.",
        icon: "👂",
      },
      {
        step: 4,
        title: "Testez une vidange forcée",
        description:
          "Consultez le manuel pour trouver la combinaison de touches permettant de lancer une vidange forcée. Si l'eau s'évacue, le problème est dans la séquence du programme ; sinon, la pompe est probablement en cause.",
        icon: "⚡",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-3",
        relevance:
          "En principe, le vendeur est tenu de livrer un bien conforme. Un lave-vaisselle qui ne vidange plus ne peut pas accomplir un cycle complet et ne remplit donc pas sa fonction essentielle.",
      },
      {
        articleRef: "L217-8",
        relevance:
          "Selon cet article, en cas de défaut de conformité, la mise en conformité se fait sans frais pour le consommateur. Vous pouvez demander que la réparation de la pompe de vidange soit prise en charge intégralement.",
      },
    ],
    faq: [
      {
        question:
          "La pompe de vidange de mon lave-vaisselle a lâché après 10 mois, est-ce couvert ?",
        answer:
          "En principe, une pompe de vidange devrait durer bien plus de 10 mois en utilisation domestique normale. Ce type de défaillance précoce peut être considéré comme un défaut de conformité. Vous pouvez demander la réparation ou le remplacement au vendeur.",
      },
      {
        question:
          "L'eau stagne et dégage une mauvaise odeur, ai-je un recours rapide ?",
        answer:
          "En attendant la prise en charge, videz manuellement l'eau avec une éponge et un récipient. Pour le recours, contactez le vendeur par écrit (courrier ou email) en décrivant le problème. En principe, il doit proposer une solution dans un délai raisonnable.",
      },
      {
        question:
          "Le technicien dit que le clapet anti-retour est défectueux, qui paie ?",
        answer:
          "Si votre appareil est sous garantie légale et que le clapet anti-retour est défaillant sans cause externe, le vendeur devrait en principe prendre en charge la réparation. Selon votre situation, vous n'avez pas à avancer les frais de la pièce ni de la main-d'œuvre.",
      },
    ],
    whenToClaimWarranty:
      "Un lave-vaisselle qui ne vidange plus est inutilisable pour son usage principal. En principe, si cette panne survient dans les deux ans suivant l'achat et sans cause extérieure identifiable, vous pouvez demander au vendeur d'intervenir au titre de la garantie légale de conformité.",
    whenNotCovered:
      "Le problème pourrait ne pas être couvert si le tuyau d'évacuation a été mal installé lors du raccordement (coude trop serré, enfoncement excessif), si des objets volumineux ont obstrué la pompe faute de nettoyage du filtre, ou si un produit inadapté a endommagé les joints.",
  },
  {
    problemSlug: "fuite-eau",
    applianceSlug: "panne-lave-vaisselle-garantie",
    seoTitle: "Fuite d'eau lave-vaisselle : garantie et démarches",
    seoDescription:
      "Fuite d'eau sous votre lave-vaisselle ? Identifiez l'origine du problème et vos droits pour une réparation sous garantie légale de conformité.",
    seoKeywords: [
      "fuite lave-vaisselle",
      "lave-vaisselle fuit dessous garantie",
      "fuite eau lave-vaisselle réparation",
    ],
    summaryLine:
      "Une fuite d'eau sous un lave-vaisselle peut provenir d'un joint de porte, de la pompe ou d'un raccord interne, et peut en principe être prise en charge sous garantie.",
    heroDescription:
      "Vous remarquez de l'eau qui s'accumule sous ou devant votre lave-vaisselle. La fuite peut être visible dès le remplissage, apparaître pendant le lavage lorsque la pression augmente, ou ne se manifester qu'en fin de cycle au moment de la vidange.\n\nLes causes typiques incluent un joint de porte durci ou déformé qui ne fait plus étanchéité, un bac de récupération (dispositif anti-fuite) plein à cause d'une micro-fuite interne, des raccords de la pompe de cyclage détériorés, ou un tuyau d'alimentation interne fendu.\n\nUne fuite d'eau sur un lave-vaisselle récent, non imputable à un raccordement défectueux de votre part, peut selon votre situation constituer un défaut de conformité relevant de la garantie légale.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Identifiez le moment de la fuite",
        description:
          "Observez si l'eau apparaît au remplissage, pendant le lavage ou à la vidange. Cela permet de distinguer un problème d'arrivée d'eau, d'étanchéité de la cuve, ou d'évacuation.",
        icon: "⏰",
      },
      {
        step: 2,
        title: "Inspectez le joint de porte",
        description:
          "Passez votre main le long du joint périphérique de la porte. Recherchez des zones durcies, craquelées ou décollées. Un joint défectueux laisse l'eau s'écouler par l'avant pendant le lavage.",
        icon: "🚪",
      },
      {
        step: 3,
        title: "Vérifiez le bac anti-fuite",
        description:
          "Inclinez très légèrement l'appareil vers l'avant après l'avoir débranché. Si de l'eau s'écoule par le dessous en quantité, le bac anti-fuite interne est plein, signe d'une micro-fuite à l'intérieur de la machine.",
        icon: "🫗",
      },
      {
        step: 4,
        title: "Contrôlez le raccordement d'arrivée d'eau",
        description:
          "Séchez les raccords au robinet d'arrivée et posez du papier absorbant dessous. Relancez l'appareil et vérifiez après quelques minutes si le papier est mouillé pour localiser une fuite au niveau du raccord.",
        icon: "🔧",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-4",
        relevance:
          "En principe, le vendeur est tenu de garantir la conformité du bien. Un lave-vaisselle qui présente une fuite d'eau interne n'est pas conforme à l'usage attendu et peut relever de cet article.",
      },
      {
        articleRef: "1641",
        relevance:
          "Selon l'article 1641 du Code civil, le vendeur est tenu de la garantie à raison des défauts cachés de la chose vendue. Une fuite provenant d'un composant interne invisible à l'achat peut, selon les circonstances, constituer un vice caché.",
      },
    ],
    faq: [
      {
        question:
          "Le système anti-fuite de mon lave-vaisselle se déclenche sans cesse, que faire ?",
        answer:
          "Un déclenchement répété du système anti-fuite (Aquastop) signale une micro-fuite interne persistante. Ce n'est pas un simple caprice de capteur. En principe, vous pouvez demander au vendeur de faire diagnostiquer et réparer cette fuite sous garantie légale.",
      },
      {
        question:
          "La fuite vient du joint de porte après seulement 8 mois d'utilisation, est-ce un défaut ?",
        answer:
          "Un joint de porte qui perd son étanchéité après 8 mois d'usage normal n'est pas un phénomène attendu. Selon votre situation, cela peut constituer un défaut de conformité car ce composant est conçu pour durer bien plus longtemps.",
      },
      {
        question:
          "Le vendeur m'envoie vers le SAV du fabricant, est-ce normal ?",
        answer:
          "La garantie légale de conformité s'exerce auprès du vendeur, pas du fabricant. Même si le vendeur vous redirige vers le SAV du fabricant pour des raisons pratiques, il reste en principe votre interlocuteur légal et responsable de la mise en conformité.",
      },
    ],
    whenToClaimWarranty:
      "Une fuite d'eau d'origine interne (joint, pompe, raccord interne) sur un lave-vaisselle de moins de deux ans constitue en principe un défaut de conformité. Vous pouvez contacter le vendeur en fournissant des photos de la fuite et la preuve d'achat pour demander la prise en charge.",
    whenNotCovered:
      "La fuite pourrait ne pas être couverte si elle résulte d'un raccordement d'arrivée d'eau mal effectué par l'utilisateur, d'un joint de porte endommagé lors d'un chargement brusque, ou d'un tuyau d'évacuation percé lors du déplacement de l'appareil.",
  },
  {
    problemSlug: "code-erreur",
    applianceSlug: "panne-lave-vaisselle-garantie",
    seoTitle: "Code erreur lave-vaisselle : diagnostic et garantie",
    seoDescription:
      "Votre lave-vaisselle affiche un code erreur et s'arrête ? Comprenez ce que signale le code et comment activer la garantie légale de conformité.",
    seoKeywords: [
      "code erreur lave-vaisselle",
      "lave-vaisselle affiche erreur garantie",
      "panne code erreur lave-vaisselle",
    ],
    summaryLine:
      "Un code erreur persistant sur un lave-vaisselle signale un dysfonctionnement interne diagnostiqué par l'appareil lui-même, pouvant en principe relever de la garantie.",
    heroDescription:
      "Votre lave-vaisselle interrompt son cycle et affiche un code erreur sur l'écran (par exemple E15, E24, F1, i30) ou fait clignoter une séquence de voyants. L'appareil refuse de poursuivre le programme et le code persiste même après un redémarrage.\n\nLes codes erreur sont des indicateurs intégrés par le fabricant pour signaler un composant défaillant : sonde de température hors plage, turbidité de l'eau anormale, débitmètre en erreur, niveau d'eau incorrect, ou défaut de communication entre carte de commande et carte de puissance.\n\nLorsqu'un code erreur apparaît de façon récurrente sans qu'une manipulation simple (nettoyage du filtre, vérification du robinet) ne le résolve, il s'agit en principe d'une défaillance technique interne. Selon votre situation, ce type de panne peut être couvert par la garantie légale de conformité.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Notez le code exact",
        description:
          "Relevez précisément le code affiché (lettres et chiffres) ou le nombre de clignotements des voyants. Prenez une photo de l'écran pour garder une trace fiable à communiquer au service après-vente.",
        icon: "📸",
      },
      {
        step: 2,
        title: "Consultez le manuel d'utilisation",
        description:
          "Cherchez la signification du code dans le manuel de votre appareil ou sur le site du fabricant. Certains codes ont une solution simple (robinet fermé, filtre bouché), d'autres nécessitent une intervention technique.",
        icon: "📖",
      },
      {
        step: 3,
        title: "Effectuez un reset de l'appareil",
        description:
          "Débranchez le lave-vaisselle pendant 5 minutes puis rebranchez-le. Si le code disparaît et ne revient pas, il s'agissait d'un bug ponctuel. Si le code réapparaît, le problème est persistant.",
        icon: "🔄",
      },
      {
        step: 4,
        title: "Vérifiez les éléments accessibles",
        description:
          "Selon le code, contrôlez le filtre, le robinet d'eau, le tuyau d'évacuation et le bac à sel. Éliminez les causes simples avant de contacter le vendeur pour une intervention.",
        icon: "✅",
      },
      {
        step: 5,
        title: "Documentez la récurrence",
        description:
          "Si le code revient à chaque cycle, notez les dates et les programmes utilisés. Un historique de pannes récurrentes renforce considérablement votre dossier de réclamation en garantie.",
        icon: "📋",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-7",
        relevance:
          "En principe, les défauts de conformité apparaissant dans les deux ans suivant la livraison sont présumés exister au moment de l'achat. Un code erreur récurrent entre dans ce cadre, sauf si le vendeur prouve le contraire.",
      },
      {
        articleRef: "L217-12",
        relevance:
          "Selon cet article, vous pouvez demander la réparation ou le remplacement de l'appareil. Le vendeur ne peut en principe pas vous imposer un choix si l'une des deux options est disponible dans un délai raisonnable.",
      },
    ],
    faq: [
      {
        question:
          "Le code erreur revient après chaque intervention du SAV, quels sont mes recours ?",
        answer:
          "Si le vendeur a tenté de réparer l'appareil sans succès, vous pouvez en principe demander le remplacement ou, à défaut, une réduction du prix voire la résolution de la vente. La loi prévoit cette possibilité lorsque la réparation échoue.",
      },
      {
        question:
          "Le code erreur n'est pas dans le manuel, le vendeur peut-il refuser la garantie ?",
        answer:
          "Non. L'absence du code dans le manuel utilisateur n'exonère pas le vendeur de ses obligations. Le code signale un dysfonctionnement détecté par l'appareil lui-même, ce qui constitue en principe la preuve d'un problème technique interne.",
      },
      {
        question:
          "Un code erreur lié à la sonde de température est-il un défaut de conformité ?",
        answer:
          "Selon votre situation, une sonde de température défaillante qui empêche le cycle de fonctionner normalement peut constituer un défaut de conformité. C'est un composant interne dont la défaillance n'est pas imputable à l'utilisateur.",
      },
    ],
    whenToClaimWarranty:
      "Un code erreur persistant qui empêche le fonctionnement normal de l'appareil, et qui ne se résout pas par les manipulations simples décrites dans le manuel, peut en principe constituer un défaut de conformité. Contactez le vendeur en lui communiquant le code exact et un historique des occurrences.",
    whenNotCovered:
      "Un code erreur ponctuel lié à un robinet d'eau fermé, un filtre encrassé par défaut d'entretien, ou une coupure de courant temporaire ne constitue généralement pas un défaut de conformité. De même, un code déclenché par une surtension externe pourrait ne pas être couvert.",
  },

  // =============================================
  // RÉFRIGÉRATEUR — 4 problèmes
  // =============================================
  {
    problemSlug: "ne-refroidit-plus",
    applianceSlug: "panne-refrigerateur-garantie",
    seoTitle: "Réfrigérateur ne refroidit plus | Garantie et recours",
    seoDescription:
      "Votre réfrigérateur ne refroidit plus et vos aliments se gâtent ? Diagnostic des causes et démarches pour faire valoir la garantie légale.",
    seoKeywords: [
      "réfrigérateur ne refroidit plus",
      "frigo ne fait plus de froid garantie",
      "panne réfrigérateur garantie légale",
    ],
    summaryLine:
      "Un réfrigérateur qui ne produit plus de froid peut souffrir d'une panne de compresseur, de thermostat ou de circuit frigorifique, en principe couvert par la garantie.",
    heroDescription:
      "La température intérieure de votre réfrigérateur monte progressivement : les aliments ne sont plus frais, le beurre ramollit, les yaourts ne sont plus fermes. Le compartiment qui devrait être entre 2 °C et 5 °C est nettement au-dessus, parfois à température ambiante.\n\nCe dysfonctionnement critique peut provenir d'un compresseur défaillant (vous n'entendez plus le ronronnement habituel), d'une fuite de gaz réfrigérant dans le circuit, d'un thermostat bloqué en position « arrêt », d'un ventilateur d'évaporateur en panne (sur les modèles No Frost), ou d'une carte électronique défectueuse.\n\nEn principe, un réfrigérateur est censé maintenir une température conforme aux normes alimentaires pendant toute sa durée de vie raisonnable. Selon votre situation, l'absence totale de froid sur un appareil de moins de deux ans constitue très probablement un défaut de conformité.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Vérifiez le réglage du thermostat",
        description:
          "Assurez-vous que le thermostat ou l'affichage digital n'a pas été accidentellement réglé sur la température minimale (ou éteint). Sur certains modèles, un appui prolongé peut désactiver la réfrigération.",
        icon: "🌡️",
      },
      {
        step: 2,
        title: "Écoutez le compresseur",
        description:
          "Collez votre oreille contre l'arrière ou le côté de l'appareil. Vous devriez entendre un bourdonnement cyclique. Un silence total peut indiquer un compresseur en panne. Un cliquetis répété sans démarrage signale un relais défectueux.",
        icon: "👂",
      },
      {
        step: 3,
        title: "Examinez le condenseur arrière",
        description:
          "Si l'arrière du réfrigérateur n'est pas chaud du tout, le circuit frigorifique ne fonctionne pas. S'il est brûlant, le compresseur tourne mais le froid ne circule pas (possible bouchon ou fuite de gaz).",
        icon: "🔥",
      },
      {
        step: 4,
        title: "Vérifiez la ventilation (modèle No Frost)",
        description:
          "Sur les modèles ventilés, ouvrez la porte et cherchez le ventilateur interne. S'il ne tourne pas alors que le compresseur fonctionne, le froid ne se répartit plus dans l'habitacle.",
        icon: "💨",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-5",
        relevance:
          "En principe, le bien doit être propre à l'usage habituellement attendu. Un réfrigérateur qui ne refroidit plus ne remplit pas du tout sa fonction essentielle de conservation des aliments.",
      },
      {
        articleRef: "L217-10",
        relevance:
          "Selon cet article, la garantie légale de conformité peut être mise en œuvre dans les deux ans suivant la délivrance du bien. Un défaut de réfrigération apparu dans ce délai est en principe présumé d'origine.",
      },
    ],
    faq: [
      {
        question:
          "Le compresseur de mon réfrigérateur a lâché après 15 mois, est-ce normal ?",
        answer:
          "Non. Un compresseur de réfrigérateur est conçu pour fonctionner pendant de nombreuses années. Une défaillance après 15 mois traduit en principe un défaut de conformité, car la durabilité attendue n'est manifestement pas atteinte. Vous pouvez demander la réparation au vendeur.",
      },
      {
        question:
          "Mes aliments ont été perdus à cause de la panne, puis-je demander un dédommagement ?",
        answer:
          "Selon votre situation, vous pouvez demander une indemnisation pour les denrées perdues si vous pouvez en estimer la valeur. Conservez les tickets de caisse de vos courses récentes. Ce dédommagement s'ajoute à la mise en conformité de l'appareil.",
      },
      {
        question:
          "Le vendeur propose une réparation dans 3 semaines, c'est trop long sans frigo. Que faire ?",
        answer:
          "Un délai de 3 semaines sans réfrigérateur est difficilement acceptable. Vous pouvez demander un délai plus court en rappelant le caractère essentiel de l'appareil. En principe, si la réparation occasionne un inconvénient majeur, vous pouvez demander le remplacement à la place.",
      },
    ],
    whenToClaimWarranty:
      "L'absence totale de production de froid est l'un des défauts les plus graves pour un réfrigérateur. En principe, vous pouvez immédiatement contacter le vendeur pour une prise en charge au titre de la garantie légale. Agissez rapidement car la conservation de vos denrées alimentaires est en jeu.",
    whenNotCovered:
      "La panne pourrait ne pas être couverte si l'appareil a été placé à côté d'une source de chaleur intense (four, radiateur) contrairement aux recommandations, si les grilles arrière sont obstruées par de la poussière empêchant toute ventilation, ou si le thermostat a été volontairement poussé au maximum de façon continue.",
  },
  {
    problemSlug: "trop-de-givre",
    applianceSlug: "panne-refrigerateur-garantie",
    seoTitle: "Réfrigérateur givre excessif : diagnostic et garantie",
    seoDescription:
      "Votre réfrigérateur ou congélateur accumule trop de givre ? Découvrez les causes de la formation excessive et vos recours en garantie.",
    seoKeywords: [
      "réfrigérateur trop de givre",
      "givre excessif frigo garantie",
      "congélateur glace excessive",
    ],
    summaryLine:
      "Une accumulation anormale de givre dans un réfrigérateur peut indiquer un problème de joint, de dégivrage automatique ou de thermostat, potentiellement couvert par la garantie.",
    heroDescription:
      "La paroi arrière de votre réfrigérateur se couvre d'une couche de glace épaisse, le congélateur s'emballe avec un givre envahissant qui réduit l'espace de rangement et recouvre les aliments. Le givre peut même empêcher la fermeture correcte des tiroirs ou bloquer le ventilateur interne.\n\nCe phénomène résulte souvent d'un système de dégivrage automatique défaillant (résistance de dégivrage grillée, minuterie de dégivrage en panne, sonde de dégivrage défectueuse), d'un joint de porte qui laisse entrer l'air chaud et humide, ou d'un thermostat déréglé qui maintient une température trop basse.\n\nSur un appareil moderne équipé d'un système No Frost ou dégivrage automatique, une accumulation excessive de givre est anormale. En principe, selon votre situation, ce dysfonctionnement peut constituer un défaut de conformité si l'appareil ne fonctionne pas comme annoncé.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Testez l'étanchéité du joint de porte",
        description:
          "Placez une feuille de papier dans la porte et fermez-la. Essayez de retirer la feuille : si elle glisse facilement, le joint ne fait plus étanchéité et laisse entrer l'air humide qui se transforme en givre.",
        icon: "📄",
      },
      {
        step: 2,
        title: "Vérifiez le système de dégivrage",
        description:
          "Si votre appareil est No Frost et que du givre s'accumule derrière le panneau arrière intérieur, la résistance de dégivrage ne fonctionne probablement plus. Vous pouvez le confirmer en écoutant : le cycle de dégivrage produit normalement un léger cliquetis périodique.",
        icon: "❄️",
      },
      {
        step: 3,
        title: "Contrôlez la température réglée",
        description:
          "Utilisez un thermomètre pour mesurer la température réelle dans le réfrigérateur et le congélateur. Comparez avec le réglage affiché. Un écart important peut indiquer un thermostat ou une sonde défectueux.",
        icon: "🌡️",
      },
      {
        step: 4,
        title: "Observez la gouttière d'évacuation",
        description:
          "Au fond du réfrigérateur, repérez le petit orifice d'évacuation de l'eau de dégivrage. S'il est bouché par de la glace ou des résidus, l'eau ne s'écoule pas et gèle à nouveau sur la paroi.",
        icon: "💧",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-4",
        relevance:
          "En principe, le vendeur répond des défauts de conformité existant lors de la délivrance. Un système de dégivrage automatique défaillant sur un appareil vendu comme No Frost peut constituer un défaut au sens de cet article.",
      },
      {
        articleRef: "L217-11",
        relevance:
          "Si la réparation du système de dégivrage s'avère impossible ou disproportionnée, vous pouvez, selon cet article, demander une réduction du prix proportionnelle ou la résolution de la vente.",
      },
    ],
    faq: [
      {
        question:
          "Mon réfrigérateur No Frost accumule du givre, c'est contradictoire avec ce qui est annoncé. Ai-je un recours ?",
        answer:
          "Oui. Un réfrigérateur vendu avec la technologie No Frost ne devrait en principe pas accumuler de givre. Si c'est le cas, l'appareil ne correspond pas à la description et aux qualités annoncées. Vous pouvez demander la mise en conformité au vendeur.",
      },
      {
        question:
          "Le givre a déformé un tiroir du congélateur, puis-je demander le remplacement du tiroir ?",
        answer:
          "Selon votre situation, la déformation du tiroir est une conséquence directe du dysfonctionnement. En principe, la mise en conformité doit couvrir à la fois la cause (système de dégivrage) et les conséquences (tiroir déformé) du défaut.",
      },
      {
        question:
          "Le joint de porte a durci et n'adhère plus, est-ce de l'usure normale ?",
        answer:
          "Sur un appareil récent (moins de deux ans), un joint de porte qui durcit au point de ne plus faire étanchéité n'est pas considéré comme de l'usure normale. Selon votre situation, cela peut relever de la garantie légale de conformité.",
      },
    ],
    whenToClaimWarranty:
      "Une accumulation anormale de givre, surtout sur un modèle No Frost ou à dégivrage automatique, peut en principe justifier une réclamation au titre de la garantie légale de conformité. Prenez des photos de la couche de givre et notez les dates pour constituer votre dossier auprès du vendeur.",
    whenNotCovered:
      "Un excès de givre lié à une porte fréquemment laissée ouverte, à l'introduction régulière d'aliments très chauds dans le réfrigérateur, ou à un orifice d'évacuation bouché par défaut de nettoyage pourrait ne pas être couvert par la garantie.",
  },
  {
    problemSlug: "fait-du-bruit",
    applianceSlug: "panne-refrigerateur-garantie",
    seoTitle: "Réfrigérateur bruyant : causes et recours en garantie",
    seoDescription:
      "Votre réfrigérateur fait un bruit anormal (claquement, bourdonnement, sifflement) ? Diagnostic des causes et démarches en garantie légale.",
    seoKeywords: [
      "réfrigérateur bruyant",
      "bruit anormal frigo garantie",
      "frigo bourdonne fort",
    ],
    summaryLine:
      "Un réfrigérateur anormalement bruyant (claquements, bourdonnements forts, sifflements) peut présenter un défaut de compresseur ou de ventilateur couvert en principe par la garantie.",
    heroDescription:
      "Votre réfrigérateur émet des bruits qui ne sont pas normaux : bourdonnement puissant et continu, claquements réguliers au démarrage ou à l'arrêt du compresseur, sifflement aigu provenant de l'arrière, ou vibrations basses qui résonnent dans toute la pièce.\n\nCes nuisances sonores peuvent être causées par un compresseur usé ou mal amorti, un ventilateur de condenseur dont les paliers sont fatigués, des tuyaux de réfrigérant qui vibrent contre la carrosserie, ou un relais de démarrage du compresseur défectueux qui provoque des tentatives de démarrage répétées.\n\nUn réfrigérateur est conçu pour fonctionner en continu dans un espace de vie. En principe, le niveau sonore ne doit pas excéder significativement la valeur indiquée sur la fiche technique. Selon votre situation, un bruit excessif et permanent peut constituer un défaut de conformité.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Identifiez la source sonore",
        description:
          "Approchez-vous de l'appareil et déterminez si le bruit vient de l'arrière (compresseur, condenseur), de l'intérieur (ventilateur évaporateur), du dessous (bac de récupération, compresseur sur certains modèles) ou du dessus.",
        icon: "🎯",
      },
      {
        step: 2,
        title: "Vérifiez la stabilité de l'appareil",
        description:
          "Assurez-vous que le réfrigérateur est parfaitement de niveau en ajustant les pieds. Un appareil légèrement incliné peut faire vibrer le compresseur et amplifier les bruits mécaniques.",
        icon: "📐",
      },
      {
        step: 3,
        title: "Écartez l'appareil du mur",
        description:
          "Vérifiez que l'arrière du réfrigérateur ne touche pas le mur ou un meuble. Un espace insuffisant fait résonner les vibrations du compresseur et peut créer un bourdonnement amplifié.",
        icon: "↔️",
      },
      {
        step: 4,
        title: "Observez le bac de récupération d'eau",
        description:
          "Le bac situé au-dessus du compresseur (accessible par l'arrière) peut vibrer s'il est mal positionné ou fissuré. Retirez-le, nettoyez-le et replacez-le correctement.",
        icon: "🫙",
      },
      {
        step: 5,
        title: "Mesurez le niveau sonore",
        description:
          "Utilisez une application sonomètre sur votre téléphone pour relever le niveau de bruit en décibels. Comparez avec la valeur indiquée sur l'étiquette énergie. Un dépassement notable est un argument concret pour votre réclamation.",
        icon: "📊",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-3",
        relevance:
          "En principe, le vendeur doit livrer un bien conforme au contrat. Si le niveau sonore réel dépasse significativement celui annoncé sur la fiche produit, il peut y avoir défaut de conformité au sens de cet article.",
      },
      {
        articleRef: "L217-8",
        relevance:
          "Cet article prévoit que la mise en conformité est sans frais pour le consommateur. Selon votre situation, vous pouvez demander au vendeur de faire intervenir un technicien pour identifier et corriger la source du bruit excessif.",
      },
    ],
    faq: [
      {
        question:
          "Le niveau sonore réel de mon frigo dépasse largement celui indiqué sur l'étiquette, est-ce suffisant pour réclamer ?",
        answer:
          "En principe, oui. L'écart entre le niveau sonore annoncé et le niveau réel peut constituer un défaut de conformité. La fiche technique fait partie des caractéristiques promises. Une mesure fiable (idéalement par un professionnel) renforce considérablement votre réclamation.",
      },
      {
        question:
          "Mon réfrigérateur claque toutes les 20 minutes quand le compresseur démarre, est-ce normal ?",
        answer:
          "Un léger clic au démarrage du compresseur est normal. En revanche, un claquement fort et régulier peut indiquer un relais de démarrage défectueux ou des silent-blocs usés. Selon votre situation, si le bruit est excessif, cela peut justifier une réclamation.",
      },
      {
        question:
          "Le vendeur dit que les bruits sont normaux pour un modèle à compresseur inverseur, a-t-il raison ?",
        answer:
          "Les compresseurs inverseurs (inverter) sont en réalité réputés plus silencieux que les compresseurs classiques. Si votre modèle inverseur est bruyant, l'argument du vendeur est peu convaincant. Référez-vous au niveau sonore indiqué sur la fiche technique pour appuyer votre réclamation.",
      },
    ],
    whenToClaimWarranty:
      "Si votre réfrigérateur émet des bruits qui perturbent votre quotidien et dépassent le niveau sonore annoncé, vous pouvez en principe contacter le vendeur au titre de la garantie légale de conformité. Une mesure du bruit réel comparée à la valeur sur la fiche produit constitue un argument solide.",
    whenNotCovered:
      "Des bruits liés à un défaut d'installation (appareil non nivelé, trop proche du mur), à un bac de récupération d'eau mal replacé après nettoyage, ou à une surcharge du congélateur empêchant le ventilateur de tourner librement pourraient ne pas relever de la garantie.",
  },
  {
    problemSlug: "fuite-eau-sous-appareil",
    applianceSlug: "panne-refrigerateur-garantie",
    seoTitle: "Fuite d'eau sous réfrigérateur : garantie et solutions",
    seoDescription:
      "De l'eau coule sous votre réfrigérateur ? Identifiez la cause de la fuite et découvrez vos droits pour une prise en charge sous garantie légale.",
    seoKeywords: [
      "fuite eau réfrigérateur",
      "eau sous frigo garantie",
      "réfrigérateur fuite dessous",
    ],
    summaryLine:
      "Une fuite d'eau sous un réfrigérateur peut provenir du circuit de dégivrage, du bac de récupération ou du distributeur d'eau, et peut en principe être couverte par la garantie.",
    heroDescription:
      "Vous découvrez régulièrement une flaque d'eau sous ou devant votre réfrigérateur. L'eau peut être claire (circuit de dégivrage ou distributeur) ou légèrement trouble (condensation anormale). La flaque réapparaît même après avoir été essuyée.\n\nLes causes principales sont un orifice de dégivrage bouché qui fait déborder l'eau de condensation à l'intérieur plutôt que dans le bac prévu, un bac de récupération d'eau fissuré ou mal positionné sur le compresseur, un distributeur d'eau ou de glaçons avec un raccord desserré, ou un tuyau interne du circuit d'eau percé (sur les modèles avec distributeur).\n\nUne fuite d'eau persistante sur un réfrigérateur récent, non imputable à un problème de raccordement externe, constitue en principe un dysfonctionnement. Selon votre situation, vous pouvez envisager un recours au titre de la garantie légale de conformité.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Repérez l'origine de l'eau",
        description:
          "L'eau provient-elle de l'intérieur du réfrigérateur (paroi arrière, bac à légumes), du dessous de l'appareil ou de l'arrière ? Si le bac à légumes contient de l'eau, l'orifice de dégivrage est probablement obstrué.",
        icon: "🔍",
      },
      {
        step: 2,
        title: "Débouchez l'orifice de dégivrage",
        description:
          "Au fond du réfrigérateur, repérez le petit trou d'évacuation. S'il est bouché, utilisez un coton-tige ou un fil fin pour le déboucher. Versez un peu d'eau tiède pour vérifier que l'écoulement reprend.",
        icon: "🪡",
      },
      {
        step: 3,
        title: "Vérifiez le bac de récupération",
        description:
          "Tirez doucement le réfrigérateur et accédez au bac situé au-dessus du compresseur. Vérifiez qu'il n'est pas fissuré, qu'il est bien en place et qu'il ne déborde pas. Un bac fissuré laisse l'eau s'écouler au sol.",
        icon: "🫗",
      },
      {
        step: 4,
        title: "Inspectez le raccord d'eau (si distributeur)",
        description:
          "Si votre réfrigérateur dispose d'un distributeur d'eau ou de glaçons, vérifiez le raccord d'arrivée d'eau à l'arrière. Séchez-le et observez s'il suinte. Un joint défectueux ou un tuyau poreux peut être en cause.",
        icon: "🚰",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-5",
        relevance:
          "En principe, le réfrigérateur doit posséder les qualités qu'un acheteur peut légitimement attendre. Une fuite d'eau récurrente ne correspond pas à l'usage normal attendu d'un appareil frigorifique.",
      },
      {
        articleRef: "1641",
        relevance:
          "Selon l'article 1641 du Code civil, un vice caché rendant le bien impropre à l'usage peut donner lieu à garantie. Une fuite provenant d'un composant interne non visible à l'achat peut, selon les circonstances, constituer un tel vice.",
      },
    ],
    faq: [
      {
        question:
          "Le bac de récupération d'eau de mon frigo est fissuré, est-ce un défaut de conformité ?",
        answer:
          "En principe, un bac de récupération qui se fissure sur un appareil récent sans choc ni manipulation anormale peut être considéré comme un défaut de conformité. Vous pouvez demander son remplacement au vendeur au titre de la garantie légale.",
      },
      {
        question:
          "La fuite a abîmé mon parquet, puis-je demander réparation au vendeur ?",
        answer:
          "Selon votre situation, si la fuite résulte d'un défaut de conformité, vous pouvez en principe demander une indemnisation pour le préjudice subi (dégâts au sol). Documentez les dommages avec des photos et conservez les devis de remise en état.",
      },
      {
        question:
          "Mon réfrigérateur fuit uniquement en été, est-ce lié à la chaleur ambiante ?",
        answer:
          "Un réfrigérateur correctement conçu doit fonctionner dans la plage de températures indiquée par sa classe climatique (N, SN, ST, T). Si votre pièce est dans cette plage et que le frigo fuit quand même en été, le système de dégivrage ou le bac de récupération peut être sous-dimensionné ou défectueux.",
      },
    ],
    whenToClaimWarranty:
      "Une fuite d'eau récurrente sous un réfrigérateur de moins de deux ans, non liée à un raccordement externe, peut en principe justifier un recours au titre de la garantie légale de conformité. Signalez le problème au vendeur par écrit en joignant des photos de la fuite et de son origine identifiée.",
    whenNotCovered:
      "La fuite pourrait ne pas être couverte si elle résulte d'un raccord d'eau mal serré lors de l'installation du distributeur par l'utilisateur, d'un orifice de dégivrage bouché par absence prolongée de nettoyage, ou d'un déplacement de l'appareil ayant délogé le bac de récupération.",
  },

  // =============================================
  // FOUR — 4 problèmes
  // =============================================
  {
    problemSlug: "ne-chauffe-plus",
    applianceSlug: "panne-four-garantie",
    seoTitle: "Four ne chauffe plus : diagnostic et recours en garantie",
    seoDescription:
      "Votre four ne chauffe plus du tout ou insuffisamment ? Identifiez l'origine de la panne et découvrez comment faire valoir la garantie légale.",
    seoKeywords: [
      "four ne chauffe plus",
      "panne four électrique garantie",
      "four ne monte pas en température",
    ],
    summaryLine:
      "Un four qui ne chauffe plus ou ne monte pas en température souffre probablement d'une panne de résistance ou de thermostat, en principe couvert par la garantie.",
    heroDescription:
      "Vous préchauffez votre four, le voyant de chauffe s'allume mais la température ne monte pas ou reste très basse. Les plats ne cuisent plus correctement, les temps de cuisson s'allongent anormalement, ou le four reste tout simplement froid malgré un réglage à 200 °C.\n\nCe dysfonctionnement peut être causé par une résistance de sole ou de voûte grillée (le four chauffe en haut mais pas en bas, ou inversement), un thermostat de régulation défectueux qui ne commande plus la chauffe, un sélecteur de mode de cuisson endommagé, ou une sonde de température qui envoie des informations erronées à la carte.\n\nEn principe, un four est destiné à atteindre et maintenir les températures indiquées par son réglage. Selon votre situation, un four qui ne chauffe plus ne remplit pas sa fonction essentielle et peut relever de la garantie légale de conformité.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Testez plusieurs modes de cuisson",
        description:
          "Essayez tour à tour la chaleur tournante, le grill, la sole seule et la voûte seule. Si un mode fonctionne et pas l'autre, une résistance spécifique est en cause. Si aucun mode ne chauffe, le problème est plus global.",
        icon: "🔥",
      },
      {
        step: 2,
        title: "Observez les résistances",
        description:
          "Allumez le four et regardez à l'intérieur (porte fermée, lumière allumée). Les résistances doivent rougeoyer après quelques minutes. Si la résistance du haut rougit mais pas celle du bas (ou inversement), vous avez identifié l'élément défaillant.",
        icon: "👁️",
      },
      {
        step: 3,
        title: "Vérifiez la sécurité de porte",
        description:
          "Certains fours ne chauffent pas si la porte n'est pas correctement fermée. Assurez-vous que le loquet de porte s'enclenche bien et que le joint de porte n'empêche pas la fermeture complète.",
        icon: "🚪",
      },
      {
        step: 4,
        title: "Utilisez un thermomètre de four indépendant",
        description:
          "Placez un thermomètre résistant à la chaleur dans le four et réglez sur 180 °C. Après 20 minutes, relevez la température réelle. Un écart important confirme un dysfonctionnement mesurable qui appuie votre réclamation.",
        icon: "🌡️",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-3",
        relevance:
          "En principe, le vendeur est tenu de livrer un bien conforme au contrat. Un four qui ne chauffe plus ne correspond pas à la description d'un appareil de cuisson fonctionnel et peut constituer un défaut de conformité.",
      },
      {
        articleRef: "L217-7",
        relevance:
          "Selon cet article, les défauts de conformité apparaissant dans les deux ans sont présumés exister au moment de l'achat. Vous n'avez en principe pas à prouver l'origine du défaut pendant cette période.",
      },
    ],
    faq: [
      {
        question:
          "La résistance de sole de mon four a grillé après un an, est-ce un défaut de fabrication ?",
        answer:
          "En principe, une résistance de four est conçue pour durer plusieurs années en usage domestique normal. Un claquage après seulement un an peut être considéré comme un défaut de conformité au regard de la durabilité attendue. Vous pouvez demander la réparation sans frais au vendeur.",
      },
      {
        question:
          "Mon four chauffe mais pas assez : il atteint 150 °C au lieu des 220 °C réglés. Est-ce couvert ?",
        answer:
          "Oui, un four qui n'atteint pas la température demandée ne fonctionne pas conformément à ses spécifications. Selon votre situation, vous pouvez faire constater cet écart avec un thermomètre indépendant et demander une intervention au titre de la garantie légale.",
      },
      {
        question:
          "La panne est apparue après un cycle de pyrolyse, le vendeur peut-il refuser la garantie ?",
        answer:
          "La pyrolyse est une fonction prévue par le fabricant. En principe, utiliser une fonction intégrée à l'appareil ne constitue pas un usage anormal. Si une résistance ou un composant cède après un cycle de pyrolyse, cela peut être considéré comme un défaut de conception ou de conformité.",
      },
    ],
    whenToClaimWarranty:
      "Un four qui ne chauffe plus du tout ou insuffisamment ne remplit pas sa fonction essentielle. Vous pouvez en principe contacter le vendeur dès la constatation du problème pour demander une prise en charge au titre de la garantie légale de conformité. Un relevé de température avec un thermomètre indépendant renforce votre dossier.",
    whenNotCovered:
      "La panne pourrait ne pas être couverte si elle résulte d'un nettoyage avec des produits abrasifs ayant endommagé les résistances, d'un branchement sur une installation électrique non conforme (puissance insuffisante), ou d'un usage manifestement intensif dépassant le cadre domestique.",
  },
  {
    problemSlug: "porte-ne-ferme-plus",
    applianceSlug: "panne-four-garantie",
    seoTitle: "Porte du four ne ferme plus : garantie et solutions",
    seoDescription:
      "La porte de votre four ne ferme plus correctement ? Diagnostic des causes (charnières, joint) et recours possibles en garantie légale.",
    seoKeywords: [
      "porte four ne ferme plus",
      "charnière four cassée garantie",
      "four porte bloquée",
    ],
    summaryLine:
      "Une porte de four qui ne ferme plus correctement peut résulter de charnières défaillantes ou d'un loquet cassé, en principe couvert par la garantie légale.",
    heroDescription:
      "La porte de votre four ne se ferme plus correctement : elle reste entrebâillée, ne s'enclenche pas en position fermée, s'affaisse d'un côté, ou rebondit quand vous tentez de la fermer. La chaleur s'échappe pendant la cuisson, rendant l'appareil inefficace et potentiellement dangereux.\n\nCe problème peut provenir de charnières usées ou déformées qui ne retiennent plus la porte, d'un système de verrouillage (loquet) cassé, d'un joint de porte déformé qui empêche la fermeture, ou de la vitre intérieure qui s'est déplacée dans son logement.\n\nEn principe, la porte d'un four doit se fermer hermétiquement pour des raisons de sécurité et d'efficacité. Selon votre situation, un défaut de fermeture sur un four récent peut constituer un défaut de conformité puisqu'il empêche l'utilisation sûre et efficace de l'appareil.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Examinez les charnières",
        description:
          "Ouvrez la porte à mi-course et observez les deux charnières latérales. Si l'une est visiblement tordue, cassée ou plus basse que l'autre, elle est en cause. Des traces de rouille ou de déformation sont des indices révélateurs.",
        icon: "🔩",
      },
      {
        step: 2,
        title: "Testez le loquet de fermeture",
        description:
          "Fermez la porte lentement et observez si le crochet de verrouillage s'enclenche dans la gâche. Si le crochet est tordu ou si la gâche est déplacée, le mécanisme de fermeture est défectueux.",
        icon: "🔒",
      },
      {
        step: 3,
        title: "Vérifiez le joint de porte",
        description:
          "Inspectez le joint sur tout le pourtour de la porte. S'il est gonflé, décollé ou déformé par la chaleur à un endroit, il peut empêcher la fermeture complète. Passez la main le long du joint pour détecter les irrégularités.",
        icon: "🧤",
      },
      {
        step: 4,
        title: "Contrôlez la vitre intérieure",
        description:
          "Sur les fours à double ou triple vitrage, la vitre intérieure peut glisser de ses fixations, surtout après un démontage pour nettoyage. Une vitre mal repositionnée empêche la porte de s'aligner correctement.",
        icon: "🪟",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-5",
        relevance:
          "En principe, le four doit être propre à l'usage habituellement attendu et présenter les qualités de sécurité qu'un consommateur peut légitimement attendre. Une porte qui ne ferme pas compromet à la fois la cuisson et la sécurité.",
      },
      {
        articleRef: "L217-12",
        relevance:
          "Selon cet article, vous pouvez demander la réparation ou le remplacement. Si la réparation des charnières est rapide et sans frais, le vendeur peut la proposer en priorité. S'il ne peut pas réparer dans un délai raisonnable, vous pouvez exiger le remplacement.",
      },
    ],
    faq: [
      {
        question:
          "Les charnières de mon four ont lâché après 16 mois, est-ce un défaut de conformité ?",
        answer:
          "En principe, des charnières de four sont conçues pour supporter des milliers de cycles d'ouverture et fermeture. Une défaillance après 16 mois en usage domestique normal peut être considérée comme un défaut de conformité au regard de la durabilité attendue.",
      },
      {
        question:
          "La porte de mon four s'est bloquée après un cycle de pyrolyse, que faire ?",
        answer:
          "Après un cycle de pyrolyse, la porte reste verrouillée tant que la température interne est élevée. Si elle reste bloquée une fois le four refroidi (attendez au moins 2 heures), le mécanisme de verrouillage automatique est probablement défectueux. Selon votre situation, vous pouvez demander une intervention sous garantie.",
      },
      {
        question:
          "Le joint de porte est déformé par la chaleur, est-ce une conception défectueuse ?",
        answer:
          "Un joint de four est conçu pour résister aux températures atteintes par l'appareil. S'il se déforme dans les conditions normales d'utilisation, il peut en principe s'agir d'un défaut de conception ou de qualité du matériau. Vous pouvez demander son remplacement au titre de la garantie.",
      },
    ],
    whenToClaimWarranty:
      "Une porte de four qui ne ferme plus compromet la sécurité et l'efficacité de la cuisson. En principe, ce type de défaut sur un appareil de moins de deux ans peut justifier une réclamation au titre de la garantie légale de conformité. Signalez le problème au vendeur sans tarder, car un four dont la porte ne ferme pas ne devrait pas être utilisé.",
    whenNotCovered:
      "Le problème pourrait ne pas être couvert si la porte a subi un choc (enfant qui s'est accroché, chute d'un objet lourd), si les charnières ont été endommagées lors d'un démontage de la porte pour nettoyage, ou si la vitre a été mal replacée après un nettoyage effectué par l'utilisateur.",
  },
  {
    problemSlug: "plateau-ne-tourne-plus",
    applianceSlug: "panne-four-garantie",
    seoTitle: "Plateau micro-ondes ne tourne plus | Garantie légale",
    seoDescription:
      "Le plateau de votre micro-ondes ne tourne plus ? Diagnostic des causes et démarches pour faire valoir vos droits en garantie légale de conformité.",
    seoKeywords: [
      "plateau micro-ondes ne tourne plus",
      "micro-ondes plateau bloqué garantie",
      "panne plateau tournant micro-ondes",
    ],
    summaryLine:
      "Un plateau de micro-ondes immobile empêche une cuisson homogène et peut résulter d'un moteur d'entraînement ou d'un coupleur défaillant, en principe couvert par la garantie.",
    heroDescription:
      "Vous lancez votre micro-ondes et le plateau en verre reste immobile. La nourriture chauffe de manière inégale : brûlante d'un côté, froide de l'autre. Le moteur sous le plateau ne produit aucun bruit de rotation, ou bien vous entendez un ronronnement sans que le plateau ne bouge.\n\nCe problème peut provenir du moteur d'entraînement du plateau qui a grillé, du coupleur (pièce en plastique qui transmet la rotation du moteur au plateau) qui est cassé ou usé, d'un guide de roulement fissuré qui bloque la rotation, ou plus rarement d'une défaillance de la carte électronique qui ne commande plus le moteur.\n\nBien que le micro-ondes continue de chauffer, l'absence de rotation du plateau empêche une répartition uniforme des micro-ondes dans les aliments. En principe, cette fonction est essentielle au bon fonctionnement de l'appareil. Selon votre situation, ce dysfonctionnement peut relever de la garantie légale.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Vérifiez le positionnement du plateau",
        description:
          "Retirez le plateau en verre et l'anneau de roulement. Remettez-les en place en vous assurant que le plateau est bien centré sur le coupleur (tige ou croix d'entraînement au centre). Un mauvais positionnement empêche la rotation.",
        icon: "🎯",
      },
      {
        step: 2,
        title: "Inspectez le coupleur d'entraînement",
        description:
          "Examinez la petite pièce en plastique en forme de croix ou de tige au centre du plancher du micro-ondes. Si elle est fondue, cassée ou ébréchée, la rotation du moteur ne se transmet plus au plateau.",
        icon: "⚙️",
      },
      {
        step: 3,
        title: "Contrôlez l'anneau de roulement",
        description:
          "L'anneau à roulettes sur lequel repose le plateau doit tourner librement. Nettoyez les roulettes et la piste au fond du micro-ondes. Des résidus alimentaires ou de la graisse solidifiée peuvent bloquer le mouvement.",
        icon: "🔄",
      },
      {
        step: 4,
        title: "Écoutez le moteur",
        description:
          "Retirez le plateau et lancez un cycle à vide de quelques secondes. Si vous entendez un léger ronronnement provenant du dessous, le moteur fonctionne mais la transmission est défaillante. Si c'est le silence total, le moteur lui-même est en panne.",
        icon: "👂",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-4",
        relevance:
          "En principe, le vendeur répond des défauts de conformité existant lors de la délivrance. Un moteur de plateau défaillant sur un micro-ondes récent est un composant dont la panne n'est pas imputable à l'utilisateur.",
      },
      {
        articleRef: "L217-10",
        relevance:
          "Selon cet article, la garantie légale s'applique dans les deux ans suivant la délivrance. Le défaut de fonctionnement du plateau apparu dans ce délai est en principe présumé d'origine.",
      },
    ],
    faq: [
      {
        question:
          "Le micro-ondes chauffe encore sans le plateau tournant, est-ce quand même un défaut ?",
        answer:
          "Oui. Même si le micro-ondes émet des ondes, l'absence de rotation provoque une chauffe non homogène qui peut créer des points froids dangereux (bactéries) et des points brûlants. En principe, la rotation du plateau fait partie du fonctionnement normal prévu par le fabricant.",
      },
      {
        question:
          "Le coupleur en plastique a fondu, est-ce un défaut de conception ?",
        answer:
          "Un coupleur qui fond alors que l'appareil est utilisé normalement semble indiquer un défaut de qualité du matériau ou de conception. Selon votre situation, vous pouvez invoquer la garantie légale car ce composant est censé résister aux conditions de fonctionnement du micro-ondes.",
      },
      {
        question:
          "Le vendeur me propose de simplement remplacer le coupleur, dois-je accepter ?",
        answer:
          "Si le remplacement du coupleur résout le problème durablement et se fait sans frais, c'est une réparation acceptable. En principe, le vendeur peut proposer la réparation en priorité. Toutefois, si le coupleur fond à nouveau, vous pouvez demander un remplacement de l'appareil.",
      },
    ],
    whenToClaimWarranty:
      "Si le plateau de votre micro-ondes ne tourne plus malgré un positionnement correct et un guide de roulement propre, il s'agit en principe d'une défaillance du moteur ou du coupleur. Vous pouvez demander au vendeur de prendre en charge la réparation au titre de la garantie légale si l'appareil a moins de deux ans.",
    whenNotCovered:
      "Le problème pourrait ne pas être couvert si le plateau en verre a été remplacé par un modèle non compatible, si l'anneau de roulement est obstrué par des résidus alimentaires faute d'entretien, ou si le coupleur a été endommagé en forçant le plateau dans une mauvaise position.",
  },
  {
    problemSlug: "affichage-ne-repond-plus",
    applianceSlug: "panne-four-garantie",
    seoTitle: "Affichage four ou boutons ne répondent plus | Garantie",
    seoDescription:
      "L'écran ou les boutons de votre four ne répondent plus ? Diagnostic de la panne électronique et démarches pour faire jouer la garantie légale.",
    seoKeywords: [
      "affichage four ne répond plus",
      "boutons four en panne garantie",
      "four écran éteint",
    ],
    summaryLine:
      "Un affichage éteint ou des boutons qui ne répondent plus sur un four signalent un problème de carte électronique ou de bandeau de commande, en principe couvert par la garantie.",
    heroDescription:
      "L'écran de votre four reste éteint, affiche des caractères incohérents ou ne réagit plus à vos appuis. Les touches sensitives ne déclenchent aucune réponse, ou certains boutons fonctionnent tandis que d'autres sont inertes. L'horloge peut être figée ou clignoter indéfiniment.\n\nCe type de panne est généralement lié au bandeau de commande (panneau tactile ou à touches) qui est endommagé, à la carte électronique de commande qui ne traite plus les signaux, à un connecteur nappe entre l'afficheur et la carte qui s'est oxydé ou déconnecté, ou à un composant électronique qui a grillé suite à une micro-surtension.\n\nLa commande de l'appareil est une fonction indispensable sans laquelle le four est inutilisable. En principe, un four dont l'interface ne répond plus ne remplit pas sa fonction. Selon votre situation, ce défaut peut constituer un défaut de conformité au sens de la garantie légale.",
    diagnosticSteps: [
      {
        step: 1,
        title: "Effectuez un reset électrique complet",
        description:
          "Coupez le disjoncteur dédié au four ou débranchez-le pendant 15 minutes. Cette coupure prolongée permet à la carte électronique de se réinitialiser complètement. Rebranchez et testez chaque bouton méthodiquement.",
        icon: "⚡",
      },
      {
        step: 2,
        title: "Nettoyez le bandeau de commande",
        description:
          "Si le four a des touches tactiles, nettoyez la surface avec un chiffon doux légèrement humide. Les résidus de graisse ou d'humidité peuvent perturber la détection des appuis sur les panneaux capacitifs.",
        icon: "🧽",
      },
      {
        step: 3,
        title: "Observez le comportement de l'affichage",
        description:
          "Notez précisément ce que fait l'écran : totalement éteint, partiellement allumé, caractères aléatoires, clignotement. Chaque symptôme oriente vers une cause différente (rétroéclairage, carte, nappe).",
        icon: "🖥️",
      },
      {
        step: 4,
        title: "Testez après refroidissement",
        description:
          "Si l'affichage ne répond qu'après une utilisation intensive du four, attendez le refroidissement complet (2 heures) et réessayez. Un composant sensible à la chaleur qui lâche en température indique un défaut de conception.",
        icon: "❄️",
      },
      {
        step: 5,
        title: "Vérifiez si le four chauffe malgré tout",
        description:
          "Sur certains modèles, un programmateur mécanique secondaire peut démarrer le four même si l'affichage digital est en panne. Si le four chauffe sans interface de commande, la carte d'affichage est confirmée comme défaillante.",
        icon: "🔥",
      },
    ],
    legalPoints: [
      {
        articleRef: "L217-3",
        relevance:
          "En principe, le bien doit être conforme au contrat et posséder les fonctionnalités présentées. Un four dont le système de commande est inopérant ne permet pas à l'utilisateur de sélectionner les programmes et températures annoncés.",
      },
      {
        articleRef: "L217-8",
        relevance:
          "Selon cet article, la mise en conformité s'effectue sans frais pour le consommateur. Le remplacement de la carte électronique ou du bandeau de commande, souvent coûteux, doit en principe être pris en charge intégralement par le vendeur.",
      },
    ],
    faq: [
      {
        question:
          "La carte électronique de mon four coûte plus de 300 €, le vendeur doit-il payer ?",
        answer:
          "Si votre four est sous garantie légale de conformité, le vendeur doit en principe prendre en charge l'intégralité du coût de réparation (pièce et main-d'œuvre) sans vous facturer quoi que ce soit. Le prix élevé de la pièce ne l'exonère pas de cette obligation.",
      },
      {
        question:
          "Seuls certains boutons ne fonctionnent plus, le vendeur minimise le problème. Que faire ?",
        answer:
          "Même un dysfonctionnement partiel de l'interface peut empêcher l'accès à certains modes de cuisson ou réglages. Selon votre situation, cela peut constituer un défaut de conformité. Documentez précisément quels boutons sont inopérants et quelles fonctions deviennent inaccessibles.",
      },
      {
        question:
          "L'affichage est tombé en panne juste après la fin de la garantie commerciale, ai-je encore des droits ?",
        answer:
          "La garantie légale de conformité (deux ans) et la garantie des vices cachés sont indépendantes de la garantie commerciale du fabricant. Si votre four a moins de deux ans depuis l'achat, vous bénéficiez en principe encore de la garantie légale auprès du vendeur, même si la garantie constructeur a expiré.",
      },
    ],
    whenToClaimWarranty:
      "Un four dont l'affichage ou les commandes ne répondent plus est en pratique inutilisable. En principe, cette panne électronique sur un appareil de moins de deux ans relève de la garantie légale de conformité. Contactez le vendeur en décrivant précisément les symptômes (touches inertes, écran éteint, caractères aléatoires) et en joignant une photo.",
    whenNotCovered:
      "La panne pourrait ne pas être couverte si elle résulte d'un nettoyage excessif avec de l'eau ayant infiltré le bandeau de commande, d'une surtension avérée (foudre), ou d'un démontage du panneau de commande par l'utilisateur ayant endommagé la nappe de connexion.",
  },
  // =============================================
  // SÈCHE-LINGE — 4 problèmes
  // =============================================
  {
    problemSlug: "ne-seche-plus",
    applianceSlug: "panne-seche-linge-garantie",
    seoTitle: "Sèche-linge ne sèche plus — Garantie et diagnostic",
    seoDescription: "Votre sèche-linge ne sèche plus correctement ? Diagnostic des causes, droits de garantie légale et mail de réclamation gratuit.",
    seoKeywords: ["sèche-linge ne sèche plus", "linge humide après séchage", "panne sèche-linge garantie"],
    summaryLine: "Un sèche-linge qui ne sèche plus peut souffrir d'une résistance de chauffe défectueuse, d'un condenseur encrassé ou d'un problème de sonde, souvent couvert par la garantie.",
    heroDescription: "Vous lancez un cycle de séchage complet, mais votre linge sort encore humide, voire trempé. Vous relancez un deuxième cycle sans amélioration notable. Ce problème est particulièrement frustrant en hiver quand le séchage à l'air libre n'est pas envisageable.\n\nLes causes principales sont une résistance de chauffe défectueuse (l'air circule mais n'est pas chauffé), un condenseur encrassé (l'humidité n'est plus évacuée correctement), une sonde de température en panne, ou un filtre à peluches saturé qui bloque le flux d'air.\n\nSi le problème persiste après nettoyage du filtre et du condenseur, il s'agit probablement d'une panne interne qui peut relever de la garantie légale si l'appareil a moins de 2 ans.",
    diagnosticSteps: [
      { step: 1, title: "Nettoyez le filtre à peluches", description: "C'est la première chose à vérifier. Un filtre saturé bloque la circulation d'air et réduit drastiquement l'efficacité du séchage.", icon: "🧹" },
      { step: 2, title: "Nettoyez le condenseur", description: "Sur les modèles à condensation, sortez le condenseur (bloc de lamelles) et rincez-le à l'eau. Un condenseur encrassé empêche l'évacuation de l'humidité.", icon: "💧" },
      { step: 3, title: "Vérifiez la production de chaleur", description: "Lancez un cycle et touchez l'intérieur du tambour après 10 minutes. S'il reste froid, la résistance de chauffe est probablement en panne.", icon: "🌡️" },
      { step: 4, title: "Contrôlez le bac de récupération d'eau", description: "Si le bac est plein et non vidé, certains modèles s'arrêtent de chauffer par sécurité. Videz-le et relancez un cycle.", icon: "🪣" },
    ],
    legalPoints: [
      { articleRef: "L217-4", relevance: "Un sèche-linge qui ne sèche plus ne correspond pas à l'usage attendu d'un bien de ce type. Cela peut constituer un défaut de conformité." },
      { articleRef: "L217-11", relevance: "La réparation sous garantie (remplacement de résistance, sonde, etc.) doit en principe être effectuée sans aucun frais pour le consommateur." },
    ],
    faq: [
      { question: "Mon sèche-linge tourne mais ne chauffe plus, est-ce un défaut de conformité ?", answer: "En principe, oui. Un sèche-linge qui fait tourner le linge sans le chauffer ne remplit pas sa fonction. Si l'appareil a moins de 2 ans, vous pouvez demander au vendeur la réparation ou le remplacement." },
      { question: "Le linge met deux fois plus de temps à sécher qu'avant, est-ce couvert ?", answer: "Une baisse significative de performance peut constituer un défaut de conformité si le problème n'est pas lié à l'entretien (filtre, condenseur). Décrivez précisément la différence de performance au vendeur." },
      { question: "Le vendeur dit que je dois nettoyer le condenseur moi-même, a-t-il raison ?", answer: "L'entretien courant (filtre, condenseur) vous incombe. Mais si le problème persiste malgré un nettoyage correct, le vendeur doit en principe prendre en charge la réparation sous garantie." },
    ],
    whenToClaimWarranty: "Si votre sèche-linge ne sèche plus malgré un nettoyage du filtre et du condenseur, et qu'il a moins de 2 ans, vous pouvez en principe contacter le vendeur. Précisez que l'air n'est pas chauffé ou que le séchage est anormalement long.",
    whenNotCovered: "Un séchage inefficace dû à un filtre jamais nettoyé, un condenseur encrassé par manque d'entretien, ou une surcharge systématique du tambour pourrait être considéré comme un défaut d'utilisation.",
  },
  {
    problemSlug: "ne-demarre-plus",
    applianceSlug: "panne-seche-linge-garantie",
    seoTitle: "Sèche-linge ne démarre plus — Garantie et recours",
    seoDescription: "Votre sèche-linge ne démarre plus du tout ? Causes possibles, droits de garantie légale et modèle de réclamation gratuit.",
    seoKeywords: ["sèche-linge ne démarre plus", "sèche-linge ne s'allume plus", "panne démarrage sèche-linge"],
    summaryLine: "Un sèche-linge qui ne démarre plus peut indiquer un problème de carte électronique, de verrou de porte ou de courroie, potentiellement couvert par la garantie.",
    heroDescription: "Vous appuyez sur le bouton de démarrage de votre sèche-linge et rien ne se passe, ou les voyants s'allument mais le tambour reste immobile. L'appareil est devenu inutilisable du jour au lendemain.\n\nCe type de panne provient généralement d'une carte électronique défaillante, d'un verrou de porte défectueux (le sèche-linge ne démarre pas par sécurité si la porte n'est pas détectée comme fermée), d'une courroie de tambour cassée, ou d'un fusible thermique grillé.\n\nSur un appareil de moins de 2 ans, un arrêt total et soudain constitue en principe un défaut de conformité qui relève de la garantie légale.",
    diagnosticSteps: [
      { step: 1, title: "Vérifiez l'alimentation", description: "Testez la prise avec un autre appareil. Vérifiez le disjoncteur. Les sèche-linge consomment beaucoup et peuvent faire sauter un disjoncteur sous-dimensionné.", icon: "🔌" },
      { step: 2, title: "Inspectez la fermeture de porte", description: "Ouvrez et refermez la porte fermement. Si le verrou est cassé, le sèche-linge ne démarrera pas par sécurité.", icon: "🚪" },
      { step: 3, title: "Observez les voyants", description: "Si les voyants s'allument mais le tambour ne tourne pas : problème mécanique (courroie). Si rien ne s'allume : problème électrique (carte, fusible).", icon: "💡" },
      { step: 4, title: "Tentez un reset", description: "Débranchez l'appareil 10 minutes puis rebranchez. Certains modèles ont un bouton reset à l'arrière près du filtre.", icon: "⏱️" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Un sèche-linge qui ne démarre plus du tout est totalement inutilisable. Cela constitue en principe un défaut de conformité majeur." },
      { articleRef: "L217-7", relevance: "Dans les 24 mois suivant l'achat, le défaut est en principe présumé exister depuis la livraison. Le vendeur doit apporter la preuve contraire." },
    ],
    faq: [
      { question: "Les voyants s'allument mais le tambour ne tourne pas, qu'est-ce que cela signifie ?", answer: "Cela indique généralement une courroie cassée ou un moteur défaillant. La carte électronique fonctionne mais la transmission mécanique est en panne. Sur un appareil de moins de 2 ans, c'est en principe couvert." },
      { question: "Mon sèche-linge a fait disjoncter puis ne redémarre plus, est-ce un défaut ?", answer: "Un appareil qui fait disjoncter peut avoir un court-circuit interne. Si l'installation électrique est aux normes, ce type de panne sur un appareil de moins de 2 ans peut être considéré comme un défaut de conformité." },
      { question: "Le fusible thermique a grillé, est-ce de l'usure normale ?", answer: "Un fusible thermique qui grille prématurément (moins de 2 ans) peut indiquer un défaut de conception (surchauffe anormale). Vous pouvez en principe faire valoir la garantie légale auprès du vendeur." },
    ],
    whenToClaimWarranty: "Un sèche-linge qui ne démarre plus du tout est totalement inutilisable. Si l'appareil a moins de 2 ans et que votre installation électrique est aux normes, contactez le vendeur en décrivant les symptômes (voyants, bruits, réaction au bouton).",
    whenNotCovered: "Si la panne résulte d'une surtension avérée (foudre sans parafoudre), d'un branchement sur une installation non conforme, ou d'un détournement d'usage, le vendeur pourrait contester la prise en charge.",
  },
  {
    problemSlug: "bruit-anormal",
    applianceSlug: "panne-seche-linge-garantie",
    seoTitle: "Sèche-linge bruyant : bruit anormal — Garantie",
    seoDescription: "Votre sèche-linge fait un bruit anormal ? Grincements, claquements ou vibrations ? Diagnostic, garantie et mail de réclamation gratuit.",
    seoKeywords: ["sèche-linge bruit anormal", "sèche-linge qui grince", "bruit sèche-linge garantie"],
    summaryLine: "Un bruit anormal sur un sèche-linge (grincement, claquement, frottement) signale souvent une pièce usée prématurément, potentiellement couverte par la garantie.",
    heroDescription: "Votre sèche-linge produit un bruit inhabituel pendant le fonctionnement : grincement aigu, frottement métallique, claquement régulier ou vibration excessive. Ce bruit peut être constant ou apparaître uniquement pendant certaines phases du cycle.\n\nLes causes les plus courantes sont des roulements de tambour usés prématurément (grondement ou grincement), un galet tendeur de courroie défectueux (couinement), un feutre d'étanchéité du tambour dégradé (frottement), ou simplement un objet oublié dans le tambour (bouton, pièce de monnaie).\n\nDes bruits anormaux apparus spontanément sur un appareil de moins de 2 ans signalent une usure prématurée qui peut en principe relever de la garantie légale.",
    diagnosticSteps: [
      { step: 1, title: "Videz complètement le tambour", description: "Vérifiez qu'aucun objet (bouton, pièce, fermeture éclair) ne traîne dans le tambour ou ne s'est glissé dans les rainures.", icon: "🔍" },
      { step: 2, title: "Identifiez le type de bruit", description: "Grincement = roulement ou galet. Frottement = feutre d'étanchéité. Claquement = courroie détendue. Vibration = appareil mal nivelé.", icon: "👂" },
      { step: 3, title: "Tournez le tambour à la main", description: "Appareil éteint, faites tourner manuellement. Un point dur ou un crissement confirme un problème de roulement ou de feutre.", icon: "🖐️" },
      { step: 4, title: "Vérifiez le calage", description: "Assurez-vous que l'appareil est parfaitement nivelé. Des pieds mal réglés provoquent des vibrations amplifiées par le poids du linge.", icon: "📐" },
    ],
    legalPoints: [
      { articleRef: "L217-5", relevance: "Un sèche-linge anormalement bruyant ne possède pas les qualités qu'un acheteur peut légitimement attendre. Cela peut relever d'un défaut de conformité objectif." },
      { articleRef: "L217-7", relevance: "Des bruits apparus dans les 24 mois sont en principe présumés résulter d'un défaut existant depuis la livraison." },
    ],
    faq: [
      { question: "Mon sèche-linge grince depuis quelques jours, dois-je m'inquiéter ?", answer: "Un grincement est souvent le signe de roulements ou d'un galet en fin de vie. Il est conseillé d'agir rapidement, car le problème peut s'aggraver et endommager d'autres pièces. Si l'appareil a moins de 2 ans, contactez le vendeur." },
      { question: "Le bruit n'apparaît qu'avec du linge lourd (serviettes, draps), est-ce normal ?", answer: "Un bruit uniquement sous charge lourde peut indiquer des amortisseurs ou roulements fragilisés. Ce n'est pas normal si l'appareil est récent et le poids dans la limite recommandée." },
      { question: "Le vendeur dit que c'est normal pour ce modèle, comment réagir ?", answer: "Vérifiez les avis en ligne sur votre modèle. Si d'autres utilisateurs ne signalent pas ce bruit, insistez auprès du vendeur. Vous pouvez filmer le bruit pour preuve et mentionner l'article L217-5 sur la qualité attendue." },
    ],
    whenToClaimWarranty: "Des bruits anormaux apparus spontanément sur un appareil de moins de 2 ans (grincements, frottements, claquements) justifient en principe une réclamation. Enregistrez une vidéo du bruit pour documenter votre demande.",
    whenNotCovered: "Si le bruit est causé par un mauvais calage de l'appareil, une surcharge régulière au-delà de la capacité maximale, ou un objet introduit par l'utilisateur, le vendeur pourrait contester.",
  },
  {
    problemSlug: "mauvaise-odeur",
    applianceSlug: "panne-seche-linge-garantie",
    seoTitle: "Sèche-linge : mauvaise odeur — Causes et garantie",
    seoDescription: "Votre sèche-linge dégage une mauvaise odeur ? Diagnostic des causes, solutions et droits de garantie si l'appareil est récent.",
    seoKeywords: ["sèche-linge mauvaise odeur", "odeur brûlé sèche-linge", "sèche-linge sent mauvais"],
    summaryLine: "Une mauvaise odeur persistante du sèche-linge peut indiquer un problème de surchauffe, de moisissure interne ou de composant défectueux.",
    heroDescription: "Votre sèche-linge dégage une odeur désagréable qui imprègne votre linge : odeur de moisi, de caoutchouc brûlé, de plastique chaud ou simplement un relent d'humidité persistant. Au lieu de sortir frais, votre linge sent mauvais après le séchage.\n\nLes causes possibles incluent un filtre à peluches saturé (odeur de renfermé), un condenseur encrassé favorisant la stagnation d'humidité et de moisissures, une accumulation de peluches en contact avec la résistance (odeur de brûlé), ou une courroie qui frotte anormalement.\n\nUne odeur de brûlé persistante nécessite une attention immédiate car elle peut signaler un risque de surchauffe. Si le problème persiste après nettoyage sur un appareil de moins de 2 ans, une réclamation peut être envisagée.",
    diagnosticSteps: [
      { step: 1, title: "Nettoyez le filtre à peluches à fond", description: "Retirez les peluches visibles puis lavez le filtre à l'eau chaude savonneuse. Des résidus de lessive et peluches compactées peuvent générer des odeurs.", icon: "🧹" },
      { step: 2, title: "Nettoyez le condenseur", description: "Sortez le condenseur et rincez-le abondamment. Les moisissures s'y développent si l'humidité stagne dans un environnement mal ventilé.", icon: "💧" },
      { step: 3, title: "Inspectez l'intérieur du tambour", description: "Cherchez des traces de moisissure noire, des résidus collés ou des peluches accumulées derrière le feutre d'étanchéité.", icon: "🔍" },
      { step: 4, title: "Évaluez le type d'odeur", description: "Moisi = humidité stagnante. Brûlé = peluches sur la résistance ou courroie qui frotte. Plastique = composant en surchauffe. Une odeur de brûlé justifie d'arrêter l'appareil.", icon: "👃" },
    ],
    legalPoints: [
      { articleRef: "L217-4", relevance: "Un sèche-linge qui dégage des odeurs persistantes rendant le linge malodorant ne correspond pas à l'usage attendu d'un bien de ce type." },
      { articleRef: "L217-5", relevance: "Le consommateur est en droit d'attendre un sèche-linge qui ne détériore pas la qualité de son linge. Une odeur de brûlé peut de surcroît signaler un risque de sécurité." },
    ],
    faq: [
      { question: "Mon sèche-linge sent le brûlé, est-ce dangereux ?", answer: "Une odeur de brûlé peut indiquer une accumulation de peluches sur la résistance ou une courroie qui frotte. Arrêtez l'appareil immédiatement par précaution. Si l'odeur persiste après nettoyage du filtre, faites intervenir un professionnel via le vendeur si l'appareil a moins de 2 ans." },
      { question: "Le linge sent le moisi après le sèche-linge, est-ce couvert par la garantie ?", answer: "Si le problème persiste malgré un entretien correct (filtre propre, condenseur nettoyé, pièce ventilée) et que l'appareil a moins de 2 ans, cela peut indiquer un défaut de conception. Vous pouvez en principe contacter le vendeur." },
      { question: "L'odeur est apparue après 6 mois seulement, est-ce normal ?", answer: "Non. Un sèche-linge bien entretenu ne devrait pas dégager d'odeur désagréable après seulement 6 mois. Cela peut indiquer un défaut de fabrication (étanchéité, ventilation interne insuffisante)." },
    ],
    whenToClaimWarranty: "Si l'odeur persiste malgré un entretien régulier (filtre, condenseur, ventilation), et particulièrement si c'est une odeur de brûlé ou de plastique, contactez le vendeur. Précisez que le problème peut poser un risque de sécurité.",
    whenNotCovered: "Des odeurs liées à un filtre jamais nettoyé, un condenseur encrassé par manque d'entretien, ou une pièce mal ventilée (humidité ambiante excessive) pourraient être considérées comme un défaut d'entretien.",
  },
  // =============================================
  // ASPIRATEUR — 4 problèmes
  // =============================================
  {
    problemSlug: "perte-aspiration",
    applianceSlug: "panne-aspirateur-garantie",
    seoTitle: "Aspirateur : perte d'aspiration — Garantie et recours",
    seoDescription: "Votre aspirateur a perdu sa puissance d'aspiration ? Diagnostic des causes, droits de garantie légale et mail de réclamation gratuit.",
    seoKeywords: ["aspirateur perte aspiration", "aspirateur n'aspire plus", "panne aspiration garantie"],
    summaryLine: "Une perte d'aspiration significative sur un aspirateur récent peut indiquer un moteur défaillant ou un défaut de conception, potentiellement couvert par la garantie.",
    heroDescription: "Votre aspirateur laisse des miettes et des poussières visibles derrière lui, alors qu'il aspirait parfaitement auparavant. Vous devez repasser plusieurs fois au même endroit pour un résultat médiocre. La puissance a clairement diminué.\n\nLes causes vont du plus simple au plus complexe : sac plein ou bac à poussière non vidé, filtre encrassé (HEPA ou mousse), tuyau partiellement obstrué par un objet, ou moteur qui fatigue prématurément. Sur les modèles sans sac, un filtre cyclonique encrassé réduit aussi fortement les performances.\n\nSi le problème persiste après nettoyage des filtres et vérification des obstructions, et que l'aspirateur a moins de 2 ans, il peut s'agir d'un moteur défaillant couvert par la garantie légale.",
    diagnosticSteps: [
      { step: 1, title: "Videz le sac ou bac à poussière", description: "Un sac rempli à plus de 75 % ou un bac compact réduit significativement l'aspiration. Videz complètement et testez.", icon: "🗑️" },
      { step: 2, title: "Nettoyez ou remplacez les filtres", description: "Retirez le filtre HEPA et le filtre moteur. Tapotez-les ou lavez-les (si lavable). Un filtre colmaté peut réduire l'aspiration de 50 %.", icon: "🧹" },
      { step: 3, title: "Vérifiez le tuyau et la brosse", description: "Déconnectez le tuyau et regardez à travers. Vérifiez aussi que la brosse rotative n'est pas bloquée par des cheveux ou des fils.", icon: "🔍" },
      { step: 4, title: "Testez à l'embouchure directe", description: "Retirez le tuyau et testez l'aspiration directement au corps de l'aspirateur. Si l'aspiration est bonne sans tuyau, l'obstruction est dans le tuyau.", icon: "🖐️" },
    ],
    legalPoints: [
      { articleRef: "L217-4", relevance: "Un aspirateur dont la puissance d'aspiration est nettement insuffisante ne correspond pas à l'usage attendu. Cela peut constituer un défaut de conformité." },
      { articleRef: "L217-7", relevance: "Si la perte d'aspiration survient dans les 24 mois, le défaut est en principe présumé exister depuis la livraison." },
    ],
    faq: [
      { question: "Mon aspirateur a perdu 50 % de sa puissance en 8 mois, est-ce normal ?", answer: "Non. Une perte d'aspiration aussi marquée en si peu de temps, filtres propres et bac vidé, n'est pas normale. Cela peut indiquer un moteur défaillant couvert par la garantie légale." },
      { question: "Le vendeur dit que je dois acheter de nouveaux filtres, est-ce à ma charge ?", answer: "L'achat de filtres de remplacement fait partie de l'entretien normal. Mais si des filtres neufs ne résolvent pas le problème, la panne est interne et le vendeur doit en principe intervenir sous garantie." },
      { question: "Mon aspirateur robot aspire mal depuis la dernière mise à jour, est-ce couvert ?", answer: "Une mise à jour logicielle qui dégrade les performances peut constituer un défaut de conformité. Le logiciel fait partie du produit vendu. Contactez le vendeur en décrivant la chronologie du problème." },
    ],
    whenToClaimWarranty: "Si l'aspiration reste faible malgré des filtres propres et un bac vide, et que l'appareil a moins de 2 ans, contactez le vendeur. Précisez que vous avez effectué toutes les vérifications d'entretien.",
    whenNotCovered: "Une perte d'aspiration due à un filtre encrassé jamais nettoyé, un sac non changé, ou l'aspiration de matériaux inadaptés (liquides, gravats) pourrait être considérée comme un défaut d'entretien.",
  },
  {
    problemSlug: "ne-sallume-plus",
    applianceSlug: "panne-aspirateur-garantie",
    seoTitle: "Aspirateur ne s'allume plus — Garantie et solutions",
    seoDescription: "Votre aspirateur ne s'allume plus ? Filaire ou sans fil, diagnostic des causes et droits de garantie légale. Mail de réclamation gratuit.",
    seoKeywords: ["aspirateur ne s'allume plus", "panne aspirateur sans fil", "aspirateur ne démarre plus garantie"],
    summaryLine: "Un aspirateur qui ne s'allume plus du tout, qu'il soit filaire ou sans fil, est inutilisable et relève en principe de la garantie légale.",
    heroDescription: "Vous appuyez sur le bouton de mise en marche de votre aspirateur et rien ne se passe. Aucun bruit de moteur, aucun voyant. Pour un modèle sans fil, la batterie semble chargée mais l'appareil reste inerte. Pour un modèle filaire, le câble semble en bon état.\n\nSur les aspirateurs sans fil, cette panne provient souvent d'une batterie défectueuse, d'un circuit de charge défaillant, ou d'un bouton poussoir usé. Sur les modèles filaires, c'est généralement le moteur, un interrupteur interne ou un câble sectionné.\n\nUn aspirateur qui ne s'allume plus du tout est totalement inutilisable. Si l'appareil a moins de 2 ans, cela constitue en principe un défaut de conformité majeur.",
    diagnosticSteps: [
      { step: 1, title: "Pour un sans-fil : vérifiez la charge", description: "Branchez le chargeur et attendez 30 minutes. Si aucun voyant de charge ne s'allume, le problème peut venir du chargeur ou de la batterie.", icon: "🔋" },
      { step: 2, title: "Pour un filaire : testez la prise", description: "Branchez l'aspirateur sur une autre prise. Vérifiez visuellement le câble sur toute sa longueur pour détecter une coupure.", icon: "🔌" },
      { step: 3, title: "Essayez un autre chargeur (sans fil)", description: "Si vous avez accès à un chargeur compatible, testez-le. Un chargeur défectueux empêche la recharge et donc le démarrage.", icon: "⚡" },
      { step: 4, title: "Vérifiez le bouton et les sécurités", description: "Certains aspirateurs ne démarrent pas si le bac n'est pas correctement encliqueté ou si un filtre est absent.", icon: "🔍" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Un aspirateur qui ne s'allume plus ne remplit aucune de ses fonctions. Cela constitue en principe un défaut de conformité majeur." },
      { articleRef: "L217-8", relevance: "Vous avez en principe le choix entre réparation et remplacement. Pour un aspirateur compact, le remplacement peut être plus pratique." },
    ],
    faq: [
      { question: "Mon aspirateur sans fil ne charge plus après 10 mois, est-ce la batterie ?", answer: "Probablement, mais cela peut aussi être le chargeur. Dans les deux cas, si l'appareil a moins de 2 ans, le vendeur doit en principe prendre en charge le diagnostic et la réparation sans frais." },
      { question: "Le vendeur dit que la batterie est un consommable non garanti, est-ce vrai ?", answer: "Non. La batterie fait partie intégrante du produit. Si elle tombe en panne prématurément (moins de 2 ans), c'est en principe un défaut de conformité. L'usure normale de capacité est différente d'une panne totale." },
      { question: "Mon aspirateur robot ne s'allume plus après une mise à jour, que faire ?", answer: "Une mise à jour qui rend l'appareil inutilisable est un défaut de conformité. Le logiciel fait partie du produit. Contactez le vendeur en précisant que le problème est apparu après la mise à jour." },
    ],
    whenToClaimWarranty: "Un aspirateur qui ne s'allume plus est totalement inutilisable. Si l'appareil a moins de 2 ans, quel que soit le type (filaire, sans fil, robot), vous pouvez en principe faire jouer la garantie légale.",
    whenNotCovered: "Si la panne résulte d'une immersion dans l'eau (sauf modèle étanche), d'une chute violente visible, ou de l'utilisation d'un chargeur non officiel ayant endommagé la batterie, le vendeur pourrait contester.",
  },
  {
    problemSlug: "bruit-excessif",
    applianceSlug: "panne-aspirateur-garantie",
    seoTitle: "Aspirateur trop bruyant — Diagnostic et garantie",
    seoDescription: "Votre aspirateur fait un bruit excessif ou inhabituel ? Diagnostic, solutions et droits de garantie légale. Mail de réclamation gratuit.",
    seoKeywords: ["aspirateur trop bruyant", "bruit aspirateur anormal", "aspirateur bruyant garantie"],
    summaryLine: "Un aspirateur devenu anormalement bruyant peut souffrir d'un moteur usé ou d'une hélice endommagée, souvent couvert par la garantie si l'appareil est récent.",
    heroDescription: "Votre aspirateur est devenu beaucoup plus bruyant qu'à l'achat. Le bruit est devenu si fort qu'il est difficile de l'utiliser sans gêne, ou il émet un sifflement aigu, un raclement ou un bourdonnement inhabituel.\n\nLes causes principales sont un moteur dont les charbons s'usent (bruit de crépitement), une hélice de ventilation endommagée ou déséquilibrée, un objet coincé dans le conduit d'aspiration, ou des roulements moteur en fin de vie.\n\nUn aspirateur dont le niveau sonore augmente significativement par rapport à l'état neuf peut présenter un défaut de conformité, notamment si le niveau dépasse les décibels annoncés par le fabricant.",
    diagnosticSteps: [
      { step: 1, title: "Vérifiez le tuyau et les conduits", description: "Un objet partiellement coincé (bouchon, jouet, gros amas de poussière) peut provoquer un sifflement ou un bruit de vibration.", icon: "🔍" },
      { step: 2, title: "Inspectez la brosse rotative", description: "Des cheveux, fils ou élastiques enroulés autour de la brosse la font forcer et générer un bruit de frottement. Nettoyez-la avec des ciseaux.", icon: "✂️" },
      { step: 3, title: "Nettoyez les filtres", description: "Un filtre très encrassé fait forcer le moteur, ce qui augmente le bruit et la consommation. Nettoyez ou remplacez les filtres.", icon: "🧹" },
      { step: 4, title: "Comparez avec les spécifications", description: "Vérifiez le niveau sonore annoncé sur la fiche produit (en dB). Si le bruit semble nettement supérieur, c'est un argument pour la réclamation.", icon: "📋" },
    ],
    legalPoints: [
      { articleRef: "L217-5", relevance: "Le niveau sonore fait partie des caractéristiques attendues. Un aspirateur nettement plus bruyant que les spécifications annoncées peut présenter un défaut de conformité objectif." },
      { articleRef: "L217-4", relevance: "Un aspirateur dont le bruit rend l'utilisation pénible ne correspond pas à l'usage attendu d'un produit de ce type." },
    ],
    faq: [
      { question: "Mon aspirateur est devenu 2 fois plus bruyant en 6 mois, est-ce un défaut ?", answer: "En principe, oui. Une augmentation significative du bruit en quelques mois suggère un problème mécanique (moteur, hélice). Si les filtres sont propres et le tuyau dégagé, contactez le vendeur si l'appareil a moins de 2 ans." },
      { question: "L'aspirateur siffle aigu quand j'aspire, est-ce grave ?", answer: "Un sifflement aigu peut indiquer une fuite d'air (tuyau percé, joint usé) ou un conduit partiellement bouché. Vérifiez les raccords et le tuyau. Si le problème est interne, cela relève en principe de la garantie." },
      { question: "Le vendeur dit que le bruit dépend de la surface (carrelage vs moquette), a-t-il raison ?", answer: "Le bruit varie légèrement selon la surface, mais un changement radical par rapport à l'état neuf n'est pas normal. Si le bruit est excessif sur toutes les surfaces, insistez sur le défaut de conformité." },
    ],
    whenToClaimWarranty: "Si le bruit a augmenté significativement par rapport à l'état neuf, malgré des filtres propres et un tuyau dégagé, et que l'appareil a moins de 2 ans, contactez le vendeur. Une vidéo comparant le bruit actuel aux décibels annoncés est un bon argument.",
    whenNotCovered: "Un bruit causé par l'aspiration de petits objets durs (cailloux, vis) qui endommagent l'hélice, ou par un filtre jamais nettoyé forçant le moteur, pourrait être considéré comme un défaut d'utilisation.",
  },
  {
    problemSlug: "batterie-ne-tient-plus",
    applianceSlug: "panne-aspirateur-garantie",
    seoTitle: "Batterie aspirateur sans fil ne tient plus — Garantie",
    seoDescription: "La batterie de votre aspirateur sans fil ne tient plus ? Droits de garantie, diagnostic et modèle de réclamation gratuit.",
    seoKeywords: ["batterie aspirateur ne tient plus", "autonomie aspirateur sans fil", "batterie aspirateur garantie"],
    summaryLine: "Une batterie d'aspirateur sans fil qui ne tient plus après quelques mois peut constituer un défaut de conformité couvert par la garantie légale.",
    heroDescription: "Votre aspirateur sans fil tenait 30 à 60 minutes à l'achat, et maintenant il s'éteint au bout de 5 à 10 minutes. L'autonomie a chuté de manière drastique en quelques mois seulement, rendant le nettoyage d'un appartement impossible en une seule charge.\n\nCette dégradation rapide peut résulter d'une batterie de mauvaise qualité, de cellules lithium-ion défectueuses, ou d'un circuit de gestion de charge mal calibré qui ne protège pas correctement la batterie contre les surcharges ou décharges profondes.\n\nUne batterie est un composant intégral du produit. Si sa dégradation est anormalement rapide (perte de plus de 50 % d'autonomie en moins de 2 ans), cela peut en principe constituer un défaut de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Mesurez l'autonomie réelle", description: "Chargez complètement puis chronométrez l'utilisation en mode normal (pas turbo). Comparez au temps annoncé par le fabricant.", icon: "⏱️" },
      { step: 2, title: "Vérifiez le chargeur", description: "Un chargeur défectueux peut ne pas recharger complètement la batterie. Vérifiez que le voyant de charge s'allume et s'éteint correctement.", icon: "🔌" },
      { step: 3, title: "Testez en mode normal uniquement", description: "Le mode turbo/boost consomme 3 à 5 fois plus. Si l'autonomie est correcte en mode normal, le problème peut être un usage intensif du turbo.", icon: "💨" },
      { step: 4, title: "Notez la date d'achat et l'autonomie annoncée", description: "Préparez ces informations pour votre réclamation. L'écart entre l'autonomie promise et l'autonomie réelle est votre argument principal.", icon: "📝" },
    ],
    legalPoints: [
      { articleRef: "L217-4", relevance: "L'autonomie annoncée fait partie des caractéristiques du produit. Un écart majeur entre l'autonomie promise et réelle peut constituer un défaut de conformité." },
      { articleRef: "L217-3", relevance: "La batterie fait partie intégrante du produit vendu. Sa dégradation prématurée peut être considérée comme un défaut de conformité au sens de cet article." },
    ],
    faq: [
      { question: "Mon aspirateur Dyson ne tient plus que 5 minutes après 1 an, est-ce un défaut ?", answer: "Si l'autonomie annoncée était de 30-60 minutes et qu'elle est tombée à 5 minutes en mode normal, c'est en principe un défaut de conformité. Contactez le vendeur (pas Dyson directement) pour faire jouer la garantie légale." },
      { question: "Le vendeur dit que la batterie est un consommable, a-t-il raison ?", answer: "Non. La batterie fait partie intégrante du produit et est couverte par la garantie légale. Une usure normale réduit l'autonomie de 10-20 % sur 2 ans, pas de 80 %. Une dégradation aussi rapide est un défaut." },
      { question: "Puis-je acheter une batterie de remplacement et me faire rembourser ?", answer: "Il est préférable de passer par le vendeur dans le cadre de la garantie. Si vous achetez une batterie vous-même, le vendeur pourrait arguer que vous avez renoncé à la garantie sur ce point." },
    ],
    whenToClaimWarranty: "Si l'autonomie a chuté de plus de 50 % en moins de 2 ans (en mode normal, pas turbo), contactez le vendeur avec le temps d'utilisation réel vs. annoncé. La batterie fait partie du produit et sa dégradation prématurée relève en principe de la garantie.",
    whenNotCovered: "Une batterie dégradée par l'utilisation exclusive du mode turbo, par une exposition prolongée à des températures extrêmes, ou par l'utilisation d'un chargeur non officiel pourrait ne pas être couverte.",
  },
  // =============================================
  // TÉLÉVISION — 4 problèmes
  // =============================================
  {
    problemSlug: "ecran-noir",
    applianceSlug: "panne-television-garantie",
    seoTitle: "TV écran noir mais son fonctionne — Garantie et recours",
    seoDescription: "Votre télévision affiche un écran noir mais le son fonctionne ? Diagnostic, droits de garantie et mail de réclamation gratuit.",
    seoKeywords: ["tv écran noir son fonctionne", "télévision écran noir", "panne écran tv garantie"],
    summaryLine: "Un écran noir avec le son qui fonctionne indique généralement un problème de rétroéclairage ou de carte T-Con, souvent couvert par la garantie légale.",
    heroDescription: "Votre télévision émet du son normalement, vous entendez les programmes, mais l'écran reste totalement noir. En approchant une lampe torche de l'écran, vous distinguez peut-être faiblement l'image, ce qui confirme un problème de rétroéclairage.\n\nCette panne classique provient le plus souvent de barres LED de rétroéclairage défaillantes, d'une carte d'alimentation qui ne fournit plus assez de tension aux LED, ou d'une carte T-Con (timing controller) en panne qui ne transmet plus le signal vidéo à la dalle.\n\nSur une télévision de moins de 2 ans, ce défaut rend l'appareil partiellement inutilisable et constitue en principe un défaut de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Test de la lampe torche", description: "Dans une pièce sombre, allumez la TV et approchez une lampe torche de l'écran. Si vous voyez faiblement l'image, c'est le rétroéclairage qui est en panne.", icon: "🔦" },
      { step: 2, title: "Vérifiez les câbles HDMI", description: "Débranchez et rebranchez le câble HDMI. Testez avec un autre câble. Un mauvais contact peut provoquer un écran noir.", icon: "🔌" },
      { step: 3, title: "Changez de source", description: "Passez de la box à un autre appareil (console, clé USB). Si l'image revient, le problème vient de la source, pas de la TV.", icon: "📺" },
      { step: 4, title: "Tentez un reset complet", description: "Débranchez la TV de la prise murale pendant 2 minutes (pas seulement la télécommande). Cela réinitialise les composants électroniques.", icon: "⏱️" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Une TV qui n'affiche plus d'image ne remplit pas sa fonction principale de diffusion visuelle. Cela constitue en principe un défaut de conformité." },
      { articleRef: "L217-12", relevance: "Si la réparation du rétroéclairage s'avère trop coûteuse par rapport au prix d'achat, vous pouvez en principe demander un remboursement partiel ou total." },
    ],
    faq: [
      { question: "Ma TV a un écran noir après 16 mois, le vendeur peut-il refuser la garantie ?", answer: "En principe, non. Dans les 24 mois, le défaut est présumé exister depuis l'achat. Le vendeur doit prouver que le problème vient de votre utilisation, ce qui est difficile pour un problème de rétroéclairage." },
      { question: "Le devis de réparation est de 400 € pour une TV achetée 600 €, quelles sont mes options ?", answer: "Si le coût de réparation est disproportionné, vous pouvez en principe demander le remplacement de la TV, une réduction du prix, ou la résolution du contrat (remboursement) selon l'article L217-12." },
      { question: "Le vendeur veut envoyer la TV en atelier pour 3 semaines, est-ce acceptable ?", answer: "Selon l'article L217-10, la réparation doit intervenir dans un délai raisonnable et sans inconvénient majeur. Si 3 semaines est trop long pour vous, vous pouvez demander un remplacement ou un prêt." },
    ],
    whenToClaimWarranty: "Un écran noir sur une TV de moins de 2 ans est un défaut majeur. Contactez le vendeur en précisant que le son fonctionne mais l'écran reste noir, ce qui pointe vers un problème de rétroéclairage ou de carte interne.",
    whenNotCovered: "Si l'écran noir résulte d'un choc physique visible (fissure sur la dalle), d'une surtension due à la foudre sans protection, ou d'un dommage par liquide, le vendeur pourrait contester.",
  },
  {
    problemSlug: "pixels-morts-lignes",
    applianceSlug: "panne-television-garantie",
    seoTitle: "TV pixels morts ou lignes sur l'écran — Garantie",
    seoDescription: "Votre TV affiche des pixels morts ou des lignes horizontales/verticales ? Diagnostic, droits de garantie et réclamation gratuite.",
    seoKeywords: ["tv pixels morts", "lignes écran télévision", "bandes tv garantie"],
    summaryLine: "Des pixels morts ou des lignes persistantes sur l'écran d'une TV signalent un défaut de dalle ou de carte vidéo, généralement couvert par la garantie.",
    heroDescription: "Des points colorés fixes (pixels morts), des lignes horizontales ou verticales, ou des bandes de couleur apparaissent sur l'écran de votre télévision. Ces défauts sont visibles en permanence, sur toutes les sources et tous les programmes.\n\nLes pixels morts résultent d'un défaut dans la matrice LCD ou OLED de la dalle. Les lignes horizontales ou verticales proviennent généralement d'une nappe de connexion défectueuse entre la dalle et la carte de traitement vidéo (T-Con), ou d'un driver de ligne intégré à la dalle lui-même.\n\nCes défauts visuels, s'ils sont apparus spontanément (sans choc), constituent en principe un défaut de conformité sur un appareil de moins de 2 ans.",
    diagnosticSteps: [
      { step: 1, title: "Vérifiez sur toutes les sources", description: "Changez de chaîne, de source HDMI, affichez le menu de la TV. Si les lignes/pixels sont présents partout, le défaut est bien dans la TV.", icon: "📺" },
      { step: 2, title: "Photographiez le défaut", description: "Prenez des photos claires du défaut (pixels morts, lignes). Ces preuves visuelles seront essentielles pour votre réclamation.", icon: "📸" },
      { step: 3, title: "Vérifiez si le défaut évolue", description: "Les lignes ou pixels morts s'aggravent-ils avec le temps ? Notez l'évolution, car un défaut qui s'étend confirme un problème de dalle.", icon: "📝" },
      { step: 4, title: "Tentez un reset usine", description: "Dans de rares cas, un bug logiciel peut simuler des artefacts. Un reset usine via les paramètres permet d'écarter cette hypothèse.", icon: "⚙️" },
    ],
    legalPoints: [
      { articleRef: "L217-5", relevance: "L'acheteur est en droit d'attendre un écran sans défaut visible. Des pixels morts ou des lignes ne correspondent pas aux qualités légitimement attendues d'une télévision." },
      { articleRef: "L217-7", relevance: "Dans les 24 mois, ces défauts de dalle sont en principe présumés exister depuis la livraison. Le vendeur doit prouver le contraire (choc, mauvaise utilisation)." },
    ],
    faq: [
      { question: "Le vendeur dit qu'un pixel mort est toléré par le fabricant, a-t-il raison ?", answer: "La politique du fabricant (tolérance de X pixels morts) ne s'applique qu'à la garantie commerciale. La garantie légale de conformité exige que le bien corresponde aux attentes légitimes. Un pixel mort visible est en principe un défaut." },
      { question: "Des lignes sont apparues progressivement sur mon écran, est-ce couvert ?", answer: "Oui, en principe. Des lignes qui apparaissent spontanément (sans choc) sur une TV de moins de 2 ans constituent un défaut de conformité. La progression du défaut renforce l'argument d'un problème de fabrication." },
      { question: "La réparation de la dalle coûte plus cher que la TV, que faire ?", answer: "Quand la réparation est disproportionnée par rapport au prix d'achat, vous pouvez en principe demander le remplacement de la TV ou un remboursement (article L217-12)." },
    ],
    whenToClaimWarranty: "Des pixels morts ou des lignes apparues spontanément sur une TV de moins de 2 ans justifient en principe une réclamation. Prenez des photos du défaut et notez quand il est apparu pour appuyer votre demande.",
    whenNotCovered: "Si le défaut résulte d'un choc physique (même léger, une pression forte sur l'écran), d'un burn-in OLED lié à une image statique prolongée, ou de l'utilisation dans un environnement avec des températures extrêmes, le vendeur pourrait contester.",
  },
  {
    problemSlug: "pas-de-son",
    applianceSlug: "panne-television-garantie",
    seoTitle: "TV sans son — Diagnostic et garantie légale",
    seoDescription: "Votre télévision n'a plus de son ? Image OK mais aucun audio ? Diagnostic des causes, droits de garantie et mail de réclamation gratuit.",
    seoKeywords: ["tv pas de son", "télévision muette", "son tv ne marche plus garantie"],
    summaryLine: "Une télévision qui affiche l'image mais n'émet plus de son peut présenter un défaut de haut-parleurs ou de carte audio, couvert par la garantie.",
    heroDescription: "L'image de votre télévision fonctionne parfaitement, mais aucun son ne sort des haut-parleurs intégrés. Le volume est monté, le mode muet est désactivé, et pourtant le silence persiste sur toutes les chaînes et sources.\n\nCe problème peut provenir de haut-parleurs internes défectueux, d'une carte audio ou d'un amplificateur en panne, d'un problème de connectique HDMI ARC (si la TV est reliée à une barre de son), ou d'un bug logiciel qui bloque la sortie audio.\n\nUne TV sans son est partiellement inutilisable. Si ce défaut apparaît spontanément sur un appareil de moins de 2 ans, il peut en principe relever de la garantie légale de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Vérifiez le volume et le mode muet", description: "Cela peut paraître basique, mais vérifiez le volume, le mode muet, et que la sortie audio est bien réglée sur 'haut-parleurs TV' (pas sur une barre de son inexistante).", icon: "🔊" },
      { step: 2, title: "Testez avec un casque", description: "Branchez un casque sur la prise jack de la TV (si disponible). Si le son passe par le casque, les haut-parleurs internes sont en cause.", icon: "🎧" },
      { step: 3, title: "Changez de source", description: "Testez le son sur différentes sources (box, USB, apps intégrées). Si le son fonctionne sur une source mais pas une autre, le problème vient de la connexion.", icon: "📺" },
      { step: 4, title: "Faites un reset usine", description: "Un bug logiciel peut couper la sortie audio. Le reset usine (dans paramètres > système) remet les réglages audio à zéro.", icon: "⚙️" },
    ],
    legalPoints: [
      { articleRef: "L217-4", relevance: "Une TV sans son ne correspond pas à l'usage attendu. La diffusion audio fait partie des fonctions essentielles d'une télévision." },
      { articleRef: "L217-10", relevance: "Si la prise en charge est acceptée, la réparation doit en principe intervenir dans les 30 jours et sans inconvénient majeur pour vous." },
    ],
    faq: [
      { question: "Le son a disparu après une mise à jour logicielle, est-ce couvert ?", answer: "Oui, en principe. Une mise à jour logicielle fait partie du produit. Si elle provoque une panne du son, c'est un défaut de conformité imputable au fabricant, et le vendeur en est responsable." },
      { question: "Le son grésille ou est déformé, est-ce aussi un défaut ?", answer: "Un son déformé, qui grésille ou qui coupe par intermittence est aussi un défaut de conformité si l'appareil a moins de 2 ans. Le son doit être de qualité conforme aux attentes légitimes." },
      { question: "J'utilise une barre de son, comment prouver que le problème vient de la TV ?", answer: "Débranchez la barre de son et testez les haut-parleurs intégrés de la TV. Si les haut-parleurs intégrés ne fonctionnent pas non plus, le problème vient bien de la TV." },
    ],
    whenToClaimWarranty: "Une absence totale de son ou un son très dégradé sur une TV de moins de 2 ans justifie en principe une réclamation. Précisez au vendeur que le problème existe sur toutes les sources et que le reset usine n'a rien changé.",
    whenNotCovered: "Si le problème de son vient uniquement du câble HDMI (remplaçable), d'un mauvais réglage de sortie audio, ou d'un périphérique externe défectueux (barre de son), la TV elle-même n'est pas en cause.",
  },
  {
    problemSlug: "ne-sallume-plus",
    applianceSlug: "panne-television-garantie",
    seoTitle: "Télévision ne s'allume plus — Garantie et recours",
    seoDescription: "Votre TV ne s'allume plus du tout ? Aucun voyant, écran noir total ? Diagnostic, droits de garantie et mail de réclamation gratuit.",
    seoKeywords: ["tv ne s'allume plus", "télévision morte", "panne alimentation tv garantie"],
    summaryLine: "Une télévision qui ne s'allume plus du tout signale un problème d'alimentation ou de carte mère, constituant en principe un défaut de conformité majeur.",
    heroDescription: "Votre télévision ne réagit plus du tout : pas de voyant de veille, pas de réaction à la télécommande ni au bouton physique, écran totalement éteint. L'appareil semble complètement mort.\n\nCette panne provient le plus souvent de la carte d'alimentation (condensateurs gonflés ou grillés, fusible interne), de la carte mère principale, ou plus rarement d'un problème de câble d'alimentation. Les surtensions et les micro-coupures de courant sont des causes fréquentes.\n\nUne télévision qui ne s'allume plus est totalement inutilisable. C'est un défaut de conformité majeur si l'appareil a moins de 2 ans.",
    diagnosticSteps: [
      { step: 1, title: "Vérifiez la prise et le câble", description: "Testez une autre prise murale. Vérifiez que le câble d'alimentation est bien enfoncé des deux côtés (mur et TV). Certaines TV ont un interrupteur à l'arrière.", icon: "🔌" },
      { step: 2, title: "Observez le voyant de veille", description: "Si le voyant rouge de veille est éteint, c'est un problème d'alimentation. S'il clignote, cela peut indiquer un code d'erreur (consultez le manuel).", icon: "🔴" },
      { step: 3, title: "Débranchez pendant 5 minutes", description: "Débranchez la TV complètement (pas juste éteindre). Attendez 5 minutes pour permettre aux condensateurs de se décharger, puis rebranchez.", icon: "⏱️" },
      { step: 4, title: "Essayez le bouton physique", description: "N'utilisez pas la télécommande. Appuyez directement sur le bouton power de la TV (souvent sous l'écran ou à l'arrière). Cela écarte un problème de télécommande.", icon: "👆" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Une TV qui ne s'allume plus ne peut remplir aucune de ses fonctions. C'est en principe un défaut de conformité majeur et incontestable." },
      { articleRef: "L217-8", relevance: "Vous avez en principe le choix entre réparation et remplacement. Pour une TV dont la carte d'alimentation est en cause, la réparation est souvent plus économique." },
    ],
    faq: [
      { question: "Ma TV est morte après un orage, est-ce couvert par la garantie ?", answer: "C'est un cas limite. Si votre installation est aux normes (parafoudre), une TV qui ne résiste pas à une surtension légère peut présenter un défaut. Mais une foudre directe est un événement de force majeure qui pourrait exonérer le vendeur." },
      { question: "Le voyant rouge clignote mais la TV ne s'allume pas, que faire ?", answer: "Un clignotement du voyant indique souvent un code d'erreur. Comptez le nombre de clignotements et consultez le manuel. Dans tous les cas, si l'appareil a moins de 2 ans, contactez le vendeur." },
      { question: "Le vendeur veut m'envoyer chez un réparateur agréé, est-ce normal ?", answer: "Le vendeur peut organiser la réparation via un tiers (réparateur agréé), mais il reste le responsable légal. Les frais doivent en principe être entièrement à sa charge." },
    ],
    whenToClaimWarranty: "Une TV qui ne s'allume plus du tout est le cas le plus clair de défaut de conformité. Si l'appareil a moins de 2 ans, contactez le vendeur sans attendre. Précisez qu'aucune manipulation (reset, changement de prise) n'a résolu le problème.",
    whenNotCovered: "Un dommage causé par la foudre (sans parafoudre), une surtension due à des travaux électriques dans le bâtiment, ou un dommage physique visible sur le câble d'alimentation pourrait être contesté.",
  },
  // =============================================
  // ORDINATEUR PORTABLE — 4 problèmes
  // =============================================
  {
    problemSlug: "batterie-ne-tient-plus",
    applianceSlug: "panne-ordinateur-portable-garantie",
    seoTitle: "Batterie PC portable ne tient plus — Garantie légale",
    seoDescription: "La batterie de votre ordinateur portable ne tient plus ? Droits de garantie, diagnostic et modèle de réclamation gratuit en 30 secondes.",
    seoKeywords: ["batterie pc portable ne tient plus", "autonomie ordinateur portable", "batterie laptop garantie"],
    summaryLine: "Une batterie de PC portable dont l'autonomie chute drastiquement en quelques mois peut constituer un défaut de conformité couvert par la garantie.",
    heroDescription: "Votre ordinateur portable tenait 6 à 8 heures à l'achat, et maintenant il s'éteint au bout d'une heure, voire moins. Vous devez rester branché en permanence, ce qui annule l'intérêt même d'un portable.\n\nCette dégradation rapide peut résulter de cellules de batterie lithium-ion défectueuses, d'un contrôleur de charge mal calibré qui provoque des surcharges ou des décharges profondes, ou plus rarement d'un composant du PC qui consomme anormalement (processeur, GPU).\n\nL'autonomie annoncée fait partie des caractéristiques essentielles d'un PC portable. Une chute de plus de 50 % en moins de 2 ans dépasse l'usure normale et peut en principe constituer un défaut de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Vérifiez l'état de la batterie dans le système", description: "Sur Windows, ouvrez un terminal et tapez 'powercfg /batteryreport'. Sur Mac, cliquez Pomme > À propos > Rapport système > Alimentation. Regardez la capacité actuelle vs. d'origine.", icon: "💻" },
      { step: 2, title: "Comptez les cycles de charge", description: "Le rapport batterie indique le nombre de cycles. Une batterie normale supporte 500-1000 cycles. Si la capacité chute avec peu de cycles, c'est un défaut.", icon: "🔄" },
      { step: 3, title: "Vérifiez la consommation en arrière-plan", description: "Un logiciel ou processus consommant beaucoup peut vider la batterie rapidement. Vérifiez le gestionnaire des tâches pour écarter cette cause.", icon: "📊" },
      { step: 4, title: "Testez avec le chargeur d'origine", description: "Un chargeur tiers sous-dimensionné peut ne pas recharger complètement. Utilisez le chargeur d'origine pour le diagnostic.", icon: "🔌" },
    ],
    legalPoints: [
      { articleRef: "L217-4", relevance: "L'autonomie annoncée est une caractéristique contractuelle. Un écart majeur entre l'autonomie promise et réelle peut constituer un défaut de conformité." },
      { articleRef: "L217-3", relevance: "La batterie est un composant intégral du produit. Sa dégradation anormale relève en principe de la garantie légale de conformité." },
    ],
    faq: [
      { question: "Mon PC portable ne tient plus que 45 minutes après 1 an, est-ce un défaut ?", answer: "Si l'autonomie annoncée était de 6-8h et qu'elle est tombée à 45 minutes en usage normal, c'est en principe un défaut de conformité. L'usure normale ne provoque pas une telle dégradation en 1 an." },
      { question: "Le SAV dit que la batterie est un consommable non garanti, est-ce vrai ?", answer: "Non. La garantie légale de conformité couvre le produit entier, batterie comprise. Un 'consommable' serait un élément à durée de vie courte connue (cartouche d'encre). Une batterie de PC doit en principe tenir plusieurs années." },
      { question: "J'ai laissé mon PC branché en permanence, est-ce ma faute ?", answer: "Les PC modernes gèrent la charge et protègent la batterie. Le fait de rester branché ne devrait pas dégrader la batterie en moins de 2 ans. Si c'est le cas, le système de gestion de charge peut être en cause, ce qui est un défaut." },
    ],
    whenToClaimWarranty: "Si l'autonomie a chuté de plus de 50 % en moins de 2 ans en usage normal, contactez le vendeur avec le rapport batterie (capacité d'origine vs. actuelle, nombre de cycles). C'est votre preuve principale.",
    whenNotCovered: "Si la batterie a subi des températures extrêmes prolongées, si un chargeur non officiel a été utilisé et a endommagé les cellules, ou si le rapport montre un nombre de cycles très élevé (usage intensif), le vendeur pourrait contester.",
  },
  {
    problemSlug: "ecran-defaillant",
    applianceSlug: "panne-ordinateur-portable-garantie",
    seoTitle: "Écran PC portable défaillant — Garantie et recours",
    seoDescription: "L'écran de votre PC portable a des problèmes (pixels morts, scintillement, charnière cassée) ? Droits de garantie et réclamation gratuite.",
    seoKeywords: ["écran pc portable défaillant", "pixels morts laptop", "charnière pc portable cassée garantie"],
    summaryLine: "Un écran de PC portable défaillant (pixels morts, scintillement, charnière cassée) relève en principe de la garantie légale s'il n'y a pas eu de choc.",
    heroDescription: "L'écran de votre ordinateur portable présente des défauts visuels : pixels morts permanents, scintillement (flickering), bandes de couleur, ou l'écran s'éteint à certains angles d'ouverture. Dans le pire des cas, la charnière s'est fissurée ou cassée, rendant l'ouverture/fermeture du PC difficile.\n\nCes problèmes proviennent de la dalle LCD/OLED elle-même (pixels morts, taches), de la nappe vidéo qui relie la carte mère à l'écran (scintillement selon l'angle), ou des charnières qui se fragilisent prématurément.\n\nSi ces défauts apparaissent sans choc ni chute sur un appareil de moins de 2 ans, ils constituent en principe un défaut de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Testez avec un écran externe", description: "Branchez un écran externe (HDMI/USB-C). Si l'image est parfaite sur l'écran externe, le problème est bien la dalle ou la nappe du PC.", icon: "🖥️" },
      { step: 2, title: "Bougez l'écran lentement", description: "Ouvrez et fermez le capot lentement. Si l'image scintille ou disparaît à certains angles, c'est probablement la nappe vidéo qui est endommagée.", icon: "📐" },
      { step: 3, title: "Photographiez les défauts", description: "Prenez des photos claires des pixels morts, lignes, ou fissures de charnière. Ces preuves sont essentielles pour la réclamation.", icon: "📸" },
      { step: 4, title: "Vérifiez les pilotes graphiques", description: "Mettez à jour les pilotes de la carte graphique. Dans de rares cas, un bug logiciel peut provoquer des artefacts visuels.", icon: "💻" },
    ],
    legalPoints: [
      { articleRef: "L217-5", relevance: "Un écran de PC doit offrir un affichage sans défaut visible. Des pixels morts ou un scintillement ne correspondent pas aux qualités légitimement attendues." },
      { articleRef: "L217-11", relevance: "Le remplacement de la dalle ou la réparation de la charnière doit en principe être effectué sans frais, y compris les frais d'envoi." },
    ],
    faq: [
      { question: "La charnière de mon PC s'est cassée après 18 mois d'utilisation normale, est-ce couvert ?", answer: "En principe, oui. Une charnière qui casse en usage normal en 18 mois est un défaut de fabrication. La solidité fait partie des qualités attendues d'un PC portable, conçu pour être ouvert et fermé quotidiennement." },
      { question: "L'écran scintille uniquement sur batterie, est-ce un défaut ?", answer: "Un scintillement sur batterie peut indiquer un problème de gestion de l'alimentation écran. Si la mise à jour des pilotes ne résout rien, c'est en principe un défaut matériel couvert par la garantie." },
      { question: "Le vendeur dit que les pixels morts sont 'dans la norme', que faire ?", answer: "La politique de tolérance du fabricant ne s'applique qu'à la garantie commerciale. La garantie légale exige un produit conforme aux attentes. Insistez en citant l'article L217-5." },
    ],
    whenToClaimWarranty: "Des défauts d'écran apparus sans choc (pixels morts, scintillement, charnière fragilisée) sur un PC de moins de 2 ans justifient en principe une réclamation. Documentez le défaut avec photos et vidéos.",
    whenNotCovered: "Si l'écran est fissuré suite à une chute, si la charnière est cassée par une ouverture forcée au-delà de l'angle maximal, ou si un liquide a coulé sur l'écran, le vendeur pourrait invoquer une mauvaise utilisation.",
  },
  {
    problemSlug: "surchauffe-arrets",
    applianceSlug: "panne-ordinateur-portable-garantie",
    seoTitle: "PC portable surchauffe et s'éteint — Garantie",
    seoDescription: "Votre PC portable surchauffe et s'éteint tout seul ? Diagnostic, droits de garantie légale et modèle de réclamation gratuit.",
    seoKeywords: ["pc portable surchauffe", "ordinateur s'éteint tout seul", "surchauffe laptop garantie"],
    summaryLine: "Un PC portable qui surchauffe et s'éteint de manière répétée peut présenter un défaut de conception thermique, potentiellement couvert par la garantie.",
    heroDescription: "Votre ordinateur portable chauffe excessivement au point de devenir inconfortable sur les genoux. Le ventilateur tourne en permanence à plein régime, et l'appareil finit par s'éteindre brutalement sans prévenir, provoquant la perte de votre travail non sauvegardé.\n\nCe comportement peut provenir d'un ventilateur encrassé ou défaillant, d'une pâte thermique d'usine mal appliquée ou de mauvaise qualité, d'un système de dissipation thermique sous-dimensionné, ou de composants (CPU, GPU) qui consomment plus que prévu suite à un défaut.\n\nDes surchauffes répétées et des arrêts inopinés dès les premiers mois d'utilisation signalent un problème de conception ou de fabrication qui peut en principe relever de la garantie légale.",
    diagnosticSteps: [
      { step: 1, title: "Surveillez les températures", description: "Installez HWMonitor (gratuit) pour voir la température du processeur. Au-delà de 90°C en charge normale, c'est anormal. Au-delà de 100°C, le PC s'éteint par sécurité.", icon: "🌡️" },
      { step: 2, title: "Nettoyez les grilles de ventilation", description: "Utilisez une bombe à air comprimé pour souffler la poussière des grilles (PC éteint). Un ventilateur obstrué réduit drastiquement le refroidissement.", icon: "💨" },
      { step: 3, title: "Vérifiez l'environnement d'utilisation", description: "N'utilisez pas le PC sur un lit, coussin ou couverture qui bloque la ventilation. Utilisez une surface plane et dure.", icon: "🖥️" },
      { step: 4, title: "Notez quand les arrêts surviennent", description: "L'arrêt survient-il en jeu, en bureautique, ou même au repos ? Un arrêt en bureautique légère est clairement anormal. Notez la fréquence et les circonstances.", icon: "📝" },
    ],
    legalPoints: [
      { articleRef: "L217-4", relevance: "Un PC qui s'éteint de manière répétée n'est pas propre à l'usage attendu. La stabilité de fonctionnement est une qualité essentielle d'un ordinateur." },
      { articleRef: "L217-5", relevance: "Le consommateur est en droit d'attendre un PC qui ne surchauffe pas en usage normal. Un défaut de conception thermique ne correspond pas aux qualités attendues." },
    ],
    faq: [
      { question: "Mon PC neuf surchauffe dès les premiers jours, est-ce un défaut d'usine ?", answer: "Probablement. Une surchauffe dès les premiers jours pointe vers une pâte thermique mal appliquée ou un système de refroidissement défectueux. Ne tentez pas de le réparer vous-même, contactez le vendeur immédiatement." },
      { question: "Le PC s'éteint uniquement en jeu, est-ce quand même un défaut ?", answer: "Si le PC est vendu comme un 'PC gaming' ou que ses spécifications permettent le jeu, il doit pouvoir le supporter sans s'éteindre. C'est en principe un défaut de conformité." },
      { question: "Le vendeur me dit de remettre de la pâte thermique, est-ce à moi de le faire ?", answer: "Non. L'ouverture du PC et le remplacement de la pâte thermique relèvent d'une réparation professionnelle. Si l'appareil est sous garantie, c'est au vendeur de prendre en charge cette intervention." },
    ],
    whenToClaimWarranty: "Des surchauffes et arrêts répétés en usage normal sur un PC de moins de 2 ans justifient en principe une réclamation. Fournissez les logs de température et la fréquence des arrêts comme preuves.",
    whenNotCovered: "Si la surchauffe résulte d'un usage systématique sur surface bloquant la ventilation, d'un overclocking manuel, ou d'un démontage par l'utilisateur ayant perturbé le système de refroidissement, le vendeur pourrait contester.",
  },
  {
    problemSlug: "clavier-touchpad-panne",
    applianceSlug: "panne-ordinateur-portable-garantie",
    seoTitle: "Clavier ou touchpad PC portable en panne — Garantie",
    seoDescription: "Le clavier ou le touchpad de votre PC portable ne fonctionne plus ? Diagnostic, droits de garantie et mail de réclamation gratuit.",
    seoKeywords: ["clavier pc portable ne marche plus", "touchpad laptop panne", "clavier ordinateur portable garantie"],
    summaryLine: "Un clavier ou touchpad de PC portable qui ne répond plus sans raison apparente constitue en principe un défaut de conformité couvert par la garantie.",
    heroDescription: "Certaines touches de votre clavier ne répondent plus, le touchpad ne détecte plus vos mouvements, ou pire, le clavier entier est inerte. Vous êtes contraint d'utiliser un clavier et une souris externes, ce qui annule la portabilité de votre PC.\n\nLes causes incluent une nappe de connexion défectueuse (le câble plat qui relie le clavier à la carte mère), un contrôleur de clavier intégré défaillant, une oxydation des contacts (même sans liquide renversé visible), ou une usure prématurée des membranes.\n\nSi le problème survient sans qu'un liquide ait été renversé et que le PC a moins de 2 ans, il s'agit en principe d'un défaut de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Identifiez l'étendue du problème", description: "Testez toutes les touches dans un éditeur de texte. Certaines touches marchent et d'autres non ? Ou le clavier entier est mort ? Notez précisément quelles touches sont affectées.", icon: "⌨️" },
      { step: 2, title: "Vérifiez les pilotes", description: "Allez dans le Gestionnaire de périphériques > Claviers. Désinstallez le pilote et redémarrez. Windows le réinstallera automatiquement.", icon: "💻" },
      { step: 3, title: "Testez en mode sans échec", description: "Redémarrez en mode sans échec. Si le clavier fonctionne en mode sans échec, c'est un problème logiciel. Sinon, c'est matériel.", icon: "⚙️" },
      { step: 4, title: "Branchez un clavier USB externe", description: "Si un clavier externe fonctionne parfaitement, le problème est bien le clavier intégré du PC (nappe, contrôleur, membrane).", icon: "🔌" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Le clavier et le touchpad sont des composants essentiels d'un PC portable. Leur défaillance empêche l'utilisation normale du produit et constitue en principe un défaut de conformité." },
      { articleRef: "L217-7", relevance: "Dans les 24 mois, le défaut est en principe présumé exister depuis la livraison. Le vendeur doit prouver que vous avez causé le problème." },
    ],
    faq: [
      { question: "Quelques touches ne marchent plus après 6 mois, est-ce un défaut ?", answer: "En principe, oui. Des touches qui cessent de fonctionner en 6 mois sans dommage visible signalent un défaut de fabrication (nappe, membrane). Contactez le vendeur pour une prise en charge sous garantie." },
      { question: "Le vendeur dit que j'ai dû renverser du liquide, comment me défendre ?", answer: "Dans les 24 mois, c'est en principe au vendeur de prouver qu'un liquide a été renversé. Un technicien peut le vérifier en inspectant les indicateurs d'humidité internes. Si vous n'avez rien renversé, maintenez votre position." },
      { question: "Le touchpad saute et fait des clics fantômes, est-ce couvert ?", answer: "Un touchpad erratique (sauts, clics fantômes, zones mortes) est un défaut de fonctionnement qui peut relever de la garantie si l'appareil a moins de 2 ans et qu'aucun dommage physique n'est en cause." },
    ],
    whenToClaimWarranty: "Un clavier ou touchpad défaillant sans cause apparente (pas de liquide, pas de choc) sur un PC de moins de 2 ans justifie en principe une réclamation. Décrivez précisément les symptômes et les touches affectées.",
    whenNotCovered: "Si le clavier a été endommagé par un liquide renversé, un choc physique, ou un arrachement de touche par l'utilisateur, le vendeur peut invoquer une mauvaise utilisation.",
  },
  // =============================================
  // SMARTPHONE — 4 problèmes
  // =============================================
  {
    problemSlug: "batterie-se-degrade",
    applianceSlug: "panne-smartphone-garantie",
    seoTitle: "Batterie smartphone se dégrade trop vite — Garantie",
    seoDescription: "La batterie de votre smartphone se dégrade anormalement vite ? Droits de garantie légale, diagnostic et mail de réclamation gratuit.",
    seoKeywords: ["batterie smartphone se dégrade", "autonomie téléphone diminue", "batterie iPhone Android garantie"],
    summaryLine: "Une batterie de smartphone qui perd plus de 50 % d'autonomie en moins de 2 ans dépasse l'usure normale et peut relever de la garantie légale.",
    heroDescription: "Votre smartphone tenait facilement la journée à l'achat, et maintenant il est à plat en milieu d'après-midi. Vous devez le recharger deux ou trois fois par jour, ou la batterie passe de 30 % à 0 % d'un coup. Certains utilisateurs constatent aussi un gonflement visible du dos du téléphone.\n\nCette dégradation rapide peut résulter de cellules lithium-ion défectueuses, d'un contrôleur de charge mal calibré, d'une mise à jour logicielle qui augmente la consommation, ou d'un composant matériel en court-circuit partiel qui draine la batterie.\n\nUne perte d'autonomie de plus de 50 % en moins de 2 ans n'est pas de l'usure normale. Si le téléphone ne tient plus une demi-journée en usage classique, cela peut en principe constituer un défaut de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Vérifiez l'état de santé de la batterie", description: "Sur iPhone : Réglages > Batterie > État de la batterie. Sur Android : utilisez l'app AccuBattery. En dessous de 80 % de capacité en moins de 2 ans, c'est anormal.", icon: "🔋" },
      { step: 2, title: "Identifiez les apps énergivores", description: "Allez dans Réglages > Batterie pour voir quelles apps consomment le plus. Une app qui consomme 40 %+ en arrière-plan est suspecte.", icon: "📊" },
      { step: 3, title: "Vérifiez si la batterie gonfle", description: "Un gonflement (dos du téléphone bombé, écran qui se décolle) est un défaut grave et potentiellement dangereux. Cessez l'utilisation et réclamez immédiatement.", icon: "⚠️" },
      { step: 4, title: "Testez après un redémarrage complet", description: "Un redémarrage élimine les processus bloqués en mémoire. Si l'autonomie s'améliore nettement après redémarrage, le problème peut être logiciel.", icon: "🔄" },
    ],
    legalPoints: [
      { articleRef: "L217-4", relevance: "L'autonomie est une caractéristique essentielle d'un smartphone. Une dégradation prématurée ne correspond pas à l'usage attendu d'un bien de ce type." },
      { articleRef: "L217-3", relevance: "La batterie fait partie intégrante du produit. Sa défaillance prématurée constitue en principe un défaut de conformité du produit entier." },
    ],
    faq: [
      { question: "Mon iPhone indique 75 % de capacité après 14 mois, est-ce un défaut ?", answer: "Apple considère une batterie en bon état au-dessus de 80 %. À 75 % après 14 mois, la dégradation est plus rapide que la normale. Vous pouvez en principe faire valoir la garantie légale auprès du vendeur." },
      { question: "La batterie de mon Android gonfle, est-ce dangereux ?", answer: "Oui, une batterie gonflée présente un risque d'incendie. Cessez l'utilisation immédiatement et contactez le vendeur en urgence. C'est un défaut de sécurité majeur, couvert sans discussion par la garantie." },
      { question: "Mon téléphone chauffe beaucoup pendant la charge, est-ce lié ?", answer: "Une chaleur excessive pendant la charge peut indiquer un problème de batterie ou de circuit de charge. Si le téléphone dépasse 45°C pendant la charge, c'est anormal et peut accélérer la dégradation." },
    ],
    whenToClaimWarranty: "Si la batterie a perdu plus de 20 % de capacité en moins de 2 ans (vérifiable dans les réglages), ou si elle gonfle, contactez le vendeur immédiatement. Fournissez une capture d'écran de l'état de santé de la batterie.",
    whenNotCovered: "Si un chargeur non certifié a été utilisé (risque de surcharge), si le téléphone a été exposé à des températures extrêmes de façon prolongée, ou si la batterie a été remplacée par un tiers non agréé, le vendeur pourrait contester.",
  },
  {
    problemSlug: "ecran-ne-repond-plus",
    applianceSlug: "panne-smartphone-garantie",
    seoTitle: "Écran smartphone ne répond plus — Garantie et recours",
    seoDescription: "L'écran de votre smartphone ne répond plus au toucher ou affiche des artefacts ? Diagnostic, droits de garantie et réclamation gratuite.",
    seoKeywords: ["écran smartphone ne répond plus", "tactile téléphone défaillant", "artefacts écran smartphone garantie"],
    summaryLine: "Un écran de smartphone qui ne répond plus au toucher ou affiche des artefacts constitue un défaut majeur, en principe couvert par la garantie.",
    heroDescription: "L'écran de votre smartphone ne réagit plus à vos doigts, ne détecte que certaines zones, ou affiche des couleurs anormales, des lignes et des artefacts visuels. Dans certains cas, l'écran s'allume normalement mais le tactile est totalement inerte.\n\nCes problèmes peuvent provenir d'une dalle tactile défectueuse, d'une nappe de connexion entre la dalle et la carte mère endommagée, d'un contrôleur tactile défaillant, ou d'un problème logiciel du firmware de l'écran.\n\nSi ces défauts apparaissent sans chute ni choc (spontanément), ils constituent en principe un défaut de conformité majeur, car l'écran est le composant principal d'interaction d'un smartphone.",
    diagnosticSteps: [
      { step: 1, title: "Redémarrez le téléphone", description: "Un bug logiciel peut bloquer le tactile. Maintenez le bouton power 10-15 secondes pour forcer le redémarrage.", icon: "🔄" },
      { step: 2, title: "Retirez la protection d'écran", description: "Un film de protection mal posé ou dégradé peut interférer avec le tactile. Retirez-le temporairement pour tester.", icon: "📱" },
      { step: 3, title: "Testez le mode diagnostic tactile", description: "Sur Android, tapez *#0*# dans le clavier téléphone pour accéder au mode test. Testez la zone tactile pour identifier les zones mortes.", icon: "🔍" },
      { step: 4, title: "Vérifiez si l'écran a un impact invisible", description: "Examinez l'écran sous un angle rasant avec une lumière. Des micro-fissures invisibles de face peuvent endommager le tactile.", icon: "🔦" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "L'écran tactile est le composant d'interaction principal d'un smartphone. Sa défaillance rend l'appareil en grande partie inutilisable, ce qui constitue en principe un défaut de conformité." },
      { articleRef: "L217-8", relevance: "Vous avez en principe le choix entre réparation (remplacement de la dalle) et remplacement du téléphone si la réparation est disproportionnée." },
    ],
    faq: [
      { question: "L'écran de mon smartphone a des zones mortes sans raison, est-ce couvert ?", answer: "En principe, oui. Des zones mortes tactiles apparues spontanément sur un téléphone de moins de 2 ans constituent un défaut de conformité. Le vendeur doit en principe prendre en charge la réparation." },
      { question: "L'écran affiche des lignes vertes, est-ce un défaut d'usine ?", answer: "Des lignes vertes (ou roses) apparaissant spontanément sont un défaut de dalle OLED reconnu. C'est un défaut de conformité qui relève de la garantie, même si le téléphone n'a subi aucun choc." },
      { question: "Le vendeur exige de voir le téléphone avant d'accepter la garantie, est-ce normal ?", answer: "Oui, le vendeur peut examiner le téléphone pour vérifier l'absence de choc ou de dommage physique. C'est normal, mais il ne peut pas refuser la garantie sans preuve que le défaut est de votre fait." },
    ],
    whenToClaimWarranty: "Un écran qui ne répond plus ou affiche des artefacts sans choc sur un téléphone de moins de 2 ans est un cas clair de réclamation. Précisez au vendeur que l'appareil n'a subi aucune chute.",
    whenNotCovered: "Si l'écran a été fissuré par une chute (même si c'est micro-fissure invisible), si le téléphone a été immergé (sans certification IP), ou si l'écran a été réparé par un tiers non agréé, le vendeur pourrait contester.",
  },
  {
    problemSlug: "ralentissements-bugs",
    applianceSlug: "panne-smartphone-garantie",
    seoTitle: "Smartphone lent et bugge — Garantie et solutions",
    seoDescription: "Votre smartphone est devenu très lent avec des bugs fréquents ? Diagnostic, droits de garantie légale et mail de réclamation gratuit.",
    seoKeywords: ["smartphone lent", "téléphone bugge", "ralentissement smartphone garantie"],
    summaryLine: "Des ralentissements sévères et bugs fréquents sur un smartphone récent peuvent indiquer un défaut matériel ou logiciel couvert par la garantie.",
    heroDescription: "Votre smartphone est devenu extrêmement lent : les applications mettent plusieurs secondes à s'ouvrir, l'interface saccade, les apps se ferment toutes seules, et le téléphone se fige régulièrement. Ces problèmes rendent l'utilisation quotidienne pénible.\n\nLes causes techniques incluent une mémoire flash défectueuse (ralentissements en lecture/écriture), un processeur qui bride ses performances à cause d'une surchauffe chronique, un problème de RAM défaillante (fermetures d'apps), ou une mise à jour logicielle mal optimisée pour votre modèle.\n\nSi ces ralentissements apparaissent sur un téléphone récent (moins de 2 ans) et persistent après une réinitialisation d'usine, ils signalent probablement un défaut matériel couvert par la garantie.",
    diagnosticSteps: [
      { step: 1, title: "Vérifiez l'espace de stockage", description: "Un stockage plein à plus de 90 % ralentit le téléphone. Supprimez les fichiers inutiles et vérifiez si les performances s'améliorent.", icon: "💾" },
      { step: 2, title: "Redémarrez le téléphone", description: "Un simple redémarrage libère la RAM et ferme les processus bloqués. Si les ralentissements persistent après redémarrage, le problème est plus profond.", icon: "🔄" },
      { step: 3, title: "Mettez à jour le système", description: "Installez les mises à jour disponibles. Parfois un bug connu est corrigé par un patch. Mais si c'est une mise à jour qui a causé le problème, notez-le.", icon: "📲" },
      { step: 4, title: "Réinitialisation d'usine (dernier recours)", description: "Sauvegardez vos données puis faites une réinitialisation d'usine. Si les ralentissements persistent sur un téléphone 'neuf', c'est un défaut matériel.", icon: "⚙️" },
    ],
    legalPoints: [
      { articleRef: "L217-4", relevance: "Un smartphone qui ralentit sévèrement ne correspond pas à l'usage fluide attendu d'un appareil de ce type et de ce prix. Cela peut constituer un défaut de conformité." },
      { articleRef: "L217-3", relevance: "Le logiciel pré-installé et les mises à jour du fabricant font partie du produit. Une mise à jour qui dégrade les performances peut constituer un défaut de conformité." },
    ],
    faq: [
      { question: "Mon téléphone est devenu lent après une mise à jour, est-ce un défaut ?", answer: "En principe, oui. Une mise à jour du fabricant qui rend le téléphone inutilisable ou très lent est un défaut de conformité. Le logiciel fait partie du produit. Contactez le vendeur en précisant la chronologie." },
      { question: "Mon smartphone a 18 mois et gèle constamment, est-ce de l'obsolescence programmée ?", answer: "Quelle que soit la cause, si votre téléphone de moins de 2 ans ne fonctionne plus correctement, vous pouvez en principe faire valoir la garantie légale. Le vendeur ne peut pas invoquer l'ancienneté à 18 mois." },
      { question: "Après réinitialisation d'usine le téléphone est toujours lent, que faire ?", answer: "Si les ralentissements persistent après une réinitialisation complète, c'est quasi certainement un défaut matériel (mémoire flash, processeur). Contactez le vendeur : cette information renforce fortement votre réclamation." },
    ],
    whenToClaimWarranty: "Si les ralentissements persistent après réinitialisation d'usine et que le téléphone a moins de 2 ans, c'est un argument très fort pour un défaut matériel. Contactez le vendeur en mentionnant que la réinitialisation n'a rien changé.",
    whenNotCovered: "Des ralentissements causés par un stockage plein, trop d'apps installées, ou un logiciel malveillant installé par l'utilisateur ne relèvent pas de la garantie. La réinitialisation d'usine permet de distinguer ces cas.",
  },
  {
    problemSlug: "appareil-photo-defaillant",
    applianceSlug: "panne-smartphone-garantie",
    seoTitle: "Appareil photo smartphone défaillant — Garantie",
    seoDescription: "L'appareil photo de votre smartphone ne fonctionne plus correctement ? Flou, autofocus en panne ? Droits de garantie et réclamation gratuite.",
    seoKeywords: ["appareil photo smartphone panne", "caméra téléphone défaillant", "autofocus smartphone garantie"],
    summaryLine: "Un appareil photo de smartphone qui produit des photos floues, ne fait plus la mise au point ou affiche un écran noir relève en principe de la garantie.",
    heroDescription: "L'appareil photo de votre smartphone produit des photos systématiquement floues, la mise au point automatique ne fonctionne plus (l'image reste floue même en tapant sur l'écran), l'app caméra affiche un écran noir, ou le flash ne se déclenche plus.\n\nCes dysfonctionnements proviennent généralement d'un module caméra défectueux (lentille, capteur), d'un mécanisme d'autofocus bloqué (on entend parfois un cliquetis), d'une nappe de connexion endommagée, ou d'un bug logiciel du traitement d'image.\n\nL'appareil photo est devenu l'une des fonctions les plus utilisées d'un smartphone. Sa défaillance sur un appareil de moins de 2 ans constitue en principe un défaut de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Nettoyez l'objectif", description: "Un doigt gras ou une protection de coque qui couvre partiellement l'objectif provoque un flou. Nettoyez avec un chiffon doux et testez.", icon: "🧹" },
      { step: 2, title: "Testez les deux caméras", description: "Si le téléphone a plusieurs caméras (arrière + avant), testez chacune. Si une seule est défaillante, cela confirme un problème matériel spécifique.", icon: "📸" },
      { step: 3, title: "Forcez la fermeture de l'app caméra", description: "Fermez complètement l'app caméra et relancez-la. Sur Android, allez dans Paramètres > Apps > Caméra > Forcer l'arrêt.", icon: "📱" },
      { step: 4, title: "Écoutez l'autofocus", description: "Approchez l'oreille de la caméra arrière et tapez pour faire la mise au point. Un cliquetis ou vibration = l'autofocus tente de fonctionner. Silence total = module probablement en panne.", icon: "👂" },
    ],
    legalPoints: [
      { articleRef: "L217-4", relevance: "L'appareil photo est une fonctionnalité majeure promue dans les caractéristiques du produit. Sa défaillance ne correspond pas à l'usage attendu." },
      { articleRef: "L217-7", relevance: "Un défaut d'appareil photo dans les 24 mois est en principe présumé exister depuis la livraison. Le vendeur doit prouver que ce n'est pas un défaut d'usine." },
    ],
    faq: [
      { question: "Toutes mes photos sont floues depuis une semaine, est-ce un défaut ?", answer: "Si le nettoyage de l'objectif ne résout rien et que le problème concerne tous les modes photo, c'est probablement un défaut d'autofocus ou de capteur. Sur un téléphone de moins de 2 ans, contactez le vendeur." },
      { question: "La caméra avant fonctionne mais pas l'arrière, que faire ?", answer: "Cela confirme un défaut matériel du module caméra arrière. Ce n'est pas un problème logiciel (sinon les deux seraient affectées). Contactez le vendeur pour une prise en charge sous garantie." },
      { question: "L'app caméra affiche un écran noir, est-ce grave ?", answer: "Un écran noir persistant dans l'app caméra (après redémarrage et fermeture forcée) indique un module caméra défectueux ou une nappe déconnectée. C'est un défaut matériel qui relève en principe de la garantie." },
    ],
    whenToClaimWarranty: "Un appareil photo défaillant (flou permanent, écran noir, autofocus en panne) sur un smartphone de moins de 2 ans justifie en principe une réclamation. Joignez des exemples de photos floues et précisez que l'objectif est propre.",
    whenNotCovered: "Si l'objectif est rayé suite à un choc, si le module caméra a été endommagé par de l'eau (sur un modèle non étanche), ou si le téléphone a été réparé par un tiers ayant mal reconnecté la nappe, le vendeur pourrait contester.",
  },
  // =============================================
  // MACHINE À CAFÉ — 4 problèmes
  // =============================================
  {
    problemSlug: "ne-coule-plus",
    applianceSlug: "panne-machine-a-cafe-garantie",
    seoTitle: "Machine à café ne coule plus — Garantie et diagnostic",
    seoDescription: "Votre machine à café ne coule plus ou coule très lentement ? Diagnostic, droits de garantie légale et mail de réclamation gratuit.",
    seoKeywords: ["machine à café ne coule plus", "Nespresso ne coule plus", "panne machine café garantie"],
    summaryLine: "Une machine à café qui ne coule plus ou coule mal peut souffrir d'un entartrage sévère ou d'une pompe défectueuse, cette dernière étant couverte par la garantie.",
    heroDescription: "Vous insérez une capsule ou du café moulu, appuyez sur le bouton, et rien ne coule. Ou bien quelques gouttes s'écoulent péniblement en plusieurs minutes au lieu du flux normal. Votre café du matin est compromis.\n\nLes causes les plus fréquentes sont un circuit d'eau entartré (le calcaire obstrue les conduits internes), une pompe à eau défectueuse qui ne génère plus assez de pression, un bloc infuseur bloqué ou encrassé, ou une électrovanne qui ne s'ouvre plus.\n\nSi un détartrage complet ne résout pas le problème, il s'agit probablement d'une panne mécanique (pompe, électrovanne) qui peut relever de la garantie légale sur un appareil de moins de 2 ans.",
    diagnosticSteps: [
      { step: 1, title: "Lancez un cycle de détartrage", description: "Suivez la procédure de détartrage du fabricant avec un produit adapté. C'est la cause n°1 du problème et la première chose à essayer.", icon: "🧪" },
      { step: 2, title: "Vérifiez le réservoir d'eau", description: "Assurez-vous que le réservoir est correctement encliqueté et que le flotteur n'est pas bloqué. Certaines machines refusent de couler si la détection d'eau est en défaut.", icon: "💧" },
      { step: 3, title: "Écoutez la pompe", description: "Lancez un cycle et écoutez. Si vous entendez la pompe vibrer sans que l'eau ne coule, le circuit est probablement bouché. Si aucun bruit de pompe, elle est en panne.", icon: "👂" },
      { step: 4, title: "Nettoyez le bloc infuseur", description: "Si votre machine a un bloc infuseur amovible, retirez-le et nettoyez-le sous l'eau. Des résidus de café compactés peuvent bloquer le passage.", icon: "🧹" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Une machine à café qui ne coule plus ne remplit pas sa fonction première de préparation du café. Cela peut constituer un défaut de conformité si le problème n'est pas lié à l'entartrage." },
      { articleRef: "L217-10", relevance: "Si la réparation est acceptée sous garantie, elle doit en principe intervenir dans un délai raisonnable (max 30 jours)." },
    ],
    faq: [
      { question: "Ma Nespresso ne coule plus après 8 mois malgré un détartrage, est-ce couvert ?", answer: "Si le détartrage n'a rien résolu, la pompe ou l'électrovanne est probablement en cause. Contactez le vendeur (pas Nespresso) pour une prise en charge sous garantie légale." },
      { question: "La machine coule au goutte-à-goutte, est-ce un défaut ?", answer: "Un débit extrêmement réduit malgré un détartrage peut indiquer une pompe qui faiblit. Sur un appareil de moins de 2 ans, vous pouvez en principe demander une intervention sous garantie." },
      { question: "Le vendeur me dit que c'est l'entartrage et refuse la garantie, que faire ?", answer: "Si vous avez détartré correctement et que le problème persiste, insistez. Demandez un diagnostic technique. Le vendeur ne peut pas rejeter la garantie sur une simple hypothèse d'entartrage sans vérification." },
    ],
    whenToClaimWarranty: "Si la machine ne coule plus malgré un détartrage complet et que l'appareil a moins de 2 ans, contactez le vendeur. Précisez que vous avez effectué le détartrage selon les instructions du fabricant.",
    whenNotCovered: "Si le problème vient d'un entartrage jamais réalisé, de l'utilisation d'une eau très calcaire sans filtre, ou de l'utilisation de capsules non compatibles qui endommagent le système, le vendeur pourrait contester.",
  },
  {
    problemSlug: "fuite-eau",
    applianceSlug: "panne-machine-a-cafe-garantie",
    seoTitle: "Machine à café : fuite d'eau — Garantie et solutions",
    seoDescription: "Votre machine à café fuit ? Fuite sous la machine, au niveau du réservoir ou des capsules ? Diagnostic et droits de garantie.",
    seoKeywords: ["machine à café fuit", "fuite eau cafetière", "machine café fuite garantie"],
    summaryLine: "Une fuite d'eau sur une machine à café peut provenir d'un joint usé, d'un réservoir fissuré ou d'un circuit interne défectueux.",
    heroDescription: "Vous retrouvez de l'eau sous votre machine à café après chaque utilisation, ou l'eau s'écoule par le porte-capsule au lieu de couler dans la tasse. Dans certains cas, la fuite est visible au niveau du réservoir, du bac de récupération ou des raccords internes.\n\nLes causes incluent un joint d'étanchéité usé ou mal positionné (au niveau du porte-capsule ou du bloc infuseur), un réservoir fissuré par un choc ou le gel, un raccord interne desserré par les vibrations de la pompe, ou un bac de récupération plein qui déborde.\n\nUne fuite apparue spontanément (sans choc) sur un appareil de moins de 2 ans peut en principe constituer un défaut de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Localisez la fuite", description: "Placez du papier absorbant sous et autour de la machine. Lancez un cycle et observez d'où vient l'eau : dessous (raccord interne), côté (réservoir), devant (porte-capsule).", icon: "🔍" },
      { step: 2, title: "Vérifiez le réservoir", description: "Retirez le réservoir, remplissez-le et posez-le sur une serviette. S'il fuit sans la machine, il est fissuré.", icon: "💧" },
      { step: 3, title: "Inspectez le bac de récupération", description: "Un bac plein déborde et simule une fuite. Videz-le et vérifiez qu'il n'est pas fissuré.", icon: "🪣" },
      { step: 4, title: "Nettoyez le bloc infuseur", description: "Si la fuite vient du porte-capsule, le joint du bloc infuseur est peut-être sale ou déformé. Retirez-le (si amovible) et nettoyez les joints.", icon: "🧹" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Une machine à café qui fuit présente un défaut d'étanchéité qui peut endommager votre plan de travail. Cela constitue en principe un défaut de conformité." },
      { articleRef: "L217-11", relevance: "La réparation (remplacement de joints, de réservoir) doit en principe être effectuée sans aucun frais si l'appareil est sous garantie." },
    ],
    faq: [
      { question: "Ma machine fuit au niveau des capsules, est-ce un problème de joint ?", answer: "Probablement. Le joint du bloc infuseur se dégrade avec le temps et la chaleur. Si la machine a moins de 2 ans, le vendeur doit en principe remplacer le joint ou le bloc gratuitement." },
      { question: "Le réservoir s'est fissuré tout seul, est-ce couvert ?", answer: "Si le réservoir s'est fissuré sans choc (défaut de matériau, fragilisation par la chaleur), c'est en principe un défaut de conformité. Si la fissure résulte d'une chute, c'est plus difficile à défendre." },
      { question: "La fuite a endommagé mon plan de travail, le vendeur est-il responsable ?", answer: "La garantie légale couvre la réparation de la machine. Pour les dommages au mobilier, vous pourriez selon votre situation engager une action séparée en responsabilité, mais cela va au-delà de la garantie de conformité." },
    ],
    whenToClaimWarranty: "Si la fuite est apparue spontanément sur une machine de moins de 2 ans et ne vient pas du bac de récupération plein, contactez le vendeur en décrivant l'emplacement exact de la fuite.",
    whenNotCovered: "Si le réservoir a été fissuré par une chute ou le gel, si la fuite vient du bac de récupération non vidé, ou si un joint a été endommagé par un démontage de l'utilisateur, le vendeur pourrait contester.",
  },
  {
    problemSlug: "ne-sallume-plus",
    applianceSlug: "panne-machine-a-cafe-garantie",
    seoTitle: "Machine à café ne s'allume plus — Garantie et recours",
    seoDescription: "Votre machine à café ne s'allume plus du tout ? Diagnostic des causes, droits de garantie légale et modèle de réclamation gratuit.",
    seoKeywords: ["machine à café ne s'allume plus", "cafetière en panne", "machine café morte garantie"],
    summaryLine: "Une machine à café qui ne s'allume plus du tout signale un problème d'alimentation ou de carte électronique, couvert en principe par la garantie.",
    heroDescription: "Vous appuyez sur le bouton power de votre machine à café et rien ne se passe : aucun voyant, aucun bruit de chauffe, la machine reste totalement inerte. Votre rituel café du matin est impossible.\n\nCette panne provient le plus souvent d'un interrupteur marche/arrêt défectueux, d'un fusible thermique grillé (sécurité anti-surchauffe), d'une carte électronique en panne, ou d'un problème de câble d'alimentation. Sur les machines avec programmation, un bug du firmware peut aussi bloquer le démarrage.\n\nUne machine à café qui ne s'allume plus est totalement inutilisable. Si l'appareil a moins de 2 ans, c'est en principe un défaut de conformité clair.",
    diagnosticSteps: [
      { step: 1, title: "Testez la prise électrique", description: "Branchez un autre appareil sur la même prise. Essayez une autre prise pour la machine. Vérifiez que le câble est bien enfoncé.", icon: "🔌" },
      { step: 2, title: "Vérifiez l'interrupteur principal", description: "Certaines machines ont un interrupteur à l'arrière en plus du bouton en façade. Assurez-vous que les deux sont en position ON.", icon: "🔘" },
      { step: 3, title: "Débranchez 5 minutes puis rebranchez", description: "Un reset électrique peut résoudre un blocage du firmware. Débranchez complètement, attendez 5 minutes, rebranchez.", icon: "⏱️" },
      { step: 4, title: "Vérifiez le réservoir et le bac", description: "Certaines machines refusent de s'allumer si le réservoir est absent ou le bac de récupération mal positionné. Repositionnez-les correctement.", icon: "💧" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Une machine à café qui ne s'allume plus est totalement inutilisable. C'est en principe un défaut de conformité incontestable." },
      { articleRef: "L217-12", relevance: "Si la réparation est impossible ou trop coûteuse par rapport au prix d'achat, vous pouvez en principe demander un remboursement ou une réduction de prix." },
    ],
    faq: [
      { question: "Ma machine Dolce Gusto ne s'allume plus après 10 mois, que faire ?", answer: "Contactez le vendeur (pas Nescafé). À 10 mois, la garantie légale s'applique pleinement. Le vendeur doit en principe prendre en charge la réparation ou le remplacement sans frais." },
      { question: "Le fusible thermique a grillé, est-ce de l'usure normale ?", answer: "Un fusible thermique qui grille prématurément peut indiquer un défaut de conception (surchauffe anormale du circuit de chauffe). Sur un appareil de moins de 2 ans, cela relève en principe de la garantie." },
      { question: "La machine coûtait 60 €, le vendeur dit que la réparation n'est pas rentable. Quels sont mes droits ?", answer: "Si la réparation est disproportionnée, vous pouvez en principe demander le remplacement par un modèle équivalent ou un remboursement (article L217-12)." },
    ],
    whenToClaimWarranty: "Une machine à café qui ne s'allume plus du tout est un cas simple de réclamation. Si l'appareil a moins de 2 ans, contactez le vendeur en décrivant que l'appareil est totalement inerte malgré un changement de prise.",
    whenNotCovered: "Si la panne résulte d'une surtension avérée (foudre), d'un câble endommagé par l'utilisateur, ou d'une utilisation en environnement très humide (salle de bain), le vendeur pourrait contester.",
  },
  {
    problemSlug: "cafe-froid",
    applianceSlug: "panne-machine-a-cafe-garantie",
    seoTitle: "Machine à café : café froid ou tiède — Garantie",
    seoDescription: "Votre machine à café produit un café froid ou tiède ? Diagnostic des causes, droits de garantie et modèle de réclamation gratuit.",
    seoKeywords: ["café froid machine", "machine café ne chauffe plus", "café tiède Nespresso garantie"],
    summaryLine: "Une machine à café qui produit un café froid ou tiède souffre probablement d'une résistance ou d'un thermostat défectueux, couvert par la garantie.",
    heroDescription: "Votre café sort tiède, voire froid, au lieu d'être bien chaud. La tasse est à peine chaude au toucher, ce qui rend le café imbuvable. Le problème peut être constant ou intermittent (certains cafés sont chauds, d'autres non).\n\nLes causes techniques sont une résistance de chauffe (thermobloc) défectueuse qui ne monte plus à la bonne température, un thermostat en panne qui ne régule plus la chauffe, un entartrage sévère du circuit de chauffe qui isole thermiquement la résistance, ou une carte électronique qui ne gère plus correctement le cycle de chauffe.\n\nSi le détartrage ne résout pas le problème et que la machine a moins de 2 ans, la résistance ou le thermostat est probablement en cause. C'est un défaut couvert en principe par la garantie légale.",
    diagnosticSteps: [
      { step: 1, title: "Lancez un détartrage complet", description: "Le calcaire s'accumule autour de la résistance et réduit le transfert de chaleur. Un détartrage peut résoudre le problème si l'entartrage est la cause.", icon: "🧪" },
      { step: 2, title: "Préchauffez avec un cycle à vide", description: "Lancez un cycle d'eau chaude sans capsule/café. Si l'eau est chaude, le circuit de chauffe fonctionne. Le problème peut venir du débit trop rapide.", icon: "🌡️" },
      { step: 3, title: "Mesurez la température", description: "Si vous avez un thermomètre, mesurez la température du café à la sortie. Un expresso devrait être entre 85°C et 92°C. En dessous de 70°C, c'est clairement insuffisant.", icon: "🌡️" },
      { step: 4, title: "Vérifiez le temps de chauffe", description: "Observez le temps entre l'allumage et le voyant 'prêt'. Si la machine indique 'prêt' quasi instantanément (sans vraiment chauffer), le thermostat est probablement en panne.", icon: "⏱️" },
    ],
    legalPoints: [
      { articleRef: "L217-4", relevance: "Une machine à café qui ne produit pas de café chaud ne remplit pas sa fonction de base. Cela ne correspond pas à l'usage attendu d'un bien de ce type." },
      { articleRef: "L217-10", relevance: "Si le vendeur accepte l'intervention, la réparation doit en principe être effectuée dans les 30 jours." },
    ],
    faq: [
      { question: "Ma machine produit un café à 50°C alors qu'il devrait être à 90°C, est-ce un défaut ?", answer: "En principe, oui. Un écart de 40°C par rapport à la température normale est un dysfonctionnement clair. Si le détartrage ne résout rien et que la machine a moins de 2 ans, contactez le vendeur." },
      { question: "Le café est chaud le premier, mais les suivants sont tièdes, est-ce normal ?", answer: "Une légère baisse de température entre les cafés peut être normale sur certains modèles. Mais un café franchement tiède dès la deuxième tasse peut indiquer un problème de dimensionnement du thermobloc." },
      { question: "Le vendeur dit que c'est le type de capsules utilisé, a-t-il raison ?", answer: "Le type de capsule n'affecte pas significativement la température de l'eau. Si le problème existe avec les capsules officielles de la marque, c'est un argument supplémentaire pour un défaut de la machine." },
    ],
    whenToClaimWarranty: "Si le café est systématiquement tiède ou froid malgré un détartrage, et que la machine a moins de 2 ans, contactez le vendeur. Mentionnez la température approximative et que le détartrage a été effectué.",
    whenNotCovered: "Si le problème vient d'un entartrage sévère jamais traité, de l'utilisation en altitude (l'eau bout à température plus basse), ou de l'utilisation avec un adaptateur de tension inadapté (voyage), le vendeur pourrait contester.",
  },
  // =============================================
  // CONGÉLATEUR — 4 problèmes
  // =============================================
  {
    problemSlug: "ne-congele-plus",
    applianceSlug: "panne-congelateur-garantie",
    seoTitle: "Congélateur ne congèle plus — Congélateur en panne | Repair Copilot",
    seoDescription: "Votre congélateur ne congèle plus ou la température remonte ? Diagnostic complet et recours en garantie légale de conformité.",
    seoKeywords: ["congélateur ne congèle plus", "congélateur en panne garantie", "température congélateur remonte", "panne froid congélateur"],
    summaryLine: "Un congélateur qui ne produit plus de froid peut souffrir d'un compresseur défaillant, d'une fuite de gaz réfrigérant ou d'un thermostat en panne, couvert en principe par la garantie légale.",
    heroDescription: "Vous constatez que vos aliments ne sont plus congelés : les glaces ramollissent, la viande décongèle et le givre fond sur les parois. La température intérieure ne descend plus suffisamment pour assurer la conservation.\n\nCe problème peut avoir plusieurs origines techniques : un compresseur qui ne démarre plus ou qui tourne en permanence sans produire de froid, une fuite dans le circuit de gaz réfrigérant, un thermostat ou une sonde de température défaillante, ou encore un ventilateur de circulation d'air en panne sur les modèles No Frost.\n\nSelon votre situation, un congélateur qui ne maintient plus la température requise (en principe -18°C) ne remplit pas sa fonction essentielle de conservation. Si l'appareil a moins de deux ans, ce dysfonctionnement peut relever de la garantie légale de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Vérifiez le réglage du thermostat", description: "Assurez-vous que le thermostat n'a pas été accidentellement modifié. Réglez-le sur la position maximale et attendez quelques heures pour voir si le froid revient.", icon: "🌡️" },
      { step: 2, title: "Écoutez le compresseur", description: "Approchez l'oreille de l'arrière de l'appareil. Si vous n'entendez aucun bourdonnement, le compresseur ne démarre peut-être plus. S'il tourne sans arrêt, il peut fonctionner à vide (fuite de réfrigérant).", icon: "👂" },
      { step: 3, title: "Contrôlez le joint de porte", description: "Passez une feuille de papier entre la porte et le cadre. Si la feuille glisse facilement, le joint ne fait plus son travail et l'air chaud entre en continu.", icon: "📄" },
      { step: 4, title: "Inspectez le condenseur arrière", description: "Vérifiez si la grille à l'arrière de l'appareil est encrassée de poussière. Un condenseur obstrué empêche l'évacuation de la chaleur et réduit considérablement l'efficacité du circuit de froid.", icon: "🔧" },
      { step: 5, title: "Relevez la température interne", description: "Placez un thermomètre dans le congélateur et notez la température après 4 heures. Si elle reste au-dessus de -10°C malgré un réglage maximal, le circuit frigorifique est défaillant.", icon: "📟" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "En principe, le vendeur doit livrer un congélateur capable de maintenir une température de -18°C. Un appareil qui ne congèle plus ne remplit pas sa fonction essentielle de conservation des aliments." },
      { articleRef: "L217-7", relevance: "Un défaut de conformité survenant dans les deux ans suivant la livraison est en principe présumé exister au moment de l'achat. La charge de la preuve incombe au vendeur, pas à l'acheteur." },
    ],
    faq: [
      { question: "Mon congélateur a 14 mois et ne fait plus de froid, puis-je invoquer la garantie ?", answer: "En principe, oui. À 14 mois, vous êtes dans le délai de la garantie légale de conformité. Le défaut est présumé d'origine et le vendeur doit en principe prendre en charge la réparation ou le remplacement sans frais." },
      { question: "Le réparateur parle d'une fuite de gaz réfrigérant, est-ce un défaut de fabrication ?", answer: "Une fuite de gaz sur un appareil récent peut indiquer un défaut de soudure ou de matériau dans le circuit frigorifique. Selon votre situation, cela peut constituer un défaut de conformité, surtout si l'appareil a été utilisé normalement." },
      { question: "Mes aliments ont été perdus à cause de la panne, puis-je demander un dédommagement ?", answer: "La garantie légale couvre la réparation ou le remplacement de l'appareil. Pour la perte alimentaire, vous pouvez tenter une demande de dédommagement complémentaire, mais cela relève davantage de la responsabilité civile et nécessite de prouver le préjudice subi." },
    ],
    whenToClaimWarranty: "Vous pouvez envisager une réclamation si votre congélateur ne maintient plus une température de conservation adéquate dans les deux ans suivant l'achat. Relevez la température interne et décrivez précisément les symptômes dans votre courrier au vendeur.",
    whenNotCovered: "Le défaut pourrait ne pas être couvert si le congélateur est placé dans un local non chauffé exposé au gel intense, si les grilles arrière n'ont jamais été nettoyées provoquant une surchauffe chronique, ou si l'appareil a subi un déménagement sans précautions (transport couché).",
  },
  {
    problemSlug: "givre-excessif",
    applianceSlug: "panne-congelateur-garantie",
    seoTitle: "Givre excessif dans le congélateur — Congélateur en panne | Repair Copilot",
    seoDescription: "Votre congélateur accumule du givre de manière anormale ? Identifiez la cause et découvrez vos recours en garantie légale.",
    seoKeywords: ["givre congélateur excessif", "congélateur trop de glace", "givre anormal congélateur garantie", "dégivrage congélateur panne"],
    summaryLine: "Un givre excessif dans le congélateur signale souvent un joint de porte défectueux, un thermostat déréglé ou un système de dégivrage automatique en panne, potentiellement couvert par la garantie.",
    heroDescription: "Des couches de givre épaisses se forment rapidement sur les parois et les tiroirs de votre congélateur. Vous devez dégivrer beaucoup plus souvent que la normale, et la glace peut même empêcher la fermeture correcte des tiroirs ou réduire la capacité de stockage.\n\nLe givre excessif provient généralement d'une entrée d'air chaud et humide : joint de porte usé ou déformé, porte mal alignée après un choc, ou résistance de dégivrage automatique grillée sur les modèles No Frost. Un thermostat défectueux qui maintient une température trop basse peut aussi provoquer une formation de givre accélérée.\n\nSelon votre situation, un congélateur qui accumule du givre de manière anormale au point de compromettre son utilisation peut présenter un défaut de conformité, en particulier si le système de dégivrage automatique est en cause sur un modèle vendu avec cette fonctionnalité.",
    diagnosticSteps: [
      { step: 1, title: "Inspectez le joint de porte", description: "Fermez la porte sur une feuille de papier. Si la feuille se retire sans résistance, le joint est usé ou déformé et laisse entrer l'air humide qui se transforme en givre.", icon: "📄" },
      { step: 2, title: "Vérifiez l'alignement de la porte", description: "Observez si la porte ferme bien à ras du cadre sur tout son périmètre. Un congélateur déplacé peut avoir une porte légèrement désalignée, créant une entrée d'air.", icon: "📐" },
      { step: 3, title: "Dégivrez complètement et observez", description: "Effectuez un dégivrage complet, puis surveillez la vitesse de reformation du givre. Si le givre revient en quelques jours, le problème est structurel et non lié à une simple accumulation.", icon: "❄️" },
      { step: 4, title: "Testez la résistance de dégivrage (No Frost)", description: "Sur un modèle No Frost, si du givre se forme, c'est que le cycle de dégivrage automatique ne fonctionne plus. L'évaporateur situé derrière le panneau interne est probablement recouvert de glace.", icon: "🔥" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Un congélateur vendu avec la fonction No Frost qui accumule du givre ne correspond pas aux caractéristiques annoncées. En principe, cela constitue un défaut de conformité." },
      { articleRef: "L217-8", relevance: "Le vendeur est en principe responsable des défauts de conformité existant au moment de la délivrance. Un système de dégivrage qui tombe en panne prématurément relève de cette responsabilité." },
    ],
    faq: [
      { question: "Mon congélateur No Frost forme du givre après 8 mois, est-ce normal ?", answer: "Non. Un congélateur No Frost est conçu pour ne pas produire de givre grâce à un système de dégivrage automatique. Si du givre apparaît, c'est que ce système est en panne. À 8 mois, la garantie légale s'applique pleinement." },
      { question: "Le givre empêche mes tiroirs de s'ouvrir, est-ce un motif de réclamation ?", answer: "En principe, oui. Si le givre compromet l'utilisation normale de l'appareil au point de bloquer les tiroirs, cela dépasse largement l'accumulation normale et constitue un dysfonctionnement couvert par la garantie." },
      { question: "Dois-je dégivrer avant de faire appel au SAV ?", answer: "Ce n'est pas obligatoire, mais il peut être utile de prendre des photos du givre avant de dégivrer. Cela vous servira de preuve. Le technicien pourra ensuite diagnostiquer la cause sur un appareil dégivré." },
    ],
    whenToClaimWarranty: "Vous pouvez envisager une réclamation si le givre se reforme anormalement vite après un dégivrage complet, ou si votre modèle No Frost accumule du givre alors qu'il est conçu pour ne pas en produire. Prenez des photos et contactez le vendeur.",
    whenNotCovered: "Le givre pourrait ne pas être couvert s'il résulte d'une porte fréquemment laissée ouverte, de l'introduction d'aliments chauds en grande quantité, ou d'une installation dans un environnement excessivement humide sans ventilation.",
  },
  {
    problemSlug: "fait-du-bruit",
    applianceSlug: "panne-congelateur-garantie",
    seoTitle: "Congélateur bruyant — Congélateur en panne | Repair Copilot",
    seoDescription: "Votre congélateur fait un bruit anormal ? Diagnostic des causes possibles et recours en garantie légale de conformité.",
    seoKeywords: ["congélateur bruyant", "bruit anormal congélateur", "congélateur vibre fort", "congélateur claque garantie"],
    summaryLine: "Un congélateur anormalement bruyant peut présenter un compresseur en fin de vie, un ventilateur obstrué ou des vibrations structurelles, potentiellement couverts par la garantie légale.",
    heroDescription: "Votre congélateur émet des bruits inhabituels : claquements répétés, bourdonnement intense, vibrations constantes ou sifflements aigus. Ces sons peuvent être intermittents ou permanents et perturbent votre quotidien, surtout si l'appareil est dans une cuisine ouverte.\n\nLes causes sont variées : un compresseur dont les pièces internes s'usent et produisent des claquements métalliques, un ventilateur dont les pales touchent du givre accumulé, des silent-blocs (supports anti-vibration) détériorés, ou un circuit de réfrigérant qui produit des gargouillements anormaux lors de la circulation du gaz.\n\nSelon votre situation, un congélateur dont le niveau sonore dépasse significativement celui annoncé dans les caractéristiques techniques peut en principe constituer un défaut de conformité au titre de la garantie légale.",
    diagnosticSteps: [
      { step: 1, title: "Identifiez le type de bruit", description: "Écoutez attentivement : un bourdonnement grave vient du compresseur, un clic répétitif du relais de démarrage, un frottement du ventilateur, et des vibrations d'un problème de calage. Le type de bruit oriente le diagnostic.", icon: "👂" },
      { step: 2, title: "Vérifiez le niveau de l'appareil", description: "Posez un niveau à bulle sur le dessus du congélateur. Un appareil mal de niveau vibre davantage. Réglez les pieds réglables pour obtenir une assise parfaitement stable.", icon: "📐" },
      { step: 3, title: "Éloignez l'appareil du mur", description: "Un congélateur trop proche du mur ou d'un meuble peut amplifier les vibrations par résonance. Laissez au minimum 5 cm d'espace sur les côtés et à l'arrière.", icon: "↔️" },
      { step: 4, title: "Vérifiez le ventilateur interne", description: "Si le bruit provient de l'intérieur, ouvrez la porte : un sifflement ou frottement qui s'arrête peut indiquer un ventilateur dont les pales touchent du givre accumulé autour de l'évaporateur.", icon: "🌀" },
      { step: 5, title: "Enregistrez le bruit", description: "Utilisez votre téléphone pour enregistrer le bruit anormal. Ce fichier audio sera une preuve utile pour votre réclamation auprès du vendeur et pour le diagnostic du technicien.", icon: "🎙️" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Si le congélateur annonce un niveau sonore de 40 dB et qu'il produit un bruit nettement supérieur, il ne correspond pas aux caractéristiques indiquées. En principe, cela constitue un défaut de conformité." },
      { articleRef: "L217-11", relevance: "En principe, la réparation ou le remplacement de l'appareil doit être effectué sans frais pour l'acheteur, incluant les pièces, la main-d'œuvre et le déplacement du technicien." },
    ],
    faq: [
      { question: "Mon congélateur fait un bruit de claquement toutes les quelques minutes, est-ce grave ?", answer: "Un claquement régulier peut provenir du relais de démarrage du compresseur qui tente de se lancer sans y parvenir. C'est souvent le signe d'un compresseur en difficulté. Si l'appareil est sous garantie, faites-le examiner rapidement." },
      { question: "Le vendeur dit que les bruits sont normaux pour ce modèle, comment prouver le contraire ?", answer: "Consultez la fiche technique qui indique le niveau sonore en décibels. Si vous le pouvez, mesurez le bruit avec une application sonomètre sur votre téléphone. Un écart significatif par rapport aux spécifications est un argument solide." },
      { question: "Le bruit a commencé après un déménagement, la garantie s'applique-t-elle encore ?", answer: "En principe, la garantie légale reste valable. Toutefois, le vendeur pourrait arguer que le transport a endommagé l'appareil. Assurez-vous de mentionner que le bruit n'existait pas avant si c'est le cas, et que le transport a été effectué dans les règles." },
    ],
    whenToClaimWarranty: "Vous pouvez envisager une réclamation si le bruit de votre congélateur est apparu spontanément, s'il dépasse nettement le niveau sonore annoncé, ou s'il s'accompagne d'un dysfonctionnement (froid insuffisant). Joignez un enregistrement audio à votre courrier.",
    whenNotCovered: "Le bruit pourrait ne pas être couvert s'il provient d'un mauvais calage de l'appareil par l'utilisateur, d'objets posés sur le dessus qui vibrent par résonance, ou d'une installation sur un sol irrégulier sans ajustement des pieds.",
  },
  {
    problemSlug: "fuite-eau",
    applianceSlug: "panne-congelateur-garantie",
    seoTitle: "Fuite d'eau du congélateur — Congélateur en panne | Repair Copilot",
    seoDescription: "Votre congélateur fuit de l'eau ? Diagnostic des causes et démarches pour faire valoir la garantie légale de conformité.",
    seoKeywords: ["congélateur fuite eau", "eau sous congélateur", "congélateur coule garantie", "fuite congélateur cause"],
    summaryLine: "Une fuite d'eau sous le congélateur provient généralement d'un bac de dégivrage fissuré, d'un tuyau d'évacuation bouché ou d'un joint défaillant, couvert en principe par la garantie.",
    heroDescription: "Vous retrouvez régulièrement une flaque d'eau sous ou devant votre congélateur. L'eau peut s'écouler lentement de manière continue ou apparaître de façon intermittente, notamment lors des cycles de dégivrage automatique.\n\nLes origines les plus courantes sont : un bac de récupération des eaux de dégivrage fissuré ou mal positionné, un tuyau d'évacuation des condensats bouché par des résidus, un joint de porte qui ne fait plus l'étanchéité (provoquant condensation et givrage excessif suivi de fonte), ou un raccord d'alimentation en eau défaillant sur les modèles avec distributeur de glaçons.\n\nUne fuite d'eau persistante qui ne résulte pas d'un déplacement récent de l'appareil peut, selon votre situation, constituer un défaut de conformité dans les deux ans suivant l'achat, car l'étanchéité fait partie des qualités essentielles d'un appareil de froid.",
    diagnosticSteps: [
      { step: 1, title: "Identifiez la source de l'eau", description: "Placez du papier absorbant à différents endroits autour du congélateur. L'eau provenant de l'avant suggère un joint de porte défaillant, tandis qu'une fuite à l'arrière pointe vers le circuit de dégivrage ou le raccord d'eau.", icon: "🗞️" },
      { step: 2, title: "Vérifiez le bac de récupération", description: "Le bac de récupération des eaux de dégivrage se trouve en général sous l'appareil, au-dessus du compresseur. Vérifiez qu'il n'est pas fissuré, mal positionné ou débordant.", icon: "🔍" },
      { step: 3, title: "Contrôlez le tuyau d'évacuation", description: "À l'intérieur du congélateur, repérez l'orifice d'évacuation des eaux de dégivrage (souvent en bas au fond). S'il est bouché par du givre ou des débris, l'eau s'accumule et déborde à l'intérieur.", icon: "🔧" },
      { step: 4, title: "Examinez le joint de porte", description: "Passez la main le long du joint en fermant la porte. Si vous sentez un passage d'air frais, le joint ne fait plus l'étanchéité. L'air humide crée du givre excessif qui fond ensuite en eau.", icon: "🖐️" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Un congélateur qui fuit ne présente pas les qualités d'étanchéité attendues d'un appareil de ce type. En principe, le vendeur est tenu de livrer un bien exempt de ce type de défaut." },
      { articleRef: "L217-10", relevance: "Si le vendeur accepte la prise en charge, il doit en principe effectuer la réparation dans un délai de 30 jours à compter de la demande de l'acheteur." },
    ],
    faq: [
      { question: "Le bac de récupération de mon congélateur s'est fissuré après un an, est-ce couvert ?", answer: "En principe, oui. Un bac qui se fissure après seulement un an d'utilisation normale peut indiquer un défaut de matériau. Contactez le vendeur en précisant que la fissure est spontanée et non consécutive à un choc." },
      { question: "L'eau a abîmé mon parquet, le vendeur doit-il indemniser ?", answer: "La garantie légale couvre la réparation du congélateur lui-même. Pour les dommages au sol, vous pourriez selon votre situation envisager une action complémentaire en responsabilité du fait du produit, mais cela va au-delà de la garantie de conformité." },
      { question: "La fuite apparaît uniquement en été, est-ce normal ?", answer: "Une légère condensation en période chaude et humide peut être normale. Toutefois, une véritable fuite avec accumulation d'eau au sol n'est jamais normale et doit être considérée comme un dysfonctionnement, quel que soit la saison." },
    ],
    whenToClaimWarranty: "Vous pouvez envisager une réclamation si la fuite est persistante, ne provient pas d'un bac simplement mal replacé, et que l'appareil a moins de deux ans. Prenez des photos de la fuite et de son origine si possible avant de contacter le vendeur.",
    whenNotCovered: "La fuite pourrait ne pas être couverte si elle résulte d'un raccord d'alimentation en eau mal installé par l'utilisateur, d'un bac de récupération non replacé après un nettoyage, ou d'un dégivrage manuel ayant endommagé un composant interne avec un objet pointu.",
  },
  // =============================================
  // MICRO-ONDES — 4 problèmes
  // =============================================
  {
    problemSlug: "ne-chauffe-plus",
    applianceSlug: "panne-micro-ondes-garantie",
    seoTitle: "Micro-ondes ne chauffe plus — Micro-ondes en panne | Repair Copilot",
    seoDescription: "Votre micro-ondes tourne mais ne chauffe plus les aliments ? Diagnostic et recours en garantie légale de conformité.",
    seoKeywords: ["micro-ondes ne chauffe plus", "micro-ondes en panne garantie", "micro-ondes tourne mais ne chauffe pas", "magnétron panne"],
    summaryLine: "Un micro-ondes qui fonctionne mais ne chauffe plus souffre probablement d'un magnétron défaillant, d'un fusible haute tension grillé ou d'un condensateur en panne, couvert en principe par la garantie.",
    heroDescription: "Votre micro-ondes s'allume normalement, le plateau tourne et le minuteur décompte, mais les aliments restent froids. L'appareil semble fonctionner correctement en apparence, mais ne produit plus aucune chaleur.\n\nCe dysfonctionnement provient le plus souvent du magnétron, la pièce qui génère les micro-ondes. Il peut aussi s'agir d'un condensateur haute tension défaillant, d'une diode de redressement grillée, ou d'un fusible haute tension qui a cédé. Ces composants font partie du circuit de génération des ondes et leur défaillance rend l'appareil totalement inutile pour la chauffe.\n\nSelon votre situation, un micro-ondes qui ne chauffe plus ne remplit pas du tout sa fonction principale. Si l'appareil a moins de deux ans, vous pouvez en principe faire valoir la garantie légale de conformité auprès du vendeur.",
    diagnosticSteps: [
      { step: 1, title: "Testez avec un verre d'eau", description: "Placez un verre d'eau de 200 ml au centre du micro-ondes et lancez 1 minute à pleine puissance. Si l'eau reste froide, le problème de chauffe est confirmé. Si elle est tiède, le magnétron fonctionne partiellement.", icon: "🥛" },
      { step: 2, title: "Vérifiez le réglage de puissance", description: "Assurez-vous que la puissance est bien réglée au maximum et non sur 'décongélation' ou un niveau faible. Un réglage involontaire est une cause simple à éliminer.", icon: "⚡" },
      { step: 3, title: "Écoutez le bourdonnement caractéristique", description: "Un micro-ondes en fonctionnement normal émet un bourdonnement sourd du transformateur. Si ce son est absent ou différent (claquements, grésillements), le circuit haute tension est en cause.", icon: "👂" },
      { step: 4, title: "Observez l'éclairage intérieur", description: "Si la lumière intérieure fonctionne et le plateau tourne mais qu'il n'y a aucun bourdonnement, le problème est localisé au circuit de puissance (magnétron, condensateur ou diode).", icon: "💡" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Un micro-ondes qui ne chauffe plus est totalement privé de sa fonction essentielle. En principe, le vendeur doit garantir un appareil capable de remplir l'usage auquel il est destiné." },
      { articleRef: "L217-7", relevance: "Tout défaut de conformité apparaissant dans les deux ans est en principe présumé exister au moment de la délivrance. Le magnétron défaillant sur un appareil récent bénéficie de cette présomption." },
    ],
    faq: [
      { question: "Mon micro-ondes a 18 mois et le magnétron est en panne, est-ce couvert ?", answer: "En principe, oui. Un magnétron qui tombe en panne après seulement 18 mois d'utilisation normale peut être considéré comme un défaut de conformité. Le vendeur doit en principe prendre en charge la réparation ou le remplacement." },
      { question: "Le réparateur dit que la pièce coûte plus cher que l'appareil, quels sont mes droits ?", answer: "Vous pouvez en principe demander le remplacement par un appareil équivalent ou un remboursement si la réparation est disproportionnée par rapport au prix d'achat, conformément à l'article L217-12." },
      { question: "Puis-je continuer à utiliser un micro-ondes qui ne chauffe plus ?", answer: "L'appareil ne présente pas de danger particulier s'il ne produit plus de micro-ondes. Toutefois, il est totalement inutile. Évitez de le démonter vous-même car le condensateur haute tension peut rester chargé et représenter un danger électrique." },
    ],
    whenToClaimWarranty: "Contactez le vendeur dès que vous constatez que votre micro-ondes ne chauffe plus malgré un fonctionnement apparent normal. Précisez que le plateau tourne, la lumière fonctionne, mais que les aliments restent froids même après plusieurs minutes à pleine puissance.",
    whenNotCovered: "Le défaut pourrait ne pas être couvert si l'appareil a été utilisé avec des récipients métalliques ayant endommagé le magnétron, si un arc électrique a été provoqué par du papier aluminium, ou si l'appareil a fonctionné à vide de manière répétée.",
  },
  {
    problemSlug: "plateau-ne-tourne-plus",
    applianceSlug: "panne-micro-ondes-garantie",
    seoTitle: "Plateau micro-ondes ne tourne plus — Micro-ondes en panne | Repair Copilot",
    seoDescription: "Le plateau de votre micro-ondes ne tourne plus ? Diagnostic de la panne et démarches de garantie légale.",
    seoKeywords: ["plateau micro-ondes ne tourne plus", "micro-ondes plateau bloqué", "moteur plateau micro-ondes", "panne plateau tournant"],
    summaryLine: "Un plateau de micro-ondes immobile peut indiquer un moteur d'entraînement grillé, un coupleur cassé ou un rail de guidage endommagé, potentiellement couvert par la garantie.",
    heroDescription: "Vous lancez votre micro-ondes et constatez que le plateau ne tourne plus. Les aliments ne sont pas chauffés de manière uniforme, avec des zones brûlantes et d'autres encore froides, car la rotation est essentielle à une répartition homogène des ondes.\n\nCe problème provient généralement du moteur d'entraînement du plateau situé sous la cavité, d'un coupleur (pièce de jonction entre le moteur et le plateau) cassé ou usé, ou d'un guide de roulement déformé qui bloque la rotation. Plus rarement, c'est la carte de commande qui ne pilote plus le moteur.\n\nUn micro-ondes dont le plateau ne tourne plus ne fonctionne pas correctement : la chauffe est inégale et peut même devenir dangereuse sur certains aliments. En principe, si l'appareil a moins de deux ans, ce dysfonctionnement relève de la garantie légale de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Retirez et replacez le plateau", description: "Sortez le plateau en verre et son support à roulettes. Nettoyez l'axe d'entraînement au centre et replacez le tout. Un mauvais positionnement peut bloquer la rotation.", icon: "🔄" },
      { step: 2, title: "Vérifiez le guide à roulettes", description: "Inspectez le support à roulettes (anneau avec petites roues). Si une roulette est cassée ou si le guide est déformé, le plateau ne peut pas tourner librement.", icon: "🔍" },
      { step: 3, title: "Observez l'axe d'entraînement", description: "Lancez le micro-ondes sans le plateau : si l'axe central tourne, le moteur fonctionne et le problème est mécanique (coupleur ou plateau). Si l'axe ne bouge pas, le moteur est en cause.", icon: "⚙️" },
      { step: 4, title: "Nettoyez la cavité inférieure", description: "Des résidus alimentaires ou de la graisse sous le plateau peuvent bloquer le mécanisme. Nettoyez soigneusement le fond du micro-ondes autour de l'axe.", icon: "🧹" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "La rotation du plateau est une fonctionnalité essentielle pour la chauffe uniforme des aliments. En principe, un micro-ondes dont le plateau ne tourne plus ne correspond pas à l'usage attendu." },
      { articleRef: "L217-11", relevance: "La réparation au titre de la garantie doit en principe être effectuée sans frais. Le coût du moteur de plateau, du coupleur et de la main-d'œuvre sont à la charge du vendeur." },
    ],
    faq: [
      { question: "Le plateau ne tourne plus mais le micro-ondes chauffe encore, dois-je m'inquiéter ?", answer: "Le micro-ondes chauffe effectivement sans rotation, mais de manière très inégale. Cela peut créer des points chauds dangereux dans les aliments. Il est préférable de faire réparer avant de continuer à l'utiliser." },
      { question: "Le coupleur en plastique a cassé au bout de 10 mois, c'est de l'usure ?", answer: "À 10 mois, un coupleur qui casse ne relève pas de l'usure normale. Cette pièce est conçue pour durer la durée de vie de l'appareil. En principe, le remplacement est couvert par la garantie légale." },
      { question: "Je peux tourner le plateau à la main mais il ne tourne pas automatiquement, quelle est la cause ?", answer: "Si le plateau tourne facilement à la main, le problème n'est pas mécanique mais électrique. Le moteur d'entraînement ou son alimentation sur la carte électronique est probablement en cause." },
    ],
    whenToClaimWarranty: "Vous pouvez envisager une réclamation si le plateau s'est immobilisé sans cause externe identifiable et que l'appareil a moins de deux ans. Vérifiez d'abord le positionnement du plateau et du guide, puis contactez le vendeur si le problème persiste.",
    whenNotCovered: "Le problème pourrait ne pas être couvert si le plateau en verre a été cassé par un choc (remplacement du plateau uniquement), si un récipient trop lourd a forcé sur le mécanisme au-delà de la charge maximale, ou si des débris alimentaires ont grippé le mécanisme par défaut d'entretien.",
  },
  {
    problemSlug: "etincelles-interieur",
    applianceSlug: "panne-micro-ondes-garantie",
    seoTitle: "Étincelles dans le micro-ondes — Micro-ondes en panne | Repair Copilot",
    seoDescription: "Votre micro-ondes produit des étincelles à l'intérieur ? Comprenez les causes et découvrez vos recours en garantie légale.",
    seoKeywords: ["étincelles micro-ondes", "micro-ondes fait des arcs", "micro-ondes dangereux étincelles", "guide ondes micro-ondes panne"],
    summaryLine: "Des étincelles dans un micro-ondes peuvent provenir d'un guide d'ondes endommagé, d'une paroi intérieure détériorée ou d'un magnétron défaillant, potentiellement couvert par la garantie.",
    heroDescription: "Vous observez des éclairs, des arcs électriques ou des crépitements lumineux à l'intérieur de votre micro-ondes pendant le fonctionnement. Ce phénomène est impressionnant et inquiétant, et vous avez raison de ne pas l'ignorer car il peut endommager l'appareil ou présenter un risque.\n\nLes étincelles proviennent généralement du guide d'ondes (plaque en mica située sur la paroi intérieure) lorsqu'il est taché de graisse carbonisée ou fissuré, de la peinture intérieure de la cavité qui s'écaille et expose le métal, ou d'un magnétron en fin de vie qui produit des arcs. Des résidus alimentaires brûlés sur les parois peuvent aussi provoquer ce phénomène.\n\nDes étincelles récurrentes qui ne proviennent pas d'un objet métallique introduit par l'utilisateur peuvent, selon votre situation, constituer un défaut de conformité si l'appareil a moins de deux ans. En principe, un micro-ondes ne doit pas produire d'arcs électriques dans des conditions d'utilisation normales.",
    diagnosticSteps: [
      { step: 1, title: "Arrêtez immédiatement l'appareil", description: "Des étincelles persistantes peuvent endommager le magnétron et la cavité. Débranchez l'appareil dès que vous observez le phénomène et n'utilisez plus le micro-ondes tant que la cause n'est pas identifiée.", icon: "⛔" },
      { step: 2, title: "Inspectez le guide d'ondes", description: "Repérez la petite plaque en mica (grise ou beige) sur une paroi intérieure. Si elle est tachée de graisse brûlée, craquelée ou percée, c'est la cause la plus probable des étincelles.", icon: "🔍" },
      { step: 3, title: "Examinez la paroi intérieure", description: "Regardez si la peinture intérieure de la cavité présente des écaillages, des bulles ou des points de rouille. Le métal nu exposé aux micro-ondes génère des arcs électriques.", icon: "🖐️" },
      { step: 4, title: "Vérifiez l'absence de résidus métalliques", description: "Assurez-vous qu'aucun résidu métallique (papier aluminium, agrafe d'emballage, résidu de laine d'acier) ne reste collé aux parois ou au plateau.", icon: "🧲" },
      { step: 5, title: "Documentez avec des photos", description: "Photographiez l'état du guide d'ondes et des parois intérieures. Si les étincelles se reproduisent, une courte vidéo est une preuve précieuse pour votre réclamation.", icon: "📸" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Un micro-ondes qui produit des étincelles présente un défaut de sécurité en plus du défaut de conformité. En principe, le vendeur est tenu de garantir un appareil sûr et conforme à son usage." },
      { articleRef: "L217-8", relevance: "Le vendeur est en principe responsable de tout défaut existant au moment de la délivrance et qui se manifeste dans les deux ans. Un guide d'ondes défaillant ou une peinture intérieure qui s'écaille relèvent de cette responsabilité." },
    ],
    faq: [
      { question: "Les étincelles ont commencé après 6 mois, est-ce un défaut de fabrication ?", answer: "En principe, un guide d'ondes ou une peinture intérieure qui se détériore après seulement 6 mois peut indiquer un défaut de qualité des matériaux. À ce stade, la garantie légale s'applique pleinement." },
      { question: "Le guide d'ondes est-il une pièce d'usure non couverte ?", answer: "Le guide d'ondes n'est pas considéré comme une pièce d'usure au même titre qu'un filtre. Sa dégradation prématurée sur un appareil récent est en principe un défaut de conformité. Le vendeur ne peut pas l'exclure de la garantie." },
      { question: "Les étincelles ont-elles pu endommager d'autres composants ?", answer: "Des arcs électriques répétés peuvent effectivement endommager le magnétron et la cavité. Mentionnez-le dans votre réclamation : si la réparation ne suffit pas à cause des dégâts accumulés, vous pouvez demander le remplacement de l'appareil." },
    ],
    whenToClaimWarranty: "Contactez le vendeur immédiatement en décrivant les étincelles observées. Joignez des photos du guide d'ondes et des parois intérieures. Mentionnez que l'appareil n'a jamais été utilisé avec des objets métalliques et que le phénomène est apparu spontanément.",
    whenNotCovered: "Les étincelles pourraient ne pas être couvertes si elles résultent de l'utilisation répétée de récipients métalliques ou de papier aluminium, d'un nettoyage avec des produits abrasifs ayant endommagé la peinture intérieure, ou de projections de graisse jamais nettoyées sur le guide d'ondes.",
  },
  {
    problemSlug: "porte-ne-ferme-plus",
    applianceSlug: "panne-micro-ondes-garantie",
    seoTitle: "Porte micro-ondes ne ferme plus — Micro-ondes en panne | Repair Copilot",
    seoDescription: "La porte de votre micro-ondes ne ferme plus correctement ? Diagnostic de la panne et vos droits en garantie légale.",
    seoKeywords: ["porte micro-ondes ne ferme plus", "loquet micro-ondes cassé", "micro-ondes porte bloquée", "charnière micro-ondes garantie"],
    summaryLine: "Une porte de micro-ondes qui ne ferme plus correctement peut être causée par un loquet cassé, une charnière déformée ou un interrupteur de sécurité défaillant, couvert en principe par la garantie.",
    heroDescription: "La porte de votre micro-ondes ne se ferme plus correctement : elle ne clique plus en position fermée, rebondit à l'ouverture, ou l'appareil refuse de démarrer même porte apparemment fermée. Sans fermeture complète, le micro-ondes est inutilisable car la sécurité empêche tout fonctionnement.\n\nCe problème provient le plus souvent d'un crochet de verrouillage (loquet) en plastique qui s'est cassé ou déformé, d'une charnière fatiguée ou tordue, d'un ressort de rappel qui a lâché, ou d'un interrupteur de sécurité de porte (switch) qui ne détecte plus la fermeture correctement.\n\nEn principe, la porte d'un micro-ondes doit résister à une utilisation quotidienne normale pendant plusieurs années. Si le mécanisme de fermeture cède sur un appareil de moins de deux ans, cela peut constituer un défaut de conformité couvert par la garantie légale.",
    diagnosticSteps: [
      { step: 1, title: "Examinez les crochets de verrouillage", description: "Regardez les petits crochets en plastique sur le bord de la porte. S'ils sont cassés, fissurés ou déformés, ils ne peuvent plus s'enclencher dans les logements du cadre.", icon: "🔒" },
      { step: 2, title: "Testez la charnière", description: "Ouvrez et fermez la porte lentement. Si elle grince, accroche ou ne reste pas en position ouverte, la charnière ou son ressort est fatigué.", icon: "🚪" },
      { step: 3, title: "Vérifiez le bouton d'ouverture", description: "Le bouton poussoir d'ouverture doit libérer les crochets proprement. S'il reste enfoncé ou ne revient pas en position, le mécanisme interne est bloqué ou cassé.", icon: "👆" },
      { step: 4, title: "Vérifiez l'alignement de la porte", description: "Porte fermée, regardez si elle est bien à fleur du cadre sur toute sa hauteur. Un décalage indique une charnière tordue ou un support de porte déformé.", icon: "📐" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Un micro-ondes dont la porte ne ferme plus est totalement inutilisable pour des raisons de sécurité. En principe, cela constitue un défaut de conformité évident car l'appareil ne peut plus remplir sa fonction." },
      { articleRef: "L217-7", relevance: "Un mécanisme de porte qui cède dans les deux ans est en principe présumé d'origine. Le vendeur doit prouver que le défaut résulte d'un mauvais usage, et non l'inverse." },
    ],
    faq: [
      { question: "Le crochet de porte en plastique a cassé après 15 mois, est-ce de l'usure normale ?", answer: "En principe, non. Un crochet de porte conçu pour supporter des milliers d'ouvertures ne devrait pas casser après 15 mois d'utilisation domestique normale. C'est un signe de sous-dimensionnement ou de qualité insuffisante du matériau." },
      { question: "Le vendeur dit que c'est parce que je ferme la porte trop fort, a-t-il raison ?", answer: "Un micro-ondes doit être conçu pour résister à une utilisation normale, y compris des fermetures de porte un peu énergiques. Sauf si le loquet montre des signes de forçage extrême, cet argument est en principe insuffisant pour refuser la garantie." },
      { question: "Puis-je faire réparer la porte moi-même sans perdre la garantie ?", answer: "Il est déconseillé de démonter un micro-ondes vous-même, tant pour des raisons de sécurité (condensateur haute tension) que pour la garantie. Une intervention non professionnelle pourrait effectivement compromettre votre recours auprès du vendeur." },
    ],
    whenToClaimWarranty: "Vous pouvez envisager une réclamation si la porte ne ferme plus correctement sans qu'il y ait eu de choc ou de forçage anormal. Décrivez le symptôme précis (loquet cassé, porte qui rebondit, appareil qui refuse de démarrer) et contactez le vendeur.",
    whenNotCovered: "Le problème pourrait ne pas être couvert si la porte a subi un choc violent (objet tombé dessus), si le mécanisme a été forcé alors que quelque chose bloquait la fermeture, ou si l'utilisateur a tenté un démontage ayant endommagé le système de verrouillage.",
  },
  // =============================================
  // ASPIRATEUR ROBOT — 4 problèmes
  // =============================================
  {
    problemSlug: "ne-se-charge-plus",
    applianceSlug: "panne-aspirateur-robot-garantie",
    seoTitle: "Aspirateur robot ne se charge plus — Aspirateur robot en panne | Repair Copilot",
    seoDescription: "Votre aspirateur robot ne se charge plus sur sa base ? Diagnostic et recours en garantie légale de conformité.",
    seoKeywords: ["aspirateur robot ne charge plus", "robot aspirateur batterie panne", "base recharge aspirateur robot", "aspirateur robot ne s'allume plus"],
    summaryLine: "Un aspirateur robot qui ne se charge plus peut souffrir d'une batterie défaillante, de contacts de charge oxydés ou d'une base d'accueil en panne, couvert en principe par la garantie légale.",
    heroDescription: "Votre aspirateur robot est posé sur sa base de charge mais le voyant de charge ne s'allume pas, ou l'appareil indique une batterie vide même après plusieurs heures de charge. L'aspirateur ne peut plus effectuer ses cycles de nettoyage car il s'éteint au bout de quelques minutes.\n\nPlusieurs causes sont possibles : une batterie lithium-ion qui a perdu sa capacité prématurément, des contacts de charge (sur le robot ou la base) oxydés ou encrassés, un chargeur ou une base d'accueil défaillants, ou un problème de carte électronique qui ne gère plus le cycle de charge.\n\nSelon votre situation, un aspirateur robot qui ne peut plus se charger est totalement inutilisable. Si l'appareil a moins de deux ans, ce type de défaillance relève en principe de la garantie légale de conformité, y compris la batterie qui fait partie intégrante de l'appareil.",
    diagnosticSteps: [
      { step: 1, title: "Nettoyez les contacts de charge", description: "Avec un chiffon sec ou légèrement imbibé d'alcool isopropylique, nettoyez les lamelles de contact métalliques sous le robot et sur la base. La poussière et l'oxydation empêchent le contact électrique.", icon: "🧹" },
      { step: 2, title: "Vérifiez l'alimentation de la base", description: "Assurez-vous que le câble d'alimentation de la base est bien branché et que la prise fonctionne. Testez avec un autre appareil. Le voyant de la base doit être allumé.", icon: "🔌" },
      { step: 3, title: "Repositionnez le robot sur la base", description: "Retirez le robot de la base et replacez-le en vous assurant que les contacts métalliques s'alignent bien. Certains modèles nécessitent un positionnement précis pour initier la charge.", icon: "🔄" },
      { step: 4, title: "Effectuez un reset complet", description: "Maintenez le bouton d'alimentation enfoncé pendant 15 secondes pour réinitialiser l'électronique. Certains bugs logiciels peuvent bloquer le processus de charge.", icon: "🔘" },
      { step: 5, title: "Testez la charge directe", description: "Si votre modèle permet la charge via un câble direct (sans la base), essayez cette méthode. Si la charge fonctionne en direct mais pas via la base, c'est la base qui est en cause.", icon: "🔋" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Un aspirateur robot qui ne se charge plus est privé de toute autonomie et ne peut pas fonctionner. En principe, cela constitue un défaut de conformité majeur rendant l'appareil inutilisable." },
      { articleRef: "L217-7", relevance: "La batterie fait partie intégrante de l'appareil. En principe, sa dégradation prématurée dans les deux ans est présumée d'origine et ne constitue pas de l'usure normale sur un produit récent." },
    ],
    faq: [
      { question: "La batterie de mon aspirateur robot est morte après un an, est-ce couvert ?", answer: "En principe, oui. Une batterie lithium-ion doit conserver une capacité suffisante pendant bien plus d'un an en utilisation normale. Une perte totale de capacité à ce stade est un signe de défaut, couvert par la garantie légale." },
      { question: "Le vendeur dit que la batterie est un consommable, a-t-il raison ?", answer: "Non. La batterie d'un aspirateur robot n'est pas un consommable au même titre qu'un sac ou un filtre. C'est un composant structurel de l'appareil. En principe, le vendeur ne peut pas l'exclure de la garantie légale de conformité." },
      { question: "La base de charge est incluse dans la garantie ?", answer: "Oui. La base de charge fait partie de l'ensemble vendu et est couverte par la même garantie légale que le robot. Si la base est défaillante, le vendeur doit en principe la remplacer ou la réparer sans frais." },
    ],
    whenToClaimWarranty: "Contactez le vendeur si votre aspirateur robot ne se charge plus malgré le nettoyage des contacts et la vérification de la base. Précisez la durée de possession, le modèle, et les vérifications que vous avez effectuées.",
    whenNotCovered: "Le problème pourrait ne pas être couvert si les contacts de charge ont été endommagés par de l'eau (robot utilisé sur sol mouillé), si un chargeur non officiel a été utilisé, ou si l'appareil a été stocké déchargé pendant plusieurs mois provoquant une détérioration irréversible de la batterie.",
  },
  {
    problemSlug: "ne-retourne-pas-base",
    applianceSlug: "panne-aspirateur-robot-garantie",
    seoTitle: "Aspirateur robot ne retourne pas à sa base — Aspirateur robot en panne | Repair Copilot",
    seoDescription: "Votre aspirateur robot ne retrouve plus sa base de charge ? Diagnostic de la panne et recours en garantie légale.",
    seoKeywords: ["aspirateur robot ne retourne pas base", "robot aspirateur perdu", "aspirateur robot navigation panne", "robot aspirateur ne trouve plus base"],
    summaryLine: "Un aspirateur robot qui ne retrouve plus sa base souffre probablement d'un capteur infrarouge défaillant, d'un problème de navigation ou d'un signal de base absent, couvert en principe par la garantie.",
    heroDescription: "Votre aspirateur robot termine son cycle de nettoyage mais ne retourne pas se recharger sur sa base. Il erre dans la pièce, tourne en rond, se coince dans un angle ou s'arrête en plein milieu du salon avec la batterie à plat.\n\nCe comportement indique un problème de navigation ou de détection de la base : le capteur infrarouge du robot qui ne capte plus le signal de la base, l'émetteur infrarouge de la base d'accueil qui est défaillant, un module de cartographie ou de navigation (lidar, caméra) en panne, ou un bug logiciel persistant dans le firmware.\n\nEn principe, la capacité de retour à la base est une fonctionnalité essentielle d'un aspirateur robot autonome. Si cette fonction ne fonctionne plus sur un appareil de moins de deux ans, cela peut constituer un défaut de conformité au titre de la garantie légale.",
    diagnosticSteps: [
      { step: 1, title: "Vérifiez l'emplacement de la base", description: "La base doit être contre un mur, sur une surface plane, avec au moins 50 cm d'espace libre de chaque côté et 1 mètre devant. Un obstacle trop proche peut empêcher la détection.", icon: "📐" },
      { step: 2, title: "Nettoyez les capteurs du robot", description: "Les capteurs infrarouges de détection situés à l'avant du robot se couvrent de poussière. Nettoyez-les délicatement avec un chiffon doux et sec pour restaurer la détection.", icon: "🧹" },
      { step: 3, title: "Nettoyez l'émetteur de la base", description: "La base émet un signal infrarouge que le robot capte pour se guider. Si la fenêtre émettrice sur la base est encrassée, le signal est atténué.", icon: "🔦" },
      { step: 4, title: "Mettez à jour le firmware", description: "Via l'application du fabricant, vérifiez si une mise à jour logicielle est disponible. Certains bugs de navigation sont corrigés par des mises à jour du firmware.", icon: "📱" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Le retour automatique à la base est une fonctionnalité mise en avant dans les caractéristiques du produit. En principe, si cette fonction ne marche plus, l'appareil ne correspond pas à la description faite par le vendeur." },
      { articleRef: "L217-11", relevance: "En principe, la mise en conformité de l'appareil (réparation des capteurs, remplacement de la base ou mise à jour) doit être effectuée sans frais pour l'acheteur." },
    ],
    faq: [
      { question: "Mon robot ne retrouve plus sa base depuis la dernière mise à jour, est-ce couvert ?", answer: "Oui. Une mise à jour qui dégrade les performances du robot peut constituer un défaut de conformité. Le fabricant ou le vendeur est tenu en principe de fournir un correctif ou de remplacer l'appareil si le problème persiste." },
      { question: "Le robot fonctionnait bien au début mais ne trouve plus la base au bout de 8 mois, que faire ?", answer: "Après avoir vérifié l'emplacement de la base et nettoyé les capteurs, contactez le vendeur. Un capteur de navigation qui se dégrade après 8 mois est en principe un défaut de conformité couvert par la garantie légale." },
      { question: "La base fonctionne-t-elle indépendamment, comment le vérifier ?", answer: "Certaines bases ont un voyant lumineux indiquant leur bon fonctionnement. Si vous avez un smartphone avec caméra, pointez-la vers l'émetteur IR de la base : vous devriez voir une lumière violette à travers l'écran si l'émetteur fonctionne." },
    ],
    whenToClaimWarranty: "Vous pouvez envisager une réclamation si le robot ne retourne plus à sa base malgré le nettoyage des capteurs et le repositionnement de la base. Décrivez le comportement du robot (erre, tourne en rond) et mentionnez les vérifications effectuées.",
    whenNotCovered: "Le problème pourrait ne pas être couvert si la base a été déplacée dans un endroit inadapté (derrière un meuble, sous un escalier), si les capteurs ont été endommagés par de l'eau ou un choc, ou si le robot a été rooté ou flashé avec un firmware non officiel.",
  },
  {
    problemSlug: "brosse-bloquee",
    applianceSlug: "panne-aspirateur-robot-garantie",
    seoTitle: "Brosse aspirateur robot bloquée — Aspirateur robot en panne | Repair Copilot",
    seoDescription: "La brosse de votre aspirateur robot est bloquée ou ne tourne plus ? Diagnostic et démarches de garantie légale.",
    seoKeywords: ["brosse aspirateur robot bloquée", "brosse rotative robot panne", "aspirateur robot brosse ne tourne plus", "moteur brosse robot aspirateur"],
    summaryLine: "Une brosse d'aspirateur robot bloquée peut indiquer un moteur de brosse grillé, un roulement endommagé ou un mécanisme d'entraînement défaillant, potentiellement couvert par la garantie.",
    heroDescription: "La brosse principale ou les brosses latérales de votre aspirateur robot ne tournent plus, ou produisent un bruit de frottement anormal. Le robot continue sa course mais n'aspire plus efficacement car les brosses ne ramassent plus la poussière et les débris.\n\nCe dysfonctionnement peut provenir d'un moteur de brosse qui a grillé, de roulements usés ou grippés, d'un engrenage d'entraînement cassé, ou d'un axe de brosse déformé. Il ne s'agit pas d'un simple bourrage de cheveux ou de fils (que vous avez déjà vérifié), mais d'une panne mécanique ou électrique du système d'entraînement.\n\nEn principe, les brosses sont le principal outil de nettoyage d'un aspirateur robot. Si leur mécanisme d'entraînement tombe en panne sur un appareil de moins de deux ans, cela constitue un défaut de conformité car le robot ne peut plus remplir sa fonction de nettoyage.",
    diagnosticSteps: [
      { step: 1, title: "Retirez et nettoyez la brosse", description: "Sortez la brosse rotative et retirez tous les cheveux, fils et débris enroulés autour de l'axe et dans les embouts. Un bourrage dense peut bloquer la rotation et simuler une panne mécanique.", icon: "✂️" },
      { step: 2, title: "Vérifiez la rotation libre de l'axe", description: "Brosse retirée, faites tourner les embouts d'entraînement à la main. S'ils sont grippés ou produisent un bruit de craquement, les roulements internes sont usés.", icon: "🔄" },
      { step: 3, title: "Inspectez les brosses latérales", description: "Les petites brosses latérales en étoile se clipsent sur un axe. Si l'axe est tordu ou si le clip est cassé, la brosse latérale ne peut plus s'enclencher ni tourner.", icon: "🔍" },
      { step: 4, title: "Testez le moteur via l'application", description: "Certains modèles permettent de lancer un diagnostic via l'application. Activez un test de brosse pour vérifier si le moteur reçoit bien l'alimentation électrique.", icon: "📱" },
      { step: 5, title: "Écoutez le son du moteur", description: "Lancez le robot sans la brosse. Si vous entendez le moteur tourner à vide, le problème est mécanique (brosse ou engrenage). Si le moteur est silencieux, la panne est électrique.", icon: "👂" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Un aspirateur robot dont la brosse ne tourne plus ne nettoie pas efficacement. En principe, cela constitue un défaut de conformité car l'appareil ne remplit pas sa fonction principale d'aspiration et de balayage." },
      { articleRef: "L217-10", relevance: "En principe, le vendeur dispose de 30 jours pour effectuer la réparation après votre demande. Au-delà, vous pouvez demander le remplacement ou le remboursement." },
    ],
    faq: [
      { question: "La brosse principale est propre mais ne tourne plus, est-ce le moteur ?", answer: "Probablement. Si la brosse tourne librement à la main mais pas quand le robot fonctionne, le moteur d'entraînement ou sa carte de contrôle est en panne. Sur un appareil de moins de 2 ans, c'est en principe couvert par la garantie." },
      { question: "Les brosses latérales se déforment après quelques mois, est-ce normal ?", answer: "Une légère usure des poils est normale, mais une déformation de la structure ou un axe cassé après quelques mois peut indiquer un défaut de qualité. Selon votre situation, le vendeur peut être tenu de remplacer les brosses sans frais." },
      { question: "Le vendeur me dit d'acheter des brosses de rechange, a-t-il raison ?", answer: "Si le problème vient de la brosse elle-même (poils usés après un usage prolongé), c'est un consommable. Mais si c'est le moteur, l'engrenage ou l'axe mécanique qui est en panne, ce n'est pas un consommable et la réparation relève en principe de la garantie." },
    ],
    whenToClaimWarranty: "Contactez le vendeur si la brosse ne tourne plus malgré un nettoyage complet et que le problème provient du moteur ou du mécanisme interne. Précisez que la brosse est libre de tout bourrage et que le robot ne nettoie plus efficacement.",
    whenNotCovered: "Le problème pourrait ne pas être couvert s'il s'agit d'une usure normale des poils de brosse après un usage intensif, si la brosse a été endommagée par aspiration d'un objet dur (vis, caillou), ou si des brosses non compatibles ont été installées.",
  },
  {
    problemSlug: "capteurs-defaillants",
    applianceSlug: "panne-aspirateur-robot-garantie",
    seoTitle: "Capteurs aspirateur robot défaillants — Aspirateur robot en panne | Repair Copilot",
    seoDescription: "Les capteurs de votre aspirateur robot ne fonctionnent plus correctement ? Diagnostic de la panne et recours en garantie légale.",
    seoKeywords: ["capteurs aspirateur robot panne", "robot aspirateur tombe escalier", "aspirateur robot se cogne partout", "capteurs anti-chute robot"],
    summaryLine: "Des capteurs défaillants sur un aspirateur robot (anti-chute, anti-collision, cartographie) peuvent compromettre la navigation et la sécurité, couverts en principe par la garantie.",
    heroDescription: "Votre aspirateur robot se comporte de manière erratique : il se cogne violemment contre les meubles sans ralentir, tombe dans les escaliers malgré les capteurs anti-chute, nettoie toujours les mêmes zones en ignorant d'autres, ou s'arrête au milieu d'une pièce en signalant une erreur de capteur.\n\nCes symptômes indiquent une défaillance des capteurs de navigation : capteurs anti-chute (infrarouge au sol) qui ne détectent plus le vide, capteurs anti-collision (bumper ou ultrason) qui ne réagissent plus aux obstacles, lidar ou caméra de cartographie qui ne fonctionnent plus correctement, ou capteurs de mur latéraux qui ne détectent plus les surfaces.\n\nDes capteurs défaillants peuvent non seulement rendre le nettoyage inefficace mais aussi causer des dommages (chute dans un escalier, chocs répétés contre les meubles). En principe, si l'appareil a moins de deux ans, ces défaillances relèvent de la garantie légale de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Nettoyez tous les capteurs", description: "Utilisez un chiffon doux et sec pour essuyer tous les capteurs visibles : fenêtres infrarouges sous le robot, capteurs frontaux, lidar sur le dessus (s'il y en a). La poussière est la première cause de faux dysfonctionnement.", icon: "🧹" },
      { step: 2, title: "Testez les capteurs anti-chute", description: "Soulevez doucement le robot au-dessus d'une table pendant qu'il fonctionne. Les roues devraient s'arrêter quand les capteurs anti-chute détectent le vide. S'ils ne réagissent pas, ils sont défaillants.", icon: "⚠️" },
      { step: 3, title: "Observez la réaction aux obstacles", description: "Placez un obstacle bien visible devant le robot en fonctionnement. Il devrait ralentir ou changer de direction avant le contact. S'il percute l'obstacle à pleine vitesse, les capteurs frontaux sont en panne.", icon: "🧱" },
      { step: 4, title: "Consultez les journaux de l'application", description: "L'application de votre aspirateur robot enregistre souvent les erreurs de capteurs. Consultez l'historique pour identifier quels capteurs signalent des défaillances répétées.", icon: "📱" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "Les capteurs de navigation et de sécurité sont des composants essentiels d'un aspirateur robot. En principe, leur défaillance constitue un défaut de conformité car l'appareil ne peut plus fonctionner de manière sûre et efficace." },
      { articleRef: "L217-8", relevance: "Le vendeur est en principe responsable des défauts existant au moment de la délivrance. Des capteurs qui tombent en panne prématurément sur un appareil récent bénéficient de la présomption d'antériorité du défaut." },
    ],
    faq: [
      { question: "Mon robot est tombé dans l'escalier malgré les capteurs anti-chute, qui est responsable ?", answer: "Si les capteurs anti-chute sont défaillants sur un appareil récent, c'est en principe un défaut de conformité. Le vendeur est tenu de réparer ou remplacer l'appareil. Pour les dommages causés par la chute (au robot ou au sol), vous pouvez argumenter que le défaut de capteur en est la cause directe." },
      { question: "Le lidar de mon robot a cessé de fonctionner après 11 mois, est-ce couvert ?", answer: "En principe, oui. Le lidar est un composant essentiel à la navigation, pas une pièce d'usure. Sa défaillance après 11 mois constitue un défaut de conformité. Contactez le vendeur pour demander la réparation ou le remplacement." },
      { question: "Les capteurs fonctionnent mal uniquement sur les sols sombres, est-ce un défaut ?", answer: "Certains capteurs infrarouges anti-chute peuvent avoir des difficultés avec les surfaces très sombres qui absorbent le signal. Si ce comportement n'est pas mentionné dans les limitations du produit, c'est en principe un défaut de conformité par rapport à l'usage annoncé." },
    ],
    whenToClaimWarranty: "Contactez le vendeur si les capteurs de votre robot dysfonctionnent malgré un nettoyage soigneux. Décrivez précisément les symptômes (collisions, chutes, zones non nettoyées) et joignez si possible une vidéo montrant le comportement anormal.",
    whenNotCovered: "Le problème pourrait ne pas être couvert si les capteurs ont été endommagés par immersion dans l'eau, si les fenêtres de capteurs ont été rayées par un nettoyage avec un produit abrasif, ou si le robot a été utilisé en extérieur contrairement aux recommandations du fabricant.",
  },
  // =============================================
  // TABLETTE — 4 problèmes
  // =============================================
  {
    problemSlug: "ecran-ne-repond-plus",
    applianceSlug: "panne-tablette-garantie",
    seoTitle: "Écran tablette ne répond plus — Tablette en panne | Repair Copilot",
    seoDescription: "L'écran tactile de votre tablette ne répond plus aux touches ? Diagnostic et recours en garantie légale de conformité.",
    seoKeywords: ["écran tablette ne répond plus", "tablette tactile en panne", "écran tablette bloqué garantie"],
    summaryLine: "Un écran tactile qui ne répond plus peut résulter d'un défaut de la dalle, d'un problème logiciel ou d'un dysfonctionnement du numériseur, couvert en principe par la garantie légale.",
    heroDescription: "Vous appuyez sur l'écran de votre tablette, mais rien ne se passe. Les touches ne réagissent plus, ou seulement par intermittence. Certaines zones de l'écran restent inertes tandis que d'autres fonctionnent partiellement.\n\nCe problème peut avoir plusieurs causes : un bug logiciel bloquant la couche tactile, un défaut du numériseur (digitizer) qui convertit vos touches en commandes, un court-circuit interne, ou un problème de connecteur entre la dalle et la carte mère.\n\nSelon votre situation, si l'écran ne répond plus dans le cadre d'une utilisation normale et que la tablette a moins de deux ans, ce dysfonctionnement peut relever de la garantie légale de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Redémarrez la tablette", description: "Maintenez le bouton d'alimentation enfoncé pendant 10-15 secondes pour forcer le redémarrage. Un bug logiciel peut bloquer temporairement le tactile.", icon: "🔄" },
      { step: 2, title: "Nettoyez l'écran", description: "Essuyez l'écran avec un chiffon microfibre sec. La transpiration, l'humidité ou les résidus de film protecteur peuvent perturber la détection tactile.", icon: "🧹" },
      { step: 3, title: "Retirez la coque et le film protecteur", description: "Certaines coques ou films de protection trop épais ou mal posés peuvent interférer avec le tactile. Testez sans accessoire.", icon: "📱" },
      { step: 4, title: "Testez en mode sans échec", description: "Démarrez en mode sans échec (la procédure varie selon la marque) pour vérifier si une application tierce ne cause pas le problème.", icon: "🔍" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "En principe, le vendeur est tenu de livrer un bien conforme. Un écran tactile qui ne répond plus ne permet pas une utilisation normale de la tablette." },
      { articleRef: "L217-7", relevance: "Pendant les 24 mois suivant l'achat, le défaut est présumé exister dès la livraison. Vous n'avez pas à prouver l'origine de la panne." },
    ],
    faq: [
      { question: "L'écran de ma tablette ne répond plus après 10 mois, suis-je couvert ?", answer: "En principe oui. À 10 mois, vous êtes dans la période de garantie légale de 24 mois et le défaut est présumé exister dès l'achat. Le vendeur doit prendre en charge la réparation ou le remplacement." },
      { question: "Le vendeur dit que c'est un problème logiciel, pas matériel. Suis-je couvert ?", answer: "La garantie légale couvre la conformité globale du produit, y compris les défauts logiciels préinstallés. Si le problème logiciel rend la tablette inutilisable, vous pouvez demander la mise en conformité." },
      { question: "J'ai un film protecteur, le vendeur peut-il refuser la garantie ?", answer: "Un film protecteur standard ne constitue pas un motif de refus de garantie. Le vendeur devrait prouver que le film a causé le dysfonctionnement, ce qui est très rare." },
    ],
    whenToClaimWarranty: "Si l'écran ne répond plus dans le cadre d'une utilisation normale, sans choc visible, et que l'appareil a moins de 2 ans, vous pouvez demander la mise en conformité auprès du vendeur.",
    whenNotCovered: "Un écran fissuré suite à une chute, des dégâts causés par un liquide, ou un appareil ayant subi un démontage non autorisé ne relèvent généralement pas de la garantie légale.",
  },
  {
    problemSlug: "batterie-se-degrade",
    applianceSlug: "panne-tablette-garantie",
    seoTitle: "Batterie tablette se dégrade — Tablette en panne | Repair Copilot",
    seoDescription: "La batterie de votre tablette ne tient plus la charge ? Diagnostic de la dégradation et recours en garantie légale.",
    seoKeywords: ["batterie tablette se dégrade", "autonomie tablette diminue", "batterie tablette garantie"],
    summaryLine: "Une batterie qui se dégrade anormalement vite peut indiquer un défaut de fabrication ou un composant défaillant, couvert en principe par la garantie légale si la perte est disproportionnée.",
    heroDescription: "Votre tablette qui tenait 8 heures à l'achat ne dure plus que 2 heures, voire moins. Elle se décharge même en veille, ou le pourcentage de batterie chute brusquement de 50% à 10% sans raison apparente.\n\nUne dégradation rapide de la batterie peut signaler un défaut de la cellule lithium-ion, un circuit de charge défaillant, ou un problème logiciel de gestion d'énergie. Si la perte d'autonomie est survenue en quelques mois seulement, il ne s'agit probablement pas d'une usure normale.\n\nSelon votre situation, une perte d'autonomie disproportionnée par rapport à l'âge de l'appareil peut constituer un défaut de conformité couvert par la garantie légale.",
    diagnosticSteps: [
      { step: 1, title: "Vérifiez l'état de santé de la batterie", description: "Dans les réglages de la tablette (Batterie > État/Santé), consultez le pourcentage de capacité restante. En dessous de 80% après moins d'un an, c'est anormal.", icon: "🔋" },
      { step: 2, title: "Identifiez les applications énergivores", description: "Consultez les statistiques de consommation dans les réglages. Une application défectueuse peut vider la batterie en arrière-plan.", icon: "📊" },
      { step: 3, title: "Testez avec un chargeur d'origine", description: "Utilisez uniquement le câble et le chargeur fournis. Un chargeur non adapté peut endommager la batterie ou charger trop lentement.", icon: "🔌" },
      { step: 4, title: "Effectuez un cycle de calibration", description: "Laissez la batterie se vider complètement, puis rechargez à 100% sans interruption. Cela peut recalibrer l'indicateur de charge.", icon: "🔄" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "En principe, un appareil livré doit être conforme aux attentes légitimes, notamment en termes d'autonomie annoncée par le fabricant." },
      { articleRef: "L217-11", relevance: "La mise en conformité (réparation ou remplacement de la batterie) doit être effectuée sans aucun frais pour le consommateur." },
    ],
    faq: [
      { question: "La batterie de ma tablette ne tient plus que 1h après 8 mois, est-ce normal ?", answer: "Non. Une perte d'autonomie aussi importante en 8 mois est anormale et peut constituer un défaut de conformité. Vous pouvez demander au vendeur la réparation ou le remplacement." },
      { question: "Le vendeur dit que l'usure de la batterie est normale, a-t-il raison ?", answer: "Une certaine usure est normale avec le temps, mais une perte significative (plus de 20%) en moins d'un an est disproportionnée. Pendant les 24 mois de garantie, c'est au vendeur de prouver que l'usure est normale." },
      { question: "Puis-je demander le remplacement de la batterie seule ?", answer: "Oui. La réparation (remplacement de la batterie) est un des recours prévus par la loi. Le vendeur doit effectuer cette réparation gratuitement, y compris les frais de main d'œuvre." },
    ],
    whenToClaimWarranty: "Si l'autonomie a chuté de manière disproportionnée (plus de 30-40% de perte) en moins de 2 ans, dans le cadre d'une utilisation normale, vous pouvez demander la mise en conformité.",
    whenNotCovered: "Une batterie dégradée par l'utilisation d'un chargeur non conforme, une exposition prolongée à la chaleur extrême, ou une usure considérée comme normale (légère perte après 2 ans) ne relève pas de la garantie.",
  },
  {
    problemSlug: "ne-sallume-plus",
    applianceSlug: "panne-tablette-garantie",
    seoTitle: "Tablette ne s'allume plus — Tablette en panne | Repair Copilot",
    seoDescription: "Votre tablette ne s'allume plus du tout ? Diagnostic complet et démarches pour faire jouer la garantie légale de conformité.",
    seoKeywords: ["tablette ne s'allume plus", "tablette écran noir garantie", "tablette en panne ne démarre plus"],
    summaryLine: "Une tablette qui refuse de s'allumer peut souffrir d'un défaut de la carte mère, d'une batterie défectueuse ou d'un composant électronique grillé, couvert en principe par la garantie légale.",
    heroDescription: "Votre tablette ne réagit plus du tout : l'écran reste noir, aucun voyant ne s'allume, et la tablette ne vibre pas quand vous appuyez sur le bouton d'alimentation. Même branchée sur le chargeur, rien ne se passe.\n\nCe symptôme peut indiquer une batterie complètement déchargée ou défectueuse, un court-circuit sur la carte mère, un problème de connecteur de charge, ou un composant électronique grillé.\n\nSelon votre situation, si la tablette est devenue totalement inutilisable dans les 24 mois suivant l'achat et dans le cadre d'une utilisation normale, ce défaut relève en principe de la garantie légale de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Tentez une charge prolongée", description: "Branchez la tablette pendant au moins 30 minutes avec le chargeur d'origine avant de tenter de la rallumer. Une batterie totalement déchargée peut mettre du temps à répondre.", icon: "🔌" },
      { step: 2, title: "Forcez le redémarrage", description: "Maintenez le bouton d'alimentation enfoncé pendant 15-30 secondes. Sur certains modèles, une combinaison de boutons (alimentation + volume) force le redémarrage.", icon: "🔄" },
      { step: 3, title: "Vérifiez le port de charge", description: "Inspectez le port de charge avec une lampe : des peluches ou de la poussière peuvent empêcher la connexion. Nettoyez délicatement avec un cure-dent en bois.", icon: "🔍" },
      { step: 4, title: "Testez avec un autre câble et chargeur", description: "Le câble ou le bloc chargeur peut être défectueux. Essayez un autre câble compatible pour vérifier que le problème vient bien de la tablette.", icon: "🔋" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "En principe, le vendeur doit livrer un bien fonctionnel. Une tablette qui ne s'allume plus est totalement impropre à son usage." },
      { articleRef: "L217-8", relevance: "Vous pouvez choisir entre la réparation et le remplacement de la tablette. Le vendeur ne peut refuser que si votre choix est disproportionné en coût." },
    ],
    faq: [
      { question: "Ma tablette ne s'allume plus après 14 mois, que faire ?", answer: "Contactez le vendeur pour faire jouer la garantie légale de conformité. À 14 mois, le défaut est présumé exister dès l'achat. Le vendeur doit prendre en charge la réparation ou le remplacement." },
      { question: "Le vendeur veut m'envoyer vers le SAV du fabricant, est-ce normal ?", answer: "La garantie légale s'exerce auprès du vendeur, pas du fabricant. Vous pouvez contacter le SAV fabricant pour la garantie commerciale, mais pour la garantie légale, c'est le vendeur qui est responsable." },
      { question: "La réparation prendra 3 semaines, est-ce acceptable ?", answer: "L'article L217-10 prévoit que la mise en conformité doit intervenir dans un délai de 30 jours. Au-delà, vous pouvez demander le remplacement ou la résolution du contrat." },
    ],
    whenToClaimWarranty: "Si la tablette ne s'allume plus dans les 24 mois suivant l'achat, sans dommage visible (chute, eau), vous pouvez demander la réparation ou le remplacement au vendeur.",
    whenNotCovered: "Une tablette endommagée par une chute, un contact avec un liquide, ou une tentative de réparation non autorisée ne relève généralement pas de la garantie légale.",
  },
  {
    problemSlug: "ralentissements-bugs",
    applianceSlug: "panne-tablette-garantie",
    seoTitle: "Tablette lente et bugs — Tablette en panne | Repair Copilot",
    seoDescription: "Votre tablette est devenue très lente avec des bugs fréquents ? Diagnostic et recours en garantie légale de conformité.",
    seoKeywords: ["tablette lente garantie", "tablette bugs fréquents", "tablette ralentissements panne"],
    summaryLine: "Des ralentissements importants et des bugs répétés peuvent indiquer un défaut matériel (mémoire, stockage) ou logiciel, couvert en principe par la garantie légale si disproportionné par rapport à l'âge de l'appareil.",
    heroDescription: "Votre tablette met plusieurs secondes à ouvrir une application, se fige régulièrement, ou redémarre toute seule. Les gestes sur l'écran sont saccadés, les applications se ferment inopinément, et l'appareil chauffe anormalement.\n\nCes symptômes peuvent provenir d'un composant mémoire (RAM) défaillant, d'un stockage interne dégradé, d'une surchauffe du processeur due à un problème de dissipation thermique, ou d'un bug logiciel système.\n\nSelon votre situation, si ces ralentissements sont apparus rapidement après l'achat et rendent l'appareil difficilement utilisable, cela peut constituer un défaut de conformité au regard de la garantie légale.",
    diagnosticSteps: [
      { step: 1, title: "Vérifiez l'espace de stockage", description: "Dans Réglages > Stockage, vérifiez qu'il reste au moins 10-15% d'espace libre. Un stockage quasi plein ralentit considérablement le système.", icon: "💾" },
      { step: 2, title: "Fermez les applications en arrière-plan", description: "Fermez toutes les applications ouvertes et redémarrez la tablette. Si les ralentissements persistent après un redémarrage à froid, le problème est plus profond.", icon: "🔄" },
      { step: 3, title: "Mettez à jour le système", description: "Vérifiez si une mise à jour système est disponible. Certains bugs sont corrigés par des mises à jour. Attention : si les ralentissements sont apparus après une mise à jour, notez-le.", icon: "⬆️" },
      { step: 4, title: "Testez après une réinitialisation d'usine", description: "En dernier recours, sauvegardez vos données et réinitialisez la tablette aux paramètres d'usine. Si les problèmes persistent, c'est un défaut matériel.", icon: "🏭" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "En principe, un appareil doit offrir les performances qu'un consommateur peut légitimement attendre. Des ralentissements rendant l'appareil quasi inutilisable constituent un défaut de conformité." },
      { articleRef: "L217-7", relevance: "Pendant 24 mois, le défaut est présumé exister dès la livraison. C'est au vendeur de prouver que les ralentissements sont de votre fait." },
    ],
    faq: [
      { question: "Ma tablette rame après seulement 6 mois, est-ce couvert par la garantie ?", answer: "En principe oui, si les ralentissements sont importants et rendent l'appareil difficilement utilisable. Un appareil de 6 mois doit fonctionner normalement. Contactez le vendeur." },
      { question: "Le vendeur dit que c'est parce que j'ai trop d'applications, a-t-il raison ?", answer: "Un nombre raisonnable d'applications ne devrait pas rendre une tablette inutilisable. Si l'appareil est incapable de gérer un usage normal, c'est potentiellement un défaut de conformité." },
      { question: "Les ralentissements sont apparus après une mise à jour, suis-je couvert ?", answer: "Si la mise à jour est officielle (du fabricant), les problèmes qu'elle cause relèvent de la conformité du produit. Le vendeur reste responsable du bon fonctionnement global de l'appareil." },
    ],
    whenToClaimWarranty: "Si les ralentissements sont apparus dans les 24 mois, rendent l'appareil quasi inutilisable, et persistent après une réinitialisation d'usine, vous pouvez demander la mise en conformité.",
    whenNotCovered: "Des ralentissements légers sur un appareil ancien, un stockage saturé par l'utilisateur, ou l'installation de logiciels non officiels (root/jailbreak) ne relèvent généralement pas de la garantie.",
  },
  // =============================================
  // CONSOLE DE JEUX — 4 problèmes
  // =============================================
  {
    problemSlug: "ne-sallume-plus",
    applianceSlug: "panne-console-jeux-garantie",
    seoTitle: "Console de jeux ne s'allume plus — Console en panne | Repair Copilot",
    seoDescription: "Votre console de jeux ne s'allume plus ? Diagnostic complet et recours en garantie légale de conformité.",
    seoKeywords: ["console jeux ne s'allume plus", "PS5 Xbox ne démarre plus", "console en panne garantie"],
    summaryLine: "Une console de jeux qui refuse de s'allumer peut souffrir d'un bloc d'alimentation défaillant, d'un problème de carte mère ou de surchauffe, couvert en principe par la garantie légale.",
    heroDescription: "Vous appuyez sur le bouton d'alimentation de votre console, mais rien ne se passe : pas de voyant, pas de son de démarrage, l'écran reste noir. Ou bien la console émet un bip puis s'éteint aussitôt.\n\nCe problème peut avoir plusieurs origines : un bloc d'alimentation interne grillé, un condensateur défaillant sur la carte mère, un fusible interne qui a sauté, ou un problème de surchauffe ayant endommagé le processeur (APU).\n\nSelon votre situation, si la console ne s'allume plus dans le cadre d'une utilisation normale et a moins de deux ans, ce dysfonctionnement relève en principe de la garantie légale de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Vérifiez l'alimentation électrique", description: "Testez la prise murale avec un autre appareil. Essayez un autre câble d'alimentation si possible. Débranchez la console 30 secondes puis rebranchez.", icon: "🔌" },
      { step: 2, title: "Écoutez les signes de vie", description: "Appuyez sur le bouton : entendez-vous un bip ? Un ventilateur qui tourne brièvement ? Le voyant clignote-t-il ? Ces indices aident à localiser la panne.", icon: "👂" },
      { step: 3, title: "Vérifiez la ventilation", description: "Assurez-vous que les grilles d'aération ne sont pas obstruées. La poussière accumulée peut provoquer une surchauffe qui déclenche une sécurité empêchant le démarrage.", icon: "💨" },
      { step: 4, title: "Tentez un démarrage en mode sans échec", description: "La plupart des consoles permettent un démarrage en mode sans échec (maintenir le bouton d'alimentation 7-10 secondes). Cela peut résoudre les problèmes logiciels.", icon: "🔧" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "En principe, une console de jeux doit pouvoir s'allumer et fonctionner normalement. Une console qui ne démarre plus est totalement impropre à son usage." },
      { articleRef: "L217-10", relevance: "La mise en conformité doit intervenir dans un délai de 30 jours maximum. Au-delà, vous pouvez exiger le remplacement ou le remboursement." },
    ],
    faq: [
      { question: "Ma PS5/Xbox ne s'allume plus après 11 mois, suis-je couvert ?", answer: "En principe oui. À 11 mois, la garantie légale de 24 mois est en cours. Le vendeur doit prendre en charge la réparation ou le remplacement gratuitement." },
      { question: "Le vendeur me renvoie vers Sony/Microsoft, est-ce normal ?", answer: "La garantie légale s'exerce auprès du vendeur. Vous pouvez aussi contacter le fabricant pour la garantie commerciale, mais le vendeur reste votre interlocuteur légal pour la garantie légale." },
      { question: "J'ai acheté ma console en ligne, le processus est-il différent ?", answer: "Non. La garantie légale s'applique de la même manière pour les achats en ligne. Le vendeur en ligne doit organiser la prise en charge sans frais pour vous." },
    ],
    whenToClaimWarranty: "Si la console ne s'allume plus dans les 24 mois, sans signe de surtension ou de dommage externe, vous pouvez demander la réparation ou le remplacement.",
    whenNotCovered: "Une console endommagée par une surtension non protégée, un liquide renversé, ou des modifications matérielles (puces, démontage) ne relève généralement pas de la garantie.",
  },
  {
    problemSlug: "surchauffe-arrets",
    applianceSlug: "panne-console-jeux-garantie",
    seoTitle: "Console de jeux surchauffe et s'arrête — Console en panne | Repair Copilot",
    seoDescription: "Votre console de jeux surchauffe et s'éteint toute seule ? Diagnostic et démarches de garantie légale.",
    seoKeywords: ["console surchauffe", "PS5 Xbox s'éteint toute seule", "console arrêt surchauffe garantie"],
    summaryLine: "Une console qui surchauffe et s'arrête brutalement peut avoir un ventilateur défaillant, une pâte thermique usée ou un défaut de conception, couvert en principe par la garantie légale.",
    heroDescription: "Votre console devient brûlante après quelques minutes de jeu, le ventilateur tourne à plein régime, puis l'appareil s'éteint brutalement avec un message d'erreur de surchauffe. Au redémarrage, le problème se reproduit rapidement.\n\nLa surchauffe d'une console peut être causée par un ventilateur défaillant ou encrassé, une pâte thermique dégradée entre le processeur et le dissipateur, un dissipateur thermique mal positionné (défaut de fabrication), ou un environnement trop confiné.\n\nSelon votre situation, si la console surchauffe même dans un environnement bien ventilé et dans le cadre d'une utilisation normale, ce défaut peut relever de la garantie légale de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Vérifiez l'emplacement de la console", description: "La console doit être dans un espace bien aéré, pas dans un meuble fermé. Laissez au moins 10 cm de chaque côté et au-dessus. Évitez la proximité d'une source de chaleur.", icon: "📐" },
      { step: 2, title: "Nettoyez les grilles d'aération", description: "Utilisez un aspirateur à faible puissance ou une bombe d'air sec pour dépoussiérer les grilles. L'accumulation de poussière est la cause la plus fréquente de surchauffe.", icon: "🧹" },
      { step: 3, title: "Mesurez le temps avant l'arrêt", description: "Notez combien de temps la console fonctionne avant de s'éteindre. Si c'est moins de 15-20 minutes dans un environnement frais et aéré, le problème est probablement interne.", icon: "⏱️" },
      { step: 4, title: "Vérifiez le bruit du ventilateur", description: "Un ventilateur qui ne tourne pas ou qui fait un bruit anormal (grincement, cliquetis) est probablement défaillant et doit être remplacé.", icon: "👂" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "En principe, une console doit pouvoir fonctionner pendant des sessions de jeu sans s'arrêter pour cause de surchauffe. C'est un défaut de conformité." },
      { articleRef: "L217-11", relevance: "La réparation (remplacement du ventilateur, de la pâte thermique) doit être effectuée sans aucun frais pour le consommateur." },
    ],
    faq: [
      { question: "Ma console surchauffe après 8 mois, est-ce un défaut de fabrication ?", answer: "Si la console est correctement ventilée et que le problème apparaît en utilisation normale, c'est probablement un défaut interne (ventilateur, pâte thermique). À 8 mois, la garantie légale s'applique." },
      { question: "J'ai nettoyé ma console mais elle surchauffe toujours, que faire ?", answer: "Si le nettoyage externe ne résout pas le problème, le défaut est probablement interne (ventilateur HS, pâte thermique). Contactez le vendeur pour faire jouer la garantie légale." },
      { question: "Le vendeur me demande de payer les frais de port pour envoyer la console, est-ce normal ?", answer: "Non. L'article L217-11 prévoit que la mise en conformité est sans aucun frais, y compris les frais de port." },
    ],
    whenToClaimWarranty: "Si la console surchauffe et s'arrête dans les 24 mois, malgré une bonne ventilation, vous pouvez demander la réparation ou le remplacement au vendeur.",
    whenNotCovered: "Une surchauffe causée par un emplacement inadapté (meuble fermé, radiateur), un environnement très chaud, ou un démontage de la console ne relève pas de la garantie.",
  },
  {
    problemSlug: "lecteur-disque-defaillant",
    applianceSlug: "panne-console-jeux-garantie",
    seoTitle: "Lecteur disque console défaillant — Console en panne | Repair Copilot",
    seoDescription: "Le lecteur de disque de votre console ne lit plus les jeux ? Diagnostic et recours en garantie légale.",
    seoKeywords: ["lecteur disque console en panne", "console ne lit plus les jeux", "lecteur Blu-ray console garantie"],
    summaryLine: "Un lecteur de disque qui ne lit plus ou éjecte les jeux peut souffrir d'une lentille laser usée, d'un moteur défaillant ou d'un mécanisme bloqué, couvert en principe par la garantie légale.",
    heroDescription: "Votre console refuse de lire les disques de jeux : elle ne les reconnaît pas, les éjecte immédiatement, ou fait un bruit de grincement inhabituel en essayant de les lire. L'insertion du disque ne déclenche aucune réaction, ou le jeu commence à se charger puis s'arrête avec un message d'erreur.\n\nCe problème peut venir d'une lentille laser sale ou défaillante, d'un moteur d'entraînement en panne, d'un mécanisme d'insertion/éjection bloqué, ou d'un problème de firmware du lecteur.\n\nSelon votre situation, le lecteur de disque est un composant essentiel de la console. S'il ne fonctionne plus dans les 24 mois et en utilisation normale, vous pouvez en principe faire valoir la garantie légale.",
    diagnosticSteps: [
      { step: 1, title: "Testez avec plusieurs disques", description: "Essayez différents jeux et un Blu-ray/DVD. Si aucun disque ne fonctionne, le problème vient du lecteur. Si c'est un seul disque, il peut être rayé.", icon: "💿" },
      { step: 2, title: "Vérifiez l'insertion du disque", description: "Insérez le disque correctement (face imprimée vers le haut). Vérifiez qu'aucun objet n'est coincé dans la fente du lecteur.", icon: "🔍" },
      { step: 3, title: "Écoutez le lecteur", description: "Un grincement, un cliquetis ou l'absence totale de bruit de rotation indiquent un problème mécanique du lecteur.", icon: "👂" },
      { step: 4, title: "Redémarrez en mode sans échec", description: "Un bug logiciel peut empêcher la lecture. Redémarrez la console en mode sans échec et essayez de reconstruire la base de données.", icon: "🔧" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "En principe, une console avec lecteur de disque doit pouvoir lire les disques compatibles. Un lecteur défaillant est un défaut de conformité." },
      { articleRef: "L217-8", relevance: "Vous pouvez choisir entre la réparation du lecteur et le remplacement complet de la console." },
    ],
    faq: [
      { question: "Ma console ne lit plus aucun disque après 1 an, suis-je couvert ?", answer: "En principe oui. Un lecteur qui ne fonctionne plus après seulement 1 an relève de la garantie légale. Contactez le vendeur pour la mise en conformité." },
      { question: "Le lecteur fait un bruit de grincement, est-ce grave ?", answer: "Un grincement inhabituel indique généralement un problème mécanique (lentille, moteur). Cessez d'utiliser le lecteur et contactez le vendeur pour éviter d'aggraver le dommage." },
      { question: "J'utilise surtout des jeux dématérialisés, le vendeur peut-il refuser la réparation ?", answer: "Non. Le lecteur de disque est une fonctionnalité annoncée de la console. Même si vous utilisez principalement les jeux numériques, le lecteur doit fonctionner." },
    ],
    whenToClaimWarranty: "Si le lecteur ne lit plus les disques dans les 24 mois, avec des disques en bon état, vous pouvez demander la réparation ou le remplacement de la console.",
    whenNotCovered: "Des rayures sur la lentille causées par un disque endommagé, un objet inséré dans le lecteur, ou un démontage du lecteur ne relèvent généralement pas de la garantie.",
  },
  {
    problemSlug: "probleme-manette",
    applianceSlug: "panne-console-jeux-garantie",
    seoTitle: "Manette console défaillante — Console en panne | Repair Copilot",
    seoDescription: "Votre manette de console présente du drift ou ne répond plus ? Diagnostic et recours en garantie légale de conformité.",
    seoKeywords: ["manette console drift", "joystick manette en panne", "manette PS5 Xbox garantie"],
    summaryLine: "Un problème de manette (drift, boutons non réactifs, déconnexions) peut indiquer un défaut de fabrication couvert par la garantie légale, car la manette est un accessoire indispensable livré avec la console.",
    heroDescription: "Votre personnage se déplace tout seul à l'écran, la caméra tourne sans que vous touchiez le joystick, ou certains boutons ne répondent plus. La manette se déconnecte aléatoirement, ou le joystick analogique dérive dans une direction.\n\nLe « drift » (dérive du joystick) est un problème très courant qui touche les manettes de toutes les marques. Il est causé par l'usure prématurée des capteurs internes du joystick, un défaut de conception reconnu par certains fabricants.\n\nSelon votre situation, la manette fournie avec la console fait partie de la vente et est couverte par la garantie légale. Un joystick qui dérive après quelques mois d'utilisation normale est en principe un défaut de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Identifiez précisément le problème", description: "Testez dans les paramètres de la console (test de manette/calibration) pour voir si le joystick enregistre des mouvements fantômes ou si des boutons ne répondent pas.", icon: "🎮" },
      { step: 2, title: "Nettoyez la base du joystick", description: "De la poussière peut s'infiltrer sous le joystick. Soufflez délicatement avec de l'air sec autour de la base du stick, en le tournant doucement dans toutes les directions.", icon: "🧹" },
      { step: 3, title: "Mettez à jour le firmware", description: "Certains problèmes de manette sont résolus par des mises à jour du firmware. Vérifiez dans les paramètres si une mise à jour est disponible.", icon: "⬆️" },
      { step: 4, title: "Testez avec une autre manette", description: "Si possible, testez avec une autre manette pour confirmer que le problème vient bien de la manette et non de la console elle-même.", icon: "🔄" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "En principe, les accessoires livrés avec le produit (dont la manette) doivent être conformes. Un joystick qui dérive rend la manette impropre à son usage normal." },
      { articleRef: "L217-7", relevance: "Pendant 24 mois, le défaut du joystick est présumé exister dès la livraison. Le vendeur ne peut pas invoquer l'usure normale sans preuve." },
    ],
    faq: [
      { question: "Ma manette a du drift après 5 mois, est-ce couvert ?", answer: "En principe oui. Le drift du joystick après seulement 5 mois est un défaut de conformité. Contactez le vendeur pour le remplacement de la manette." },
      { question: "Le vendeur dit que le drift est normal, a-t-il raison ?", answer: "Non. Un joystick qui dérive après quelques mois d'utilisation normale n'est pas acceptable. C'est un défaut de conformité reconnu même par certains fabricants (des recours collectifs ont été lancés à ce sujet)." },
      { question: "Puis-je demander le remplacement de la manette seule ?", answer: "Oui. La manette est un accessoire distinct. Vous pouvez demander le remplacement de la manette seule sans renvoyer la console entière." },
    ],
    whenToClaimWarranty: "Si la manette fournie avec la console présente du drift ou un dysfonctionnement dans les 24 mois, en utilisation normale, vous pouvez demander son remplacement au vendeur.",
    whenNotCovered: "Des dommages causés par une chute de la manette, un liquide renversé dessus, ou l'utilisation d'accessoires non compatibles ne relèvent généralement pas de la garantie.",
  },
  // =============================================
  // MONTRE CONNECTÉE — 4 problèmes
  // =============================================
  {
    problemSlug: "batterie-ne-tient-plus",
    applianceSlug: "panne-montre-connectee-garantie",
    seoTitle: "Batterie montre connectée ne tient plus — Montre en panne | Repair Copilot",
    seoDescription: "La batterie de votre montre connectée ne tient plus la journée ? Diagnostic et recours en garantie légale de conformité.",
    seoKeywords: ["batterie montre connectée", "autonomie montre connectée garantie", "smartwatch batterie en panne"],
    summaryLine: "Une batterie de montre connectée qui ne tient plus qu'une fraction de l'autonomie annoncée peut indiquer un défaut de la cellule ou du circuit de charge, couvert en principe par la garantie légale.",
    heroDescription: "Votre montre connectée qui tenait 2-3 jours à l'achat ne dure plus qu'une demi-journée, voire quelques heures. Vous devez la recharger matin et soir, ou elle s'éteint en plein milieu de la journée.\n\nLa dégradation rapide de la batterie d'une montre connectée peut être causée par un défaut de la cellule lithium-ion, un problème du circuit de gestion de charge, ou un dysfonctionnement logiciel qui maintient des fonctionnalités gourmandes en permanence.\n\nSelon votre situation, si l'autonomie a chuté de manière disproportionnée par rapport à l'âge de la montre, ce défaut peut constituer un manquement à la conformité au regard de la garantie légale.",
    diagnosticSteps: [
      { step: 1, title: "Vérifiez les fonctions activées", description: "Désactivez temporairement le GPS permanent, le suivi cardiaque continu et l'écran toujours allumé. Comparez l'autonomie avec ces fonctions désactivées.", icon: "⚙️" },
      { step: 2, title: "Mettez à jour le logiciel", description: "Vérifiez les mises à jour disponibles dans l'application compagnon. Certains bugs de batterie sont corrigés par des mises à jour logicielles.", icon: "⬆️" },
      { step: 3, title: "Redémarrez la montre", description: "Un redémarrage peut résoudre un processus bloqué qui draine la batterie en arrière-plan.", icon: "🔄" },
      { step: 4, title: "Vérifiez le socle de charge", description: "Assurez-vous que le socle de charge fonctionne correctement : les contacts doivent être propres et la montre doit se charger à 100%.", icon: "🔋" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "En principe, une montre connectée doit offrir une autonomie raisonnable conforme aux caractéristiques annoncées par le fabricant." },
      { articleRef: "L217-11", relevance: "Le remplacement de la batterie ou de la montre doit être effectué sans aucun frais pour le consommateur." },
    ],
    faq: [
      { question: "Ma montre ne tient plus que 4h au lieu de 2 jours, après 7 mois, suis-je couvert ?", answer: "En principe oui. Une perte d'autonomie aussi importante en 7 mois est anormale et constitue un défaut de conformité. Le vendeur doit prendre en charge la réparation." },
      { question: "Le vendeur dit que la batterie s'use normalement, a-t-il raison ?", answer: "Une légère perte est normale, mais perdre 80% d'autonomie en moins d'un an est disproportionné. Pendant les 24 mois, c'est au vendeur de prouver que c'est de l'usure normale." },
      { question: "Puis-je demander le remplacement de la batterie seule ?", answer: "Sur les montres connectées, la batterie est souvent non remplaçable séparément. Le vendeur peut proposer le remplacement de la montre entière si la réparation n'est pas possible." },
    ],
    whenToClaimWarranty: "Si l'autonomie a chuté de plus de 50% par rapport aux spécifications, en moins de 2 ans et en utilisation normale, vous pouvez demander la mise en conformité.",
    whenNotCovered: "Une batterie dégradée par l'utilisation d'un chargeur non conforme, une exposition prolongée à des températures extrêmes, ou une usure légère après plus de 2 ans ne relève pas de la garantie.",
  },
  {
    problemSlug: "ecran-ne-repond-plus",
    applianceSlug: "panne-montre-connectee-garantie",
    seoTitle: "Écran montre connectée ne répond plus — Montre en panne | Repair Copilot",
    seoDescription: "L'écran tactile de votre montre connectée ne répond plus ? Diagnostic et démarches de garantie légale.",
    seoKeywords: ["écran montre connectée ne répond plus", "montre connectée tactile en panne", "smartwatch écran bloqué"],
    summaryLine: "Un écran de montre connectée qui ne répond plus au toucher peut résulter d'un défaut du numériseur, d'un bug logiciel ou d'un problème de connecteur, couvert en principe par la garantie légale.",
    heroDescription: "L'écran de votre montre connectée ne réagit plus quand vous le touchez. Vous ne pouvez plus naviguer dans les menus, répondre aux notifications ou changer de cadran. La montre affiche peut-être l'heure mais reste figée.\n\nCe dysfonctionnement peut provenir d'un bug du système d'exploitation, d'un défaut du numériseur tactile (digitizer), d'un problème de connecteur interne, ou encore d'une infiltration d'humidité ayant perturbé les capteurs.\n\nSelon votre situation, si l'écran ne répond plus en utilisation normale et que la montre a moins de deux ans, ce défaut relève en principe de la garantie légale de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Forcez le redémarrage", description: "Maintenez le bouton principal enfoncé pendant 10-15 secondes pour forcer le redémarrage. Un bug logiciel temporaire peut bloquer le tactile.", icon: "🔄" },
      { step: 2, title: "Nettoyez l'écran et vos doigts", description: "La transpiration, la crème solaire ou l'humidité peuvent perturber le tactile. Séchez l'écran et vos doigts soigneusement.", icon: "🧹" },
      { step: 3, title: "Vérifiez l'étanchéité", description: "Si vous avez porté la montre sous l'eau et qu'elle n'est pas prévue pour, l'humidité peut avoir endommagé le tactile. Vérifiez l'indice d'étanchéité.", icon: "💧" },
      { step: 4, title: "Mettez à jour via l'application", description: "Certaines mises à jour peuvent être poussées via l'application compagnon sans utiliser le tactile. Vérifiez si une mise à jour est disponible.", icon: "📱" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "En principe, l'écran tactile est l'interface principale d'une montre connectée. S'il ne fonctionne plus, l'appareil est impropre à son usage." },
      { articleRef: "L217-7", relevance: "Pendant 24 mois, le défaut est présumé exister dès l'achat. Le vendeur ne peut pas refuser la garantie sans prouver un mauvais usage." },
    ],
    faq: [
      { question: "L'écran de ma montre ne répond plus après 9 mois, que faire ?", answer: "Contactez le vendeur pour la garantie légale. À 9 mois, le défaut est présumé d'origine. Le vendeur doit réparer ou remplacer la montre gratuitement." },
      { question: "J'ai porté ma montre sous la douche et l'écran ne marche plus, suis-je couvert ?", answer: "Cela dépend de l'indice d'étanchéité annoncé. Si la montre est certifiée pour la douche (5 ATM minimum) et que l'écran a lâché, c'est un défaut de conformité. Sinon, c'est un mauvais usage." },
      { question: "Le vendeur propose un avoir au lieu de la réparation, dois-je accepter ?", answer: "Non, vous n'êtes pas obligé. La loi vous donne droit à la réparation ou au remplacement, pas à un avoir. Vous pouvez refuser et exiger la mise en conformité." },
    ],
    whenToClaimWarranty: "Si l'écran ne répond plus dans les 24 mois, en utilisation conforme aux spécifications du fabricant, vous pouvez demander la réparation ou le remplacement.",
    whenNotCovered: "Un écran endommagé par un choc, une immersion dans l'eau au-delà des spécifications, ou un démontage non autorisé ne relève généralement pas de la garantie.",
  },
  {
    problemSlug: "capteurs-defaillants",
    applianceSlug: "panne-montre-connectee-garantie",
    seoTitle: "Capteurs montre connectée défaillants — Montre en panne | Repair Copilot",
    seoDescription: "Les capteurs de votre montre connectée (cardio, GPS, podomètre) ne fonctionnent plus correctement ? Diagnostic et garantie légale.",
    seoKeywords: ["capteurs montre connectée en panne", "capteur cardiaque montre défaillant", "GPS montre connectée garantie"],
    summaryLine: "Des capteurs défaillants (fréquence cardiaque, GPS, podomètre) sur une montre connectée peuvent indiquer un défaut matériel couvert en principe par la garantie légale.",
    heroDescription: "Les capteurs de votre montre connectée donnent des résultats aberrants : la fréquence cardiaque affiche 180 bpm au repos, le GPS trace un parcours fantaisiste, le podomètre compte des pas alors que vous êtes immobile, ou le capteur SpO2 ne détecte plus rien.\n\nCes dysfonctionnements peuvent être causés par des capteurs optiques encrassés ou défaillants, une antenne GPS endommagée, un bug logiciel de traitement des données, ou un problème de calibration interne.\n\nSelon votre situation, les capteurs sont des fonctionnalités essentielles d'une montre connectée sportive. S'ils ne fonctionnent plus correctement dans les 24 mois, cela constitue en principe un défaut de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Nettoyez les capteurs au dos", description: "Les capteurs optiques (cardio, SpO2) sont situés au dos de la montre. Nettoyez-les avec un chiffon doux légèrement humide pour retirer la transpiration et les résidus.", icon: "🧹" },
      { step: 2, title: "Vérifiez le positionnement", description: "La montre doit être portée à 1-2 cm au-dessus de l'os du poignet, bien ajustée mais pas trop serrée. Un mauvais positionnement fausse les mesures cardiaques.", icon: "⌚" },
      { step: 3, title: "Comparez avec un autre appareil", description: "Mesurez votre fréquence cardiaque manuellement ou avec un autre appareil pour confirmer que les données de la montre sont erronées.", icon: "📊" },
      { step: 4, title: "Réinitialisez la montre", description: "Une réinitialisation aux paramètres d'usine peut résoudre les problèmes de calibration. Sauvegardez vos données avant.", icon: "🔄" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "En principe, les capteurs annoncés doivent fonctionner correctement. Des mesures erronées rendent la montre non conforme à ses spécifications." },
      { articleRef: "L217-11", relevance: "La réparation ou le remplacement doit être effectué sans frais, y compris les frais d'envoi." },
    ],
    faq: [
      { question: "Le capteur cardiaque donne des valeurs complètement fausses, suis-je couvert ?", answer: "En principe oui, si les mesures sont significativement erronées malgré un positionnement correct. Un capteur cardiaque défaillant est un défaut de conformité." },
      { question: "Le GPS de ma montre est très imprécis, est-ce normal ?", answer: "Une petite imprécision GPS est normale (quelques mètres), mais si le tracé est complètement décalé ou que le GPS ne capte plus, c'est un défaut qui peut relever de la garantie." },
      { question: "Le vendeur dit que les capteurs ne sont pas médicaux et donc pas garantis, a-t-il raison ?", answer: "Non. Même si les capteurs ne sont pas médicaux, ils doivent fonctionner conformément aux spécifications annoncées. Un capteur défaillant reste un défaut de conformité." },
    ],
    whenToClaimWarranty: "Si les capteurs donnent des mesures significativement erronées dans les 24 mois, malgré un nettoyage et un positionnement correct, vous pouvez demander la mise en conformité.",
    whenNotCovered: "Des mesures légèrement imprécises (inhérentes à la technologie), un encrassement dû à un défaut d'entretien, ou l'utilisation dans des conditions extrêmes ne relèvent pas de la garantie.",
  },
  {
    problemSlug: "ne-se-connecte-plus",
    applianceSlug: "panne-montre-connectee-garantie",
    seoTitle: "Montre connectée ne se connecte plus — Montre en panne | Repair Copilot",
    seoDescription: "Votre montre connectée ne se connecte plus à votre téléphone ? Diagnostic et recours en garantie légale.",
    seoKeywords: ["montre connectée ne se connecte plus", "Bluetooth montre en panne", "smartwatch connexion perdue garantie"],
    summaryLine: "Une montre connectée qui ne se connecte plus au téléphone peut souffrir d'un module Bluetooth ou Wi-Fi défaillant, couvert en principe par la garantie légale.",
    heroDescription: "Votre montre connectée ne se synchronise plus avec votre téléphone : les notifications n'arrivent plus, les données de santé ne se transfèrent plus, et l'application compagnon affiche « montre non connectée ». Même en rapprochant les deux appareils, la connexion Bluetooth ne s'établit pas.\n\nCe problème peut venir d'un module Bluetooth défaillant dans la montre, d'une antenne endommagée, d'un bug logiciel empêchant l'appairage, ou d'un problème de compatibilité après une mise à jour.\n\nSelon votre situation, la connectivité est la fonctionnalité fondamentale d'une montre « connectée ». Si elle ne peut plus se connecter au téléphone dans les 24 mois, cela constitue en principe un défaut majeur de conformité.",
    diagnosticSteps: [
      { step: 1, title: "Redémarrez les deux appareils", description: "Redémarrez à la fois la montre et le téléphone. Les bugs de connexion Bluetooth sont souvent résolus par un simple redémarrage des deux côtés.", icon: "🔄" },
      { step: 2, title: "Supprimez et recréez l'appairage", description: "Dans les réglages Bluetooth du téléphone, oubliez la montre, puis recréez l'appairage depuis l'application compagnon.", icon: "📱" },
      { step: 3, title: "Mettez à jour l'application compagnon", description: "Vérifiez que l'application de la montre est à jour sur votre téléphone. Une version obsolète peut causer des problèmes de compatibilité.", icon: "⬆️" },
      { step: 4, title: "Testez la connexion avec un autre téléphone", description: "Si possible, essayez de connecter la montre à un autre téléphone compatible. Si elle ne se connecte à aucun appareil, le module Bluetooth est probablement en panne.", icon: "🔍" },
    ],
    legalPoints: [
      { articleRef: "L217-3", relevance: "En principe, une montre connectée doit pouvoir se connecter à un téléphone compatible. La perte de connectivité rend l'appareil impropre à sa fonction principale." },
      { articleRef: "L217-10", relevance: "La réparation doit intervenir dans un délai de 30 jours. Au-delà, vous pouvez exiger le remplacement ou le remboursement." },
    ],
    faq: [
      { question: "Ma montre ne se connecte plus après une mise à jour, suis-je couvert ?", answer: "En principe oui. Si la mise à jour est officielle, les problèmes qu'elle cause relèvent de la conformité du produit. Le vendeur reste responsable du bon fonctionnement." },
      { question: "La montre se connecte et se déconnecte en permanence, est-ce un défaut ?", answer: "Oui. Des déconnexions fréquentes et répétées malgré une proximité normale entre la montre et le téléphone indiquent un défaut du module Bluetooth." },
      { question: "Le vendeur me dit d'attendre une mise à jour corrective, dois-je patienter ?", answer: "Vous pouvez accepter d'attendre un délai raisonnable (quelques semaines), mais si le problème persiste, la loi vous donne droit à la réparation ou au remplacement sous 30 jours." },
    ],
    whenToClaimWarranty: "Si la montre ne se connecte plus dans les 24 mois, malgré un téléphone compatible et les étapes de dépannage standard, vous pouvez demander la mise en conformité.",
    whenNotCovered: "Des problèmes de connexion dus à un téléphone incompatible, une distance trop grande, ou des interférences environnementales ne relèvent pas de la garantie de la montre.",
  },
];

export function getProblemPageData(
  applianceSlug: string,
  problemSlug: string
): ProblemPageData | undefined {
  return problemPages.find(
    (p) => p.applianceSlug === applianceSlug && p.problemSlug === problemSlug
  );
}

export function getAllProblemPageParams(): {
  slug: string;
  problemSlug: string;
}[] {
  return problemPages.map((p) => ({
    slug: p.applianceSlug,
    problemSlug: p.problemSlug,
  }));
}
