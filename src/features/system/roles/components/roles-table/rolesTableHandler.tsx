import { useState } from "react";
import { useRolesContext } from "../../rolesContext";
import { useRolesService } from "../../rolesService";

export const useRolesTableHandler = () => {
  const {
    tableState: { settingsTable, dataSource },
    setTableState,
  } = useRolesContext();
  const { getByFilters, deleteRecord } = useRolesService();
  const [currentColmunSort, setCurrentColmunSort] = useState("name");

  const getDataSource = async () => {
    try {
      const response = await getByFilters(settingsTable);
      setTableState((prev) => ({
        ...prev,
        dataSource: { ...response },
        settingsTable: { ...settingsTable, isLoading: false },
      }));
    } catch (error: any) {}
  };
};
