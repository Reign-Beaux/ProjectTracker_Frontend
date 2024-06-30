import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Button, Dialog, Input } from "application/components/elements";
import { useRolesModalActionsHandler } from "./rolesModalActionsHandler";
import "./styles.css";

export const RolesModalActions = () => {
  const { open, close, formSettings } = useRolesModalActionsHandler();

  return (
    <Dialog open={open}>
      <DialogTitle>Modal del acciones</DialogTitle>
      <form onSubmit={formSettings.handleSubmit}>
        <DialogContent dividers>
          <Input inputKey="code" inputText="Código" formSettings={formSettings} />
          <Input inputKey="name" inputText="Nombre" formSettings={formSettings} />
        </DialogContent>
        <DialogActions style={{ padding: "1rem", backgroundColor: "hsl(0, 0%, 90%)" }}>
          <Button
            type="button"
            onClick={close}
            style={{ backgroundColor: "transparent", color: "black" }}>
            Cerrar
          </Button>
          <Button type="submit">Enviar</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
