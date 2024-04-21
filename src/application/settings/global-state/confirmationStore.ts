import { create } from "zustand";

interface ConfirmationAction {
  label: string;
  type: "success" | "error" | "info" | "warning";
  callback: () => void;
}

export interface ConfirmationProps {
  title: string;
  message: string;
  withDefaultButton: boolean;
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
