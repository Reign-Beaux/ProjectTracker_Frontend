import { MainLayout } from "application/components/layouts";
import { ConfirmationProps, useConfirmationStore } from "application/settings/global-state";

export const Users = () => {
  const { initConfirmation } = useConfirmationStore();

  const openConfirmation = () => {
    const props: ConfirmationProps = {
      title: "Prueba de confirmation",
      message: "Esta es una prueba de confirmation",
      withDefaultButton: true,
      actions: [
        { label: "Action 1", type: "success", callback: () => alert("Action 1") },
        { label: "Action 2", type: "error", callback: () => alert("Action 2") },
        { label: "Action 3", type: "warning", callback: () => alert("Action 3") },
        { label: "Action 4", type: "info", callback: () => alert("Action 4") },
      ],
    };
    initConfirmation(props);
  };

  return (
    <MainLayout title="Users">
      <div className="filters-crud">
        <button onClick={openConfirmation}>Click 1</button>
      </div>
    </MainLayout>
  );
};
