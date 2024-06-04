"use client";

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  from: 'left' | 'right';
}

const variants = {
  hidden: (from: 'left' | 'right') => ({
    opacity: 0,
    x: from === 'left' ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5 },
  },
  exit: (from: 'left' | 'right') => ({
    opacity: 0,
    x: from === 'left' ? 100 : -100,
    transition: { duration: 0.5 },
  }),
};

export const MotionWrapper: React.FC<MotionWrapperProps> = ({ children, from }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    exit="exit"
    viewport={{ once: false }}
    custom={from}
    variants={variants}
  >
    {children}
  </motion.div>
);
