import { styled } from "@mui/material";
import { DataGrid, GridColDef, GridSortModel, GridValidRowModel } from "@mui/x-data-grid";
import { NoRowsOverlay } from "./components";
import { Pagination } from "./models";
import { Dispatch, SetStateAction } from "react";

export interface TableProps {
  dataSource: GridValidRowModel[];
  columns: GridColDef[];
  pageSizeOptions: number[];
  pagination: Pagination;
  setPagination: Dispatch<SetStateAction<Pagination>>;
  sort: GridSortModel;
  setSort: Dispatch<SetStateAction<GridSortModel>>;
}

export interface TableSettings {
  dataSource: GridValidRowModel[];
  sortByDefault: string;
  columns: GridColDef[];
}

const pageSizeOptions = [10, 30, 50];

export const paginationDefault: Pagination = {
  pageSize: pageSizeOptions[0],
  page: 0,
}

export const sortDefault: GridSortModel = (sortByDefault: string) => ([
  {
    field: sortByDefault,
    sort: "desc",
  }
]);

const TableStyledComponent = styled(DataGrid)`
  .MuiDataGrid-cell:focus-within {
    outline: none;
  }
  .MuiDataGrid-columnHeader:focus-within {
    outline: none;
  }
  --DataGrid-overlayHeight: 60vh;
`;

export const Table = ({
  pageSizeOptions,
  dataSource,
  columns,
}: TableProps) => {
  return (
    <TableStyledComponent
      rows={dataSource}
      slots={{ noRowsOverlay: NoRowsOverlay }}
      columns={columns}
      pageSizeOptions={pageSizeOptions}
      disableColumnSorting
      disableColumnMenu
      disableRowSelectionOnClick
      autoHeight
      showColumnVerticalBorder
      showCellVerticalBorder
      getRowId={(row: any) => (row.id === 0 ? row.record : row.id)}
      localeText={{
        MuiTablePagination: {
          labelRowsPerPage: "Registros por páginas",
          labelDisplayedRows: ({ from, to, count }) => `${from} - ${to} de ${count}`,
        },
      }}
    />
  );
};
