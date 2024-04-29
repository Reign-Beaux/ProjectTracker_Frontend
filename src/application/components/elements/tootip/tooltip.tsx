import { Tooltip as MuiTootip, TooltipProps as MuiTooltipProps } from "@mui/material";

interface TooltipProps extends MuiTooltipProps {}

export const Tooltip = ({ children, ...props }: TooltipProps) => {
  return <MuiTootip {...props}>{children}</MuiTootip>;
};
