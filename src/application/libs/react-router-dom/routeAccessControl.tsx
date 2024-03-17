import { ReactNode } from "react";

interface RouteAccessControlProps {
  component: ReactNode;
}

export const RouteAccessControl = ({ component }: RouteAccessControlProps) => {
  return <>{component}</>;
};
