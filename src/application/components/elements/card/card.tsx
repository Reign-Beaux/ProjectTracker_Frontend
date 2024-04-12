import { Card as MuiCard, CardProps as MuiCardProps } from "@mui/material";
import { useEffect, useState } from "react";
import "./styles.css";

interface CardProps extends MuiCardProps {}

export const Card = ({ children, className, ...rest }: CardProps) => {
  const [cardClass, setCardClass] = useState("card");

  useEffect(() => {
    if (Boolean(className)) {
      setCardClass(`card ${className}`);
    }
  }, []);

  return (
    <MuiCard className={cardClass} {...rest}>
      {children}
    </MuiCard>
  );
};
