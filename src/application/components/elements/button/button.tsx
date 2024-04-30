import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  IconButton as MuiIconButton,
} from "@mui/material";
import { ReactNode, Ref, forwardRef, useEffect, useState } from "react";
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

interface IconButtonProps {
  ariaLabel: string;
  typeIcon: string;
  onClick: () => void;
}

export const IconButton = forwardRef<HTMLDivElement, IconButtonProps>(function IconButton(
  { ariaLabel, typeIcon, onClick }: IconButtonProps,
  _: Ref<HTMLDivElement>
) {
  return (
    <MuiIconButton aria-label={ariaLabel} onClick={onClick}>
      <Icon type={typeIcon} />
    </MuiIconButton>
  );
});
