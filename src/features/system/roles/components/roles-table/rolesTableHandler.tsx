import { IconButton } from "@mui/material";
import { GridColDef, GridRenderCellParams, GridSortItem } from "@mui/x-data-grid";
import { Icon, PaginationModel, Tooltip } from "application/components/elements";
import { TableHeader } from "application/components/elements/table/components";
import { ConfirmationProps, useConfirmationStore } from "application/libs/zustand";
import { useEffect, useState } from "react";
import { Role } from "../../models";
import { useRolesContext } from "../../rolesContext";
import { useRolesService } from "../../rolesService";

export const useRolesTableHandler = () => {
  const { initConfirmation } = useConfirmationStore();
  const { tableState, setTableState, setModalActions } = useRolesContext();
  const { getByFilters, deleteRecord } = useRolesService();
  const [currentColmunSort, setCurrentColmunSort] = useState("name");
  const { settingsTable, dataSource } = tableState;

  const getDataSource = async () => {
    try {
      const response = await getByFilters(settingsTable);
      setTableState((prev) => ({ ...prev, dataSource: response }));
    } catch (error: any) {}
  };

  const paginationModelChange = (newPagination: PaginationModel) => {
    setTableState((prev) => ({ ...prev, pagination: newPagination, loading: true }));
  };

  const changeSort = (newSort: GridSortItem) => {
    setTableState((prev) => ({ ...prev, sort: newSort, loading: true }));
  };

  const openModalActions = (id: number = 0) => {
    setModalActions((prev) => ({ ...prev, open: true, idRole: id }));
  };

  const deleteRole = async (id: number) => {
    await deleteRecord(id);
    getDataSource();
  };

  const confirmationDeleteRecord = (row: Role) => {
    initConfirmation({
      title: "Eliminar Rol",
      message: `¿Desea eliminar el usuario:  ${row.name}?`,
      withDefaultButton: true,
      type: "error",
      actions: [
        {
          label: "Eliminar",
          type: "error",
          callback: () => deleteRole(row.id),
        },
      ],
    } as ConfirmationProps);
  };

  const columns: GridColDef[] = [
    {
      field: "code",
      flex: 1,
      minWidth: 150,
      editable: false,
      renderHeader: () => (
        <TableHeader
          field="code"
          text="Código"
          currentColmunSort={currentColmunSort}
          setCurrentColmunSort={setCurrentColmunSort}
          changeSort={changeSort}
        />
      ),
    },
    {
      field: "description",
      flex: 1,
      minWidth: 150,
      editable: false,
      renderHeader: () => (
        <TableHeader
          field="description"
          text="Descripción"
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
      maxWidth: 150,
      editable: false,
      align: "center",
      renderHeader: () => (
        <div style={{ width: "100%", textAlign: "center" }}>
          <Tooltip title="Insertar rol">
            <IconButton aria-label="insert-role" onClick={() => openModalActions()}>
              <Icon type="addFolder" />
            </IconButton>
          </Tooltip>
        </div>
      ),
      renderCell: (params: GridRenderCellParams) => (
        <>
          <Tooltip title="Actualizar rol">
            <IconButton aria-label="update-role" onClick={() => openModalActions(params.row.id)}>
              <Icon type="edit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Eliminar usuario">
            <IconButton
              aria-label="delete-role"
              onClick={() => confirmationDeleteRecord(params.row)}>
              <Icon type="delete" />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  useEffect(() => {
    debugger;
    setTableState((prev) => ({
      ...prev,
      settingsTable: { ...prev.settingsTable, isLoading: true },
    }));
  }, []);

  useEffect(() => {
    if (settingsTable.isLoading) getDataSource();
  }, [settingsTable.isLoading]);

  return {
    dataSource,
    columns,
    pagination: settingsTable.pagination,
    paginationModelChange,
  };
};
