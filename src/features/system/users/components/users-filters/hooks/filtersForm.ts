import { useFormik } from "formik";
import { ObjectSchema, object, string } from 'yup';
import { UserFilter, userFilterEmpty } from "../dtos/requests";

interface FiltersFormProps {
  submitForm: (values: UserFilter) => Promise<void>;
}

interface FormValues extends UserFilter {}

export const useFiltersForm = ({ submitForm }: FiltersFormProps) => {
  const initialValues: FormValues = { ...userFilterEmpty };

  const validationSchema: ObjectSchema<FormValues> = object({
    userName: string().default(""),
    name: string().default(""),
    email: string().default(""),
    paternalLastname: string().default(""),
    maternalLastname: string().default(""),
  });

  const filtersForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitForm,
  });

  return { ...filtersForm };
};
