import { Role } from "../../models/roles";
import { useRolesService } from "../../rolesService";
import { useFiltersForm } from "./hooks/filtersForm";

export const useRolesFiltersHandler = () => {
  const { getByFilters } = useRolesService();

  const submitForm = async (values: Role) => {
    try {
      const response = await getByFilters(values);
    } catch (error: any) {}
  };

  const filtersForm = useFiltersForm({ submitForm });

  return { ...filtersForm };
};
