import { Table } from "application/components/elements";
import { useUsersTableHandler } from "./usersTable.handler";

export const UsersTable = () => {
  const tableProps = useUsersTableHandler();
  return (
    <div>
      <Table {...tableProps} />
    </div>
  );
};
