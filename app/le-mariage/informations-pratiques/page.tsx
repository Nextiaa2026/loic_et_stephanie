import { Cormorant_Garamond } from "next/font/google";
import type { LucideIcon } from "lucide-react";
import { Car, Hotel, Landmark, MapPin, Phone, Plane } from "lucide-react";
import { PageContainer } from "@/components/home/page-container";
import { PageHeroVertical } from "@/components/home/page-hero-vertical";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SITE_CONTACT_EMAIL,
  WEDDING_DATES,
  WEDDING_LOCATIONS,
} from "@/lib/site-config";

const playfair = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const infoSections: {
  icon: LucideIcon;
  title: string;
  items: string[];
  contactEmail?: string;
}[] = [
  {
    icon: Plane,
    title: "Hebergement & Accès",
    items: [
      "🏛️ Le Mariage Civil",
      "Lieu : Hôtel de Ville de Yaoundé",
      "Comment s'y rendre : Le site est très facilement accessible. Vous pouvez y accéder en taxi traditionnel ou via l'application Yango en entrant directement Hôtel de Ville de Yaoundé comme destination.",

      "🛎️ Le Mariage Religieux",
      "Lieu : Cathédrale Notre-Dame-des-Victoires (Centre-ville)",
      "Comment s'y rendre : Située en plein cœur de la ville, la cathédrale est accessible par tous les transports en commun (taxis, etc.) ou via Yango.",
      "Parking : Un espace de stationnement est prévu pour vous garer en toute sécurité directement dans le parking de l'église.",

      "🥁 Le Mariage Traditionnel",
      "Lieu : Nkongoa",
      "Repère pour s'y rendre : Le lieu se situe sur la route de Mfou, juste à côté de la Boulangerie du Peuple.",
      "Conseil : Si vous prenez un taxi ou un chauffeur, n'hésitez pas à lui donner ce repère très connu dans la zone !",
    ],
  },
  {
    icon: Car,
    title: "Stationnement & Parkings",
    items: [
      "Hôtel de Ville (Mariage Civil) : Quelques places disponibles aux alentours. Le centre-ville étant très animé, prévoyez une petite marge d'avance si vous venez véhiculés.",
      "Cathédrale Notre-Dame-des-Victoires (Mariage Religieux) : Un espace sécurisé est prévu pour vous à l'intérieur du parking de l'église.",
      "Nkongoa (Mariage Traditionnel) : Un espace sera aménagé sur place pour vous permettre de garer vos véhicules à proximité de la cérémonie.",
    ],
  },
  {
    icon: MapPin,
    title: "Lieux des cérémonies",
    items: [
      `Mariage traditionnel : ${WEDDING_DATES.traditional.label} — ${WEDDING_LOCATIONS.traditional}.`,
      `Mariage religieux : ${WEDDING_DATES.religious.label} — ${WEDDING_LOCATIONS.religious}.`,
      "Mariage civil :Jeudi 06 août 2026. Lieu : Hôtel de Ville de Yaoundé à 10h.",
      "Mariage religieux : Vendredi 07 août 2026. Lieu : Cathédrale Notre-Dame-des-Victoires à 15h.",
      "Mariage traditionnel : Samedi 08 août 2026. Lieu : Nkongoa à 10h.",
    ],
  },
  {
    icon: Phone,
    title: "Contact",
    items: [
      "Pour toute question logistique, contactez notre coordinatrice : Marie — +237 6XX XXX XXX.",
      "N'hésitez pas à nous solliciter, nous sommes là pour vous faciliter le séjour !",
    ],
    contactEmail: SITE_CONTACT_EMAIL,
  },
];

export default function InformationsPratiquesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageContainer>
        <SiteHeader serifClassName={playfair.className} />
        <main>
          <PageHeroVertical
            title="Informations Pratiques"
            description="Tout ce que vous devez savoir pour préparer votre venue et profiter pleinement de ces journées."
            imageSrc="/jl_2026_03.jpeg"
            serifClassName={playfair.className}
          />

          {/* Info cards grid */}
          <section className="grid gap-6 pb-14 sm:grid-cols-2 sm:pb-20 lg:grid-cols-3">
            {infoSections.map((section, i) => (
              <Card
                key={i}
                className="rounded-2xl border-border/60 shadow-none"
              >
                <CardHeader className="px-6 pt-8 sm:px-8">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary">
                    <section.icon className="size-5" />
                  </div>
                  <CardTitle
                    className={`${playfair.className} text-lg font-semibold tracking-tight sm:text-xl`}
                  >
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8 sm:px-8">
                  <ul className="space-y-3">
                    {section.contactEmail ? (
                      <>
                        {section.items[0] ? (
                          <li className="text-sm leading-relaxed text-muted-foreground">
                            {section.items[0]}
                          </li>
                        ) : null}
                        <li className="text-sm leading-relaxed text-muted-foreground">
                          Email :{" "}
                          <a
                            href={`mailto:${section.contactEmail}`}
                            className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary/85"
                          >
                            {section.contactEmail}
                          </a>
                        </li>
                        {section.items.slice(1).map((item, j) => (
                          <li
                            key={j}
                            className="text-sm leading-relaxed text-muted-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </>
                    ) : (
                      section.items.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))
                    )}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </section>
        </main>
        <SiteFooter />
      </PageContainer>
    </div>
  );
}
