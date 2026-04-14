"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type InviteHeroProps = {
  serifClassName: string;
};

export function InviteHero({ serifClassName }: InviteHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative isolate mt-8 overflow-hidden text-white [clip-path:polygon(0_4vw,_100%_0,_100%_100%,_0_100%)] sm:[clip-path:polygon(0_3vw,_100%_0,_100%_100%,_0_100%)]"
      style={{ minHeight: "340px" }}
    >
      <Image
        src="/ac06bcad-4e7b-4dca-8cf2-74d10bcc5018.jpeg"
        alt="Loïc et Stéphanie"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-neutral-950/70" />

      <div className="relative mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <motion.p
          className="mb-5 text-[11px] font-medium tracking-[0.38em] text-white/65 uppercase"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          Soyez des nôtres
        </motion.p>
        <motion.h2
          className={cn(
            serifClassName,
            "text-[1.65rem] leading-[1.12] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.35rem]",
          )}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.06 }}
        >
          Notre Histoire D&apos;amour S&apos;écrit Avec Vous.
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          Rejoignez-nous pour célébrer un amour vrai, tendre et inoubliable.
          Chaque moment comptera, chaque sourire sera un souvenir.
        </motion.p>
        <motion.p
          className={cn(
            serifClassName,
            "mt-10 text-3xl font-normal text-white/90",
          )}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          LS
        </motion.p>
      </div>
    </section>
  );
}
