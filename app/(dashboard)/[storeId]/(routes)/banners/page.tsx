import db from "@/lib/db";

import { BannerColumn } from "./components/columns";

import { format } from "date-fns";
import { BannerClient } from "./components/client";

const BannersPage = async ({ params }: { params: { storeId: string } }) => {
  const banners = await db.banner.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBanners: BannerColumn[] = banners.map((item) => {
    return {
      id: item.id,
      label: item.label,
      createdAt: format(item.createdAt, "d MMMM yyyy"),
    };
  });

  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BannerClient data={formattedBanners} />
      </div>
    </div>
  );
};

export default BannersPage;
