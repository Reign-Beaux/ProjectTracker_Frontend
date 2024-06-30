import { useEffect } from "react";
import { Role } from "../../models";
import { useRolesContext } from "../../rolesContext";
import { useRolesService } from "../../rolesService";
import { useRolesModalActionsForm } from "./hooks";

export const useRolesModalActionsHandler = () => {
  const { modalActions, setTableState, setModalActions } = useRolesContext();
  const { getById, insertRecord, updateRecord } = useRolesService();

  const { open, idRole } = modalActions;

  const close = () => {
    setModalActions((prev) => ({ ...prev, open: false }));
  };

  const submitForm = async (values: Role) => {
    if (idRole === 0) await insertRecord(values);
    else await updateRecord(values);

    setTableState((prev) => ({ ...prev, isLoading: true }));
    close();
  };

  const formSettings = useRolesModalActionsForm({ onSubmit: submitForm });

  const getRole = async () => {
    const response = await getById(idRole);
    formSettings.setValues({ ...response });
  };

  useEffect(() => {
    if (open && idRole !== 0) getRole;
  }, [open]);

  return {
    open,
    close,
    formSettings,
  };
};
