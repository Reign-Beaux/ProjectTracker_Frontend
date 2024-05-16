import { styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { NoRowsOverlay } from "./components";
import { TableProps } from "./tableHook";

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
