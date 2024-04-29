import { ReactNode, useEffect } from "react";
import { Aside, Header } from "./components";
import { MainLayoutProvider } from "./context";
import "./styles.css";

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
      <div className="main-layout__container">
        <Aside />
        <main className="main-layout__main">
          <section className="main-layout__main__section">{children}</section>
        </main>
      </div>
    </MainLayoutProvider>
  );
};
