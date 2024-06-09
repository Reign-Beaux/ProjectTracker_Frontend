import { BaseCatalog, baseCatalogEmpty } from "application/models";

export interface Roles extends BaseCatalog {}

export const rolesEmpty: Roles = structuredClone(baseCatalogEmpty);
