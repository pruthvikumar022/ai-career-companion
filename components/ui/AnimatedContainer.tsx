'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedContainerProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedContainer({
  children,
  delay = 0,
  className = '',
  ...motionProps
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
