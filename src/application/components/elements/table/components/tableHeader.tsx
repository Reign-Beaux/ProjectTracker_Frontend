import { Typography } from "@mui/material";

interface TableHeaderProps {
  text: string;
}

export const TableHeader = ({ text }: TableHeaderProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "red"
      }}>
      <Typography>{text}</Typography>
    </div>
  );
};
