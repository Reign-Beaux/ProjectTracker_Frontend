import "application/css/animations.css";
import "application/css/application.css";
import "application/css/rules.css";
import { router } from "application/settings/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
