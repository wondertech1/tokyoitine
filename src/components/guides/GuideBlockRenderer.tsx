"use client";

import type { GuideContentBlock } from "@/data/guides";
import CalloutBox from "@/components/days/CalloutBox";
import GuideTable from "./GuideTable";
import GuideTipGrid from "./GuideTipGrid";
import GuideRestaurantList from "./GuideRestaurantList";
import GuideChecklist from "./GuideChecklist";

function formatProse(text: string): string {
  // Convert **bold** to <strong> and *italic* to <em>
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br />");
}

interface GuideBlockRendererProps {
  blocks: GuideContentBlock[];
}

export default function GuideBlockRenderer({
  blocks,
}: GuideBlockRendererProps) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "prose":
            return (
              <div
                key={index}
                className="text-sm text-gray-600 leading-relaxed prose-content"
                dangerouslySetInnerHTML={{
                  __html: `<p>${formatProse(block.text)}</p>`,
                }}
              />
            );
          case "tip":
            return <CalloutBox key={index} type="tip" text={block.text} />;
          case "warning":
            return (
              <CalloutBox key={index} type="warning" text={block.text} />
            );
          case "restaurants":
            return (
              <GuideRestaurantList
                key={index}
                restaurants={block.items}
                groupBy="neighborhood"
              />
            );
          case "table":
            return (
              <GuideTable
                key={index}
                headers={block.headers}
                rows={block.rows}
                highlightFirstCol
              />
            );
          case "cards":
            return <GuideTipGrid key={index} items={block.items} />;
          case "checklist":
            return <GuideChecklist key={index} items={block.items} />;
          case "comparison":
            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="bg-white border border-gray-200 p-5">
                  <h4 className="font-mono text-[10px] font-bold tracking-[2px] text-gray-400 mb-3">
                    {block.left.label}
                  </h4>
                  <ul className="space-y-2">
                    {block.left.points.map((p, i) => (
                      <li
                        key={i}
                        className="text-[13px] text-gray-600 leading-relaxed"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 p-5">
                  <h4 className="font-mono text-[10px] font-bold tracking-[2px] text-gray-400 mb-3">
                    {block.right.label}
                  </h4>
                  <ul className="space-y-2">
                    {block.right.points.map((p, i) => (
                      <li
                        key={i}
                        className="text-[13px] text-gray-600 leading-relaxed"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
