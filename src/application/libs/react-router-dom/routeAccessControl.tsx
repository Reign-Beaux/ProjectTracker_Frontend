import { ReactNode } from "react";

interface RouteAccessControlProps {
  element: ReactNode;
}

export const RouteAccessControl = ({ element }: RouteAccessControlProps) => {
  return <>{ element }</>;
}