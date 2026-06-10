export type TraditionalProgramItem = {
  time: string;
  title: string;
  description: string;
};

export const TRADITIONAL_PROGRAM_INTRO =
  "Plongez dans une journée rythmée par la tradition, l'émotion et l'élégance. Voici le programme prévu :";

export const TRADITIONAL_PROGRAM: TraditionalProgramItem[] = [
  {
    time: "15h30-17h00",
    title: "Accueil & installation des invités",
    description:
      "Arriverr a Nkongo-boulangerie du peuple... installation et accueil dans l'univers traditionel de la ceremonie",
  },
  {
    time: "17h00",
    title: "Début des pourparlers",
    description:
      "Ouverture officielle des échanges coutumiers entre les deux familles, dans le respect des traditions.",
  },
  {
    time: "19h00",
    title: "Clôture du mariage traditionnel",
    description: "Fin des rites traditionnels et des bénédictions familiales.",
  },
  {
    time: "19h00-20h00",
    title: "Apéritif & mise en ambiance",
    description:
      "Un moment convivial pour se retrouver autour de mets légers, de musiques et de rires avant le lancement de la soirée.",
  },
  {
    time: "20h30",
    title: "Début de la soirée de gala",
    description:
      "Place à l'élégance, à la danse et à la célébration d'un amour désormais scellé.",
  },
];
