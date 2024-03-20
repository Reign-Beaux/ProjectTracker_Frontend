import { useLayoutContext } from "../../context";
import "./styles.css";

export const Sidenav = () => {
  const { toggledSidenav } = useLayoutContext();

  const sidenavClass = "layout__sidenav" + (toggledSidenav ? " toggled" : "");

  const name = "Brenda Lizbeth Vazquez Tolentino";

  return (
    <nav className={sidenavClass}>
      <img src="assets/logo-transparent.png" className="layout__sidenav__logo" />
      <div className="layout__sidenav__container__profile">
        <img src="assets/profile-default.webp" className="layout__sidenav__profile_picture" />
        <div className="layout__sidenav__profile_name">{name}</div>
        <small>Web Developer</small>
      </div>
      <div className="layout__sidenav__features">
        
      </div>
    </nav>
  );
};
