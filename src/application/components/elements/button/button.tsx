import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

interface ButtonProps extends MuiButtonProps {
  isLoading?: boolean;
}

export const Button = ({ children, isLoading, ...rest }: ButtonProps) => {
  return (
    <MuiButton variant="contained" style={{ marginTop: "15px", width: "150px" }} {...rest}>
      {children}
    </MuiButton>
  );
};
