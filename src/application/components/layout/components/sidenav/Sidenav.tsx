import { useLayoutContext } from "../../context";
import "./styles.css";

export const Sidenav = () => {
  const { toggledSidenav } = useLayoutContext();
  
  const sidenavClass = "layout__sidenav" + (toggledSidenav ? " toggled" : "");

  return (
    <nav className={sidenavClass}>
      <h1>Sidenav working!</h1>
    </nav>
  );
};
