import { motion } from "framer-motion";
import {
  RiFileListLine,
  RiMailUnreadLine,
  RiTimeLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";

const STAT_CONFIG = [
  {
    key:   "total",
    label: "Total Requests",
    icon:  RiFileListLine,
    color: "bg-brand-orange/10 text-brand-orange",
  },
  {
    key:   "new",
    label: "New",
    icon:  RiMailUnreadLine,
    color: "bg-blue-50 text-blue-600",
  },
  {
    key:   "in_review",
    label: "In Review",
    icon:  RiTimeLine,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    key:   "contacted",
    label: "Contacted",
    icon:  RiCheckboxCircleLine,
    color: "bg-green-50 text-green-600",
  },
];

export default function StatsCards({ requests = [] }) {
  const counts = {
    total:      requests.length,
    new:        requests.filter((r) => r.status === "new").length,
    in_review:  requests.filter((r) => r.status === "in_review").length,
    contacted:  requests.filter((r) => r.status === "contacted").length,
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {STAT_CONFIG.map((stat, i) => (
        <motion.div
          key={stat.key}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07, duration: 0.4 }}
          className="bg-white border border-brand-border rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-brand-muted font-medium uppercase tracking-wide">
              {stat.label}
            </span>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.color}`}>
              <stat.icon size={15} />
            </div>
          </div>
          <p className="font-display text-3xl font-bold text-brand-charcoal">
            {counts[stat.key]}
          </p>
        </motion.div>
      ))}
    </div>
  );
}