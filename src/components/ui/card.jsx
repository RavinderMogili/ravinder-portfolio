export function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl border bg-white shadow-sm dark:bg-slate-900/30 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={`p-4 border-b border-slate-200 dark:border-slate-800 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={`font-semibold ${className}`}>{children}</h3>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
