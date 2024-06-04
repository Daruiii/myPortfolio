"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ComponentPropsWithoutRef } from 'react';
import { cn } from "@/lib/utils";

interface InfiniteScrollProps extends ComponentPropsWithoutRef<'div'> {
  speed?: number; // in seconds
  direction?: 'left' | 'right'; // scroll direction
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ children, speed = 20, direction = 'left', className, ...props }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const scrollWidth = scrollRef.current ? scrollRef.current.scrollWidth / 2 : 0;
    const animateScroll = () => {
      controls.set({ x: direction === 'left' ? 0 : -scrollWidth });
      controls.start({
        x: direction === 'left' ? -scrollWidth : 0,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        },
      });
    };
    animateScroll();
  }, [controls, speed, direction]);

  return (
    <div className={cn("overflow-hidden relative w-full flex", className)} {...props}>
      <motion.div
        ref={scrollRef}
        className="flex gap-12"
        animate={controls}
        style={{ display: 'flex', width: 'max-content' }}
      >
        {children}
        {children} {/* Duplicate the children for smooth looping */}
      </motion.div>
    </div>
  );
};
