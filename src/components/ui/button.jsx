export function Button({ children, variant = "default", className = "", ...props }) {
  const base =
    "inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium transition";
  const variants = {
    default: "bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900",
    outline: "border border-slate-300 text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800/50",
    ghost: "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/50",
  };
  return (
    <button className={`${base} ${variants[variant] || variants.default} ${className}`} {...props}>
      {children}
    </button>
  );
}
