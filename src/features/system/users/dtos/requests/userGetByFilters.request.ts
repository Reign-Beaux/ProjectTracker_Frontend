import { Pagination } from "application/components/elements/table/models";
import { UserFilter } from "../../components/users-filters/dtos/requests";
import { GridSortModel } from "@mui/x-data-grid";

export interface UserGetByFiltersRequest {
  usersFilter: UserFilter;
  pagination: Pagination;
  sort: GridSortModel;
}