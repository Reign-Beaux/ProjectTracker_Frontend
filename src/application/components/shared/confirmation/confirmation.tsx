import { DialogContent, Typography } from "@mui/material";
import { Button, Dialog } from "application/components/elements";
import { useConfirmationStore } from "application/settings/global-state";
import "./styles.css";

export const Confirmation = () => {
  const {
    isOpen,
    props: { title, message, withDefaultButton, actions },
    closeConfirmation,
  } = useConfirmationStore();

  const handleAction = (callback: () => void) => {
    callback();
    closeConfirmation();
  };

  return (
    <Dialog open={isOpen}>
      <div className="confirmation__title color-blue-1">
        <Typography variant="h1" fontSize={"2rem"}>
          {title}
        </Typography>
      </div>
      <DialogContent dividers>
        <Typography variant="body1">{message}</Typography>
      </DialogContent>
      <div className="confirmation__actions">
        {actions.map((action, index) => (
          <Button key={index} onClick={() => handleAction(action.callback)} color={action.type}>
            {action.label}
          </Button>
        ))}
        {withDefaultButton && (
          <Button onClick={closeConfirmation} color="error">
            Cerrar
          </Button>
        )}
      </div>
    </Dialog>
  );
};
