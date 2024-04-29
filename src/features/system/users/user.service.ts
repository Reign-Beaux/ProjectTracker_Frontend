import { ResponseData, useAxios } from "application/libs/axios";
import { UserFilter } from "./components/filters/dtos";
import { User } from "./models";

enum UserEndpoint {
  GET_BY_FILTERS = "Users/GetByFilters",
}

export const useUserService = () => {
  const { post } = useAxios();

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
