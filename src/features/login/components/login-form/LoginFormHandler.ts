import { encryptData, localStorageSave } from "application/helpers";
import { LocalStorageKeys } from "application/helpers/local-storage/localStorageKeys";
import { useSnackbarStore } from "application/settings/global-state";
import { PagePaths } from "application/settings/routes";
import { useNavigate } from "react-router-dom";
import { useLoginService } from "../../services";
import { useCredentialsForm } from "./hooks";
import { CredentialsRequest } from "./models";

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
