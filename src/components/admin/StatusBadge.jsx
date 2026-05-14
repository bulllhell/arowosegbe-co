import { getStatusColors } from "@/lib/utils";

const STATUS_LABELS = {
  new:       "New",
  in_review: "In Review",
  contacted: "Contacted",
  closed:    "Closed",
};

export default function StatusBadge({ status }) {
  const colors = getStatusColors(status);

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium uppercase tracking-wide border
        ${colors.bg} ${colors.text} ${colors.border}
      `}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${colors.text} opacity-70`}
        style={{ backgroundColor: "currentColor" }}
      />
      {STATUS_LABELS[status] || status}
    </span>
  );
}