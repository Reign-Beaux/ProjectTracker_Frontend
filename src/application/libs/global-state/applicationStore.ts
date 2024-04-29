import { create } from "zustand";

interface ApplicationProps {
  currentFeature: number;
}

interface State {
  props: ApplicationProps;
  setProps: (props: ApplicationProps) => void;
}

const applicationPropsEmpty: ApplicationProps = {
  currentFeature: 0,
};

export const useApplicationStore = create<State>((set) => ({
  props: applicationPropsEmpty,
  setProps: (props) => set((prev) => ({ ...prev, ...props })),
}));