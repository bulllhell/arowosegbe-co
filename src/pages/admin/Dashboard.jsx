import { useState, useEffect, useCallback } from "react";
import { useNavigate }  from "react-router-dom";
import { motion }       from "framer-motion";
import { supabase }     from "@/lib/supabase";
import StatsCards       from "@/components/admin/StatsCards";
import RequestsTable    from "@/components/admin/RequestsTable";
import RequestDetail    from "@/components/admin/RequestDetail";
import {
  RiLogoutBoxLine,
  RiRefreshLine,
  RiNotification3Line,
} from "react-icons/ri";

export default function Dashboard() {
  const navigate = useNavigate();

  const [requests,  setRequests]  = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [selected,  setSelected]  = useState(null);
  const [lastFetch, setLastFetch] = useState(null);

  // ── Auth guard ──
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/admin/login");
    });
  }, [navigate]);

  // ── Fetch requests ──
  const fetchRequests = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRequests(data || []);
      setLastFetch(new Date());
    } catch (err) {
      console.error("Failed to fetch requests:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchRequests(); }, [fetchRequests]);

  // ── Sign out ──
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  // ── Update a single request in state after editing ──
  const handleUpdate = (updated) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === updated.id ? updated : r))
    );
    setSelected(updated);
  };

  const newCount = requests.filter((r) => r.status === "new").length;

  return (
    <div className="min-h-screen bg-brand-cream">

      {/* ── Top navbar ── */}
      <header className="bg-white border-b border-brand-border sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold text-brand-charcoal">
              Maxprofit
            </span>
            <span className="text-[9px] font-medium tracking-[0.18em] text-brand-orange uppercase">
              & Co. Admin
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* New requests badge */}
            {newCount > 0 && (
              <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">
                <RiNotification3Line size={13} />
                {newCount} new
              </div>
            )}

            {/* Refresh */}
            <button
              onClick={fetchRequests}
              disabled={loading}
              className="w-9 h-9 rounded-xl border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-orange hover:border-brand-orange transition-colors disabled:opacity-40"
              title="Refresh"
            >
              <RiRefreshLine
                size={16}
                className={loading ? "animate-spin" : ""}
              />
            </button>

            {/* Sign out */}
            <button
              onClick={handleSignOut}
              className="flex items-center gap-1.5 text-xs font-medium text-brand-muted hover:text-red-500 transition-colors px-3 py-2 rounded-xl hover:bg-red-50 border border-transparent hover:border-red-100"
            >
              <RiLogoutBoxLine size={15} />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* ── Main content ── */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">

        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl font-bold text-brand-charcoal">
            Requests Dashboard
          </h1>
          {lastFetch && (
            <p className="text-xs text-brand-muted mt-1">
              Last updated: {lastFetch.toLocaleTimeString("en-NG")}
            </p>
          )}
        </motion.div>

        {/* Stats */}
        <StatsCards requests={requests} />

        {/* Table */}
        {loading && requests.length === 0 ? (
          <div className="bg-white border border-brand-border rounded-2xl py-20 flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-brand-border border-t-brand-orange rounded-full animate-spin" />
            <p className="text-sm text-brand-muted">Loading requests…</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <RequestsTable
              requests={requests}
              onSelect={setSelected}
            />
          </motion.div>
        )}
      </main>

      {/* ── Request detail slide-over ── */}
      {selected && (
        <RequestDetail
          request={selected}
          onClose={() => setSelected(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}