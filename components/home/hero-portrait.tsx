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
    <section className="w-full pb-4 pt-1 sm:pb-6 sm:pt-2">
      <motion.div
        className="relative isolate w-full overflow-hidden bg-muted"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <AspectRatio ratio={4 / 5} className="bg-muted md:aspect-16/7">
          <Image
            src="/jl_2026_main_hero.jpeg"
            alt="Stéphanie et Loïc"
            fill
            sizes="100vw"
            className="object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-950/86 via-neutral-950/55 to-neutral-950/20 md:bg-linear-to-r md:from-neutral-950/82 md:via-neutral-950/48 md:to-neutral-950/12" />
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 md:max-w-[min(52%,26rem)] md:justify-center md:pb-14 md:pl-10 lg:pl-12">
            <motion.p
              className="mb-2 text-base font-bold  text-white/80 sm:mb-3 sm:text-[11px]"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.5 }}
            >
              #SL2026 · #ASSOKE2026
            </motion.p>
            <motion.h1
              className={cn(
                serifClassName,
                "mb-3 text-balance text-[1.95rem] leading-[1.06] font-semibold tracking-tight text-white sm:mb-5 sm:text-3xl lg:text-[2.75rem]",
              )}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.6 }}
            >
              Stéphanie & Loïc — Pour La Vie
            </motion.h1>
            <motion.p
              className="max-w-md text-sm leading-[1.55] font-normal text-white/88 sm:text-base sm:leading-[1.65]"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.55 }}
            >
              Deux cœurs guidés, une histoire écrite par Dieu.
            </motion.p>
          </div>
        </AspectRatio>
      </motion.div>
    </section>
  );
}
