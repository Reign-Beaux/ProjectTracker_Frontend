import { GridColDef, GridSortModel, GridValidRowModel } from "@mui/x-data-grid";
import { Dispatch, SetStateAction, useState } from "react";
import { Pagination } from "./models";

export interface TableProps {
  dataSource: GridValidRowModel[];
  columns: GridColDef[];
  pageSizeOptions: number[];
  pagination: Pagination;
  setPagination: Dispatch<SetStateAction<Pagination>>;
  sort: GridSortModel;
  setSort: Dispatch<SetStateAction<GridSortModel>>;
}

interface TableSettings {
  dataSource: GridValidRowModel[];
  sortByDefault: string;
  columns: GridColDef[];
}

const pageSizeOptions = [10, 30, 50];

export const useTable = ({ sortByDefault, dataSource, columns }: TableSettings) => {
  const [pagination, setPagination] = useState<Pagination>({
    pageSize: pageSizeOptions[0],
    page: 0,
  });
  const [sort, setSort] = useState<GridSortModel>([
    {
      field: sortByDefault,
      sort: "desc",
    }
  ]);

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
