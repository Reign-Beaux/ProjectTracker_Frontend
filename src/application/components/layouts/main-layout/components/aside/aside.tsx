import { Collapse, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { useMainLayoutContext } from "../../context";
import { Feature } from "./models";
import "./styles.css";
import { Item } from "./components";

const features: Feature[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    children: [],
  },
  {
    name: "System",
    children: [
      {
        name: "Users",
        path: "/system/users",
        children: [],
      },
      {
        name: "Roles",
        path: "/system/roles",
        children: [],
      },
      {
        name: "Features",
        path: "/system/features",
        children: [],
      },
    ],
  },
];

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
        {features.map((feature) => (
          <ListItem key={feature.name} disablePadding>
            <Item feature={feature} />
          </ListItem>
        ))}
      </List>
    </aside>
  );
};
