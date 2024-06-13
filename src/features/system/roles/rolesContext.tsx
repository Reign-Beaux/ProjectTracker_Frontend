import { GridSortItem } from "@mui/x-data-grid";
import { PaginationModel, paginationDefault, sortDefault } from "application/components/elements";
import {
  Context,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Role, roleEmpty } from "./models";

interface ProviderProps {
  children: ReactNode;
}

export interface SettingsTable {
  isLoading: boolean;
  filters: Role;
  pagination: PaginationModel;
  sortBy: GridSortItem;
}

const settingsTableEmpty: SettingsTable = {
  isLoading: false,
  filters: roleEmpty,
  pagination: paginationDefault,
  sortBy: sortDefault("name"),
};

interface TableState {
  dataSource: Role[];
  settingsTable: SettingsTable;
}

const tableStateEmpty: TableState = {
  dataSource: [],
  settingsTable: { ...settingsTableEmpty },
};

interface ModalActions {
  open: boolean;
  idRole: number;
}

const modalActionsEmpty: ModalActions = {
  open: false,
  idRole: 0,
};

interface StateContext {
  tableState: TableState;
  setTableState: Dispatch<SetStateAction<TableState>>;
  modalActions: ModalActions;
  setModalActions: Dispatch<SetStateAction<ModalActions>>;
}

const stateContextEmpty: StateContext = {
  tableState: { ...tableStateEmpty },
  setTableState: () => {},
  modalActions: { ...modalActionsEmpty },
  setModalActions: () => {},
};

const RolesContext: Context<StateContext> = createContext({ ...stateContextEmpty });

export const RolesProvider = ({ children }: ProviderProps) => {
  const [tableState, setTableState] = useState({ ...tableStateEmpty });
  const [modalActions, setModalActions] = useState({ ...modalActionsEmpty });

  return (
    <RolesContext.Provider value={{ tableState, setTableState, modalActions, setModalActions }}>
      {children}
    </RolesContext.Provider>
  );
};

export const useRolesContext = () => {
  const context = useContext(RolesContext);

  if (!Boolean(context)) throw new Error("useRolesContext must be used within RolesProvider");

  return context;
};
