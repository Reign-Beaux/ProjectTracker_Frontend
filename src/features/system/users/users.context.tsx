import { Context, ReactNode, createContext, useContext, useState } from "react";
import { UserTable } from "./components/users-filters/dtos/responses";

interface ProviderProps {
  children: ReactNode;
}

interface ContextProps {
  usersTable: UserTable[];
  setUsersTable: Function;
}

const contextEmpty: ContextProps = {
  usersTable: [],
  setUsersTable: () => {},
};

const UsersContext: Context<ContextProps> = createContext({ ...contextEmpty });

export const UsersProvider = ({ children }: ProviderProps) => {
  const [usersTable, setUsersTable] = useState<UserTable[]>([]);

  return (
    <UsersContext.Provider value={{ usersTable, setUsersTable }}>{children}</UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);

  if (!Boolean(context)) throw new Error("useUsersContext must be used within UsersProvider");

  return context;
};
