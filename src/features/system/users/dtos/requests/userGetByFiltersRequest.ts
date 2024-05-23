import { GridSortItem } from "@mui/x-data-grid";
import { PaginationModel } from "application/components/elements/table/models";
import { UserFilter } from "../../components/users-filters/dtos/requests";

export interface UserGetByFiltersRequest {
  usersFilter: UserFilter;
  pagination: PaginationModel;
  sort: GridSortItem;
}