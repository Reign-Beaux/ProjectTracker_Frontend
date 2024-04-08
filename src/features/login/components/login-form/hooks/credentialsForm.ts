import { FormSettings } from "application/libs/formik/models";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CredentialsRequest, credentialsRequestEmpty } from "../models";

export interface useFormSettingsProps {
  submitCredentialsForm: (values: CredentialsRequest) => Promise<void>;
}

interface FormValues extends CredentialsRequest {}

export const useCredentialsForm = ({ submitCredentialsForm }: useFormSettingsProps) => {
  const initialValues: FormValues = { ...credentialsRequestEmpty };

  const validationSchema = Yup.object({
    usernameOrEmail: Yup.string().required("El Usuario es un campo requerido."),
    password: Yup.string().required("La Contraseña es un campo requerido."),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitCredentialsForm,
  });

  return {
    handleSubmit: formik.handleSubmit,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    setFieldValue: formik.setFieldValue,
    touched: formik.touched,
    values: formik.values,
    errors: formik.errors,
    isSubmitting: formik.isSubmitting,
    isValid: formik.isValid,
  } as FormSettings;
};
