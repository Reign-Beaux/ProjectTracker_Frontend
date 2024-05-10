import { Context, ReactNode, createContext, useContext, useState } from "react";
import { UserFilter, userFilterEmpty } from "./components/users-filters/dtos/requests";
import { UserTable } from "./components/users-filters/dtos/responses";
import { Pagination } from "application/components/elements/table/models";
import { GridSortModel } from "@mui/x-data-grid";

interface ProviderProps {
  children: ReactNode;
}

export interface StateProps {
  usersTable: UserTable[];
  usersFilter: UserFilter;
  pagination: Pagination;
  sort: GridSortModel;
}

interface StateContext {
  state: StateProps;
  setState: (newState: StateProps) => void;
}

const stateEmpty: StateProps = {
  usersTable: [],
  usersFilter: { ...userFilterEmpty },
  pagination: {} as Pagination,
  sort: [] as GridSortModel,
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
