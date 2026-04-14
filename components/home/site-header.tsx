"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  serifClassName: string;
};

const mariageDropdownItems = [
  { label: "Les dates", href: "/le-mariage/les-dates" },
  { label: "Dress Code", href: "/le-mariage/dress-code" },
  {
    label: "Informations Pratiques",
    href: "/le-mariage/informations-pratiques",
  },
];

export function SiteHeader({ serifClassName }: SiteHeaderProps) {
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = (active?: boolean) =>
    cn(
      "text-sm font-medium tracking-normal transition-colors",
      active ? "text-primary" : "text-muted-foreground hover:text-foreground",
    );

  return (
    <motion.header
      id="accueil"
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm"
      initial={reduce ? false : { opacity: 0, y: -12 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex h-18 w-full items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="z-10 group flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-85"
        >
          <Image
            src="/logo.svg"
            alt="Loïc & Stéphanie"
            width={44}
            height={44}
            className="h-10 w-10 sm:h-11 sm:w-11"
            priority
          />
          <span className={cn(serifClassName, "hidden text-base font-medium tracking-tight text-muted-foreground sm:inline")}>
            Loïc & Stéphanie
          </span>
        </Link>

        {/* Desktop Navigation perfectly centered */}
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
          <NavigationMenu className="pointer-events-auto max-w-none">
             <NavigationMenuList className="flex-wrap justify-center gap-1 sm:gap-3 md:gap-5">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={linkClass(pathname === "/")}
                >
                  Accueil
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/notre-histoire"
                  className={linkClass(pathname === "/notre-histoire")}
                >
                  Notre Histoire
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    linkClass(pathname.startsWith("/le-mariage")),
                    "data-popup-open:text-foreground",
                  )}
                >
                  Le Mariage
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex min-w-[220px] flex-col gap-0.5 p-2">
                    {mariageDropdownItems.map((item) => (
                      <NavigationMenuLink
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-muted hover:text-foreground",
                          pathname === item.href ? "text-primary bg-muted/50" : "text-muted-foreground"
                        )}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <motion.nav
          className="flex flex-col gap-1 pb-4 pt-3 md:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Accueil
          </Link>
          <Link
            href="/notre-histoire"
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Notre Histoire
          </Link>
          <div className="px-3 pt-2 pb-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Le Mariage
            </p>
          </div>
          {mariageDropdownItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-5 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
