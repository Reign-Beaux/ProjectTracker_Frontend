import { UserGetByFiltersRequest } from "../../dtos/requests";
import { StateProps, useUsersContext } from "../../usersContext";
import { useUsersService } from "../../usersService";
import { UserFilter } from "./dtos/requests";
import { useFiltersForm } from "./hooks";

export const useUsersFiltersHandler = () => {
  const {
    state: {
      settingsTable: { usersFilter, pagination, sort },
    },
    setState,
  } = useUsersContext();
  const { getByFilters } = useUsersService();

  const submitForm = async (values: UserFilter) => {
    try {
      setState({ settingsTable: { usersFilter: values, pagination, sort } } as StateProps);
      const payload: UserGetByFiltersRequest = {
        ...{ usersFilter: values, pagination, sort },
      };
      const response = await getByFilters(payload);
      setState({ usersTable: response } as StateProps);
    } catch (error: any) {}
  };

  const filtersForm = useFiltersForm({ submitForm, usersFilter });

  return { ...filtersForm };
};
