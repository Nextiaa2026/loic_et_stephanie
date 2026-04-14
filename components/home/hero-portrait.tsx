"use client";

import { motion, useReducedMotion } from "framer-motion";

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

type HeroPortraitProps = {
  serifClassName: string;
};

export function HeroPortrait({ serifClassName }: HeroPortraitProps) {
  const reduce = useReducedMotion();

  return (
    <section className="w-full pb-6 pt-2">
      <motion.div
        className="relative isolate w-full overflow-hidden bg-muted"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <AspectRatio ratio={16 / 7} className="bg-muted">
          <Image
            src="/b3f09d60-25ab-485e-9c5f-fe014f520ddb.jpeg"
            alt="Loïc et Stéphanie"
            fill
            sizes="100vw"
            className="object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-r from-neutral-950/82 via-neutral-950/48 to-neutral-950/12" />
          <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 md:max-w-[min(52%,26rem)] md:justify-center md:pb-14 md:pl-10 lg:pl-12">
            <motion.p
              className="mb-3 text-[10px] font-medium tracking-[0.32em] text-white/70 sm:text-[11px]"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.5 }}
            >
              #LS2026
            </motion.p>
            <motion.h1
              className={cn(
                serifClassName,
                "mb-4 text-balance text-xl leading-[1.15] font-semibold tracking-tight text-white sm:text-3xl sm:mb-5 lg:text-[2.75rem]",
              )}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.6 }}
            >
              Loïc & Stéphanie — Pour La Vie
            </motion.h1>
            <motion.p
              className="max-w-md text-[15px] leading-[1.65] font-normal text-white/88 sm:text-base"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.55 }}
            >
              Parce que chaque histoire d&apos;amour est unique, voici la nôtre.
            </motion.p>
          </div>
        </AspectRatio>
      </motion.div>
    </section>
  );
}
