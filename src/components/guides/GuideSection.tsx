interface GuideSectionProps {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}

export default function GuideSection({
  id,
  label,
  title,
  children,
}: GuideSectionProps) {
  return (
    <section id={id} className="max-w-[1200px] mx-auto px-6 pb-12 scroll-mt-20">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-[10px] font-bold tracking-[3px] text-gray-400">
          {label}
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-normal italic text-[#1A1A1A] mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}
