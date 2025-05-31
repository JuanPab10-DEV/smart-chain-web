import React from "react";
import { ArrowRight } from "lucide-react";

interface InteractiveButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

export function InteractiveButton({
  text = "Button",
  className,
  onClick,
}: InteractiveButtonProps = {}) {
  return (
    <div
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-full border bg-white px-6 py-3 text-center font-semibold text-black whitespace-nowrap min-w-fit ${className}`}
    >
      <span className="inline-flex gap-2 items-center transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 whitespace-nowrap">
        {text}
        <ArrowRight className="w-4 h-4 text-black" />
      </span>
      <div className="absolute left-0 top-0 z-20 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 whitespace-nowrap px-6">
        <span>{text}</span>
        <ArrowRight className="w-4 h-4 text-white" />
      </div>
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-gradient-to-br from-[oklch(0.75_0.25_248.5)] via-[oklch(0.65_0.15_248.5)] to-[oklch(0.55_0.20_268.5)] transition-all duration-500 group-hover:scale-[40] z-10 shadow-2xl"></div>
    </div>
  );
}
