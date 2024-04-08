import {
  Context,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextProps {
  toggledSidenav: boolean;
  setToggledSidenav: Dispatch<SetStateAction<boolean>>;
}

const contextEmptyState: ContextProps = {
  toggledSidenav: false,
  setToggledSidenav: () => {},
};

const LayoutContext: Context<ContextProps> = createContext(contextEmptyState);

export const LayoutProvider = ({ children }: ContextProviderProps) => {
  const [toggledSidenav, setToggledSidenav] = useState(false);

  return (
    <LayoutContext.Provider value={{ toggledSidenav, setToggledSidenav }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);

  if (!context) throw Error("This component is not found inside LayoutContext");

  return context;
};
