"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';

type Direction = 'left' | 'right' | 'up' | 'down';

export default function Transition({
  children,
  direction = 'up',
  threshold = 0.1,
}: {
  children: React.ReactNode;
  direction?: Direction;
  threshold?: number;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: threshold 
  });

  // Define initial and animate states based on direction
  const getMotionProps = (dir: Direction) => {
    const directionMap = {
      left: { x: 40, y: 0 },
      right: { x: -40, y: 0 },
      up: { x: 0, y: 40 },
      down: { x: 0, y: -40 }
    };

    const { x, y } = directionMap[dir];

    return {
      initial: { 
        x, 
        y, 
        opacity: 0 
      },
      animate: isInView 
        ? { x: 0, y: 0, opacity: 1 }
        : { x, y, opacity: 0 }
    };
  };

  const { initial, animate } = getMotionProps(direction);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ 
        ease: "easeInOut", 
        duration: 1
      }}
    >
      {children}
    </motion.div>
  );
}