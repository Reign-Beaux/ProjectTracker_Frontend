import { create } from "zustand";

type TypeInformation = "success" | "error" | "info" | "warning";

interface ConfirmationAction {
  label: string;
  type: TypeInformation;
  callback: () => void;
}

export interface ConfirmationProps {
  title: string;
  message: string;
  withDefaultButton: boolean;
  type: TypeInformation;
  actions: ConfirmationAction[];
}

interface State {
  isOpen: boolean;
  props: ConfirmationProps;
  initConfirmation: (props: ConfirmationProps) => void;
  closeConfirmation: () => void;
}

const confirmationPropsEmpty: ConfirmationProps = {
  title: "",
  message: "",
  withDefaultButton: true,
  type: "success",
  actions: [],
};

export const useConfirmationStore = create<State>((set) => ({
  isOpen: false,
  props: { ...confirmationPropsEmpty },
  initConfirmation: (props: ConfirmationProps) => {
    set((prev) => ({ ...prev, isOpen: true, props: { ...props } }));
  },
  closeConfirmation: () => {
    set((prev) => ({ ...prev, isOpen: false, props: { ...confirmationPropsEmpty } }));
  },
}));
