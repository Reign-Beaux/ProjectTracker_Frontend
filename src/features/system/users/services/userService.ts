import { ResponseData, useHttpClient } from "application/settings/http-client";
import { User } from "../models";
import { UserFilter } from "../components/filters/models";

enum UserEndpoint {
  GET_BY_FILTERS = "Users/GetByFilters",
}

export const useUserService = () => {
  const { post } = useHttpClient();

  const getByFilters = async (payload: UserFilter) => {
    const response = await post<ResponseData<User[]>, UserFilter>(
      UserEndpoint.GET_BY_FILTERS,
      payload
    );
    return response.data;
  };

  return {
    getByFilters,
  };
};
