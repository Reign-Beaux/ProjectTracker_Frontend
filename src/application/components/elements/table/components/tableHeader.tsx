import { Typography, styled } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { Icon } from "../../icon/icon";
import { GridSortItem } from "@mui/x-data-grid";

interface TableHeaderProps {
  field: string;
  text: string;
  currentColmunSort: string;
  setCurrentColmunSort: Dispatch<SetStateAction<string>>;
  changeSort: (newSort: GridSortItem) => void;
}

const HeaderStyle = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled("div")`
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TableHeader = ({
  field,
  text,
  currentColmunSort,
  setCurrentColmunSort,
  changeSort,
}: TableHeaderProps) => {
  const [sort, setSort] = useState<"desc" | "asc">("asc");

  const handleClickHeader = () => {
    if (currentColmunSort === field) {
      setSort((prev) => (prev === "desc" ? "asc" : "desc"));
      changeSort({ ...({ field, sort: sort === "desc" ? "asc" : "desc" } as GridSortItem) });
    } else {
      setCurrentColmunSort(field);
      setSort("asc");
      changeSort({ ...({ field, sort: "asc" } as GridSortItem) });
    }
  };

  return (
    <HeaderStyle onClick={handleClickHeader}>
      <TextContainer>
        <Typography style={{ userSelect: "none" }}>{text}</Typography>
      </TextContainer>
      {currentColmunSort === field && <Icon type={sort === "asc" ? "arrowDown" : "arrowUp"} />}
    </HeaderStyle>
  );
};
