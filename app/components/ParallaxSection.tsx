"use client";

import { ReactNode } from "react";

interface ParallaxSectionProps {
  image: string;
  children: ReactNode;
  height?: string;
}

export default function ParallaxSection({
  image,
  children,
  height = "h-[500px]",
}: ParallaxSectionProps) {
  return (
    <section
      className={`relative ${height} bg-fixed bg-center bg-cover flex items-center justify-center text-white`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {children}
      </div>
    </section>
  );
}