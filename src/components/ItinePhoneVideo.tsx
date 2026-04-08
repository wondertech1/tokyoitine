"use client";

const PLAN_TRIP_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173/go?dest=Tokyo"
    : "https://itine.ai/go?dest=Tokyo&utm_source=tokyoitine&utm_medium=blog&utm_campaign=plan_trip";

export { PLAN_TRIP_URL };

/**
 * Phone mockup showing the ITINE video — Tokyo theme.
 * Tapping the phone opens itine.ai.
 */
export default function ItinePhoneVideo({
  variant = "standalone",
}: {
  variant?: "inline" | "desktop" | "standalone";
}) {
  if (variant === "inline") {
    return (
      <div className="lg:hidden flex justify-center mt-8">
        <a href={PLAN_TRIP_URL} target="_blank" rel="noopener noreferrer" className="relative w-[100px] block">
          <div className="rounded-[1rem] overflow-hidden border-[3px] border-[#1A1A1A] bg-[#1A1A1A] shadow-xl">
            <video autoPlay loop muted playsInline className="w-full block pointer-events-none">
              <source src="/images/itine-video.mp4" type="video/mp4" />
              <source src="/images/itine-video.mov" type="video/quicktime" />
            </video>
          </div>
        </a>
      </div>
    );
  }

  if (variant === "desktop") {
    return (
      <div className="hidden lg:block flex-shrink-0 relative lg:w-[200px] xl:w-[240px]">
        <a href={PLAN_TRIP_URL} target="_blank" rel="noopener noreferrer" className="relative w-full block">
          <div className="absolute -inset-4 bg-gradient-to-br from-[#E53935]/15 via-gray-200/30 to-transparent rounded-[3rem] blur-2xl" />
          <div className="relative rounded-[2rem] xl:rounded-[2.2rem] overflow-hidden shadow-2xl border-[5px] xl:border-[6px] border-[#1A1A1A] bg-[#1A1A1A]">
            <video autoPlay loop muted playsInline className="w-full block pointer-events-none">
              <source src="/images/itine-video.mp4" type="video/mp4" />
              <source src="/images/itine-video.mov" type="video/quicktime" />
            </video>
          </div>
        </a>
      </div>
    );
  }

  // standalone
  return (
    <div className="flex justify-center mt-8">
      <a href={PLAN_TRIP_URL} target="_blank" rel="noopener noreferrer" className="relative w-[100px] sm:w-[120px] block">
        <div className="absolute -inset-3 bg-gradient-to-br from-[#E53935]/15 via-gray-200/30 to-transparent rounded-[2rem] blur-xl" />
        <div className="relative rounded-[1.2rem] overflow-hidden border-[3px] border-[#1A1A1A] bg-[#1A1A1A] shadow-xl">
          <video autoPlay loop muted playsInline className="w-full block pointer-events-none">
            <source src="/images/itine-video.mp4" type="video/mp4" />
            <source src="/images/itine-video.mov" type="video/quicktime" />
          </video>
        </div>
      </a>
    </div>
  );
}
