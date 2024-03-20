import { Layout } from "application/components/layout";
import { ReactNode } from "react";

interface RouteAccessControlProps {
  component: ReactNode;
  noLayout?: boolean;
}

export const RouteAccessControl = ({ component, noLayout }: RouteAccessControlProps) => {
  return <>{noLayout ? component : <Layout>{component}</Layout>}</>;
};
