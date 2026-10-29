"use client";

import { useEffect, useRef, type TouchEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

type Props = {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onNavigate }: Props) {
  return (
    <AnimatePresence>
      {index !== null && items[index] && (
        <LightboxDialog
          key="lightbox"
          items={items}
          index={index}
          onClose={onClose}
          onNavigate={onNavigate}
        />
      )}
    </AnimatePresence>
  );
}

function LightboxDialog({
  items,
  index,
  onClose,
  onNavigate,
}: Props & { index: number }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const item = items[index];
  const total = items.length;

  // Scroll lock, initial focus, and focus restore.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>("button")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  // Keyboard: Escape, arrows, and Tab focus trap.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNavigate((index + 1) % total);
      } else if (e.key === "ArrowLeft") {
        onNavigate((index - 1 + total) % total);
      } else if (e.key === "Tab" && dialogRef.current) {
        const focusable =
          dialogRef.current.querySelectorAll<HTMLElement>("button");
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [index, total, onClose, onNavigate]);

  function handleTouchStart(e: TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: TouchEvent) {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(diff) < 50) return;
    onNavigate(diff < 0 ? (index + 1) % total : (index - 1 + total) % total);
  }

  const navButton =
    "absolute top-1/2 z-10 inline-flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25 sm:size-12";

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title}, image ${index + 1} of ${total}`}
      className="fixed inset-0 z-50 flex flex-col bg-brand-charcoal/95 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <p aria-live="polite" className="text-sm text-white/70">
          {index + 1} / {total}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-white transition hover:bg-white/15"
        >
          <X className="size-6" />
        </button>
      </div>

      <div
        className="relative mx-auto min-h-0 w-full max-w-6xl flex-1 px-4 sm:px-16"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {total > 1 && (
          <button
            type="button"
            onClick={() => onNavigate((index - 1 + total) % total)}
            aria-label="Previous image"
            className={`${navButton} left-2 sm:left-3`}
          >
            <ChevronLeft className="size-6" />
          </button>
        )}

        <motion.div
          key={item.id}
          className="relative h-full w-full"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </motion.div>

        {total > 1 && (
          <button
            type="button"
            onClick={() => onNavigate((index + 1) % total)}
            aria-label="Next image"
            className={`${navButton} right-2 sm:right-3`}
          >
            <ChevronRight className="size-6" />
          </button>
        )}
      </div>

      <div className="px-4 py-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
          {item.category}
        </p>
        <p className="mt-1 text-base font-semibold text-white">{item.title}</p>
      </div>
    </motion.div>
  );
}