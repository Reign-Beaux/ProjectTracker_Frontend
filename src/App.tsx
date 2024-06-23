import { Snackbar } from "application/components/elements";
import { Confirmation } from "application/components/shared";
import "application/css/animations.css";
import "application/css/application.css";
import "application/css/rules.css";
import "application/css/theme.css";
import { router } from "application/libs/react-router-dom";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Confirmation />
      <Snackbar />
    </>
  );
}

export default App;
