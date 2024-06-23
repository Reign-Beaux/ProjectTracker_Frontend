import { ResponseData, useAxios } from "application/libs/axios";
import { CredentialsRequest } from "./components/login-form/dtos/requests";
import { AuthResponse } from "./components/login-form/dtos/responses";

enum LoginEndpoints {
  LOGIN = "Auth/Login",
}

export const useLoginService = () => {
  const { post } = useAxios();

  const sendCredentials = async (payload: CredentialsRequest) => {
    const response = await post<ResponseData<AuthResponse>, CredentialsRequest>(
      LoginEndpoints.LOGIN,
      payload,
      true
    );

    return response;
  };

  return { sendCredentials };
};
