import { MainLayout } from "application/components/layouts";
import { RolesFilters, RolesModalActions, RolesTable } from "./components";
import { RolesProvider } from "./rolesContext";

export const Roles = () => {
  return (
    <MainLayout title="Roles">
      <RolesProvider>
        <RolesFilters />
        <RolesTable />
        <RolesModalActions />
      </RolesProvider>
    </MainLayout>
  );
};
