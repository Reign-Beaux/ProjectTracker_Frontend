import { IconButton, Typography } from "@mui/material";
import { Icon } from "application/components/elements";
import { useMainLayoutContext } from "../../context";
import "./styles.css";

export const Header = () => {
  const { setIsOpenSidenav } = useMainLayoutContext();

  const projectName = "Project Tracker";

  return (
    <header className="main-layout__header">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setIsOpenSidenav((prev) => !prev)}>
        <Icon type="menu" />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ userSelect: "none", flexGrow: 1 }}>
        {projectName}
      </Typography>
      <Typography component="div" sx={{ userSelect: "none" }}>
        Brenda Lizbeth Vazquez Tolentino
      </Typography>
    </header>
  );
};
