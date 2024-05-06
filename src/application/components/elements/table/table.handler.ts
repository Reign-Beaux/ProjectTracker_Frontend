import { useState } from "react";

type SortDirection = "asc" | "desc";

export interface TableSettings {
  pageSize: number;
  page: number;
  orderBy: string;
  sortDirection: SortDirection;
}

export const pageSizeOptions = [10, 30, 50];

export const useTableHandler = (defaultOrder: string) => {
  const [settings, setSettings] = useState<TableSettings>({
    pageSize: 10,
    page: 1,
    orderBy: defaultOrder,
    sortDirection: "desc",
  });

  return { settings, setSettings };
};
