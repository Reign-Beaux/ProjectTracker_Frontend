import { useLayoutContext } from "../../context";
import "./styles.css";

export const Header = () => {
  const { setToggledSidenav } = useLayoutContext();

  return (
    <header className="layout__content__header">
      <button onClick={() => setToggledSidenav((prev) => !prev)}>Click!!</button>
      <h1>Header Working</h1>
    </header>
  );
};
