import { Icon } from "components/elements";
import { useSnackbarStore } from "libs/zustand";
import { useEffect, useRef } from "react";
import "./styles.css";

export const Snackbar = () => {
  const {
    props: { open, message, type },
    closeModal,
  } = useSnackbarStore((state) => state);
  const timeoutRef = useRef<number | undefined>();

  const classSnackbar = `snackbar slide-in-right color-${type}`;

  const iconName: Record<string, string> = {
    error: "Error",
    warning: "Warning",
    info: "Info",
    success: "Check",
  };

  useEffect(() => {
    if (!open && timeoutRef.current !== undefined) {
      clearTimeout(timeoutRef.current);
    }

    if (open) {
      timeoutRef.current = window.setTimeout(() => {
        closeModal();
      }, 5000);
    }

    return () => {
      if (timeoutRef.current !== undefined) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open]);

  return (
    <>
      {open && (
        <div className={classSnackbar}>
          <Icon name={iconName[type]} style={{ marginRight: "10px" }} />
          {message}
          <Icon
            name="Close"
            onClick={() => closeModal()}
            style={{ marginLeft: "10px", cursor: "pointer" }}
          />
        </div>
      )}
    </>
  );
};
