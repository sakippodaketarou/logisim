import { PlaceholderPage } from "@/components/common/PlaceholderPage";

type SimulationDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SimulationDetailPage({
  params,
}: SimulationDetailPageProps) {
  const { id } = await params;

  return (
    <PlaceholderPage
      actionLabel="結果を複製"
      description={`シミュレーションID ${id} の結果詳細を表示します。`}
      title="シミュレーション詳細"
    />
  );
}
