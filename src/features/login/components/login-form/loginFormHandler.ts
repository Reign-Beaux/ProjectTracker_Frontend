import { PagePaths } from "application/libs/react-router-dom";
import { useSnackbarStore } from "application/libs/zustand";
import { useNavigate } from "react-router-dom";
import { useLoginService } from "../../loginService";
import { CredentialsRequest } from "./dtos/requests";
import { useCredentialsForm } from "./hooks";

export const useLoginFormHandler = () => {
  const { showSnackbar } = useSnackbarStore();
  const { sendCredentials } = useLoginService();
  const navigate = useNavigate();

  const submitCredentialsForm = async (values: CredentialsRequest) => {
    try {
      await sendCredentials(values);
      navigate(PagePaths.DASHBOARD);
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error.message;
      showSnackbar(message, "warning");
    }
  };

  const credentialsForm = useCredentialsForm({ submitCredentialsForm });

  return { ...credentialsForm };
};
