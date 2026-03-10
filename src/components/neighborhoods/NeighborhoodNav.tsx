"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NEIGHBORHOODS } from "@/data/neighborhoods";

interface NeighborhoodNavProps {
  currentSlug: string;
}

export default function NeighborhoodNav({ currentSlug }: NeighborhoodNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAFA]/95 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[54px] flex items-center justify-between">
        {/* Left — Logo */}
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-[#E53935] text-white px-3 py-1 font-display text-lg leading-tight">
              東京
            </div>
            <span className="font-mono text-[10px] font-bold tracking-[2px] text-gray-400 hidden sm:block">
              TOKYO ITINERARY
            </span>
          </Link>

          {/* Neighborhood quick-links */}
          <div className="hidden md:flex items-center gap-1">
            {NEIGHBORHOODS.map((n) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className={`font-mono text-[10px] font-semibold tracking-wider px-2.5 py-1.5 transition-all duration-200 ${
                  currentSlug === n.slug
                    ? "bg-[#1A1A1A] text-white"
                    : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                {n.name.split(" ")[0].toUpperCase().slice(0, 6)}
              </Link>
            ))}
          </div>
        </div>

        {/* Right — Back to itinerary */}
        <Link
          href="/"
          className="font-mono text-[10px] tracking-wider text-gray-400 hover:text-gray-700 transition-colors"
        >
          &larr; ITINERARY
        </Link>
      </div>
    </nav>
  );
}
