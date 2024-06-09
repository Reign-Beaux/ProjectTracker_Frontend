import { useFormik } from "formik";
import { ObjectSchema, number, object, string } from "yup";
import { Roles, rolesEmpty } from "../../../models/roles";

interface FiltersFormProps {
  submitForm: (values: Roles) => Promise<void>;
}

interface FormValues extends Roles {}

export const useFiltersForm = ({ submitForm }: FiltersFormProps) => {
  const initialValues: FormValues = { ...rolesEmpty };

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
