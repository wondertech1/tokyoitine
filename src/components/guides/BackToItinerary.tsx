import Link from "next/link";

export default function BackToItinerary() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pb-12">
      <Link
        href="/"
        className="block bg-[#1A1A1A] p-6 group hover:bg-[#2A2A2A] transition-colors"
      >
        <div className="flex items-center justify-between">
          <div>
            <span className="font-mono text-[10px] font-bold tracking-[2px] text-[#4DD0E1] block mb-2">
              READY TO PLAN?
            </span>
            <span className="font-display text-xl italic text-white">
              Build your Tokyo itinerary &mdash; 1 to 7 days
            </span>
          </div>
          <span className="text-white text-2xl group-hover:translate-x-1 transition-transform">
            &rarr;
          </span>
        </div>
      </Link>
    </section>
  );
}
