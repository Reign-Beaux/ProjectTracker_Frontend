import { create } from "zustand";

type SnackbarType = "success" | "warning" | "error" | "info";

interface SnackbarProps {
  open: boolean;
  message: string;
  type: SnackbarType;
}

interface State {
  props: SnackbarProps;
  showSnackbar: (message: string, type: SnackbarType) => void;
  closeModal: () => void;
}

const snackbarPropsEmpty: SnackbarProps = {
  open: false,
  message: "",
  type: "success",
};

export const useSnackbarStore = create<State>()((set) => ({
  props: { ...snackbarPropsEmpty },
  showSnackbar: (message: string, type: SnackbarType) => {
    set({
      props: {
        open: true,
        message: message,
        type: type,
      },
    });
  },
  closeModal: () => {
    set({ props: { ...snackbarPropsEmpty } });
  },
}));
