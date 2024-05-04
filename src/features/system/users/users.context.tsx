import {
  Context,
  ReactNode,
  createContext,
  useContext,
  useState
} from "react";
import { UserTable } from "./components/users-filters/dtos/responses";

interface ProviderProps {
  children: ReactNode;
}

interface StateProps {
  usersTable: UserTable[];
}

interface StateContext {
  state: StateProps;
  setState: (newState: StateProps) => void;
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

  const handleSetState = (newState: StateProps) => {
    setState((prev) => {
      return { ...prev, ...newState };
    });
  };

  return <UsersContext.Provider value={{ state, setState: handleSetState }}>{children}</UsersContext.Provider>;
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);

  if (!Boolean(context)) throw new Error("useUsersContext must be used within UsersProvider");

  return context;
};
