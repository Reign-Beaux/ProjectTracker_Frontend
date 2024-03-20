import { ReactNode } from "react";
import { NavLinkProps, Link as RouterLink } from "react-router-dom";
import "./styles.css";

interface LinkProps extends NavLinkProps {
  children: ReactNode;
  to: string;
  className?: string;
}

export const Link = ({ children, to, className }: LinkProps) => {
  const linkClass = "link" + (className ? ` ${className}` : "");
  return (
    <RouterLink to={to} className={linkClass}>
      {children}
    </RouterLink>
  );
};
