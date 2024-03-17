import { ReactNode } from "react";
import { Header, Sidenav } from "./components";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout__container">
      <Sidenav />
      <main className="layout__content">
        <Header />
        {children}
      </main>
    </div>
  );
};
