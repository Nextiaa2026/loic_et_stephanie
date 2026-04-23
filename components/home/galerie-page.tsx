"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GalleryLightbox } from "@/components/home/gallery-lightbox";
import { PageHeroVertical } from "@/components/home/page-hero-vertical";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { PageContainer } from "./page-container";

const galleryItems = [
  {
    type: "image" as const,
    src: "/jl_2026_main_hero.jpeg",
    alt: "Stéphanie et Loïc",
  },
  {
    type: "image" as const,
    src: "/jl_2026_01.jpeg",
    alt: "Stéphanie et Loïc",
  },
  {
    type: "image" as const,
    src: "/jl_2026_02.jpeg",
    alt: "Stéphanie et Loïc",
  },
  {
    type: "image" as const,
    src: "/jl_2026_03.jpeg",
    alt: "Stéphanie et Loïc",
  },
  {
    type: "image" as const,
    src: "/jl_2026_04.jpeg",
    alt: "Stéphanie et Loïc",
  },
  {
    type: "image" as const,
    src: "/jl_2026_05.jpeg",
    alt: "Stéphanie et Loïc",
  },
  {
    type: "image" as const,
    src: "/jl_2026_06.jpeg",
    alt: "Stéphanie et Loïc",
  },
  {
    type: "image" as const,
    src: "/jl_2026_08.jpeg",
    alt: "Stéphanie et Loïc",
  },
  {
    type: "image" as const,
    src: "/jl_2026_07.jpeg",
    alt: "Stéphanie et Loïc",
  },
  {
    type: "image" as const,
    src: "/jl_2026_09.jpeg",
    alt: "Stéphanie et Loïc",
  },
  {
    type: "image" as const,
    src: "/jl_2026_10.jpeg",
    alt: "Stéphanie et Loïc",
  },
  {
    type: "image" as const,
    src: "/jl_2026_11.jpeg",
    alt: "Stéphanie et Loïc",
  },
  {
    type: "video" as const,
    src: "/c6836ad9-fad1-4136-b6fd-bce877ac155e.mov",
    alt: "Vidéo — Stéphanie et Loïc",
  },
  {
    type: "video" as const,
    src: "/f74305e0-c734-4425-aecc-02fd61f00ce2.mov",
    alt: "Vidéo — Stéphanie et Loïc",
  },
  {
    type: "video" as const,
    src: "/dc52a332-a698-45c7-afe1-5396eb7700ab.mp4",
    alt: "Vidéo — Stéphanie et Loïc",
  },
];

type GaleriePageProps = { serifClassName: string };

export function GaleriePage({ serifClassName }: GaleriePageProps) {
  const reduce = useReducedMotion();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lightboxItems = galleryItems.map(({ type, src, alt }) => ({
    type,
    src,
    alt,
  }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageContainer>
        <GalleryLightbox
          items={lightboxItems}
          open={lightboxOpen}
          startIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
        <SiteHeader serifClassName={serifClassName} />
        <main className="py-14 sm:py-20">
          <PageHeroVertical
            title="Notre Galerie"
            description="Explorez les moments mémorables de notre voyage."
            imageSrc="/jl_2026_06.jpeg"
            serifClassName={serifClassName}
          />

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
            {galleryItems.map((item, i) => (
              <motion.button
                key={item.src}
                type="button"
                aria-label={`Agrandir : ${item.alt}`}
                className="group relative h-52 cursor-zoom-in overflow-hidden rounded-2xl bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:h-64 md:h-72"
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={reduce ? undefined : { scale: 1.015 }}
                onClick={() => {
                  setLightboxIndex(i);
                  setLightboxOpen(true);
                }}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition duration-300 group-hover:brightness-[1.03]"
                  />
                ) : (
                  <>
                    <video
                      src={item.src}
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="h-full w-full object-cover transition duration-300 group-hover:brightness-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold tracking-wider text-foreground uppercase">
                        Vidéo
                      </span>
                    </div>
                  </>
                )}
                <span className="sr-only">{item.alt}</span>
              </motion.button>
            ))}
          </div>
        </main>
        <SiteFooter />
      </PageContainer>
    </div>
  );
}
