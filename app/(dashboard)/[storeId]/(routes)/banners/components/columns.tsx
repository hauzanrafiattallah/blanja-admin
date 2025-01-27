"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./CellAction";

export type BannerColumn = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<BannerColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "action",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
