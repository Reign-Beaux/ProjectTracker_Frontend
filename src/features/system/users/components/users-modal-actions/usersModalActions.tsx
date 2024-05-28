import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Button, Dialog, Input } from "application/components/elements";
import "./styles.css";
import { useUsersModalActionHandler } from "./usersModalActionsHandler";

export const UserModalActions = () => {
  const { open, close, userInsertUpdateForm } = useUsersModalActionHandler();

  return (
    <Dialog open={open}>
      <DialogTitle>Modal del acciones</DialogTitle>
      <form onSubmit={userInsertUpdateForm.handleSubmit}>
        <DialogContent dividers>
          <Input inputKey="name" inputText="Nombre" formSettings={userInsertUpdateForm} />
          <Input
            inputKey="paternalLastname"
            inputText="Apellido Paterno"
            formSettings={userInsertUpdateForm}
          />
          <Input
            inputKey="maternalLastname"
            inputText="Apellido Materno"
            formSettings={userInsertUpdateForm}
          />
          <Input inputKey="email" inputText="Email" formSettings={userInsertUpdateForm} />
          <Input inputKey="password" inputText="Contraseña" formSettings={userInsertUpdateForm} />
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
