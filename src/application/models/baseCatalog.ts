export interface BaseCatalog {
  id: number;
  code: string;
  name: string;
}

export const baseCatalogEmpty: BaseCatalog = {
  id: 0,
  code: "",
  name: "",
};
