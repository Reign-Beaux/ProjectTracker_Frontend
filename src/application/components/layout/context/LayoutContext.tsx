import { ContextProviderProps } from "@/application/models";
import { Context, createContext, useContext, useState } from "react";

interface ContextProps {
  toggleSidenav: boolean;
  setToggleSidenav: Function;
}

const contextEmptyState: ContextProps = {
  toggleSidenav: false,
  setToggleSidenav: () => {},
};

const LayoutContext: Context<ContextProps> = createContext(contextEmptyState);

export const LayoutProvider = ({ children }: ContextProviderProps) => {
  const [toggleSidenav, setToggleSidenav] = useState(false);

  return (
    <LayoutContext.Provider value={{ toggleSidenav, setToggleSidenav }}>
      {children}
    </LayoutContext.Provider>
  );
}

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);

  if (!context) throw Error("This component is not found inside LayoutContext");

  return context;
}