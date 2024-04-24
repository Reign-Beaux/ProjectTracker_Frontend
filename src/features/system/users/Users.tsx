import { MainLayout } from "application/components/layouts";
import { Filters } from "./components";

export const Users = () => {
  return (
    <MainLayout title="Users">
      <Filters />
      <div className="table-container"></div>
    </MainLayout>
  );
};
