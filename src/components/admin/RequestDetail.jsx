import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StatusBadge from "./StatusBadge";
import { formatDateTime, buildWhatsAppUrl } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import { REQUEST_STATUSES, AGENT } from "@/lib/constants";
import {
  RiCloseLine,
  RiWhatsappLine,
  RiPhoneLine,
  RiMailLine,
  RiSaveLine,
  RiArrowDownSLine,
} from "react-icons/ri";

export default function RequestDetail({ request, onClose, onUpdate }) {
  const [status,     setStatus]     = useState(request.status);
  const [notes,      setNotes]      = useState(request.agent_notes || "");
  const [saving,     setSaving]     = useState(false);
  const [saved,      setSaved]      = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from("requests")
        .update({ status, agent_notes: notes })
        .eq("id", request.id);

      if (error) throw error;
      onUpdate({ ...request, status, agent_notes: notes });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      console.error(err);
      alert("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const whatsappUrl = buildWhatsAppUrl(
    AGENT.whatsapp,
    request.full_name,
    request.service_type
  );

  const FIELDS = [
    ["Service",    request.service_type ],
    ["Location",   request.location     ],
    ["Budget",     request.budget_range ],
    ["Timeline",   request.timeline     ],
    ["Purpose",    request.purpose      ],
    ["Submitted",  formatDateTime(request.created_at)],
  ];

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
      />

      {/* Panel */}
      <motion.div
        key="panel"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 280, damping: 30 }}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border shrink-0">
          <div>
            <p className="text-xs text-brand-muted uppercase tracking-widest mb-0.5">
              Request Detail
            </p>
            <h2 className="font-display text-lg font-bold text-brand-charcoal">
              {request.full_name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-cream transition-colors"
          >
            <RiCloseLine size={18} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">

          {/* Contact actions */}
          <div className="flex gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2.5 rounded-xl transition-colors"
            >
              <RiWhatsappLine size={16} />
              WhatsApp
            </a>
            <a
              href={`tel:${request.phone}`}
              className="flex-1 flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-brand-stone text-white text-sm font-medium py-2.5 rounded-xl transition-colors"
            >
              <RiPhoneLine size={16} />
              Call
            </a>
            {request.email && (
              <a
                href={`mailto:${request.email}`}
                className="flex-1 flex items-center justify-center gap-2 border border-brand-border hover:bg-brand-cream text-brand-charcoal text-sm font-medium py-2.5 rounded-xl transition-colors"
              >
                <RiMailLine size={16} />
                Email
              </a>
            )}
          </div>

          {/* Contact info */}
          <div className="bg-brand-cream rounded-2xl p-4 space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-brand-muted mb-3">
              Contact Info
            </p>
            <div className="flex justify-between">
              <span className="text-xs text-brand-muted">Phone</span>
              <span className="text-xs font-medium text-brand-charcoal">{request.phone}</span>
            </div>
            {request.whatsapp && (
              <div className="flex justify-between">
                <span className="text-xs text-brand-muted">WhatsApp</span>
                <span className="text-xs font-medium text-brand-charcoal">{request.whatsapp}</span>
              </div>
            )}
            {request.email && (
              <div className="flex justify-between">
                <span className="text-xs text-brand-muted">Email</span>
                <span className="text-xs font-medium text-brand-charcoal break-all">{request.email}</span>
              </div>
            )}
          </div>

          {/* Request fields */}
          <div className="bg-white border border-brand-border rounded-2xl p-4 space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-brand-muted mb-3">
              Request Details
            </p>
            {FIELDS.map(([label, value]) =>
              value ? (
                <div key={label} className="flex justify-between items-start gap-4">
                  <span className="text-xs text-brand-muted shrink-0">{label}</span>
                  <span className="text-xs font-medium text-brand-charcoal text-right">{value}</span>
                </div>
              ) : null
            )}
          </div>

          {/* Description */}
          {request.sub_details && (
            <div className="bg-white border border-brand-border rounded-2xl p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-brand-muted mb-2">
                Description
              </p>
              <p className="text-sm text-brand-stone leading-relaxed">
                {request.sub_details}
              </p>
            </div>
          )}

          {/* Status update */}
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wide text-brand-muted block">
              Update Status
            </label>
            <div className="relative">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white text-sm text-brand-charcoal appearance-none outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all cursor-pointer"
              >
                {REQUEST_STATUSES.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
              <RiArrowDownSLine
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none"
              />
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-brand-muted">Current:</span>
              <StatusBadge status={request.status} />
            </div>
          </div>

          {/* Agent notes */}
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wide text-brand-muted block">
              Private Notes
            </label>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add private notes about this request — only you can see these."
              className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-charcoal resize-none outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all placeholder:text-brand-muted/50"
            />
          </div>
        </div>

        {/* Sticky footer — Save */}
        <div className="px-6 py-4 border-t border-brand-border bg-white shrink-0">
          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeDark disabled:opacity-60 disabled:pointer-events-none text-white font-medium py-3.5 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/20"
          >
            {saving ? (
              <>
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Saving…
              </>
            ) : saved ? (
              <>✓ Saved!</>
            ) : (
              <>
                <RiSaveLine size={16} />
                Save Changes
              </>
            )}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}