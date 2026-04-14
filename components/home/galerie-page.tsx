"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { PageContainer } from "./page-container";

const galleryImages = [
  {
    src: "/ac06bcad-4e7b-4dca-8cf2-74d10bcc5018.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/b3f09d60-25ab-485e-9c5f-fe014f520ddb.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/d76a6df3-2ca2-4291-a0a9-4203ea8d392f.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/1069335d-befc-4cff-bff6-66d308050085.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/4097433a-e1cd-4404-b530-2303186ea48b.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/6b069496-a6e3-477d-b886-2c1f901cf087.jpeg",
    alt: "Loïc et Stéphanie",
  },
];

type GaleriePageProps = { serifClassName: string };

export function GaleriePage({ serifClassName }: GaleriePageProps) {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageContainer>
        <SiteHeader serifClassName={serifClassName} />
        <main className="py-14 sm:py-20">
          {/* Video hero */}
          <div className="mb-10 overflow-hidden rounded-2xl bg-muted">
            <video
              src="/c6836ad9-fad1-4136-b6fd-bce877ac155e.mov"
              autoPlay
              muted
              loop
              playsInline
              className="w-full object-cover max-h-[480px]"
            />
          </div>

          <p className="text-center text-[11px] font-medium tracking-[0.4em] text-muted-foreground uppercase">
            Notre galerie
          </p>
          <h2
            className={cn(
              serifClassName,
              "mx-auto mt-4 max-w-3xl text-center text-[1.65rem] leading-[1.15] font-semibold tracking-tight text-foreground sm:text-4xl",
            )}
          >
            Explorez les moments mémorables de notre voyage
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                className="relative h-52 overflow-hidden rounded-2xl bg-muted sm:h-64 md:h-72"
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={reduce ? undefined : { scale: 1.015 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </main>
        <SiteFooter />
      </PageContainer>
    </div>
  );
}
