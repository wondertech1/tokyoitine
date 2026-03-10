import Link from "next/link";
import { getGuide } from "@/data/guides";

interface RelatedGuidesProps {
  slugs: string[];
}

export default function RelatedGuides({ slugs }: RelatedGuidesProps) {
  const guides = slugs.map(getGuide).filter(Boolean);
  if (guides.length === 0) return null;

  return (
    <section className="max-w-[1200px] mx-auto px-6 pb-12">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-[10px] font-bold tracking-[3px] text-gray-400">
          RELATED GUIDES
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {guides.map((related) => {
          if (!related) return null;
          return (
            <Link
              key={related.slug}
              href={`/guides/${related.slug}`}
              className="border border-gray-200 p-5 hover:bg-[#F7F7F5] transition-colors group"
            >
              <span className="text-2xl">{related.icon}</span>
              <h3 className="font-display text-base text-[#1A1A1A] mt-2 group-hover:underline">
                {related.title}
              </h3>
              <p className="font-mono text-[10px] text-gray-400 mt-1">
                {related.subtitle}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
