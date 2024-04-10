import { Icon } from "application/components/elements";
import { useSnackbarStore } from "application/settings/global-state";
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
          <Icon name={iconName[type]} style={{ marginRight: "0.625rem" }} />
          {message}
          <Icon
            name="Close"
            onClick={() => closeModal()}
            style={{ marginLeft: "0.625rem", cursor: "pointer" }}
          />
        </div>
      )}
    </>
  );
};
