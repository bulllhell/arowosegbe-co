import { motion } from "framer-motion";

/**
 * @param {"primary"|"secondary"|"outline"|"ghost"} variant
 * @param {"sm"|"md"|"lg"} size
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  loading = false,
  disabled = false,
  onClick,
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-brand-orange hover:bg-brand-orangeDark text-white hover:shadow-lg hover:shadow-brand-orange/20 hover:-translate-y-0.5",
    secondary:
      "bg-brand-charcoal hover:bg-brand-stone text-white hover:shadow-lg hover:-translate-y-0.5",
    outline:
      "border border-brand-border bg-transparent hover:bg-brand-orange/5 text-brand-charcoal hover:border-brand-orange hover:text-brand-orange",
    ghost:
      "bg-transparent hover:bg-brand-orange/8 text-brand-charcoal hover:text-brand-orange",
  };

  const sizes = {
    sm:  "text-xs px-4 py-2",
    md:  "text-sm px-6 py-3",
    lg:  "text-base px-8 py-4",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>Loading…</span>
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}