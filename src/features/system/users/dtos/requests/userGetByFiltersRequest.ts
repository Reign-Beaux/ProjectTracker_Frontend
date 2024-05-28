import { GridSortItem } from "@mui/x-data-grid";
import { PaginationModel } from "application/components/elements/table/models";
import { UserFilter } from "../../components/users-filters/dtos/requests";

export interface UserGetByFiltersRequest {
  loading: boolean;
  usersFilter: UserFilter;
  pagination: PaginationModel;
  sort: GridSortItem;
}