import { Button, Icon, Input } from "application/components/elements";
import { useFiltersHandler } from "./filtersHandler";
import "./styles.css";

export const Filters = () => {
  const filtersForm = useFiltersHandler();

  return (
    <form className="user-filters-form" onSubmit={filtersForm.handleSubmit}>
      <div className="user-filters__grid">
        <Input inputKey="userName" inputText="Usuario" formSettings={filtersForm} />
        <Input inputKey="name" inputText="Nombre" formSettings={filtersForm} />
        <Input
          inputKey="paternalLastname"
          inputText="Apellido Paterno"
          formSettings={filtersForm}
        />
        {/* <div></div>
        <div></div> */}
        <Input
          inputKey="maternalLastname"
          inputText="Apellido Materno"
          formSettings={filtersForm}
        />
        <Input inputKey="email" inputText="Correo electrónico" formSettings={filtersForm} />
        <div style={{ display: "flex", alignItems: "flex-end", height: "3rem" }}>
          <Button style={{ width: "100%", height: "2.25rem" }}>
            <span style={{marginRight: "0.5rem"}}>Buscar</span>
            <Icon type="search" />
          </Button>
        </div>
      </div>
    </form>
  );
};
