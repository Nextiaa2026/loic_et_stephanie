"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type StoryWithMediaProps = {
  serifClassName: string;
};

export function StoryWithMedia({ serifClassName }: StoryWithMediaProps) {
  const reduce = useReducedMotion();

  return (
    <section id="decouverte" className="w-full py-14 sm:py-20">
      <div className="grid gap-6 md:grid-cols-2 md:gap-12 md:items-start mb-10">
        <motion.h2
          className={cn(
            serifClassName,
            "text-[2rem] leading-tight font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          )}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Remontez le fil de notre histoire
        </motion.h2>
        <motion.div
          className="flex flex-col gap-5"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base leading-relaxed text-muted-foreground">
            Parce qu&apos;avant le « Oui », il y a eu un regard, une rencontre,
            et mille petits instants précieux…
          </p>
          <Button
            size="lg"
            className="w-fit h-14 rounded-full bg-primary px-12 text-sm text-primary-foreground tracking-[0.2em] uppercase hover:bg-primary/90"
          >
            <Link href="/notre-histoire">Découvrir</Link>
          </Button>
        </motion.div>
      </div>

      <motion.figure
        id="reception"
        className="mx-auto w-full max-w-4xl"
        initial={reduce ? false : { opacity: 0, y: 28, scale: 0.99 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="overflow-hidden rounded-2xl bg-muted">
          <AspectRatio ratio={16 / 7} className="bg-muted">
            <Image
              src="/6b069496-a6e3-477d-b886-2c1f901cf087.jpeg"
              alt="Notre histoire"
              fill
              className="object-cover"
            />
          </AspectRatio>
        </div>
      </motion.figure>
    </section>
  );
}
