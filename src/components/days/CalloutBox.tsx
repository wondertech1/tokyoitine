interface CalloutBoxProps {
  type: "warning" | "food" | "tip";
  text: string;
}

const styles = {
  warning: {
    bg: "bg-[#FFF8E1]",
    border: "border-l-[3px] border-l-[#FFB300]",
    icon: "\u26A0\uFE0F",
    textColor: "text-[#5D4037]",
    label: null,
  },
  food: {
    bg: "bg-[#FFF3E0]",
    border: "border-l-[3px] border-l-[#FF6D00]",
    icon: "\uD83C\uDF5C",
    textColor: "text-[#BF360C]",
    label: "Eat:",
  },
  tip: {
    bg: "bg-[#E8F5E9]",
    border: "border-l-[3px] border-l-[#43A047]",
    icon: "\uD83D\uDCA1",
    textColor: "text-[#2E7D32]",
    label: "Local Tip:",
  },
};

export default function CalloutBox({ type, text }: CalloutBoxProps) {
  const s = styles[type];

  return (
    <div
      className={`${s.bg} ${s.border} p-3 mt-3 text-[13px] leading-relaxed ${s.textColor}`}
    >
      {s.icon}{" "}
      {s.label && <strong>{s.label} </strong>}
      {text}
    </div>
  );
}
