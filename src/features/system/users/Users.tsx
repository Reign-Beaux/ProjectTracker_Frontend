import { MainLayout } from "application/components/layouts";
import { UsersFilters, UsersTable } from "./components";
import { UsersProvider } from "./users.context";

export const Users = () => {
  return (
    <MainLayout title="Users">
      <UsersProvider>
        <UsersFilters />
        <UsersTable />
      </UsersProvider>
    </MainLayout>
  );
};
