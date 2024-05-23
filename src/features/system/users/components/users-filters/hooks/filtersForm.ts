import { useFormik } from "formik";
import * as Yup from "yup";
import { UserFilter } from "../dtos/requests";

interface FiltersFormProps {
  submitForm: (values: UserFilter) => Promise<void>;
  usersFilter: UserFilter;
}

interface FormValues extends UserFilter {}

export const useFiltersForm = ({ submitForm, usersFilter }: FiltersFormProps) => {
  const initialValues: FormValues = { ...usersFilter };

  const validationSchema = Yup.object({});

  const filtersForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitForm,
  });

  return { ...filtersForm };
};
