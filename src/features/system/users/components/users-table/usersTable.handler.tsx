import { IconButton } from "@mui/material";
import { GridColDef, GridRenderCellParams, GridSortModel } from "@mui/x-data-grid";
import { Icon, Tooltip, useTable } from "application/components/elements";
import { Pagination } from "application/components/elements/table/models";
import { useUsersContext } from "../../users.context";

export const useUsersTableHandler = () => {
  const {
    state: { usersTable },
    // setState,
  } = useUsersContext();

  const getDataSource = (pagination: Pagination, sort: GridSortModel) => {
    return [];
  };

  const updateRecord = () => {
    console.log("updateRecord");
  };

  const deleteRecord = () => {
    console.log("deleteRecord");
  };

  const columnsSettings = (update: Function, remove: Function): GridColDef[] => {
    return [
      {
        field: "username",
        headerName: "Usuario",
        flex: 1,
        minWidth: 150,
        editable: false,
      },
      {
        field: "name",
        headerName: "Nombre",
        flex: 1,
        minWidth: 150,
        editable: false,
      },
      {
        field: "paternalLastname",
        headerName: "Apellido Paterno",
        flex: 1,
        minWidth: 150,
        editable: false,
      },
      {
        field: "maternalLastname",
        headerName: "Apellido Materno",
        flex: 1,
        minWidth: 150,
        editable: false,
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
        minWidth: 150,
        editable: false,
      },
      {
        field: "actions",
        headerName: "",
        flex: 1,
        minWidth: 150,
        editable: false,
        align: "center",
        disableColumnMenu: true,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
          <>
            <Tooltip title="Actualizar usuario">
              <IconButton aria-label="update-student" onClick={() => update(params.row.id)}>
                <Icon type="edit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Eliminar usuario">
              <IconButton aria-label="delete-subject" onClick={() => remove(params.row.id)}>
                <Icon type="delete" />
              </IconButton>
            </Tooltip>
          </>
        ),
      },
    ];
  };

  const columns = columnsSettings(updateRecord, deleteRecord);

  const tableProps = useTable({
    dataSource: usersTable,
    sortByDefault: "username",
    columns: columns,
    getDataSource: getDataSource,
  });

  return tableProps;
};