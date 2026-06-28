import type { NavItem } from "@/types/navigation";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "ダッシュボード",
    href: "/dashboard",
    icon: "LayoutDashboard",
  },
  {
    label: "発送拠点",
    href: "/shipping-bases",
    icon: "Warehouse",
  },
  {
    label: "到着拠点",
    href: "/delivery-bases",
    icon: "MapPin",
  },
  {
    label: "方面管理",
    href: "/directions",
    icon: "Signpost",
  },
  {
    label: "出荷件数",
    href: "/shipments",
    icon: "PackageCheck",
  },
  {
    label: "車両管理",
    href: "/vehicles",
    icon: "Truck",
  },
  {
    label: "コスト設定",
    href: "/cost-rules",
    icon: "CircleDollarSign",
  },
  {
    label: "シミュレーション",
    href: "/simulations",
    icon: "Route",
  },
  {
    label: "設定",
    href: "/settings",
    icon: "Settings",
  },
];
