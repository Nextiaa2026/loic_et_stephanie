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
              src="/jl_2026_02.jpeg"
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
          <a
            href="https://www.google.com/maps/search/?api=1&query=Cathedrale+Notre+dame+des+victoires+Poste+centrale+Yaounde"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground"
          >
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            <span>Cathédrale Notre dame des victoires, Poste centrale, Yaoundé</span>
          </a>
        </div>
        <div className="mx-auto mt-6 max-w-xl space-y-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Dans la foi et la présence divine, nous unirons nos vies par un
            engagement sacré. Cette cérémonie solennelle célèbrera un amour
            porté par la grâce et la spiritualité.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
