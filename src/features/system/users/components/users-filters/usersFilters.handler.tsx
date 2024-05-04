import { useUsersContext } from "../../users.context";
import { useUsersService } from "../../users.service";
import { UserFilter } from "./dtos/requests";
import { useFiltersForm } from "./hooks";

export const useUsersFiltersHandler = () => {
  const { setState } = useUsersContext();
  const { getByFilters } = useUsersService();

  const submitForm = async (values: UserFilter) => {
    try {
      const response = await getByFilters(values);
      setState({ usersTable: response });
    } catch (error: any) {}
  };

  const filtersForm = useFiltersForm({ submitForm });

  return { ...filtersForm };
};
