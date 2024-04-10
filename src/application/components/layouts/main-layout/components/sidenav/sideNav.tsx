import { Anchor, List } from "application/components/elements";
import { Fragment } from "react/jsx-runtime";
import { useLayoutContext } from "../../context";
import "./styles.css";
import { PagePaths } from "application/settings/routes";

interface FeatureDetail {
  name: string;
  path: string;
}

interface Feature extends FeatureDetail {
  childrens: FeatureDetail[];
}

export const Sidenav = () => {
  const { toggledSidenav } = useLayoutContext();

  const sidenavClass = "layout__sidenav" + (toggledSidenav ? " toggled" : "");

  const name = "Brenda Lizbeth Vazquez Tolentino";

  const features: Feature[] = [
    {
      name: "Dashboard",
      path: PagePaths.DASHBOARD,
      childrens: [],
    },
    {
      name: "System",
      path: "",
      childrens: [
        {
          name: "Users",
          path: PagePaths.SYSTEM_USERS,
        },
        {
          name: "Roles",
          path: PagePaths.SYSTEM_ROLES,
        },
      ],
    },
  ];

  return (
    <nav className={sidenavClass}>
      <img src="assets/logo-transparent.png" className="layout__sidenav__logo" />
      <div className="layout__sidenav__container__profile">
        <img src="assets/profile-default.webp" className="layout__sidenav__profile_picture" />
        <div className="layout__sidenav__profile_name">{name}</div>
        <small>Web Developer</small>
      </div>
      <div className="layout__sidenav__container__features">
        {features.map((feature, index) => (
          <Fragment key={index}>
            {feature.path === "" ? (
              <List
                text={feature.name}
                items={feature.childrens.map((child, index) => (
                  <Fragment key={index}>
                    <Anchor to={child.path} className="layout__sidenav__feature">
                      {child.name}
                    </Anchor>
                  </Fragment>
                ))}
              />
            ) : (
              <Anchor to={feature.path} className="layout__sidenav__feature">
                {feature.name}
              </Anchor>
            )}
          </Fragment>
        ))}
      </div>
    </nav>
  );
};
