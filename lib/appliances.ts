export interface CommonProblem {
  slug: string;
  name: string;
  description: string;
  selfFixable: boolean;
  estimatedRepairCost: string;
  replacementAdvice?: string;
}

export interface Appliance {
  slug: string;
  name: string;
  icon: string;
  averageLifespan: string;
  seoTitle: string;
  seoDescription: string;
  introduction: string;
  commonProblems: CommonProblem[];
  repairTips: string[];
  faq: { question: string; answer: string }[];
}

export const appliances: Appliance[] = [
  {
    slug: "panne-lave-linge-garantie",
    name: "Lave-linge",
    icon: "🫧",
    averageLifespan: "10 à 15 ans",
    seoTitle:
      "Lave-linge en panne sous garantie — Vos droits et recours | Repair Copilot",
    seoDescription:
      "Votre lave-linge est en panne ? Découvrez si vous êtes encore sous garantie légale, vos droits et générez un mail de réclamation en 30 secondes.",
    introduction:
      "Le lave-linge est l'un des appareils électroménagers les plus sollicités au quotidien. Lorsqu'il tombe en panne, c'est souvent la panique. Pourtant, en tant que consommateur en France, vous bénéficiez de droits solides grâce à la garantie légale de conformité.",
    commonProblems: [
      {
        slug: "tambour-ne-tourne-plus",
        name: "Le tambour ne tourne plus",
        description:
          "Peut être causé par une courroie cassée, un moteur défaillant ou un problème de carte électronique.",
        selfFixable: false,
        estimatedRepairCost: "80 à 250 €",
      },
      {
        slug: "fuite-eau",
        name: "Fuite d'eau",
        description:
          "Souvent liée au joint de hublot, au tuyau d'arrivée ou à la pompe de vidange.",
        selfFixable: true,
        estimatedRepairCost: "30 à 150 €",
      },
      {
        slug: "ne-sallume-plus",
        name: "Ne s'allume plus",
        description:
          "Peut venir de la carte électronique, du verrou de porte ou d'un problème électrique.",
        selfFixable: false,
        estimatedRepairCost: "100 à 300 €",
      },
      {
        slug: "bruits-anormaux",
        name: "Bruits anormaux",
        description:
          "Roulements usés, amortisseurs défectueux ou objet coincé dans le tambour.",
        selfFixable: true,
        estimatedRepairCost: "50 à 200 €",
      },
    ],
    repairTips: [
      "Vérifiez que la prise est bien branchée et que le disjoncteur n'a pas sauté.",
      "Nettoyez le filtre de vidange régulièrement pour éviter les pannes.",
      "Vérifiez le joint de hublot pour détecter d'éventuelles fuites.",
      "Un bruit de claquement peut indiquer un objet coincé dans le tambour.",
    ],
    faq: [
      {
        question:
          "Mon lave-linge a 18 mois et il est en panne, suis-je couvert ?",
        answer:
          "Oui. La garantie légale de conformité est de 2 ans en France (article L217-3 du Code de la consommation). Si votre appareil a moins de 2 ans, le vendeur est tenu de le réparer ou de le remplacer sans frais.",
      },
      {
        question: "Dois-je contacter le fabricant ou le vendeur ?",
        answer:
          "La garantie légale de conformité s'exerce auprès du vendeur, pas du fabricant. C'est au magasin où vous avez acheté l'appareil que vous devez adresser votre réclamation.",
      },
      {
        question: "Que faire si le vendeur refuse de réparer ?",
        answer:
          "Le vendeur ne peut pas refuser si l'appareil a moins de 2 ans. En cas de refus, vous pouvez envoyer un courrier recommandé, puis saisir le médiateur de la consommation ou une association comme UFC-Que Choisir.",
      },
    ],
  },
  {
    slug: "panne-lave-vaisselle-garantie",
    name: "Lave-vaisselle",
    icon: "🍽️",
    averageLifespan: "10 à 12 ans",
    seoTitle:
      "Lave-vaisselle en panne sous garantie — Vos droits et recours | Repair Copilot",
    seoDescription:
      "Votre lave-vaisselle est en panne ? Vérifiez votre garantie légale et générez un mail de réclamation gratuit en quelques clics.",
    introduction:
      "Un lave-vaisselle en panne, c'est un quotidien bouleversé. Avant de racheter ou de payer une réparation coûteuse, vérifiez vos droits : la garantie légale de conformité de 2 ans pourrait couvrir la réparation.",
    commonProblems: [
      {
        slug: "ne-lave-plus-correctement",
        name: "Ne lave plus correctement",
        description:
          "Bras de lavage bouchés, pompe de circulation défectueuse ou problème de chauffe.",
        selfFixable: true,
        estimatedRepairCost: "50 à 200 €",
      },
      {
        slug: "ne-vidange-plus",
        name: "Ne vidange plus",
        description:
          "Filtre obstrué, pompe de vidange en panne ou tuyau bouché.",
        selfFixable: true,
        estimatedRepairCost: "40 à 180 €",
      },
      {
        slug: "fuite-eau",
        name: "Fuite d'eau",
        description:
          "Joint de porte usé, raccord desserré ou bac à sel fissuré.",
        selfFixable: true,
        estimatedRepairCost: "30 à 150 €",
      },
      {
        slug: "code-erreur",
        name: "Affiche un code erreur",
        description:
          "Les codes erreur varient selon les marques. Souvent lié à un capteur ou un composant électronique.",
        selfFixable: false,
        estimatedRepairCost: "100 à 300 €",
      },
    ],
    repairTips: [
      "Nettoyez les bras de lavage et le filtre après chaque cycle.",
      "Vérifiez que le tuyau de vidange n'est pas plié ou obstrué.",
      "Utilisez du vinaigre blanc une fois par mois pour détartrer.",
      "Consultez le manuel pour identifier les codes erreur de votre modèle.",
    ],
    faq: [
      {
        question: "Mon lave-vaisselle affiche un code erreur, que faire ?",
        answer:
          "Consultez d'abord le manuel de votre appareil pour identifier le code. Si l'appareil a moins de 2 ans, contactez le vendeur pour faire jouer la garantie légale de conformité.",
      },
      {
        question:
          "Le réparateur dit que ce n'est pas couvert par la garantie, est-ce vrai ?",
        answer:
          "La garantie légale couvre tout défaut de conformité apparu dans les 2 ans suivant l'achat. Si le défaut n'est pas dû à une mauvaise utilisation de votre part, le vendeur est tenu de le prendre en charge.",
      },
      {
        question: "Puis-je demander un remboursement plutôt qu'une réparation ?",
        answer:
          "La loi prévoit d'abord la réparation ou le remplacement. Le remboursement n'est possible que si ces deux solutions sont impossibles ou disproportionnées (article L217-8 du Code de la consommation).",
      },
    ],
  },
  {
    slug: "panne-refrigerateur-garantie",
    name: "Réfrigérateur",
    icon: "❄️",
    averageLifespan: "10 à 15 ans",
    seoTitle:
      "Réfrigérateur en panne sous garantie — Vos droits et recours | Repair Copilot",
    seoDescription:
      "Votre réfrigérateur ne refroidit plus ou fait du bruit ? Vérifiez vos droits de garantie et générez un mail de réclamation gratuit.",
    introduction:
      "Un réfrigérateur en panne, c'est une urgence : les aliments se gâtent rapidement. Avant de paniquer ou de courir en magasin, vérifiez si votre appareil est encore couvert par la garantie légale de conformité.",
    commonProblems: [
      {
        slug: "ne-refroidit-plus",
        name: "Ne refroidit plus",
        description:
          "Compresseur défaillant, fuite de gaz réfrigérant ou thermostat en panne.",
        selfFixable: false,
        estimatedRepairCost: "150 à 400 €",
      },
      {
        slug: "trop-de-givre",
        name: "Fait trop de givre",
        description:
          "Joint de porte défectueux, sonde de température en panne ou système de dégivrage automatique défaillant.",
        selfFixable: true,
        estimatedRepairCost: "50 à 200 €",
      },
      {
        slug: "fait-du-bruit",
        name: "Fait du bruit",
        description:
          "Ventilateur obstrué, compresseur vieillissant ou appareil mal nivelé.",
        selfFixable: true,
        estimatedRepairCost: "50 à 250 €",
      },
      {
        slug: "fuite-eau-sous-appareil",
        name: "Fuite d'eau sous l'appareil",
        description:
          "Bac de récupération plein, tuyau de vidange bouché ou joint défectueux.",
        selfFixable: true,
        estimatedRepairCost: "30 à 100 €",
      },
    ],
    repairTips: [
      "Vérifiez que le thermostat est bien réglé (entre 3°C et 5°C).",
      "Nettoyez le condenseur (grille arrière) tous les 6 mois.",
      "Assurez-vous que l'appareil est bien nivelé pour éviter les vibrations.",
      "Vérifiez l'étanchéité du joint de porte avec une feuille de papier.",
    ],
    faq: [
      {
        question:
          "Mon frigo ne refroidit plus après 14 mois, que puis-je faire ?",
        answer:
          "Si votre réfrigérateur a moins de 2 ans, vous êtes couvert par la garantie légale de conformité. Contactez le vendeur (pas le fabricant) pour demander la réparation ou le remplacement sans frais.",
      },
      {
        question: "Le vendeur me demande de payer le déplacement du technicien, est-ce normal ?",
        answer:
          "Non. Dans le cadre de la garantie légale de conformité, la réparation doit être effectuée sans aucun frais pour le consommateur, y compris les frais de déplacement (article L217-11 du Code de la consommation).",
      },
      {
        question: "Mon réfrigérateur a 3 ans, ai-je encore des droits ?",
        answer:
          "La garantie légale de conformité est de 2 ans. Au-delà, vous pouvez encore invoquer la garantie des vices cachés (article 1641 du Code civil) si le défaut existait avant l'achat et le rend impropre à l'usage. Le délai est de 2 ans à partir de la découverte du vice.",
      },
    ],
  },
  {
    slug: "panne-four-garantie",
    name: "Four / Micro-ondes",
    icon: "🔥",
    averageLifespan: "10 à 15 ans (four), 8 à 10 ans (micro-ondes)",
    seoTitle:
      "Four ou micro-ondes en panne sous garantie — Vos droits | Repair Copilot",
    seoDescription:
      "Votre four ou micro-ondes est en panne ? Découvrez vos droits de garantie et générez une lettre de réclamation en 30 secondes.",
    introduction:
      "Que ce soit un four encastrable ou un micro-ondes, une panne peut vite compliquer le quotidien. La garantie légale de conformité vous protège pendant 2 ans après l'achat.",
    commonProblems: [
      {
        slug: "ne-chauffe-plus",
        name: "Ne chauffe plus",
        description:
          "Résistance grillée, thermostat défectueux ou carte électronique en panne.",
        selfFixable: false,
        estimatedRepairCost: "80 à 300 €",
        replacementAdvice: "Pour un micro-ondes (neuf dès 50 €), le remplacement est souvent plus économique. Pour un four encastrable (300-800 €), la réparation reste généralement rentable.",
      },
      {
        slug: "porte-ne-ferme-plus",
        name: "La porte ne ferme plus correctement",
        description:
          "Charnières usées ou verrou de porte défectueux.",
        selfFixable: true,
        estimatedRepairCost: "30 à 100 €",
      },
      {
        slug: "plateau-ne-tourne-plus",
        name: "Le plateau du micro-ondes ne tourne plus",
        description:
          "Moteur du plateau en panne ou entraîneur cassé.",
        selfFixable: true,
        estimatedRepairCost: "15 à 50 €",
      },
      {
        slug: "affichage-ne-repond-plus",
        name: "Affichage ou boutons ne répondent plus",
        description:
          "Carte de commande défectueuse ou problème de connectique.",
        selfFixable: false,
        estimatedRepairCost: "80 à 200 €",
        replacementAdvice: "Pour un micro-ondes, le coût de remplacement de la carte dépasse souvent le prix d'un appareil neuf. Privilégiez le remplacement sauf pour un four encastrable.",
      },
    ],
    repairTips: [
      "Nettoyez régulièrement l'intérieur du four pour éviter les dépôts de graisse.",
      "Ne faites jamais fonctionner un micro-ondes à vide.",
      "Vérifiez le joint de porte du four pour assurer une bonne étanchéité thermique.",
      "Si le four ne chauffe plus, vérifiez d'abord le disjoncteur et la prise.",
    ],
    faq: [
      {
        question: "Mon four ne chauffe plus après 8 mois, que faire ?",
        answer:
          "Avec seulement 8 mois d'utilisation, vous êtes largement dans la période de garantie légale de conformité (2 ans). Contactez le vendeur pour demander une réparation ou un remplacement gratuit.",
      },
      {
        question:
          "Le vendeur dit que la garantie ne couvre pas les micro-ondes, est-ce vrai ?",
        answer:
          "C'est faux. La garantie légale de conformité s'applique à tous les biens de consommation, y compris les micro-ondes. Le vendeur est tenu de respecter cette obligation légale.",
      },
      {
        question: "Puis-je choisir entre réparation et remplacement ?",
        answer:
          "Oui, vous avez le choix (article L217-8 du Code de la consommation). Toutefois, le vendeur peut opter pour l'autre solution si votre choix entraîne un coût manifestement disproportionné.",
      },
    ],
  },
  {
    slug: "panne-seche-linge-garantie",
    name: "Sèche-linge",
    icon: "💨",
    averageLifespan: "8 à 12 ans",
    seoTitle:
      "Sèche-linge en panne sous garantie — Vos droits et recours | Repair Copilot",
    seoDescription:
      "Votre sèche-linge est en panne ? Vérifiez si la garantie légale s'applique et générez un mail de réclamation gratuit.",
    introduction:
      "Un sèche-linge en panne, surtout en hiver, c'est un vrai problème. Avant de penser à le remplacer, vérifiez si vous pouvez faire jouer vos droits de garantie.",
    commonProblems: [
      {
        slug: "ne-seche-plus",
        name: "Ne sèche plus correctement",
        description:
          "Filtre obstrué, résistance de chauffe défectueuse ou condenseur encrassé.",
        selfFixable: true,
        estimatedRepairCost: "50 à 200 €",
      },
      {
        slug: "ne-demarre-plus",
        name: "Ne démarre plus",
        description:
          "Problème de carte électronique, verrou de porte ou courroie cassée.",
        selfFixable: false,
        estimatedRepairCost: "80 à 250 €",
      },
      {
        slug: "bruit-anormal",
        name: "Fait un bruit anormal",
        description:
          "Roulements usés, tambour désaxé ou objet coincé.",
        selfFixable: false,
        estimatedRepairCost: "60 à 200 €",
      },
      {
        slug: "mauvaise-odeur",
        name: "Dégage une mauvaise odeur",
        description:
          "Filtre à peluches saturé, condenseur sale ou résidu d'humidité stagnante.",
        selfFixable: true,
        estimatedRepairCost: "0 à 50 €",
      },
    ],
    repairTips: [
      "Nettoyez le filtre à peluches après chaque utilisation.",
      "Nettoyez le condenseur tous les mois pour maintenir l'efficacité.",
      "Vérifiez que l'évacuation d'air n'est pas obstruée.",
      "Ne surchargez pas le tambour pour éviter l'usure prématurée.",
    ],
    faq: [
      {
        question:
          "Mon sèche-linge ne sèche plus après 10 mois, ai-je des droits ?",
        answer:
          "Absolument. Avec 10 mois d'utilisation, la garantie légale de conformité (2 ans) s'applique pleinement. Le vendeur doit prendre en charge la réparation ou le remplacement.",
      },
      {
        question: "Dois-je d'abord essayer de le réparer moi-même ?",
        answer:
          "Non. Si l'appareil est sous garantie légale, ne tentez pas de le réparer vous-même car cela pourrait compromettre vos droits. Contactez directement le vendeur.",
      },
      {
        question: "Le vendeur me renvoie vers le SAV du fabricant, est-ce normal ?",
        answer:
          "Le vendeur est votre interlocuteur légal pour la garantie de conformité. Il peut organiser la réparation via le SAV du fabricant, mais c'est lui qui reste responsable et qui doit prendre en charge les frais.",
      },
    ],
  },
  {
    slug: "panne-aspirateur-garantie",
    name: "Aspirateur",
    icon: "🧹",
    averageLifespan: "6 à 10 ans",
    seoTitle:
      "Aspirateur en panne sous garantie — Vos droits et recours | Repair Copilot",
    seoDescription:
      "Votre aspirateur est en panne ? Découvrez comment faire valoir votre garantie légale et générez un mail de réclamation gratuit.",
    introduction:
      "Qu'il s'agisse d'un aspirateur traîneau, balai ou robot, une panne prématurée est frustrante. La garantie légale de conformité vous protège pendant 2 ans.",
    commonProblems: [
      {
        slug: "perte-aspiration",
        name: "Perte d'aspiration",
        description:
          "Filtre encrassé, sac plein, tuyau obstrué ou moteur fatigué.",
        selfFixable: true,
        estimatedRepairCost: "20 à 100 €",
      },
      {
        slug: "ne-sallume-plus",
        name: "Ne s'allume plus",
        description:
          "Problème de batterie (sans fil), câble endommagé ou moteur en panne.",
        selfFixable: false,
        estimatedRepairCost: "50 à 150 €",
        replacementAdvice: "Pour un aspirateur d'entrée de gamme (60-120 €), le remplacement est souvent plus avantageux. Pour un modèle haut de gamme (Dyson, Miele), la réparation peut valoir le coup.",
      },
      {
        slug: "bruit-excessif",
        name: "Bruit excessif",
        description:
          "Moteur usé, hélice endommagée ou objet coincé dans le tuyau.",
        selfFixable: true,
        estimatedRepairCost: "30 à 150 €",
      },
      {
        slug: "batterie-ne-tient-plus",
        name: "Batterie ne tient plus (sans fil)",
        description:
          "Batterie en fin de vie ou chargeur défectueux.",
        selfFixable: false,
        estimatedRepairCost: "40 à 120 €",
      },
    ],
    repairTips: [
      "Videz le sac ou le bac à poussière régulièrement.",
      "Nettoyez ou remplacez les filtres selon les recommandations du fabricant.",
      "Vérifiez qu'aucun objet ne bloque le tuyau ou la brosse.",
      "Pour les modèles sans fil, évitez de laisser la batterie se décharger complètement.",
    ],
    faq: [
      {
        question:
          "La batterie de mon aspirateur sans fil ne tient plus après 1 an, est-ce couvert ?",
        answer:
          "Oui. La batterie fait partie intégrante du produit et est couverte par la garantie légale de conformité de 2 ans si sa durée de vie est anormalement courte.",
      },
      {
        question: "Le vendeur dit que l'usure de la batterie est normale, que faire ?",
        answer:
          "Si la batterie ne fonctionne plus du tout ou tient moins de quelques minutes après 1 an, ce n'est pas une usure normale. Insistez auprès du vendeur en citant l'article L217-3 du Code de la consommation.",
      },
      {
        question: "Mon aspirateur robot ne navigue plus correctement, est-ce un défaut de conformité ?",
        answer:
          "Oui, si le système de navigation ne fonctionne plus comme prévu, c'est un défaut de conformité. La garantie légale s'applique si l'achat date de moins de 2 ans.",
      },
    ],
  },
  {
    slug: "panne-television-garantie",
    name: "Télévision",
    icon: "📺",
    averageLifespan: "7 à 10 ans",
    seoTitle:
      "Télévision en panne sous garantie — Vos droits et recours | Repair Copilot",
    seoDescription:
      "Votre TV est en panne ? Écran noir, pixels morts, son qui ne marche plus ? Vérifiez votre garantie et générez un mail de réclamation.",
    introduction:
      "Une télévision en panne est particulièrement frustrante, surtout quand elle était chère. La garantie légale de conformité de 2 ans vous couvre contre les défauts qui n'existaient pas au moment de l'achat.",
    commonProblems: [
      {
        slug: "ecran-noir",
        name: "Écran noir (mais le son fonctionne)",
        description:
          "Rétroéclairage LED défaillant, carte T-Con en panne ou nappe de connexion défectueuse.",
        selfFixable: false,
        estimatedRepairCost: "100 à 350 €",
      },
      {
        slug: "pixels-morts-lignes",
        name: "Pixels morts ou lignes sur l'écran",
        description:
          "Dalle LCD/OLED endommagée ou carte de traitement vidéo défectueuse.",
        selfFixable: false,
        estimatedRepairCost: "150 à 400 €",
        replacementAdvice: "Le remplacement de la dalle représente souvent 50 à 70 % du prix d'une TV neuve. Pour les modèles d'entrée de gamme, le remplacement de la TV est généralement plus économique.",
      },
      {
        slug: "pas-de-son",
        name: "Pas de son",
        description:
          "Haut-parleurs défectueux, carte son en panne ou problème de connectique HDMI.",
        selfFixable: true,
        estimatedRepairCost: "50 à 200 €",
      },
      {
        slug: "ne-sallume-plus",
        name: "Ne s'allume plus",
        description:
          "Alimentation défectueuse, condensateurs gonflés ou carte mère en panne.",
        selfFixable: false,
        estimatedRepairCost: "80 à 300 €",
      },
    ],
    repairTips: [
      "Vérifiez que tous les câbles (HDMI, alimentation) sont bien branchés.",
      "Essayez une réinitialisation usine via les paramètres de la TV.",
      "Débranchez la TV pendant 30 secondes puis rebranchez pour un reset électrique.",
      "Testez une autre source (box, console) pour isoler le problème.",
    ],
    faq: [
      {
        question: "Ma TV a des lignes sur l'écran après 16 mois, que faire ?",
        answer:
          "C'est un défaut de conformité couvert par la garantie légale (2 ans). Contactez le vendeur pour demander réparation ou remplacement. Vous n'avez pas à prouver que le défaut existait à l'achat si l'appareil a moins de 2 ans.",
      },
      {
        question: "Le magasin me dit d'appeler le SAV Samsung/LG directement, que faire ?",
        answer:
          "Légalement, c'est le vendeur qui est responsable de la garantie de conformité, pas le fabricant. Insistez auprès du magasin en lui rappelant ses obligations légales (article L217-3).",
      },
      {
        question: "La réparation prend trop de temps, ai-je des recours ?",
        answer:
          "Oui. Selon l'article L217-10 du Code de la consommation, la réparation doit être effectuée dans un délai raisonnable. Si ce délai est dépassé, vous pouvez demander le remplacement ou le remboursement.",
      },
    ],
  },
  {
    slug: "panne-ordinateur-portable-garantie",
    name: "Ordinateur portable",
    icon: "💻",
    averageLifespan: "4 à 7 ans",
    seoTitle:
      "Ordinateur portable en panne sous garantie — Vos droits | Repair Copilot",
    seoDescription:
      "Votre PC portable est en panne ? Écran cassé, batterie morte, surchauffe ? Vérifiez votre garantie et générez un mail de réclamation.",
    introduction:
      "Un ordinateur portable en panne peut impacter votre travail et votre quotidien. La garantie légale de conformité vous protège pendant 2 ans, en plus de la garantie commerciale éventuelle du fabricant.",
    commonProblems: [
      {
        slug: "batterie-ne-tient-plus",
        name: "La batterie ne tient plus",
        description:
          "Batterie en fin de vie prématurée ou problème de charge.",
        selfFixable: false,
        estimatedRepairCost: "60 à 200 €",
      },
      {
        slug: "ecran-defaillant",
        name: "Écran défaillant",
        description:
          "Dalle fissurée, pixels morts, rétroéclairage défectueux ou charnière cassée.",
        selfFixable: false,
        estimatedRepairCost: "100 à 400 €",
      },
      {
        slug: "surchauffe-arrets",
        name: "Surchauffe et arrêts inopinés",
        description:
          "Ventilateur encrassé, pâte thermique sèche ou composants défectueux.",
        selfFixable: true,
        estimatedRepairCost: "30 à 150 €",
      },
      {
        slug: "clavier-touchpad-panne",
        name: "Clavier ou touchpad ne fonctionne plus",
        description:
          "Nappe de connexion défectueuse, liquide renversé ou usure prématurée.",
        selfFixable: false,
        estimatedRepairCost: "50 à 200 €",
      },
    ],
    repairTips: [
      "Nettoyez les ventilateurs avec une bombe à air comprimé tous les 6 mois.",
      "Évitez de poser le PC sur des surfaces molles qui bloquent la ventilation.",
      "Calibrez la batterie une fois par mois (charge complète puis décharge).",
      "Avant de payer une réparation, vérifiez si le problème est logiciel (réinstallation).",
    ],
    faq: [
      {
        question:
          "La batterie de mon PC ne tient plus que 30 minutes après 1 an, c'est un défaut ?",
        answer:
          "Si la batterie était censée tenir plusieurs heures et qu'elle ne tient plus que 30 minutes après seulement 1 an, c'est probablement un défaut de conformité couvert par la garantie légale de 2 ans.",
      },
      {
        question: "J'ai une garantie fabricant de 1 an ET la garantie légale, laquelle prime ?",
        answer:
          "Les deux coexistent. La garantie commerciale du fabricant (souvent 1 an) est un bonus. La garantie légale de conformité (2 ans) s'applique en parallèle et est exercée auprès du vendeur. Vous pouvez choisir la plus avantageuse.",
      },
      {
        question: "Le vendeur me dit que c'est un problème logiciel, pas matériel. Que faire ?",
        answer:
          "Si le problème logiciel était présent dès l'achat ou résulte d'une mise à jour du fabricant, c'est un défaut de conformité. Le logiciel pré-installé fait partie du produit vendu.",
      },
    ],
  },
  {
    slug: "panne-smartphone-garantie",
    name: "Smartphone",
    icon: "📱",
    averageLifespan: "3 à 5 ans",
    seoTitle:
      "Smartphone en panne sous garantie — Vos droits et recours | Repair Copilot",
    seoDescription:
      "Votre smartphone est en panne ? Batterie, écran, bug ? Découvrez vos droits de garantie et générez un mail de réclamation gratuit.",
    introduction:
      "Un smartphone en panne, c'est devenu presque aussi urgent qu'une panne de voiture. Avant de courir en acheter un nouveau, vérifiez vos droits : la garantie légale de 2 ans couvre de nombreux défauts.",
    commonProblems: [
      {
        slug: "batterie-se-degrade",
        name: "Batterie qui se dégrade trop vite",
        description:
          "Capacité réduite prématurément, gonflement de batterie ou problème de charge.",
        selfFixable: false,
        estimatedRepairCost: "50 à 150 €",
      },
      {
        slug: "ecran-ne-repond-plus",
        name: "Écran qui ne répond plus ou affiche des artefacts",
        description:
          "Dalle endommagée, nappe de connexion défectueuse ou problème tactile.",
        selfFixable: false,
        estimatedRepairCost: "80 à 350 €",
      },
      {
        slug: "ralentissements-bugs",
        name: "Ralentissements et bugs",
        description:
          "Mémoire saturée, processeur défaillant ou problème logiciel systémique.",
        selfFixable: true,
        estimatedRepairCost: "0 à 100 €",
      },
      {
        slug: "appareil-photo-defaillant",
        name: "Appareil photo défaillant",
        description:
          "Module caméra en panne, autofocus défectueux ou traitement d'image défaillant.",
        selfFixable: false,
        estimatedRepairCost: "60 à 200 €",
      },
    ],
    repairTips: [
      "Redémarrez le téléphone avant tout pour écarter un bug temporaire.",
      "Vérifiez si une mise à jour système est disponible.",
      "Essayez un autre câble et chargeur avant de conclure à une panne de batterie.",
      "Sauvegardez vos données avant toute démarche de réparation.",
    ],
    faq: [
      {
        question: "Mon iPhone/Samsung a 15 mois et la batterie ne tient plus, suis-je couvert ?",
        answer:
          "Si la batterie se dégrade anormalement vite (par exemple, elle ne tient plus une demi-journée), c'est un défaut de conformité. La garantie légale de 2 ans s'applique auprès du vendeur.",
      },
      {
        question: "J'ai acheté mon téléphone en ligne, comment faire ?",
        answer:
          "Les mêmes règles s'appliquent pour les achats en ligne. Contactez le vendeur (site e-commerce) par mail ou via son service client. La garantie légale de conformité s'exerce de la même façon.",
      },
      {
        question: "L'écran s'est fissuré tout seul, est-ce couvert ?",
        answer:
          "Si l'écran s'est fissuré sans choc (spontanément), c'est un défaut de conformité couvert par la garantie. Si la fissure résulte d'une chute, ce n'est pas couvert par la garantie légale.",
      },
    ],
  },
  {
    slug: "panne-machine-a-cafe-garantie",
    name: "Machine à café",
    icon: "☕",
    averageLifespan: "5 à 10 ans",
    seoTitle:
      "Machine à café en panne sous garantie — Vos droits | Repair Copilot",
    seoDescription:
      "Votre machine à café est en panne ? Nespresso, Dolce Gusto, expresso ? Vérifiez votre garantie et générez un mail de réclamation.",
    introduction:
      "Une machine à café en panne, c'est le début de journée compromis. Que ce soit une machine à capsules, un expresso broyeur ou une cafetière classique, la garantie légale de 2 ans vous protège.",
    commonProblems: [
      {
        slug: "ne-coule-plus",
        name: "Ne coule plus ou coule mal",
        description:
          "Circuit d'eau entartré, pompe défectueuse ou bloc infuseur bloqué.",
        selfFixable: true,
        estimatedRepairCost: "20 à 100 €",
      },
      {
        slug: "fuite-eau",
        name: "Fuite d'eau",
        description:
          "Joint usé, réservoir fissuré ou raccord interne desserré.",
        selfFixable: true,
        estimatedRepairCost: "20 à 100 €",
      },
      {
        slug: "ne-sallume-plus",
        name: "Ne s'allume plus",
        description:
          "Carte électronique en panne, interrupteur défectueux ou problème d'alimentation.",
        selfFixable: false,
        estimatedRepairCost: "50 à 150 €",
        replacementAdvice: "Pour une machine à capsules (Nespresso, Dolce Gusto) achetée entre 50 et 120 €, le remplacement est souvent plus judicieux. Pour un expresso broyeur (300-800 €), la réparation reste rentable.",
      },
      {
        slug: "cafe-froid",
        name: "Café froid ou tiède",
        description:
          "Résistance de chauffe défectueuse, thermostat en panne ou entartrage sévère.",
        selfFixable: true,
        estimatedRepairCost: "30 à 100 €",
        replacementAdvice: "Pour les machines à capsules d'entrée de gamme, si la résistance est en cause, le remplacement de l'appareil est souvent plus économique.",
      },
    ],
    repairTips: [
      "Détartrez votre machine tous les 2-3 mois selon votre utilisation.",
      "Utilisez de l'eau filtrée pour réduire le calcaire.",
      "Nettoyez le bloc infuseur régulièrement si votre machine le permet.",
      "Si la machine ne coule plus, essayez un cycle de détartrage avant de contacter le SAV.",
    ],
    faq: [
      {
        question: "Ma Nespresso ne fonctionne plus après 6 mois, que faire ?",
        answer:
          "Contactez le vendeur (pas Nespresso directement) pour faire jouer la garantie légale de conformité. À 6 mois, vous êtes largement couvert et le vendeur doit prendre en charge la réparation.",
      },
      {
        question: "L'entartrage est-il couvert par la garantie ?",
        answer:
          "L'entartrage est considéré comme un défaut d'entretien, donc non couvert. Cependant, si la machine est conçue d'une manière qui provoque un entartrage anormalement rapide, cela peut être un défaut de conception couvert par la garantie.",
      },
      {
        question: "J'ai acheté ma machine en promo/soldes, ai-je les mêmes droits ?",
        answer:
          "Oui. La garantie légale de conformité s'applique de la même façon, que le produit ait été acheté en soldes, en promotion ou au prix fort. Aucune exception.",
      },
    ],
  },
  {
    slug: "panne-congelateur-garantie",
    name: "Congélateur",
    icon: "🧊",
    averageLifespan: "10 à 15 ans",
    seoTitle:
      "Congélateur en panne sous garantie — Vos droits et recours | Repair Copilot",
    seoDescription:
      "Votre congélateur ne congèle plus, givre ou fait du bruit ? Vérifiez vos droits de garantie légale et générez un mail de réclamation gratuit.",
    introduction:
      "Un congélateur en panne, c'est le risque de perdre des semaines de courses et de plats préparés. Avant de tout jeter, vérifiez vos droits : la garantie légale de conformité de 2 ans peut couvrir la réparation ou le remplacement de votre appareil.",
    commonProblems: [
      {
        slug: "ne-congele-plus",
        name: "Ne congèle plus",
        description:
          "Compresseur défaillant, fuite de gaz réfrigérant ou thermostat en panne empêchant l'appareil d'atteindre la température requise.",
        selfFixable: false,
        estimatedRepairCost: "150 à 400 €",
      },
      {
        slug: "givre-excessif",
        name: "Givre excessif",
        description:
          "Joint de porte usé, sonde de dégivrage défectueuse ou système No Frost en panne provoquant une accumulation anormale de givre.",
        selfFixable: true,
        estimatedRepairCost: "40 à 180 €",
      },
      {
        slug: "fait-du-bruit",
        name: "Fait du bruit",
        description:
          "Ventilateur obstrué par le givre, compresseur vieillissant ou appareil mal nivelé sur le sol.",
        selfFixable: true,
        estimatedRepairCost: "50 à 200 €",
      },
      {
        slug: "fuite-eau",
        name: "Fuite d'eau",
        description:
          "Bac de dégivrage fissuré, tuyau d'évacuation bouché ou joint de porte défectueux laissant entrer l'air chaud.",
        selfFixable: true,
        estimatedRepairCost: "30 à 120 €",
      },
    ],
    repairTips: [
      "Vérifiez que le thermostat est bien réglé (entre -18°C et -24°C selon les recommandations du fabricant).",
      "Dégivrez manuellement l'appareil si le givre dépasse 3 mm d'épaisseur pour maintenir son efficacité.",
      "Assurez-vous que le congélateur est éloigné de toute source de chaleur et que l'air circule librement à l'arrière.",
      "Contrôlez l'étanchéité du joint de porte en plaçant une feuille de papier : si elle glisse, le joint est à remplacer.",
    ],
    faq: [
      {
        question:
          "Mon congélateur ne congèle plus après 14 mois, suis-je couvert ?",
        answer:
          "En principe, oui. La garantie légale de conformité couvre votre appareil pendant 2 ans à compter de l'achat (article L217-3 du Code de la consommation). Selon votre situation, le vendeur est tenu de réparer ou de remplacer votre congélateur sans frais.",
      },
      {
        question:
          "Le vendeur me dit que le givre est dû à un mauvais entretien, que faire ?",
        answer:
          "Si votre congélateur a moins de 2 ans, c'est au vendeur de prouver que le défaut résulte d'une mauvaise utilisation de votre part (article L217-7 du Code de la consommation). En principe, la charge de la preuve ne vous incombe pas durant cette période.",
      },
      {
        question:
          "Puis-je demander le remboursement plutôt que la réparation de mon congélateur ?",
        answer:
          "Selon l'article L217-8 du Code de la consommation, vous pouvez choisir entre la réparation et le remplacement. Le remboursement n'est envisageable que si ces deux solutions s'avèrent impossibles ou disproportionnées. En principe, le vendeur doit d'abord tenter la réparation ou le remplacement.",
      },
    ],
  },
  {
    slug: "panne-micro-ondes-garantie",
    name: "Micro-ondes",
    icon: "📡",
    averageLifespan: "8 à 10 ans",
    seoTitle:
      "Micro-ondes en panne sous garantie — Vos droits et recours | Repair Copilot",
    seoDescription:
      "Votre micro-ondes ne chauffe plus, fait des étincelles ou le plateau ne tourne plus ? Vérifiez vos droits de garantie et générez un mail de réclamation gratuit.",
    introduction:
      "Le micro-ondes est devenu un indispensable de la cuisine. Quand il tombe en panne, cela perturbe l'organisation des repas. En tant que consommateur, vous disposez de la garantie légale de conformité de 2 ans pour faire valoir vos droits auprès du vendeur.",
    commonProblems: [
      {
        slug: "ne-chauffe-plus",
        name: "Ne chauffe plus",
        description:
          "Magnétron défectueux, fusible thermique grillé ou condensateur haute tension en panne empêchant la production de micro-ondes.",
        selfFixable: false,
        estimatedRepairCost: "60 à 150 €",
        replacementAdvice: "Un micro-ondes neuf coûte entre 50 et 150 €. La réparation du magnétron dépasse souvent le prix d'un appareil neuf : le remplacement est généralement plus économique.",
      },
      {
        slug: "plateau-ne-tourne-plus",
        name: "Le plateau ne tourne plus",
        description:
          "Moteur d'entraînement en panne, coupleur cassé ou guide rouleau endommagé bloquant la rotation.",
        selfFixable: true,
        estimatedRepairCost: "15 à 50 €",
      },
      {
        slug: "etincelles-interieur",
        name: "Étincelles à l'intérieur",
        description:
          "Plaque mica abîmée, paroi intérieure endommagée ou résidu alimentaire carbonisé provoquant des arcs électriques.",
        selfFixable: true,
        estimatedRepairCost: "5 à 30 €",
      },
      {
        slug: "porte-ne-ferme-plus",
        name: "La porte ne ferme plus",
        description:
          "Loquet de sécurité cassé, charnière usée ou micro-interrupteur de porte défectueux empêchant le démarrage.",
        selfFixable: false,
        estimatedRepairCost: "20 à 80 €",
        replacementAdvice: "Si le coût de réparation approche 50-80 €, il est souvent préférable de racheter un micro-ondes neuf (dès 50 €).",
      },
    ],
    repairTips: [
      "Nettoyez l'intérieur après chaque utilisation pour éviter les résidus alimentaires carbonisés qui peuvent causer des étincelles.",
      "Vérifiez l'état de la plaque mica (petite plaque cartonnée sur la paroi) : si elle est brûlée ou tachée, elle doit être remplacée.",
      "Ne faites jamais fonctionner un micro-ondes à vide, cela peut endommager le magnétron de façon irréversible.",
      "Si le plateau ne tourne plus, vérifiez d'abord que le guide rouleau est bien en place et que rien ne bloque la rotation.",
    ],
    faq: [
      {
        question:
          "Mon micro-ondes ne chauffe plus après 10 mois, ai-je des droits ?",
        answer:
          "En principe, oui. La garantie légale de conformité vous couvre pendant 2 ans à compter de la date d'achat (article L217-3 du Code de la consommation). Selon votre situation, le vendeur doit prendre en charge la réparation ou le remplacement de l'appareil sans frais.",
      },
      {
        question:
          "Le vendeur me facture des frais de déplacement pour le diagnostic, est-ce légal ?",
        answer:
          "En principe, non. Dans le cadre de la garantie légale de conformité, la réparation doit être effectuée sans aucun frais pour le consommateur, y compris les frais de déplacement et de diagnostic (article L217-11 du Code de la consommation).",
      },
      {
        question:
          "Mon micro-ondes fait des étincelles, est-ce dangereux et couvert par la garantie ?",
        answer:
          "Des étincelles peuvent indiquer un défaut de la plaque mica ou de la paroi intérieure. Si l'appareil a moins de 2 ans, cela constitue en principe un défaut de conformité couvert par la garantie légale. Selon votre situation, cessez d'utiliser l'appareil et contactez le vendeur pour faire jouer vos droits (article L217-8).",
      },
    ],
  },
  {
    slug: "panne-aspirateur-robot-garantie",
    name: "Aspirateur robot",
    icon: "🤖",
    averageLifespan: "4 à 7 ans",
    seoTitle:
      "Aspirateur robot en panne sous garantie — Vos droits et recours | Repair Copilot",
    seoDescription:
      "Votre aspirateur robot ne se charge plus, ne retourne pas à sa base ou a des capteurs défaillants ? Vérifiez votre garantie et générez un mail de réclamation.",
    introduction:
      "L'aspirateur robot est devenu un allié précieux du quotidien. Quand il tombe en panne — batterie, capteurs, brosses — la déception est d'autant plus grande que l'investissement est souvent conséquent. La garantie légale de conformité de 2 ans vous protège contre les défauts qui apparaissent après l'achat.",
    commonProblems: [
      {
        slug: "ne-se-charge-plus",
        name: "Ne se charge plus",
        description:
          "Batterie en fin de vie prématurée, chargeur ou base de charge défectueux, ou connecteurs de charge encrassés.",
        selfFixable: true,
        estimatedRepairCost: "40 à 150 €",
      },
      {
        slug: "ne-retourne-pas-base",
        name: "Ne retourne pas à sa base",
        description:
          "Capteurs infrarouges sales ou défectueux, signal de la base perturbé ou problème du module de navigation.",
        selfFixable: true,
        estimatedRepairCost: "30 à 120 €",
      },
      {
        slug: "brosse-bloquee",
        name: "Brosse bloquée",
        description:
          "Cheveux et débris enroulés autour de la brosse, moteur de brosse défaillant ou mécanisme d'entraînement cassé.",
        selfFixable: true,
        estimatedRepairCost: "15 à 80 €",
      },
      {
        slug: "capteurs-defaillants",
        name: "Capteurs défaillants",
        description:
          "Capteurs de vide, de mur ou lidar encrassés ou en panne, entraînant des collisions répétées ou un parcours incohérent.",
        selfFixable: false,
        estimatedRepairCost: "60 à 200 €",
      },
    ],
    repairTips: [
      "Nettoyez les capteurs (anti-chute, lidar, infrarouges) avec un chiffon doux et sec au moins une fois par semaine.",
      "Retirez régulièrement les cheveux et fils enroulés autour de la brosse principale et des brosses latérales.",
      "Vérifiez que les contacts de charge sur le robot et la base sont propres et exempts de poussière.",
      "Redémarrez le robot et l'application associée en cas de comportement erratique avant de conclure à une panne matérielle.",
    ],
    faq: [
      {
        question:
          "Mon aspirateur robot ne se charge plus après 8 mois, est-ce couvert ?",
        answer:
          "En principe, oui. La batterie et le système de charge font partie intégrante du produit et sont couverts par la garantie légale de conformité de 2 ans (article L217-3 du Code de la consommation). Selon votre situation, si la panne n'est pas due à une mauvaise utilisation, le vendeur doit prendre en charge la réparation.",
      },
      {
        question:
          "Le vendeur dit que les brosses sont des consommables non couverts, a-t-il raison ?",
        answer:
          "Les brosses d'usure peuvent effectivement être considérées comme des consommables. Cependant, si le moteur de brosse ou le mécanisme d'entraînement est en panne, il s'agit d'un défaut de conformité couvert par la garantie légale (article L217-7). En principe, l'usure anormalement rapide d'une pièce peut aussi constituer un défaut.",
      },
      {
        question:
          "Les capteurs de mon robot sont défaillants, puis-je exiger un remplacement ?",
        answer:
          "Selon l'article L217-8 du Code de la consommation, vous avez le choix entre la réparation et le remplacement. En principe, si les capteurs défaillants rendent l'appareil impropre à son usage, le vendeur doit proposer une solution sans frais dans un délai raisonnable.",
      },
    ],
  },
  {
    slug: "panne-tablette-garantie",
    name: "Tablette",
    icon: "📱",
    averageLifespan: "3 à 5 ans",
    seoTitle:
      "Tablette en panne sous garantie — Vos droits et recours | Repair Copilot",
    seoDescription:
      "Votre tablette ne s'allume plus, l'écran ne répond plus ou la batterie lâche ? Vérifiez votre garantie légale et générez un mail de réclamation gratuit.",
    introduction:
      "La tablette est devenue un outil du quotidien pour le travail, les études et les loisirs. Quand elle tombe en panne prématurément, cela peut sérieusement impacter votre routine. La garantie légale de conformité de 2 ans vous permet de faire valoir vos droits auprès du vendeur.",
    commonProblems: [
      {
        slug: "ecran-ne-repond-plus",
        name: "L'écran ne répond plus",
        description:
          "Dalle tactile défectueuse, nappe de connexion endommagée ou dysfonctionnement du numériseur empêchant toute interaction.",
        selfFixable: false,
        estimatedRepairCost: "80 à 300 €",
      },
      {
        slug: "batterie-se-degrade",
        name: "Batterie qui se dégrade",
        description:
          "Capacité réduite prématurément, gonflement de batterie ou cycle de charge anormalement court par rapport aux spécifications.",
        selfFixable: false,
        estimatedRepairCost: "50 à 150 €",
      },
      {
        slug: "ne-sallume-plus",
        name: "Ne s'allume plus",
        description:
          "Carte mère défectueuse, connecteur de charge endommagé ou batterie complètement déchargée et incapable de reprendre une charge.",
        selfFixable: false,
        estimatedRepairCost: "80 à 250 €",
        replacementAdvice: "Pour une tablette d'entrée de gamme (150-250 €), une réparation de carte mère n'est généralement pas rentable. Pour un iPad ou une tablette haut de gamme, comparez le coût de réparation au prix d'un modèle reconditionné.",
      },
      {
        slug: "ralentissements-bugs",
        name: "Ralentissements et bugs",
        description:
          "Mémoire vive insuffisante suite à des mises à jour, stockage saturé ou composants internes présentant des défaillances intermittentes.",
        selfFixable: true,
        estimatedRepairCost: "0 à 100 €",
      },
    ],
    repairTips: [
      "Effectuez un redémarrage forcé (bouton power + volume) avant de conclure à une panne matérielle.",
      "Libérez régulièrement de l'espace de stockage pour éviter les ralentissements liés à une mémoire saturée.",
      "Utilisez exclusivement le chargeur d'origine ou un chargeur certifié compatible pour préserver la batterie.",
      "Vérifiez si une mise à jour système est disponible, car certains bugs sont corrigés par des correctifs logiciels.",
    ],
    faq: [
      {
        question:
          "L'écran tactile de ma tablette ne répond plus après 11 mois, que faire ?",
        answer:
          "En principe, il s'agit d'un défaut de conformité couvert par la garantie légale de 2 ans (article L217-3 du Code de la consommation). Selon votre situation, contactez le vendeur (pas le fabricant) pour demander la réparation ou le remplacement sans frais.",
      },
      {
        question:
          "Ma tablette ralentit fortement après une mise à jour, est-ce un défaut de conformité ?",
        answer:
          "En principe, si une mise à jour du fabricant provoque des ralentissements rendant l'appareil impropre à son usage normal, cela peut être considéré comme un défaut de conformité (article L217-7 du Code de la consommation). Selon votre situation, le logiciel fait partie intégrante du produit vendu.",
      },
      {
        question:
          "La batterie de ma tablette ne tient plus que 2 heures après 18 mois, ai-je des recours ?",
        answer:
          "Selon votre situation, si la batterie tenait initialement bien plus longtemps, cette dégradation prématurée peut constituer un défaut de conformité. En principe, l'article L217-8 du Code de la consommation vous permet de demander au vendeur la réparation ou le remplacement dans le cadre de la garantie légale de 2 ans.",
      },
    ],
  },
  {
    slug: "panne-console-jeux-garantie",
    name: "Console de jeux",
    icon: "🎮",
    averageLifespan: "5 à 8 ans",
    seoTitle:
      "Console de jeux en panne sous garantie — Vos droits et recours | Repair Copilot",
    seoDescription:
      "Votre console de jeux ne s'allume plus, surchauffe ou le lecteur de disque est en panne ? Vérifiez votre garantie légale et générez un mail de réclamation.",
    introduction:
      "Qu'il s'agisse d'une PlayStation, Xbox ou Nintendo Switch, une console de jeux en panne est une source de grande frustration. Avant de vous résigner à un achat coûteux, sachez que la garantie légale de conformité de 2 ans vous offre des droits solides en tant que consommateur.",
    commonProblems: [
      {
        slug: "ne-sallume-plus",
        name: "Ne s'allume plus",
        description:
          "Bloc d'alimentation défectueux, carte mère en panne ou bouton power défaillant empêchant tout démarrage de la console.",
        selfFixable: false,
        estimatedRepairCost: "100 à 300 €",
      },
      {
        slug: "surchauffe-arrets",
        name: "Surchauffe et arrêts inopinés",
        description:
          "Ventilateur encrassé, pâte thermique sèche ou dissipateur thermique mal fixé provoquant des coupures de protection.",
        selfFixable: true,
        estimatedRepairCost: "30 à 120 €",
      },
      {
        slug: "lecteur-disque-defaillant",
        name: "Lecteur de disque défaillant",
        description:
          "Lentille laser usée, moteur du lecteur en panne ou mécanisme d'insertion bloqué empêchant la lecture des jeux physiques.",
        selfFixable: false,
        estimatedRepairCost: "60 à 200 €",
      },
      {
        slug: "probleme-manette",
        name: "Problème de manette",
        description:
          "Drift du joystick, boutons non réactifs, batterie de manette défaillante ou perte de connexion Bluetooth récurrente.",
        selfFixable: true,
        estimatedRepairCost: "20 à 80 €",
      },
    ],
    repairTips: [
      "Assurez-vous que la console est bien ventilée et éloignée de toute source de chaleur pour prévenir la surchauffe.",
      "Nettoyez régulièrement les aérations et le ventilateur à l'aide d'une bombe à air comprimé pour éviter l'accumulation de poussière.",
      "Vérifiez que le câble d'alimentation est en bon état et branché sur une prise fonctionnelle avant de conclure à une panne.",
      "Pour le drift de manette, essayez une mise à jour du firmware de la manette avant d'envisager un remplacement.",
    ],
    faq: [
      {
        question:
          "Ma console ne s'allume plus après 15 mois, suis-je couvert par la garantie ?",
        answer:
          "En principe, oui. La garantie légale de conformité vous couvre pendant 2 ans à compter de la date d'achat (article L217-3 du Code de la consommation). Selon votre situation, le vendeur est tenu de réparer ou de remplacer la console sans frais.",
      },
      {
        question:
          "Le drift de ma manette est-il couvert par la garantie légale ?",
        answer:
          "En principe, le drift du joystick (déviation involontaire) constitue un défaut de conformité si la manette a été vendue avec la console. Selon votre situation, l'article L217-7 du Code de la consommation prévoit que le vendeur est responsable des défauts apparaissant dans les 2 ans suivant l'achat.",
      },
      {
        question:
          "Le vendeur refuse la garantie car j'ai ouvert la console pour la nettoyer, est-ce justifié ?",
        answer:
          "Selon l'article L217-8 du Code de la consommation, le vendeur ne peut refuser la garantie que s'il prouve que le défaut résulte de votre intervention. En principe, un simple nettoyage n'est pas la cause d'une panne matérielle. Selon votre situation, insistez auprès du vendeur et demandez-lui de prouver le lien entre votre geste et la panne.",
      },
    ],
  },
  {
    slug: "panne-montre-connectee-garantie",
    name: "Montre connectée",
    icon: "⌚",
    averageLifespan: "3 à 5 ans",
    seoTitle:
      "Montre connectée en panne sous garantie — Vos droits et recours | Repair Copilot",
    seoDescription:
      "Votre montre connectée ne tient plus la charge, l'écran ne répond plus ou les capteurs sont défaillants ? Vérifiez votre garantie et générez un mail de réclamation.",
    introduction:
      "Les montres connectées — Apple Watch, Samsung Galaxy Watch, Garmin ou autres — sont des compagnons du quotidien pour le sport et la santé. Quand elles tombent en panne, le coût de remplacement peut être élevé. La garantie légale de conformité de 2 ans est là pour protéger vos droits de consommateur.",
    commonProblems: [
      {
        slug: "batterie-ne-tient-plus",
        name: "Batterie qui ne tient plus",
        description:
          "Autonomie réduite de manière prématurée, batterie qui ne dépasse plus quelques heures alors qu'elle tenait plusieurs jours initialement.",
        selfFixable: false,
        estimatedRepairCost: "50 à 150 €",
      },
      {
        slug: "ecran-ne-repond-plus",
        name: "Écran qui ne répond plus",
        description:
          "Dalle tactile défaillante, affichage figé, pixels morts ou écran qui reste noir malgré la charge de l'appareil.",
        selfFixable: false,
        estimatedRepairCost: "80 à 200 €",
        replacementAdvice: "Pour une montre connectée d'entrée ou milieu de gamme (150-250 €), le coût de remplacement de l'écran peut se rapprocher du prix d'un modèle neuf. Comparez avant de réparer.",
      },
      {
        slug: "capteurs-defaillants",
        name: "Capteurs défaillants",
        description:
          "Capteur cardiaque, oxymètre, accéléromètre ou GPS fournissant des données erronées ou ne fonctionnant plus du tout.",
        selfFixable: false,
        estimatedRepairCost: "60 à 150 €",
        replacementAdvice: "Les capteurs sont souvent intégrés à la carte mère. Si la réparation nécessite un remplacement complet, envisagez un modèle plus récent.",
      },
      {
        slug: "ne-se-connecte-plus",
        name: "Ne se connecte plus",
        description:
          "Bluetooth ou Wi-Fi défaillant empêchant la synchronisation avec le smartphone, perte de connexion récurrente ou appairage impossible.",
        selfFixable: true,
        estimatedRepairCost: "40 à 150 €",
      },
    ],
    repairTips: [
      "Redémarrez la montre et réinitialisez la connexion Bluetooth avant de conclure à une panne matérielle.",
      "Vérifiez que le logiciel de la montre est à jour, car certaines mises à jour corrigent des problèmes de capteurs ou de connectivité.",
      "Nettoyez le capteur cardiaque au dos de la montre avec un chiffon doux pour assurer des mesures fiables.",
      "Évitez d'exposer la montre à des températures extrêmes qui peuvent dégrader prématurément la batterie.",
    ],
    faq: [
      {
        question:
          "La batterie de ma montre connectée ne tient plus qu'une demi-journée après 9 mois, que faire ?",
        answer:
          "En principe, si l'autonomie annoncée était de plusieurs jours et qu'elle ne tient plus qu'une demi-journée après 9 mois, il s'agit d'un défaut de conformité couvert par la garantie légale de 2 ans (article L217-3 du Code de la consommation). Selon votre situation, contactez le vendeur pour faire valoir vos droits.",
      },
      {
        question:
          "Le capteur cardiaque donne des mesures erronées, est-ce couvert ?",
        answer:
          "En principe, oui. Les capteurs font partie intégrante des fonctionnalités promises du produit. S'ils fournissent des données erronées, cela constitue un défaut de conformité au sens de l'article L217-7 du Code de la consommation. Selon votre situation, le vendeur doit remédier au problème sans frais.",
      },
      {
        question:
          "Le vendeur me dit que c'est un problème d'application et non de matériel, que faire ?",
        answer:
          "Selon l'article L217-8 du Code de la consommation, le logiciel embarqué et les fonctionnalités connectées font partie du produit vendu. En principe, si le dysfonctionnement empêche l'utilisation normale de la montre, le vendeur reste responsable, qu'il s'agisse d'un défaut matériel ou logiciel. Selon votre situation, insistez sur cette obligation légale.",
      },
    ],
  },
];

export function getApplianceBySlug(slug: string): Appliance | undefined {
  return appliances.find((a) => a.slug === slug);
}

export function getAllApplianceSlugs(): string[] {
  return appliances.map((a) => a.slug);
}

export function getProblemBySlug(applianceSlug: string, problemSlug: string): CommonProblem | undefined {
  const appliance = getApplianceBySlug(applianceSlug);
  return appliance?.commonProblems.find((p) => p.slug === problemSlug);
}

export function getAllProblemSlugs(): { slug: string; problemSlug: string }[] {
  return appliances.flatMap((a) =>
    a.commonProblems.map((p) => ({ slug: a.slug, problemSlug: p.slug }))
  );
}
