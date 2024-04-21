import { create } from "zustand";

interface ConfirmationAction {
  label: string;
  type: "success" | "error" | "info" | "warnign";
  callback: () => void;
}

interface ConfirmationProps {
  isOpen: boolean;
  title: string;
  message: string;
  withDefaultButton: boolean
  actions: ConfirmationAction[];
}

interface State {
  props: ConfirmationProps;
  initConfirmation: (props: ConfirmationProps) => void;
  closeConfirmation: () => void;
}

const confirmationPropsEmpty: ConfirmationProps = {
  isOpen: false,
  title: "",
  message: "",
  withDefaultButton: true,
  actions: [],
};

export const useConfirmationStore = create<State>((set) => ({
  props: confirmationPropsEmpty,
  initConfirmation: (props) => set((prev) => ({ ...prev, ...props })),
  closeConfirmation: () => set((prev) => ({ ...prev, props: confirmationPropsEmpty })),
}));
