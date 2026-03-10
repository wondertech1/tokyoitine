import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="bg-[#E53935] text-white px-4 py-2 font-display text-2xl inline-block mb-6">
          東京
        </div>
        <h1 className="font-display text-4xl md:text-5xl italic text-[#1A1A1A] mb-4">
          Wrong platform.
        </h1>
        <p className="font-mono text-sm text-gray-400 mb-8">
          This stop doesn{"\u2019"}t exist on the Tokyo line.
        </p>
        <Link
          href="/"
          className="bg-[#1A1A1A] text-white font-mono text-xs tracking-widest py-3.5 px-8 hover:-translate-y-[1px] hover:shadow-md transition-all duration-200 inline-block"
        >
          BACK TO TOKYO ITINERARY {"\u2192"}
        </Link>
      </div>
    </div>
  );
}
