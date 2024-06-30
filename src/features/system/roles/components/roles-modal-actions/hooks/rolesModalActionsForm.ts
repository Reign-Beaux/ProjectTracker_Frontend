import { Role, roleEmpty } from "../../../models";
import { useFormik } from "formik";
import * as Yup from "yup";

interface UseRolesModalActionsFormProps {
  onSubmit: (values: Role) => Promise<void>;
}

interface FormValues extends Role {}

export const useRolesModalActionsForm = ({ onSubmit }: UseRolesModalActionsFormProps) => {
  const initialValues: FormValues = { ...roleEmpty };

  const validationSchema = Yup.object({
    code: Yup.string().required("En Código es un campo requerido."),
    name: Yup.string().required("En Nombre es un campo requerido."),
  });

  const formSettings = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmit,
  });

  return {
    ...formSettings,
  };
};
