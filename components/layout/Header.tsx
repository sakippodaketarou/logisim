"use client";

import { CalendarDays, CircleUserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { NAV_ITEMS } from "@/lib/constants/navigation";

function getPageName(pathname: string) {
  if (pathname.startsWith("/simulations/")) {
    return "シミュレーション詳細";
  }

  return NAV_ITEMS.find((item) => item.href === pathname)?.label ?? "LOGISIM";
}

export function Header() {
  const pathname = usePathname();
  const pageName = getPageName(pathname);
  const today = new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "medium",
    timeZone: "Asia/Tokyo",
  }).format(new Date());

  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center border-b border-slate-200 bg-white px-4 shadow-sm lg:left-64 lg:px-6">
      <div className="min-w-0 flex-1">
        <div className="text-xs font-medium uppercase text-slate-500">LOGISIM</div>
        <div className="truncate text-lg font-semibold text-slate-950">{pageName}</div>
      </div>

      <div className="hidden items-center gap-4 text-sm text-slate-600 sm:flex">
        <div className="flex items-center gap-2">
          <CalendarDays aria-hidden="true" className="h-4 w-4 text-slate-400" />
          <span>{today}</span>
        </div>
        <div className="flex items-center gap-2">
          <CircleUserRound aria-hidden="true" className="h-4 w-4 text-slate-400" />
          <span>Admin User</span>
        </div>
        <Badge tone="blue">Development</Badge>
      </div>
    </header>
  );
}
