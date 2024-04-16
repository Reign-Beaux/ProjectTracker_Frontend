import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { Icon, Link } from "application/components/elements";
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
      {feature.children.length > 0 ? (
        <ListItemButton onClick={expandItem}>
          <ListItemText primary={feature.name} />
          <Icon type={open ? "expandLess" : "expandMore"} />
        </ListItemButton>
      ) : (
        <Link
          to={feature.path!}
          sx={{
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
            color: "inherit !important",
            padding: "0.5rem 1rem",
          }}>
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
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                    color: "inherit !important",
                    padding: "0.5rem 1rem",
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
