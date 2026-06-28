import { Activity, Calculator, ClipboardList, Truck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const summaries = [
  {
    label: "本日の総出荷個数",
    value: "0",
    icon: ClipboardList,
  },
  {
    label: "使用予定車両",
    value: "0",
    icon: Truck,
  },
  {
    label: "シミュレーション数",
    value: "0",
    icon: Activity,
  },
  {
    label: "総コスト見込み",
    value: "¥0",
    icon: Calculator,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        description="物流ルート配送シミュレーションの概要を確認できます。"
        title="ダッシュボード"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summaries.map((summary) => {
          const Icon = summary.icon;

          return (
            <Card className="p-5" key={summary.label}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {summary.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950">
                    {summary.value}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <Card className="p-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <h2 className="text-lg font-semibold text-slate-950">
              最新シミュレーション
            </h2>
            <Badge tone="slate">0件</Badge>
          </div>
          <div className="flex min-h-80 items-center justify-center">
            <p className="text-sm text-slate-500">
              まだシミュレーション結果はありません
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-slate-950">Phase1進捗</h2>
          <div className="mt-5 space-y-3">
            <div className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2">
              <span className="text-sm text-slate-700">レイアウト構築中</span>
              <Badge tone="amber">進行中</Badge>
            </div>
            <div className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2">
              <span className="text-sm text-slate-700">DB未接続</span>
              <Badge>未接続</Badge>
            </div>
            <div className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2">
              <span className="text-sm text-slate-700">地図API未接続</span>
              <Badge>未接続</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
