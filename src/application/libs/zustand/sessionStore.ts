import { get } from "utils/helpers/LocalStorageHelper";
import { create } from "zustand";

interface SessionStoreProps {
  name: string;
}

const sessionStorePropsEmpty: SessionStoreProps = {
  name: get("name"),
};

interface State {
  session: SessionStoreProps;
  setSession: (session: SessionStoreProps) => void;
  clearSession: () => void;
}

export const useSessionStore = create<State>()((set) => ({
  session: { ...sessionStorePropsEmpty },
  setSession: (newSession: SessionStoreProps) => {
    set({ session: newSession });
  },
  clearSession: () => {
    set({ session: { ...sessionStorePropsEmpty } });
  },
}));
