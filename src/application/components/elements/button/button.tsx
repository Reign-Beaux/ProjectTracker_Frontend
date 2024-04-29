import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Icon } from "..";

interface ButtonProps extends MuiButtonProps {
  isLoading?: boolean;
}

export const Button = ({ children, isLoading, className, ...rest }: ButtonProps) => {
  const [buttonClass, setButtonClass] = useState("button");

  useEffect(() => {
    setButtonClass(`${Boolean(className) ? className : ""}`);
  }, []);

  return (
    <MuiButton variant="contained" className={buttonClass} {...rest}>
      {isLoading ? <Icon type="loader" /> : <>{children}</>}
    </MuiButton>
  );
};

interface IconButtonProps extends MuiIconButtonProps {}

export const IconButton = ({ children, ...props }: IconButtonProps) => {
  return <MuiIconButton {...props}>{children}</MuiIconButton>;
};
