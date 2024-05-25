import { ResponseData, useAxios } from "application/libs/axios";
import { UserTable } from "./components/users-filters/dtos/responses";
import { UserGetByFiltersRequest } from "./dtos/requests";

enum UserEndpoint {
  GET_BY_FILTERS = "Users/GetByFilters",
  DELETE = "Users",
}

export const useUsersService = () => {
  const { post, remove } = useAxios();

  const getByFilters = async (payload: UserGetByFiltersRequest) => {
    const response = await post<ResponseData<UserTable[]>, UserGetByFiltersRequest>(
      UserEndpoint.GET_BY_FILTERS,
      payload
    );
    return response.data;
  };

  const deleteRecord = async (id: number) => {
    const url = `${UserEndpoint.DELETE}/${id}`;
    const response = await remove<Response>(url);
    return response;
  };

  return {
    getByFilters,
    deleteRecord,
  };
};
