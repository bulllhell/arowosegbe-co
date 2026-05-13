/**
 * @param {"default"|"hover"|"flat"} variant
 */
export default function Card({
  children,
  variant = "default",
  className = "",
  onClick,
  ...props
}) {
  const variants = {
    default:
      "bg-white border border-brand-border rounded-2xl",
    hover:
      "bg-white border border-brand-border rounded-2xl cursor-pointer hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-orange/8 transition-all duration-300",
    flat:
      "bg-brand-cream border border-brand-border rounded-2xl",
  };

  return (
    <div
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}