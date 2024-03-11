import "css/animations.css";
import "css/application.css";
import "css/theme.css";
import { router } from "libs/react-router-dom";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <></>
    </>
  );
}

export default App;
