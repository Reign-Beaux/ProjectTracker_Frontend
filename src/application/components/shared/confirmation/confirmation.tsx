import { Typography, styled } from "@mui/material";
import { Button, Dialog, Icon } from "application/components/elements";
import { useConfirmationStore } from "application/libs/zustand";
import "./styles.css";

const ConfirmContent = styled("section")(({ color }) => ({
  display: "flex",
  borderTop: `8px solid var(${color})`,
  "& div div svg": {
    fontSize: "4rem !important",
    color: `var(${color})`,
  },
}));

export const Confirmation = () => {
  const {
    isOpen,
    props: { title, message, withDefaultButton, type, actions = [] },
    closeConfirmation,
  } = useConfirmationStore();

  const handleAction = (callback: () => void) => {
    callback();
    closeConfirmation();
  };

  return (
    <Dialog open={isOpen}>
      <ConfirmContent color={`--${type}`}>
        <div
          style={{
            minWidth: "7rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Icon type="closeCircle" />
        </div>
        <div style={{ padding: "1.5rem" }}>
          <Typography variant="h2" fontSize={"1.5rem"} marginBottom={"1rem"}>
            {title}
          </Typography>
          <Typography variant="body1">{message}</Typography>
        </div>
      </ConfirmContent>
      <footer className="confirmation__actions">
        {withDefaultButton && (
          <Button
            onClick={closeConfirmation}
            style={{ backgroundColor: "transparent", color: "black" }}>
            Cerrar
          </Button>
        )}
        {actions.map((action, index) => (
          <Button key={index} onClick={() => handleAction(action.callback)} color={action.type}>
            {action.label}
          </Button>
        ))}
      </footer>
    </Dialog>
  );
};
