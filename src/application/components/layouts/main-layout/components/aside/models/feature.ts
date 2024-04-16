export interface Feature {
  name: string;
  path?: string;
  children: Feature[];
}