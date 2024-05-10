import { Table } from "application/components/elements";
import { useUsersTableHandler } from "./usersTableHandler";

export const UsersTable = () => {
  const tableProps = useUsersTableHandler();
  return (
    <div>
      <Table {...tableProps} />
    </div>
  );
};
