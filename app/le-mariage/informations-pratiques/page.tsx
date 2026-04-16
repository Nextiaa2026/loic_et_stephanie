import { Cormorant_Garamond } from "next/font/google";
import type { LucideIcon } from "lucide-react";
import { Car, Hotel, Landmark, MapPin, Phone, Plane } from "lucide-react";
import { PageContainer } from "@/components/home/page-container";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SITE_CONTACT_EMAIL } from "@/lib/site-config";

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
    title: "Accès & Transport",
    items: [
      "L'aéroport international de Yaoundé-Nsimalen est le point d'arrivée pour les invités venant de l'étranger.",
      "Des navettes pourront être organisées depuis Yaoundé vers Mfou pour le mariage traditionnel — détails à confirmer.",
      "Pour le mariage religieux, la Cathédrale Poste Central est accessible depuis le centre-ville de Yaoundé.",
    ],
  },
  {
    icon: Hotel,
    title: "Hébergement",
    items: [
      "Hôtel Hilton Yaoundé — Tarifs négociés pour les invités (mentionnez « SL2026 » ou « assoke2026 »).",
      "Hôtel La Falaise — Option intermédiaire, à 10 min de l'église.",
      "Résidences familiales disponibles pour certains invités — merci de nous contacter.",
    ],
  },
  {
    icon: Car,
    title: "Stationnement",
    items: [
      "Un parking est disponible sur place selon les lieux — précisions communiquées avant l’événement.",
      "Des agents de sécurité seront présents pour guider les véhicules.",
      "Covoiturage encouragé — un groupe WhatsApp dédié sera créé.",
    ],
  },
  {
    icon: MapPin,
    title: "Lieux des cérémonies",
    items: [
      "Mariage traditionnel : Mfou — La Boulangerie du Peuple.",
      "Mariage religieux : Cathédrale Poste Central.",
      "Des cartes et itinéraires détaillés seront envoyés par email avant l’événement.",
    ],
  },
  {
    icon: Landmark,
    title: "Mariage civil",
    items: [
      "Le mariage civil officialise notre union devant l’autorité de l’état civil : c’est l’acte légal qui nous reconnaît comme époux et épouse.",
      "Lieu : Limbes.",
      "La date et l’horaire précis vous seront communiqués dès qu’ils seront fixés. Pensez à vous munir d’une pièce d’identité valide, comme pour toute cérémonie civile.",
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
          {/* Hero */}
          <section className="py-14 text-center sm:py-20">
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
              Le Mariage
            </p>
            <h1
              className={`${playfair.className} mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl`}
            >
              Informations Pratiques
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
              Tout ce que vous devez savoir pour préparer votre
              venue et profiter pleinement de ces journées.
            </p>
            <Separator className="mx-auto mt-8 max-w-24" />
          </section>

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
