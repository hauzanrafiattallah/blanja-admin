import db from "@/lib/db";
import React from "react";
import { BannerForm } from "./components/BannerForm";

const BannerPage = async ({ params }: { params: { bannerId: string } }) => {
  const banner = await db.banner.findUnique({
    where: {
      id: params.bannerId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BannerForm initialData={banner} />
      </div>
    </div>
  );
};

export default BannerPage;
