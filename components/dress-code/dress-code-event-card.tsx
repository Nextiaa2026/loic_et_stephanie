import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { DressCodeEvent } from "@/lib/dress-code";

type DressCodeEventCardProps = {
  dressCode: DressCodeEvent;
  serifClassName: string;
};

function DressCodeBlock({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <div className="space-y-3">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export function DressCodeEventCard({
  dressCode,
  serifClassName,
}: DressCodeEventCardProps) {
  return (
    <Card className="rounded-2xl border-border/60 shadow-none">
      <CardHeader className="px-6 pt-8 sm:px-10 sm:pt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          {dressCode.eventLabel}
        </p>
        <CardTitle
          className={`${serifClassName} mt-2 text-2xl font-semibold tracking-tight sm:text-3xl`}
        >
          {dressCode.ambiance}
        </CardTitle>
        <CardDescription className="sr-only">
          Dress code — {dressCode.eventLabel}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-6 pb-8 sm:px-10 sm:pb-10">
        {dressCode.intro ? (
          <div className="space-y-3">
            {(Array.isArray(dressCode.intro)
              ? dressCode.intro
              : [dressCode.intro]
            ).map((paragraph, index) => (
              <p
                key={index}
                className="text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}

        <DressCodeBlock
          title={dressCode.expectedTitle}
          paragraphs={dressCode.expected}
        />
        <DressCodeBlock title={dressCode.avoidTitle} paragraphs={dressCode.avoid} />
        <DressCodeBlock
          title={dressCode.colorsTitle}
          paragraphs={dressCode.colors}
        />

        {dressCode.inspiration ? (
          <div className="space-y-2 rounded-xl border border-border/50 bg-muted/30 px-4 py-4 sm:px-5">
            <h4 className="text-sm font-semibold text-foreground">
              {dressCode.inspiration.title}
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {dressCode.inspiration.description}
            </p>
            <a
              href={dressCode.inspiration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary/85"
            >
              Voir le moodboard sur Pinterest
              <ExternalLink className="size-3.5 shrink-0" aria-hidden />
            </a>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
