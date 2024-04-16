import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { Icon, Link } from "application/components/elements";
import { useState } from "react";
import { Feature } from "../models";
import "./styles.css";

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
      {feature.children.length > 0 ? (
        <ListItemButton onClick={expandItem}>
          <ListItemText primary={feature.name} />
          <Icon type={open ? "expandLess" : "expandMore"} />
        </ListItemButton>
      ) : (
        <Link to={feature.path!} className="item__link">
          {feature.name}
        </Link>
      )}

      {feature.children.length > 0 && (
        <Collapse key={feature.name} in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {feature.children.map((children) => (
              <div
                key={children.name}
                style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Link
                  to={children.path!}
                  className="item__link"
                  sx={{
                    marginLeft: "1rem",
                  }}>
                  {children.name}
                </Link>
              </div>
            ))}
          </List>
        </Collapse>
      )}
    </div>
  );
};
