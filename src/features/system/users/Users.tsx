import { MainLayout } from "application/components/layouts";
import { UsersFilters, UsersTable } from "./components";

export const Users = () => {
  return (
    <MainLayout title="Users">
      <UsersFilters />
      <UsersTable />
    </MainLayout>
  );
};
