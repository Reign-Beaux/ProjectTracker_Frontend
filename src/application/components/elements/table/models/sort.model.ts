type SortDirection = "asc" | "desc";

export interface Sort {
  sortBy: string;
  sortDirection: SortDirection;
}