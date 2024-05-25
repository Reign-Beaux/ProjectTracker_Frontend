import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import SearchIcon from "@mui/icons-material/Search";
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
  add: <AddIcon />,
  addPerson: <PersonAddIcon />,
  addFolder: <CreateNewFolderIcon />,
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
  error: <ReportProblemIcon />,
  expandLess: <ExpandLess />,
  expandMore: <ExpandMore />,
  info: <InfoIcon />,
  loader: <CircularProgress size={24} />,
  menu: <MenuIcon />,
  inbox: <InboxIcon />,
  main: <MailIcon />,
  search: <SearchIcon />,
  success: <CheckCircleIcon />,
};

export const Icon = ({ type }: IconsProps) => {
  return IconsMapper[type];
};
