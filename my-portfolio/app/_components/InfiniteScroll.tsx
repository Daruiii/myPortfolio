import React, { ComponentPropsWithoutRef } from 'react';
import { cn } from "@/lib/utils";
import './InfiniteScroll.css';

interface InfiniteScrollProps extends ComponentPropsWithoutRef<'div'> {
  speed?: number; // en secondes, plus le nombre est petit, plus la vitesse est rapide
  direction?: 'left' | 'right'; // direction du défilement
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ children, speed = 30, direction = 'left', className, ...props }) => {
    const containerStyle = {
      animationName: direction === 'left' ? 'scrollLeft' : 'scrollRight',
      animationDuration: `${speed}s`,
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
    };
  
    return (
      <div className={cn("scroll-container", className)} {...props}>
        <div className="scroll-content" style={containerStyle}>
          {children}
          {children}
          {children}
        </div>
      </div>
    );
  };