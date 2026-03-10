"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import StickyNav from "@/components/nav/StickyNav";
import HeroSection from "@/components/hero/HeroSection";
import DayCardsGrid from "@/components/days/DayCardsGrid";
import OtherTripLengths from "./OtherTripLengths";
import Breadcrumb from "./Breadcrumb";
import DeepDives from "@/components/guides/DeepDives";
import BeyondTokyo from "@/components/japan/BeyondTokyo";
import LocalKnowledge from "@/components/knowledge/LocalKnowledge";
import Footer from "@/components/footer/Footer";

interface PageContentProps {
  initialDays: number;
  isDurationPage: boolean;
}

export default function PageContent({
  initialDays,
  isDurationPage,
}: PageContentProps) {
  const [selectedDays, setSelectedDays] = useState(initialDays);
  const [expandedDay, setExpandedDay] = useState<string | null>(null);
  const router = useRouter();

  const handleSelectDays = useCallback(
    (days: number) => {
      setSelectedDays(days);
      router.push(`/${days}-day-tokyo-itinerary`, { scroll: false });
    },
    [router]
  );

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <StickyNav
        selectedDays={selectedDays}
        onSelectDays={handleSelectDays}
      />

      {isDurationPage && <Breadcrumb selectedDays={selectedDays} />}

      <HeroSection
        selectedDays={selectedDays}
        onSelectDays={handleSelectDays}
      />

      <DayCardsGrid
        selectedDays={selectedDays}
        expandedDay={expandedDay}
        onExpandDay={setExpandedDay}
        onSelectDays={handleSelectDays}
      />

      <DeepDives />

      <BeyondTokyo />

      <OtherTripLengths selectedDays={selectedDays} />

      <LocalKnowledge />

      <Footer />
    </div>
  );
}
