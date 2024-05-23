import { IconButton } from "@mui/material";
import { GridColDef, GridRenderCellParams, GridSortItem } from "@mui/x-data-grid";
import { Icon, PaginationModel, Tooltip } from "application/components/elements";
import { TableHeader } from "application/components/elements/table/components";
import { useEffect, useState } from "react";
import { StateProps, useUsersContext } from "../../usersContext";
import { useUsersService } from "../../usersService";

export const useUsersTableHandler = () => {
  const {
    state: { settingsTable, usersTable },
    setState,
  } = useUsersContext();
  const { getByFilters } = useUsersService();
  const [currentColmunSort, setCurrentColmunSort] = useState("name");

  const getDataSource = async () => {
    try {
      const response = await getByFilters(settingsTable);
      setState({ usersTable: response } as StateProps);
    } catch (error: any) {}
  };

  const paginationModelChange = (newPagination: PaginationModel) => {
    setState({ settingsTable: { ...settingsTable, pagination: newPagination } } as StateProps);
  };

  const changeSort = (newSort: GridSortItem) => {
    setState({ settingsTable: { ...settingsTable, sort: newSort } } as StateProps);
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
        field: "name",
        flex: 1,
        minWidth: 150,
        editable: false,
        renderHeader: () => (
          <TableHeader
            field="name"
            text="Nombre(s)"
            currentColmunSort={currentColmunSort}
            setCurrentColmunSort={setCurrentColmunSort}
            changeSort={changeSort}
          />
        ),
      },
      {
        field: "paternalLastname",
        flex: 1,
        minWidth: 150,
        editable: false,
        renderHeader: () => (
          <TableHeader
            field="paternalLastname"
            text="Apellido Paterno"
            currentColmunSort={currentColmunSort}
            setCurrentColmunSort={setCurrentColmunSort}
            changeSort={changeSort}
          />
        ),
      },
      {
        field: "maternalLastname",
        flex: 1,
        minWidth: 150,
        editable: false,
        renderHeader: () => (
          <TableHeader
            field="maternalLastname"
            text="Apellido Materno"
            currentColmunSort={currentColmunSort}
            setCurrentColmunSort={setCurrentColmunSort}
            changeSort={changeSort}
          />
        ),
      },
      {
        field: "username",
        flex: 1,
        minWidth: 150,
        editable: false,
        renderHeader: () => (
          <TableHeader
            field="username"
            text="Usuario"
            currentColmunSort={currentColmunSort}
            setCurrentColmunSort={setCurrentColmunSort}
            changeSort={changeSort}
          />
        ),
      },
      {
        field: "email",
        flex: 1,
        minWidth: 150,
        editable: false,
        renderHeader: () => (
          <TableHeader
            field="email"
            text="Email"
            currentColmunSort={currentColmunSort}
            setCurrentColmunSort={setCurrentColmunSort}
            changeSort={changeSort}
          />
        ),
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
