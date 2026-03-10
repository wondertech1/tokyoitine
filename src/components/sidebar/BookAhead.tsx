const bookings = [
  { what: "Shibuya Sky", when: "1\u20132 weeks out" },
  { what: "teamLab Planets", when: "2\u20134 weeks out" },
  { what: "Ghibli Museum", when: "2\u20133 months (lottery)" },
];

export default function BookAhead() {
  return (
    <div className="bg-white border border-gray-200 p-5 min-w-[280px] snap-start lg:min-w-0">
      <div className="font-mono text-[10px] font-bold tracking-[2px] text-[#E53935] mb-4">
        {"\u26A0\uFE0F"} BOOK BEFORE YOU FLY
      </div>

      {bookings.map((b, i) => (
        <div
          key={b.what}
          className={`flex items-center justify-between py-2.5 ${
            i > 0 ? "border-t border-gray-100" : ""
          }`}
        >
          <span className="text-[13px] font-semibold text-[#1A1A1A]">
            {b.what}
          </span>
          <span className="font-mono text-[10px] text-gray-400 tracking-wide">
            {b.when}
          </span>
        </div>
      ))}
    </div>
  );
}
