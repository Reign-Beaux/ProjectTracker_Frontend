import { EMAIL_VALIDATOR, PASSWORD_VALIDATOR } from "application/regex/regex";
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

  const testPassword = (value: Yup.Maybe<string | undefined>) => {
    let evaluate = true;

    if (idUser === 0 && value === undefined) {
      evaluate = false;
    }

    return evaluate;
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("En Nombre es un campo requerido."),
    paternalLastname: Yup.string().required("En Apellido Paterno es un campo requerido."),
    maternalLastname: Yup.string().required("En Apellido Materno es un campo requerido."),
    email: Yup.string()
      .required("En Email es un campo requerido.")
      .matches(EMAIL_VALIDATOR, "La estructura del correo Email es incorrecta."),
    password: Yup.string()
      .notRequired()
      .matches(
        PASSWORD_VALIDATOR,
        "La contraseña no cumple con los requisitos mínimos: Solo debe contener caracteres alfanuméricos, al menos una mayúscula, una minúscula y al menos un dígito."
      )
      .test({
        name: "password",
        exclusive: false,
        message: "La contraseña es un campo requerido.",
        test: testPassword,
      }),
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
