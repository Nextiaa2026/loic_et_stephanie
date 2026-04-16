"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type GalleryImageItem = { src: string; alt: string };

type GalleryLightboxProps = {
  images: GalleryImageItem[];
  open: boolean;
  startIndex: number;
  onClose: () => void;
};

export function GalleryLightbox({
  images,
  open,
  startIndex,
  onClose,
}: GalleryLightboxProps) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    if (open) {
      setIndex(Math.min(Math.max(0, startIndex), images.length - 1));
    }
  }, [open, startIndex, images.length]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, goPrev, goNext]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open || images.length === 0) return null;

  const current = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Agrandissement de la photo"
      className="fixed inset-0 z-100"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/93 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Fermer la galerie"
      />

      <div className="pointer-events-none absolute inset-0 flex flex-col">
        <div className="pointer-events-auto flex shrink-0 justify-end p-3 sm:p-4">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-11 rounded-full text-white hover:bg-white/15 hover:text-white"
            onClick={onClose}
            aria-label="Fermer"
          >
            <X className="size-6" />
          </Button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-16 sm:px-4 sm:pb-20">
          <div
            className={cn(
              "pointer-events-auto relative h-[min(82dvh,calc(100dvh-7rem))] w-full max-w-6xl",
            )}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="pointer-events-auto absolute left-1 top-1/2 z-10 size-12 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 text-white hover:bg-black/60 sm:left-3 sm:size-14"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Photo précédente"
          >
            <ChevronLeft className="size-7 sm:size-8" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="pointer-events-auto absolute right-1 top-1/2 z-10 size-12 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 text-white hover:bg-black/60 sm:right-3 sm:size-14"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Photo suivante"
          >
            <ChevronRight className="size-7 sm:size-8" />
          </Button>
        </div>

        <div className="pointer-events-auto absolute bottom-4 left-0 right-0 text-center text-sm tabular-nums text-white/75">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
