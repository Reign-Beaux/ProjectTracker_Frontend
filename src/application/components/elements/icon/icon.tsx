import { CircularProgress } from "@mui/material";
import { ReactNode } from "react";

interface IconsProps {
  type: string;
}

const IconsMapper: Record<string, ReactNode> = {
  "loader": <CircularProgress size={24} />
}

export const Icon = ({ type }: IconsProps) => {
  return IconsMapper[type];
}