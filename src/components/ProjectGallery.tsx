"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ZoomIn } from "lucide-react";
import { Lightbox } from "./Lightbox";
import {
  galleryFilters,
  type GalleryFilter,
  type GalleryItem,
} from "@/data/gallery";
import { cn } from "@/lib/utils";

const aspectClass = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
} as const;

export function ProjectGallery({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<GalleryFilter>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visibleItems = useMemo(
    () =>
      filter === "All" ? items : items.filter((i) => i.category === filter),
    [items, filter],
  );

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter gallery by category"
        className="flex flex-wrap gap-2.5"
      >
        {galleryFilters.map((name) => {
          const isActive = filter === name;
          return (
            <button
              key={name}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(name)}
              className={cn(
                "relative cursor-pointer rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300",
                isActive
                  ? "border-brand-teal text-white"
                  : "border-brand-charcoal/15 bg-white text-brand-charcoal/80 hover:border-brand-teal hover:text-brand-teal",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="gallery-filter-pill"
                  className="absolute inset-0 rounded-full bg-brand-teal"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{name}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visibleItems.length} images
      </p>

      {visibleItems.length === 0 ? (
        <p className="mt-12 text-center text-brand-charcoal/60">
          No images in this category yet.
        </p>
      ) : (
        <motion.ul
          key={filter}
          className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          {visibleItems.map((item, i) => (
            <motion.li
              key={item.id}
              className="mb-4 break-inside-avoid"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: Math.min(i, 10) * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`View larger: ${item.title}`}
                className="group relative block w-full cursor-pointer overflow-hidden rounded-xl text-left"
              >
                <div className={cn("relative w-full", aspectClass[item.aspect])}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />

                <span className="absolute right-3 top-3 inline-flex size-9 translate-y-1 items-center justify-center rounded-full bg-white/90 text-brand-teal opacity-0 shadow transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <ZoomIn className="size-4" />
                </span>

                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <span className="inline-block rounded-full bg-brand-gold px-3 py-1 text-[11px] font-semibold text-brand-charcoal">
                    {item.category}
                  </span>
                  <p className="mt-2 text-sm font-semibold">{item.title}</p>
                </div>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      )}

      <Lightbox
        items={visibleItems}
        index={activeIndex}
        onClose={closeLightbox}
        onNavigate={setActiveIndex}
      />
    </div>
  );
}