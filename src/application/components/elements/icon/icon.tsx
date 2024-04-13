import { CircularProgress } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ReactNode } from "react";

interface IconsProps {
  type: string;
}

const IconsMapper: Record<string, ReactNode> = {
  "loader": <CircularProgress size={24} />,
  "menu": <MenuIcon />
}

export const Icon = ({ type }: IconsProps) => {
  return IconsMapper[type];
}