import { FiltersContainer } from "application/components/shared";
import { useRolesFiltersHandler } from "./rolesFiltesHandler";
import "./styles.css";
import { Input } from "application/components/elements";

export const RolesFilters = () => {
  const filtersForm = useRolesFiltersHandler();

  return (
    <form className="roles-filters-form" onSubmit={filtersForm.handleSubmit}>
      <FiltersContainer
        inputs={[
          <Input inputKey="code" inputText="Código" formSettings={filtersForm} />,
          <Input inputKey="name" inputText="Nombre" formSettings={filtersForm} />,
        ]}
      />
    </form>
  );
};
