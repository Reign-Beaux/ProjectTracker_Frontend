import { ReactNode, useEffect } from "react";
import { Aside, Header } from "./components";

interface MainLayoutProps {
  children: ReactNode;
  title: string;
}

export const MainLayout = ({ children, title }: MainLayoutProps) => {

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <Header />
      <div style={{height: "calc(100vh - 4rem)", display: "flex"}}>
        <Aside />
        <main>{children}</main>
      </div>
    </>
  );
};
