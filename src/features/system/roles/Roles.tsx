import { MainLayout } from "application/components/layouts";
import { RolesFilters, RolesTable } from "./components";
import { RolesProvider } from "./rolesContext";

export const Roles = () => {
  return (
    <MainLayout title="Roles">
      <RolesProvider>
        <RolesFilters />
        <RolesTable />
      </RolesProvider>
    </MainLayout>
  );
};
