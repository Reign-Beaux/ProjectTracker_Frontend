import { useAxios } from "libs/axios";
import { useSnackbarStore } from "libs/zustand";
import { ResponseData } from "models/responseData";
import { LoginEndpoints } from "static/endpoints";
import { useFormSettings } from "./hooks";
import { AuthResponse, CredentialsRequest } from "./models";
import { encryptData } from "utils/helpers/CriptographyHelper";

export const useLoginFormHandler = () => {
  const { showSnackbarError } = useSnackbarStore();
  const { post } = useAxios();

  const sendCredentials = async (values: CredentialsRequest) => {
    const payload = {...values};
    payload.password = encryptData(values.password);
    try {
      const response = await post<ResponseData<AuthResponse>, CredentialsRequest>(
        LoginEndpoints.LOGIN,
        payload
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