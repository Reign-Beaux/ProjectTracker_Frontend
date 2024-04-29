import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SearchIcon from '@mui/icons-material/Search';
import { CircularProgress } from "@mui/material";
import { ReactNode } from "react";

interface IconsProps {
  type: string;
}

const IconsMapper: Record<string, ReactNode> = {
  delete: <DeleteIcon />,
  edit: <EditIcon />,
  expandLess: <ExpandLess />,
  expandMore: <ExpandMore />,
  loader: <CircularProgress size={24} />,
  menu: <MenuIcon />,
  inbox: <InboxIcon />,
  main: <MailIcon />,
  search: <SearchIcon />,
};

export const Icon = ({ type }: IconsProps) => {
  return IconsMapper[type];
};
