"use client";

import { ComponentPropsWithoutRef, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { cn } from "@/lib/utils";

const AUTO_DELAY = 3500;
const SWIPE_THRESHOLD = 40;

type CarouselProps = ComponentPropsWithoutRef<"div"> & {
  images: string[];
  priority?: boolean;
};

export const Carousel = ({ images, priority = false, className, ...props }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(() => setCurrentIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrentIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    if (images.length <= 1 || hovered || lightboxOpen || isDragging) return;
    const id = setInterval(next, AUTO_DELAY);
    return () => clearInterval(id);
  }, [images.length, hovered, lightboxOpen, isDragging, next]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, prev, next]);

  if (images.length === 0) return null;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    setDragOffset(e.touches[0].clientX - touchStartX.current);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      delta > 0 ? next() : prev();
    }
    setDragOffset(0);
    setIsDragging(false);
    touchStartX.current = null;
  };

  const onLightboxTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      delta > 0 ? next() : prev();
    } else {
      setLightboxOpen(false);
    }
    touchStartX.current = null;
  };

  const lightbox = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={() => setLightboxOpen(false)}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={onLightboxTouchEnd}
    >
      <button
        className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-3 z-10"
        onClick={() => setLightboxOpen(false)}
      >
        <FaTimes size={18} />
      </button>

      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            className="absolute right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <FaChevronRight size={20} />
          </button>
        </>
      )}

      <div className="relative w-[90vw] h-[80vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          fill
          sizes="90vw"
          className="object-contain"
          draggable={false}
        />
      </div>

      <div className="absolute bottom-6 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
            className={cn("h-2 rounded-full transition-all", i === currentIndex ? "w-5 bg-white" : "w-2 bg-white/40")}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div
        className={cn("relative group", className)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...props}
      >
        <div
          className="w-full h-52 md:h-64 overflow-hidden cursor-zoom-in rounded-sm"
          onClick={() => !isDragging && setLightboxOpen(true)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex h-full"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
              transition: isDragging ? "none" : "transform 0.3s ease",
              willChange: "transform",
            }}
          >
            {images.map((src, i) => (
              <div key={src} className="flex-none w-full h-full" style={{ position: "relative" }}>
                <Image
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={priority && i === 0}
                  className="object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-1 top-[calc(50%-20px)] -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-1 top-[calc(50%-20px)] -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
            >
              <FaChevronRight size={14} />
            </button>
          </>
        )}

        <div className="flex justify-center mt-2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn("h-2 rounded-full transition-all", i === currentIndex ? "w-5 bg-primary" : "w-2 bg-border")}
            />
          ))}
        </div>
      </div>

      {lightboxOpen && createPortal(lightbox, document.body)}
    </>
  );
};
