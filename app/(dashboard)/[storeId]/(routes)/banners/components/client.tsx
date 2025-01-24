"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export const BannerClient = () => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex justify-between items-center ">
        <Heading title="Banners" description="Atur Banner Toko Anda" />
        <Button
          onClick={() => {
            router.push(`/${params.storeId}/banners/new`);
          }}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
    </>
  );
};
