import { ResponseData, useAxios } from "application/libs/axios";
import { Role } from "./models/roles";
import { SettingsTable } from "./rolesContext";

const CONTROLLER = "Roles";

enum Endpoint {
  GET_BY_FILTERS = "GetByFilters",
}

export const useRolesService = () => {
  const { get, post, put, remove } = useAxios();

  const getByFilters = async (payload: SettingsTable) => {
    const response = await post<ResponseData<Role[]>, SettingsTable>(
      `${CONTROLLER}/${Endpoint.GET_BY_FILTERS}`,
      payload
    );

    return response.data;
  };

  const getById = async (id: number) => {
    const url = `${CONTROLLER}/${id}`;
    const response = await get<ResponseData<Role>>(url);

    return response.data;
  };

  const insertRecord = async (payload: Role) =>
    await post<ResponseData<Role>, Role>(CONTROLLER, payload);

  const updateRecord = async (payload: Role) =>
    await put<ResponseData<Role>, Role>(CONTROLLER, payload);

  const deleteRecord = async (id: number) => {
    const url = `${CONTROLLER}/${id}`;

    return await remove<ResponseData<Role>>(url);
  };

  return {
    getByFilters,
    getById,
    insertRecord,
    updateRecord,
    deleteRecord,
  };
};
