import { useUserService } from "../../user.service";
import { UserFilter } from "./dtos/requests";
import { useFiltersForm } from "./hooks";

export const useUsersFiltersHandler = () => {
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
