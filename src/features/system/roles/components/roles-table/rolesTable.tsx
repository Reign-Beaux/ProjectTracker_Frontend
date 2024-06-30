import { Table } from "application/components/elements";
import { useRolesTableHandler } from "./rolesTableHandler";

export const RolesTable = () => {
  const tableProps = useRolesTableHandler();

  return (
    <div>
      <Table {...tableProps} />
    </div>
  );
};
