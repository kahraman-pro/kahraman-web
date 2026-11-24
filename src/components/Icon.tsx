// One stroke icon set, 1.75px at 20px, square caps to match the MK monogram.
type Props = { className?: string };
const base = {
  viewBox: "0 0 20 20",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  "aria-hidden": true,
};

export function ArrowRight({ className = "size-4" }: Props) {
  return <svg {...base} className={className}><path d="M3.5 10h12M11 5.5 15.5 10 11 14.5" /></svg>;
}
export function ArrowLeft({ className = "size-4" }: Props) {
  return <svg {...base} className={className}><path d="M16.5 10h-12M9 5.5 4.5 10 9 14.5" /></svg>;
}
export function ArrowUpRight({ className = "size-4" }: Props) {
  return <svg {...base} className={className}><path d="M6 14 14 6M7.5 6H14v6.5" /></svg>;
}
