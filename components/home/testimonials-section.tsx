"use client"

import { motion, useReducedMotion } from "framer-motion"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type TestimonialsSectionProps = {
  serifClassName: string
}

const cards = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    primary: "Mike Fotso",
    secondary: "The best or nothing",
    primaryClass: "font-semibold text-foreground",
  },
  {
    quote:
      "Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    primary: "Sarah & Jonathan",
    secondary: null,
    primaryClass: "text-muted-foreground",
  },
  {
    quote:
      "Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis.",
    primary: "Eva",
    secondary: null,
    primaryClass: "font-bold text-foreground",
  },
] as const

export function TestimonialsSection({
  serifClassName,
}: TestimonialsSectionProps) {
  const reduce = useReducedMotion()

  return (
    <section className="w-full py-14 sm:py-20">
      <p className="text-center text-[11px] font-medium tracking-[0.4em] text-muted-foreground uppercase">
        Témoignages
      </p>
      <h2
        className={cn(
          serifClassName,
          "mx-auto mt-4 mb-10 max-w-3xl text-center text-[1.95rem] leading-[1.08] font-semibold tracking-tight text-foreground sm:text-4xl"
        )}
      >
        Ce que nos amis disent de nous
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
        {cards.map((item, i) => (
          <motion.div
            key={item.primary}
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 0.65,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={reduce ? undefined : { y: -4 }}
          >
            <Card className="h-full rounded-[1.75rem] border border-border/60 bg-card py-0 shadow-none ring-0 transition-colors hover:border-foreground/25 sm:rounded-[2rem]">
              <CardHeader className="px-6 pt-8 pb-0 sm:px-7 sm:pt-9">
                <CardTitle className="sr-only">Témoignage</CardTitle>
              </CardHeader>
              <CardContent className="px-6 sm:px-7">
                <CardDescription className="text-center text-[15px] leading-relaxed text-muted-foreground">
                  {item.quote}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center gap-1 border-0 bg-transparent px-6 pt-4 pb-8 text-center sm:px-7 sm:pb-9">
                <p
                  className={cn(serifClassName, "text-base", item.primaryClass)}
                >
                  {item.primary}
                </p>
                {item.secondary ? (
                  <p
                    className={cn(
                      serifClassName,
                      "text-sm text-muted-foreground"
                    )}
                  >
                    {item.secondary}
                  </p>
                ) : null}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
