import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type EventReligiousProps = {
  serifClassName: string;
};

export function EventReligious({ serifClassName }: EventReligiousProps) {
  return (
    <section id="mariage-religieux" className="w-full py-14 sm:py-20">
      <Reveal>
        <figure className="mx-auto w-full max-w-2xl">
          <AspectRatio
            ratio={3 / 4}
            className="overflow-hidden rounded-2xl bg-muted"
          >
            <Image
              src="/4097433a-e1cd-4404-b530-2303186ea48b.jpeg"
              alt="Mariage religieux"
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
            "text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
          )}
        >
          Mariage Religieux
        </h2>
        <Separator className="mx-auto mt-4 h-px max-w-40 bg-border" />
        <div className="mt-6 flex flex-col items-center gap-1.5 text-sm italic text-muted-foreground sm:text-base">
          <p className="inline-flex items-center gap-2">
            <CalendarDays className="size-3.5 shrink-0" aria-hidden />
            <span>Samedi 02 août 2026</span>
          </p>
          <p className="inline-flex items-center gap-2">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            <span>Cathédrale Poste Central</span>
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-xl space-y-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>Une promesse sacrée devant Dieu et nos proches.</p>
          <p>
            Nous scellerons notre engagement au cœur d&apos;une célébration
            spirituelle, élégante et solennelle.
          </p>
          <p>L&apos;amour élevé à sa plus belle dimension.</p>
        </div>
      </Reveal>
    </section>
  );
}
