import { Button, Icon } from "application/components/elements";
import { Fragment, ReactNode } from "react";
import "./styles.css";

interface FiltersContainerProps {
  inputs: ReactNode[];
}

export const FiltersContainer = ({ inputs }: FiltersContainerProps) => {
  return (
    <div className="filters__grid">
      {inputs.map((i, index) => (
        <Fragment key={index}>{i}</Fragment>
      ))}
      <div className="filters__grid__container-button">
        <Button type="submit">
          <span style={{ marginRight: "0.5rem" }}>Buscar</span>
          <Icon type="search" />
        </Button>
      </div>
    </div>
  );
};
