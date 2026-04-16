import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import { CalendarDays, Clock, MapPin } from "lucide-react";
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

const playfair = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const events = [
  {
    title: "Mariage traditionnel",
    date: "Samedi 26 juillet 2026",
    time: "10h00",
    location: "Mfou — La Boulangerie du Peuple",
    description:
      "Un hommage vibrant à nos racines. Cette cérémonie, empreinte de symboles, marquera l'union de nos familles dans la plus belle tradition. Un moment de partage, de rituels et d'émotions.",
    image: "/1069335d-befc-4cff-bff6-66d308050085.jpeg",
  },
  {
    title: "Mariage religieux",
    date: "Samedi 02 août 2026",
    time: "11h00",
    location: "Cathédrale Poste Central",
    description:
      "Une promesse sacrée devant Dieu et nos proches. Nous scellerons notre engagement au cœur d'une célébration spirituelle, élégante et solennelle. L'amour élevé à sa plus belle dimension.",
    image: "/4097433a-e1cd-4404-b530-2303186ea48b.jpeg",
  },
  {
    title: "Mariage civil",
    date: "Date à confirmer",
    time: "—",
    location: "Limbes",
    description:
      "L’officialisation de notre union devant la loi. Les détails (jour et heure) vous seront communiqués en temps utile.",
    image: "/6b069496-a6e3-477d-b886-2c1f901cf087.jpeg",
  },
];

export default function LesDatesPage() {
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
              Les Dates
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
              Trois temps forts pour célébrer notre union : tradition, foi et
              civil. Voici les informations à retenir.
            </p>
            <Separator className="mx-auto mt-8 max-w-24" />
          </section>

          {/* Events */}
          <section className="mx-auto max-w-2xl space-y-16 pb-14 sm:pb-20 text-center">
            {events.map((event, i) => (
              <div key={i} className="flex flex-col items-center">
                <figure className="w-full">
                  <div className="relative mx-auto aspect-3/4 w-full max-w-lg overflow-hidden rounded-2xl bg-muted">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>

                {/* Content */}
                <div className="mt-8 flex flex-col items-center">
                  <h2
                    className={`${playfair.className} text-3xl font-semibold tracking-tight sm:text-4xl`}
                  >
                    {event.title}
                  </h2>
                  <Separator className="mx-auto mt-4 h-px max-w-24 bg-border" />

                  <div className="mt-6 flex flex-col items-center gap-2 text-sm italic text-muted-foreground sm:text-base">
                    <p className="inline-flex items-center gap-2">
                      <CalendarDays className="size-4 shrink-0 text-primary" aria-hidden />
                      <span>{event.date}</span>
                    </p>
                    <p className="inline-flex items-center gap-2">
                      <Clock className="size-4 shrink-0 text-primary" aria-hidden />
                      <span>{event.time}</span>
                    </p>
                    <p className="inline-flex items-center gap-2">
                      <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
                      <span>{event.location}</span>
                    </p>
                  </div>
                  
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </main>
        <SiteFooter />
      </PageContainer>
    </div>
  );
}
