import { Link } from "application/components/elements/link/Link";
import { PagePaths } from "application/libs/react-router-dom";
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
      <div className="layout__sidenav__container__features">
        <Link to={PagePaths.DASHBOARD} className="layout__sidenav__feature">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};
