import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { useEffect, useState } from "react";
import { Icon } from "..";

interface ButtonProps extends MuiButtonProps {
  isLoading?: boolean;
}

export const Button = ({ children, isLoading, className, ...rest }: ButtonProps) => {
  const [buttonClass, setButtonClass] = useState("button");
  console.log(buttonClass);
  useEffect(() => {
    setButtonClass(`${Boolean(className) ? className : ""}`);
  }, []);

  return (
    <MuiButton variant="contained" className={buttonClass} {...rest}>
      {isLoading ? <Icon type="loader" /> : <>{children}</>}
    </MuiButton>
  );
};
