import { Button } from "application/components/elements";
import { useConfirmationStore } from "application/settings/global-state";
import { Dialog } from "..";

export const Confirmation = () => {
  const {
    props: { isOpen, title, message, withDefaultButton, actions },
    closeConfirmation,
  } = useConfirmationStore();

  const handleAction = (callback: () => void) => {
    callback();
    closeConfirmation();
  };

  return (
    <Dialog open={isOpen}>
      <div className="confirmation__title">{title}</div>
      <div className="confirmation__content">{message}</div>
      <div className="confirmation__actions">
        {actions.map((action, index) => (
          <Button key={index} onClick={() => handleAction(action.callback)}>
            {action.label}
          </Button>
        ))}
        {withDefaultButton && <Button onClick={closeConfirmation}>Cerrar</Button>}
      </div>
    </Dialog>
  );
};
