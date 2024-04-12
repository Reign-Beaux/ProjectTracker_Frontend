import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { useEffect, useState } from "react";

interface ButtonProps extends MuiButtonProps {
  isLoading?: boolean;
}

export const Button = ({ children, isLoading, className, ...rest }: ButtonProps) => {
  const [buttonClass, setButtonClass] = useState("button");

  useEffect(() => {
    if (Boolean(className)) {
      setButtonClass(`button ${className}`);
    }
  }, []);

  return (
    <MuiButton variant="contained" className={buttonClass} {...rest}>
      {children}
    </MuiButton>
  );
};
