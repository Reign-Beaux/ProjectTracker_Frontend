import { LocalStorageKeys, encryptData, localStorageSave } from "application/helpers";
import { PagePaths } from "application/libs/react-router-dom";
import { useSnackbarStore } from "application/libs/zustand";
import { useNavigate } from "react-router-dom";
import { useLoginService } from "../../login.service";
import { CredentialsRequest } from "./dtos/requests";
import { useCredentialsForm } from "./hooks";

export const useLoginFormHandler = () => {
  const { showSnackbar } = useSnackbarStore();
  const { sendCredentials } = useLoginService();
  const navigate = useNavigate();

  const submitCredentialsForm = async (values: CredentialsRequest) => {
    try {
      const payload = { ...values };
      payload.password = encryptData(values.password);
      const response = await sendCredentials(payload);
      localStorageSave(LocalStorageKeys.TOKEN_SESSION, response.data.token);
      navigate(PagePaths.DASHBOARD);
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error.message;
      showSnackbar(message, "error");
    }
  };

  const credentialsForm = useCredentialsForm({ submitCredentialsForm });

  return { ...credentialsForm };
};
