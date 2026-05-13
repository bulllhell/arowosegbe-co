export default function PageLoader() {
  return (
    <div className="fixed inset-0 bg-brand-cream flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinning ring */}
        <div className="w-10 h-10 rounded-full border-2 border-brand-border border-t-brand-orange animate-spin" />
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-brand-muted">
          Loading…
        </span>
      </div>
    </div>
  );
}