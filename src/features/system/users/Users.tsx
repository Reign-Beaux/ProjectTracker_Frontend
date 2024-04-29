import { MainLayout } from "application/components/layouts";
import { Filters, UserTable } from "./components";

export const Users = () => {
  return (
    <MainLayout title="Users">
      <Filters />
      <UserTable />
    </MainLayout>
  );
};
