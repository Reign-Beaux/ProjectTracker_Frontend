import { useUserService } from "../../services";
import { useFiltersForm } from "./hooks";
import { UserFilter } from "./models";

export const useFiltersHandler = () => {
  const { getByFilters } = useUserService();

  const submitForm = async (values: UserFilter) => {
    try {
      const response = await getByFilters(values);
      console.log(response)
    } catch (error: any) {}
  };

  const filtersForm = useFiltersForm({ submitForm });

  return { ...filtersForm };
};
