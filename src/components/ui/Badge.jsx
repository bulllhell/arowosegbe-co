/**
 * @param {"default"|"orange"|"green"|"yellow"|"blue"|"red"} variant
 * @param {"sm"|"md"} size
 */
export default function Badge({
  children,
  variant = "default",
  size = "sm",
  className = "",
}) {
  const variants = {
    default: "bg-brand-border/60 text-brand-stone",
    orange:  "bg-brand-orange/10 text-brand-orange border border-brand-orange/20",
    green:   "bg-green-50 text-green-700 border border-green-200",
    yellow:  "bg-yellow-50 text-yellow-700 border border-yellow-200",
    blue:    "bg-blue-50 text-blue-700 border border-blue-200",
    red:     "bg-red-50 text-red-600 border border-red-200",
  };

  const sizes = {
    sm: "text-[10px] px-2.5 py-1 tracking-wide",
    md: "text-xs px-3 py-1.5 tracking-wide",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1 rounded-full font-medium uppercase
        ${variants[variant]} ${sizes[size]} ${className}
      `}
    >
      {children}
    </span>
  );
}