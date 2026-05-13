import { forwardRef } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Select = forwardRef(function Select(
  { label, error, hint, className = "", required = false, options = [], placeholder = "Select an option", ...props },
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
      <div className="relative">
        <select
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-xl border text-sm text-brand-charcoal
            bg-white appearance-none cursor-pointer
            transition-all duration-200 outline-none
            focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange
            ${error
              ? "border-red-400 focus:ring-red-100 focus:border-red-400"
              : "border-brand-border hover:border-brand-orange/40"
            }
            ${className}
          `}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <RiArrowDownSLine
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none"
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
      {hint && !error && <p className="text-xs text-brand-muted mt-0.5">{hint}</p>}
    </div>
  );
});

export default Select;