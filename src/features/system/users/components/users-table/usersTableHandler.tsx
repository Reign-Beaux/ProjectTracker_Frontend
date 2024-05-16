import { IconButton, Typography } from "@mui/material";
import { GridColDef, GridColumnHeaderParams, GridRenderCellParams } from "@mui/x-data-grid";
import { Icon, PaginationModel, Tooltip } from "application/components/elements";
import { StateProps, useUsersContext } from "../../usersContext";
import { useUsersService } from "../../usersService";
import { useEffect } from "react";
import { TableHeader } from "application/components/elements/table/components";

export const useUsersTableHandler = () => {
  const {
    state: { settingsTable, usersTable },
    setState,
  } = useUsersContext();
  const { getByFilters } = useUsersService();

  const getDataSource = async () => {
    try {
      const response = await getByFilters(settingsTable);
      setState({ usersTable: response } as StateProps);
    } catch (error: any) {}
  };

  const paginationModelChange = (newPagination: PaginationModel) => {
    setState({ settingsTable: { ...settingsTable, pagination: newPagination } } as StateProps);
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
        flex: 1,
        minWidth: 150,
        editable: false,
        renderHeader: () => <TableHeader text="Usuario" />,
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

  useEffect(() => {}, []);

  useEffect(() => {
    getDataSource();
  }, [settingsTable.pagination, settingsTable.sort]);

  return {
    dataSource: usersTable,
    columns,
    pagination: settingsTable.pagination,
    paginationModelChange,
  };
};
