import { useHttpClient } from "application/libs/axios"
import { ResponseData } from "application/models/response";
import { AuthResponse, CredentialsRequest } from "../components/login-form/models";

enum LoginEndpoints {
  LOGIN = "Auth/Login",
}

export const useLoginService = () => {
  const { post } = useHttpClient();

  const sendCredentials = async (payload: CredentialsRequest) => {
    const response = await post<ResponseData<AuthResponse>, CredentialsRequest>(
      LoginEndpoints.LOGIN,
      payload
    );
    
    return response;
  }

  return { sendCredentials }
}