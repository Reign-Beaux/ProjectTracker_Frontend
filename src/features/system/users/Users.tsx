import { MainLayout } from "application/components/layouts";
import { UserModalActions, UsersFilters, UsersTable } from "./components";
import { UsersProvider } from "./usersContext";

export const Users = () => {
  return (
    <MainLayout title="Users">
      <UsersProvider>
        <UsersFilters />
        <UsersTable />
        <UserModalActions />
      </UsersProvider>
    </MainLayout>
  );
};
