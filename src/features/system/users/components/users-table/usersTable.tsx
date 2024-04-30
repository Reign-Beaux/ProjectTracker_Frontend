import { Table } from "application/components/elements";
import { useUsersTableHandler } from "./usersTable.handler";

export const UsersTable = () => {
  const { columns } = useUsersTableHandler();
  return (
    <div>
      <Table dataSource={[]} columns={columns} />
    </div>
  );
};
