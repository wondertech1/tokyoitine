const items = [
  { label: "TEMP", value: "18.5\u00b0C", sub: "Spring jacket weather", accent: false },
  { label: "EXCHANGE", value: "\u00a5150 / $1", sub: null, accent: false },
  { label: "PEAK CROWD", value: "Shibuya 18:00", sub: null, accent: true },
];

export default function LiveLogistics() {
  return (
    <div className="bg-[#1A1A1A] p-5 min-w-[280px] snap-start lg:min-w-0">
      <div className="flex items-center gap-2 mb-5">
        <span className="font-mono text-[10px] font-bold tracking-[2px] text-[#4DD0E1]">
          LIVE LOGISTICS
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
      </div>

      {items.map((item, i) => (
        <div
          key={item.label}
          className={`py-3 ${i > 0 ? "border-t border-white/[0.08]" : ""}`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-gray-500 tracking-wider">
              {item.label}
            </span>
            <span
              className={`font-mono text-[15px] font-semibold ${
                item.accent ? "text-[#E53935]" : "text-white"
              }`}
            >
              {item.value}
            </span>
          </div>
          {item.sub && (
            <span className="font-mono text-[10px] text-gray-600 mt-0.5 block">
              {item.sub}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
