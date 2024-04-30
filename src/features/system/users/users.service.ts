import { ResponseData, useAxios } from "application/libs/axios";
import { UserFilter } from "./components/users-filters/dtos/requests";
import { UserTable } from "./components/users-filters/dtos/responses";

enum UserEndpoint {
  GET_BY_FILTERS = "Users/GetByFilters",
}

export const useUsersService = () => {
  const { post } = useAxios();

  const getByFilters = async (payload: UserFilter) => {
    const response = await post<ResponseData<UserTable[]>, UserFilter>(
      UserEndpoint.GET_BY_FILTERS,
      payload
    );
    return response.data;
  };

  return {
    getByFilters,
  };
};
