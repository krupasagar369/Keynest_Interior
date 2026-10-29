"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEnquiry } from "./EnquiryProvider";
import { buttonVariants } from "./ui/Button";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 shadow-[0_2px_20px_rgba(32,43,50,0.08)] backdrop-blur-md"
          : "bg-white",
      )}
    >
      <div className="wrapper flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          aria-label="KeyNest Interiors home"
          className="shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative inline-block py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-brand-teal"
                      : "text-brand-charcoal/75 hover:text-brand-teal",
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => openEnquiry()}
            className={cn(buttonVariants({ variant: "gold", size: "md" }), "hidden sm:inline-flex")}
          >
            <MessageCircle className="size-4" />
            Get a Free Consultation
          </button>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-md text-brand-charcoal transition hover:bg-brand-ivory lg:hidden"
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-brand-charcoal/10 bg-white lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="wrapper py-4">
              <ul className="flex flex-col">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "block rounded-md px-3 py-3 text-base font-medium transition-colors",
                        isActive(item.href)
                          ? "bg-brand-ivory text-brand-teal"
                          : "text-brand-charcoal hover:bg-brand-ivory",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openEnquiry();
                }}
                className={cn(buttonVariants({ variant: "gold", size: "lg" }), "mt-4 w-full")}
              >
                <MessageCircle className="size-4" />
                Get a Free Consultation
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}