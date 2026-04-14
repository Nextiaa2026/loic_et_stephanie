import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { PageContainer } from "@/components/home/page-container";
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
    "Découvrez l'histoire d'amour de Loïc et Stéphanie, de leur première rencontre jusqu'à la demande en mariage.",
};

export default function NotreHistoirePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageContainer>
        <SiteHeader serifClassName={playfair.className} />
        <main>
          {/* Hero Image */}
          <section className="py-6 sm:py-10">
            <figure className="mx-auto w-full max-w-xl overflow-hidden">
              <div className="relative aspect-[3/4] sm:aspect-[4/5]">
                <Image
                  src="/d76a6df3-2ca2-4291-a0a9-4203ea8d392f.jpeg"
                  alt="Loïc et Stéphanie"
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-neutral-950/30" />
                <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-14">
                  <h1
                    className={`${playfair.className} text-3xl font-semibold tracking-tight text-white sm:text-5xl`}
                  >
                    Notre Histoire
                  </h1>
                </div>
              </div>
            </figure>
          </section>

          {/* Story content */}
          <article className="mx-auto max-w-2xl space-y-10 px-2 pb-16 pt-4 text-base italic leading-[1.85] text-muted-foreground sm:px-0 sm:text-[17px]">
            {/* La Rencontre */}
            <section>
              <h2
                className={`${playfair.className} mb-4 text-xl font-semibold not-italic tracking-tight text-foreground sm:text-2xl`}
              >
                La Rencontre
              </h2>
              <p>
                Parfois, les plus belles histoires commencent lorsqu&apos;on
                s&apos;y attend le moins.
              </p>
              <p>
                Notre rencontre, nous la devons à deux précieux complices :
                Marie et David.
              </p>
              <p>
                Tout a commencé lorsque Marie, la sœur de Loïc, lui a confié
                que Stéphanie venait tout juste de rentrer au Cameroun et
                qu&apos;elle était persuadée qu&apos;ils formeraient un
                « match parfait ».
              </p>
              <p className="mt-4">
                Curieux et intrigué, c&apos;est après cette discussion que Loïc
                a discrètement suivi Stéphanie sur Instagram.
              </p>
              <p className="mt-4">
                De son côté, Stéphanie, lorsqu&apos;elle entendit son petit
                frère David lui dire qu&apos;il avait « quelqu&apos;un à lui
                présenter », n&apos;y prêta pas vraiment attention...
              </p>
              <p>
                « Comment mon petit frère pourrait-il me trouver quelqu&apos;un
                ? », pensait-elle en souriant.
              </p>
              <p className="mt-4">
                Voyant que les échanges tardaient, Marie demanda alors à David
                d&apos;intercéder et d&apos;insister un peu pour convaincre
                Stéphanie de donner une chance à ce premier contact.
              </p>
              <p className="mt-4">
                Finalement, sous l&apos;insistance douce de David, Stéphanie
                accepta de répondre.
              </p>
              <p className="mt-4">
                Loïc, fidèle à son naturel concret et attentionné, proposa
                rapidement un rendez-vous.
              </p>
              <p className="mt-4">
                Le 6 janvier 2023, nos chemins se sont croisés pour la
                première fois.
              </p>
              <p className="mt-4">
                Ce jour-là, malgré quelques hésitations, Stéphanie se laissa
                convaincre par son amie Célia d&apos;honorer ce rendez-vous.
              </p>
              <p>
                Nous nous sommes retrouvés pour un dimanche paisible, dans une
                ambiance détendue.
              </p>
              <p>
                Et sans que nous nous en rendions compte, nous avons passé des
                heures ensemble, de 14h à 20h, portés par une conversation
                fluide et naturelle.
              </p>
              <p className="mt-4">
                Très vite, de nombreux points communs ont émergé :
              </p>
              <p>
                la foi, la famille, les voyages, le sens de l&apos;humour… et
                cette certitude, encore fragile, que ce rendez-vous a marqué
                le début d&apos;une évidence.
              </p>
              <p>
                Nous avions beaucoup à partager… et surtout, tant à construire
                ensemble.
              </p>
            </section>

            {/* L'Officialisation */}
            <section>
              <h2
                className={`${playfair.className} mb-4 text-xl font-semibold not-italic tracking-tight text-foreground sm:text-2xl`}
              >
                ❤️ L&apos;Officialisation
              </h2>
              <p>
                Un mois après notre rencontre, notre lien était devenu
                indéniable.
              </p>
              <p className="mt-4">
                Nous nous retrouvions chaque semaine avec enthousiasme, heureux
                de prolonger ces échanges si simples, si naturels.
              </p>
              <p className="mt-4">
                Loïc avait prévu de marquer la Saint-Valentin d&apos;un moment
                particulier.
              </p>
              <p>
                Mais cette période fut délicate pour Stéphanie, traversant un
                deuil familial. Nos projets furent reportés plusieurs fois.
              </p>
              <p className="mt-4">
                Pourtant, Loïc n&apos;a pas renoncé.
              </p>
              <p>
                Avec patience et tendresse, il a insisté jusqu&apos;au jour J,
                répétant :
              </p>
              <p className="font-medium text-foreground">
                « Même si ce n&apos;est que pour dix minutes, viens. »
              </p>
              <p className="mt-4">
                Finalement, portée par cette bienveillance, Stéphanie a décidé
                de le retrouver.
              </p>
              <p className="mt-4">
                Ce soir-là, sans attente particulière, tout a changé.
              </p>
              <p>
                Dans une ambiance intime et sincère, Loïc a demandé à
                Stéphanie de devenir sa copine.
              </p>
              <p>Une réponse évidente : oui.</p>
              <p className="mt-4">
                À partir de là, tout s&apos;est naturellement tissé entre nous.
              </p>
              <p>
                Nos discussions, nos valeurs, nos projets d&apos;avenir
                semblaient se répondre avec justesse.
              </p>
              <p className="mt-4">
                Notre entourage a rapidement été témoin de cette complicité
                grandissante.
              </p>
              <p>
                Et nous nous souvenons encore de ce 1er janvier 2024, quand
                Loïc, tout sourire, a glissé à Stéphanie :
              </p>
              <p className="font-medium text-foreground">
                « Cette année, je viendrai voir ton père. »
              </p>
            </section>

            {/* La Demande en Mariage */}
            <section>
              <h2
                className={`${playfair.className} mb-4 text-xl font-semibold not-italic tracking-tight text-foreground sm:text-2xl`}
              >
                La Demande en Mariage
              </h2>
              <p>
                En prélude à la demande, Loïc avait soigneusement organisé une
                véritable opération secrète.
              </p>
              <p>
                Complice discret, il s&apos;était entendu avec Eva, la sœur de
                Stéphanie, pour imaginer une mise en scène qui resterait gravée
                dans nos mémoires.
              </p>
              <p className="mt-4">
                Presque tout le monde était dans la confidence… sauf Stéphanie.
              </p>
              <p className="mt-4">
                Avant même de quitter la maison, quelques signes étaient
                pourtant là :
              </p>
              <p>
                Stéphanie avait croisé Jordan, son frère, qui lui avait glissé
                en passant qu&apos;il se rendait, lui aussi, à un anniversaire.
              </p>
              <p>
                De son côté, sa maman semblait particulièrement insistante sur
                le fait de ne pas arriver trop en retard — une attitude
                inhabituelle pour un simple anniversaire, mais qui n&apos;avait
                pas éveillé de soupçons.
              </p>
              <p className="mt-4">
                Tout paraissait normal. Stéphanie restait sans aucun doute.
              </p>
              <p className="mt-4">
                En franchissant la porte, tout bascula. Ce n&apos;était pas
                Ariane que l&apos;on attendait.
              </p>
              <p>Ce n&apos;était pas un anniversaire.</p>
              <p className="mt-4 font-medium text-foreground">
                C&apos;était nos fiançailles.
              </p>
              <p className="mt-4">
                Stéphanie, surprise et émue, découvrit un décor soigneusement
                préparé, nos familles et amis rassemblés, et au centre, Loïc
                prêt à faire sa demande.
              </p>
              <p>
                Un instant suspendu, plein d&apos;amour, de tendresse et de
                promesses partagées.
              </p>
            </section>

            {/* Un Nouveau Chapitre */}
            <section className="rounded-2xl border border-border/60 bg-card px-6 py-8 sm:px-10 sm:py-10">
              <h2
                className={`${playfair.className} mb-4 text-xl font-semibold not-italic tracking-tight text-foreground sm:text-2xl`}
              >
                ✨ Un Nouveau Chapitre
              </h2>
              <p>
                Aujourd&apos;hui, nous avançons main dans la main, heureux de
                partager cette aventure avec vous.
              </p>
              <p className="mt-4">
                Chaque sourire, chaque regard échangé avec vous nous donne
                encore plus de sens à ce chemin parcouru.
              </p>
              <p className="mt-4">
                Notre histoire continue de s&apos;écrire, portée par
                l&apos;amour, la confiance et l&apos;évidence.
              </p>
              <p className="mt-4">
                Merci d&apos;être à nos côtés pour célébrer le début de cette
                nouvelle page.
              </p>
              <p className="mt-4 font-medium text-foreground">
                Bienvenue dans notre bonheur. Bienvenue dans notre histoire.
              </p>
            </section>
          </article>
        </main>
        <SiteFooter />
      </PageContainer>
    </div>
  );
}
