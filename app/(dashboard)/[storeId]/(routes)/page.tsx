import db from "@/lib/db";

interface DashboadPageProps {
  params: { storeId: string };
}

const DashboadPage = async ({ params }: DashboadPageProps) => {
  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return (
    <div>
      Active Store = {store?.name}
    </div>
  )
};

export default DashboadPage;
