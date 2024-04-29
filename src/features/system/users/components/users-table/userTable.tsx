import { Table } from "application/components/elements";
import { useUserTableHandler } from "./userTable.handler";

export const UserTable = () => {
  const { columns } = useUserTableHandler();
  return (
    <div>
      <Table dataSource={[]} columns={columns} />
    </div>
  );
};
