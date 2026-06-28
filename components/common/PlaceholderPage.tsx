import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

type PlaceholderPageProps = {
  title: string;
  description: string;
  actionLabel: string;
};

export function PlaceholderPage({
  title,
  description,
  actionLabel,
}: PlaceholderPageProps) {
  return (
    <div className="space-y-6">
      <PageHeader
        actions={<Button>{actionLabel}</Button>}
        description={description}
        title={title}
      />
      <Card className="p-8">
        <div className="flex min-h-72 items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50">
          <div className="text-center">
            <p className="text-base font-medium text-slate-800">
              この機能はPhase2以降で実装予定です
            </p>
            <p className="mt-2 text-sm text-slate-500">
              データ登録、一覧、編集、CSV連携の土台として利用します。
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
