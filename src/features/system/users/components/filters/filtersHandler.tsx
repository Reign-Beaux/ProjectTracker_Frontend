import { useFiltersForm } from "./hooks"

export const useFiltersHandler = () => {
  const submitForm = async () => {

  }

  const filtersForm = useFiltersForm({ submitForm })

  return { ...filtersForm }
}