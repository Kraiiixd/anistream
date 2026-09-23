export function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span className="badge" style={{ background: color }}>
      {label}
    </span>
  );
}
