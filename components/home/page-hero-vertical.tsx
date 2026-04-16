import Image from "next/image";
import { cn } from "@/lib/utils";

type PageHeroVerticalProps = {
  title: string;
  imageSrc: string;
  description?: string;
  serifClassName?: string;
};

export function PageHeroVertical({
  title,
  imageSrc,
  description,
  serifClassName,
}: PageHeroVerticalProps) {
  return (
    <section className="py-6 sm:py-10">
      <figure className="mx-auto w-full max-w-xl overflow-hidden bg-muted">
        <div className="relative aspect-3/4 sm:aspect-4/5">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 520px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-neutral-950/35" />
          <div className="absolute inset-0 flex items-end justify-center p-6 text-center sm:p-10">
            <div className="max-w-md">
              <h1
                className={cn(
                  serifClassName,
                  "text-4xl font-semibold tracking-tight text-white sm:text-5xl",
                )}
              >
                {title}
              </h1>
              {description ? (
                <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                  {description}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
}
