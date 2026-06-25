"use client";

import { ComponentPropsWithoutRef, useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface InfiniteScrollProps extends ComponentPropsWithoutRef<"div"> {
  speed?: number;
  direction?: "left" | "right";
}

const GAP_PX = 48; // gap-12 = 3rem = 48px

export const InfiniteScroll = ({
  children,
  speed = 20,
  direction = "left",
  className,
  ...props
}: InfiniteScrollProps) => {
  const firstRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!firstRef.current || !trackRef.current) return;
    const w = firstRef.current.offsetWidth + GAP_PX;
    trackRef.current.style.setProperty("--scroll-w", `${w}px`);
  }, []);

  return (
    <div className={cn("overflow-hidden relative w-full", className)} {...props}>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: `${GAP_PX}px`,
          width: "max-content",
          animation: `infinite-scroll ${speed}s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        <div ref={firstRef} style={{ display: "flex", gap: `${GAP_PX}px` }}>
          {children}
        </div>
        <div style={{ display: "flex", gap: `${GAP_PX}px` }}>{children}</div>
      </div>
    </div>
  );
};
