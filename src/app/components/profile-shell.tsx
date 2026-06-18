'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ProfileShell({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: '24px' }}
      animate={{
        opacity: 1,
        translateY: 0,
        transition: { duration: 0.4, delay: 0.25, ease: 'easeOut' }
      }}
      className="flex w-full max-w-2xl flex-col space-y-12"
    >
      {children}
    </motion.div>
  );
}
