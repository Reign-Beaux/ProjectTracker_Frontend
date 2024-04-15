import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Icon } from "application/components/elements";
import { useMainLayoutContext } from "../../context";

export const Header = () => {
  const { setIsOpenSidenav } = useMainLayoutContext();

  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsOpenSidenav((prev) => !prev)}>
            <Icon type="menu" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
