import { useFiltersForm } from "./hooks"

export const FiltersHandler = () => {
  const submitForm = async () => {

  }

  const filtersForm = useFiltersForm({ submitForm })

  return { ...filtersForm }
}