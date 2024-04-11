import { Button as MaterialButton, ButtonProps as MaterialButtonProps } from "@mui/material";

interface ButtonProps extends MaterialButtonProps {
  isLoading?: boolean;
}

export const Button = ({ children, isLoading, ...rest }: ButtonProps) => {
  return (
    <MaterialButton variant="contained" style={{ marginTop: "15px", width: "150px" }} {...rest}>
      {children}
    </MaterialButton>
  );
};
