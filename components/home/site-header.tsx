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
      <div className="relative flex h-18 w-full items-center justify-between px-0 sm:px-2 lg:px-6">
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
          <span
            className={cn(
              serifClassName,
              "text-[1.22rem] leading-none font-semibold tracking-tight text-foreground sm:text-base sm:font-medium sm:text-muted-foreground",
            )}
          >
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
                          pathname === item.href
                            ? "text-primary bg-muted/50"
                            : "text-muted-foreground",
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
            variant="outline"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            className="h-12 w-12 rounded-none border-primary/60 text-primary hover:bg-primary/10 hover:text-primary"
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <motion.nav
          className="flex flex-col border-t border-border/70 bg-background pb-4 pt-3 md:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "px-3 py-3 text-[1.9rem] tracking-tight transition-colors",
              serifClassName,
              pathname === "/"
                ? "text-primary"
                : "text-foreground hover:bg-muted/50",
            )}
          >
            Accueil
          </Link>
          <Link
            href="/notre-histoire"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "border-t border-border/60 px-3 py-3 text-[1.9rem] tracking-tight transition-colors",
              serifClassName,
              pathname === "/notre-histoire"
                ? "text-primary"
                : "text-foreground hover:bg-muted/50",
            )}
          >
            Notre Histoire
          </Link>
          <div className="border-t border-border/60 px-3 pt-3 pb-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Le Mariage
            </p>
          </div>
          {mariageDropdownItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "px-5 py-2.5 text-base transition-colors",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
