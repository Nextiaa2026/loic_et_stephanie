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
    title: "Mariage Traditionnel",
    date: "Samedi 26 juillet 2026",
    time: "10h00",
    location: "La Vallée de Bana",
    description:
      "Un hommage vibrant à nos racines. Cette cérémonie, empreinte de symboles, marquera l'union de nos familles dans la plus belle tradition. Un moment de partage, de rituels et d'émotions.",
    image: "/1069335d-befc-4cff-bff6-66d308050085.jpeg",
  },
  {
    title: "Mariage Religieux",
    date: "Samedi 02 août 2026",
    time: "11h00",
    location: "Monastère des bénédictins, Mont Febe — Yaoundé",
    description:
      "Une promesse sacrée devant Dieu et nos proches. Nous scellerons notre engagement au cœur d'une célébration spirituelle, élégante et solennelle. L'amour élevé à sa plus belle dimension.",
    image: "/4097433a-e1cd-4404-b530-2303186ea48b.jpeg",
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
              Deux cérémonies, deux moments uniques pour célébrer notre
              union. Voici les dates à retenir.
            </p>
            <Separator className="mx-auto mt-8 max-w-24" />
          </section>

          {/* Events */}
          <section className="space-y-16 pb-14 sm:pb-20">
            {events.map((event, i) => (
              <Card
                key={i}
                className="overflow-hidden rounded-2xl border-border/60 shadow-none"
              >
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <CardHeader className="px-6 pt-8 sm:px-10 sm:pt-10">
                      <CardTitle
                        className={`${playfair.className} text-2xl font-semibold tracking-tight sm:text-3xl`}
                      >
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 px-6 pb-8 sm:px-10 sm:pb-10">
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <p className="inline-flex items-center gap-2">
                          <CalendarDays className="size-4 shrink-0 text-primary" />
                          <span>{event.date}</span>
                        </p>
                        <p className="inline-flex items-center gap-2">
                          <Clock className="size-4 shrink-0 text-primary" />
                          <span>{event.time}</span>
                        </p>
                        <p className="inline-flex items-center gap-2">
                          <MapPin className="size-4 shrink-0 text-primary" />
                          <span>{event.location}</span>
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {event.description}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </section>
        </main>
        <SiteFooter />
      </PageContainer>
    </div>
  );
}
