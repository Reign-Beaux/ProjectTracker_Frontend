import { styled } from "@mui/material";
import { DataGrid, GridColDef, GridSortItem, GridValidRowModel } from "@mui/x-data-grid";
import { NoRowsOverlay } from "./components";
import { PaginationModel } from "./models";

export interface TableProps {
  dataSource: GridValidRowModel[];
  columns: GridColDef[];
  pagination: PaginationModel;
  paginationModelChange: (newPagination: PaginationModel) => void;
}

export interface TableSettings {
  dataSource: GridValidRowModel[];
  sortByDefault: string;
  columns: GridColDef[];
}

const pageSizeOptions = [10, 30, 50];

export const paginationDefault: PaginationModel = {
  pageSize: pageSizeOptions[0],
  page: 0,
};

export const sortDefault = (sortByDefault: string) =>
  ({
    field: sortByDefault,
    sort: "asc",
  } as GridSortItem);

// export const sortDefault = (sortByDefault: string) =>
//   [
//     {
//       field: sortByDefault,
//       sort: "desc",
//     } as GridSortItem,
//   ] as GridSortModel;

const TableStyledComponent = styled(DataGrid)`
  .MuiDataGrid-cell:focus-within {
    outline: none;
  }
  .MuiDataGrid-columnHeader:focus-within {
    outline: none;
  }
  .MuiDataGrid-columnHeaderTitleContainerContent {
    width: 100% !important;
    height: 100% !important;
  }
  --DataGrid-overlayHeight: 60vh;
`;

export const Table = ({ dataSource, columns, pagination, paginationModelChange }: TableProps) => {
  return (
    <TableStyledComponent
      rows={dataSource}
      slots={{ noRowsOverlay: NoRowsOverlay }}
      columns={columns}
      pageSizeOptions={pageSizeOptions}
      paginationModel={pagination}
      onPaginationModelChange={paginationModelChange}
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
