import { Typography, styled } from "@mui/material";
import { useState } from "react";
import { Icon } from "../../icon/icon";

interface TableHeaderProps {
  text: string;
  selectedToSort: boolean;
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

export const TableHeader = ({ text, selectedToSort }: TableHeaderProps) => {
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  const toggleSort = () => {
    setSort((prevSort) => (prevSort === "desc" ? "asc" : "desc"));
  };

  return (
    <HeaderStyle onClick={toggleSort}>
      <TextContainer>
        <Typography style={{ userSelect: "none" }}>{text}</Typography>
      </TextContainer>
      {selectedToSort && <Icon type={sort === "desc" ? "arrowDown" : "arrowUp"} />}
    </HeaderStyle>
  );
};
