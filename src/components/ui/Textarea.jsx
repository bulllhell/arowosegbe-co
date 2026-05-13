import { forwardRef } from "react";

const Textarea = forwardRef(function Textarea(
  { label, error, hint, className = "", required = false, rows = 4, ...props },
  ref
) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-brand-charcoal">
          {label}
          {required && <span className="text-brand-orange ml-0.5">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`
          w-full px-4 py-3 rounded-xl border text-sm text-brand-charcoal
          bg-white placeholder:text-brand-muted/60 resize-none
          transition-all duration-200 outline-none
          focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange
          ${error
            ? "border-red-400 focus:ring-red-100 focus:border-red-400"
            : "border-brand-border hover:border-brand-orange/40"
          }
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
      {hint && !error && <p className="text-xs text-brand-muted mt-0.5">{hint}</p>}
    </div>
  );
});

export default Textarea;