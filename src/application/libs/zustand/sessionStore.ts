import { LocalStorageKeys, localStorageGet } from "application/helpers";
import { create } from "zustand";

interface SessionStoreProps {
  tokenSession: string;
}

const sessionStorePropsEmpty: SessionStoreProps = {
  tokenSession: localStorageGet(LocalStorageKeys.TOKEN_SESSION),
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
