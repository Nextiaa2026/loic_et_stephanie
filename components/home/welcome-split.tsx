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
      className="grid w-full gap-8 py-12 sm:grid-cols-2 sm:gap-16 sm:py-20"
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
            "text-balance text-[1.95rem] leading-[1.07] font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-[1.08]",
          )}
          {...item(0.04)}
        >
          C’est avec une immense joie que nous partageons avec vous un morceau
          de ce que Dieu bâtit en nous.{" "}
        </motion.h2>
      </div>
      <div className="flex flex-col gap-4 pt-0.5 sm:gap-5 sm:pt-1">
        <motion.p
          className="text-[15px] leading-[1.7] text-muted-foreground sm:text-base sm:leading-[1.75]"
          {...item(0.06)}
        >
          Chaque rencontre, chaque sourire, chaque saison nous a conduits vers
          ce moment précieux que nous nous apprêtons à vivre avec vous.
        </motion.p>
        <motion.p
          className="text-[15px] leading-[1.7] text-muted-foreground sm:text-base sm:leading-[1.75]"
          {...item(0.12)}
        >
          Votre présence, votre affection et vos prières donneront encore plus
          de sens à ces jours si spéciaux.
        </motion.p>
        <motion.p
          className="text-[15px] leading-[1.7] text-muted-foreground sm:text-base sm:leading-[1.75]"
          {...item(0.18)}
        >
          Merci de marcher avec nous, d’être témoins de notre amour et de
          célébrer ce nouveau chapitre qui s’ouvre devant nous.
          <br />
          Bienvenue dans notre bonheur. <br />
          Bienvenue dans notre histoire.
        </motion.p>
        <motion.p
          className="text-base font-bold tracking-wide text-muted-foreground"
          {...item(0.22)}
        >
          #SL2026 · #ASSOKE2026
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
