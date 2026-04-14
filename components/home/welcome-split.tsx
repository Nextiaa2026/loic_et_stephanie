"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type WelcomeSplitProps = {
  serifClassName: string;
};

export function WelcomeSplit({ serifClassName }: WelcomeSplitProps) {
  const reduce = useReducedMotion();

  const item = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    whileInView: reduce ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" },
    transition: {
      delay,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      id="histoire"
      className="grid w-full gap-10 py-14 sm:grid-cols-2 sm:gap-16 sm:py-20"
    >
      <div>
        <motion.p
          className="mb-4 text-[11px] font-medium tracking-[0.35em] text-muted-foreground uppercase"
          {...item(0)}
        >
          Bienvenue
        </motion.p>
        <motion.h2
          className={cn(
            serifClassName,
            "text-balance text-[1.75rem] leading-[1.12] font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-[1.08]",
          )}
          {...item(0.04)}
        >
          Découvrez Ici Les Étapes De Notre Aventure
        </motion.h2>
      </div>
      <div className="flex flex-col gap-5 pt-1">
        <motion.p
          className="text-[15px] leading-[1.75] text-muted-foreground sm:text-base"
          {...item(0.06)}
        >
          Bienvenue dans notre univers ! Nous sommes ravis de partager avec vous
          les moments forts de notre histoire, de notre première rencontre
          jusqu&apos;à la grande demande en mariage qui a marqué le début de
          cette nouvelle vie à deux.
        </motion.p>
        <motion.p
          className="text-[15px] leading-[1.75] text-muted-foreground sm:text-base"
          {...item(0.12)}
        >
          Chaque étape de notre parcours a été rendue encore plus belle grâce au
          soutien de nos proches. C&apos;est avec beaucoup d&apos;amour que nous
          vous invitons à célébrer notre union et à être les témoins de notre
          engagement.
        </motion.p>
        <motion.p
          className="text-[15px] leading-[1.75] text-muted-foreground sm:text-base"
          {...item(0.18)}
        >
          Préparez-vous à vivre avec nous un mariage inoubliable, où tradition,
          élégance et joie seront au rendez-vous pour créer des souvenirs
          éternels.
        </motion.p>
        <motion.p
          className="text-sm font-medium tracking-wide text-muted-foreground"
          {...item(0.22)}
        >
          #LS2026
        </motion.p>
        <motion.div id="rsvp" {...item(0.26)}>
          <Button
            size="lg"
            className="h-14 rounded-full bg-primary px-12 text-sm text-primary-foreground tracking-[0.2em] uppercase hover:bg-primary/90"
          >
            <Link href="/reservation">Confirmez votre présence</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
