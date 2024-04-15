import { Context, Dispatch, ReactNode, createContext, useContext, useState } from "react";

type ProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  isOpenSidenav: boolean;
  setIsOpenSidenav: Dispatch<React.SetStateAction<boolean>>;
};

const contextEmptyState: ContextProps = {
  isOpenSidenav: false,
  setIsOpenSidenav: () => {},
};

const MainLayoutContext: Context<ContextProps> = createContext(contextEmptyState);

export const MainLayoutProvider = ({ children }: ProviderProps) => {
  const [isOpenSidenav, setIsOpenSidenav] = useState(false);
  console.log(isOpenSidenav);
  return (
    <MainLayoutContext.Provider value={{ isOpenSidenav, setIsOpenSidenav }}>
      {children}
    </MainLayoutContext.Provider>
  );
};

export const useMainLayoutContext = () => {
  const context = useContext(MainLayoutContext);

  if (!context) throw Error("This component is not found inside MainLayoutContext");

  return context;
};
