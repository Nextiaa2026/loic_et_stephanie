"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { GalleryLightbox } from "@/components/home/gallery-lightbox";
import { cn } from "@/lib/utils";

type GallerySectionProps = {
  serifClassName: string;
};

const galleryImages = [
  {
    src: "/jl_2026_01.jpeg",
    alt: "Couple s'enlaçant — Moment de notre histoire",
    className: "sm:row-span-3", // Col 1 Top (Tall)
  },
  {
    src: "/jl_2026_02.jpeg",
    alt: "Portrait de fiançailles — Moment de notre histoire",
    className: "sm:row-span-2", // Col 2 Top (Short)
  },
  {
    src: "/jl_2026_03.jpeg",
    alt: "Séance photo — Moment de notre histoire",
    className: "sm:row-span-3", // Col 3 Top (Tall)
  },
  {
    src: "/jl_2026_04.jpeg",
    alt: "Rires partagés — Moment de notre histoire",
    className: "sm:row-span-3", // Col 2 Bottom (Tall)
  },
  {
    src: "/jl_2026_05.jpeg",
    alt: "Moment complice — Moment de notre histoire",
    className: "sm:row-span-2", // Col 1 Bottom (Short)
  },
  {
    src: "/jl_2026_06.jpeg",
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
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition duration-300 group-hover:brightness-[1.03]"
      />
      <span className="sr-only">{alt}</span>
    </motion.button>
  );
}

export function GallerySection({ serifClassName }: GallerySectionProps) {
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

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 auto-rows-[220px] gap-3 sm:grid-cols-2 sm:auto-rows-[130px] sm:gap-4 md:grid-cols-3 md:auto-rows-[160px]">
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

      <div className="mt-8 text-center sm:mt-10">
        <Link
          href="/galerie"
          className="text-sm font-medium text-primary underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary/85 sm:text-base"
        >
          Voir la galerie complète
        </Link>
      </div>
    </section>
  );
}
