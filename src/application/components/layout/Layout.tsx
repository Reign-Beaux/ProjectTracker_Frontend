import { ReactNode } from "react";
import { Header, Sidenav } from "./components";
import "./styles.css";
import { LayoutProvider } from "./context";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutProvider>
      <div className="layout__container">
        <Sidenav />
        <main className="layout__content">
          <Header />
          {children}
        </main>
      </div>
    </LayoutProvider>
  );
};
