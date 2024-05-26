import { useUsersContext } from "../../usersContext";
import { useUserInsertUpdateForm } from "./hooks";

export const useUsersModalActionHandler = () => {
  const {
    state: {
      modalActionsSettings: { open, idUser },
    },
  } = useUsersContext();

  const submitUserInsertUpdateForm = async () => {

  }
  
  const userInsertUpdateForm = useUserInsertUpdateForm({ submitUserInsertUpdateForm });

  return {
    open,
    ...userInsertUpdateForm
  }
}