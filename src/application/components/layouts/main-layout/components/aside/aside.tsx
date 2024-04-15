import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Icon } from "application/components/elements";
import { useEffect, useState } from "react";
import { useMainLayoutContext } from "../../context";
import "./styles.css";

export const Aside = () => {
  const { isOpenSidenav } = useMainLayoutContext();
  const [asideClass, setAsideClass] = useState("main-layout__aside");

  const hideSidenav = () => {
    const currentClass = isOpenSidenav ? "main-layout__aside show-aside" : "main-layout__aside";
    setAsideClass(currentClass);
  };

  useEffect(() => {
    hideSidenav();
  }, [isOpenSidenav]);

  return (
    <aside className={asideClass}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon type={index % 2 === 0 ? "inbox" : "main"} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </aside>
  );
};
