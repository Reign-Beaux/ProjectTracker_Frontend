import { Context, ReactNode, createContext, useContext, useState } from "react";
import { UserTable } from "./components/users-filters/dtos/responses";

interface ProviderProps {
  children: ReactNode;
}

interface StateProps {
  usersTable: UserTable[];
}

interface StateContext {
  state: StateProps;
  setState: (state: StateProps) => void;
}

const stateEmpty: StateProps = {
  usersTable: [],
};

const stateContextEmpty: StateContext = {
  state: stateEmpty,
  setState: () => {},
};

const UsersContext: Context<StateContext> = createContext({ ...stateContextEmpty });

export const UsersProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState({ ...stateEmpty });

  return <UsersContext.Provider value={{ state, setState }}>{children}</UsersContext.Provider>;
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);

  if (!Boolean(context)) throw new Error("useUsersContext must be used within UsersProvider");

  return context;
};
