import { useFormik } from "formik";
import { ObjectSchema, number, object, string } from "yup";
import { Role, roleEmpty } from "../../../models/roles";

interface FiltersFormProps {
  submitForm: (values: Role) => Promise<void>;
}

interface FormValues extends Role {}

export const useFiltersForm = ({ submitForm }: FiltersFormProps) => {
  const initialValues: FormValues = { ...roleEmpty };

  const validationSchema: ObjectSchema<FormValues> = object({
    id: number().default(0),
    code: string().default(""),
    name: string().default(""),
  });

  const filtersForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitForm,
  });

  return { ...filtersForm };
};
