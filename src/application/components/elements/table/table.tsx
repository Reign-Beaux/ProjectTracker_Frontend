import { GridColDef } from "@mui/x-data-grid";
import { TableStyledComponent } from "./styled-components";

interface TableProps {
  dataSource: any[];
  columns: GridColDef[];
}

export const Table = ({ dataSource, columns }: TableProps) => {
  const pageSizeOptions = [10, 30, 50];

  return (
    <TableStyledComponent
      rows={dataSource}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: pageSizeOptions[1],
          },
        },
      }}
      pageSizeOptions={pageSizeOptions}
      disableRowSelectionOnClick
      autoHeight
      showColumnVerticalBorder
      showCellVerticalBorder
      getRowId={(row: any) => (row.id === 0 ? row.record : row.id)}
      localeText={{
        noRowsLabel: "No se ha encontrado ningún registro",
        MuiTablePagination: {
          labelDisplayedRows: ({ from, to, count }) => `${from} - ${to} de ${count}`,
          labelRowsPerPage: "Registros por páginas",
        },
      }}
    />
  );
};
