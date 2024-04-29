import { Feature } from "application/components/layouts/main-layout/components/aside/models";
import { create } from "zustand";

interface LayoutProps {
  features: Feature[]
}

interface State {
  props: LayoutProps;
  setFeatures: (features: Feature[]) => void;
  setProps: (props: LayoutProps) => void;
}

const features: Feature[] = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
    children: [],
    isOpen: false,
    isSelected: true,
  },
  {
    id: 2,
    name: "System",
    isOpen: false,
    isSelected: false,
    children: [
      {
        id: 3,
        parentId: 2,
        name: "Users",
        path: "/system/users",
        children: [],
        isOpen: false,
        isSelected: false,
      },
      {
        id: 4,
        parentId: 2,
        name: "Roles",
        path: "/system/roles",
        children: [],
        isOpen: false,
        isSelected: false,
      },
    ],
  },
];

const layoutPropsEmpty: LayoutProps = {
  features: [...features],
};

export const useLayoutStore = create<State>((set) => ({
  props: layoutPropsEmpty,
  setFeatures: (features) => set((prev) => ({ ...prev, features })),
  setProps: (props) => set((prev) => ({ ...prev, ...props })),
}));