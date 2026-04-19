import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { PageContainer } from "@/components/home/page-container";
import { PageHeroVertical } from "@/components/home/page-hero-vertical";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";


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
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mfou+La+Boulangerie+du+Peuple",
    description:
      "Un rendez-vous avec nos origines, placé sous le signe du respect des coutumes. Ce moment unique réunira nos familles autour de valeurs essentielles, dans une atmosphère de partage, de traditions et d’émotions sincères.",
    image: "/jl_2026_09.jpeg",
  },
  {
    title: "Mariage religieux",
    date: "Samedi 02 août 2026",
    time: "11h00",
    location: "Cathédrale Notre dame des victoires, Poste centrale, Yaoundé",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Cathedrale+Notre+dame+des+victoires+Poste+centrale+Yaounde",
    description:
      "Dans la foi et la présence divine, nous unirons nos vies par un engagement sacré. Cette cérémonie solennelle célèbrera un amour porté par la grâce et la spiritualité.",
    image: "/jl_2026_02.jpeg",
  },
  {
    title: "Mariage civil",
    date: "Date à confirmer",
    time: "—",
    location: "Limbes",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Limbes+Cameroon",
    description:
      "L’officialisation de notre union devant la loi. Les détails (jour et heure) vous seront communiqués en temps utile.",
    image: "/jl_2026_11.jpeg",
  },
];

export default function LesDatesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageContainer>
        <SiteHeader serifClassName={playfair.className} />
        <main>
          <PageHeroVertical
            title="Les Dates"
            description="Trois temps forts pour célébrer notre union : tradition, foi et civil. Voici les informations à retenir."
            imageSrc="/jl_2026_04.jpeg"
            serifClassName={playfair.className}
          />

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

                  <div className="mt-6 flex flex-col items-center gap-2 text-sm italic text-muted-foreground sm:text-base">
                    <p className="inline-flex items-center gap-2">
                      <CalendarDays className="size-4 shrink-0 text-primary" aria-hidden />
                      <span>{event.date}</span>
                    </p>
                    <p className="inline-flex items-center gap-2">
                      <Clock className="size-4 shrink-0 text-primary" aria-hidden />
                      <span>{event.time}</span>
                    </p>
                    <a
                      href={event.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground"
                    >
                      <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
                      <span>{event.location}</span>
                    </a>
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
