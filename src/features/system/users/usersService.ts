import { ResponseData, useAxios } from "application/libs/axios";
import { UserTable } from "./components/users-filters/dtos/responses";
import { UserGetByFiltersRequest } from "./dtos/requests";

enum UserEndpoint {
  GET_BY_FILTERS = "Users/GetByFilters",
}

export const useUsersService = () => {
  const { post } = useAxios();

  const getByFilters = async (payload: UserGetByFiltersRequest) => {
    const response = await post<ResponseData<UserTable[]>, UserGetByFiltersRequest>(
      UserEndpoint.GET_BY_FILTERS,
      payload
    );
    return response.data;
  };

  return {
    getByFilters,
  };
};
