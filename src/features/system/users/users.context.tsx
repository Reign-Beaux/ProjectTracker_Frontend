import { Context, ReactNode, createContext, useContext, useState } from "react";
import { UserFilter, userFilterEmpty } from "./components/users-filters/dtos/requests";
import { UserTable } from "./components/users-filters/dtos/responses";
import { TableSettings } from "application/components/elements/table/table.handler";

interface ProviderProps {
  children: ReactNode;
}

export interface StateProps {
  usersTable: UserTable[];
  usersFilter: UserFilter;
  usersTableSettings: TableSettings;
}

interface StateContext {
  state: StateProps;
  setState: (newState: StateProps) => void;
}

const stateEmpty: StateProps = {
  usersTable: [],
  usersFilter: { ...userFilterEmpty },
  usersTableSettings: {} as TableSettings
};

const stateContextEmpty: StateContext = {
  state: stateEmpty,
  setState: () => {},
};

const UsersContext: Context<StateContext> = createContext({ ...stateContextEmpty });

export const UsersProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState({ ...stateEmpty });

  const handleSetState = (newState: StateProps) => {
    setState((prev) => {
      return { ...prev, ...newState };
    });
  };

  return (
    <UsersContext.Provider value={{ state, setState: handleSetState }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);

  if (!Boolean(context)) throw new Error("useUsersContext must be used within UsersProvider");

  return context;
};
