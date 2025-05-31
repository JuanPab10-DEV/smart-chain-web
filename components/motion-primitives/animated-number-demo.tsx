'use client';
import { AnimatedNumber } from './animated-number';

export function AnimatedNumberDemo() {
  return (
    <div className='flex w-full items-center justify-center p-8'>
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-lg font-medium">Animated Number Demo</h3>
        <AnimatedNumber
          className='inline-flex items-center font-mono text-4xl font-light text-zinc-800 dark:text-zinc-50'
          springOptions={{
            bounce: 0,
            duration: 2000,
          }}
          value={10000}
          startValue={0}
        />
        <p className="text-sm text-muted-foreground">This number should animate when it comes into view</p>
      </div>
    </div>
  );
} 