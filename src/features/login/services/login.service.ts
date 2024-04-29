import { ResponseData, useAxios } from "application/libs/axios";
import { AuthResponse, CredentialsRequest } from "../components/login-form/dtos";

enum LoginEndpoints {
  LOGIN = "Auth/Login",
}

export const useLoginService = () => {
  const { post } = useAxios();

  const sendCredentials = async (payload: CredentialsRequest) => {
    const response = await post<ResponseData<AuthResponse>, CredentialsRequest>(
      LoginEndpoints.LOGIN,
      payload
    );

    return response;
  };

  return { sendCredentials };
};
