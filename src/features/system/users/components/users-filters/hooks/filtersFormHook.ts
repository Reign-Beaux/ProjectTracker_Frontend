import { useFormik } from "formik";
import * as Yup from "yup";
import { UserFilter, userFilterEmpty } from "../dtos/requests";

interface FiltersFormProps {
  submitForm: (values: UserFilter) => Promise<void>;
}

interface FormValues extends UserFilter {}

export const useFiltersForm = ({ submitForm }: FiltersFormProps) => {
  const initialValues: FormValues = { ...userFilterEmpty };

  const validationSchema = Yup.object({});

  const filtersForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitForm,
  });

  return { ...filtersForm };
};
