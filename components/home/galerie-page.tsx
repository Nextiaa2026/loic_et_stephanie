"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { GalleryLightbox } from "@/components/home/gallery-lightbox";
import { PageHeroVertical } from "@/components/home/page-hero-vertical";
import { cn } from "@/lib/utils";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { PageContainer } from "./page-container";

const galleryImages = [
  {
    src: "/jl_2026_main_hero.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/jl_2026_01.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/jl_2026_02.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/jl_2026_03.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/jl_2026_04.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/jl_2026_05.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/jl_2026_06.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/jl_2026_08.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/jl_2026_07.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/jl_2026_09.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/jl_2026_10.jpeg",
    alt: "Loïc et Stéphanie",
  },
  {
    src: "/jl_2026_11.jpeg",
    alt: "Loïc et Stéphanie",
  },
];

type GaleriePageProps = { serifClassName: string };

export function GaleriePage({ serifClassName }: GaleriePageProps) {
  const reduce = useReducedMotion();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  const lightboxItems = galleryImages.map(({ src, alt }) => ({ src, alt }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageContainer>
        <GalleryLightbox
          images={lightboxItems}
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

          <div className="mx-auto mt-10 max-w-xl">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Ouvrir la vidéo en grand format"
            >
              <video
                src="/c6836ad9-fad1-4136-b6fd-bce877ac155e.mov"
                muted
                loop
                playsInline
                autoPlay
                className="h-56 w-full object-cover sm:h-64"
              />
              <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold tracking-wider text-foreground uppercase">
                  Voir la vidéo
                </span>
              </div>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
            {galleryImages.map((img, i) => (
              <motion.button
                key={img.src}
                type="button"
                aria-label={`Agrandir : ${img.alt}`}
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
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:brightness-[1.03]"
                />
                <span className="sr-only">{img.alt}</span>
              </motion.button>
            ))}
          </div>
        </main>
        <SiteFooter />
      </PageContainer>

      {videoOpen ? (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Lecture vidéo"
        >
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Fermer la vidéo"
            onClick={() => setVideoOpen(false)}
          />
          <div className="relative z-10 w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Fermer"
            >
              <X className="size-5" />
            </button>
            <video
              src="/c6836ad9-fad1-4136-b6fd-bce877ac155e.mov"
              controls
              autoPlay
              playsInline
              className="max-h-[85vh] w-full rounded-xl bg-black object-contain"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
