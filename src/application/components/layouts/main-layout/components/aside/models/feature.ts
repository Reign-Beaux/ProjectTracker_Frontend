export interface Feature {
  id: number;
  parentId?: number;
  name: string;
  path?: string;
  children: Feature[];
  isOpen: boolean;
  isSelected: boolean;
}
