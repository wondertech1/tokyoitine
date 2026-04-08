"use client";

import { useState, useEffect } from "react";
import { PLAN_TRIP_URL } from "@/components/ItinePhoneVideo";

interface StickyNavProps {
  selectedDays: number;
  onSelectDays: (days: number) => void;
}

export default function StickyNav({
  selectedDays,
  onSelectDays,
}: StickyNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [heroOutOfView, setHeroOutOfView] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const heroEl = document.getElementById("hero-section");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroOutOfView(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-54px 0px 0px 0px" }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
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
        {/* Left — Logo + Duration links */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="bg-[#E53935] text-white px-3 py-1 font-display text-lg leading-tight">
              東京
            </div>
            <span className="font-mono text-[10px] font-bold tracking-[2px] text-gray-400 hidden sm:block">
              TOKYO ITINERARY
            </span>
          </div>

          {/* Duration quick-links — fade in after hero scrolls out */}
          <div
            className={`hidden md:flex items-center gap-1 transition-all duration-300 ${
              heroOutOfView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-1 pointer-events-none"
            }`}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((d) => (
              <button
                key={d}
                onClick={() => {
                  onSelectDays(d);
                  document
                    .getElementById("hero-section")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`font-mono text-[10px] font-semibold tracking-wider px-2.5 py-1.5 transition-all duration-200 cursor-pointer ${
                  selectedDays === d
                    ? "bg-[#1A1A1A] text-white"
                    : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                {d}D
              </button>
            ))}
          </div>
        </div>

        {/* Right — CTA + Freshness */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-gray-400 tracking-wide hidden sm:block">
            Updated Mar 2026
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse hidden sm:block" />
          <a
            href={PLAN_TRIP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E53935] text-white px-4 py-1.5 font-mono text-[10px] font-bold tracking-[1px] hover:bg-[#C62828] transition-colors"
          >
            PLAN A TRIP
          </a>
        </div>
      </div>
    </nav>
  );
}
