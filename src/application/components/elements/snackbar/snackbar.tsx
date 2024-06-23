import { Alert, Box, Snackbar as MuiSnackbar } from "@mui/material";
import { useSnackbarStore } from "application/libs/zustand";

export const Snackbar = () => {
  const {
    props: { open, message, type },
    closeSnackbar,
  } = useSnackbarStore();

  return (
    <Box sx={{ width: 500 }}>
      <MuiSnackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={closeSnackbar}
        onClick={closeSnackbar}>
        <Alert variant="filled" severity={type}>
          {message}
        </Alert>
      </MuiSnackbar>
    </Box>
  );
};
