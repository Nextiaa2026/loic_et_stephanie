"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

type PracticalInfoProps = {
  serifClassName: string
}

export function PracticalInfo({ serifClassName }: PracticalInfoProps) {
  const reduce = useReducedMotion()

  return (
    <section id="informations" className="w-full pb-14 sm:pb-20">
      <div className="mb-6 flex gap-3 sm:mb-8" aria-hidden>
        {[0, 1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-16 flex-1 rounded-xl sm:h-20" />
        ))}
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card className="rounded-[2rem] border border-border/60 bg-card py-0 shadow-none ring-0 sm:rounded-[2.25rem]">
          <CardHeader className="items-center px-6 pt-8 pb-2 text-center sm:px-12 sm:pt-10">
            <CardTitle
              className={cn(
                serifClassName,
                "font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              )}
            >
              Informations pratiques
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 px-6 pb-8 sm:px-12 sm:pb-10">
            <CardDescription className="text-left text-base leading-relaxed sm:text-[15px]">
              Tous les détails concernant les lieux, le transport, les tenues, le
              programme ou encore les confirmations de présence sont disponibles
              ici&nbsp;:
            </CardDescription>
            <Link
              href="#faq"
              className="inline-block text-sm font-medium text-foreground underline decoration-foreground/40 underline-offset-4 transition-colors hover:text-foreground/80"
            >
              Consulter les informations pratiques
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
