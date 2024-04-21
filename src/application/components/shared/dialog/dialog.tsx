import { Dialog as MuiDialog, DialogProps as MuiDialogProps, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";

interface DialogProps extends MuiDialogProps {}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const Dialog = ({ children, ...rest }: DialogProps) => {
  return (
    <MuiDialog fullWidth TransitionComponent={Transition} {...rest}>
      {children}
    </MuiDialog>
  );
};
