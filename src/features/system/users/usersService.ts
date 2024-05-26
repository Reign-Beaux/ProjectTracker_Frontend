import { ResponseData, useAxios } from "application/libs/axios";
import { UserTable } from "./components/users-filters/dtos/responses";
import { UserGetByFiltersRequest, UserInsert } from "./dtos/requests";

enum UserEndpoint {
  GET_BY_FILTERS = "Users/GetByFilters",
  INSERT = "Users",
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

  const insertRecord = async (payload: UserInsert) => {
    const url = UserEndpoint.GET_BY_FILTERS;
    const response = await post<ResponseData<UserTable[]>, UserInsert>(url, payload);
    return response.data;
  };

  const deleteRecord = async (id: number) => {
    const url = `${UserEndpoint.DELETE}/${id}`;
    const response = await remove<Response>(url);
    return response;
  };

  return {
    getByFilters,
    insertRecord,
    deleteRecord,
  };
};
