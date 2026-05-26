import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import {
  WEDDING_DATES,
  WEDDING_IMAGES,
  WEDDING_LOCATIONS,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type CivilEventProps = {
  serifClassName: string;
};

export function CivilEvent({ serifClassName }: CivilEventProps) {
  return (
    <section id="ceremonie" className="w-full py-14 sm:py-20">
      <Reveal>
        <figure className="mx-auto w-full max-w-2xl">
          <AspectRatio
            ratio={3 / 4}
            className="overflow-hidden rounded-2xl bg-muted"
          >
            <Image
              src={WEDDING_IMAGES.civil}
              alt="Mariage civil"
              fill
              className="object-cover"
            />
          </AspectRatio>
        </figure>
      </Reveal>

      <Reveal delay={0.06} className="mt-10 text-center">
        <h2
          className={cn(
            serifClassName,
            "text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          )}
        >
          Mariage Civil
        </h2>
        <Separator className="mx-auto mt-4 h-px max-w-40 bg-border" />
        <div className="mt-6 flex flex-col items-center gap-1.5 text-sm italic text-muted-foreground sm:text-base">
          <p className="inline-flex items-center gap-2">
            <CalendarDays className="size-3.5 shrink-0" aria-hidden />
            <span>{WEDDING_DATES.civil.display}</span>
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${WEDDING_LOCATIONS.civilMapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground"
          >
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            <span>{WEDDING_LOCATIONS.civil}</span>
          </a>
        </div>
        <div className="mx-auto mt-6 max-w-xl space-y-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            L&apos;officialisation de notre union devant la loi. Les détails
            (horaire précis) vous seront communiqués en temps utile.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
