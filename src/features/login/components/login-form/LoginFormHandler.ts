import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormSettings } from "./hooks";
import { AuthResponse, CredentialsRequest } from "./models";

export const useLoginFormHandler = () => {
  const { setCustomer, clearCustomer, setInvalidToken, invalidToken } = useCustomerStore();
  const { showSnackbarError } = useSnackbarStore();
  const { post } = useAxios();
  const navigate = useNavigate();

  const sendCredentials = async (values: CredentialsRequest) => {
    try {
      const response = await post<ResponseData<AuthResponse>, CredentialsRequest>(
        LoginEndpoints.LOGIN,
        values
      );
      saveJwt(response.data.token);
      setCustomer({
        nombre: response.data.name,
        access: response.data.access,
      });
      navigate(PagePaths.SIGN_CONTRACT);
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error.message;
      showSnackbarError(message);
    }
  };

  const formSettings = useFormSettings({ sendCredentials });

  useEffect(() => {
    if (invalidToken)
      showSnackbarError("La sesión ha caducado, vuelva a ingresar sus credenciales.");

    removeJwt();
    clearCustomer();
    setInvalidToken(false);
  }, []);

  return formSettings;
};