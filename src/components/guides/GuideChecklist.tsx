interface GuideChecklistProps {
  items: { text: string; checked: boolean }[];
}

export default function GuideChecklist({ items }: GuideChecklistProps) {
  return (
    <div className="bg-white border border-gray-200 divide-y divide-gray-100">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3 px-5 py-3.5">
          <span
            className={`flex-shrink-0 w-4 h-4 mt-0.5 border flex items-center justify-center text-[10px] ${
              item.checked
                ? "bg-[#1A1A1A] border-[#1A1A1A] text-white"
                : "border-gray-300 text-transparent"
            }`}
          >
            {item.checked ? "\u2713" : ""}
          </span>
          <span className="text-[13px] text-gray-600 leading-relaxed">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}
