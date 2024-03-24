import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./styles.css";

interface LinkProps {
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
