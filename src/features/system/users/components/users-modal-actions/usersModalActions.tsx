import { Dialog } from "application/components/elements";
import "./styles.css";
import { useUsersModalActionHandler } from "./usersModalActionsHander";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";

export const UserModalActions = () => {
  const { open } = useUsersModalActionHandler();

  return <Dialog open={open}>
    <DialogTitle>

    </DialogTitle>
    <DialogContent>

    </DialogContent>
    <DialogActions>
      
    </DialogActions>
  </Dialog>;
};
