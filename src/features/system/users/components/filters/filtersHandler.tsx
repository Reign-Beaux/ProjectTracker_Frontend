import { useFiltersForm } from "./hooks"

export const useFiltersHandler = () => {
  const submitForm = async () => {
    alert(":D")
  }

  const filtersForm = useFiltersForm({ submitForm })

  return { ...filtersForm }
}