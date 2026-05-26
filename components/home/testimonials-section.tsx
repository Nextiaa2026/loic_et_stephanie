"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TestimonialsSectionProps = {
  serifClassName: string;
};

const cards = [
  {
    id: 1,
    quote:
      "À première vue, tout semble vous opposer. D'un côté, Stéphanie, véritable boule d'énergie, rayonnante et pleine de vie. De l'autre, Loïc, discret et réservé, presque timide. Et pourtant... vous êtes la plus belle preuve que les contraires ne s'opposent pas, mais se complètent. Là où l'un apaise, l'autre insuffle l'élan ; là où l'un observe, l'autre illumine. Aujourd'hui, vous formez un couple harmonieux, complice et profondément uni, où chacun semble avoir trouvé en l'autre son équilibre. Nous vous souhaitons de cultiver cette belle complicité encore longtemps, et de continuer à avancer ensemble, main dans la main, avec amour, joie et bonheur.",
    primary: "Ulrich & Dimitri",
    secondary: null,
    primaryClass: "font-semibold text-foreground",
  },
  {
    id: 2,
    quote:
      "Depuis 2022, Stéphanie me parlait déjà de son mariage féerique. Elle avait tout prévu : la liste des invités, les prestataires... absolument tout. Enfin presque - le marié, lui, était encore inconnu 😂 Je me souviens en rire encore, me demandant comment quelqu'un pouvait organiser son mariage dans les moindres détails... alors qu'elle était célibataire. Comme si elle avait eu une révélation. Et aujourd'hui, je me dis que c'en était sûrement une... puisqu'elle t'a trouvé. Celui qui complète ce rêve, qui lui donne vie, et qui transforme ce projet en une magnifique réalité. Nous y sommes enfin : aux portes de ce mariage féerique, célébrant l'union d'une princesse et de son prince. Je suis tellement heureuse de vous voir construire cette belle histoire à deux, et de faire partie de ce moment unique. Que cette journée dépasse toutes vos attentes, et que votre vie ensemble soit remplie d'amour, de paix, de bonheur et de prospérité. Je vous aime très fort, ma princesse de Monaco... et son prince ❤️",
    primary: "Angela",
    secondary: null,
    primaryClass: "text-muted-foreground",
  },

  {
    id: 3,
    quote:
      "Voir ma petite sœur s’épanouir aux côtés de Loïc, c’est contempler un équilibre parfait. Elle est un soleil débordant d’énergie, mais aussi d’une grande sensibilité. Quel bonheur de constater qu’elle a trouvé en Loïc un partenaire aussi aimant, attentionné, tendre et profondément bienveillant. ❤️ Leur complicité saute aux yeux et émerveille. Ils ne sont pas seulement amoureux : ils sont aussi de véritables partenaires de jeu, capables de rire de tout et surtout d’eux-mêmes. 😂Je leur souhaite que leur union se renforce au fil des épreuves comme des bonheurs, qu’ils restent soudés et complices, aujourd’hui, demain, et à chaque nouvelle étape de leur vie de famille. ❤️",
    primary: "Joëlle",
    secondary: null,
    primaryClass: "text-muted-foreground",
  },

  {
    id: 4,
    quote:
      "Loïc, pour moi, tu es un ami, un frère.Je te connais comme quelqu’un de très réservé, pas forcément du genre à aller vers les autres facilement. Mais quand on prend le temps de te connaître, on découvre une personne incroyable. Un cœur énorme, beaucoup de gentillesse, de sincérité.   Tu es vraiment quelqu’un de précieux, le genre de personne qu’on découvre petit à petit, et qu’on n’oublie jamais.Stéphanie, tu es comme la pièce de puzzle qui vient compléter mon frère, et c’est ça qui est beau.Tu es joyeuse, ouverte, toujours souriante. Tu as cette facilité à aller vers les autres, à mettre de l’ambiance, à créer des liens. Tu es une personne qui marque les esprits, naturellement.Et puis un jour, vous vous êtes trouvés.Et franchement, quand je vous vois aujourd’hui, je me dis que tout ça avait du sens depuis le début.Stéphanie, tu as su aller vers Loïc, le comprendre, le mettre à l’aise. Et Loïc, tu as su lui apporter quelque chose de fort, de stable, de vrai.Ensemble, vous formez un très bel équilibre. Vous vous complétez sans jamais vous changer, et ça, c’est précieux.Je suis vraiment heureux pour vous deux. Et en tant que frère, ça me touche sincèrement de voir Loïc construire sa vie avec quelqu’un comme toi, Stéphanie.Votre histoire est belle parce qu’elle est sincère. Et elle ne fait que commencer.Je vous souhaite simplement de continuer comme vous êtes : de rester soudés, de garder cette complicité, et de profiter de chaque moment ensemble.Une vie remplie d’amour, de bonheur et de complicité.",
    primary: "Aubin",
    secondary: null,
    primaryClass: "text-muted-foreground",
  },
] as const;

export function TestimonialsSection({
  serifClassName,
}: TestimonialsSectionProps) {
  const reduce = useReducedMotion();

  return (
    <section className="w-full py-14 sm:py-20">
      <p className="text-center text-[11px] font-medium tracking-[0.4em] text-muted-foreground uppercase">
        Témoignages
      </p>
      <h2
        className={cn(
          serifClassName,
          "mx-auto mt-4 mb-10 max-w-3xl text-center text-[1.95rem] leading-[1.08] font-semibold tracking-tight text-foreground sm:text-4xl"
        )}
      >
        Ce que nos amis disent de nous
      </h2>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
        {cards.map((item, i) => (
          <motion.div
            key={item.id.toString()}
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 0.65,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={reduce ? undefined : { y: -4 }}
          >
            <Card className="h-full rounded-[1.75rem] border border-border/60 bg-card py-0 shadow-none ring-0 transition-colors hover:border-foreground/25 sm:rounded-[2rem]">
              <CardHeader className="px-6 pt-8 pb-0 sm:px-7 sm:pt-9">
                <CardTitle className="sr-only">Témoignage</CardTitle>
              </CardHeader>
              <CardContent className="px-6 sm:px-7">
                <CardDescription className="text-center text-[15px] leading-relaxed text-muted-foreground">
                  {item.quote}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center gap-1 border-0 bg-transparent px-6 pt-4 pb-8 text-center sm:px-7 sm:pb-9">
                <p
                  className={cn(serifClassName, "text-base", item.primaryClass)}
                >
                  {item.primary}
                </p>
                {item.secondary ? (
                  <p
                    className={cn(
                      serifClassName,
                      "text-sm text-muted-foreground"
                    )}
                  >
                    {item.secondary}
                  </p>
                ) : null}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
