import { Input } from "application/components/elements";
import { FiltersContainer } from "application/components/shared";
import { useFiltersHandler } from "./usersFilters.handler";
import "./styles.css";

export const Filters = () => {
  const filtersForm = useFiltersHandler();

  return (
    <form className="user-filters-form" onSubmit={filtersForm.handleSubmit}>
      <FiltersContainer
        inputs={[
          <Input inputKey="userName" inputText="Usuario" formSettings={filtersForm} />,
          <Input inputKey="name" inputText="Nombre" formSettings={filtersForm} />,
          <Input
            inputKey="paternalLastname"
            inputText="Apellido Paterno"
            formSettings={filtersForm}
          />,
          <Input
            inputKey="maternalLastname"
            inputText="Apellido Materno"
            formSettings={filtersForm}
          />,
          <Input inputKey="email" inputText="Correo electrónico" formSettings={filtersForm} />,
        ]}
      />
    </form>
  );
};
