import { Role } from "../../models/roles";
import { SettingsTable, useRolesContext } from "../../rolesContext";
import { useRolesService } from "../../rolesService";
import { useFiltersForm } from "./hooks/filtersForm";

export const useRolesFiltersHandler = () => {
  const {
    tableState: {
      settingsTable: { pagination, sortBy },
    },
    setTableState,
  } = useRolesContext();
  const { getByFilters } = useRolesService();

  const submitForm = async (values: Role) => {
    try {
      const payload: SettingsTable = {
        isLoading: true,
        filters: values,
        pagination,
        sortBy,
      };
      const response = await getByFilters(payload);
      setTableState((prev) => ({ ...prev, dataSource: response }));
    } catch (error: any) {}
  };

  const filtersForm = useFiltersForm({ submitForm });

  return { ...filtersForm };
};
