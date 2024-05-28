import { useEffect } from "react";
import { StateProps, useUsersContext } from "../../usersContext";
import { useUsersService } from "../../usersService";
import { useUserInsertUpdateForm } from "./hooks";

export const useUsersModalActionHandler = () => {
  const {
    state: {
      modalActionsSettings: { open, idUser },
      modalActionsSettings,
    },
    setState,
  } = useUsersContext();
  const { getRecordById } = useUsersService();

  const submitUserInsertUpdateForm = async () => {};

  const userInsertUpdateForm = useUserInsertUpdateForm({ submitUserInsertUpdateForm });

  const getUser = async () => {
    const response = await getRecordById(idUser!);
    userInsertUpdateForm.setValues({ ...response });
  };

  const close = () =>
    setState({
      modalActionsSettings: { ...modalActionsSettings, open: false, idUser: null },
    } as StateProps);

  useEffect(() => {
    if (open && idUser !== null) getUser();
    else userInsertUpdateForm.resetForm();
  }, [open]);

  return {
    open,
    close,
    userInsertUpdateForm,
  };
};
