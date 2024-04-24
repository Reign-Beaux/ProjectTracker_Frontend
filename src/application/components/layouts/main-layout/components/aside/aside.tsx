import { List, ListItem } from "@mui/material";
import { useLayoutStore } from "application/settings/global-state";
import { useEffect, useState } from "react";
import { useMainLayoutContext } from "../../context";
import { Item } from "./components";
import "./styles.css";

export const Aside = () => {
  const {
    props: { features },
    setFeatures,
  } = useLayoutStore();
  const { isOpenSidenav } = useMainLayoutContext();
  const [asideClass, setAsideClass] = useState("main-layout__aside");

  const hideSidenav = () => {
    const currentClass = isOpenSidenav ? "main-layout__aside hide-aside" : "main-layout__aside";
    setAsideClass(currentClass);
  };

  useEffect(() => {
    hideSidenav();
  }, [isOpenSidenav]);

  useEffect(() => {
    setFeatures([...features]);
  }, []);

  return (
    <aside className={asideClass}>
      <List>
        {features.map((feature) => (
          <ListItem key={feature.id} disablePadding>
            <Item feature={feature} features={features} setFeatures={setFeatures} />
          </ListItem>
        ))}
      </List>
    </aside>
  );
};
