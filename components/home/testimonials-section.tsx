"use client"

import { motion, useReducedMotion } from "framer-motion"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type TestimonialsSectionProps = {
  serifClassName: string
}

const cards = [
  {
    quote:
      "À première vue, tout semble vous opposer. D'un côté, Stéphanie, véritable boule d'énergie, rayonnante et pleine de vie. De l'autre, Loïc, discret et réservé, presque timide. Et pourtant... vous êtes la plus belle preuve que les contraires ne s'opposent pas, mais se complètent. Là où l'un apaise, l'autre insuffle l'élan ; là où l'un observe, l'autre illumine. Aujourd'hui, vous formez un couple harmonieux, complice et profondément uni, où chacun semble avoir trouvé en l'autre son équilibre. Nous vous souhaitons de cultiver cette belle complicité encore longtemps, et de continuer à avancer ensemble, main dans la main, avec amour, joie et bonheur.",
    primary: "Ulrich & Dimitri",
    secondary: null,
    primaryClass: "font-semibold text-foreground",
  },
  {
    quote:
      "Depuis 2022, Stéphanie me parlait déjà de son mariage féerique. Elle avait tout prévu : la liste des invités, les prestataires... absolument tout. Enfin presque - le marié, lui, était encore inconnu 😂 Je me souviens en rire encore, me demandant comment quelqu'un pouvait organiser son mariage dans les moindres détails... alors qu'elle était célibataire. Comme si elle avait eu une révélation. Et aujourd'hui, je me dis que c'en était sûrement une... puisqu'elle t'a trouvé. Celui qui complète ce rêve, qui lui donne vie, et qui transforme ce projet en une magnifique réalité. Nous y sommes enfin : aux portes de ce mariage féerique, célébrant l'union d'une princesse et de son prince. Je suis tellement heureuse de vous voir construire cette belle histoire à deux, et de faire partie de ce moment unique. Que cette journée dépasse toutes vos attentes, et que votre vie ensemble soit remplie d'amour, de paix, de bonheur et de prospérité. Je vous aime très fort, ma princesse de Monaco... et son prince ❤️",
    primary: "Angela",
    secondary: null,
    primaryClass: "text-muted-foreground",
  },
] as const

export function TestimonialsSection({
  serifClassName,
}: TestimonialsSectionProps) {
  const reduce = useReducedMotion()

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
            key={item.primary}
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
  )
}
