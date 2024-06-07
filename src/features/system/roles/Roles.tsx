import { MainLayout } from "application/components/layouts";
import { RolesProvider } from "./rolesContext";

export const Roles = () => {
  return (
    <MainLayout title="Roles">
      <RolesProvider>
        <h1>Roles</h1>
      </RolesProvider>
    </MainLayout>
  );
};
