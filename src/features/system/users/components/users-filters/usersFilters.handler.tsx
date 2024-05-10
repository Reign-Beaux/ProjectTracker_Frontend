import { UserGetByFiltersRequest } from "../../dtos/requests";
import { StateProps, useUsersContext } from "../../users.context";
import { useUsersService } from "../../usersService";
import { useFiltersForm } from "./hooks";

export const useUsersFiltersHandler = () => {
  const {
    state: { usersFilter, pagination, sort },
    setState,
  } = useUsersContext();
  const { getByFilters } = useUsersService();

  const submitForm = async () => {
    try {
      const payload: UserGetByFiltersRequest = {
        ...{ usersFilter, pagination, sort }
      }
      const response = await getByFilters(payload);
      setState({ usersTable: response } as StateProps);
    } catch (error: any) {}
  };

  const filtersForm = useFiltersForm({ submitForm });

  return { ...filtersForm };
};
