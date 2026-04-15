"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

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
}: {
  className?: string;
  delay: number;
  src: string;
  alt: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] bg-muted",
        className,
      )}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { scale: 1.015 }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover"
      />
    </motion.div>
  );
}

export function GallerySection({ serifClassName }: GallerySectionProps) {
  return (
    <section id="galerie" className="w-full py-12 sm:py-20">
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
          />
        ))}
      </div>
    </section>
  );
}
