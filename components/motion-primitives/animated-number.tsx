'use client';
import { cn } from '@/lib/utils';
import { motion, SpringOptions, useSpring, useTransform, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  startValue?: number;
};

export function AnimatedNumber({
  value,
  className,
  springOptions,
  startValue = 0,
}: AnimatedNumberProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animatedValue, setAnimatedValue] = useState(startValue);

  const spring = useSpring(animatedValue, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      setAnimatedValue(value);
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <motion.span ref={ref} className={cn('tabular-nums', className)}>
      {display}
    </motion.span>
  );
}
