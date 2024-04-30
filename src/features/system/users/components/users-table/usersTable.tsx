import { Table } from "application/components/elements";
import { useUsersTableHandler } from "./usersTable.handler";

export const UsersTable = () => {
  const { columns, usersTable } = useUsersTableHandler();
  return (
    <div>
      <Table dataSource={usersTable} columns={columns} />
    </div>
  );
};
