import { Link as MuiLink, LinkProps as MuiLinkProps, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./styles.css";

export interface LinkProps extends MuiLinkProps {
  to: string;
}

export const Link = ({ children, className, to, ...props }: LinkProps) => {
  const [linkClass, setLinkClass] = useState("link");

  useEffect(() => {
    if (Boolean(className)) {
      setLinkClass(`link ${className}`);
    }
  }, []);

  return (
    <MuiLink component={RouterLink} to={to} className={linkClass} {...props}>
      <Typography component="div" sx={{ userSelect: "none" }}>
        {children}
      </Typography>
    </MuiLink>
  );
};
