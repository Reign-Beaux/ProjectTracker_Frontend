import { CardProps as MuiCardProps, Card as MuiCard } from "@mui/material";

interface CardProps extends MuiCardProps {}

export const Card = ({ children }: CardProps) => {
  return <MuiCard sx={{ maxWidth: 345 }}>{children}</MuiCard>;
};
