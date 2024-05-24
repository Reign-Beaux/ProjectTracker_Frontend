import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { CircularProgress, styled } from "@mui/material";
import { ReactNode } from "react";

interface IconsProps {
  type: string;
}

const FakeCloseCircle = styled("div")`
  width: fit-content;
  transform: rotate(45deg);
`;

const IconsMapper: Record<string, ReactNode> = {
  arrowDown: <ArrowDownwardIcon />,
  arrowUp: <ArrowUpwardIcon />,
  chevronDown: <KeyboardArrowDownIcon />,
  chevronUp: <KeyboardArrowUpIcon />,
  close: <CloseIcon />,
  closeCircle: (
    <FakeCloseCircle>
      <AddCircleOutlineIcon />
    </FakeCloseCircle>
  ),
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
