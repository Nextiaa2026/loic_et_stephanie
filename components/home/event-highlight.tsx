import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type EventHighlightProps = {
  serifClassName: string;
};

export function EventHighlight({ serifClassName }: EventHighlightProps) {
  return (
    <section id="ceremonie" className="w-full py-14 sm:py-20">
      <Reveal>
        <figure className="mx-auto w-full max-w-2xl">
          <AspectRatio
            ratio={3 / 4}
            className="overflow-hidden rounded-2xl bg-muted"
          >
            <Image
              src="/1069335d-befc-4cff-bff6-66d308050085.jpeg"
              alt="Mariage traditionnel"
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
          Mariage Traditionnel
        </h2>
        <Separator className="mx-auto mt-4 h-px max-w-40 bg-border" />
        <div className="mt-6 flex flex-col items-center gap-1.5 text-sm italic text-muted-foreground sm:text-base">
          <p className="inline-flex items-center gap-2">
            <CalendarDays className="size-3.5 shrink-0" aria-hidden />
            <span>Samedi 26 juillet 2026</span>
          </p>
          <p className="inline-flex items-center gap-2">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            <span>La Vallée de Bana</span>
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-xl space-y-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>Un hommage vibrant à nos racines.</p>
          <p>
            Cette cérémonie, empreinte de symboles, marquera l&apos;union de nos
            familles dans la plus belle tradition.
          </p>
          <p>Un moment de partage, de rituels et d&apos;émotions</p>
        </div>
      </Reveal>
    </section>
  );
}
