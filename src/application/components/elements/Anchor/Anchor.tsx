import { Link, LinkProps } from "react-router-dom";
import "./styles.css";

export interface AnchorProps extends LinkProps {
  type?: "text" | "button";
  isExternal?: boolean;
}

export const Anchor = ({
  children,
  type = "text",
  className,
  isExternal = false,
  ...props
}: AnchorProps) => {
  const classes = (type === "text" ? "anchor" : "anchor__button") + " " + className;

  return (
    <>
      {isExternal ? (
        <a className={classes} href={props.to.toString()} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link className={classes} {...props}>
          {children}
        </Link>
      )}
    </>
  );
};
