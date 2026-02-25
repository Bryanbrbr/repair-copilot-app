export interface CommonProblem {
  name: string;
  description: string;
  selfFixable: boolean;
  estimatedRepairCost: string;
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
        name: "Le tambour ne tourne plus",
        description:
          "Peut être causé par une courroie cassée, un moteur défaillant ou un problème de carte électronique.",
        selfFixable: false,
        estimatedRepairCost: "80 à 250 €",
      },
      {
        name: "Fuite d'eau",
        description:
          "Souvent liée au joint de hublot, au tuyau d'arrivée ou à la pompe de vidange.",
        selfFixable: true,
        estimatedRepairCost: "30 à 150 €",
      },
      {
        name: "Ne s'allume plus",
        description:
          "Peut venir de la carte électronique, du verrou de porte ou d'un problème électrique.",
        selfFixable: false,
        estimatedRepairCost: "100 à 300 €",
      },
      {
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
        name: "Ne lave plus correctement",
        description:
          "Bras de lavage bouchés, pompe de circulation défectueuse ou problème de chauffe.",
        selfFixable: true,
        estimatedRepairCost: "50 à 200 €",
      },
      {
        name: "Ne vidange plus",
        description:
          "Filtre obstrué, pompe de vidange en panne ou tuyau bouché.",
        selfFixable: true,
        estimatedRepairCost: "40 à 180 €",
      },
      {
        name: "Fuite d'eau",
        description:
          "Joint de porte usé, raccord desserré ou bac à sel fissuré.",
        selfFixable: true,
        estimatedRepairCost: "30 à 150 €",
      },
      {
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
        name: "Ne refroidit plus",
        description:
          "Compresseur défaillant, fuite de gaz réfrigérant ou thermostat en panne.",
        selfFixable: false,
        estimatedRepairCost: "150 à 400 €",
      },
      {
        name: "Fait trop de givre",
        description:
          "Joint de porte défectueux, sonde de température en panne ou système de dégivrage automatique défaillant.",
        selfFixable: true,
        estimatedRepairCost: "50 à 200 €",
      },
      {
        name: "Fait du bruit",
        description:
          "Ventilateur obstrué, compresseur vieillissant ou appareil mal nivelé.",
        selfFixable: true,
        estimatedRepairCost: "50 à 250 €",
      },
      {
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
        name: "Ne chauffe plus",
        description:
          "Résistance grillée, thermostat défectueux ou carte électronique en panne.",
        selfFixable: false,
        estimatedRepairCost: "80 à 300 €",
      },
      {
        name: "La porte ne ferme plus correctement",
        description:
          "Charnières usées ou verrou de porte défectueux.",
        selfFixable: true,
        estimatedRepairCost: "30 à 100 €",
      },
      {
        name: "Le plateau du micro-ondes ne tourne plus",
        description:
          "Moteur du plateau en panne ou entraîneur cassé.",
        selfFixable: true,
        estimatedRepairCost: "20 à 80 €",
      },
      {
        name: "Affichage ou boutons ne répondent plus",
        description:
          "Carte de commande défectueuse ou problème de connectique.",
        selfFixable: false,
        estimatedRepairCost: "100 à 250 €",
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
        name: "Ne sèche plus correctement",
        description:
          "Filtre obstrué, résistance de chauffe défectueuse ou condenseur encrassé.",
        selfFixable: true,
        estimatedRepairCost: "50 à 200 €",
      },
      {
        name: "Ne démarre plus",
        description:
          "Problème de carte électronique, verrou de porte ou courroie cassée.",
        selfFixable: false,
        estimatedRepairCost: "80 à 250 €",
      },
      {
        name: "Fait un bruit anormal",
        description:
          "Roulements usés, tambour désaxé ou objet coincé.",
        selfFixable: false,
        estimatedRepairCost: "60 à 200 €",
      },
      {
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
        name: "Perte d'aspiration",
        description:
          "Filtre encrassé, sac plein, tuyau obstrué ou moteur fatigué.",
        selfFixable: true,
        estimatedRepairCost: "20 à 100 €",
      },
      {
        name: "Ne s'allume plus",
        description:
          "Problème de batterie (sans fil), câble endommagé ou moteur en panne.",
        selfFixable: false,
        estimatedRepairCost: "50 à 200 €",
      },
      {
        name: "Bruit excessif",
        description:
          "Moteur usé, hélice endommagée ou objet coincé dans le tuyau.",
        selfFixable: true,
        estimatedRepairCost: "30 à 150 €",
      },
      {
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
        name: "Écran noir (mais le son fonctionne)",
        description:
          "Rétroéclairage LED défaillant, carte T-Con en panne ou nappe de connexion défectueuse.",
        selfFixable: false,
        estimatedRepairCost: "100 à 350 €",
      },
      {
        name: "Pixels morts ou lignes sur l'écran",
        description:
          "Dalle LCD/OLED endommagée ou carte de traitement vidéo défectueuse.",
        selfFixable: false,
        estimatedRepairCost: "150 à 500 €",
      },
      {
        name: "Pas de son",
        description:
          "Haut-parleurs défectueux, carte son en panne ou problème de connectique HDMI.",
        selfFixable: true,
        estimatedRepairCost: "50 à 200 €",
      },
      {
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
        name: "La batterie ne tient plus",
        description:
          "Batterie en fin de vie prématurée ou problème de charge.",
        selfFixable: false,
        estimatedRepairCost: "60 à 200 €",
      },
      {
        name: "Écran défaillant",
        description:
          "Dalle fissurée, pixels morts, rétroéclairage défectueux ou charnière cassée.",
        selfFixable: false,
        estimatedRepairCost: "100 à 400 €",
      },
      {
        name: "Surchauffe et arrêts inopinés",
        description:
          "Ventilateur encrassé, pâte thermique sèche ou composants défectueux.",
        selfFixable: true,
        estimatedRepairCost: "30 à 150 €",
      },
      {
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
        name: "Batterie qui se dégrade trop vite",
        description:
          "Capacité réduite prématurément, gonflement de batterie ou problème de charge.",
        selfFixable: false,
        estimatedRepairCost: "50 à 150 €",
      },
      {
        name: "Écran qui ne répond plus ou affiche des artefacts",
        description:
          "Dalle endommagée, nappe de connexion défectueuse ou problème tactile.",
        selfFixable: false,
        estimatedRepairCost: "80 à 350 €",
      },
      {
        name: "Ralentissements et bugs",
        description:
          "Mémoire saturée, processeur défaillant ou problème logiciel systémique.",
        selfFixable: true,
        estimatedRepairCost: "0 à 100 €",
      },
      {
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
        name: "Ne coule plus ou coule mal",
        description:
          "Circuit d'eau entartré, pompe défectueuse ou bloc infuseur bloqué.",
        selfFixable: true,
        estimatedRepairCost: "30 à 150 €",
      },
      {
        name: "Fuite d'eau",
        description:
          "Joint usé, réservoir fissuré ou raccord interne desserré.",
        selfFixable: true,
        estimatedRepairCost: "20 à 100 €",
      },
      {
        name: "Ne s'allume plus",
        description:
          "Carte électronique en panne, interrupteur défectueux ou problème d'alimentation.",
        selfFixable: false,
        estimatedRepairCost: "50 à 200 €",
      },
      {
        name: "Café froid ou tiède",
        description:
          "Résistance de chauffe défectueuse, thermostat en panne ou entartrage sévère.",
        selfFixable: true,
        estimatedRepairCost: "30 à 120 €",
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
];

export function getApplianceBySlug(slug: string): Appliance | undefined {
  return appliances.find((a) => a.slug === slug);
}

export function getAllApplianceSlugs(): string[] {
  return appliances.map((a) => a.slug);
}
