import { ReactNode, useEffect } from "react";
import { Aside, Header } from "./components";
import { MainLayoutProvider } from "./context";

interface MainLayoutProps {
  children: ReactNode;
  title: string;
}

export const MainLayout = ({ children, title }: MainLayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <MainLayoutProvider>
      <Header />
      <div style={{ height: "calc(100vh - 4rem)", display: "flex" }}>
        <Aside />
        <main style={{flex: 1, padding: "1rem"}}>{children}</main>
      </div>
    </MainLayoutProvider>
  );
};
