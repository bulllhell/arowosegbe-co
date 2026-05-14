import { useState } from "react";
import { motion } from "framer-motion";
import StatusBadge from "./StatusBadge";
import { formatDate, truncate } from "@/lib/utils";
import {
  RiSearchLine,
  RiArrowUpLine,
  RiArrowDownLine,
  RiInboxLine,
} from "react-icons/ri";

const STATUS_FILTERS = [
  { value: "all",       label: "All"       },
  { value: "new",       label: "New"       },
  { value: "in_review", label: "In Review" },
  { value: "contacted", label: "Contacted" },
  { value: "closed",    label: "Closed"    },
];

export default function RequestsTable({ requests = [], onSelect }) {
  const [search,     setSearch]     = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortField,  setSortField]  = useState("created_at");
  const [sortDir,    setSortDir]    = useState("desc");

  // ── Filter + search ──
  const filtered = requests
    .filter((r) => statusFilter === "all" || r.status === statusFilter)
    .filter((r) => {
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        r.full_name?.toLowerCase().includes(q)    ||
        r.service_type?.toLowerCase().includes(q) ||
        r.location?.toLowerCase().includes(q)     ||
        r.phone?.includes(q)
      );
    })
    .sort((a, b) => {
      const av = a[sortField] || "";
      const bv = b[sortField] || "";
      if (sortDir === "asc") return av > bv ? 1 : -1;
      return av < bv ? 1 : -1;
    });

  const toggleSort = (field) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortField(field); setSortDir("desc"); }
  };

  const SortIcon = ({ field }) => {
    if (sortField !== field) return null;
    return sortDir === "asc"
      ? <RiArrowUpLine size={12} className="inline ml-1 text-brand-orange" />
      : <RiArrowDownLine size={12} className="inline ml-1 text-brand-orange" />;
  };

  return (
    <div className="bg-white border border-brand-border rounded-2xl overflow-hidden">

      {/* ── Toolbar ── */}
      <div className="p-4 border-b border-brand-border flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <RiSearchLine
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted"
          />
          <input
            type="text"
            placeholder="Search by name, service, location, phone…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-brand-border rounded-xl outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
          />
        </div>

        {/* Status filter */}
        <div className="flex gap-1.5 flex-wrap">
          {STATUS_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setStatusFilter(f.value)}
              className={`px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 ${
                statusFilter === f.value
                  ? "bg-brand-orange text-white"
                  : "bg-brand-cream text-brand-stone hover:bg-brand-border"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Table ── */}
      {filtered.length === 0 ? (
        <div className="py-20 flex flex-col items-center gap-3 text-brand-muted">
          <RiInboxLine size={36} className="opacity-30" />
          <p className="text-sm">No requests found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-brand-border bg-brand-cream/50">
                {[
                  { label: "Date",     field: "created_at"  },
                  { label: "Name",     field: "full_name"   },
                  { label: "Service",  field: "service_type"},
                  { label: "Location", field: "location"    },
                  { label: "Budget",   field: "budget_range"},
                  { label: "Status",   field: "status"      },
                ].map((col) => (
                  <th
                    key={col.field}
                    onClick={() => toggleSort(col.field)}
                    className="text-left px-4 py-3 text-xs font-medium text-brand-muted uppercase tracking-wide cursor-pointer hover:text-brand-orange transition-colors select-none whitespace-nowrap"
                  >
                    {col.label}
                    <SortIcon field={col.field} />
                  </th>
                ))}
                <th className="px-4 py-3 text-xs font-medium text-brand-muted uppercase tracking-wide text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((req, i) => (
                <motion.tr
                  key={req.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => onSelect(req)}
                  className="border-b border-brand-border/50 hover:bg-brand-cream/60 cursor-pointer transition-colors group"
                >
                  <td className="px-4 py-3.5 text-xs text-brand-muted whitespace-nowrap">
                    {formatDate(req.created_at)}
                  </td>
                  <td className="px-4 py-3.5 font-medium text-brand-charcoal whitespace-nowrap">
                    {req.full_name}
                  </td>
                  <td className="px-4 py-3.5 text-brand-stone whitespace-nowrap">
                    {req.service_type}
                  </td>
                  <td className="px-4 py-3.5 text-brand-stone whitespace-nowrap">
                    {truncate(req.location, 20)}
                  </td>
                  <td className="px-4 py-3.5 text-brand-stone whitespace-nowrap">
                    {req.budget_range}
                  </td>
                  <td className="px-4 py-3.5">
                    <StatusBadge status={req.status} />
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <button
                      onClick={(e) => { e.stopPropagation(); onSelect(req); }}
                      className="text-xs text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity font-medium hover:underline"
                    >
                      View →
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {/* Row count */}
          <div className="px-4 py-3 border-t border-brand-border/50 bg-brand-cream/30">
            <p className="text-xs text-brand-muted">
              Showing {filtered.length} of {requests.length} requests
            </p>
          </div>
        </div>
      )}
    </div>
  );
}