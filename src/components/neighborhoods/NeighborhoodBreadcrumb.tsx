import Link from "next/link";

interface NeighborhoodBreadcrumbProps {
  neighborhoodName: string;
}

export default function NeighborhoodBreadcrumb({
  neighborhoodName,
}: NeighborhoodBreadcrumbProps) {
  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-4">
      <nav className="font-mono text-[10px] tracking-wider text-gray-400">
        <Link href="/" className="hover:text-gray-600 transition-colors">
          Tokyo Itinerary
        </Link>
        <span className="mx-2">&rarr;</span>
        <span className="text-[#1A1A1A] font-semibold">{neighborhoodName}</span>
      </nav>
    </div>
  );
}
