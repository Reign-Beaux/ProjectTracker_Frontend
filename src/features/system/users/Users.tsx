import { MainLayout } from "application/components/layouts";
import { UsersFilters, UserTable } from "./components";

export const Users = () => {
  return (
    <MainLayout title="Users">
      <UsersFilters />
      <UserTable />
    </MainLayout>
  );
};
