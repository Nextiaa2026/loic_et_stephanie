/** Adresse de contact principale du site (mariage). */
export const SITE_CONTACT_EMAIL = "loicassontia@gmail.com" as const;

/** Dates officielles des cérémonies (source unique pour tout le site). */
export const WEDDING_DATES = {
  traditional: {
    label: "Mercredi 05 août 2026",
    time: "15h30",
    display: "Mercredi 05 août 2026 à 15h30",
    short: "05 août 2026",
    countdownIso: "2026-08-05T13:30:00",
  },
  religious: {
    label: "Vendredi 07 août 2026",
    time: "09h00",
    display: "Vendredi 07 août 2026 à 09h00",
    short: "07 août 2026",
  },
  civil: {
    label: "Jeudi 06 août 2026",
    time: "13h00",
    display: "Jeudi 06 août 2026 à 13h00",
    short: "6 août 2026",
  },
} as const;

export const WEDDING_LOCATIONS = {
  traditional: "Nkongoa - Boulangerie du peuple - Route de Mfou",
  traditionalMapsQuery: "Mfou+La+Boulangerie+du+Peuple",
  religious: "Cathédrale Notre-Dame des Victoires, Yaoundé",
  religiousMapsQuery: "Cathedrale+Notre+Dame+des+Victoires+Yaounde",
  civil: "Hôtel de Ville de Yaoundé ",
  civilMapsQuery: "Hôtel+de+ville+de+Yaoundé",
} as const;

export const WEDDING_IMAGES = {
  traditional: "/jl_2026_09.jpeg",
  religious: "/jl_2026_02.jpeg",
  civil: "/jl_2026_03.jpeg",
} as const;
