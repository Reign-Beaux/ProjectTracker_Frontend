import { BaseCatalog, baseCatalogEmpty } from "application/models";

export interface Role extends BaseCatalog {}

export const roleEmpty: Role = { ...baseCatalogEmpty };
