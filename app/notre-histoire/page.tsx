import { Playfair_Display } from "next/font/google";
import { PageContainer } from "@/components/home/page-container";
import { PageHeroVertical } from "@/components/home/page-hero-vertical";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Notre Histoire — Loïc & Stéphanie",
  description:
    "De la rencontre à la demande en mariage (7 mars 2026) et à ce nouveau chapitre que nous écrivons avec Dieu au centre.",
};

type TimelineEvent = {
  date: string;
  title: string;
  paragraphs: string[];
  quote?: string;
};

const timelineEvents: TimelineEvent[] = [
  {
    date: "6 janvier 2023",
    title: "La Rencontre",
    paragraphs: [
      "Parfois, les plus belles histoires commencent lorsqu'on s'y attend le moins.",
      "Notre rencontre, nous la devons à deux précieux complices : Marie et David.",
      "Tout a commencé lorsque Marie, la sœur de Loïc, lui a confié que Stéphanie venait tout juste de rentrer au Cameroun et qu'elle était persuadée qu'ils formeraient un « match parfait ».",
      "Curieux et intrigué, c'est après cette discussion que Loïc a discrètement suivi Stéphanie sur Instagram.",
      "De son côté, Stéphanie, lorsqu'elle entendit son petit frère David lui dire qu'il avait « quelqu'un à lui présenter », n'y prêta pas vraiment attention. « Comment mon petit frère pourrait-il me trouver quelqu'un ? »",
      "Finalement, sous l'insistance douce de David, Stéphanie accepta de répondre.",
      "Nous nous sommes retrouvés pour un dimanche paisible, de 14h à 20h, portés par une conversation fluide et naturelle.",
      "Très vite, de nombreux points communs ont émergé : la foi, la famille, les voyages, le sens de l'humour… et cette certitude fragile qu'un nouveau chapitre commençait.",
    ],
  },
  {
    date: "Février 2023",
    title: "L'Officialisation",
    paragraphs: [
      "Un mois après notre rencontre, notre lien était devenu indéniable.",
      "Nous nous retrouvions chaque semaine avec enthousiasme, heureux de prolonger ces échanges si simples, si naturels.",
      "Cette période fut aussi délicate pour Stéphanie, traversant un deuil familial. Nos projets furent reportés plusieurs fois.",
      "Pourtant, Loïc n'a pas renoncé. Avec patience et tendresse, il a insisté jusqu'au jour J.",
      "Finalement, portée par cette bienveillance, Stéphanie a décidé de le retrouver. Ce soir-là, tout a changé.",
      "Dans une ambiance intime et sincère, Loïc a demandé à Stéphanie de devenir sa copine. Une réponse évidente : oui.",
      "À partir de là, tout s'est naturellement tissé entre nous, jusque dans cette phrase glissée au 1er janvier 2024 : « Cette année, je viendrai voir ton père. »",
    ],
    quote: "« Même si ce n'est que pour dix minutes, viens. »",
  },
  {
    date: "7 mars 2026",
    title: "La Demande en Mariage",
    paragraphs: [
      "Le 7 mars 2026 était déjà une journée symbolique : la fin de cinq années d'études pour Stéphanie, marquées par des efforts constants, des nuits blanches, des réussites, des doutes… et une immense fierté.",
      "Mais pour Loïc, cette journée allait porter une autre signification. En coulisses, il avait monté une véritable petite mission avec leurs proches.",
      "Quelques jours avant la cérémonie, ses amies insistaient pour qu'elle soit magnifique, sans révéler le secret.",
      "Le soir venu, Stéphanie pensait rejoindre un petit dîner entre amis pour célébrer son diplôme… mais dès l'entrée, elle a compris que ce moment était bien plus grand.",
      "Un décor préparé avec soin, des visages familiers, une émotion intense, et au centre… Loïc.",
      "Dans ce moment suspendu, il a demandé à Stéphanie de devenir sa fiancée. La réponse a coulé d'elle-même : un oui rempli de joie, de gratitude et de lumière.",
    ],
    quote: "C'était le début de nos fiançailles.",
  },
];

export default function NotreHistoirePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageContainer>
        <SiteHeader serifClassName={playfair.className} />
        <main>
          <PageHeroVertical
            title="Notre Histoire"
            imageSrc="/jl_2026_main_hero.jpeg"
            serifClassName={playfair.className}
          />

          {/* Story timeline */}
          <article className="mx-auto max-w-4xl px-2 pb-16 pt-4 sm:px-0">
            <div className="relative space-y-8 sm:space-y-10">
              <div className="absolute top-0 bottom-0 left-4 hidden w-px bg-border sm:block" />
              {timelineEvents.map((event) => (
                <section
                  key={event.title}
                  className="relative grid gap-3 sm:grid-cols-[120px_1fr] sm:gap-6"
                >
                  <div className="sm:pt-1">
                    <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                      {event.date}
                    </p>
                  </div>
                  <div className="relative rounded-2xl border border-border/60 bg-card px-5 py-5 sm:px-6 sm:py-6">
                    <span className="absolute top-7 -left-[30px] hidden size-3 rounded-full border-2 border-primary bg-background sm:block" />
                    <h2
                      className={`${playfair.className} mb-4 text-2xl font-semibold tracking-tight text-foreground`}
                    >
                      {event.title}
                    </h2>
                    <div className="space-y-4 text-base leading-[1.8] text-muted-foreground italic sm:text-[17px]">
                      {event.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {event.quote ? (
                      <p className="mt-5 border-l-2 border-primary/60 pl-4 text-base font-medium not-italic text-foreground">
                        {event.quote}
                      </p>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>

            {/* Un nouveau chapitre */}
            <section className="mt-10 rounded-2xl border border-border/60 bg-card px-6 py-8 sm:px-10 sm:py-10">
              <h2
                className={`${playfair.className} mb-4 text-xl font-semibold not-italic tracking-tight text-foreground sm:text-2xl`}
              >
                Un nouveau chapitre
              </h2>
              <p>
                Aujourd&apos;hui, nous avançons ensemble, confiants et
                reconnaissants pour tout ce que Dieu a commencé en nous.
              </p>
              <p className="mt-4">
                Chaque pas, chaque geste, chaque moment partagé témoigne de Sa
                fidélité dans notre histoire.
              </p>
              <p className="mt-4">
                Les sourires, les paroles et la présence de ceux que nous aimons
                donnent encore plus de sens à ce chemin que nous construisons
                jour après jour.
              </p>
              <p className="mt-4">
                Rien n&apos;a été laissé au hasard : Dieu a guidé, ouvert les
                portes, et placé sur notre route des signes que nos cœurs ont su
                reconnaître.
              </p>
              <p className="mt-4">
                Notre histoire continue de s&apos;écrire avec Lui au centre,
                portée par l&apos;amour, la confiance et l&apos;assurance douce
                que nos vies avancent dans la bonne direction.
              </p>
              <p className="mt-4">
                Merci d&apos;être à nos côtés pour célébrer l&apos;ouverture de
                cette nouvelle page.
              </p>
              <p className="mt-4 font-medium text-foreground not-italic">
                Bienvenue dans notre joie.
              </p>
              <p className="font-medium text-foreground not-italic">
                Bienvenue dans ce que Dieu bâtit à travers nous.
              </p>
              <p className="mt-6 text-sm font-medium tracking-wide text-muted-foreground not-italic">
                #SL2026 · #assoke2026
              </p>
            </section>
          </article>
        </main>
        <SiteFooter />
      </PageContainer>
    </div>
  );
}
