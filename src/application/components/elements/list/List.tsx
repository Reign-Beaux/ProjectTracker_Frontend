import { Fragment, ReactNode, useState } from "react";
import "./styles.css";
import { Icon } from "..";

interface ListProps {
  text: string;
  items: ReactNode[];
}

export const List = ({ text, items }: ListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentIcont = isOpen ? "ChevronUp" : "ChevronDown";

  return (
    <div className="list" onClick={() => setIsOpen(!isOpen)}>
      <div className="list__text">
        {text} <Icon name={currentIcont} />
      </div>
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
