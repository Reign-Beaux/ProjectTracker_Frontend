import { ResponseData, useAxios } from "application/libs/axios";
import { UserTable } from "./components/users-filters/dtos/responses";
import { UserGetByFiltersRequest, UserInsertUpdateRequest } from "./dtos/requests";

enum UserEndpoint {
  BASE = "Users",
  GET_BY_FILTERS = "Users/GetByFilters",
}

export const useUsersService = () => {
  const { get, post, put, remove } = useAxios();

  const getRecordById = async (id: number) => {
    const url = `${UserEndpoint.BASE}/${id}`;
    const response = await get<ResponseData<UserInsertUpdateRequest>>(url);

    return response.data;
  };

  const getByFilters = async (payload: UserGetByFiltersRequest) => {
    const response = await post<ResponseData<UserTable[]>, UserGetByFiltersRequest>(
      UserEndpoint.GET_BY_FILTERS,
      payload
    );

    return response.data;
  };

  const insertRecord = async (payload: UserInsertUpdateRequest) =>
    await post<Response, UserInsertUpdateRequest>(UserEndpoint.BASE, payload);

  const updateRecord = async (payload: UserInsertUpdateRequest) =>
    await put<Response, UserInsertUpdateRequest>(UserEndpoint.BASE, payload);

  const deleteRecord = async (id: number) => {
    const url = `${UserEndpoint.BASE}/${id}`;

    return await remove<Response>(url);
  };

  return {
    getRecordById,
    getByFilters,
    insertRecord,
    updateRecord,
    deleteRecord,
  };
};
