import Link from "next/link";

interface OtherTripLengthsProps {
  selectedDays: number;
}

export default function OtherTripLengths({
  selectedDays,
}: OtherTripLengthsProps) {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-[10px] font-bold tracking-[3px] text-gray-400">
          OTHER TRIP LENGTHS
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <div className="flex flex-wrap gap-2">
        {[1, 2, 3, 4, 5, 6, 7]
          .filter((d) => d !== selectedDays)
          .map((d) => (
            <Link
              key={d}
              href={`/${d}-day-tokyo-itinerary`}
              className="font-mono text-[11px] tracking-wider px-4 py-2.5 border border-gray-200 text-gray-500 hover:bg-[#1A1A1A] hover:text-white hover:border-transparent transition-all duration-200"
            >
              {d}-DAY PLAN
            </Link>
          ))}
      </div>
    </div>
  );
}
