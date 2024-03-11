import { create } from "zustand";

interface SnackbarProps {
  open: boolean;
  message: string;
  type: "success" | "warning" | "error" | "info";
}

interface State {
  props: SnackbarProps;
  showSnackbarSuccess: (message: string) => void;
  showSnackbarError: (message: string) => void;
  showSnackbarWarning: (message: string) => void;
  showSnackbarInfo: (message: string) => void;
  closeModal: () => void;
}

const snackbarPropsEmpty: SnackbarProps = {
  open: false,
  message: "",
  type: "success",
};

export const useSnackbarStore = create<State>()((set) => ({
  props: { ...snackbarPropsEmpty },
  showSnackbarSuccess: (message: string) => {
    set({
      props: {
        open: true,
        message: message,
        type: "success",
      },
    });
  },
  showSnackbarError: (message: string) => {
    set({
      props: {
        open: true,
        message: message,
        type: "error",
      },
    });
  },
  showSnackbarWarning: (message: string) => {
    set({
      props: {
        open: true,
        message: message,
        type: "warning",
      },
    });
  },
  showSnackbarInfo: (message: string) => {
    set({
      props: {
        open: true,
        message: message,
        type: "info",
      },
    });
  },
  closeModal: () => {
    set({ props: { ...snackbarPropsEmpty } });
  },
}));
