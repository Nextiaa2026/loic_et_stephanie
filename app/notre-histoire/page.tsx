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
  title: "Notre Histoire — Stéphanie & Loïc",
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
    title: "La rencontre",
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
    title: "L'officialisation",
    paragraphs: [
      "Un mois après leur première rencontre, quelque chose avait déjà changé entre eux.",
      "Sans bruit, sans effort, leur lien s’était tissé avec une évidence douce, comme si chaque week‑end devenait le prolongement naturel du précédent. Ils se retrouvaient, parlent de tout et de rien, découvrant à quel point la présence de l’autre apportait un équilibre nouveau.",
      "Loïc, sensible et attentif, avait imaginé vivre un moment particulier avec Stéphanie pendant la période de Noël.",
      "Mais cette fin d’année fut rythmée par les voyages : Stéphanie rejoignait sa famille, partageait du temps avec les siens, et les dates ne s’accordaient jamais vraiment.",
      "Chaque tentative se voyait reportée… puis reportée encore.",
      "Pourtant, Loïc n’a pas abandonné.",
      "Jamais.",
      "Avec cette patience qui le caractérise, il insistait doucement, mais avec conviction : prépare‑toi, je viendrai te chercher, juste toi et moi, pour une soirée simple, mais importante.",
      "Et un soir, portée par la sincérité de ses intentions et par la constance de ses attentions, Stéphanie a dit oui à cette invitation qu’elle n’avait pas encore pu honorer.",
      "Ils ont dîné, parlé longtemps, comme à leur habitude…",
      "Puis, en reprenant la route, un silence doux s’est installé.",
      "Le genre de silence qui précède les moments qui comptent.",
      "C’est là, dans cette atmosphère calme et vraie, que Loïc s’est tourné vers elle.",
      "Pas de discours préparé, pas d’artifice, seulement la vérité de son cœur : il voulait qu’elle devienne sa copine.",
      "La réponse de Stéphanie n’a pas eu besoin de réflexion.",
      "C’était un oui simple, clair, naturel.",
      "Un oui qui portait déjà tout ce qui allait suivre.",
      "Dès cet instant, quelque chose s’est aligné entre eux.",
      "Leurs valeurs, leurs visions, leurs projets de vie… tout semblait se répondre avec harmonie.",
      "Et chaque jour, chacun devenait davantage cette pièce qui manquait à l’autre.",
      "Très vite, leur entourage a perçu cette douceur nouvelle, cette complicité qui ne s’explique pas mais qui se voit, se sent, se devine.",
      "Et Stéphanie garde en mémoire ces journées qui ont suivi, où Loïc, avec l’assurance tranquille de quelqu’un qui sait où il va, lui répétait en souriant : « Cette année, tu deviendras Madame Ass. »",
      "Une phrase simple…",
      "Une promesse silencieuse…",
      "Et déjà, la porte ouverte vers la suite de leur histoire.",
    ],
    quote: "« Cette année, tu deviendras Madame Ass. »",
  },
  {
    date: "7 mars 2026",
    title: "La demande en mariage",
    paragraphs: [
      "Le 07 mars 2026 était déjà une journée symbolique : la fin de cinq années d’études, marquées par des efforts constants, des nuits blanches, des réussites, des doutes… et une fierté immense.",
      "Stéphanie recevait enfin son diplôme.",
      "Mais pour Loïc, cette journée allait porter une autre signification.",
      "En coulisses, il avait monté une véritable petite mission.",
      "Une mission qui impliquait : Ulrich, Clide, Aubin, Dimitri, et les deux amies proches de Stéphanie, Angela et Stéphanie.",
      "Tous étaient dans la confidence.",
      "Tous attendaient le moment précis.",
      "Sauf… Stéphanie.",
      "Quelques jours avant la cérémonie, Angela et Stéphanie insistaient : « Tu dois être magnifique, c’est un grand jour ! Coiffure, ongles, tenue… fais‑toi belle. »",
      "Stéphanie s’exécutait, touchée par l’attention de ses amies.",
      "(Elle ne savait pas encore que leur insistance cachait un secret bien plus grand que la remise de diplôme.)",
      "Pendant ce temps, Loïc, étrangement indisponible, avait trouvé l’excuse la moins crédible du monde : « Je suis à Leroy Merlin pour acheter de la viande. »",
      "(Encore aujourd’hui, on ne sait pas comment Stéphanie n’a pas compris que quelque chose se tramait…)",
      "Puis vint le soir.",
      "Nous avons franchi la porte du lieu de réception, main dans la main.",
      "Stéphanie pensait rejoindre un petit dîner entre amis pour célébrer ce diplôme.",
      "Mais dès l’instant où nous sommes entrés… tout s’est arrêté.",
      "Ce n’était pas un dîner intime.",
      "Ce n’était pas une simple célébration de fin d’études.",
      "C’était le début de nos fiançailles.",
      "Un décor préparé avec soin.",
      "Des visages familiers.",
      "Des sourires, des regards complices, des émotions contenues.",
      "Et au centre… Loïc.",
      "Stéphanie a senti son cœur battre plus vite.",
      "Les larmes lui sont montées aux yeux avant même de comprendre ce qui se passait.",
      "C’était beau, intense, surprenant… irréel.",
      "Loïc s’est avancé.",
      "Avec calme. Avec certitude.",
      "Avec amour.",
      "Et dans ce moment suspendu, où le monde semblait tenir son souffle, il a demandé à Stéphanie de devenir sa fiancée.",
      "La réponse a coulé d’elle‑même.",
      "Un oui rempli de joie, de gratitude, de lumière.",
      "Un oui qui n’était pas seulement une réponse…",
      "mais une promesse pour la vie.",
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
            imageSrc="/jl_2026_08.jpeg"
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
                Un nouveau chap
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
            </section>
          </article>
        </main>
        <SiteFooter />
      </PageContainer>
    </div>
  );
}
