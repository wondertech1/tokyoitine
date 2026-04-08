"use client";

import TrustBadges from "./TrustBadges";
import HeroHeadline from "./HeroHeadline";
import TripSelector from "./TripSelector";
import Sidebar from "@/components/sidebar/Sidebar";
import ItinePhoneVideo from "@/components/ItinePhoneVideo";

interface HeroSectionProps {
  selectedDays: number;
  onSelectDays: (days: number) => void;
}

export default function HeroSection({
  selectedDays,
  onSelectDays,
}: HeroSectionProps) {
  return (
    <section id="hero-section" className="max-w-[1200px] mx-auto px-6 pt-8 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 items-start">
        {/* Left — hero card */}
        <div className="bg-white border border-gray-200 p-5 pt-16 md:p-8 md:pt-24 lg:p-12 lg:pt-24 relative overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
            <div className="flex-1 min-w-0">
              <TrustBadges />
              <HeroHeadline />
              <TripSelector
                selectedDays={selectedDays}
                onSelect={onSelectDays}
              />
              <ItinePhoneVideo variant="inline" />
            </div>
            <ItinePhoneVideo variant="desktop" />
          </div>
        </div>

        {/* Right — sidebar */}
        <Sidebar />
      </div>
    </section>
  );
}
