"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GalleryLightbox } from "@/components/home/gallery-lightbox";
import { cn } from "@/lib/utils";

type GallerySectionProps = {
  serifClassName: string;
};

const galleryImages = [
  {
    src: "/ac06bcad-4e7b-4dca-8cf2-74d10bcc5018.jpeg",
    alt: "Couple s'enlaçant — Moment de notre histoire",
    className: "sm:row-span-3", // Col 1 Top (Tall)
  },
  {
    src: "/d76a6df3-2ca2-4291-a0a9-4203ea8d392f.jpeg",
    alt: "Portrait de fiançailles — Moment de notre histoire",
    className: "sm:row-span-2", // Col 2 Top (Short)
  },
  {
    src: "/b3f09d60-25ab-485e-9c5f-fe014f520ddb.jpeg",
    alt: "Séance photo — Moment de notre histoire",
    className: "sm:row-span-3", // Col 3 Top (Tall)
  },
  {
    src: "/1069335d-befc-4cff-bff6-66d308050085.jpeg",
    alt: "Rires partagés — Moment de notre histoire",
    className: "sm:row-span-3", // Col 2 Bottom (Tall)
  },
  {
    src: "/4097433a-e1cd-4404-b530-2303186ea48b.jpeg",
    alt: "Moment complice — Moment de notre histoire",
    className: "sm:row-span-2", // Col 1 Bottom (Short)
  },
  {
    src: "/6b069496-a6e3-477d-b886-2c1f901cf087.jpeg",
    alt: "Promenade — Moment de notre histoire",
    className: "sm:row-span-2", // Col 3 Bottom (Short)
  },
];

function GalleryCell({
  className,
  delay,
  src,
  alt,
  onOpen,
}: {
  className?: string;
  delay: number;
  src: string;
  alt: string;
  onOpen: () => void;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.button
      type="button"
      aria-label={`Agrandir : ${alt}`}
      className={cn(
        "group relative cursor-zoom-in overflow-hidden rounded-[1.75rem] bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className,
      )}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { scale: 1.015 }}
      onClick={onOpen}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition duration-300 group-hover:brightness-[1.03]"
      />
      <span className="sr-only">{alt}</span>
    </motion.button>
  );
}

export function GallerySection({ serifClassName }: GallerySectionProps) {
  const reduce = useReducedMotion();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lightboxItems = galleryImages.map(({ src, alt }) => ({ src, alt }));

  return (
    <section id="galerie" className="w-full py-12 sm:py-20">
      <GalleryLightbox
        images={lightboxItems}
        open={lightboxOpen}
        startIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
      <p className="text-center text-[11px] font-medium tracking-[0.4em] text-muted-foreground uppercase">
        Notre galerie
      </p>
      <h2
        className={cn(
          serifClassName,
          "mx-auto mt-4 max-w-4xl text-center text-[1.95rem] leading-[1.07] font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]",
        )}
      >
        Explorez Les Moments Mémorables De Notre Voyage Amoureux.
      </h2>

      <div className="mt-8 grid grid-cols-1 auto-rows-[200px] gap-3 overflow-hidden rounded-4xl sm:mt-10 sm:grid-cols-2 sm:auto-rows-[120px] sm:gap-4 md:grid-cols-3 md:auto-rows-[150px]">
        {galleryImages.map((img, i) => (
          <GalleryCell
            key={img.src}
            className={cn("h-full w-full", img.className)}
            delay={i * 0.05}
            src={img.src}
            alt={img.alt}
            onOpen={() => {
              setLightboxIndex(i);
              setLightboxOpen(true);
            }}
          />
        ))}
      </div>

      <motion.div
        className="mx-auto mt-12 max-w-2xl text-center sm:mt-14"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className={cn(
            serifClassName,
            "text-[1.05rem] leading-[1.65] text-muted-foreground sm:text-lg sm:leading-[1.7]",
          )}
        >
          Ce que vous voyez ici n&apos;est qu&apos;un avant-goût : notre{" "}
          <span className="font-medium text-foreground">
            galerie complète
          </span>{" "}
          rassemble tous les instants qui nous tiennent à cœur — rires, regards,
          détails du grand jour — pour vous faire vivre notre histoire en
          images, au fil du défilement.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <Button
            size="lg"
            className="h-14 rounded-full bg-primary px-8 text-sm text-primary-foreground tracking-[0.12em] uppercase hover:bg-primary/90 sm:px-10 sm:tracking-[0.18em]"
          >
            <Link href="/galerie" className="inline-flex items-center gap-2">
              Découvrir la galerie complète
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <Link
            href="/galerie"
            className="text-sm font-medium text-primary underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary/85"
          >
            ou ouvrir directement la page Galerie
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
