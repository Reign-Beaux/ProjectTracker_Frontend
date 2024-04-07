import { ReactNode } from "react";
import { Header, Sidenav } from "./components";
import { LayoutProvider } from "./context";
import "./styles.css";

interface LayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: LayoutProps) => {
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
