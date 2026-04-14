"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 480)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed right-5 bottom-6 z-50 sm:right-8"
          initial={reduce ? false : { opacity: 0, scale: 0.85, y: 8 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, scale: 0.9, y: 8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button
            size="icon"
            variant="secondary"
            className="size-11 rounded-lg border border-border bg-card shadow-none"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
            }
            aria-label="Back to top"
          >
            <ChevronUp className="size-5" />
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
