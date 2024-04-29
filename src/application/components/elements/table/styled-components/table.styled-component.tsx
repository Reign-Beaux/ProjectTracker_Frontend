import { styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const TableStyledComponent = styled(DataGrid)`
  .MuiDataGrid-cell:focus-within {
    outline: none;
  }
  .MuiDataGrid-columnHeader:focus-within {
    outline: none;
  }
`;
