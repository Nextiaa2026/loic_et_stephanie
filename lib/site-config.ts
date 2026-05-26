/** Adresse de contact principale du site (mariage). */
export const SITE_CONTACT_EMAIL = "loicassontia@gmail.com" as const;

/** Dates officielles des cérémonies (source unique pour tout le site). */
export const WEDDING_DATES = {
  traditional: {
    label: "Samedi 1 août 2026",
    time: "15h00",
    display: "Samedi 1 août 2026 à 15h00",
    short: "1 août 2026",
    countdownIso: "2026-08-01T09:00:00",
  },
  religious: {
    label: "Vendredi 07 août 2026",
    time: "09h00",
    display: "Vendredi 07 août 2026 à 09h00",
    short: "07 août 2026",
  },
  civil: {
    label: "Jeudi 6 août 2026",
    display: "Jeudi 6 août 2026",
    short: "6 août 2026",
  },
} as const;

export const WEDDING_LOCATIONS = {
  traditional: "Mfou — La Boulangerie du Peuple",
  traditionalMapsQuery: "Mfou+La+Boulangerie+du+Peuple",
  religious: "Cathédrale Notre dame des victoires, Poste centrale, Yaoundé",
  religiousMapsQuery:
    "Cathedrale+Notre+dame+des+victoires+Poste+centrale+Yaounde",
  civil: "Hôtel de ville de Yaoundé ",
  civilMapsQuery: "Hôtel+de+ville+de+Yaoundé",
} as const;

export const WEDDING_IMAGES = {
  traditional: "/jl_2026_09.jpeg",
  religious: "/jl_2026_02.jpeg",
  civil: "/jl_2026_03.jpeg",
} as const;
