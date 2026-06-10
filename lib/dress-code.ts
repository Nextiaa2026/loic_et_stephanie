export type DressCodeInspiration = {
  title: string;
  description: string;
  url: string;
};

export type DressCodeEvent = {
  eventLabel: string;
  ambiance: string;
  intro?: string | string[];
  expectedTitle: string;
  expected: string[];
  avoidTitle: string;
  avoid: string[];
  colorsTitle: string;
  colors: string[];
  inspiration?: DressCodeInspiration;
};

export const PINTEREST_DRESS_CODE_URL = "https://pin.it/5pjzme7aj";

/** Contenu dress code — libellés tels que fournis par les mariés. */
export const DRESS_CODE_EVENTS: DressCodeEvent[] = [
  {
    eventLabel: "Le Mariage Traditionnel - 01 Aout 2026 à Nkolafamba",
    ambiance: "✨ Splendeur Royale & Traditionnelle",
    intro:
      "Pour notre mariage traditionnel, nous souhaitons célébrer nos cultures dans un esprit raffiné et chaleureux. Cette journée sera l’occasion de mettre à l’honneur la beauté de nos traditions, tout en apportant une touche de modernité et d’élégance. Nous vous invitons donc à privilégier une tenue traditionnelle revisitée avec finesse",
    expectedTitle: "Ce qui est attendu",
    expected: [
      "Nous serions heureux de vous voir dans des vêtements inspirés de votre culture ou de l’univers africain : pagnes travaillés, boubous modernes, ensembles cousus sur mesure, tissus nobles ou broderies délicates.",
      "Des coupes soignées, accessoires élégants, et une touche de modernité affirmée.",
      "Ce jour est l’occasion d’oser, de briller, d’incarner votre plus belle version dans un style culturel chic et affirmé.",
    ],
    avoidTitle: "Ce qui est à éviter",
    avoid: [
      "Afin de préserver l’ambiance esthétique et culturelle de la cérémonie, nous vous demandons simplement d’éviter les tenues occidentales trop classiques.",
      "Les costumes de ville, les tailleurs sobres ou les robes cocktail standards ne correspondent pas au style recherché.",
      "Cette célébration n’est ni minimaliste ni formelle : nous souhaitons une atmosphère stylée, expressive et authentiquement traditionnelle.",
    ],
    colorsTitle: "Et les couleurs?",
    colors: [
      "Aucune couleur n’est imposée et vous êtes libres de choisir ce qui vous mettra le mieux en valeur.",
      "Cependant, pour ceux qui désirent s’accorder à l’univers visuel du mariage, sachez que notre palette s’inspire de nuances de rose et de doré, pour une ambiance douce, lumineuse et harmonieuse.",
    ],
    inspiration: {
      title: "Besoin d'inspiration?",
      description:
        "Nous avons préparé un moodboard pour vous aider à visualiser l’esprit général du dress code :",
      url: PINTEREST_DRESS_CODE_URL,
    },
  },
  {
    eventLabel: "✨ Dress Code – Mariage Religieux",
    ambiance: "Ambiance : semi‑formel, lumineux et joyeux",
    intro:
      "Pour cette cérémonie à Yaoundé, nous souhaitons une atmosphère élégante mais décontractée, mêlant douceur, chic et expressivité.",
    expectedTitle: "Ce qui est attendu",
    expected: [
      "Vous pouvez opter pour des tenues semi-formelles colorées et raffinées : robes fluides, ensembles élégants, tailleurs revisités ou tenues festives aux motifs subtils. Les accessoires de tête – chapeaux, bibis ou foulards stylés – sont les bienvenus et apportent cette touche sophistiquée qui sublime une tenue.",
      "Pour les messieurs, des pantalons bien coupés, des chemises habillées et des vestes légères seront parfaitement adaptés à l’esprit de la cérémonie.",
    ],
    avoidTitle: "Ce qui est à éviter",
    avoid: [
      "Pour préserver cette atmosphère lumineuse, nous vous invitons à éviter les tenues trop strictes ou très sobres. Les looks entièrement noirs, trop ternes ou trop formels ne correspondent pas à l’esprit joyeux et chaleureux de la journée. Ce moment n’est pas un rendez-vous professionnel mais une célébration vivante, colorée et remplie de joie.",
    ],
    colorsTitle: "Et les couleurs ?",
    colors: [
      "Laissez éclore votre créativité.",
      "Nous encourageons les couleurs vives, les tons joyeux, les motifs harmonieux et les textiles nobles.",
      "L’ambiance du mariage religieux sera lumineuse, et vos tenues contribueront à créer une atmosphère vibrante et chaleureuse.",
    ],
  },
  {
    eventLabel: "Dress Code – Soirée de Gala",
    ambiance: "Ambiance : lumière, élégance et célébration",
    intro: [
      "Pour cette soirée qui viendra clôturer notre union, nous souhaitons une ambiance chic, moderne et assumée.",
      "Votre tenue fera partie intégrante du décor : nous vous invitons donc à choisir des pièces élégantes, sophistiquées et pleines de présence.",
    ],
    expectedTitle: "Ce que nous attendons",
    expected: [
      "Les dames peuvent opter pour des robes longues ou structurées, des tenues couture, des jeux de textures, de broderies ou de volumes subtils.",
      "Les hommes sont encouragés à choisir des ensembles stylés : costumes modernes, coupes travaillées, pièces avec du caractère. Le smoking classique n’est pas obligatoire — n’hésitez pas à apporter une touche personnelle qui affirme votre style.",
    ],
    avoidTitle: "Ce que nous évitons",
    avoid: [
      "Afin de préserver l’ambiance chic de la soirée, nous vous demandons d’éviter les tenues trop “quotidiennes” ou trop classiques : costumes business, looks très sobres ou tenues de ville standards.",
      "Cette soirée est loin d’être conventionnelle : chaque invité participe à créer l’atmosphère raffinée de ce moment.",
    ],
    colorsTitle: "Et les couleurs ?",
    colors: [
      "Il n’y a aucune contrainte stricte concernant les couleurs.",
      "Exprimez-vous librement selon l’univers stylistique qui vous inspire.",
      "Pour ceux qui souhaitent s’harmoniser à la décoration, sachez que l’ambiance de la soirée tournera autour de tons orangés, dorés et lumineux, pour une atmosphère douce et éclatante.",
    ],
    inspiration: {
      title: "💡 Besoin d’inspiration ?",
      description:
        "Découvrez l’esprit visuel de la soirée à travers notre moodboard :",
      url: PINTEREST_DRESS_CODE_URL,
    },
  },
];
