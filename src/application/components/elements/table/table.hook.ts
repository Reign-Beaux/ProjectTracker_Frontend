import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Pagination, Sort } from "./models";
import { GridColDef, GridValidRowModel } from "@mui/x-data-grid";

export interface TableProps {
  dataSource: GridValidRowModel[];
  columns: GridColDef[];
  pageSizeOptions: number[];
  pagination: Pagination;
  setPagination: Dispatch<SetStateAction<Pagination>>;
  sort: Sort;
  setSort: Dispatch<SetStateAction<Sort>>;
}

interface TableSettings {
  dataSource: GridValidRowModel[];
  sortByDefault: string;
  columns: GridColDef[];
  getDataSource: () => GridValidRowModel[];
}

const pageSizeOptions = [10, 30, 50];

export const useTable = ({
  sortByDefault,
  dataSource,
  columns,
  getDataSource,
}: TableSettings) => {
  const [pagination, setPagination] = useState<Pagination>({
    pageSize: pageSizeOptions[0],
    page: 0,
  });
  const [sort, setSort] = useState<Sort>({
    sortBy: sortByDefault,
    sortDirection: "asc",
  });

  useEffect(() => {
    getDataSource();
  }, [pagination, sort]);

  return {
    pageSizeOptions,
    pagination,
    setPagination,
    sort,
    setSort,
    dataSource,
    columns,
  } as TableProps;
};
