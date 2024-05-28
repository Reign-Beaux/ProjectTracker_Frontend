import { useEffect } from "react";
import { userInsertUpdateEmpty } from "../../dtos/requests";
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
    setState({ modalActionsSettings: { ...modalActionsSettings, open: false } } as StateProps);

  useEffect(() => {
    if (idUser !== null) getUser();
    else userInsertUpdateForm.setValues({ ...userInsertUpdateEmpty });
  }, [idUser]);

  useEffect(() => {
    if (!open) userInsertUpdateForm.resetForm();
  }, [open]);

  return {
    open,
    close,
    userInsertUpdateForm,
  };
};
