import Link from "next/link";

interface BreadcrumbProps {
  selectedDays: number;
}

export default function Breadcrumb({ selectedDays }: BreadcrumbProps) {
  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-4">
      <nav className="font-mono text-[10px] text-gray-400 tracking-wide">
        <Link href="/" className="hover:text-gray-600 transition-colors">
          Tokyo Itinerary
        </Link>
        <span className="mx-2">{"\u2192"}</span>
        <span className="text-[#1A1A1A]">{selectedDays}-Day Plan</span>
      </nav>
    </div>
  );
}
