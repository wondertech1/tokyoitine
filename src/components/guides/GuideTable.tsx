interface GuideTableProps {
  headers: string[];
  rows: string[][];
  highlightFirstCol?: boolean;
}

export default function GuideTable({
  headers,
  rows,
  highlightFirstCol,
}: GuideTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#1A1A1A]">
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left font-mono text-[10px] font-bold tracking-[2px] text-white px-4 py-3"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={ri % 2 === 0 ? "bg-white" : "bg-[#F7F7F5]"}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-3 text-[13px] border-b border-gray-100 ${
                    ci === 0 && highlightFirstCol
                      ? "font-semibold text-[#1A1A1A]"
                      : "text-gray-600"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
