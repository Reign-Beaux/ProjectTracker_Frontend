import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { Icon } from "application/components/elements";
import { useNavigate } from "react-router-dom";
import { Feature } from "../models";
import "./styles.css";

interface ItemProps {
  feature: Feature;
  features: Feature[];
  setFeatures: (features: Feature[]) => void;
}

export const Item = ({ feature, features, setFeatures }: ItemProps) => {
  const navigate = useNavigate();

  const selectItem = (id: number, to: string) => {
    let currentFeatures = [...features];
    currentFeatures.forEach((currentFeature) => {
      currentFeature.isSelected = currentFeature.id === id;
      currentFeature.children.forEach((child) => {
        child.isSelected = child.id === id;
      });
    });
    setFeatures([...currentFeatures]);
    navigate(to);
  };

  const openItem = (id: number) => {
    let currentFeatures = [...features];
    currentFeatures.forEach((currentFeature) => {
      currentFeature.isOpen = currentFeature.id === id ? !currentFeature.isOpen : false;
      currentFeature.children.forEach((child) => {
        child.isOpen = currentFeature.id === id ? !currentFeature.isOpen : false;
      });
    });

    setFeatures([...currentFeatures]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {feature.children.length > 0 ? (
        <ListItemButton onClick={() => openItem(feature.id)} className="item__button">
          <ListItemText primary={feature.name} />
          <Icon type={feature.isOpen ? "expandLess" : "expandMore"} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => selectItem(feature.id, feature.path!)}
          className={"item__link" + (feature.isSelected ? " item--selected" : "")}>
          <ListItemText primary={feature.name} />
        </ListItemButton>
      )}

      {feature.children.length > 0 && (
        <Collapse key={feature.id} in={feature.isOpen} timeout="auto" unmountOnExit>
          <List disablePadding>
            {feature.children.map((children) => (
              <div
                key={children.id}
                style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <ListItemButton
                  onClick={() => selectItem(children.id, children.path!)}
                  className={"item__link" + (children.isSelected ? " item--selected" : "")}
                  sx={{ marginLeft: "1rem" }}>
                  <ListItemText primary={children.name} />
                </ListItemButton>
              </div>
            ))}
          </List>
        </Collapse>
      )}
    </div>
  );
};
