import { useFormik } from "formik";
import * as Yup from "yup";
import { UserInsertUpdateRequest, userInsertUpdateEmpty } from "../../../dtos/requests";

export interface UserInsertUpdateFormProps {
  submitUserInsertUpdateForm: (values: UserInsertUpdateRequest) => Promise<void>;
}

interface FormValues extends UserInsertUpdateRequest {}

export const useUserInsertUpdateForm = ({
  submitUserInsertUpdateForm,
}: UserInsertUpdateFormProps) => {
  const initialValues: FormValues = { ...userInsertUpdateEmpty };

  const validationSchema = Yup.object({
    name: Yup.string().required("En Nombre es un campo requerido."),
    paternalLastname: Yup.string().required("En Apellido Paterno es un campo requerido."),
    maternalLastname: Yup.string().required("En Apellido Materno es un campo requerido."),
    email: Yup.string().required("En Email es un campo requerido."),
  });

  const userInsertUpdateForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitUserInsertUpdateForm,
  });

  return {
    ...userInsertUpdateForm,
  };
};
