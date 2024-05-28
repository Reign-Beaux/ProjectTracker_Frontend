import { useFormik } from "formik";
import * as Yup from "yup";
import { UserInsertUpdateRequest, userInsertUpdateEmpty } from "../../../dtos/requests";

export interface UserInsertUpdateFormProps {
  submitUserInsertUpdateForm: (values: UserInsertUpdateRequest) => Promise<void>;
  idUser: number;
}

interface FormValues extends UserInsertUpdateRequest {}
//true: la validación está bien, false: no cumple con las validaciones
export const useUserInsertUpdateForm = ({
  submitUserInsertUpdateForm,
  idUser,
}: UserInsertUpdateFormProps) => {
  const initialValues: FormValues = { ...userInsertUpdateEmpty };

  const validationSchema = Yup.object({
    name: Yup.string().required("En Nombre es un campo requerido."),
    paternalLastname: Yup.string().required("En Apellido Paterno es un campo requerido."),
    maternalLastname: Yup.string().required("En Apellido Materno es un campo requerido."),
    email: Yup.string().required("En Email es un campo requerido."),
    password: Yup.string().notRequired().test({
      name: "password",
      exclusive: false,
      message: "La contraseña es un campo requerido",
      test: (value) => {
        console.log(value);
        return !(idUser === 0 && value?.length === 0);
      },
    }
)
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
