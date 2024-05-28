import { useEffect } from "react";
import { StateProps, useUsersContext } from "../../usersContext";
import { useUsersService } from "../../usersService";
import { useUserInsertUpdateForm } from "./hooks";
import { UserInsertUpdateRequest } from "../../dtos/requests";

export const useUsersModalActionHandler = () => {
  const {
    state: {
      modalActionsSettings: { open, idUser },
      modalActionsSettings,
    },
    setState,
  } = useUsersContext();
  const { getRecordById, insertRecord, updateRecord } = useUsersService();

  const submitUserInsertUpdateForm = async (values: UserInsertUpdateRequest) => {
    if (idUser === 0) await insertRecord(values);
    else await updateRecord(values);
    close();
  };

  const userInsertUpdateForm = useUserInsertUpdateForm({ submitUserInsertUpdateForm, idUser });

  const getUser = async () => {
    const response = await getRecordById(idUser!);
    userInsertUpdateForm.setValues({ ...response });
  };

  const close = () =>
    setState({
      modalActionsSettings: { ...modalActionsSettings, open: false, idUser: 0 },
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
