import { useAxios } from "libs/axios";
import { useSnackbarStore } from "libs/zustand";
import { ResponseData } from "models/responseData";
import { LoginEndpoints } from "static/endpoints";
import { useFormSettings } from "./hooks";
import { AuthResponse, CredentialsRequest } from "./models";

export const useLoginFormHandler = () => {
  const { showSnackbarError } = useSnackbarStore();
  const { post } = useAxios();

  const sendCredentials = async (values: CredentialsRequest) => {
    try {
      const response = await post<ResponseData<AuthResponse>, CredentialsRequest>(
        LoginEndpoints.LOGIN,
        values
      );
      console.log(response)
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error.message;
      showSnackbarError(message);
    }
  };

  const formSettings = useFormSettings({ sendCredentials });

  return formSettings;
};