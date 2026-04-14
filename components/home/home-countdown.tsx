"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date): TimeLeft {
  const total = target.getTime() - Date.now();
  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds };
}

function pad2(n: number) {
  return n.toString().padStart(2, "0");
}

function AnimatedDigit({
  value,
  reduceMotion,
}: {
  value: string;
  reduceMotion: boolean | null;
}) {
  if (reduceMotion) {
    return <span>{value}</span>;
  }
  return (
    <span className="relative inline-flex min-w-[0.65em] justify-center font-sans tabular-nums">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function CountdownUnit({
  label,
  value,
  reduceMotion,
  pad = true,
}: {
  label: string;
  value: number;
  reduceMotion: boolean | null;
  pad?: boolean;
}) {
  const str = pad ? pad2(value) : String(value);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="font-sans text-5xl font-extralight tracking-tight text-muted-foreground sm:text-6xl md:text-7xl lg:text-8xl">
        <AnimatedDigit value={str} reduceMotion={reduceMotion} />
      </div>
      <span className="text-[10px] font-medium tracking-[0.35em] text-muted-foreground/90 uppercase">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span
      className="translate-y-[-0.35rem] self-start font-sans text-4xl font-extralight text-muted-foreground/60 sm:text-5xl md:text-6xl"
      aria-hidden
    >
      :
    </span>
  );
}

type HomeCountdownProps = {
  serifClassName: string;
};

export function HomeCountdown({ serifClassName }: HomeCountdownProps) {
  const reduce = useReducedMotion();
  const target = useMemo(() => new Date("2026-07-26T14:00:00"), []);
  const [left, setLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Set initial value on client to avoid hydration mismatch
    setLeft(getTimeLeft(target));
    const id = window.setInterval(() => {
      setLeft(getTimeLeft(target));
    }, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  // Show zeros during SSR / before mount
  const display = left ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <section className="border-b border-border/40 pt-6 pb-10 sm:pt-8 sm:pb-14">
      <div className="w-full">
        <h2
          className={cn(
            serifClassName,
            "mx-auto mb-10 max-w-3xl text-center text-[1.6rem] font-medium tracking-tight text-muted-foreground sm:mb-12 sm:text-3xl lg:text-[2rem]",
          )}
        >
          Le décompte est lancé !
        </h2>
        <div className="flex flex-wrap items-start justify-center gap-1 sm:gap-4 md:gap-8">
          <CountdownUnit
            label="Days"
            value={display.days}
            reduceMotion={reduce}
            pad={false}
          />
          <Colon />
          <CountdownUnit
            label="Hours"
            value={display.hours}
            reduceMotion={reduce}
          />
          <Colon />
          <CountdownUnit
            label="Minutes"
            value={display.minutes}
            reduceMotion={reduce}
          />
          <Colon />
          <CountdownUnit
            label="Seconds"
            value={display.seconds}
            reduceMotion={reduce}
          />
        </div>
      </div>
    </section>
  );
}
