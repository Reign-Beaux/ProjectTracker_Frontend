import { encryptData, localStorageSave } from "application/helpers";
import { LocalStorageKeys } from "application/helpers/local-storage/localStorageKeys";
import { useAxios } from "application/libs/axios";
import { PagePaths } from "application/libs/react-router-dom";
import { useSnackbarStore } from "application/libs/zustand";
import { ResponseData } from "application/libs/axios/models/responseData";
import { LoginEndpoints } from "application/static/endpoints";
import { useNavigate } from "react-router-dom";
import { useFormSettings } from "./hooks";
import { AuthResponse, CredentialsRequest } from "./models";

export const useLoginFormHandler = () => {
  const { showSnackbarError } = useSnackbarStore();
  const { post } = useAxios();
  const navigate = useNavigate();

  const sendCredentials = async (values: CredentialsRequest) => {
    const payload = { ...values };
    payload.password = encryptData(values.password);
    try {
      const response = await post<ResponseData<AuthResponse>, CredentialsRequest>(
        LoginEndpoints.LOGIN,
        payload
      );
      localStorageSave(LocalStorageKeys.TOKEN_SESSION, response.data.token);
      navigate(PagePaths.DASHBOARD);
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error.message;
      showSnackbarError(message);
    }
  };

  const formSettings = useFormSettings({ sendCredentials });

  return formSettings;
};
