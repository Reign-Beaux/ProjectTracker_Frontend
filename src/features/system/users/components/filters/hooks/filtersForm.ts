import { UserFilter, userFilterEmpty } from "../models";
import { useFormik } from "formik";
import * as Yup from "yup";

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
}