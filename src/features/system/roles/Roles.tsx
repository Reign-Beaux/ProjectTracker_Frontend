import { MainLayout } from "application/components/layouts";
import { RolesProvider } from "./rolesContext";
import { RolesFilters } from "./components/roles-filters/rolesFilters";

export const Roles = () => {
  return (
    <MainLayout title="Roles">
      <RolesProvider>
        <RolesFilters />
      </RolesProvider>
    </MainLayout>
  );
};
