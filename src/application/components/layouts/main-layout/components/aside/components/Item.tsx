import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { Icon } from "application/components/elements";
import { useState } from "react";
import { Feature } from "../models";

interface ItemProps {
  feature: Feature;
}

export const Item = ({ feature }: ItemProps) => {
  const [open, setOpen] = useState(false);

  const expandItem = () => {
    if (feature.children.length == 0) return;

    setOpen((prev) => !prev);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <ListItemButton onClick={expandItem}>
        <ListItemText primary={feature.name} />
        {feature.children.length > 0 && <Icon type={open ? "expandLess" : "expandMore"} />}
      </ListItemButton>
      {feature.children.length > 0 && (
        <Collapse key={feature.name} in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {feature.children.map((children) => (
              <ListItemButton style={{ marginLeft: "1rem" }}>
                <ListItemText primary={children.name} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </div>
  );
};
