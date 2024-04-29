import { ReactNode } from "react";

interface AuthGuardProps {
  component: ReactNode;
}

export const AuthGuard = ({ component }: AuthGuardProps) => {
  return <>{component}</>;
};