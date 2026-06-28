"use client";

import {
  CircleDollarSign,
  LayoutDashboard,
  LucideIcon,
  MapPin,
  PackageCheck,
  Route,
  Settings,
  Signpost,
  Truck,
  Warehouse,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants/navigation";

const ICONS: Record<string, LucideIcon> = {
  CircleDollarSign,
  LayoutDashboard,
  MapPin,
  PackageCheck,
  Route,
  Settings,
  Signpost,
  Truck,
  Warehouse,
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-slate-800 bg-slate-950 text-slate-200 lg:flex">
      <div className="flex h-16 items-center border-b border-slate-800 px-5">
        <div>
          <div className="text-lg font-semibold text-white">LOGISIM</div>
          <div className="mt-0.5 text-xs text-slate-400">
            Logistics Route Simulator
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {NAV_ITEMS.map((item) => {
          const Icon = ICONS[item.icon] ?? LayoutDashboard;
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              className={`flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              }`}
              href={item.href}
              key={item.href}
            >
              <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 px-5 py-4 text-xs text-slate-500">
        v0.1.0
      </div>
    </aside>
  );
}
