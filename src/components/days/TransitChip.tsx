interface TransitChipProps {
  text: string;
}

export default function TransitChip({ text }: TransitChipProps) {
  return (
    <div className="ml-0 mb-4 mt-2 inline-block">
      <span className="bg-[#F5F5F0] font-mono text-[11px] text-gray-400 px-3 py-1.5 tracking-wide">
        {"\uD83D\uDE89"} {text}
      </span>
    </div>
  );
}
