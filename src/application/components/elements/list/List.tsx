import { Fragment, ReactNode, useState } from "react";
import "./styles.css";

interface ListProps {
  text: string;
  items: ReactNode[];
}

export const List = ({ text, items }: ListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="list" onClick={() => setIsOpen(!isOpen)}>
      <div className="list__text">{text}</div>
      {isOpen && (
        <div className="list__container">
          {items.map((item, index) => (
            <Fragment key={index}>{item}</Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
