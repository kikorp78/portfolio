'use client';

import { AnimatePresence } from 'motion/react';
import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';

interface Props {
  children: ReactNode;
  text: string;
}

export default function Tooltip({ children, text }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <AnimatePresence>
        {hovered ? (
          <motion.div
            initial={{ opacity: 0, translateY: '12px', scale: 0.9 }}
            animate={{
              opacity: 100,
              translateY: 0,
              scale: 1,
              transition: { duration: 0.15 }
            }}
            exit={{
              opacity: 0,
              translateY: '12px',
              scale: 0.9,
              transition: { duration: 0.15 }
            }}
            className="absolute -top-3 left-1/2 w-max -translate-x-1/2 -translate-y-full rounded-md border border-[#1a1915]/25 bg-[#f5f4ee] px-2 py-1 select-none"
          >
            <p className="text-paragraph-sm font-medium text-[#1a1915]">
              {text}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
