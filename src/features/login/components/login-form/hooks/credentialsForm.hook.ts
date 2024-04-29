import { useFormik } from "formik";
import * as Yup from "yup";
import { CredentialsRequest, credentialsRequestEmpty } from "../models";

export interface CredentialsFormProps {
  submitCredentialsForm: (values: CredentialsRequest) => Promise<void>;
}

interface FormValues extends CredentialsRequest {}

export const useCredentialsForm = ({ submitCredentialsForm }: CredentialsFormProps) => {
  const initialValues: FormValues = { ...credentialsRequestEmpty };

  const validationSchema = Yup.object({
    usernameOrEmail: Yup.string().required("El Usuario es un campo requerido."),
    password: Yup.string().required("La Contraseña es un campo requerido."),
  });

  const credentialsForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitCredentialsForm,
  });

  return {
    ...credentialsForm,
  };
};
