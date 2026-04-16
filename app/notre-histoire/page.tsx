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
    "De la rencontre à la demande en mariage (7 mars 2026) et à ce nouveau chapitre que nous écrivons avec Dieu au centre.",
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
              <div className="relative aspect-3/4 sm:aspect-4/5">
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

            {/* La demande en mariage */}
            <section>
              <h2
                className={`${playfair.className} mb-4 text-xl font-semibold not-italic tracking-tight text-foreground sm:text-2xl`}
              >
                La demande en mariage
              </h2>
              <p>
                Le 7 mars 2026 était déjà une journée symbolique : la fin de
                cinq années d&apos;études, marquées par des efforts constants,
                des nuits blanches, des réussites, des doutes… et une fierté
                immense.
              </p>
              <p className="mt-4">Stéphanie recevait enfin son diplôme.</p>
              <p className="mt-4">
                Mais pour Loïc, cette journée allait porter une autre
                signification.
              </p>
              <p className="mt-4">
                En coulisses, il avait monté une véritable petite mission.
              </p>
              <p className="mt-4">
                Une mission qui impliquait : Ulrich, Clide, Aubin, Dimitri, et
                les deux amies proches de Stéphanie, Angela et Stéphanie.
              </p>
              <p className="mt-4">Tous étaient dans la confidence.</p>
              <p>Tous attendaient le moment précis.</p>
              <p>Sauf… Stéphanie.</p>
              <p className="mt-4">
                Quelques jours avant la cérémonie, Angela et Stéphanie
                insistaient :
              </p>
              <p className="font-medium text-foreground not-italic">
                « Tu dois être magnifique, c&apos;est un grand jour ! Coiffure,
                ongles, tenue… fais-toi belle. »
              </p>
              <p className="mt-4">
                Stéphanie s&apos;exécutait, touchée par l&apos;attention de ses
                amies.
              </p>
              <p className="mt-4 text-muted-foreground/95">
                (Elle ne savait pas encore que leur insistance cachait un secret
                bien plus grand que la remise de diplôme.)
              </p>
              <p className="mt-4">
                Pendant ce temps, Loïc, étrangement indisponible, avait trouvé
                l&apos;excuse la moins crédible du monde :
              </p>
              <p className="font-medium text-foreground not-italic">
                « Je suis à Leroy Merlin pour acheter de la viande. »
              </p>
              <p className="mt-4 text-muted-foreground/95">
                (Encore aujourd&apos;hui, on ne sait pas comment Stéphanie
                n&apos;a pas compris que quelque chose se tramait…)
              </p>
              <p className="mt-4">Puis vint le soir.</p>
              <p className="mt-4">
                Nous avons franchi la porte du lieu de réception, main dans la
                main.
              </p>
              <p className="mt-4">
                Stéphanie pensait rejoindre un petit dîner entre amis pour
                célébrer ce diplôme.
              </p>
              <p className="mt-4">
                Mais dès l&apos;instant où nous sommes entrés… tout s&apos;est
                arrêté.
              </p>
              <p className="mt-4">Ce n&apos;était pas un dîner intime.</p>
              <p>Ce n&apos;était pas une simple célébration de fin d&apos;études.</p>
              <p className="mt-4 font-medium text-foreground not-italic">
                C&apos;était le début de nos fiançailles.
              </p>
              <p className="mt-4">Un décor préparé avec soin.</p>
              <p>Des visages familiers.</p>
              <p>
                Des sourires, des regards complices, des émotions contenues.
              </p>
              <p className="mt-4">Et au centre… Loïc.</p>
              <p className="mt-4">
                Stéphanie a senti son cœur battre plus vite.
              </p>
              <p>
                Les larmes lui sont montées aux yeux avant même de comprendre ce
                qui se passait.
              </p>
              <p className="mt-4">
                C&apos;était beau, intense, surprenant… irréel.
              </p>
              <p className="mt-4">Loïc s&apos;est avancé.</p>
              <p>Avec calme. Avec certitude.</p>
              <p>Avec amour.</p>
              <p className="mt-4">
                Et dans ce moment suspendu, où le monde semblait tenir son
                souffle,
              </p>
              <p>
                il a demandé à Stéphanie de devenir sa fiancée.
              </p>
              <p className="mt-4">La réponse a coulé d&apos;elle-même.</p>
              <p>Un oui rempli de joie, de gratitude, de lumière.</p>
              <p className="mt-4">
                Un oui qui n&apos;était pas seulement une réponse…
              </p>
              <p>mais une promesse pour la vie.</p>
            </section>

            {/* Un nouveau chapitre */}
            <section className="rounded-2xl border border-border/60 bg-card px-6 py-8 sm:px-10 sm:py-10">
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
