import { styled } from "@mui/material";
import { DataGrid, GridSortModel } from "@mui/x-data-grid";
import { NoRowsOverlay } from "./components";
import { TableProps } from "./tableHook";
import { Pagination } from "./models";

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
  pagination,
  setPagination,
  sort,
  setSort,
  dataSource,
  columns,
}: TableProps) => {
  const algo = (newPagination: Pagination) => {
    // console.log(newPagination);
    setPagination(newPagination);
  };

  const algo2 = (newSort: GridSortModel) => {
    // console.log(newSort);
    setSort(newSort);
  };

  return (
    <TableStyledComponent
      rows={dataSource}
      slots={{ noRowsOverlay: NoRowsOverlay }}
      columns={columns}
      pageSizeOptions={pageSizeOptions}
      paginationModel={pagination}
      onPaginationModelChange={algo}
      sortModel={sort}
      onSortModelChange={algo2}
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
