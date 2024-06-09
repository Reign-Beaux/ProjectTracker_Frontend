import { Context, ReactNode, createContext, useContext } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface StateContext {
}

const stateContextEmpty: StateContext = {};

const RolesContext: Context<StateContext> = createContext({ ...stateContextEmpty });

export const RolesProvider = ({ children }: ProviderProps) => {
  return <RolesContext.Provider value={{}}>{children}</RolesContext.Provider>;
};

export const useRolesContext = () => {
  const context = useContext(RolesContext);

  if (!Boolean(context)) throw new Error("useRolesContext must be used within RolesProvider");

  return context;
};
