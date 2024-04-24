import { Button, Icon } from "application/components/elements";
import { ReactNode } from "react";
import "./styles.css";

interface FiltersContainerProps {
  inputs: ReactNode[];
}

export const FiltersContainer = ({ inputs }: FiltersContainerProps ) => {
  return <div className="filters__grid">
    {inputs.map(i => <>{i}</>)}
    <div style={{ display: "flex", alignItems: "flex-end", height: "3rem" }}>
      <Button type="submit" style={{ width: "100%", height: "2.25rem" }}>
        <span style={{marginRight: "0.5rem"}}>Buscar</span>
        <Icon type="search" />
      </Button>
    </div>
  </div>
}