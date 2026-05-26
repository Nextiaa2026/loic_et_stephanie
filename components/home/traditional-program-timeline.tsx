import { Separator } from "@/components/ui/separator";
import {
  TRADITIONAL_PROGRAM,
  TRADITIONAL_PROGRAM_INTRO,
} from "@/lib/traditional-program";
import { WEDDING_DATES } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type TraditionalProgramTimelineProps = {
  serifClassName: string;
};

export function TraditionalProgramTimeline({
  serifClassName,
}: TraditionalProgramTimelineProps) {
  return (
    <section
      id="programme"
      aria-labelledby="programme-heading"
      className="w-full border-t border-border/40 py-14 sm:py-20"
    >
      <Reveal className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Mariage traditionnel
        </p>
        <h2
          id="programme-heading"
          className={cn(
            serifClassName,
            "mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
          )}
        >
          Le programme
        </h2>
        <p className="mt-2 text-sm italic text-muted-foreground sm:text-base">
          {WEDDING_DATES.traditional.label}
        </p>
        <Separator className="mx-auto mt-5 h-px max-w-40 bg-border" />
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {TRADITIONAL_PROGRAM_INTRO}
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-12 max-w-2xl text-left">
        <ol className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-px before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent md:before:mx-auto md:before:translate-x-0">
          {TRADITIONAL_PROGRAM.map((item, index) => (
            <li
              key={index}
              className="group relative flex list-none items-center justify-between md:justify-normal md:odd:flex-row-reverse"
            >
              <div
                className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary/20 text-primary shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
                aria-hidden
              >
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              </div>
              <article className="w-[calc(100%-4rem)] rounded-2xl border border-border/50 bg-background/50 p-5 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/30 md:w-[calc(50%-2.5rem)]">
                <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <h3 className="text-base font-medium text-foreground">
                    {item.title}
                  </h3>
                  <time
                    dateTime={item.time.replace(/\s/g, "")}
                    className="w-fit shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium text-primary"
                  >
                    {item.time}
                  </time>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
