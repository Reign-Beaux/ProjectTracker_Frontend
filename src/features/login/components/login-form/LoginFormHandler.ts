//#region imports
import { useAxios } from "libs/axios";
import { PagePaths } from "libs/react-router-dom";
import { useSnackbarStore } from "libs/zustand";
import { ResponseData } from "models/responseData";
import { useNavigate } from "react-router-dom";
import { LocalStorageKeys } from "static/LocalStorageKes";
import { LoginEndpoints } from "static/endpoints";
import { encryptData } from "utils/helpers/CriptographyHelper";
import { localStorageSave } from "utils/helpers/LocalStorageHelper";
import { useFormSettings } from "./hooks";
import { AuthResponse, CredentialsRequest } from "./models";
//#endregion

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
