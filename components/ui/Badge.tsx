import type { ReactNode } from "react";

type BadgeTone = "blue" | "slate" | "green" | "amber";

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
};

const toneClasses: Record<BadgeTone, string> = {
  blue: "border-blue-200 bg-blue-50 text-blue-700",
  slate: "border-slate-200 bg-slate-100 text-slate-700",
  green: "border-emerald-200 bg-emerald-50 text-emerald-700",
  amber: "border-amber-200 bg-amber-50 text-amber-700",
};

export function Badge({ children, tone = "slate" }: BadgeProps) {
  return (
    <span
      className={`inline-flex h-6 items-center rounded-full border px-2.5 text-xs font-medium ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
